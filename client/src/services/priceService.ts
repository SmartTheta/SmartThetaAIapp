/**
 * Live Price Service - Google Finance Integration
 *
 * Fetches real-time stock prices from Google Finance for NSE/BSE stocks.
 * Uses a CORS proxy for browser compatibility.
 */

export interface LivePrice {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  exchange: 'NSE' | 'BSE';
  error?: string;
}

// CORS proxy for browser requests
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Cache to avoid repeated requests
const priceCache: Map<string, { price: LivePrice; timestamp: number }> = new Map();
const CACHE_DURATION = 60000; // 1 minute cache

/**
 * Fetch live price from Google Finance
 */
export async function fetchLivePrice(symbol: string, exchange: 'NSE' | 'BSE' = 'NSE'): Promise<LivePrice> {
  const cacheKey = `${symbol}:${exchange}`;
  const cached = priceCache.get(cacheKey);

  // Return cached if fresh
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.price;
  }

  try {
    const googleSymbol = `${symbol}:${exchange}`;
    const url = `https://www.google.com/finance/quote/${googleSymbol}`;
    const proxyUrl = `${CORS_PROXY}${encodeURIComponent(url)}`;

    const response = await fetch(proxyUrl);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();

    // Parse price from Google Finance HTML
    // Look for the main price which is in a specific data attribute pattern
    const priceMatch = html.match(/data-last-price="([0-9.]+)"/);
    const changeMatch = html.match(/data-price-change="([+-]?[0-9.]+)"/);
    const changePercentMatch = html.match(/data-price-change-percent="([+-]?[0-9.]+)"/);

    // Alternative parsing - look for the price in the page content
    let price = 0;
    let change = 0;
    let changePercent = 0;

    if (priceMatch) {
      price = parseFloat(priceMatch[1]);
    } else {
      // Fallback: Look for price pattern in the HTML
      // Google Finance shows price like "₹1,234.56" or in JSON-like structures
      const altPriceMatch = html.match(/class="YMlKec fxKbKc"[^>]*>([^<]+)</);
      if (altPriceMatch) {
        const priceStr = altPriceMatch[1].replace(/[₹,\s]/g, '');
        price = parseFloat(priceStr);
      }
    }

    if (changeMatch) {
      change = parseFloat(changeMatch[1]);
    }
    if (changePercentMatch) {
      changePercent = parseFloat(changePercentMatch[1]);
    }

    if (price === 0 || isNaN(price)) {
      throw new Error('Could not parse price');
    }

    const livePrice: LivePrice = {
      symbol,
      price,
      change,
      changePercent,
      lastUpdated: new Date().toISOString(),
      exchange
    };

    // Cache the result
    priceCache.set(cacheKey, { price: livePrice, timestamp: Date.now() });

    return livePrice;

  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error);
    return {
      symbol,
      price: 0,
      change: 0,
      changePercent: 0,
      lastUpdated: new Date().toISOString(),
      exchange,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Fetch prices for multiple symbols in batches
 */
export async function fetchMultiplePrices(
  symbols: string[],
  exchange: 'NSE' | 'BSE' = 'NSE',
  batchSize: number = 5
): Promise<Map<string, LivePrice>> {
  const results = new Map<string, LivePrice>();

  // Process in batches to avoid rate limiting
  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize);
    const promises = batch.map(symbol => fetchLivePrice(symbol, exchange));
    const batchResults = await Promise.all(promises);

    batchResults.forEach(result => {
      results.set(result.symbol, result);
    });

    // Small delay between batches
    if (i + batchSize < symbols.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
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
