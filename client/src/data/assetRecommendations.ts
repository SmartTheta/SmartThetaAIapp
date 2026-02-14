/**
 * SmartTheta Asset Recommendations
 *
 * ETFs, Bonds, Debt Funds, and Gold recommendations
 * curated based on risk profiles and market research.
 *
 * DATA SOURCES & METHODOLOGY:
 * ===========================
 *
 * 1. ETF Selection Criteria:
 *    - Tracking Error: < 0.5% for index funds
 *    - Expense Ratio: Lower is better
 *    - AUM: > ₹500 Cr preferred for liquidity
 *    - Historical Returns: Consistent with benchmark
 *
 * 2. Debt Fund Selection:
 *    - Credit Rating: AA and above only
 *    - Modified Duration: Matched to investment horizon
 *    - Portfolio Quality: No exposure to stressed assets
 *
 * 3. Bond Selection (Direct):
 *    - Government Securities: Sovereign guarantee
 *    - AAA Corporate Bonds: Top-rated companies
 *    - Tax-free Bonds: For higher tax brackets
 *
 * 4. Gold Selection:
 *    - Sovereign Gold Bonds: Best for long-term
 *    - Gold ETFs: For liquidity
 *    - Digital Gold: For small amounts
 *
 * TIER MAPPING (Debt + Gold MAX 50%):
 * ===================================
 * Tier 1 (Capital Preservation): 50% Equity, 40% Debt, 10% Gold
 * Tier 2 (Conservative Income): 60% Equity, 32% Debt, 8% Gold
 * Tier 3 (Moderate Balanced): 70% Equity, 24% Debt, 6% Gold
 * Tier 4 (Growth Focused): 80% Equity, 16% Debt, 4% Gold
 * Tier 5 (Aggressive Growth): 90% Equity, 8% Debt, 2% Gold
 * Tier 6 (Maximum Growth): 95% Equity, 5% Debt, 0% Gold
 */

export interface AssetRecommendation {
  id: string;
  name: string;
  category: 'etf' | 'debt' | 'bond' | 'gold' | 'liquid';
  type: string;
  issuer: string;
  expenseRatio?: number;
  yield?: number;
  rating?: string;
  aum?: number; // in Crores
  minInvestment: number;
  riskLevel: 'very-low' | 'low' | 'moderate' | 'high';
  suitableTiers: number[];
  returns1Y?: number;
  returns3Y?: number;
  returns5Y?: number;
  maturityYears?: number;
  description: string;
  features: string[];
  latestPrice?: number; // NAV or price
  priceDate?: string;
}

// Large Cap ETFs - Lowest Risk in Equity
export const largeCapETFs: AssetRecommendation[] = [
  {
    id: 'nifty50-utietf',
    name: 'UTI Nifty 50 ETF',
    category: 'etf',
    type: 'Large Cap Index',
    issuer: 'UTI AMC',
    expenseRatio: 0.05,
    aum: 12500,
    minInvestment: 100,
    riskLevel: 'moderate',
    suitableTiers: [2, 3, 4, 5, 6],
    returns1Y: 22.5,
    returns3Y: 14.8,
    returns5Y: 16.2,
    description: 'Tracks Nifty 50 - India\'s top 50 companies by market cap',
    features: ['Lowest expense ratio', 'High liquidity', 'Benchmark: Nifty 50'],
    latestPrice: 245.50,
    priceDate: '2026-02-06'
  },
  {
    id: 'sensex-hdfc',
    name: 'HDFC Sensex ETF',
    category: 'etf',
    type: 'Large Cap Index',
    issuer: 'HDFC AMC',
    expenseRatio: 0.05,
    aum: 8200,
    minInvestment: 100,
    riskLevel: 'moderate',
    suitableTiers: [2, 3, 4, 5, 6],
    returns1Y: 21.8,
    returns3Y: 14.2,
    returns5Y: 15.8,
    description: 'Tracks Sensex - 30 leading BSE companies',
    features: ['BSE benchmark', 'Blue chip exposure', 'Low tracking error'],
    latestPrice: 780.25,
    priceDate: '2026-02-06'
  },
  {
    id: 'nifty100-nippon',
    name: 'Nippon India Nifty 100 ETF',
    category: 'etf',
    type: 'Large Cap Index',
    issuer: 'Nippon India AMC',
    expenseRatio: 0.08,
    aum: 3200,
    minInvestment: 100,
    riskLevel: 'moderate',
    suitableTiers: [3, 4, 5, 6],
    returns1Y: 24.1,
    returns3Y: 15.5,
    returns5Y: 16.8,
    description: 'Broader large cap exposure - top 100 companies',
    features: ['Wider diversification', 'Includes next 50', 'Low cost'],
    latestPrice: 198.75,
    priceDate: '2026-02-06'
  }
];

// Mid & Small Cap ETFs - Higher Risk
export const midSmallCapETFs: AssetRecommendation[] = [
  {
    id: 'niftymidcap150-motilal',
    name: 'Motilal Oswal Nifty Midcap 150 ETF',
    category: 'etf',
    type: 'Mid Cap Index',
    issuer: 'Motilal Oswal AMC',
    expenseRatio: 0.15,
    aum: 1800,
    minInvestment: 100,
    riskLevel: 'high',
    suitableTiers: [4, 5, 6],
    returns1Y: 32.5,
    returns3Y: 22.8,
    returns5Y: 21.5,
    description: 'Mid-cap companies - high growth potential',
    features: ['Growth focus', 'Higher volatility', 'Long-term wealth creation'],
    latestPrice: 18.45,
    priceDate: '2026-02-06'
  },
  {
    id: 'niftysmallcap250-nippon',
    name: 'Nippon India Nifty Smallcap 250 ETF',
    category: 'etf',
    type: 'Small Cap Index',
    issuer: 'Nippon India AMC',
    expenseRatio: 0.20,
    aum: 850,
    minInvestment: 100,
    riskLevel: 'high',
    suitableTiers: [5, 6],
    returns1Y: 38.2,
    returns3Y: 28.5,
    returns5Y: 24.2,
    description: 'Small-cap companies - maximum growth potential',
    features: ['High risk-reward', 'Long-term only', '5+ year horizon recommended'],
    latestPrice: 12.80,
    priceDate: '2026-02-06'
  }
];

// Debt Funds - Low to Very Low Risk
export const debtFunds: AssetRecommendation[] = [
  {
    id: 'overnight-hdfc',
    name: 'HDFC Overnight Fund',
    category: 'debt',
    type: 'Overnight Fund',
    issuer: 'HDFC AMC',
    expenseRatio: 0.10,
    yield: 6.5,
    rating: 'AAA',
    aum: 12000,
    minInvestment: 500,
    riskLevel: 'very-low',
    suitableTiers: [1, 2, 3, 4, 5, 6],
    returns1Y: 6.4,
    returns3Y: 5.8,
    description: 'Invests in 1-day maturity securities - near-zero risk',
    features: ['Instant redemption', 'Emergency fund ideal', 'Sovereign securities'],
    latestPrice: 3245.67,
    priceDate: '2026-02-06'
  },
  {
    id: 'liquid-axis',
    name: 'Axis Liquid Fund',
    category: 'liquid',
    type: 'Liquid Fund',
    issuer: 'Axis AMC',
    expenseRatio: 0.15,
    yield: 7.0,
    rating: 'AAA',
    aum: 35000,
    minInvestment: 500,
    riskLevel: 'very-low',
    suitableTiers: [1, 2, 3, 4, 5, 6],
    returns1Y: 6.8,
    returns3Y: 6.2,
    description: 'Short-term money market - 91 day max maturity',
    features: ['T+1 redemption', 'Better than savings', 'High quality portfolio'],
    latestPrice: 2456.78,
    priceDate: '2026-02-06'
  },
  {
    id: 'shortduration-sbi',
    name: 'SBI Short Duration Fund',
    category: 'debt',
    type: 'Short Duration',
    issuer: 'SBI AMC',
    expenseRatio: 0.30,
    yield: 7.5,
    rating: 'AAA',
    aum: 18500,
    minInvestment: 500,
    riskLevel: 'low',
    suitableTiers: [1, 2, 3, 4, 5],
    returns1Y: 7.2,
    returns3Y: 6.8,
    returns5Y: 7.1,
    maturityYears: 1.5,
    description: '1-3 year duration - stable returns',
    features: ['Tax efficient (3Y+)', 'Low interest rate risk', 'AAA portfolio'],
    latestPrice: 28.45,
    priceDate: '2026-02-06'
  },
  {
    id: 'corporatebond-icici',
    name: 'ICICI Prudential Corporate Bond Fund',
    category: 'debt',
    type: 'Corporate Bond',
    issuer: 'ICICI Prudential AMC',
    expenseRatio: 0.35,
    yield: 7.8,
    rating: 'AA+',
    aum: 22000,
    minInvestment: 500,
    riskLevel: 'low',
    suitableTiers: [1, 2, 3, 4],
    returns1Y: 7.5,
    returns3Y: 7.2,
    returns5Y: 7.8,
    maturityYears: 2.5,
    description: 'High-quality corporate bonds - AAA/AA+ only',
    features: ['Credit quality focus', 'Regular income', 'Low default risk'],
    latestPrice: 25.12,
    priceDate: '2026-02-06'
  },
  {
    id: 'gilt-dsp',
    name: 'DSP Gilt Fund',
    category: 'debt',
    type: 'Government Securities',
    issuer: 'DSP AMC',
    expenseRatio: 0.45,
    yield: 7.2,
    rating: 'Sovereign',
    aum: 4500,
    minInvestment: 500,
    riskLevel: 'low',
    suitableTiers: [1, 2, 3],
    returns1Y: 8.5,
    returns3Y: 6.5,
    returns5Y: 8.2,
    description: 'Government securities - zero credit risk',
    features: ['Sovereign guarantee', 'Interest rate sensitive', 'Capital appreciation potential'],
    latestPrice: 62.34,
    priceDate: '2026-02-06'
  }
];

// Government & Corporate Bonds (Direct)
export const bonds: AssetRecommendation[] = [
  {
    id: 'sgb-2026',
    name: 'Sovereign Gold Bond 2026-27',
    category: 'gold',
    type: 'Sovereign Gold Bond',
    issuer: 'RBI / Govt of India',
    yield: 2.5,
    rating: 'Sovereign',
    minInvestment: 5000,
    riskLevel: 'low',
    suitableTiers: [1, 2, 3, 4],
    maturityYears: 8,
    description: 'Gold investment with additional interest - best gold investment',
    features: ['2.5% annual interest', 'Tax-free on maturity', 'No storage cost'],
    latestPrice: 6250,
    priceDate: '2026-02-06'
  },
  {
    id: 'rbi-floater',
    name: 'RBI Floating Rate Bond 2028',
    category: 'bond',
    type: 'Government Bond',
    issuer: 'RBI',
    yield: 8.05,
    rating: 'Sovereign',
    minInvestment: 1000,
    riskLevel: 'very-low',
    suitableTiers: [1, 2, 3, 4, 5],
    maturityYears: 7,
    description: 'Floating rate linked to NSC - inflation protection',
    features: ['Floating rate', 'Sovereign safety', 'Semi-annual interest'],
    latestPrice: 1000,
    priceDate: '2026-02-06'
  },
  {
    id: 'nhai-taxfree',
    name: 'NHAI Tax-Free Bond 2034',
    category: 'bond',
    type: 'Tax-Free Bond',
    issuer: 'NHAI',
    yield: 5.75,
    rating: 'AAA',
    minInvestment: 10000,
    riskLevel: 'very-low',
    suitableTiers: [1, 2, 3],
    maturityYears: 10,
    description: 'Tax-free interest for high tax bracket investors',
    features: ['Tax-free interest', 'Listed on exchange', 'Government backed'],
    latestPrice: 1150,
    priceDate: '2026-02-06'
  }
];

// Gold Investment Options
export const goldOptions: AssetRecommendation[] = [
  {
    id: 'goldetf-nippon',
    name: 'Nippon India Gold ETF',
    category: 'gold',
    type: 'Gold ETF',
    issuer: 'Nippon India AMC',
    expenseRatio: 0.50,
    aum: 2500,
    minInvestment: 100,
    riskLevel: 'moderate',
    suitableTiers: [1, 2, 3, 4, 5],
    returns1Y: 12.5,
    returns3Y: 10.8,
    returns5Y: 11.2,
    description: 'Physical gold exposure through ETF - high liquidity',
    features: ['Demat form', 'No storage hassle', 'Real-time trading'],
    latestPrice: 58.25,
    priceDate: '2026-02-06'
  },
  {
    id: 'goldfund-hdfc',
    name: 'HDFC Gold Fund',
    category: 'gold',
    type: 'Gold Fund of Funds',
    issuer: 'HDFC AMC',
    expenseRatio: 0.15,
    aum: 1800,
    minInvestment: 500,
    riskLevel: 'moderate',
    suitableTiers: [1, 2, 3, 4, 5],
    returns1Y: 12.2,
    returns3Y: 10.5,
    returns5Y: 10.9,
    description: 'Invest in gold without demat - SIP enabled',
    features: ['SIP available', 'No demat required', 'Easy access'],
    latestPrice: 22.45,
    priceDate: '2026-02-06'
  }
];

// Get all assets
export const getAllAssets = (): AssetRecommendation[] => {
  return [
    ...largeCapETFs,
    ...midSmallCapETFs,
    ...debtFunds,
    ...bonds,
    ...goldOptions
  ];
};

// Get assets suitable for a tier
export const getAssetsForTier = (tier: number): AssetRecommendation[] => {
  return getAllAssets().filter(asset => asset.suitableTiers.includes(tier));
};

// Get asset allocation by tier
export interface TierAllocation {
  equity: { min: number; max: number; target: number };
  debt: { min: number; max: number; target: number };
  gold: { min: number; max: number; target: number };
  liquid: { min: number; max: number; target: number };
}

/**
 * ALLOCATION RULE: Debt + Gold combined is MAX 50% even for most conservative tier
 * This ensures minimum 50% equity exposure for all investors
 */
export const tierAllocations: Record<number, TierAllocation> = {
  1: {
    // Capital Preservation: 50% Equity, 40% Debt, 10% Gold (Debt+Gold = 50%)
    equity: { min: 45, max: 55, target: 50 },
    debt: { min: 35, max: 45, target: 40 },
    gold: { min: 5, max: 15, target: 10 },
    liquid: { min: 0, max: 5, target: 0 }
  },
  2: {
    // Conservative Income: 60% Equity, 32% Debt, 8% Gold (Debt+Gold = 40%)
    equity: { min: 55, max: 65, target: 60 },
    debt: { min: 28, max: 38, target: 32 },
    gold: { min: 5, max: 12, target: 8 },
    liquid: { min: 0, max: 5, target: 0 }
  },
  3: {
    // Moderate Balanced: 70% Equity, 24% Debt, 6% Gold (Debt+Gold = 30%)
    equity: { min: 65, max: 75, target: 70 },
    debt: { min: 20, max: 28, target: 24 },
    gold: { min: 3, max: 10, target: 6 },
    liquid: { min: 0, max: 5, target: 0 }
  },
  4: {
    // Growth Focused: 80% Equity, 16% Debt, 4% Gold (Debt+Gold = 20%)
    equity: { min: 75, max: 85, target: 80 },
    debt: { min: 12, max: 20, target: 16 },
    gold: { min: 0, max: 8, target: 4 },
    liquid: { min: 0, max: 5, target: 0 }
  },
  5: {
    // Aggressive Growth: 90% Equity, 8% Debt, 2% Gold (Debt+Gold = 10%)
    equity: { min: 85, max: 95, target: 90 },
    debt: { min: 5, max: 12, target: 8 },
    gold: { min: 0, max: 5, target: 2 },
    liquid: { min: 0, max: 5, target: 0 }
  },
  6: {
    // Maximum Growth: 95% Equity, 5% Debt, 0% Gold (Debt+Gold = 5%)
    equity: { min: 92, max: 100, target: 95 },
    debt: { min: 0, max: 8, target: 5 },
    gold: { min: 0, max: 3, target: 0 },
    liquid: { min: 0, max: 5, target: 0 }
  }
};

// Generate smart allocation based on capital and tier
export interface PortfolioAllocation {
  category: string;
  assets: {
    asset: AssetRecommendation;
    allocation: number; // percentage
    amount: number;
    units: number;
  }[];
  totalAmount: number;
  totalPercentage: number;
}

export const generatePortfolio = (
  capital: number,
  tier: number
): PortfolioAllocation[] => {
  const allocation = tierAllocations[tier] || tierAllocations[3];
  const availableAssets = getAssetsForTier(tier);

  const result: PortfolioAllocation[] = [];

  // Equity allocation
  const equityAmount = capital * (allocation.equity.target / 100);
  const equityAssets = availableAssets.filter(a =>
    a.category === 'etf' && (a.type.includes('Cap') || a.type.includes('Index'))
  );
  if (equityAssets.length > 0) {
    const perAssetAmount = equityAmount / Math.min(equityAssets.length, 3);
    result.push({
      category: 'Equity (ETFs)',
      assets: equityAssets.slice(0, 3).map(asset => ({
        asset,
        allocation: allocation.equity.target / Math.min(equityAssets.length, 3),
        amount: perAssetAmount,
        units: Math.floor(perAssetAmount / (asset.latestPrice || 100))
      })),
      totalAmount: equityAmount,
      totalPercentage: allocation.equity.target
    });
  }

  // Debt allocation
  const debtAmount = capital * (allocation.debt.target / 100);
  const debtAssets = availableAssets.filter(a =>
    a.category === 'debt' || a.category === 'liquid' || a.category === 'bond'
  );
  if (debtAssets.length > 0) {
    const perAssetAmount = debtAmount / Math.min(debtAssets.length, 3);
    result.push({
      category: 'Debt (Funds & Bonds)',
      assets: debtAssets.slice(0, 3).map(asset => ({
        asset,
        allocation: allocation.debt.target / Math.min(debtAssets.length, 3),
        amount: perAssetAmount,
        units: Math.floor(perAssetAmount / (asset.latestPrice || 100))
      })),
      totalAmount: debtAmount,
      totalPercentage: allocation.debt.target
    });
  }

  // Gold allocation
  if (allocation.gold.target > 0) {
    const goldAmount = capital * (allocation.gold.target / 100);
    const goldAssets = availableAssets.filter(a => a.category === 'gold');
    if (goldAssets.length > 0) {
      result.push({
        category: 'Gold',
        assets: goldAssets.slice(0, 2).map(asset => ({
          asset,
          allocation: allocation.gold.target / Math.min(goldAssets.length, 2),
          amount: goldAmount / Math.min(goldAssets.length, 2),
          units: Math.floor((goldAmount / Math.min(goldAssets.length, 2)) / (asset.latestPrice || 100))
        })),
        totalAmount: goldAmount,
        totalPercentage: allocation.gold.target
      });
    }
  }

  return result;
};
