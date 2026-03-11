import { Request, Response } from 'express';
import Stock from '../models/Stock';
import { alphaVantageService } from '../services/alphaVantageService';
import { kiteService } from '../services/kiteService';

export const searchStock = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;
        if (!query || typeof query !== 'string') {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        // 1. Search in local database FIRST (Fastest, has risk scores)
        const localStocks = await Stock.find({
            $or: [
                { symbol: new RegExp(query, 'i') },
                { companyName: new RegExp(query, 'i') }
            ]
        }).limit(5);

        if (localStocks.length > 0) {
            return res.json(localStocks.map(s => ({
                symbol: s.symbol,
                name: s.companyName,
                last_price: 0, // Frontend will fetch live price
                isLocal: true
            })));
        }

        // 2. Fallback to Alpha Vantage search
        const avMatches = await alphaVantageService.searchStocks(query);

        if (avMatches.length === 0) {
            return res.status(404).json({ error: 'Stock not found' });
        }

        res.json(avMatches.map((m: any) => ({
            symbol: m.symbol,
            name: m.name,
            last_price: 0, // Fetch live price later
            isLocal: false
        })));

    } catch (error) {
        console.error('Error searching stock:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getStockPrice = async (req: Request, res: Response) => {
    try {
        const { symbol } = req.params;
        if (!symbol) {
            return res.status(400).json({ error: 'Symbol is required' });
        }

        const quote = await alphaVantageService.getQuote(symbol);
        if (!quote) {
            return res.status(404).json({ error: 'Price not available' });
        }

        res.json(quote);
    } catch (error) {
        console.error('Error fetching stock price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getStockHistory = async (req: Request, res: Response) => {
    try {
        const { symbol } = req.params;
        const { range = '1mo', interval = '1d' } = req.query;

        if (!symbol) {
            return res.status(400).json({ error: 'Symbol is required' });
        }

        // Calculate dates based on range
        const to = new Date();
        const from = new Date();

        // Simple range mapping
        if (range === '1mo') from.setMonth(from.getMonth() - 1);
        else if (range === '1y') from.setFullYear(from.getFullYear() - 1);
        else from.setMonth(from.getMonth() - 1); // Default to 1 month

        const history = await kiteService.getHistoricalData(
            symbol,
            interval as string,
            from,
            to
        );

        res.json(history);
    } catch (error) {
        console.error('Error fetching stock history:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
