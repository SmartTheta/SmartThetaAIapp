import { Request, Response } from 'express';
import RiskProfile from '../models/RiskProfile';
import User from '../models/User';
import {
    calculateRiskProfile,
    getCategoryFromScore,
    calculateAge,
    calculateAgeFactor,
    getNextBirthday,
    RISK_CATEGORIES,
} from '../services/riskCalculator';

export const saveRiskProfile = async (req: Request, res: Response) => {
    try {
        const {
            userId,
            riskCapacity,
            riskTolerance,
            behavioralBias,
            answers,
            behavioralInsights,
            goalType,
            goalTimeframe,
            constrainingFactor,
        } = req.body;

        // Get user DOB
        const user = await User.findById(userId);
        if (!user || !user.dob) {
            return res.status(400).json({ error: 'User not found or DOB missing' });
        }

        const result = calculateRiskProfile({
            riskCapacity,
            riskTolerance,
            behavioralBias,
            dob: user.dob,
            answers,
            behavioralInsights,
            goalType,
            goalTimeframe,
            constrainingFactor,
        });

        // Upsert: create or update
        const profile = await RiskProfile.findOneAndUpdate(
            { userId },
            { userId, ...result, adjustedRiskNumber: null },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        return res.json({ success: true, profile });
    } catch (err: any) {
        console.error('[saveRiskProfile]', err);
        return res.status(500).json({ error: err.message });
    }
};

export const getRiskProfile = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const profile = await RiskProfile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ error: 'Risk profile not found' });
        }
        return res.json({ profile });
    } catch (err: any) {
        console.error('[getRiskProfile]', err);
        return res.status(500).json({ error: err.message });
    }
};

export const adjustRiskNumber = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { adjustedRiskNumber } = req.body;

        const profile = await RiskProfile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ error: 'Risk profile not found' });
        }

        // Validate: adjusted number must stay within the same category
        const currentCat = getCategoryFromScore(profile.riskNumber);
        if (adjustedRiskNumber < currentCat.min || adjustedRiskNumber > currentCat.max) {
            return res.status(400).json({
                error: `Adjusted risk number must be within category bounds (${currentCat.min}-${currentCat.max})`,
            });
        }

        profile.adjustedRiskNumber = adjustedRiskNumber;

        // Update allocation based on adjusted number's category (same category)
        const newCat = getCategoryFromScore(adjustedRiskNumber);
        profile.allocation = { equity: newCat.equity, debt: newCat.debt, gold: newCat.gold };

        await profile.save();

        return res.json({ success: true, profile });
    } catch (err: any) {
        console.error('[adjustRiskNumber]', err);
        return res.status(500).json({ error: err.message });
    }
};

export const refreshRiskProfile = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const profile = await RiskProfile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ error: 'Risk profile not found' });
        }

        // Recalculate with current age
        const age = calculateAge(profile.dob);
        const ageFactor = calculateAgeFactor(age);

        const constrainedBase = Math.min(profile.riskCapacity, profile.riskTolerance);
        const bbiMultiplier = 0.5 + (profile.behavioralBias / 100) * 0.5;
        const rawScore = constrainedBase * bbiMultiplier;
        const riskNumber = Math.round(rawScore * ageFactor);

        const cat = getCategoryFromScore(riskNumber);

        profile.age = age;
        profile.ageFactor = ageFactor;
        profile.rawScore = Math.round(rawScore * 100) / 100;
        profile.riskNumber = riskNumber;
        profile.category = cat.category;
        profile.categoryName = cat.name;
        profile.allocation = { equity: cat.equity, debt: cat.debt, gold: cat.gold };
        profile.adjustedRiskNumber = null;
        profile.nextBirthdayRefresh = getNextBirthday(profile.dob);
        profile.lastCalculatedAt = new Date();

        await profile.save();

        return res.json({ success: true, profile });
    } catch (err: any) {
        console.error('[refreshRiskProfile]', err);
        return res.status(500).json({ error: err.message });
    }
};

export const getCategories = async (_req: Request, res: Response) => {
    return res.json({ categories: RISK_CATEGORIES });
};
