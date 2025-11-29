import { Request, Response } from 'express';
import { kiteService } from '../services/kiteService';

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
        // Only fetch Indian indices from Kite
        try {
            const indianIndices = ['NSE:NIFTY 50', 'BSE:SENSEX'];
            const kiteData = await kiteService.getQuotes(indianIndices);
            const data: any[] = [];

            if (kiteData && Object.keys(kiteData).length > 0) {
                // Update NIFTY 50
                const niftyData = kiteData['NSE:NIFTY 50'];
                if (niftyData) {
                    data.push({
                        symbol: '^NSEI',
                        name: 'NIFTY 50',
                        price: niftyData.last_price,
                        change: niftyData.last_price - niftyData.ohlc.close,
                        changePercent: ((niftyData.last_price - niftyData.ohlc.close) / niftyData.ohlc.close) * 100
                    });
                }

                // Update SENSEX
                const sensexData = kiteData['BSE:SENSEX'];
                if (sensexData) {
                    data.push({
                        symbol: '^BSESN',
                        name: 'SENSEX',
                        price: sensexData.last_price,
                        change: sensexData.last_price - sensexData.ohlc.close,
                        changePercent: ((sensexData.last_price - sensexData.ohlc.close) / sensexData.ohlc.close) * 100
                    });
                }
            }

            res.json({
                count: data.length,
                data
            });
        } catch (error) {
            console.warn('Failed to fetch Indian indices from Kite:', error);
            res.json({ count: 0, data: [] });
        }
    } catch (error) {
        console.error('Error in getGlobalIndices:', error);
        res.status(500).json({
            error: 'Failed to fetch global indices',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
