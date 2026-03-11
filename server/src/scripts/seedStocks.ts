import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Stock from '../models/Stock';
import { stockRiskEngine } from '../services/stockRiskEngine';

dotenv.config();

const SAMPLE_STOCKS = [
    {
        symbol: 'RELIANCE.NSE',
        companyName: 'Reliance Industries',
        industry: 'Energy',
        debtToAssets: 0.15,
        interestBurden: 0.10,
        borrowingGrowth3Y: 5,
        salesGrowth3Y: 12,
        reservesGrowth3Y: 15,
        equityDilution3Y: 0,
        liabilityGrowth: 5,
        assetGrowth: 10,
        salesGrowth5Y: 11,
        profitGrowth3Y: 15,
        profitGrowth5Y: 14,
        opmStdDev5Y: 2,
        epsStdDev5Y: 3,
        taxRateVolatility: 1,
        otherIncomePctOfPBT: 5,
        accrualRatio: 0.05,
        negativeCFOCount5Y: 0,
        cfoTrend: 10,
        borrowingTrend: -2,
        recurringFinancingCF: 5,
        promoterHoldingPct: 50.6,
        promoterTrend8Q: 0,
        publicHoldingTrend: -1,
        fiiDiiTrend: 2,
        shareholderCountGrowth: 5,
        cyclicality: 'Medium',
        regulatoryDependency: 'Medium',
        capitalIntensity: 'High',
        earningsPredictability: 'High',
        promoterPledging: false,
        leverageConcerns: false,
        regulatoryRisks: false
    },
    {
        symbol: 'TCS.NSE',
        companyName: 'Tata Consultancy Services',
        industry: 'IT Services',
        debtToAssets: 0.01,
        interestBurden: 0.02,
        borrowingGrowth3Y: -5,
        salesGrowth3Y: 15,
        reservesGrowth3Y: 20,
        equityDilution3Y: 0,
        liabilityGrowth: 2,
        assetGrowth: 15,
        salesGrowth5Y: 14,
        profitGrowth3Y: 18,
        profitGrowth5Y: 17,
        opmStdDev5Y: 1,
        epsStdDev5Y: 1.5,
        taxRateVolatility: 0.5,
        otherIncomePctOfPBT: 3,
        accrualRatio: 0.02,
        negativeCFOCount5Y: 0,
        cfoTrend: 15,
        borrowingTrend: -5,
        recurringFinancingCF: 2,
        promoterHoldingPct: 72.3,
        promoterTrend8Q: 0,
        publicHoldingTrend: 0,
        fiiDiiTrend: 1,
        shareholderCountGrowth: 3,
        cyclicality: 'Low',
        regulatoryDependency: 'Low',
        capitalIntensity: 'Low',
        earningsPredictability: 'High',
        promoterPledging: false,
        leverageConcerns: false,
        regulatoryRisks: false
    },
    {
        symbol: 'HDFCBANK.NSE',
        companyName: 'HDFC Bank',
        industry: 'Banking',
        debtToAssets: 0.8, // Banks have high debt/assets due to deposits
        interestBurden: 0.2,
        borrowingGrowth3Y: 10,
        salesGrowth3Y: 18,
        reservesGrowth3Y: 22,
        equityDilution3Y: 1,
        liabilityGrowth: 12,
        assetGrowth: 15,
        salesGrowth5Y: 17,
        profitGrowth3Y: 20,
        profitGrowth5Y: 19,
        opmStdDev5Y: 0.5,
        epsStdDev5Y: 1,
        taxRateVolatility: 1,
        otherIncomePctOfPBT: 15,
        accrualRatio: 0.3,
        negativeCFOCount5Y: 0,
        cfoTrend: 15,
        borrowingTrend: 10,
        recurringFinancingCF: 10,
        promoterHoldingPct: 0, // HDFC merged, technically widely held
        promoterTrend8Q: 0,
        publicHoldingTrend: 1,
        fiiDiiTrend: 1,
        shareholderCountGrowth: 15,
        cyclicality: 'Low',
        regulatoryDependency: 'High',
        capitalIntensity: 'Medium',
        earningsPredictability: 'High',
        promoterPledging: false,
        leverageConcerns: false,
        regulatoryRisks: true
    },
    {
        symbol: 'PAYTM.NSE',
        companyName: 'One97 Communications',
        industry: 'Fintech',
        debtToAssets: 0.05,
        interestBurden: 0.05,
        borrowingGrowth3Y: 20,
        salesGrowth3Y: 30,
        reservesGrowth3Y: -10,
        equityDilution3Y: 5,
        liabilityGrowth: 20,
        assetGrowth: 10,
        salesGrowth5Y: 25,
        profitGrowth3Y: -50,
        profitGrowth5Y: -40,
        opmStdDev5Y: 15,
        epsStdDev5Y: 20,
        taxRateVolatility: 5,
        otherIncomePctOfPBT: -10,
        accrualRatio: 0.5,
        negativeCFOCount5Y: 3,
        cfoTrend: -20,
        borrowingTrend: 20,
        recurringFinancingCF: 30,
        promoterHoldingPct: 0,
        promoterTrend8Q: 0,
        publicHoldingTrend: 5,
        fiiDiiTrend: -10,
        shareholderCountGrowth: 40,
        cyclicality: 'Medium',
        regulatoryDependency: 'High',
        capitalIntensity: 'Low',
        earningsPredictability: 'Low',
        promoterPledging: false,
        leverageConcerns: true,
        regulatoryRisks: true
    },
    {
        symbol: 'ADANIENT.NSE',
        companyName: 'Adani Enterprises Ltd',
        industry: 'Conglomerate',
        debtToAssets: 0.45,
        interestBurden: 0.40,
        borrowingGrowth3Y: 25,
        salesGrowth3Y: 20,
        reservesGrowth3Y: 10,
        equityDilution3Y: 2,
        liabilityGrowth: 15,
        assetGrowth: 20,
        salesGrowth5Y: 18,
        profitGrowth3Y: 50,
        profitGrowth5Y: 35,
        opmStdDev5Y: 8,
        epsStdDev5Y: 12,
        taxRateVolatility: 3,
        otherIncomePctOfPBT: 12,
        accrualRatio: 0.25,
        negativeCFOCount5Y: 1,
        cfoTrend: 20,
        borrowingTrend: 15,
        recurringFinancingCF: 20,
        promoterHoldingPct: 72.6,
        promoterTrend8Q: -2,
        publicHoldingTrend: 2,
        fiiDiiTrend: -5,
        shareholderCountGrowth: 20,
        cyclicality: 'High',
        regulatoryDependency: 'Medium',
        capitalIntensity: 'High',
        earningsPredictability: 'Medium',
        promoterPledging: true,
        leverageConcerns: true,
        regulatoryRisks: false
    }
];

async function seed() {
    try {
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/smarttheta';
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');

        await Stock.deleteMany({});
        console.log('Cleared existing stocks');

        await Stock.insertMany(SAMPLE_STOCKS);
        console.log('Inserted sample stocks');

        await stockRiskEngine.recalculateUniverse();
        console.log('Recalculated risk scores');

        process.exit(0);
    } catch (error) {
        console.error('Seed error:', error);
        process.exit(1);
    }
}

seed();
