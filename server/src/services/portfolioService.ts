import Stock, { IStock } from '../models/Stock';
import { alphaVantageService } from './alphaVantageService';

export interface PortfolioItem {
    symbol: string;
    companyName: string;
    quantity: number;
    ltp: number;
    amount: number;
    riskScore: number;
    sector: string;
    reason: string;
}

export class PortfolioService {
    /**
     * Generate a portfolio based on user risk score and investment amount
     */
    async generatePortfolio(userRiskScore: number, totalCapital: number): Promise<PortfolioItem[]> {
        // 1. Filter stocks based on User Risk ±15 (Acceptable Range)
        const minRisk = Math.max(5, userRiskScore - 15);
        const maxRisk = Math.min(95, userRiskScore + 15);

        let filteredStocks = await Stock.find({
            totalRiskScore: { $gte: minRisk, $lte: maxRisk }
        });

        // 2. If number of stocks < 5, increase range by 1% either side until min 5
        let rangePct = 0;
        while (filteredStocks.length < 5 && rangePct < 50) {
            rangePct += 1;
            const expandedMin = Math.max(5, userRiskScore - (15 + rangePct));
            const expandedMax = Math.min(95, userRiskScore + (15 + rangePct));
            filteredStocks = await Stock.find({
                totalRiskScore: { $gte: expandedMin, $lte: expandedMax }
            });
        }

        // 3. Limit to top stocks based on risk proximity if too many
        if (filteredStocks.length > 30) {
            filteredStocks = filteredStocks
                .sort((a, b) => Math.abs(a.totalRiskScore - userRiskScore) - Math.abs(b.totalRiskScore - userRiskScore))
                .slice(0, 30);
        }

        // 4. Sector Exposure Check (Max 30% per sector)
        const sectorCounts: Record<string, number> = {};
        const selectedStocks: IStock[] = [];

        filteredStocks.sort((a, b) => Math.abs(a.totalRiskScore - userRiskScore) - Math.abs(b.totalRiskScore - userRiskScore));

        for (const stock of filteredStocks) {
            const sector = stock.industry;
            const currentCount = sectorCounts[sector] || 0;
            const maxPermitted = Math.ceil(filteredStocks.length * 0.3);

            if (currentCount < maxPermitted) {
                selectedStocks.push(stock);
                sectorCounts[sector] = currentCount + 1;
            }

            if (selectedStocks.length >= 10) break; // Arbitrary cap
        }

        // 5. Finalize Stocks & Calculate Allocation
        const stockCount = selectedStocks.length;
        if (stockCount === 0) return [];

        const capPerStock = totalCapital / stockCount;
        const portfolio: PortfolioItem[] = [];

        // Fetch real-time prices for selected stocks
        for (const stock of selectedStocks) {
            try {
                const quote = await alphaVantageService.getQuote(stock.symbol);
                const ltp = quote ? quote.price : 1000; // Fallback to 1000 if both APIs fail

                const qty = Math.floor(capPerStock / ltp);
                if (qty > 0) {
                    portfolio.push({
                        symbol: stock.symbol,
                        companyName: stock.companyName,
                        quantity: qty,
                        ltp: Math.round(ltp * 100) / 100,
                        amount: Math.round(qty * ltp * 100) / 100,
                        riskScore: stock.totalRiskScore,
                        sector: stock.industry,
                        reason: this.generateReason(stock)
                    });
                }

                // Add a small delay between API calls to help with rate limits
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (error) {
                console.error(`Error processing stock ${stock.symbol}:`, error);
            }
        }

        return portfolio;
    }

    private generateReason(stock: IStock): string {
        const parts = [];
        if (stock.totalRiskScore < 30) parts.push('Low risk, high stability');
        else if (stock.totalRiskScore > 70) parts.push('High growth potential, aggressive profile');
        else parts.push('Balanced risk-reward profile');

        if (stock.debtToAssets < 0.1) parts.push('Strong balance sheet');
        if (stock.profitGrowth3Y > 15) parts.push('Consistent earnings growth');
        if (stock.promoterHoldingPct > 50) parts.push('High promoter confidence');

        return parts.join('. ') + '.';
    }
}

export const portfolioService = new PortfolioService();
