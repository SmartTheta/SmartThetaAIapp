import { Request, Response } from 'express';
import { kiteService } from '../services/kiteService';

export const searchStock = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;
        if (!query || typeof query !== 'string') {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const stock = await kiteService.searchInstruments(query);
        // Note: Kite search returns an array, but the frontend might expect a single object or array depending on implementation.
        // Based on previous code, it seemed to return a single stock object or null.
        // We'll return the first match if available, or the whole list if the frontend supports it.
        // Looking at previous code: `res.json(stock)` where stock was a single object.

        if (!stock || stock.length === 0) {
            return res.status(404).json({ error: 'Stock not found' });
        }

        // Return the first match to maintain compatibility
        res.json(stock[0]);
    } catch (error) {
        console.error('Error searching stock:', error);
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
