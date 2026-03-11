import { Request, Response } from 'express';
import { portfolioService } from '../services/portfolioService';
import RiskProfile from '../models/RiskProfile';

export class PortfolioController {
    /**
     * Generate portfolio for a user
     */
    async generate(req: Request, res: Response) {
        try {
            const { userId, totalCapital, riskScore: manualRiskScore } = req.body;

            let riskScore = manualRiskScore;

            if (userId && !riskScore) {
                const profile = await RiskProfile.findOne({ userId });
                if (profile) {
                    riskScore = (profile as any).riskNumber;
                }
            }

            if (!riskScore) {
                return res.status(400).json({ error: 'Risk score is required' });
            }

            const portfolio = await portfolioService.generatePortfolio(riskScore, totalCapital || 50000);

            res.json({
                userRiskScore: riskScore,
                totalCapital: totalCapital || 50000,
                portfolio
            });
        } catch (error) {
            console.error('Error generating portfolio:', error);
            res.status(500).json({
                error: 'Failed to generate portfolio',
                details: error instanceof Error ? error.message : String(error)
            });
        }
    }

    /**
     * Update/Recalculate portfolio risk (e.g. Increase/Lower risk)
     */
    async adjustRisk(req: Request, res: Response) {
        try {
            const { currentRiskScore, adjustment, totalCapital } = req.body;

            // Adjustment: +5 or -5 typically for buttons
            const newRiskScore = Math.max(5, Math.min(95, currentRiskScore + adjustment));

            const portfolio = await portfolioService.generatePortfolio(newRiskScore, totalCapital || 50000);

            res.json({
                userRiskScore: newRiskScore,
                totalCapital: totalCapital || 50000,
                portfolio
            });
        } catch (error) {
            console.error('Error adjusting portfolio risk:', error);
            res.status(500).json({ error: 'Failed to adjust portfolio risk' });
        }
    }
}

export const portfolioController = new PortfolioController();
