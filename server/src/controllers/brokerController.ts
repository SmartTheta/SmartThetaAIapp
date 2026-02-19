import { Request, Response } from 'express';
import { Types } from 'mongoose';
import BrokerAccount from '../models/BrokerAccount';
import { zerodhaAutoLogin, getKiteForUser, placeStockOrder } from '../services/zerodhaService';

// ─── Save / Update Broker Credentials ────────────────────────────────────────

/**
 * POST /api/broker/connect
 * Save Zerodha credentials for a user and perform initial login test.
 */
export const connectBroker = async (req: Request, res: Response) => {
    try {
        const { userId, apiKey, apiSecret, zerodhaUserId, password, totpKey } = req.body;

        if (!userId || !apiKey || !apiSecret || !zerodhaUserId || !password || !totpKey) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Test login before saving
        const loginResult = await zerodhaAutoLogin({ apiKey, apiSecret, zerodhaUserId, password, totpKey });

        if (!loginResult.success) {
            return res.status(401).json({
                error: 'Broker login failed',
                details: loginResult.error
            });
        }

        // Upsert broker account in MongoDB
        const brokerAccount = await BrokerAccount.findOneAndUpdate(
            { userId: new Types.ObjectId(userId) },
            {
                userId: new Types.ObjectId(userId),
                broker: 'zerodha',
                apiKey,
                apiSecret,
                zerodhaUserId,
                password,
                totpKey,
                accessToken: loginResult.accessToken,
                isLoggedIn: true,
                lastLoginTime: new Date()
            },
            { upsert: true, new: true }
        );

        return res.json({
            success: true,
            message: 'Zerodha account connected successfully',
            broker: brokerAccount.toJSON()
        });

    } catch (error: any) {
        console.error('Error connecting broker:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

// ─── Get Broker Status ────────────────────────────────────────────────────────

/**
 * GET /api/broker/status/:userId
 * Returns whether the user has a connected broker and login status.
 */
export const getBrokerStatus = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const account = await BrokerAccount.findOne({ userId: new Types.ObjectId(userId) });

        if (!account) {
            return res.json({ connected: false });
        }

        const hoursSinceLogin = account.lastLoginTime
            ? (Date.now() - account.lastLoginTime.getTime()) / (1000 * 60 * 60)
            : 999;

        return res.json({
            connected: true,
            broker: 'zerodha',
            zerodhaUserId: account.zerodhaUserId,
            isLoggedIn: account.isLoggedIn && hoursSinceLogin < 20,
            lastLoginTime: account.lastLoginTime
        });

    } catch (error: any) {
        console.error('Error getting broker status:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// ─── Manual Re-Login ──────────────────────────────────────────────────────────

/**
 * POST /api/broker/login/:userId
 * Force a fresh Zerodha login and refresh the access token.
 */
export const loginBroker = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const account = await BrokerAccount.findOne({ userId: new Types.ObjectId(userId) });

        if (!account) {
            return res.status(404).json({ error: 'No broker account found for this user' });
        }

        const result = await zerodhaAutoLogin({
            apiKey: account.apiKey,
            apiSecret: account.apiSecret,
            zerodhaUserId: account.zerodhaUserId,
            password: account.password,
            totpKey: account.totpKey
        });

        if (!result.success) {
            account.isLoggedIn = false;
            await account.save();
            return res.status(401).json({ error: result.error });
        }

        account.accessToken = result.accessToken!;
        account.isLoggedIn = true;
        account.lastLoginTime = new Date();
        await account.save();

        return res.json({ success: true, message: 'Logged in to Zerodha successfully' });

    } catch (error: any) {
        console.error('Error logging in broker:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// ─── Place Order ──────────────────────────────────────────────────────────────

/**
 * POST /api/broker/order
 * Place a stock market order via Zerodha.
 * Body: { userId, symbol, quantity, txnType: 'BUY' | 'SELL' }
 */
export const placeOrder = async (req: Request, res: Response) => {
    try {
        const { userId, symbol, quantity, txnType } = req.body;

        if (!userId || !symbol || !quantity || !txnType) {
            return res.status(400).json({ error: 'userId, symbol, quantity, txnType are required' });
        }

        if (!['BUY', 'SELL'].includes(txnType)) {
            return res.status(400).json({ error: 'txnType must be BUY or SELL' });
        }

        const session = await getKiteForUser(userId);
        if (!session) {
            return res.status(401).json({ error: 'Broker not connected or login failed. Please reconnect.' });
        }

        const result = await placeStockOrder(session.kite, symbol, Number(quantity), txnType);

        return res.json(result);

    } catch (error: any) {
        console.error('Error placing order:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

// ─── Place Multiple Orders (Batch) ────────────────────────────────────────────

/**
 * POST /api/broker/orders/batch
 * Place multiple stock orders at once (for portfolio execution).
 * Body: { userId, orders: [{ symbol, quantity, txnType }] }
 */
export const placeBatchOrders = async (req: Request, res: Response) => {
    try {
        const { userId, orders } = req.body;

        if (!userId || !orders || !Array.isArray(orders) || orders.length === 0) {
            return res.status(400).json({ error: 'userId and orders array are required' });
        }

        const session = await getKiteForUser(userId);
        if (!session) {
            return res.status(401).json({ error: 'Broker not connected or login failed. Please reconnect.' });
        }

        const results = [];
        for (const order of orders) {
            const { symbol, quantity, txnType } = order;
            if (!symbol || !quantity || !txnType) {
                results.push({ symbol, success: false, message: 'Missing fields' });
                continue;
            }

            const result = await placeStockOrder(session.kite, symbol, Number(quantity), txnType);
            results.push({ symbol, ...result });

            // Small delay between orders to avoid rate limiting
            await new Promise(r => setTimeout(r, 300));
        }

        const successful = results.filter(r => r.success).length;
        const failed = results.filter(r => !r.success).length;

        return res.json({
            summary: { total: results.length, successful, failed },
            results
        });

    } catch (error: any) {
        console.error('Error placing batch orders:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

// ─── Disconnect Broker ────────────────────────────────────────────────────────

/**
 * DELETE /api/broker/:userId
 * Remove broker account for a user.
 */
export const disconnectBroker = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        await BrokerAccount.findOneAndDelete({ userId: new Types.ObjectId(userId) });
        return res.json({ success: true, message: 'Broker account disconnected' });
    } catch (error: any) {
        console.error('Error disconnecting broker:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
