import axios from 'axios';
import { serpApiService } from './serpApiService';

export class AlphaVantageService {
    private apiKey: string;
    private baseUrl: string = 'https://www.alphavantage.co/query';

    constructor() {
        this.apiKey = process.env.ALPHA_VANTAGE_API_KEY || '';
    }

    async searchStocks(query: string) {
        if (!this.apiKey) return [];

        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    function: 'SYMBOL_SEARCH',
                    keywords: query,
                    apikey: this.apiKey
                }
            });

            const matches = response.data['bestMatches'];
            if (!matches) return [];

            return matches.map((match: any) => ({
                symbol: match['1. symbol'].replace('.NSE', '.NS').replace('.NS', '.NS'), // Standardize to .NS
                name: match['2. name'],
                type: match['3. type'],
                region: match['4. region'],
                currency: match['8. currency']
            })).filter((m: any) => m.region === 'India' || m.symbol.endsWith('.NS'));
        } catch (error) {
            console.error('Alpha Vantage search error:', error);
            return [];
        }
    }

    async getQuote(symbol: string) {
        // Standardize symbol for Alpha Vantage
        let avSymbol = symbol.toUpperCase();
        if (avSymbol.endsWith('.NSE')) {
            avSymbol = avSymbol.replace('.NSE', '.NS');
        } else if (!avSymbol.includes('.')) {
            avSymbol = `${avSymbol}.NS`;
        }

        // 1. Try Alpha Vantage first IF key is present
        if (this.apiKey) {
            try {
                const response = await axios.get(this.baseUrl, {
                    params: {
                        function: 'GLOBAL_QUOTE',
                        symbol: avSymbol,
                        apikey: this.apiKey
                    },
                    timeout: 5000
                });

                const data = response.data['Global Quote'];

                // If not rate limited and has data
                if (data && Object.keys(data).length > 0 && !response.data['Note'] && !response.data['Information']) {
                    return {
                        symbol: symbol,
                        price: parseFloat(data['05. price']),
                        change: parseFloat(data['09. change']),
                        changePercent: parseFloat(data['10. change percent'].replace('%', '')),
                        lastUpdated: new Date().toISOString(),
                        source: 'AlphaVantage'
                    };
                }
                console.warn(`Alpha Vantage limit reached or no data for ${avSymbol}. Falling back to SerpApi (Google Finance)...`);
            } catch (error) {
                console.error(`Alpha Vantage error for ${avSymbol}:`, error);
            }
        }

        // 2. FALLBACK: SerpApi (Google Finance) - As per Lead's instructions (No Yahoo Finance!)
        try {
            const quote = await serpApiService.getGoogleFinanceQuote(symbol);
            if (quote) {
                return quote;
            }
        } catch (error) {
            console.error(`SerpApi fallback error for ${symbol}:`, error);
        }

        return null;
    }
}

export const alphaVantageService = new AlphaVantageService();
