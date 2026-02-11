import YahooFinance from 'yahoo-finance2';

const yahooFinance = new YahooFinance();

export interface WorldIndexData {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
}

const SYMBOL_NAMES: Record<string, string> = {
    '^GSPC': 'S&P 500',
    '^DJI': 'Dow Jones',
    '^IXIC': 'NASDAQ',
    '^FTSE': 'FTSE 100',
    '^N225': 'Nikkei 225',
    '^NSEI': 'NIFTY 50',
    '^BSESN': 'SENSEX',
};

export class YahooFinanceService {
    async getWorldIndices(): Promise<WorldIndexData[]> {
        const symbols = Object.keys(SYMBOL_NAMES);
        try {
            const results = await Promise.all(
                symbols.map(async (symbol) => {
                    try {
                        const quote: any = await yahooFinance.quote(symbol);
                        return {
                            symbol: symbol.replace('^', ''),
                            name: SYMBOL_NAMES[symbol] || symbol,
                            price: quote.regularMarketPrice || 0,
                            change: quote.regularMarketChange || 0,
                            changePercent: quote.regularMarketChangePercent || 0,
                        };
                    } catch (error) {
                        console.error(`Error fetching quote for ${symbol}:`, error);
                        return null;
                    }
                })
            );

            return results.filter((item): item is WorldIndexData => item !== null);
        } catch (error) {
            console.error('Error fetching world indices:', error);
            return [];
        }
    }
}

export const yahooFinanceService = new YahooFinanceService();
