/**
 * Live Price Service - Alpha Vantage Integration (via Backend)
 *
 * Fetches real-time stock prices from Alpha Vantage through our own server API.
 */

import axios from 'axios';

export interface LivePrice {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  exchange: 'NSE' | 'BSE';
  error?: string;
}

const API_BASE_URL = 'http://localhost:5000/api';

// Cache to avoid repeated requests
const priceCache: Map<string, { price: LivePrice; timestamp: number }> = new Map();
const CACHE_DURATION = 60000; // 1 minute cache

/**
 * Fetch live price from Alpha Vantage via our Backend
 */
export async function fetchLivePrice(symbol: string, exchange: 'NSE' | 'BSE' = 'NSE'): Promise<LivePrice> {
  const cacheKey = `${symbol}:${exchange}`;
  const cached = priceCache.get(cacheKey);

  // Return cached if fresh
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.price;
  }

  try {
    // We send the symbol as is (e.g. RELIANCE.NSE) to the backend
    const response = await axios.get(`${API_BASE_URL}/stocks/${symbol}/price`);

    const data = response.data;

    const livePrice: LivePrice = {
      symbol: data.symbol,
      price: data.price,
      change: data.change,
      changePercent: data.changePercent,
      lastUpdated: data.lastUpdated,
      exchange
    };

    // Cache the result
    priceCache.set(cacheKey, { price: livePrice, timestamp: Date.now() });

    return livePrice;

  } catch (error: any) {
    console.error(`Error fetching price for ${symbol}:`, error);

    // If it's a rate limit or other error, return a placeholder or 0
    return {
      symbol,
      price: 0,
      change: 0,
      changePercent: 0,
      lastUpdated: new Date().toISOString(),
      exchange,
      error: error.response?.data?.error || error.message || 'Unknown error'
    };
  }
}

/**
 * Fetch prices for multiple symbols in batches
 */
export async function fetchMultiplePrices(
  symbols: string[],
  exchange: 'NSE' | 'BSE' = 'NSE',
  batchSize: number = 2 // Small batch size for Alpha Vantage free tier limits
): Promise<Map<string, LivePrice>> {
  const results = new Map<string, LivePrice>();

  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize);
    const promises = batch.map(symbol => fetchLivePrice(symbol, exchange));
    const batchResults = await Promise.all(promises);

    batchResults.forEach(result => {
      results.set(result.symbol, result);
    });

    // Substantial delay between batches to respect Alpha Vantage's 5 requests/min free limit
    if (i + batchSize < symbols.length) {
      await new Promise(resolve => setTimeout(resolve, 15000)); // 15s wait
    }
  }

  return results;
}

/**
 * Clear the price cache
 */
export function clearPriceCache(): void {
  priceCache.clear();
}

/**
 * Get cached price if available
 */
export function getCachedPrice(symbol: string, exchange: 'NSE' | 'BSE' = 'NSE'): LivePrice | null {
  const cached = priceCache.get(`${symbol}:${exchange}`);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.price;
  }
  return null;
}
