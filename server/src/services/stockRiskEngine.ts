import Stock, { IStock } from '../models/Stock';

export class StockRiskEngine {
    /**
     * Re-calculate risk scores for all stocks in the universe
     */
    async recalculateUniverse(): Promise<void> {
        const stocks = await Stock.find({});
        if (stocks.length === 0) return;

        // 1. Normalization Framework (Percentiles)
        // For each metric, we need to compute the percentile across all stocks.

        const metrics = [
            'debtToAssets', 'interestBurden', 'borrowingGrowth3Y', 'salesGrowth3Y',
            'reservesGrowth3Y', 'equityDilution3Y', 'liabilityGrowth', 'assetGrowth',
            'salesGrowth5Y', 'profitGrowth3Y', 'profitGrowth5Y', 'opmStdDev5Y',
            'epsStdDev5Y', 'taxRateVolatility', 'otherIncomePctOfPBT',
            'accrualRatio', 'negativeCFOCount5Y', 'cfoTrend', 'borrowingTrend',
            'promoterHoldingPct', 'promoterTrend8Q', 'shareholderCountGrowth'
        ];

        const percentileMaps: Record<string, Map<string, number>> = {};

        for (const metric of metrics) {
            percentileMaps[metric] = this.calculatePercentiles(stocks, metric as keyof IStock);
        }

        // 2. Compute Segment Risks
        for (const stock of stocks) {
            const financialRisk = this.computeFinancialRisk(stock, percentileMaps);
            const earningsRisk = this.computeEarningsRisk(stock, percentileMaps);
            const cashFlowRisk = this.computeCashFlowRisk(stock, percentileMaps);
            const governanceRisk = this.computeGovernanceRisk(stock, percentileMaps);
            const businessModelRisk = this.computeBusinessModelRisk(stock);

            // 8. FINAL STOCK RISK SCORE
            // 0.25*Financial + 0.20*Earnings + 0.15*CashFlow + 0.20*Governance + 0.20*Business
            let totalScore =
                (0.25 * financialRisk) +
                (0.20 * earningsRisk) +
                (0.15 * cashFlowRisk) +
                (0.20 * governanceRisk) +
                (0.20 * businessModelRisk);

            // Clamp between 5 and 95
            totalScore = Math.max(5, Math.min(95, totalScore));

            stock.financialRiskScore = financialRisk;
            stock.earningsQualityRiskScore = earningsRisk;
            stock.cashFlowRiskScore = cashFlowRisk;
            stock.governanceRiskScore = governanceRisk;
            stock.businessModelRiskScore = businessModelRisk;
            stock.totalRiskScore = Math.round(totalScore);
            stock.lastUpdated = new Date();

            await stock.save();
        }
    }

    private calculatePercentiles(stocks: IStock[], metric: keyof IStock): Map<string, number> {
        const map = new Map<string, number>();
        const values = stocks.map(s => ({ id: s._id.toString(), val: (s[metric] as number) || 0 }));

        // Sort ascending
        values.sort((a, b) => a.val - b.val);

        const total = stocks.length;
        values.forEach((v, index) => {
            const percentile = (index / total) * 100;
            map.set(v.id, percentile);
        });

        return map;
    }

    private computeFinancialRisk(stock: IStock, maps: any): number {
        const stockId = stock._id.toString();

        // Metrics where higher = Higher Risk
        const highIsRisk = ['debtToAssets', 'interestBurden', 'borrowingGrowth3Y', 'equityDilution3Y', 'liabilityGrowth'];
        // Metrics where higher = Lower Risk (invert percentile)
        const lowIsRisk = ['salesGrowth3Y', 'reservesGrowth3Y', 'assetGrowth'];

        let totalPercentile = 0;
        highIsRisk.forEach(m => totalPercentile += (maps[m].get(stockId) || 0));
        lowIsRisk.forEach(m => totalPercentile += (100 - (maps[m].get(stockId) || 0)));

        return totalPercentile / (highIsRisk.length + lowIsRisk.length);
    }

    private computeEarningsRisk(stock: IStock, maps: any): number {
        const stockId = stock._id.toString();

        const highIsRisk = ['opmStdDev5Y', 'epsStdDev5Y', 'taxRateVolatility', 'otherIncomePctOfPBT'];
        const lowIsRisk = ['salesGrowth5Y', 'profitGrowth3Y', 'profitGrowth5Y'];

        let totalPercentile = 0;
        highIsRisk.forEach(m => totalPercentile += (maps[m].get(stockId) || 0));
        lowIsRisk.forEach(m => totalPercentile += (100 - (maps[m].get(stockId) || 0)));

        return totalPercentile / (highIsRisk.length + lowIsRisk.length);
    }

    private computeCashFlowRisk(stock: IStock, maps: any): number {
        const stockId = stock._id.toString();

        const highIsRisk = ['accrualRatio', 'negativeCFOCount5Y', 'borrowingTrend'];
        const lowIsRisk = ['cfoTrend'];

        let totalPercentile = 0;
        highIsRisk.forEach(m => totalPercentile += (maps[m].get(stockId) || 0));
        lowIsRisk.forEach(m => totalPercentile += (100 - (maps[m].get(stockId) || 0)));

        return totalPercentile / (highIsRisk.length + lowIsRisk.length);
    }

    private computeGovernanceRisk(stock: IStock, maps: any): number {
        const stockId = stock._id.toString();

        const highIsRisk = ['shareholderCountGrowth'];
        const lowIsRisk = ['promoterHoldingPct', 'promoterTrend8Q'];

        let totalPercentile = 0;
        highIsRisk.forEach(m => totalPercentile += (maps[m].get(stockId) || 0));
        lowIsRisk.forEach(m => totalPercentile += (100 - (maps[m].get(stockId) || 0)));

        let score = totalPercentile / (highIsRisk.length + lowIsRisk.length);

        // Promoter < 5% triggers severe penalty
        if (stock.promoterHoldingPct < 5) {
            score = Math.max(score, 90);
        }

        return score;
    }

    private computeBusinessModelRisk(stock: IStock): number {
        // Industry Classification
        const cyclicalityScore = stock.cyclicality === 'High' ? 80 : (stock.cyclicality === 'Medium' ? 50 : 20);
        const regulatoryScore = stock.regulatoryDependency === 'High' ? 80 : (stock.regulatoryDependency === 'Medium' ? 50 : 20);
        const capitalScore = stock.capitalIntensity === 'High' ? 80 : (stock.capitalIntensity === 'Medium' ? 50 : 20);
        const predictabilityScore = stock.earningsPredictability === 'Low' ? 80 : (stock.earningsPredictability === 'Medium' ? 50 : 20);

        const industryRisk = (cyclicalityScore + regulatoryScore + capitalScore + predictabilityScore) / 4;

        // LLM Flags (Detect from text or boolean flags)
        let textRisk = 10; // Base
        if (stock.promoterPledging) textRisk += 10;
        if (stock.leverageConcerns) textRisk += 10;
        if (stock.regulatoryRisks) textRisk += 10;
        textRisk = Math.min(100, textRisk);

        // Dependency Flags
        let dependencyRisk = 10;
        if (stock.otherIncomePctOfPBT > 20) dependencyRisk += 5;
        if (stock.interestBurden > 0.3) dependencyRisk += 5; // Simplified
        if (stock.profitGrowth3Y < stock.salesGrowth3Y) dependencyRisk += 5;

        // Business Risk = 0.4*Industry + 0.3*Text + 0.3*Dependency
        let score = (0.4 * industryRisk) + (0.3 * textRisk) + (0.3 * dependencyRisk);
        return Math.max(10, Math.min(95, score));
    }
}

export const stockRiskEngine = new StockRiskEngine();
