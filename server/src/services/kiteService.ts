import { KiteConnect } from 'kiteconnect';
import dotenv from 'dotenv';

dotenv.config();

export class KiteService {
    private kite: any;
    private apiKey: string;
    private apiSecret: string;
    private accessToken: string | null = null;

    constructor() {
        this.apiKey = process.env.KITE_API_KEY || '';
        this.apiSecret = process.env.KITE_API_SECRET || '';

        if (this.apiKey) {
            this.kite = new KiteConnect({
                api_key: this.apiKey
            });
        }

        // Initialize access token if available in env
        if (process.env.KITE_ACCESS_TOKEN) {
            this.setAccessToken(process.env.KITE_ACCESS_TOKEN);
        }
    }

    /**
     * Initialize the session using request token
     * This needs to be called after the user logs in and gets a request token
     */
    public async generateSession(requestToken: string): Promise<string> {
        if (!this.kite || !this.apiSecret) {
            throw new Error('Kite Connect not configured. Missing API Key or Secret.');
        }

        try {
            const response = await this.kite.generateSession(requestToken, this.apiSecret);
            this.accessToken = response.access_token;
            this.kite.setAccessToken(this.accessToken);
            return this.accessToken as string;
        } catch (error) {
            console.error('Error generating Kite session:', error);
            throw error;
        }
    }

    /**
     * Set access token manually (if already available)
     */
    public setAccessToken(token: string) {
        if (this.kite) {
            this.accessToken = token;
            this.kite.setAccessToken(token);
        }
    }

    /**
     * Get real-time quotes for instruments
     * @param instruments Array of instrument tokens or trading symbols (e.g., ['NSE:INFY', 'NSE:SBIN'])
     */
    public async getQuotes(instruments: string[]): Promise<any> {
        if (!this.kite || !this.accessToken) {
            console.warn('Kite Connect not initialized or access token missing. Returning empty data.');
            return {};
        }

        try {
            const quotes = await this.kite.getQuote(instruments);
            return quotes;
        } catch (error) {
            console.error('Error fetching Kite quotes:', error);
            throw error;
        }
    }

    /**
     * Get LTP (Last Traded Price) for instruments
     */
    public async getLTP(instruments: string[]): Promise<any> {
        if (!this.kite || !this.accessToken) {
            console.warn('Kite Connect not initialized or access token missing. Returning empty data.');
            return {};
        }

        try {
            const ltp = await this.kite.getLTP(instruments);
            return ltp;
        } catch (error) {
            console.error('Error fetching Kite LTP:', error);
            throw error;
        }
    }
    // Nifty 50 Stocks for Scanner
    private readonly nifty50 = [
        'NSE:RELIANCE', 'NSE:TCS', 'NSE:HDFCBANK', 'NSE:INFY', 'NSE:HINDUNILVR',
        'NSE:ICICIBANK', 'NSE:KOTAKBANK', 'NSE:SBIN', 'NSE:BHARTIARTL', 'NSE:ITC',
        'NSE:AXISBANK', 'NSE:LT', 'NSE:ASIANPAINT', 'NSE:MARUTI', 'NSE:BAJFINANCE',
        'NSE:HCLTECH', 'NSE:WIPRO', 'NSE:ULTRACEMCO', 'NSE:TITAN', 'NSE:NESTLEIND',
        'NSE:SUNPHARMA', 'NSE:TATAMOTORS', 'NSE:TATASTEEL', 'NSE:POWERGRID', 'NSE:NTPC',
        'NSE:M&M', 'NSE:JSWSTEEL', 'NSE:ADANIENT', 'NSE:ADANIPORTS', 'NSE:COALINDIA',
        'NSE:ONGC', 'NSE:GRASIM', 'NSE:HDFCLIFE', 'NSE:BAJAJFINSV', 'NSE:DRREDDY',
        'NSE:BRITANNIA', 'NSE:CIPLA', 'NSE:INDUSINDBK', 'NSE:EICHERMOT', 'NSE:DIVISLAB',
        'NSE:BPCL', 'NSE:TATACONSUM', 'NSE:SBILIFE', 'NSE:APOLLOHOSP', 'NSE:UPL',
        'NSE:HEROMOTOCO', 'NSE:HINDALCO', 'NSE:TECHM', 'NSE:LTIM', 'NSE:WIPRO'
    ];

    /**
     * Get Market Data for Nifty 50
     */
    public async getMarketData(): Promise<any[]> {
        if (!this.kite || !this.accessToken) {
            console.warn('Kite Connect not initialized. Returning empty data.');
            return [];
        }

        try {
            const quotes = await this.kite.getQuote(this.nifty50);

            return Object.entries(quotes).map(([symbol, data]: [string, any]) => {
                const lastPrice = data.last_price;
                const ohlc = data.ohlc;
                const closePrice = ohlc.close; // Previous close
                const change = lastPrice - closePrice;
                const changePercent = (change / closePrice) * 100;

                return {
                    symbol: symbol.replace('NSE:', ''),
                    name: symbol.replace('NSE:', ''),
                    price: lastPrice,
                    change: change,
                    changePercent: changePercent,
                    volume: data.volume,
                    timestamp: data.timestamp
                };
            });
        } catch (error) {
            console.error('Error fetching market data from Kite:', error);
            throw error;
        }
    }

    /**
     * Get Top Gainers
     */
    public async getTopGainers(limit: number = 10): Promise<any[]> {
        const data = await this.getMarketData();
        return data
            .filter(stock => stock.changePercent > 0)
            .sort((a, b) => b.changePercent - a.changePercent)
            .slice(0, limit);
    }

    /**
     * Get Top Losers
     */
    public async getTopLosers(limit: number = 10): Promise<any[]> {
        const data = await this.getMarketData();
        return data
            .filter(stock => stock.changePercent < 0)
            .sort((a, b) => a.changePercent - b.changePercent)
            .slice(0, limit);
    }

    /**
     * Get Most Active (by Volume)
     */
    public async getMostActive(limit: number = 10): Promise<any[]> {
        const data = await this.getMarketData();
        return data
            .sort((a, b) => b.volume - a.volume)
            .slice(0, limit);
    }

    /**
     * Search for instruments (Local search against Nifty 50 for now)
     */
    public async searchInstruments(query: string): Promise<any[]> {
        const normalizedQuery = query.toLowerCase();

        // Filter from our predefined list
        const matches = this.nifty50.filter(symbol =>
            symbol.toLowerCase().includes(normalizedQuery) ||
            symbol.replace('NSE:', '').toLowerCase().includes(normalizedQuery)
        );

        if (matches.length === 0) return [];

        // Fetch current price for matches
        try {
            const quotes = await this.getQuotes(matches);
            return Object.entries(quotes).map(([symbol, data]: [string, any]) => ({
                symbol: symbol.replace('NSE:', ''),
                name: symbol.replace('NSE:', ''),
                price: data.last_price,
                change: data.last_price - data.ohlc.close,
                changePercent: ((data.last_price - data.ohlc.close) / data.ohlc.close) * 100,
                volume: data.volume
            }));
        } catch (error) {
            console.error('Error searching instruments:', error);
            return [];
        }
    }

    /**
     * Get Historical Data
     * Note: Kite Historical API requires specific instrument tokens, not trading symbols.
     * We need to fetch the instrument token first or map it.
     * For this implementation, we'll try to find the token from the quote first.
     */
    public async getHistoricalData(symbol: string, interval: string, from: Date, to: Date): Promise<any[]> {
        if (!this.kite || !this.accessToken) {
            console.warn('Kite Connect not initialized. Returning empty history.');
            return [];
        }

        try {
            // 1. Get instrument token
            const fullSymbol = symbol.includes(':') ? symbol : `NSE:${symbol}`;
            const quote = await this.kite.getQuote([fullSymbol]);
            const instrumentToken = quote[fullSymbol]?.instrument_token;

            if (!instrumentToken) {
                throw new Error(`Instrument token not found for ${symbol}`);
            }

            // 2. Fetch history
            // Map interval to Kite format: minute, day, 3minute, 5minute...
            let kiteInterval = 'day';
            if (interval === '1d') kiteInterval = 'day';
            else if (interval === '1mo') kiteInterval = 'day'; // Kite doesn't support 'month' directly, usually aggregated

            const history = await this.kite.getHistoricalData(instrumentToken, kiteInterval, from, to);

            return history.map((candle: any) => ({
                date: candle.date,
                open: candle.open,
                high: candle.high,
                low: candle.low,
                close: candle.close,
                volume: candle.volume
            }));

        } catch (error) {
            console.error('Error fetching historical data from Kite:', error);
            return [];
        }
    }
}

export const kiteService = new KiteService();
