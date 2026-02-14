export interface Allocation {
    equity: { min: number; max: number };
    debt: { min: number; max: number };
    gold: { min: number; max: number };
    cash: { min: number; max: number };
    alternative?: { min: number; max: number };
}

export interface Tier {
    tier: number;
    name: string;
    description: string;
    scoreRange: { min: number; max: number };
    allocation: Allocation;
    expectedVolatility: string;
    products: string[];
    riskLevel: 'Very Low' | 'Low' | 'Moderate' | 'Moderate-High' | 'High' | 'Very High';
    color: string;
    bgGradient: string;
}

export const tiers: Tier[] = [
    {
        tier: 1,
        name: 'Capital Preservation',
        description: 'Focus on protecting your capital with minimal risk.',
        scoreRange: { min: 0, max: 15 },
        allocation: {
            equity: { min: 45, max: 55 },
            debt: { min: 35, max: 45 },
            gold: { min: 5, max: 15 },
            cash: { min: 0, max: 5 },
        },
        expectedVolatility: '8-12%',
        products: ['Liquid Funds', 'Government Bonds', 'Sovereign Gold Bonds'],
        riskLevel: 'Very Low',
        color: '#6366F1',
        bgGradient: 'from-indigo-500 to-purple-500',
    },
    {
        tier: 2,
        name: 'Conservative Income',
        description: 'Emphasizes stable income with modest growth potential.',
        scoreRange: { min: 16, max: 35 },
        allocation: {
            equity: { min: 55, max: 65 },
            debt: { min: 28, max: 36 },
            gold: { min: 4, max: 12 },
            cash: { min: 0, max: 5 },
        },
        expectedVolatility: '10-14%',
        products: ['Conservative Hybrid Funds', 'Corporate Bond Funds', 'Large Cap Index Funds'],
        riskLevel: 'Low',
        color: '#3B82F6',
        bgGradient: 'from-blue-500 to-cyan-500',
    },
    {
        tier: 3,
        name: 'Moderate Balanced',
        description: 'Balanced approach between growth and stability.',
        scoreRange: { min: 36, max: 55 },
        allocation: {
            equity: { min: 65, max: 75 },
            debt: { min: 20, max: 28 },
            gold: { min: 2, max: 10 },
            cash: { min: 0, max: 5 },
        },
        expectedVolatility: '12-18%',
        products: ['Balanced Advantage Funds', 'Large & Mid Cap Funds', 'Multi Cap Funds'],
        riskLevel: 'Moderate',
        color: '#10B981',
        bgGradient: 'from-emerald-500 to-teal-500',
    },
    {
        tier: 4,
        name: 'Growth Focused',
        description: 'Prioritizes growth with acceptance of moderate volatility.',
        scoreRange: { min: 56, max: 70 },
        allocation: {
            equity: { min: 75, max: 85 },
            debt: { min: 12, max: 20 },
            gold: { min: 0, max: 8 },
            cash: { min: 0, max: 5 },
        },
        expectedVolatility: '15-22%',
        products: ['Flexi Cap Funds', 'Mid Cap Funds', 'Value Funds'],
        riskLevel: 'Moderate-High',
        color: '#F59E0B',
        bgGradient: 'from-amber-500 to-orange-500',
    },
    {
        tier: 5,
        name: 'Aggressive Growth',
        description: 'High growth orientation with tolerance for significant volatility.',
        scoreRange: { min: 71, max: 85 },
        allocation: {
            equity: { min: 85, max: 95 },
            debt: { min: 4, max: 12 },
            gold: { min: 0, max: 4 },
            cash: { min: 0, max: 5 },
        },
        expectedVolatility: '20-30%',
        products: ['Small Cap Funds', 'Sectoral Funds', 'Direct Equity'],
        riskLevel: 'High',
        color: '#EF4444',
        bgGradient: 'from-red-500 to-rose-500',
    },
    {
        tier: 6,
        name: 'Maximum Growth',
        description: 'Highest growth potential with maximum volatility tolerance.',
        scoreRange: { min: 86, max: 100 },
        allocation: {
            equity: { min: 90, max: 100 },
            debt: { min: 0, max: 5 },
            gold: { min: 0, max: 0 },
            cash: { min: 0, max: 5 },
            alternative: { min: 0, max: 5 },
        },
        expectedVolatility: '25-40%',
        products: ['Small Cap Funds', 'Thematic Funds', 'Direct Equity', 'F&O'],
        riskLevel: 'Very High',
        color: '#EC4899',
        bgGradient: 'from-pink-500 to-rose-500',
    },
];

export const getTierByScore = (score: number): Tier => {
    for (const tier of tiers) {
        if (score >= tier.scoreRange.min && score <= tier.scoreRange.max) return tier;
    }
    return tiers[0];
};

export const getRecommendations = (tier: Tier, biasBreakdown: Record<string, number>) => {
    const recommendations = [];
    if (tier.tier <= 2) recommendations.push({ title: 'Start with Stability', description: 'Focus on debt instruments.' });
    else if (tier.tier >= 5) recommendations.push({ title: 'Diversify Across Sectors', description: 'With high equity allocation, ensure diversification.' });

    if (biasBreakdown.overconfidence > 70) recommendations.push({ title: 'Review Decisions Regularly', description: 'Help avoid blind spots.' });
    if (biasBreakdown.herding > 60) recommendations.push({ title: 'Independent Research', description: 'Validate investments align with your profile.' });
    if (biasBreakdown.lossAversion > 60) recommendations.push({ title: 'Long-term Perspective', description: 'Focus on goals rather than fluctuations.' });

    if (recommendations.length < 3) recommendations.push({ title: 'Regular Rebalancing', description: 'Rebalance portfolio annually.' });
    if (recommendations.length < 3) recommendations.push({ title: 'Emergency Fund First', description: 'Maintain 6-12 months of expenses.' });
    if (recommendations.length < 3) recommendations.push({ title: 'SIP for Consistency', description: 'Build discipline.' });

    return recommendations.slice(0, 3);
};
