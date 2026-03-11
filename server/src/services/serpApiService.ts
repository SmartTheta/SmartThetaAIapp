import axios from 'axios';

export class SerpApiService {
    private apiKey: string;
    private baseUrl: string = 'https://serpapi.com/search.json';

    constructor() {
        this.apiKey = process.env.SERPAPI_API_KEY || '';
    }

    async getGoogleFinanceQuote(symbol: string) {
        if (!this.apiKey) {
            console.warn('SerpApi Key is missing in .env');
            return null;
        }

        // Standardize symbol for Google Finance via SerpApi
        // RELIANCE.NSE -> RELIANCE:NSE
        let gfSymbol = symbol.toUpperCase().replace('.NSE', ':NSE').replace('.BSE', ':BSE');
        if (!gfSymbol.includes(':')) {
            gfSymbol = `${gfSymbol}:NSE`;
        }

        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    engine: 'google_finance',
                    q: gfSymbol,
                    api_key: this.apiKey
                }
            });

            const summary = response.data.summary;

            if (!summary) {
                console.error(`SerpApi: No summary data returned for ${gfSymbol}`);
                return null;
            }

            return {
                symbol: symbol,
                price: parseFloat(summary.price.replace(/[₹,]/g, '')),
                change: summary.price_change?.value || 0,
                changePercent: summary.price_change?.percentage || 0,
                currency: summary.currency,
                lastUpdated: new Date().toISOString(),
                source: 'GoogleFinance (SerpApi)'
            };
        } catch (error) {
            console.error(`SerpApi error for ${gfSymbol}:`, error);
            return null;
        }
    }
}

export const serpApiService = new SerpApiService();
