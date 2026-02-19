import axios, { AxiosInstance } from 'axios';
import * as speakeasy from 'speakeasy';
import { parse as parseUrl } from 'url';
import { Types } from 'mongoose';
import BrokerAccount, { IBrokerAccount } from '../models/BrokerAccount';

// Use require for kiteconnect to avoid TS type conflicts
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { KiteConnect } = require('kiteconnect');

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ZerodhaCredentials {
    apiKey: string;
    apiSecret: string;
    zerodhaUserId: string;
    password: string;
    totpKey: string;
}

export interface LoginResult {
    success: boolean;
    accessToken?: string;
    error?: string;
}

export interface OrderResult {
    success: boolean;
    orderId?: string;
    status?: string;
    message: string;
}

// ─── Zerodha Auto-Login ───────────────────────────────────────────────────────

/**
 * Performs automated Zerodha login using credentials + TOTP.
 * Mirrors the Python zerodha_auto_login_child() function exactly.
 *
 * Flow:
 *  1. POST /api/login → get request_id
 *  2. POST /api/twofa → authenticate with TOTP
 *  3. GET kite.trade/connect/login → follow redirect → extract request_token
 *  4. generateSession(request_token) → get access_token
 */
export async function zerodhaAutoLogin(credentials: ZerodhaCredentials): Promise<LoginResult> {
    // Create a session that persists cookies across requests (like Python requests.Session)
    const cookieJar: Record<string, string> = {};

    const session: AxiosInstance = axios.create({
        maxRedirects: 10,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    });

    // Cookie interceptor to persist cookies between requests
    session.interceptors.response.use(response => {
        const setCookie = response.headers['set-cookie'];
        if (setCookie) {
            setCookie.forEach((cookie: string) => {
                const [pair] = cookie.split(';');
                const [key, val] = pair.split('=');
                if (key && val) cookieJar[key.trim()] = val.trim();
            });
        }
        return response;
    });

    session.interceptors.request.use(config => {
        const cookieStr = Object.entries(cookieJar).map(([k, v]) => `${k}=${v}`).join('; ');
        if (cookieStr) config.headers['Cookie'] = cookieStr;
        return config;
    });

    try {
        // ── Step 1: Initial login ──────────────────────────────────────────
        const loginResponse = await session.post(
            'https://kite.zerodha.com/api/login',
            new URLSearchParams({
                user_id: credentials.zerodhaUserId,
                password: credentials.password
            }).toString()
        );

        const loginData = loginResponse.data;
        if (!loginData?.data?.request_id) {
            throw new Error(`Login failed: ${loginData?.message || 'request_id not received'}`);
        }

        const requestId: string = loginData.data.request_id;

        // ── Step 2: 2FA with TOTP ──────────────────────────────────────────
        // speakeasy.totp() is synchronous and returns a 6-digit string
        const totpValue: string = speakeasy.totp({
            secret: credentials.totpKey,
            encoding: 'base32'
        });

        const twoFaResponse = await session.post(
            'https://kite.zerodha.com/api/twofa',
            new URLSearchParams({
                user_id: credentials.zerodhaUserId,
                request_id: requestId,
                twofa_value: totpValue,
                twofa_type: 'totp'
            }).toString()
        );

        if (twoFaResponse.status !== 200) {
            throw new Error('2FA authentication failed');
        }

        // ── Step 3: Get request_token from redirect ────────────────────────
        const loginUrl = `https://kite.trade/connect/login?v=3&api_key=${credentials.apiKey}&skip_session=true`;

        let requestToken: string | null = null;

        try {
            await session.get(loginUrl, {
                maxRedirects: 0,
                validateStatus: (status) => status < 400
            });
        } catch (redirectErr: any) {
            // Axios throws on redirect when maxRedirects=0; extract from location header
            const location: string = redirectErr?.response?.headers?.location || '';
            if (location) {
                const parsed = parseUrl(location, true);
                requestToken = parsed.query?.request_token as string || null;
            }
        }

        // Fallback: follow redirects and check final URL
        if (!requestToken) {
            const redirectResponse = await session.get(loginUrl, {
                maxRedirects: 10,
                validateStatus: () => true
            });
            const finalUrl: string =
                (redirectResponse.request as any)?.res?.responseUrl ||
                redirectResponse.headers?.location || '';
            const parsed = parseUrl(finalUrl, true);
            requestToken = parsed.query?.request_token as string || null;
        }

        if (!requestToken) {
            throw new Error('Could not extract request_token from Zerodha redirect. Check your API key and redirect URL settings.');
        }

        // ── Step 4: Generate session → access_token ────────────────────────
        const kite = new KiteConnect({ api_key: credentials.apiKey });
        const sessionData = await kite.generateSession(requestToken, credentials.apiSecret);
        const accessToken: string = sessionData.access_token;

        if (!accessToken) {
            throw new Error('access_token not received from Zerodha');
        }

        return { success: true, accessToken };

    } catch (error: any) {
        const message =
            error?.response?.data?.message ||
            error?.response?.data?.error ||
            error?.message ||
            'Unknown error';
        console.error('[ZerodhaService] Login failed:', message);
        return { success: false, error: `Zerodha login failed: ${message}` };
    }
}

// ─── Place Stock Order ────────────────────────────────────────────────────────

/**
 * Places a CNC (delivery) MARKET order for stocks on NSE.
 *
 * Adapted from Python place_zerodha_order():
 *  - Changed exchange: NFO → NSE  (stocks, not F&O)
 *  - Changed product:  NRML → CNC (delivery, not intraday margin)
 *  - Order type: MARKET (same as Python)
 *
 * @param kite      Authenticated KiteConnect instance (any to avoid TS conflicts)
 * @param symbol    NSE trading symbol e.g. 'INFY', 'RELIANCE'
 * @param quantity  Number of shares
 * @param txnType   'BUY' or 'SELL'
 */
export async function placeStockOrder(
    kite: any,
    symbol: string,
    quantity: number,
    txnType: 'BUY' | 'SELL'
): Promise<OrderResult> {
    try {
        const orderParams = {
            variety: kite.VARIETY_REGULAR,
            tradingsymbol: symbol.toUpperCase(),
            exchange: kite.EXCHANGE_NSE,           // NSE for stocks
            transaction_type: txnType === 'BUY'
                ? kite.TRANSACTION_TYPE_BUY
                : kite.TRANSACTION_TYPE_SELL,
            quantity: quantity,
            product: kite.PRODUCT_CNC,            // CNC = delivery (stocks)
            order_type: kite.ORDER_TYPE_MARKET,      // Market order
            validity: kite.VALIDITY_DAY
        };

        const orderId: string = await kite.placeOrder(kite.VARIETY_REGULAR, orderParams);

        if (!orderId) {
            return { success: false, message: `Failed to place order for ${symbol}` };
        }

        // Fetch order status
        const orderHistory: any[] = await kite.getOrderHistory(orderId);
        const latest = orderHistory?.[orderHistory.length - 1];

        const status = latest?.status || 'UNKNOWN';
        const rejectReason = latest?.status_message || 'N/A';

        return {
            success: !['REJECTED', 'CANCELLED'].includes(status),
            orderId,
            status,
            message: `${txnType} ${quantity} × ${symbol} | Status: ${status}` +
                (rejectReason !== 'N/A' ? ` | Reason: ${rejectReason}` : '')
        };

    } catch (error: any) {
        const msg = error?.message || 'Unknown error';
        return { success: false, message: `Error placing order for ${symbol}: ${msg}` };
    }
}

// ─── Session Manager ──────────────────────────────────────────────────────────

/**
 * Gets an authenticated KiteConnect instance for a user.
 * Loads credentials from MongoDB, re-logs in if token is stale (>20h old).
 */
export async function getKiteForUser(userId: string): Promise<{ kite: any; account: IBrokerAccount } | null> {
    const account = await BrokerAccount.findOne({ userId: new Types.ObjectId(userId) });
    if (!account) return null;

    const kite = new KiteConnect({ api_key: account.apiKey });

    // Re-use existing token if logged in recently (Zerodha tokens last ~1 day)
    if (account.isLoggedIn && account.accessToken && account.lastLoginTime) {
        const hoursSinceLogin = (Date.now() - account.lastLoginTime.getTime()) / (1000 * 60 * 60);
        if (hoursSinceLogin < 20) {
            kite.setAccessToken(account.accessToken);
            return { kite, account };
        }
    }

    // Token expired or missing — re-login automatically
    const result = await zerodhaAutoLogin({
        apiKey: account.apiKey,
        apiSecret: account.apiSecret,
        zerodhaUserId: account.zerodhaUserId,
        password: account.password,
        totpKey: account.totpKey
    });

    if (!result.success || !result.accessToken) {
        console.error('[ZerodhaService] Auto re-login failed:', result.error);
        return null;
    }

    // Persist refreshed token
    account.accessToken = result.accessToken;
    account.isLoggedIn = true;
    account.lastLoginTime = new Date();
    await account.save();

    kite.setAccessToken(result.accessToken);
    return { kite, account };
}
