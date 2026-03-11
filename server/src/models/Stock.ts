import mongoose, { Schema, Document } from 'mongoose';

export interface IStock extends Document {
    symbol: string;
    companyName: string;
    industry: string;

    // Financial Strength
    debtToAssets: number;
    interestBurden: number;
    borrowingGrowth3Y: number;
    salesGrowth3Y: number;
    reservesGrowth3Y: number;
    equityDilution3Y: number;
    liabilityGrowth: number;
    assetGrowth: number;

    // Earnings Quality
    salesGrowth5Y: number;
    profitGrowth3Y: number;
    profitGrowth5Y: number;
    opmStdDev5Y: number;
    epsStdDev5Y: number;
    taxRateVolatility: number;
    otherIncomePctOfPBT: number;

    // Cash Flow
    accrualRatio: number;
    negativeCFOCount5Y: number;
    cfoTrend: number;
    borrowingTrend: number;
    recurringFinancingCF: number;

    // Governance
    promoterHoldingPct: number;
    promoterTrend8Q: number;
    publicHoldingTrend: number;
    fiiDiiTrend: number;
    shareholderCountGrowth: number;

    // Business Model / Industry Risk (Classified via LLM or manual)
    cyclicality: 'Low' | 'Medium' | 'High';
    regulatoryDependency: 'Low' | 'Medium' | 'High';
    capitalIntensity: 'Low' | 'Medium' | 'High';
    earningsPredictability: 'Low' | 'Medium' | 'High';

    // Business Model Flags
    promoterPledging: boolean;
    leverageConcerns: boolean;
    regulatoryRisks: boolean;

    // Calculated Risk Scores (Cached)
    financialRiskScore: number;
    earningsQualityRiskScore: number;
    cashFlowRiskScore: number;
    governanceRiskScore: number;
    businessModelRiskScore: number;
    totalRiskScore: number;

    lastUpdated: Date;
}

const StockSchema: Schema = new Schema({
    symbol: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    industry: { type: String, required: true },

    debtToAssets: { type: Number, default: 0 },
    interestBurden: { type: Number, default: 0 },
    borrowingGrowth3Y: { type: Number, default: 0 },
    salesGrowth3Y: { type: Number, default: 0 },
    reservesGrowth3Y: { type: Number, default: 0 },
    equityDilution3Y: { type: Number, default: 0 },
    liabilityGrowth: { type: Number, default: 0 },
    assetGrowth: { type: Number, default: 0 },

    salesGrowth5Y: { type: Number, default: 0 },
    profitGrowth3Y: { type: Number, default: 0 },
    profitGrowth5Y: { type: Number, default: 0 },
    opmStdDev5Y: { type: Number, default: 0 },
    epsStdDev5Y: { type: Number, default: 0 },
    taxRateVolatility: { type: Number, default: 0 },
    otherIncomePctOfPBT: { type: Number, default: 0 },

    accrualRatio: { type: Number, default: 0 },
    negativeCFOCount5Y: { type: Number, default: 0 },
    cfoTrend: { type: Number, default: 0 },
    borrowingTrend: { type: Number, default: 0 },
    recurringFinancingCF: { type: Number, default: 0 },

    promoterHoldingPct: { type: Number, default: 0 },
    promoterTrend8Q: { type: Number, default: 0 },
    publicHoldingTrend: { type: Number, default: 0 },
    fiiDiiTrend: { type: Number, default: 0 },
    shareholderCountGrowth: { type: Number, default: 0 },

    cyclicality: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    regulatoryDependency: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    capitalIntensity: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    earningsPredictability: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },

    promoterPledging: { type: Boolean, default: false },
    leverageConcerns: { type: Boolean, default: false },
    regulatoryRisks: { type: Boolean, default: false },

    financialRiskScore: { type: Number, default: 0 },
    earningsQualityRiskScore: { type: Number, default: 0 },
    cashFlowRiskScore: { type: Number, default: 0 },
    governanceRiskScore: { type: Number, default: 0 },
    businessModelRiskScore: { type: Number, default: 0 },
    totalRiskScore: { type: Number, default: 0 },

    lastUpdated: { type: Date, default: Date.now }
});

export default mongoose.model<IStock>('Stock', StockSchema);
