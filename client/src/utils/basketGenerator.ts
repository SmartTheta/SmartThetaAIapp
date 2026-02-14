/**
 * Smart Basket Generator
 *
 * Automatically creates a diversified stock basket based on:
 * - User's risk tier (1-6)
 * - Available capital
 * - Stock risk scores
 * - Sector diversification
 */

import { ScoredStock, getStocksForTier } from '../data/scoredStocks';

export interface BasketItem {
  stock: ScoredStock;
  units: number;
  price: number; // Current price used for calculation
  amount: number; // units * price
  allocation: number; // percentage of total capital
  reason: string; // Why this stock was selected
}

export interface GeneratedBasket {
  items: BasketItem[];
  totalAmount: number;
  totalStocks: number;
  unusedCapital: number;
  diversification: {
    sectors: string[];
    riskCategories: string[];
  };
  strategy: string;
}

/**
 * Generate optimal basket based on tier and capital
 */
export function generateSmartBasket(
  userTier: number,
  capital: number,
  livePrices?: Map<string, number>
): GeneratedBasket {
  const availableStocks = getStocksForTier(userTier);

  // Strategy based on tier
  const config = getStrategyConfig(userTier);

  // Select stocks with sector diversification
  const selectedStocks = selectDiversifiedStocks(availableStocks, config);

  // Allocate capital based on risk-weighted approach
  const basketItems = allocateCapital(selectedStocks, capital, config, livePrices);

  const totalAmount = basketItems.reduce((sum, item) => sum + item.amount, 0);
  const sectors = [...new Set(basketItems.map(item => item.stock.sector))];
  const riskCategories = [...new Set(basketItems.map(item => item.stock.riskCategory))];

  return {
    items: basketItems,
    totalAmount,
    totalStocks: basketItems.length,
    unusedCapital: capital - totalAmount,
    diversification: {
      sectors,
      riskCategories
    },
    strategy: config.strategyName
  };
}

interface StrategyConfig {
  strategyName: string;
  stockCount: number;
  maxPerStock: number; // Max % allocation per stock
  minPerStock: number; // Min % allocation per stock
  sectorLimit: number; // Max stocks per sector
  preferLowRisk: boolean;
  riskWeighting: 'equal' | 'inverse' | 'proportional';
}

function getStrategyConfig(tier: number): StrategyConfig {
  switch (tier) {
    case 1: // Capital Preservation
      return {
        strategyName: 'Ultra Conservative - Blue Chip Focus',
        stockCount: 10,
        maxPerStock: 15,
        minPerStock: 5,
        sectorLimit: 2,
        preferLowRisk: true,
        riskWeighting: 'inverse' // Lower risk gets more allocation
      };
    case 2: // Conservative Income
      return {
        strategyName: 'Conservative - Stable Growth',
        stockCount: 10,
        maxPerStock: 15,
        minPerStock: 5,
        sectorLimit: 2,
        preferLowRisk: true,
        riskWeighting: 'inverse'
      };
    case 3: // Moderate Balanced
      return {
        strategyName: 'Balanced - Growth & Stability',
        stockCount: 8,
        maxPerStock: 18,
        minPerStock: 8,
        sectorLimit: 2,
        preferLowRisk: false,
        riskWeighting: 'equal'
      };
    case 4: // Growth Focused
      return {
        strategyName: 'Growth - Momentum Focus',
        stockCount: 7,
        maxPerStock: 20,
        minPerStock: 10,
        sectorLimit: 3,
        preferLowRisk: false,
        riskWeighting: 'proportional'
      };
    case 5: // Aggressive Growth
      return {
        strategyName: 'Aggressive - High Alpha',
        stockCount: 6,
        maxPerStock: 25,
        minPerStock: 10,
        sectorLimit: 3,
        preferLowRisk: false,
        riskWeighting: 'proportional'
      };
    case 6: // Maximum Growth
      return {
        strategyName: 'Maximum Growth - Concentrated Bets',
        stockCount: 5,
        maxPerStock: 30,
        minPerStock: 15,
        sectorLimit: 4,
        preferLowRisk: false,
        riskWeighting: 'proportional'
      };
    default:
      return getStrategyConfig(3);
  }
}

function selectDiversifiedStocks(
  stocks: ScoredStock[],
  config: StrategyConfig
): ScoredStock[] {
  const selected: ScoredStock[] = [];
  const sectorCount: Map<string, number> = new Map();

  // Sort by risk score (lowest first if preferLowRisk)
  const sorted = [...stocks].sort((a, b) => {
    if (config.preferLowRisk) {
      return a.riskScore - b.riskScore;
    }
    // For growth tiers, balance between low risk and moderate
    return (a.riskScore * 0.5 + (100 - a.profitabilityScore) * 0.5) -
           (b.riskScore * 0.5 + (100 - b.profitabilityScore) * 0.5);
  });

  // Select stocks with sector diversification
  for (const stock of sorted) {
    if (selected.length >= config.stockCount) break;

    const currentSectorCount = sectorCount.get(stock.sector) || 0;
    if (currentSectorCount >= config.sectorLimit) continue;

    // Skip stocks with very low prices (penny stocks)
    if (stock.currentPrice < 50) continue;

    // Skip stocks with very high P/E (overvalued)
    if (stock.pe > 100) continue;

    selected.push(stock);
    sectorCount.set(stock.sector, currentSectorCount + 1);
  }

  return selected;
}

function allocateCapital(
  stocks: ScoredStock[],
  capital: number,
  config: StrategyConfig,
  livePrices?: Map<string, number>
): BasketItem[] {
  if (stocks.length === 0) return [];

  // Calculate weights based on strategy
  let weights: number[];

  switch (config.riskWeighting) {
    case 'inverse':
      // Lower risk score = higher weight
      const inverseScores = stocks.map(s => 100 - s.riskScore);
      const inverseTotal = inverseScores.reduce((a, b) => a + b, 0);
      weights = inverseScores.map(s => s / inverseTotal);
      break;

    case 'proportional':
      // Higher profitability = higher weight
      const profitScores = stocks.map(s => s.profitabilityScore);
      const profitTotal = profitScores.reduce((a, b) => a + b, 0);
      weights = profitScores.map(s => s / profitTotal);
      break;

    case 'equal':
    default:
      weights = stocks.map(() => 1 / stocks.length);
  }

  // Apply min/max constraints
  weights = weights.map(w => {
    const percent = w * 100;
    if (percent < config.minPerStock) return config.minPerStock / 100;
    if (percent > config.maxPerStock) return config.maxPerStock / 100;
    return w;
  });

  // Normalize weights to sum to 1
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  weights = weights.map(w => w / totalWeight);

  // Create basket items
  const items: BasketItem[] = [];

  for (let i = 0; i < stocks.length; i++) {
    const stock = stocks[i];
    const allocation = weights[i] * 100;
    const targetAmount = capital * weights[i];

    // Use live price if available, otherwise static
    const price = livePrices?.get(stock.symbol) || stock.currentPrice;

    // Calculate units (must be whole number for stocks)
    const units = Math.floor(targetAmount / price);

    if (units < 1) continue; // Skip if can't afford even 1 unit

    const actualAmount = units * price;

    // Generate reason for selection
    const reason = generateSelectionReason(stock, config);

    items.push({
      stock,
      units,
      price,
      amount: actualAmount,
      allocation: (actualAmount / capital) * 100,
      reason
    });
  }

  return items;
}

function generateSelectionReason(stock: ScoredStock, config: StrategyConfig): string {
  const reasons: string[] = [];

  if (stock.riskScore <= 35) {
    reasons.push('Low risk score');
  }
  if (stock.roe >= 15) {
    reasons.push(`Strong ROE (${stock.roe.toFixed(1)}%)`);
  }
  if (stock.roce >= 15) {
    reasons.push(`High ROCE (${stock.roce.toFixed(1)}%)`);
  }
  if (stock.dividendYield >= 2) {
    reasons.push(`Good dividend (${stock.dividendYield.toFixed(1)}%)`);
  }
  if (stock.pe > 0 && stock.pe <= 25) {
    reasons.push('Reasonable valuation');
  }
  if (stock.salesGrowth5Y >= 10) {
    reasons.push(`Growth: ${stock.salesGrowth5Y}% CAGR`);
  }

  if (reasons.length === 0) {
    reasons.push('Diversification pick');
  }

  return reasons.slice(0, 2).join(' • ');
}

/**
 * Add a stock to existing basket
 */
export function addToBasket(
  basket: GeneratedBasket,
  stock: ScoredStock,
  units: number,
  price: number
): GeneratedBasket {
  const amount = units * price;
  const newItem: BasketItem = {
    stock,
    units,
    price,
    amount,
    allocation: 0, // Will be recalculated
    reason: 'Manually added'
  };

  const newItems = [...basket.items, newItem];
  const totalAmount = newItems.reduce((sum, item) => sum + item.amount, 0);

  // Recalculate allocations
  newItems.forEach(item => {
    item.allocation = (item.amount / totalAmount) * 100;
  });

  return {
    ...basket,
    items: newItems,
    totalAmount,
    totalStocks: newItems.length,
    unusedCapital: basket.unusedCapital - amount,
    diversification: {
      sectors: [...new Set(newItems.map(item => item.stock.sector))],
      riskCategories: [...new Set(newItems.map(item => item.stock.riskCategory))]
    }
  };
}

/**
 * Remove a stock from basket
 */
export function removeFromBasket(
  basket: GeneratedBasket,
  symbol: string,
  originalCapital: number
): GeneratedBasket {
  const newItems = basket.items.filter(item => item.stock.symbol !== symbol);
  const totalAmount = newItems.reduce((sum, item) => sum + item.amount, 0);

  // Recalculate allocations
  newItems.forEach(item => {
    item.allocation = totalAmount > 0 ? (item.amount / totalAmount) * 100 : 0;
  });

  return {
    ...basket,
    items: newItems,
    totalAmount,
    totalStocks: newItems.length,
    unusedCapital: originalCapital - totalAmount,
    diversification: {
      sectors: [...new Set(newItems.map(item => item.stock.sector))],
      riskCategories: [...new Set(newItems.map(item => item.stock.riskCategory))]
    }
  };
}

/**
 * Update units for a stock in basket
 */
export function updateBasketUnits(
  basket: GeneratedBasket,
  symbol: string,
  newUnits: number,
  originalCapital: number
): GeneratedBasket {
  const newItems = basket.items.map(item => {
    if (item.stock.symbol === symbol) {
      return {
        ...item,
        units: newUnits,
        amount: newUnits * item.price
      };
    }
    return item;
  });

  const totalAmount = newItems.reduce((sum, item) => sum + item.amount, 0);

  // Recalculate allocations
  newItems.forEach(item => {
    item.allocation = totalAmount > 0 ? (item.amount / totalAmount) * 100 : 0;
  });

  return {
    ...basket,
    items: newItems,
    totalAmount,
    totalStocks: newItems.length,
    unusedCapital: originalCapital - totalAmount
  };
}
