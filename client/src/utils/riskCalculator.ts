/**
 * Risk Profile Calculator
 * Based on the Advanced Risk Profiling Framework
 */

import { getTierByScore, getRecommendations, type Tier } from '../data/tiers';
import { goalMultipliers } from '../data/questions';

// Answer map: questionId -> score (20, 40, 70, or 100)
export type AnswerMap = Record<number, number>;

const avg = (values: number[]): number => {
    const validValues = values.filter(v => v !== undefined);
    if (validValues.length === 0) return 0;
    return validValues.reduce((a, b) => a + b, 0) / validValues.length;
};

const weightedAvg = (values: number[], weights: number[]): number => {
    const validPairs = values
        .map((v, i) => ({ value: v, weight: weights[i] }))
        .filter(p => p.value !== undefined);

    if (validPairs.length === 0) return 0;

    const totalWeight = validPairs.reduce((sum, p) => sum + p.weight, 0);
    const weightedSum = validPairs.reduce((sum, p) => sum + (p.value * p.weight), 0);

    return weightedSum / totalWeight;
};

export const calculateRiskCapacity = (answers: AnswerMap): number => {
    const financialPositionScore = weightedAvg(
        [answers[1], answers[5], answers[6]],
        [0.5, 0.25, 0.25]
    );
    const timeHorizonScore = weightedAvg(
        [answers[4], answers[2]],
        [0.6, 0.4]
    );
    const humanCapitalScore = answers[3] || 0;
    return (financialPositionScore * 0.4) + (timeHorizonScore * 0.3) + (humanCapitalScore * 0.3);
};

export const calculateRiskTolerance = (answers: AnswerMap): number => {
    const emotionalComposureScore = weightedAvg(
        [answers[7], answers[8], answers[9]],
        [0.4, 0.35, 0.25]
    );
    const personalityScore = weightedAvg(
        [answers[12], answers[13]],
        [0.5, 0.5]
    );
    const experienceScore = weightedAvg(
        [answers[10], answers[11]],
        [0.5, 0.5]
    );
    return (emotionalComposureScore * 0.35) + (personalityScore * 0.35) + (experienceScore * 0.30);
};

export const calculateBehavioralBiasIndex = (answers: AnswerMap): number => {
    const cognitiveBiasAvg = avg([
        answers[14], answers[15], answers[16], answers[17], answers[18],
    ]);
    const emotionalBiasAvg = avg([
        answers[19], answers[20], answers[21], answers[22],
    ]);
    const biasScore = (cognitiveBiasAvg * 0.55) + (emotionalBiasAvg * 0.45);
    return 0.5 + (biasScore / 200);
};

export const getBiasBreakdown = (answers: AnswerMap): Record<string, number> => {
    return {
        overconfidence: 100 - (answers[14] || 50),
        anchoring: 100 - (answers[15] || 50),
        confirmation: 100 - (answers[16] || 50),
        availability: 100 - (answers[17] || 50),
        herding: 100 - (answers[18] || 50),
        mentalAccounting: 100 - (answers[19] || 50),
        lossAversion: 100 - (answers[20] || 50),
        attribution: 100 - (answers[21] || 50),
        statusQuo: 100 - (answers[22] || 50),
    };
};

export const getConstraintType = (rc: number, rt: number): 'balanced' | 'capacity_constrained' | 'tolerance_constrained' => {
    const difference = Math.abs(rc - rt);
    if (difference <= 15) return 'balanced';
    return rc < rt ? 'capacity_constrained' : 'tolerance_constrained';
};

export const calculateRiskProfileScore = (
    rc: number,
    rt: number,
    bbi: number,
    goalType: string = 'retirement'
): number => {
    const goalMultiplier = goalMultipliers[goalType]?.multiplier || 1.0;
    return Math.min(rc, rt) * bbi * goalMultiplier;
};

export interface AssessmentResult {
    scores: {
        riskCapacity: number;
        riskTolerance: number;
        behavioralBiasIndex: number;
        riskProfileScore: number;
    };
    tier: Tier;
    constraint: 'balanced' | 'capacity_constrained' | 'tolerance_constrained';
    biasBreakdown: Record<string, number>;
    recommendations: Array<{ title: string; description: string }>;
}

export const calculateAssessment = (
    answers: AnswerMap,
    goalType: string = 'retirement'
): AssessmentResult => {
    const riskCapacity = calculateRiskCapacity(answers);
    const riskTolerance = calculateRiskTolerance(answers);
    const behavioralBiasIndex = calculateBehavioralBiasIndex(answers);
    const riskProfileScore = calculateRiskProfileScore(riskCapacity, riskTolerance, behavioralBiasIndex, goalType);
    const tier = getTierByScore(riskProfileScore);
    const constraint = getConstraintType(riskCapacity, riskTolerance);
    const biasBreakdown = getBiasBreakdown(answers);
    const recommendations = getRecommendations(tier, biasBreakdown);

    return {
        scores: {
            riskCapacity: Math.round(riskCapacity),
            riskTolerance: Math.round(riskTolerance),
            behavioralBiasIndex,
            riskProfileScore: Math.round(riskProfileScore),
        },
        tier,
        constraint,
        biasBreakdown,
        recommendations,
    };
};
