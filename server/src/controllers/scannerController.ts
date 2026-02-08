import { Request, Response } from 'express';
import { kiteService } from '../services/kiteService';
import { yahooFinanceService } from '../services/yahooFinanceService';

export const getTopGainers = async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;

        // Try Kite first
        try {
            const kiteData = await kiteService.getTopGainers(limit);
            res.json({
                count: kiteData.length,
                data: kiteData
            });
        } catch (error) {
            console.error('Failed to fetch top gainers from Kite:', error);
            res.status(500).json({ error: 'Failed to fetch top gainers' });
        }
    } catch (error) {
        console.error('Error in getTopGainers:', error);
        res.status(500).json({
            error: 'Failed to fetch top gainers',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getTopLosers = async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;

        // Try Kite first
        try {
            const kiteData = await kiteService.getTopLosers(limit);
            res.json({
                count: kiteData.length,
                data: kiteData
            });
        } catch (error) {
            console.error('Failed to fetch top losers from Kite:', error);
            res.status(500).json({ error: 'Failed to fetch top losers' });
        }
    } catch (error) {
        console.error('Error in getTopLosers:', error);
        res.status(500).json({
            error: 'Failed to fetch top losers',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getMostActive = async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;

        // Try Kite first
        try {
            const kiteData = await kiteService.getMostActive(limit);
            res.json({
                count: kiteData.length,
                data: kiteData
            });
        } catch (error) {
            console.error('Failed to fetch most active from Kite:', error);
            res.status(500).json({ error: 'Failed to fetch most active stocks' });
        }
    } catch (error) {
        console.error('Error in getMostActive:', error);
        res.status(500).json({
            error: 'Failed to fetch most active stocks',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const searchStock = async (req: Request, res: Response): Promise<void> => {
    try {
        const symbol = req.query.symbol as string;

        if (!symbol) {
            res.status(400).json({
                error: 'Symbol parameter is required'
            });
            return;
        }

        const data = await kiteService.searchInstruments(symbol);

        if (!data || data.length === 0) {
            res.status(404).json({
                error: 'Stock not found',
                message: `No data found for symbol: ${symbol}`
            });
            return;
        }

        res.json(data[0]);
    } catch (error) {
        console.error('Error in searchStock:', error);
        res.status(500).json({
            error: 'Failed to search stock',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getGlobalIndices = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await yahooFinanceService.getWorldIndices();
        res.json({
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error in getGlobalIndices:', error);
        res.status(500).json({
            error: 'Failed to fetch global indices',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
