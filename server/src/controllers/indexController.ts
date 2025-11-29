import { Request, Response } from 'express';
import { IndexService } from '../services/indexService';
import { kiteService } from '../services/kiteService';

const indexService = new IndexService();

export const getCurrentIndex = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await indexService.getCurrentDayData();

        if (!data) {
            res.status(404).json({
                error: 'No data available for today',
                message: 'Please wait for the first data update'
            });
            return;
        }

        res.json({
            profitLoss: data.profitLoss,
            date: data.date,
            timestamp: data.timestamp
        });
    } catch (error) {
        console.error('Error in getCurrentIndex:', error);
        res.status(500).json({
            error: 'Failed to fetch current index data',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getHistoricalDaily = async (req: Request, res: Response): Promise<void> => {
    try {
        // Get last 30 days of data
        const endDate = new Date();
        endDate.setHours(23, 59, 59, 999);

        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);
        startDate.setHours(0, 0, 0, 0);

        const data = await indexService.getHistoricalData(startDate, endDate);

        res.json({
            count: data.length,
            data: data.map(entry => ({
                date: entry.date,
                profitLoss: entry.profitLoss,
                timestamp: entry.timestamp
            }))
        });
    } catch (error) {
        console.error('Error in getHistoricalDaily:', error);
        res.status(500).json({
            error: 'Failed to fetch historical daily data',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getComparisonData = async (req: Request, res: Response): Promise<void> => {
    try {
        const comparison = await indexService.getComparisonData();

        res.json({
            today: comparison.today ? {
                profitLoss: comparison.today.profitLoss,
                timestamp: comparison.today.timestamp
            } : null,
            yesterday: comparison.yesterday ? {
                profitLoss: comparison.yesterday.profitLoss,
                timestamp: comparison.yesterday.timestamp
            } : null,
            difference: comparison.difference,
            percentageChange: comparison.percentageChange
        });
    } catch (error) {
        console.error('Error in getComparisonData:', error);
        res.status(500).json({
            error: 'Failed to fetch comparison data',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getHistoricalData = async (req: Request, res: Response): Promise<void> => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            res.status(400).json({
                error: 'Missing required parameters',
                message: 'Please provide startDate and endDate query parameters'
            });
            return;
        }

        const start = new Date(startDate as string);
        const end = new Date(endDate as string);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            res.status(400).json({
                error: 'Invalid date format',
                message: 'Please provide dates in ISO format (YYYY-MM-DD)'
            });
            return;
        }

        const data = await indexService.getHistoricalData(start, end);

        res.json({
            startDate: start,
            endDate: end,
            count: data.length,
            data: data.map(entry => ({
                date: entry.date,
                profitLoss: entry.profitLoss,
                timestamp: entry.timestamp
            }))
        });
    } catch (error) {
        console.error('Error in getHistoricalData:', error);
        res.status(500).json({
            error: 'Failed to fetch historical data',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const refreshData = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await indexService.updateIndexData();

        res.json({
            message: 'Data refreshed successfully',
            profitLoss: data.profitLoss,
            timestamp: data.timestamp
        });
    } catch (error) {
        console.error('Error in refreshData:', error);
        res.status(500).json({
            error: 'Failed to refresh data',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const setKiteToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const { access_token, request_token } = req.body;

        if (access_token) {
            kiteService.setAccessToken(access_token);
            res.json({ message: 'Kite access token set successfully' });
            return;
        }

        if (request_token) {
            const token = await kiteService.generateSession(request_token);
            res.json({ message: 'Kite session generated successfully', access_token: token });
            return;
        }

        res.status(400).json({ error: 'Missing access_token or request_token' });
    } catch (error) {
        console.error('Error setting Kite token:', error);
        res.status(500).json({
            error: 'Failed to set Kite token',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
