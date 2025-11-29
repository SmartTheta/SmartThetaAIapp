import { IndexData, IIndexData } from '../models/IndexData';
import { DailyClosing, IDailyClosing } from '../models/DailyClosing';
import { SheetsService } from './sheetsService';
import { kiteService } from './kiteService';

export class IndexService {
    private sheetsService: SheetsService;

    constructor() {
        this.sheetsService = new SheetsService();
    }

    async updateIndexData(): Promise<IIndexData> {
        try {
            // Try to fetch from Kite if configured
            if (process.env.KITE_API_KEY && process.env.KITE_ACCESS_TOKEN) {
                try {
                    console.log('🪁 Fetching real-time data from Kite Connect...');
                    // TODO: Define your portfolio instruments here
                    // Example: ['NSE:INFY', 'NSE:TCS', 'NSE:RELIANCE']
                    const instruments: string[] = [];

                    if (instruments.length > 0) {
                        // This is where you would calculate the index based on real-time prices
                        // const quotes = await kiteService.getQuotes(instruments);
                        // const profitLoss = calculatePortfolioValue(quotes);

                        // For now, we'll fall back to Sheets if no instruments defined
                        console.log('⚠️ No instruments defined for Kite. Falling back to Sheets.');
                    }
                } catch (kiteError) {
                    console.error('❌ Error fetching from Kite:', kiteError);
                    // Fallback to Sheets on error
                }
            }

            const sheetData = await this.sheetsService.fetchSheetData();
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Save to IndexData for historical tracking
            const indexData = new IndexData({
                date: today,
                profitLoss: sheetData.profitLoss,
                timestamp: sheetData.fetchedAt
            });
            await indexData.save();

            // Also save/update DailyClosing
            let dailyClosing = await DailyClosing.findOne({ date: today });
            if (dailyClosing) {
                dailyClosing.closeValue = sheetData.profitLoss;
                await dailyClosing.save();
                console.log(`💾 Updated: ${sheetData.profitLoss} for ${today.toDateString()}`);
            } else {
                dailyClosing = new DailyClosing({
                    date: today,
                    closeValue: sheetData.profitLoss
                });
                await dailyClosing.save();
                console.log(`💾 Created: ${sheetData.profitLoss} for ${today.toDateString()}`);
            }

            return indexData;
        } catch (error) {
            console.error('❌ Error updating index data:', error);
            throw error;
        }
    }

    async saveDailyClosing(): Promise<IDailyClosing> {
        try {
            const sheetData = await this.sheetsService.fetchSheetData();
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Check if entry already exists for today
            let dailyClosing = await DailyClosing.findOne({ date: today });

            if (dailyClosing) {
                dailyClosing.closeValue = sheetData.profitLoss;
                await dailyClosing.save();
                console.log(`💾 Updated Daily Closing: ${sheetData.profitLoss} for ${today.toDateString()}`);
            } else {
                dailyClosing = new DailyClosing({
                    date: today,
                    closeValue: sheetData.profitLoss
                });
                await dailyClosing.save();
                console.log(`💾 Created Daily Closing: ${sheetData.profitLoss} for ${today.toDateString()}`);
            }

            return dailyClosing;
        } catch (error) {
            console.error('❌ Error saving daily closing:', error);
            throw error;
        }
    }

    async getCurrentDayData(): Promise<IIndexData | null> {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            const data = await IndexData.findOne({
                date: { $gte: today, $lt: tomorrow }
            }).sort({ timestamp: -1 });

            return data;
        } catch (error) {
            console.error('❌ Error getting current day data:', error);
            throw error;
        }
    }

    async getTodayHistory(): Promise<IIndexData[]> {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            const data = await IndexData.find({
                date: { $gte: today, $lt: tomorrow }
            }).sort({ timestamp: 1 });

            return data;
        } catch (error) {
            console.error('❌ Error getting today history:', error);
            throw error;
        }
    }

    async getYesterdayData(): Promise<IIndexData | null> {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            // Try to get from DailyClosing first
            const dailyClosing = await DailyClosing.findOne({ date: yesterday });

            if (dailyClosing) {
                // Map to IIndexData structure for compatibility
                return {
                    date: dailyClosing.date,
                    profitLoss: dailyClosing.closeValue,
                    timestamp: dailyClosing.createdAt
                } as IIndexData;
            }

            // Fallback to IndexData if no DailyClosing found
            const data = await IndexData.findOne({
                date: { $gte: yesterday, $lt: today }
            }).sort({ timestamp: -1 });

            return data;
        } catch (error) {
            console.error('❌ Error getting yesterday data:', error);
            throw error;
        }
    }

    async getComparisonData() {
        try {
            const todayData = await this.getCurrentDayData();
            const yesterdayData = await this.getYesterdayData();

            if (!todayData) {
                return {
                    today: null,
                    yesterday: yesterdayData,
                    difference: null,
                    percentageChange: null
                };
            }

            const difference = yesterdayData
                ? todayData.profitLoss - yesterdayData.profitLoss
                : null;

            const percentageChange = yesterdayData && yesterdayData.profitLoss !== 0
                ? (difference! / Math.abs(yesterdayData.profitLoss)) * 100
                : null;

            return {
                today: todayData,
                yesterday: yesterdayData,
                difference,
                percentageChange
            };
        } catch (error) {
            console.error('❌ Error getting comparison data:', error);
            throw error;
        }
    }

    async getHistoricalData(startDate: Date, endDate: Date): Promise<IIndexData[]> {
        try {
            const data = await IndexData.find({
                date: { $gte: startDate, $lte: endDate }
            }).sort({ date: 1, timestamp: -1 });

            const dailyData: Map<string, IIndexData> = new Map();

            data.forEach((entry: IIndexData) => {
                const dateKey = entry.date.toISOString().split('T')[0];
                if (!dailyData.has(dateKey)) {
                    dailyData.set(dateKey, entry);
                }
            });

            return Array.from(dailyData.values());
        } catch (error) {
            console.error('❌ Error getting historical data:', error);
            throw error;
        }
    }
}
