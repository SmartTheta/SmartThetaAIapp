/**
 * Scored Stocks Data
 * Auto-generated from batch_output on 2026-02-07T15:27:31.467Z
 * Total: 634 stocks
 */

export interface ScoredStock {
  symbol: string;
  name: string;
  sector: string;
  industry: string;
  currentPrice: number;
  marketCap: number;
  profitabilityScore: number;
  valuationScore: number;
  financialHealthScore: number;
  growthScore: number;
  stabilityScore: number;
  volatilityScore: number;
  riskScore: number;
  suitableTiers: number[];
  riskCategory: 'Ultra Low' | 'Low' | 'Moderate' | 'Moderate-High' | 'High' | 'Ultra High';
  pe: number;
  roe: number;
  roce: number;
  dividendYield: number;
  salesGrowth5Y: number;
  promoterHolding: number;
  pros: string[];
  cons: string[];
}

export const scoredStocks: ScoredStock[] = [
  {
    "symbol": "DRREDDY",
    "name": "Dr Reddys Laboratories Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1266,
    "marketCap": 105717,
    "profitabilityScore": 77,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 32,
    "riskScore": 29,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 18.3,
    "roe": 18,
    "roce": 22.7,
    "dividendYield": 0.63,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.3% CAGR over last 5 years",
      "Company's working capital requirements have reduced from 90.5 days to 69.2 days"
    ],
    "cons": []
  },
  {
    "symbol": "HINDZINC",
    "name": "Hindustan Zinc Ltd",
    "sector": "Commodities",
    "industry": "Zinc",
    "currentPrice": 490,
    "marketCap": 207231,
    "profitabilityScore": 100,
    "valuationScore": 66,
    "financialHealthScore": 71,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 41,
    "riskScore": 30,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 19.6,
    "roe": 72.9,
    "roce": 61,
    "dividendYield": 5.91,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 55.2%",
      "Company has been maintaining a healthy dividend payout of 164%"
    ],
    "cons": [
      "Stock is trading at 15.1 times its book value",
      "Promoters have pledged or encumbered 90.3% of their holding.",
      "Promoter holding has decreased over last 3 years: -3.09%"
    ]
  },
  {
    "symbol": "INDUSTOWER",
    "name": "Indus Towers Ltd",
    "sector": "Telecommunication",
    "industry": "Telecom - Infrastructure",
    "currentPrice": 403,
    "marketCap": 106318,
    "profitabilityScore": 94,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 31,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 11.4,
    "roe": 32.5,
    "roce": 29,
    "dividendYield": 0,
    "salesGrowth5Y": 35,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 23.3%",
      "Promoter holding has increased by 1.03% over last quarter."
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding has decreased over last 3 years: -18.0%"
    ]
  },
  {
    "symbol": "ZYDUSLIFE",
    "name": "Zydus Lifesciences Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 925,
    "marketCap": 93036,
    "profitabilityScore": 81,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 36,
    "riskScore": 31,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 18.5,
    "roe": 21.2,
    "roce": 24.3,
    "dividendYield": 1.19,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 21.1%",
      "Debtor days have improved from 84.7 to 63.2 days."
    ],
    "cons": []
  },
  {
    "symbol": "CIPLA",
    "name": "Cipla Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1498,
    "marketCap": 120992,
    "profitabilityScore": 74,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 32,
    "riskScore": 32,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 22.2,
    "roe": 17.8,
    "roce": 22.7,
    "dividendYield": 0.87,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 28.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 24.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.97% over past five years.",
      "Promoter holding has decreased over last 3 years: -4.40%",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "COALINDIA",
    "name": "Coal India Ltd",
    "sector": "Energy",
    "industry": "Coal",
    "currentPrice": 377,
    "marketCap": 232459,
    "profitabilityScore": 90,
    "valuationScore": 64,
    "financialHealthScore": 71,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 41,
    "riskScore": 32,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 7.45,
    "roe": 38.9,
    "roce": 48,
    "dividendYield": 7.02,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Stock is providing a good dividend yield of 7.02%.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 48.7%",
      "Company has been maintaining a healthy dividend payout of 45.1%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 8.33% over past five years.",
      "The company has delivered a poor sales growth of 8."
    ]
  },
  {
    "symbol": "ITC",
    "name": "ITC Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Diversified FMCG",
    "currentPrice": 402,
    "marketCap": 504219,
    "profitabilityScore": 95,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 43,
    "volatilityScore": 41,
    "riskScore": 32,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 25,
    "roe": 27.3,
    "roce": 36.8,
    "dividendYield": 3.57,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is providing a good dividend yield of 3.57%.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.0%"
    ],
    "cons": [
      "Stock is trading at 7.09 times its book value",
      "The company has delivered a poor sales growth of 8.81% over past five years.",
      "Earnings include an other income of Rs.17,684 Cr."
    ]
  },
  {
    "symbol": "VEDL",
    "name": "Vedanta Ltd",
    "sector": "Commodities",
    "industry": "Diversified Metals",
    "currentPrice": 511,
    "marketCap": 199938,
    "profitabilityScore": 88,
    "valuationScore": 74,
    "financialHealthScore": 60,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 41,
    "riskScore": 32,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 15.7,
    "roe": 38.5,
    "roce": 25.3,
    "dividendYield": 8.51,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 243%"
    ],
    "cons": [
      "Promoters have pledged or encumbered 100.0% of their holding.",
      "Promoter holding has decreased over last 3 years: -13.3%"
    ]
  },
  {
    "symbol": "HCLTECH",
    "name": "HCL Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 1689,
    "marketCap": 458270,
    "profitabilityScore": 89,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 40,
    "volatilityScore": 41,
    "riskScore": 33,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 27,
    "roe": 25,
    "roce": 31.6,
    "dividendYield": 3.2,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Stock is providing a good dividend yield of 3.20%.",
      "Company has been maintaining a healthy dividend payout of 90.4%",
      "Company's working capital requirements have reduced from 30.4 days to 16.6 days"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.6% over past five years.",
      "The company has emerged as the fastest-growing IT services brand with a ~16% YoY growth in brand value among the top 10 IT companies globally, as per the 2024 Brand Finance Global 500 and IT Services Top 25 Report.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "INFY",
    "name": "Infosys Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 1611,
    "marketCap": 669330,
    "profitabilityScore": 90,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 36,
    "volatilityScore": 41,
    "riskScore": 33,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 23.8,
    "roe": 28.8,
    "roce": 37.5,
    "dividendYield": 2.67,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 30.7%",
      "Company has been maintaining a healthy dividend payout of 65.9%"
    ],
    "cons": [
      "Promoter holding is low: 14.3%"
    ]
  },
  {
    "symbol": "OFSS",
    "name": "Oracle Financial Services Software Ltd",
    "sector": "Information Technology",
    "industry": "Software Products",
    "currentPrice": 8026,
    "marketCap": 69868,
    "profitabilityScore": 96,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 41,
    "volatilityScore": 45,
    "riskScore": 33,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 29.4,
    "roe": 29.3,
    "roce": 40.6,
    "dividendYield": 3.3,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is providing a good dividend yield of 3.30%."
    ],
    "cons": [
      "Stock is trading at 9.47 times its book value",
      "The company has delivered a poor sales growth of 7.09% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "TCS",
    "name": "Tata Consultancy Services Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 3236,
    "marketCap": 1170741,
    "profitabilityScore": 90,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 41,
    "riskScore": 33,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 23.3,
    "roe": 52.4,
    "roce": 64.6,
    "dividendYield": 1.85,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 50.3%",
      "Company has been maintaining a healthy dividend payout of 83.8%"
    ],
    "cons": [
      "Stock is trading at 11.0 times its book value",
      "The company has delivered a poor sales growth of 10.2% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "ABSLAMC",
    "name": "Aditya Birla Sun Life AMC Ltd",
    "sector": "Financial Services",
    "industry": "Asset Management Company",
    "currentPrice": 725,
    "marketCap": 20952,
    "profitabilityScore": 100,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 41,
    "volatilityScore": 51,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 21.6,
    "roe": 27,
    "roce": 35.5,
    "dividendYield": 3.31,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is providing a good dividend yield of 3.31%.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 26.7%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.93% over past five years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "AJANTPHARM",
    "name": "Ajanta Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 2658,
    "marketCap": 33235,
    "profitabilityScore": 88,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 42,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 34.1,
    "roe": 24.9,
    "roce": 32.4,
    "dividendYield": 1.05,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 44.0%"
    ],
    "cons": [
      "Stock is trading at 7.63 times its book value",
      "Promoter holding has decreased over last 3 years: -4.24%"
    ]
  },
  {
    "symbol": "BAJAJ-AUTO",
    "name": "Bajaj Auto Ltd",
    "sector": "Consumer Discretionary",
    "industry": "2/3 Wheelers",
    "currentPrice": 9026,
    "marketCap": 252090,
    "profitabilityScore": 83,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 33,
    "volatilityScore": 41,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 30.3,
    "roe": 22.8,
    "roce": 28.1,
    "dividendYield": 2.33,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 58.1%"
    ],
    "cons": [
      "Stock is trading at 7.38 times its book value"
    ]
  },
  {
    "symbol": "HDFCAMC",
    "name": "HDFC Asset Management Company Ltd",
    "sector": "Financial Services",
    "industry": "Asset Management Company",
    "currentPrice": 2551,
    "marketCap": 109281,
    "profitabilityScore": 100,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 29,
    "volatilityScore": 41,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 39.8,
    "roe": 32.4,
    "roce": 43.3,
    "dividendYield": 1.76,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 75.7%"
    ],
    "cons": [
      "Stock is trading at 14.1 times its book value",
      "Promoter holding has decreased over last 3 years: -10.4%"
    ]
  },
  {
    "symbol": "HEROMOTOCO",
    "name": "Hero MotoCorp Ltd",
    "sector": "Consumer Discretionary",
    "industry": "2/3 Wheelers",
    "currentPrice": 6167,
    "marketCap": 123372,
    "profitabilityScore": 82,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 36,
    "volatilityScore": 41,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 23.4,
    "roe": 23.1,
    "roce": 30.3,
    "dividendYield": 2.68,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 73.7%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 6.94% over past five years.",
      "The company has delivered a poor sales growth of 6."
    ]
  },
  {
    "symbol": "LUPIN",
    "name": "Lupin Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 2071,
    "marketCap": 94634,
    "profitabilityScore": 71,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 36,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 21.9,
    "roe": 20.6,
    "roce": 21.3,
    "dividendYield": 0.58,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 54.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 26.0%"
    ],
    "cons": [
      "Stock is trading at 4.82 times its book value",
      "The company has delivered a poor sales growth of 8.11% over past five years.",
      "Company has a low return on equity of 13.4% over last 3 years."
    ]
  },
  {
    "symbol": "PETRONET",
    "name": "Petronet LNG Ltd",
    "sector": "Energy",
    "industry": "LPG/CNG/PNG/LNG Supplier",
    "currentPrice": 271,
    "marketCap": 40613,
    "profitabilityScore": 77,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 44,
    "volatilityScore": 51,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 11.1,
    "roe": 21.2,
    "roce": 25.4,
    "dividendYield": 3.69,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 41.3%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.54% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "TORNTPHARM",
    "name": "Torrent Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 3760,
    "marketCap": 127396,
    "profitabilityScore": 92,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 32,
    "riskScore": 34,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 58.8,
    "roe": 26.5,
    "roce": 27,
    "dividendYield": 0.85,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 57.9%"
    ],
    "cons": [
      "Stock is trading at 15.0 times its book value",
      "The company has delivered a poor sales growth of 7.72% over past five years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "AUROPHARMA",
    "name": "Aurobindo Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1177,
    "marketCap": 68392,
    "profitabilityScore": 46,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 36,
    "riskScore": 35,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 20,
    "roe": 11.1,
    "roce": 14.2,
    "dividendYield": 0.34,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 6.55% over past five years.",
      "Company has a low return on equity of 10.2% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "BAJAJHLDNG",
    "name": "Bajaj Holdings & Investment Ltd",
    "sector": "Financial Services",
    "industry": "Holding Company",
    "currentPrice": 10968,
    "marketCap": 122074,
    "profitabilityScore": 53,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 35,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 17.2,
    "roe": 11,
    "roce": 9.82,
    "dividendYield": 0.85,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Tax rate seems low",
      "Company has a low return on equity of 12.3% over last 3 years.",
      "Earnings include an other income of Rs.8,448 Cr."
    ]
  },
  {
    "symbol": "GAIL",
    "name": "GAIL (India) Ltd",
    "sector": "Energy",
    "industry": "Gas Transmission/Marketing",
    "currentPrice": 167,
    "marketCap": 109666,
    "profitabilityScore": 45,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 41,
    "riskScore": 35,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 12.2,
    "roe": 13.1,
    "roce": 14,
    "dividendYield": 4.5,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Stock is providing a good dividend yield of 4.50%.",
      "Company has been maintaining a healthy dividend payout of 44.9%"
    ],
    "cons": [
      "Company has a low return on equity of 12.1% over last 3 years.",
      "Earnings include an other income of Rs.4,965 Cr."
    ]
  },
  {
    "symbol": "HAL",
    "name": "Hindustan Aeronautics Ltd",
    "sector": "Industrials",
    "industry": "Aerospace & Defense",
    "currentPrice": 4284,
    "marketCap": 286414,
    "profitabilityScore": 93,
    "valuationScore": 54,
    "financialHealthScore": 67,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 41,
    "riskScore": 35,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 33.8,
    "roe": 26.1,
    "roce": 33.9,
    "dividendYield": 0.93,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 24.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 7.72 times its book value",
      "The company has delivered a poor sales growth of 7.63% over past five years.",
      "Promoter holding has decreased over last 3 years: -3.51%"
    ]
  },
  {
    "symbol": "HYUNDAI",
    "name": "Hyundai Motor India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Passenger Cars & Utility Vehicles",
    "currentPrice": 2275,
    "marketCap": 184873,
    "profitabilityScore": 85,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 41,
    "riskScore": 35,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 32.3,
    "roe": 41.8,
    "roce": 53.9,
    "dividendYield": 0.92,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 34.7%",
      "Company has been maintaining a healthy dividend payout of 49.0%"
    ],
    "cons": [
      "Stock is trading at 10.5 times its book value"
    ]
  },
  {
    "symbol": "TMPV",
    "name": "Tata Motors Passenger Vehicles Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Passenger Cars & Utility Vehicles",
    "currentPrice": 348,
    "marketCap": 128292,
    "profitabilityScore": 75,
    "valuationScore": 70,
    "financialHealthScore": 68,
    "growthScore": 80,
    "stabilityScore": 29,
    "volatilityScore": 41,
    "riskScore": 35,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 9.5,
    "roe": 28.1,
    "roce": 20,
    "dividendYield": 1.72,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is trading at 1.16 times its book value",
      "Company has delivered good profit growth of 37.2% CAGR over last 5 years"
    ],
    "cons": [
      "Earnings include an other income of Rs.86,954 Cr.",
      "Promoter holding has decreased over last 3 years: -3.82%"
    ]
  },
  {
    "symbol": "ADANIPOWER",
    "name": "Adani Power Ltd",
    "sector": "Utilities",
    "industry": "Integrated Power Utilities",
    "currentPrice": 139,
    "marketCap": 268190,
    "profitabilityScore": 81,
    "valuationScore": 62,
    "financialHealthScore": 75,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 22.3,
    "roe": 26.1,
    "roce": 22.5,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 65.7% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 40.4%"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "ALKEM",
    "name": "Alkem Laboratories Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 5599,
    "marketCap": 66782,
    "profitabilityScore": 70,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 36,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 28.4,
    "roe": 19.4,
    "roce": 20.4,
    "dividendYield": 0.8,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 37.4%"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -1.84%",
      "The company has delivered a poor sales growth of 9.21% over past five years.",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "BEL",
    "name": "Bharat Electronics Ltd",
    "sector": "Industrials",
    "industry": "Aerospace & Defense",
    "currentPrice": 386,
    "marketCap": 282589,
    "profitabilityScore": 89,
    "valuationScore": 42,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 49.6,
    "roe": 29.2,
    "roce": 38.9,
    "dividendYield": 0.62,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 23.8% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 26.4%"
    ],
    "cons": [
      "Stock is trading at 13.1 times its book value",
      "Working capital days have increased from 43.8 days to 85.4 days"
    ]
  },
  {
    "symbol": "EPIGRAL",
    "name": "Epigral Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 1432,
    "marketCap": 6188,
    "profitabilityScore": 89,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 15.4,
    "roe": 22.6,
    "roce": 25.1,
    "dividendYield": 0.42,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "GPPL",
    "name": "Gujarat Pipavav Port Ltd",
    "sector": "Services",
    "industry": "Port & Port services",
    "currentPrice": 182,
    "marketCap": 8802,
    "profitabilityScore": 85,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 57,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 19.8,
    "roe": 17.1,
    "roce": 23.3,
    "dividendYield": 4.5,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is providing a good dividend yield of 4.50%."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 6.08% over past five years.",
      "The company has exclusive rights to develop and operate facilities of APM Terminals in Pipavav until September 2028, according to a concession agreement with the Gujarat Maritime Board and the government of Gujarat.",
      "The company has delivered a poor sales growth of 6."
    ]
  },
  {
    "symbol": "GULFOILLUB",
    "name": "Gulf Oil Lubricants India Ltd",
    "sector": "Energy",
    "industry": "Lubricants",
    "currentPrice": 1130,
    "marketCap": 5574,
    "profitabilityScore": 84,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 57,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 15,
    "roe": 25.3,
    "roce": 26.8,
    "dividendYield": 4.25,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 58.6%"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -4.91%"
    ]
  },
  {
    "symbol": "IRCTC",
    "name": "Indian Railway Catering & Tourism Corporation Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tour, Travel Related Services",
    "currentPrice": 662,
    "marketCap": 52987,
    "profitabilityScore": 94,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 45,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 39.6,
    "roe": 37.1,
    "roce": 49,
    "dividendYield": 1.21,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 46.4%"
    ],
    "cons": [
      "Stock is trading at 12.4 times its book value",
      "Promoter holding has decreased over last 3 years: -5.00%"
    ]
  },
  {
    "symbol": "LALPATHLAB",
    "name": "Dr Lal Pathlabs Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Service Provider",
    "currentPrice": 2968,
    "marketCap": 24892,
    "profitabilityScore": 90,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 42,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 46.6,
    "roe": 24.3,
    "roce": 28.9,
    "dividendYield": 0.81,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 10.4 times its book value",
      "Promoter holding has decreased over last quarter: -0.58%"
    ]
  },
  {
    "symbol": "LICI",
    "name": "Life Insurance Corporation of India",
    "sector": "Financial Services",
    "industry": "Life Insurance",
    "currentPrice": 858,
    "marketCap": 542587,
    "profitabilityScore": 83,
    "valuationScore": 74,
    "financialHealthScore": 50,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 41,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 10.6,
    "roe": 45.7,
    "roce": 53.1,
    "dividendYield": 1.4,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 77.7% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 62.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.22% over past five years.",
      "Tax rate seems low",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "NATIONALUM",
    "name": "National Aluminium Company Ltd",
    "sector": "Commodities",
    "industry": "Aluminium",
    "currentPrice": 268,
    "marketCap": 49277,
    "profitabilityScore": 83,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 45,
    "volatilityScore": 51,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 8.06,
    "roe": 32.7,
    "roce": 44,
    "dividendYield": 3.91,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is providing a good dividend yield of 3.91%."
    ],
    "cons": []
  },
  {
    "symbol": "OIL",
    "name": "Oil India Ltd",
    "sector": "Energy",
    "industry": "Oil Exploration & Production",
    "currentPrice": 404,
    "marketCap": 65755,
    "profitabilityScore": 55,
    "valuationScore": 88,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 37,
    "volatilityScore": 45,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 11,
    "roe": 13.3,
    "roce": 12.9,
    "dividendYield": 2.85,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.17 times its book value",
      "Company has been maintaining a healthy dividend payout of 26.1%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 11.2% over past five years.",
      "The company has delivered a poor sales growth of 11."
    ]
  },
  {
    "symbol": "SUNPHARMA",
    "name": "Sun Pharmaceutical Industries Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1796,
    "marketCap": 431052,
    "profitabilityScore": 70,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 32,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 37.3,
    "roe": 16.9,
    "roce": 20.2,
    "dividendYield": 0.89,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 23.8% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 33.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.87% over past five years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "WIPRO",
    "name": "Wipro Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 261,
    "marketCap": 273982,
    "profitabilityScore": 65,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 33,
    "volatilityScore": 41,
    "riskScore": 36,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 20.3,
    "roe": 16.6,
    "roce": 19.5,
    "dividendYield": 2.3,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 19.1%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.82% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "ADANIPORTS",
    "name": "Adani Ports & Special Economic Zone Ltd",
    "sector": "Services",
    "industry": "Port & Port services",
    "currentPrice": 1480,
    "marketCap": 319872,
    "profitabilityScore": 72,
    "valuationScore": 62,
    "financialHealthScore": 76,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 41,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 26.6,
    "roe": 18.8,
    "roce": 13.8,
    "dividendYield": 0.47,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 23.1% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 4.77 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "DIVISLAB",
    "name": "Divis Laboratories Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 6328,
    "marketCap": 168006,
    "profitabilityScore": 70,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 32,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 67.6,
    "roe": 15.4,
    "roce": 20.4,
    "dividendYield": 0.47,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 43.2%"
    ],
    "cons": [
      "Stock is trading at 10.9 times its book value",
      "The company has delivered a poor sales growth of 11.6% over past five years.",
      "The company has delivered a poor sales growth of 11."
    ]
  },
  {
    "symbol": "EICHERMOT",
    "name": "Eicher Motors Ltd",
    "sector": "Consumer Discretionary",
    "industry": "2/3 Wheelers",
    "currentPrice": 7142,
    "marketCap": 195902,
    "profitabilityScore": 88,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 23,
    "volatilityScore": 41,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 38.4,
    "roe": 24.1,
    "roce": 29.8,
    "dividendYield": 0.98,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 21.0% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.87 times its book value",
      "Earnings include an other income of Rs.2,170 Cr."
    ]
  },
  {
    "symbol": "HINDALCO",
    "name": "Hindalco Industries Ltd",
    "sector": "Commodities",
    "industry": "Aluminium",
    "currentPrice": 819,
    "marketCap": 184171,
    "profitabilityScore": 50,
    "valuationScore": 88,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 10.3,
    "roe": 14,
    "roce": 14.8,
    "dividendYield": 0.61,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has a low return on equity of 12.0% over last 3 years.",
      "Dividend payout has been low at 7.06% of profits over last 3 years"
    ]
  },
  {
    "symbol": "IEX",
    "name": "Indian Energy Exchange Ltd",
    "sector": "Financial Services",
    "industry": "Exchange and Data Platform",
    "currentPrice": 142,
    "marketCap": 12651,
    "profitabilityScore": 100,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 32,
    "volatilityScore": 57,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 27,
    "roe": 40.7,
    "roce": 53.4,
    "dividendYield": 2.11,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 39.2%"
    ],
    "cons": [
      "Stock is trading at 10.1 times its book value"
    ]
  },
  {
    "symbol": "MGL",
    "name": "Mahanagar Gas Ltd",
    "sector": "Energy",
    "industry": "LPG/CNG/PNG/LNG Supplier",
    "currentPrice": 1123,
    "marketCap": 11096,
    "profitabilityScore": 71,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 36,
    "volatilityScore": 57,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 11.3,
    "roe": 17.7,
    "roce": 22.7,
    "dividendYield": 2.67,
    "salesGrowth5Y": 2,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 23.8%"
    ],
    "cons": []
  },
  {
    "symbol": "POWERGRID",
    "name": "Power Grid Corporation of India Ltd",
    "sector": "Utilities",
    "industry": "Power - Transmission",
    "currentPrice": 265,
    "marketCap": 246698,
    "profitabilityScore": 68,
    "valuationScore": 82,
    "financialHealthScore": 68,
    "growthScore": 50,
    "stabilityScore": 41,
    "volatilityScore": 41,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 16.2,
    "roe": 17,
    "roce": 12.8,
    "dividendYield": 3.39,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 62.6%",
      "Debtor days have improved from 91.5 to 63.5 days."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 3.94% over past five years.",
      "Company might be capitalizing the interest cost",
      "The company has delivered a poor sales growth of 3."
    ]
  },
  {
    "symbol": "SUNTV",
    "name": "Sun TV Network Ltd",
    "sector": "Consumer Discretionary",
    "industry": "TV Broadcasting & Software Production",
    "currentPrice": 547,
    "marketCap": 21529,
    "profitabilityScore": 78,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 37,
    "volatilityScore": 51,
    "riskScore": 37,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 13,
    "roe": 15.7,
    "roce": 20.4,
    "dividendYield": 2.74,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 34.6%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 2.67% over past five years.",
      "The company has delivered a poor sales growth of 2."
    ]
  },
  {
    "symbol": "BBTC",
    "name": "Bombay Burmah Trading Corporation Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Packaged Foods",
    "currentPrice": 1813,
    "marketCap": 12660,
    "profitabilityScore": 79,
    "valuationScore": 82,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 57,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 11.4,
    "roe": 21.9,
    "roce": 35.5,
    "dividendYield": 0.94,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 9.01% over past five years.",
      "Company has a low return on equity of -18.9% over last 3 years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "BPCL",
    "name": "Bharat Petroleum Corporation Ltd",
    "sector": "Energy",
    "industry": "Refineries & Marketing",
    "currentPrice": 358,
    "marketCap": 155145,
    "profitabilityScore": 54,
    "valuationScore": 70,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 37,
    "volatilityScore": 41,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 7.21,
    "roe": 17.3,
    "roce": 16.2,
    "dividendYield": 2.8,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 35.1%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.12% over past five years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "CMSINFO",
    "name": "CMS Info Systems Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 348,
    "marketCap": 5728,
    "profitabilityScore": 76,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 57,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 16,
    "roe": 17.1,
    "roce": 23.7,
    "dividendYield": 1.87,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 31.2%"
    ],
    "cons": []
  },
  {
    "symbol": "EMCURE",
    "name": "Emcure Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1384,
    "marketCap": 26246,
    "profitabilityScore": 70,
    "valuationScore": 54,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 42,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 32.7,
    "roe": 18.5,
    "roce": 20.7,
    "dividendYield": 0.22,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.36% over past five years.",
      "Working capital days have increased from 42.1 days to 76.1 days",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "GHCL",
    "name": "GHCL Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 586,
    "marketCap": 5639,
    "profitabilityScore": 81,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 31,
    "volatilityScore": 57,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 9.9,
    "roe": 18.6,
    "roce": 24.2,
    "dividendYield": 2.05,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "The company has delivered a poor sales growth of -0.75% over past five years.",
      "Promoter holding is low: 19.0%",
      "The company has delivered a poor sales growth of -0."
    ]
  },
  {
    "symbol": "HINDUNILVR",
    "name": "Hindustan Unilever Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Diversified FMCG",
    "currentPrice": 2314,
    "marketCap": 543602,
    "profitabilityScore": 82,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 41,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 51.4,
    "roe": 20.7,
    "roce": 27.8,
    "dividendYield": 1.86,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 101%"
    ],
    "cons": [
      "Stock is trading at 11.2 times its book value",
      "The company has delivered a poor sales growth of 9.67% over past five years.",
      "The company has a portfolio of over 50 brands, spanning 16 FMCG categories, including 19 brands with a turnover of more than Rs."
    ]
  },
  {
    "symbol": "IGL",
    "name": "Indraprastha Gas Ltd",
    "sector": "Energy",
    "industry": "LPG/CNG/PNG/LNG Supplier",
    "currentPrice": 185,
    "marketCap": 25923,
    "profitabilityScore": 66,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 33,
    "volatilityScore": 51,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 16.2,
    "roe": 16.4,
    "roce": 20.8,
    "dividendYield": 2.3,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 48.1%",
      "Debtor days have improved from 22.4 to 17.3 days."
    ],
    "cons": [
      "Earnings include an other income of Rs.714 Cr."
    ]
  },
  {
    "symbol": "LTIM",
    "name": "LTIMindtree Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 6256,
    "marketCap": 185537,
    "profitabilityScore": 82,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 24,
    "volatilityScore": 41,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 38.1,
    "roe": 21.5,
    "roce": 27.6,
    "dividendYield": 1.04,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 24.7%",
      "Company has been maintaining a healthy dividend payout of 41.4%"
    ],
    "cons": [
      "Stock is trading at 7.92 times its book value",
      "Promoter holding has decreased over last 3 years: -5.46%"
    ]
  },
  {
    "symbol": "MOTILALOFS",
    "name": "Motilal Oswal Financial Services Ltd",
    "sector": "Financial Services",
    "industry": "Stockbroking & Allied",
    "currentPrice": 845,
    "marketCap": 50786,
    "profitabilityScore": 90,
    "valuationScore": 62,
    "financialHealthScore": 71,
    "growthScore": 55,
    "stabilityScore": 20,
    "volatilityScore": 45,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 25.1,
    "roe": 25.2,
    "roce": 18.7,
    "dividendYield": 0.59,
    "salesGrowth5Y": 29,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 68.7% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.2%",
      "Company's median sales growth is 18.5% of last 10 years"
    ],
    "cons": []
  },
  {
    "symbol": "MPHASIS",
    "name": "Mphasis Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 2897,
    "marketCap": 55227,
    "profitabilityScore": 73,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 31,
    "volatilityScore": 45,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 30.9,
    "roe": 18.2,
    "roce": 22.7,
    "dividendYield": 1.97,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 62.7%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.98% over past five years.",
      "Promoter holding has decreased over last 3 years: -15.6%",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "NESTLEIND",
    "name": "Nestle India Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Packaged Foods",
    "currentPrice": 1215,
    "marketCap": 234299,
    "profitabilityScore": 90,
    "valuationScore": 30,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 41,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 79.4,
    "roe": 83.5,
    "roce": 96.3,
    "dividendYield": 1.11,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 52.8 times its book value"
    ]
  },
  {
    "symbol": "NH",
    "name": "Narayana Hrudayalaya Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 1925,
    "marketCap": 39341,
    "profitabilityScore": 80,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 42,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 46.3,
    "roe": 24.2,
    "roce": 20.8,
    "dividendYield": 0.23,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 43.5% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.7%"
    ],
    "cons": [
      "Stock is trading at 9.69 times its book value",
      "The company has delivered a poor sales growth of 11.9% over past five years.",
      "The company has delivered a poor sales growth of 11."
    ]
  },
  {
    "symbol": "PIDILITIND",
    "name": "Pidilite Industries Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 1456,
    "marketCap": 148230,
    "profitabilityScore": 84,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 66,
    "roe": 23,
    "roce": 29.8,
    "dividendYield": 0.69,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 46.6%",
      "Company's working capital requirements have reduced from 25.8 days to 18.7 days"
    ],
    "cons": [
      "Stock is trading at 15.5 times its book value"
    ]
  },
  {
    "symbol": "SKFINDIA",
    "name": "SKF India Ltd",
    "sector": "Industrials",
    "industry": "Abrasives & Bearings",
    "currentPrice": 1805,
    "marketCap": 8929,
    "profitabilityScore": 82,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 16.1,
    "roe": 21.4,
    "roce": 28.8,
    "dividendYield": 0.8,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 55.6%"
    ],
    "cons": []
  },
  {
    "symbol": "STAR",
    "name": "Strides Pharma Science Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 863,
    "marketCap": 7968,
    "profitabilityScore": 66,
    "valuationScore": 82,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 48,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 18.3,
    "roe": 151,
    "roce": 14.7,
    "dividendYield": 0.46,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 124% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 50.4%"
    ],
    "cons": [
      "Stock is trading at 2.87 times its book value",
      "Promoter holding has decreased over last quarter: -0.44%",
      "The company has delivered a poor sales growth of 10.6% over past five years."
    ]
  },
  {
    "symbol": "TECHM",
    "name": "Tech Mahindra Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 1592,
    "marketCap": 156037,
    "profitabilityScore": 59,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 37,
    "volatilityScore": 41,
    "riskScore": 38,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 34.8,
    "roe": 14.6,
    "roce": 18.6,
    "dividendYield": 2.83,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 111%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.52% over past five years.",
      "Company has a low return on equity of 13.6% over last 3 years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "ANTHEM",
    "name": "Anthem Biosciences Ltd",
    "sector": "Healthcare",
    "industry": "Biotechnology",
    "currentPrice": 649,
    "marketCap": 36479,
    "profitabilityScore": 88,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 42,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 78.8,
    "roe": 20.8,
    "roce": 28.5,
    "dividendYield": 0,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 21.0%"
    ],
    "cons": [
      "Stock is trading at 13.2 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "ASIANPAINT",
    "name": "Asian Paints Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Paints",
    "currentPrice": 2928,
    "marketCap": 281010,
    "profitabilityScore": 79,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 69.9,
    "roe": 20.6,
    "roce": 25.7,
    "dividendYield": 0.85,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 26.3%",
      "Company has been maintaining a healthy dividend payout of 61.1%"
    ],
    "cons": [
      "Stock is trading at 14.4 times its book value",
      "The company has delivered a poor sales growth of 10.9% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "BLUEJET",
    "name": "Blue Jet Healthcare Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 549,
    "marketCap": 9513,
    "profitabilityScore": 96,
    "valuationScore": 56,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 18,
    "volatilityScore": 48,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 67.5,
    "roe": 52.1,
    "roce": 57.3,
    "dividendYield": 0.22,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": []
  },
  {
    "symbol": "BRITANNIA",
    "name": "Britannia Industries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Packaged Foods",
    "currentPrice": 5848,
    "marketCap": 140845,
    "profitabilityScore": 86,
    "valuationScore": 30,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 26,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 60.8,
    "roe": 52.9,
    "roce": 53,
    "dividendYield": 1.28,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 58.3%",
      "Company has been maintaining a healthy dividend payout of 80.1%"
    ],
    "cons": [
      "Stock is trading at 37.7 times its book value",
      "The company has delivered a poor sales growth of 9.12% over past five years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "CGPOWER",
    "name": "CG Power & Industrial Solutions Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 647,
    "marketCap": 101991,
    "profitabilityScore": 86,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 95.5,
    "roe": 27.7,
    "roce": 37.5,
    "dividendYield": 0.2,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 45.0%",
      "Company has been maintaining a healthy dividend payout of 19.4%"
    ],
    "cons": [
      "Stock is trading at 13.7 times its book value",
      "Promoter holding has decreased over last quarter: -1.68%"
    ]
  },
  {
    "symbol": "COROMANDEL",
    "name": "Coromandel International Ltd",
    "sector": "Commodities",
    "industry": "Fertilizers",
    "currentPrice": 2315,
    "marketCap": 68349,
    "profitabilityScore": 68,
    "valuationScore": 54,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 45,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 32.1,
    "roe": 16.9,
    "roce": 23.2,
    "dividendYield": 0.52,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company's working capital requirements have reduced from 36.2 days to 27.9 days"
    ],
    "cons": []
  },
  {
    "symbol": "CUMMINSIND",
    "name": "Cummins India Ltd",
    "sector": "Industrials",
    "industry": "Compressors, Pumps & Diesel Engines",
    "currentPrice": 4467,
    "marketCap": 123806,
    "profitabilityScore": 86,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 25,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 53.7,
    "roe": 28.2,
    "roce": 36.3,
    "dividendYield": 1.15,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 22.4% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 15.6 times its book value"
    ]
  },
  {
    "symbol": "DAMCAPITAL",
    "name": "Dam Capital Advisors Ltd",
    "sector": "Financial Services",
    "industry": "Stockbroking & Allied",
    "currentPrice": 206,
    "marketCap": 1457,
    "profitabilityScore": 100,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 13,
    "roe": 48.7,
    "roce": 64.1,
    "dividendYield": 0.49,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 42.2%"
    ],
    "cons": []
  },
  {
    "symbol": "DHANUKA",
    "name": "Dhanuka Agritech Ltd",
    "sector": "Commodities",
    "industry": "Pesticides & Agrochemicals",
    "currentPrice": 1214,
    "marketCap": 5476,
    "profitabilityScore": 83,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 18.8,
    "roe": 22,
    "roce": 28.3,
    "dividendYield": 0.16,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "GLAXO",
    "name": "Glaxosmithkline Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 2544,
    "marketCap": 43144,
    "profitabilityScore": 91,
    "valuationScore": 42,
    "financialHealthScore": 74,
    "growthScore": 50,
    "stabilityScore": 28,
    "volatilityScore": 42,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 45.3,
    "roe": 46.9,
    "roce": 63.2,
    "dividendYield": 1.65,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 36.4%",
      "Company has been maintaining a healthy dividend payout of 93.1%"
    ],
    "cons": [
      "Stock is trading at 25.2 times its book value",
      "The company has delivered a poor sales growth of 3.06% over past five years.",
      "The company has delivered a poor sales growth of 3."
    ]
  },
  {
    "symbol": "HEXT",
    "name": "Hexaware Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 754,
    "marketCap": 46064,
    "profitabilityScore": 84,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 27,
    "volatilityScore": 51,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 33,
    "roe": 23.3,
    "roce": 29.5,
    "dividendYield": 1.53,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 57.9%"
    ],
    "cons": [
      "Stock is trading at 7.91 times its book value"
    ]
  },
  {
    "symbol": "KNRCON",
    "name": "KNR Constructions Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 146,
    "marketCap": 4105,
    "profitabilityScore": 91,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 5.95,
    "roe": 27.2,
    "roce": 28.6,
    "dividendYield": 0.17,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.86 times its book value",
      "Company has delivered good profit growth of 32.5% CAGR over last 5 years"
    ],
    "cons": [
      "Working capital days have increased from 103 days to 154 days"
    ]
  },
  {
    "symbol": "MARICO",
    "name": "Marico Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Edible Oil",
    "currentPrice": 729,
    "marketCap": 94680,
    "profitabilityScore": 87,
    "valuationScore": 30,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 45,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 56.8,
    "roe": 41.3,
    "roce": 45.2,
    "dividendYield": 1.44,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 38.6%",
      "Company has been maintaining a healthy dividend payout of 70.2%"
    ],
    "cons": [
      "Stock is trading at 23.4 times its book value",
      "The company has delivered a poor sales growth of 8.17% over past five years.",
      "The company has delivered a poor sales growth of 8."
    ]
  },
  {
    "symbol": "MARUTI",
    "name": "Maruti Suzuki India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Passenger Cars & Utility Vehicles",
    "currentPrice": 16187,
    "marketCap": 509070,
    "profitabilityScore": 64,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 34.4,
    "roe": 15.9,
    "roce": 21.7,
    "dividendYield": 0.83,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 34.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 30.5%"
    ],
    "cons": []
  },
  {
    "symbol": "MAZDOCK",
    "name": "Mazagon Dock Shipbuilders Ltd",
    "sector": "Industrials",
    "industry": "Ship Building & Allied Services",
    "currentPrice": 2485,
    "marketCap": 100235,
    "profitabilityScore": 83,
    "valuationScore": 42,
    "financialHealthScore": 69,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 43,
    "roe": 34,
    "roce": 43.2,
    "dividendYield": 0.7,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 38.3% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 11.2 times its book value",
      "Contingent liabilities of Rs.37,852 Cr.",
      "Earnings include an other income of Rs.1,190 Cr."
    ]
  },
  {
    "symbol": "OBEROIRLTY",
    "name": "Oberoi Realty Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 1610,
    "marketCap": 58563,
    "profitabilityScore": 70,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 45,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 26.2,
    "roe": 14.7,
    "roce": 17.7,
    "dividendYield": 0.5,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 25.9% CAGR over last 5 years"
    ],
    "cons": [
      "Promoters have pledged or encumbered 75.3% of their holding."
    ]
  },
  {
    "symbol": "ONGC",
    "name": "Oil & Natural Gas Corpn Ltd",
    "sector": "Energy",
    "industry": "Oil Exploration & Production",
    "currentPrice": 239,
    "marketCap": 299916,
    "profitabilityScore": 39,
    "valuationScore": 74,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 8.19,
    "roe": 10.6,
    "roce": 12,
    "dividendYield": 5.14,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.82 times its book value",
      "Stock is providing a good dividend yield of 5.14%.",
      "Company has been maintaining a healthy dividend payout of 37.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.06% over past five years.",
      "Company has a low return on equity of 13.8% over last 3 years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "POLYCAB",
    "name": "Polycab India Ltd",
    "sector": "Industrials",
    "industry": "Cables - Electricals",
    "currentPrice": 7025,
    "marketCap": 105748,
    "profitabilityScore": 79,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 43,
    "roe": 21.4,
    "roce": 29.7,
    "dividendYield": 0.5,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 20.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 25.0%"
    ],
    "cons": [
      "Stock is trading at 9.98 times its book value",
      "Promoter holding has decreased over last quarter: -1.49%"
    ]
  },
  {
    "symbol": "SANOFI",
    "name": "Sanofi India Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 4271,
    "marketCap": 9827,
    "profitabilityScore": 90,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 37,
    "volatilityScore": 48,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 22.2,
    "roe": 47.1,
    "roce": 49.2,
    "dividendYield": 2.74,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company's working capital requirements have reduced from 27.6 days to 20.4 days"
    ],
    "cons": [
      "Stock is trading at 11.4 times its book value",
      "Debtor days have increased from 32.9 to 41.7 days."
    ]
  },
  {
    "symbol": "SUZLON",
    "name": "Suzlon Energy Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 51.8,
    "marketCap": 70415,
    "profitabilityScore": 85,
    "valuationScore": 54,
    "financialHealthScore": 68,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 22.2,
    "roe": 41.4,
    "roce": 32.5,
    "dividendYield": 0,
    "salesGrowth5Y": 30,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 22.9% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.96 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding is low: 11.7%"
    ]
  },
  {
    "symbol": "UNITDSPR",
    "name": "United Spirits Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Breweries & Distilleries",
    "currentPrice": 1429,
    "marketCap": 104000,
    "profitabilityScore": 78,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 60.7,
    "roe": 19.7,
    "roce": 26.5,
    "dividendYield": 0.84,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 33.8%"
    ],
    "cons": [
      "Stock is trading at 12.3 times its book value",
      "The company has delivered a poor sales growth of 5.29% over past five years.",
      "The company has delivered a poor sales growth of 5."
    ]
  },
  {
    "symbol": "WELCORP",
    "name": "Welspun Corp Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 798,
    "marketCap": 21010,
    "profitabilityScore": 64,
    "valuationScore": 82,
    "financialHealthScore": 78,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 39,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 11.8,
    "roe": 18.6,
    "roce": 21.2,
    "dividendYield": 0.63,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 27.3%"
    ],
    "cons": [
      "Earnings include an other income of Rs.1,272 Cr."
    ]
  },
  {
    "symbol": "APOLLOHOSP",
    "name": "Apollo Hospitals Enterprise Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 7096,
    "marketCap": 102033,
    "profitabilityScore": 61,
    "valuationScore": 30,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 32,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 61,
    "roe": 18.4,
    "roce": 16.6,
    "dividendYield": 0.27,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 33.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 21.5%"
    ],
    "cons": [
      "Stock is trading at 11.2 times its book value",
      "Promoter holding has decreased over last quarter: -1.32%"
    ]
  },
  {
    "symbol": "BHARTIARTL",
    "name": "Bharti Airtel Ltd",
    "sector": "Telecommunication",
    "industry": "Telecom - Cellular & Fixed line services",
    "currentPrice": 2086,
    "marketCap": 1251714,
    "profitabilityScore": 79,
    "valuationScore": 42,
    "financialHealthScore": 62,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 38.9,
    "roe": 23.2,
    "roce": 13.5,
    "dividendYield": 0.77,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 31.4% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 38.8%"
    ],
    "cons": [
      "Stock is trading at 10.1 times its book value",
      "Promoter holding has decreased over last quarter: -0.98%",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "BOSCHLTD",
    "name": "Bosch Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 36595,
    "marketCap": 108015,
    "profitabilityScore": 64,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 41,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 47.5,
    "roe": 15.6,
    "roce": 21.1,
    "dividendYield": 1.4,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 72.9%"
    ],
    "cons": [
      "Stock is trading at 7.70 times its book value",
      "Earnings include an other income of Rs.1,432 Cr."
    ]
  },
  {
    "symbol": "CONCORDBIO",
    "name": "Concord Biotech Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1360,
    "marketCap": 14277,
    "profitabilityScore": 84,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 48,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 44.1,
    "roe": 21.3,
    "roce": 28.2,
    "dividendYield": 0.79,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 18.6% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 7.79 times its book value",
      "Company has high debtors of 159 days."
    ]
  },
  {
    "symbol": "CRISIL",
    "name": "CRISIL Ltd",
    "sector": "Financial Services",
    "industry": "Other Financial Services",
    "currentPrice": 4345,
    "marketCap": 31761,
    "profitabilityScore": 89,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 42.4,
    "roe": 27.8,
    "roce": 35.6,
    "dividendYield": 0.58,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 30.7%",
      "Company has been maintaining a healthy dividend payout of 60.6%",
      "Debtor days have improved from 79.9 to 61.6 days."
    ],
    "cons": [
      "Stock is trading at 11.3 times its book value"
    ]
  },
  {
    "symbol": "GLENMARK",
    "name": "Glenmark Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1922,
    "marketCap": 54304,
    "profitabilityScore": 63,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 17,
    "volatilityScore": 36,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 21.6,
    "roe": 15.8,
    "roce": 19.4,
    "dividendYield": 0.13,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 4.60% over past five years.",
      "Company has a low return on equity of -10.1% over last 3 years.",
      "The company has delivered a poor sales growth of 4."
    ]
  },
  {
    "symbol": "GODFRYPHLP",
    "name": "Godfrey Phillips India Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Cigarettes & Tobacco Products",
    "currentPrice": 2646,
    "marketCap": 41278,
    "profitabilityScore": 81,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 25,
    "volatilityScore": 51,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 32.4,
    "roe": 19.9,
    "roce": 26.3,
    "dividendYield": 1.2,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 23.9% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 7.08 times its book value",
      "Earnings include an other income of Rs.458 Cr.",
      "Working capital days have increased from 55.1 days to 88.8 days"
    ]
  },
  {
    "symbol": "GPTHEALTH",
    "name": "GPT Healthcare Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 140,
    "marketCap": 1147,
    "profitabilityScore": 87,
    "valuationScore": 80,
    "financialHealthScore": 63,
    "growthScore": 50,
    "stabilityScore": 29,
    "volatilityScore": 54,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 27.5,
    "roe": 28.5,
    "roce": 23.6,
    "dividendYield": 1.79,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 53.9%"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -34.4%"
    ]
  },
  {
    "symbol": "INDGN",
    "name": "Indegene Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Research, Analytics & Technology",
    "currentPrice": 526,
    "marketCap": 12606,
    "profitabilityScore": 79,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 19,
    "volatilityScore": 48,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 28.3,
    "roe": 20.6,
    "roce": 24.8,
    "dividendYield": 0.38,
    "salesGrowth5Y": 35,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 67.9% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "MANINFRA",
    "name": "Man Infraconstruction Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 131,
    "marketCap": 5290,
    "profitabilityScore": 75,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 19.5,
    "roe": 17.5,
    "roce": 23.5,
    "dividendYield": 0.69,
    "salesGrowth5Y": 33,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Debtor days have improved from 44.8 to 28.7 days."
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -2.80%",
      "Earnings include an other income of Rs.160 Cr.",
      "Working capital days have increased from 213 days to 350 days"
    ]
  },
  {
    "symbol": "NIITMTS",
    "name": "NIIT Learning Systems Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Education",
    "currentPrice": 366,
    "marketCap": 5034,
    "profitabilityScore": 82,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 23,
    "roe": 21.5,
    "roce": 28.2,
    "dividendYield": 0.82,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.2%",
      "Company has been maintaining a healthy dividend payout of 17.1%"
    ],
    "cons": [
      "Promoter holding is low: 34.2%"
    ]
  },
  {
    "symbol": "OSWALPUMPS",
    "name": "Oswal Pumps Ltd",
    "sector": "Industrials",
    "industry": "Compressors, Pumps & Diesel Engines",
    "currentPrice": 500,
    "marketCap": 5693,
    "profitabilityScore": 88,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 16.9,
    "roe": 87.5,
    "roce": 77.9,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 81.0%"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has high debtors of 160 days.",
      "Working capital days have increased from 41.7 days to 86.4 days"
    ]
  },
  {
    "symbol": "PFC",
    "name": "Power Finance Corporation Ltd",
    "sector": "Financial Services",
    "industry": "Financial Institution",
    "currentPrice": 342,
    "marketCap": 112996,
    "profitabilityScore": 49,
    "valuationScore": 74,
    "financialHealthScore": 55,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 41,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 4.56,
    "roe": 21,
    "roce": 9.73,
    "dividendYield": 4.61,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.89 times its book value",
      "Stock is providing a good dividend yield of 4.61%.",
      "Company has been maintaining a healthy dividend payout of 22.4%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 11.5% over past five years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "TORNTPOWER",
    "name": "Torrent Power Ltd",
    "sector": "Utilities",
    "industry": "Integrated Power Utilities",
    "currentPrice": 1255,
    "marketCap": 63511,
    "profitabilityScore": 63,
    "valuationScore": 62,
    "financialHealthScore": 76,
    "growthScore": 70,
    "stabilityScore": 27,
    "volatilityScore": 45,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 21.2,
    "roe": 19,
    "roce": 16,
    "dividendYield": 1.51,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 44.3%"
    ],
    "cons": [
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "UTIAMC",
    "name": "UTI Asset Management Company Ltd",
    "sector": "Financial Services",
    "industry": "Asset Management Company",
    "currentPrice": 1113,
    "marketCap": 14287,
    "profitabilityScore": 80,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 34,
    "volatilityScore": 57,
    "riskScore": 40,
    "suitableTiers": [
      2,
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Low",
    "pe": 24.3,
    "roe": 16.3,
    "roce": 21,
    "dividendYield": 2.34,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 75.3%",
      "Debtor days have improved from 20.1 to 15.7 days."
    ],
    "cons": []
  },
  {
    "symbol": "AIAENG",
    "name": "AIA Engineering Ltd",
    "sector": "Industrials",
    "industry": "Castings & Forgings",
    "currentPrice": 3660,
    "marketCap": 34269,
    "profitabilityScore": 64,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 51,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.4,
    "roe": 15.4,
    "roce": 18.9,
    "dividendYield": 0.44,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 7.62% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "AKZOINDIA",
    "name": "Akzo Nobel India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Paints",
    "currentPrice": 3490,
    "marketCap": 15894,
    "profitabilityScore": 84,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 38,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.6,
    "roe": 32.3,
    "roce": 41.6,
    "dividendYield": 2.87,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 30.3%",
      "Company has been maintaining a healthy dividend payout of 91.4%"
    ],
    "cons": [
      "Stock is trading at 7.05 times its book value",
      "Promoter holding has decreased over last quarter: -5.00%",
      "The company has delivered a poor sales growth of 8.98% over past five years."
    ]
  },
  {
    "symbol": "BERGEPAINT",
    "name": "Berger Paints India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Paints",
    "currentPrice": 539,
    "marketCap": 63058,
    "profitabilityScore": 78,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 45,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 57,
    "roe": 20.3,
    "roce": 24.9,
    "dividendYield": 0.7,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 36.2%"
    ],
    "cons": [
      "Stock is trading at 10.0 times its book value"
    ]
  },
  {
    "symbol": "CAMS",
    "name": "Computer Age Management Services Ltd",
    "sector": "Financial Services",
    "industry": "Depositories, Clearing Houses and Other Intermediaries",
    "currentPrice": 753,
    "marketCap": 18656,
    "profitabilityScore": 98,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 28,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.2,
    "roe": 43.9,
    "roce": 53.6,
    "dividendYield": 1.65,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 41.1%",
      "Company has been maintaining a healthy dividend payout of 68.6%"
    ],
    "cons": [
      "Stock is trading at 15.3 times its book value"
    ]
  },
  {
    "symbol": "COLPAL",
    "name": "Colgate-Palmolive (India) Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Personal Care",
    "currentPrice": 2146,
    "marketCap": 58370,
    "profitabilityScore": 89,
    "valuationScore": 18,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 34,
    "volatilityScore": 45,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 135,
    "roe": 158,
    "roce": 179,
    "dividendYield": 2.38,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 139%",
      "Company has been maintaining a healthy dividend payout of 69.7%"
    ],
    "cons": [
      "Stock is trading at 177 times its book value",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "DABUR",
    "name": "Dabur India Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Personal Care",
    "currentPrice": 504,
    "marketCap": 89526,
    "profitabilityScore": 68,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 28,
    "volatilityScore": 45,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 49.5,
    "roe": 17,
    "roce": 20.2,
    "dividendYield": 1.59,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 62.4%"
    ],
    "cons": [
      "Stock is trading at 8.16 times its book value",
      "The company has delivered a poor sales growth of 7.66% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "ECLERX",
    "name": "eClerx Services Ltd",
    "sector": "Services",
    "industry": "Business Process Outsourcing (BPO)/ Knowledge Process Outsourcing (KPO)",
    "currentPrice": 4760,
    "marketCap": 22646,
    "profitabilityScore": 88,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 36.9,
    "roe": 22.8,
    "roce": 28,
    "dividendYield": 0.02,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.5%"
    ],
    "cons": [
      "Stock is trading at 8.61 times its book value",
      "Debtor days have increased from 69.4 to 85.7 days."
    ]
  },
  {
    "symbol": "ELECON",
    "name": "Elecon Engineering Company Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 473,
    "marketCap": 10613,
    "profitabilityScore": 86,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.6,
    "roe": 23,
    "roce": 28.5,
    "dividendYield": 0.42,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 35.6% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "FINCABLES",
    "name": "Finolex Cables Ltd",
    "sector": "Industrials",
    "industry": "Cables - Electricals",
    "currentPrice": 717,
    "marketCap": 10973,
    "profitabilityScore": 52,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.5,
    "roe": 13.4,
    "roce": 17.7,
    "dividendYield": 1.12,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 19.2%",
      "Company's working capital requirements have reduced from 82.4 days to 59.2 days"
    ],
    "cons": [
      "Company has a low return on equity of 13.2% over last 3 years.",
      "Earnings include an other income of Rs.326 Cr."
    ]
  },
  {
    "symbol": "FINEORG",
    "name": "Fine Organic Industries Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 4374,
    "marketCap": 13438,
    "profitabilityScore": 82,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.6,
    "roe": 19.5,
    "roce": 26.4,
    "dividendYield": 0.25,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.3%"
    ],
    "cons": []
  },
  {
    "symbol": "GESHIP",
    "name": "Great Eastern Shipping Company Ltd",
    "sector": "Services",
    "industry": "Shipping",
    "currentPrice": 1071,
    "marketCap": 15300,
    "profitabilityScore": 65,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 37,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 8.57,
    "roe": 14.1,
    "roce": 13.9,
    "dividendYield": 2.77,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is trading at 1.00 times its book value"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.62% over past five years.",
      "Tax rate seems low",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "GUJGASLTD",
    "name": "Gujarat Gas Ltd",
    "sector": "Energy",
    "industry": "LPG/CNG/PNG/LNG Supplier",
    "currentPrice": 400,
    "marketCap": 27567,
    "profitabilityScore": 60,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 51,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.7,
    "roe": 14.2,
    "roce": 19.5,
    "dividendYield": 1.45,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 33.0%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.86% over past five years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "IGIL",
    "name": "International Gemmological Institute (India) Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 315,
    "marketCap": 13624,
    "profitabilityScore": 100,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.7,
    "roe": 54.4,
    "roce": 68,
    "dividendYield": 0.79,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 11.0 times its book value",
      "Working capital days have increased from 58.3 days to 113 days"
    ]
  },
  {
    "symbol": "IIFLCAPS",
    "name": "IIFL Capital Services Ltd",
    "sector": "Financial Services",
    "industry": "Stockbroking & Allied",
    "currentPrice": 311,
    "marketCap": 9624,
    "profitabilityScore": 93,
    "valuationScore": 74,
    "financialHealthScore": 67,
    "growthScore": 55,
    "stabilityScore": 23,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.5,
    "roe": 31.6,
    "roce": 33.3,
    "dividendYield": 0.97,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 34.7% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.8%",
      "Company has been maintaining a healthy dividend payout of 22.6%"
    ],
    "cons": [
      "Promoter holding is low: 31.0%"
    ]
  },
  {
    "symbol": "INDIAMART",
    "name": "Indiamart Intermesh Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Internet & Catalogue Retail",
    "currentPrice": 2273,
    "marketCap": 13648,
    "profitabilityScore": 89,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 26,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.4,
    "roe": 26.9,
    "roce": 34.2,
    "dividendYield": 1.32,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 29.1% CAGR over last 5 years"
    ],
    "cons": [
      "Earnings include an other income of Rs.256 Cr."
    ]
  },
  {
    "symbol": "JSL",
    "name": "Jindal Stainless Ltd",
    "sector": "Commodities",
    "industry": "Iron & Steel",
    "currentPrice": 767,
    "marketCap": 63150,
    "profitabilityScore": 58,
    "valuationScore": 62,
    "financialHealthScore": 77,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 45,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.9,
    "roe": 16.2,
    "roce": 18.2,
    "dividendYield": 0.39,
    "salesGrowth5Y": 25,
    "promoterHolding": 0,
    "pros": [
      "Company's working capital requirements have reduced from 21.6 days to 11.9 days"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -8.86%"
    ]
  },
  {
    "symbol": "LTTS",
    "name": "L&T Technology Services Ltd",
    "sector": "Information Technology",
    "industry": "IT Enabled Services",
    "currentPrice": 4540,
    "marketCap": 48159,
    "profitabilityScore": 83,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 25,
    "volatilityScore": 51,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.7,
    "roe": 22.2,
    "roce": 28.3,
    "dividendYield": 1.21,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.3%",
      "Company has been maintaining a healthy dividend payout of 42.0%"
    ],
    "cons": [
      "Stock is trading at 7.77 times its book value"
    ]
  },
  {
    "symbol": "MANYAVAR",
    "name": "Vedant Fashions Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 589,
    "marketCap": 14306,
    "profitabilityScore": 98,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 26,
    "volatilityScore": 57,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.5,
    "roe": 26.7,
    "roce": 30.7,
    "dividendYield": 1.36,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 29.6%",
      "Company has been maintaining a healthy dividend payout of 46.4%"
    ],
    "cons": [
      "Stock is trading at 9.36 times its book value",
      "Company has high debtors of 151 days."
    ]
  },
  {
    "symbol": "MARKSANS",
    "name": "Marksans Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 184,
    "marketCap": 8348,
    "profitabilityScore": 66,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 48,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.7,
    "roe": 16.8,
    "roce": 20,
    "dividendYield": 0.43,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 25.8% CAGR over last 5 years"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -4.73%"
    ]
  },
  {
    "symbol": "MCX",
    "name": "Multi Commodity Exchange of India Ltd",
    "sector": "Financial Services",
    "industry": "Exchange and Data Platform",
    "currentPrice": 10183,
    "marketCap": 51936,
    "profitabilityScore": 100,
    "valuationScore": 30,
    "financialHealthScore": 72,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 45,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 74.6,
    "roe": 34.3,
    "roce": 42.9,
    "dividendYield": 0.29,
    "salesGrowth5Y": 23,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 24.9 times its book value"
    ]
  },
  {
    "symbol": "NLCINDIA",
    "name": "NLC India Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 237,
    "marketCap": 32658,
    "profitabilityScore": 54,
    "valuationScore": 88,
    "financialHealthScore": 67,
    "growthScore": 80,
    "stabilityScore": 26,
    "volatilityScore": 51,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 12.5,
    "roe": 14.5,
    "roce": 10.5,
    "dividendYield": 1.27,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 24.4%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 8.22% over past five years.",
      "Company has a low return on equity of 12.2% over last 3 years.",
      "Contingent liabilities of Rs.13,859 Cr."
    ]
  },
  {
    "symbol": "PERSISTENT",
    "name": "Persistent Systems Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 6347,
    "marketCap": 100070,
    "profitabilityScore": 86,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 20,
    "volatilityScore": 41,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 60.1,
    "roe": 24.1,
    "roce": 30.4,
    "dividendYield": 0.55,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 32.8% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 39.0%"
    ],
    "cons": [
      "Stock is trading at 13.9 times its book value"
    ]
  },
  {
    "symbol": "SOLARINDS",
    "name": "Solar Industries India Ltd",
    "sector": "Commodities",
    "industry": "Explosives",
    "currentPrice": 12436,
    "marketCap": 112632,
    "profitabilityScore": 88,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 41,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 85.3,
    "roe": 32.6,
    "roce": 38.1,
    "dividendYield": 0.08,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 36.2% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 32.6%"
    ],
    "cons": [
      "Stock is trading at 22.0 times its book value"
    ]
  },
  {
    "symbol": "VBL",
    "name": "Varun Beverages Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Other Beverages",
    "currentPrice": 470,
    "marketCap": 158869,
    "profitabilityScore": 84,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 53.5,
    "roe": 22.5,
    "roce": 24.8,
    "dividendYield": 0.21,
    "salesGrowth5Y": 23,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 41.4% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.2%"
    ],
    "cons": [
      "Stock is trading at 8.65 times its book value",
      "Promoter holding has decreased over last quarter: -0.38%"
    ]
  },
  {
    "symbol": "WAAREEENER",
    "name": "Waaree Energies Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 2884,
    "marketCap": 82882,
    "profitabilityScore": 86,
    "valuationScore": 54,
    "financialHealthScore": 76,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 41,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.7,
    "roe": 27.4,
    "roce": 34.9,
    "dividendYield": 0.07,
    "salesGrowth5Y": 49,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 113% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 30.7%"
    ],
    "cons": [
      "Stock is trading at 7.22 times its book value"
    ]
  },
  {
    "symbol": "360ONE",
    "name": "360 ONE WAM Ltd",
    "sector": "Financial Services",
    "industry": "Stockbroking & Allied",
    "currentPrice": 1128,
    "marketCap": 45558,
    "profitabilityScore": 77,
    "valuationScore": 50,
    "financialHealthScore": 72,
    "growthScore": 70,
    "stabilityScore": 24,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.4,
    "roe": 20.6,
    "roce": 14.9,
    "dividendYield": 1.06,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 39.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 157%"
    ],
    "cons": [
      "Stock is trading at 4.86 times its book value",
      "Promoter holding is low: 6.26%",
      "Promoters have pledged or encumbered 89.6% of their holding."
    ]
  },
  {
    "symbol": "3MINDIA",
    "name": "3M India Ltd",
    "sector": "Diversified",
    "industry": "Diversified",
    "currentPrice": 34915,
    "marketCap": 39465,
    "profitabilityScore": 82,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 64.6,
    "roe": 30.5,
    "roce": 40.5,
    "dividendYield": 0.46,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 123%"
    ],
    "cons": [
      "Stock is trading at 18.2 times its book value"
    ]
  },
  {
    "symbol": "AMBUJACEM",
    "name": "Ambuja Cements Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 529,
    "marketCap": 130735,
    "profitabilityScore": 33,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 41,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.8,
    "roe": 8.73,
    "roce": 10.5,
    "dividendYield": 0.38,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 5.27% over past five years.",
      "Tax rate seems low",
      "Company has a low return on equity of 9.17% over last 3 years."
    ]
  },
  {
    "symbol": "ANANDRATHI",
    "name": "Anand Rathi Wealth Ltd",
    "sector": "Financial Services",
    "industry": "Financial Products Distributor",
    "currentPrice": 2840,
    "marketCap": 23614,
    "profitabilityScore": 98,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 19,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.8,
    "roe": 45.3,
    "roce": 56.3,
    "dividendYield": 0.37,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 37.3% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 42.6%",
      "Company has been maintaining a healthy dividend payout of 31.5%"
    ],
    "cons": [
      "Stock is trading at 29.2 times its book value",
      "Promoter holding has decreased over last 3 years: -6.02%"
    ]
  },
  {
    "symbol": "APTUS",
    "name": "Aptus Value Housing Finance India Ltd",
    "sector": "Financial Services",
    "industry": "Housing Finance Company",
    "currentPrice": 279,
    "marketCap": 13913,
    "profitabilityScore": 74,
    "valuationScore": 82,
    "financialHealthScore": 72,
    "growthScore": 55,
    "stabilityScore": 28,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.5,
    "roe": 18.6,
    "roce": 15,
    "dividendYield": 1.61,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 28.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 28.8%"
    ],
    "cons": [
      "Stock is trading at 3.00 times its book value",
      "Promoter holding has decreased over last quarter: -16.5%"
    ]
  },
  {
    "symbol": "BALKRISIND",
    "name": "Balkrishna Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tyres & Rubber Products",
    "currentPrice": 2357,
    "marketCap": 45530,
    "profitabilityScore": 58,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33,
    "roe": 15.8,
    "roce": 16.7,
    "dividendYield": 0.68,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 23.0%"
    ],
    "cons": []
  },
  {
    "symbol": "CARERATING",
    "name": "CARE Ratings Ltd",
    "sector": "Financial Services",
    "industry": "Ratings",
    "currentPrice": 1551,
    "marketCap": 4656,
    "profitabilityScore": 88,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 63,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.5,
    "roe": 18,
    "roce": 24.6,
    "dividendYield": 1.16,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 60.5%"
    ],
    "cons": []
  },
  {
    "symbol": "CDSL",
    "name": "Central Depository Services (India) Ltd",
    "sector": "Financial Services",
    "industry": "Depositories, Clearing Houses and Other Intermediaries",
    "currentPrice": 1521,
    "marketCap": 31787,
    "profitabilityScore": 100,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 22,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 67.2,
    "roe": 32.7,
    "roce": 42,
    "dividendYield": 0.82,
    "salesGrowth5Y": 37,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 37.8% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 29.7%"
    ],
    "cons": [
      "Stock is trading at 18.2 times its book value",
      "Promoter holding is low: 15.0%",
      "Promoter holding has decreased over last 3 years: -5.00%"
    ]
  },
  {
    "symbol": "CESC",
    "name": "CESC Ltd",
    "sector": "Utilities",
    "industry": "Integrated Power Utilities",
    "currentPrice": 168,
    "marketCap": 22325,
    "profitabilityScore": 41,
    "valuationScore": 88,
    "financialHealthScore": 66,
    "growthScore": 80,
    "stabilityScore": 43,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.4,
    "roe": 11.3,
    "roce": 11.2,
    "dividendYield": 3.56,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Stock is providing a good dividend yield of 3.56%.",
      "Company has been maintaining a healthy dividend payout of 44.0%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 6.93% over past five years.",
      "Company has a low return on equity of 11.9% over last 3 years.",
      "Earnings include an other income of Rs.1,152 Cr."
    ]
  },
  {
    "symbol": "CIEINDIA",
    "name": "CIE Automotive India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 405,
    "marketCap": 15340,
    "profitabilityScore": 53,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 29,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.2,
    "roe": 13.2,
    "roce": 16.6,
    "dividendYield": 1.73,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 18.3% CAGR over last 5 years"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 2.54% over past five years.",
      "Company has a low return on equity of 11.0% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -9.26%"
    ]
  },
  {
    "symbol": "CONCOR",
    "name": "Container Corporation Of India Ltd",
    "sector": "Services",
    "industry": "Logistics Solution Provider",
    "currentPrice": 500,
    "marketCap": 38111,
    "profitabilityScore": 50,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.1,
    "roe": 10.8,
    "roce": 13.9,
    "dividendYield": 1.84,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 55.9%"
    ],
    "cons": [
      "Stock is trading at 2.98 times its book value",
      "The company has delivered a poor sales growth of 6.36% over past five years.",
      "Company has a low return on equity of 10.8% over last 3 years."
    ]
  },
  {
    "symbol": "DEEPAKFERT",
    "name": "Deepak Fertilisers & Petrochemicals Corp Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 1234,
    "marketCap": 15550,
    "profitabilityScore": 57,
    "valuationScore": 82,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.8,
    "roe": 15.6,
    "roce": 15.7,
    "dividendYield": 0.81,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "ENGINERSIN",
    "name": "Engineers India Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 190,
    "marketCap": 10667,
    "profitabilityScore": 80,
    "valuationScore": 74,
    "financialHealthScore": 76,
    "growthScore": 50,
    "stabilityScore": 32,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.8,
    "roe": 23.2,
    "roce": 25,
    "dividendYield": 2.11,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 41.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of -0.94% over past five years.",
      "Debtor days have increased from 43.4 to 52.5 days.",
      "The company has delivered a poor sales growth of -0."
    ]
  },
  {
    "symbol": "GARFIBRES",
    "name": "Garware Technical Fibres Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 659,
    "marketCap": 6535,
    "profitabilityScore": 76,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 32,
    "roe": 18.7,
    "roce": 24.7,
    "dividendYield": 1.21,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 10.1% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "GLAND",
    "name": "Gland Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1700,
    "marketCap": 28019,
    "profitabilityScore": 43,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 42,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.4,
    "roe": 7.81,
    "roce": 11.9,
    "dividendYield": 1.06,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 28.4%"
    ],
    "cons": [
      "Stock is trading at 2.93 times its book value",
      "Company has a low return on equity of 9.22% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -6.03%"
    ]
  },
  {
    "symbol": "GODREJCP",
    "name": "Godrej Consumer Products Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Personal Care",
    "currentPrice": 1122,
    "marketCap": 114787,
    "profitabilityScore": 61,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 26,
    "volatilityScore": 41,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 61,
    "roe": 15.2,
    "roce": 19.2,
    "dividendYield": 1.34,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 9.43 times its book value",
      "The company has delivered a poor sales growth of 7.70% over past five years.",
      "Company has a low return on equity of 13.1% over last 3 years."
    ]
  },
  {
    "symbol": "GSPL",
    "name": "Gujarat State Petronet Ltd",
    "sector": "Energy",
    "industry": "Gas Transmission/Marketing",
    "currentPrice": 290,
    "marketCap": 16382,
    "profitabilityScore": 49,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 29,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.9,
    "roe": 9.89,
    "roce": 15.2,
    "dividendYield": 1.72,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 19.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.25% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "HGINFRA",
    "name": "H.G. Infra Engineering Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 794,
    "marketCap": 5177,
    "profitabilityScore": 64,
    "valuationScore": 88,
    "financialHealthScore": 66,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 12.9,
    "roe": 18.3,
    "roce": 16.8,
    "dividendYield": 0.25,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company's median sales growth is 23.2% of last 10 years"
    ],
    "cons": [
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "ICRA",
    "name": "ICRA Ltd",
    "sector": "Financial Services",
    "industry": "Ratings",
    "currentPrice": 5996,
    "marketCap": 5782,
    "profitabilityScore": 78,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.8,
    "roe": 16.8,
    "roce": 23.1,
    "dividendYield": 1,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 63.6%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.18% over past five years.",
      "Earnings include an other income of Rs.84.7 Cr.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "IPCALAB",
    "name": "Ipca Laboratories Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1448,
    "marketCap": 36724,
    "profitabilityScore": 50,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 42,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.1,
    "roe": 12.8,
    "roce": 14.7,
    "dividendYield": 0.28,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 17.9%"
    ],
    "cons": [
      "Stock is trading at 4.89 times its book value",
      "Company has a low return on equity of 10.3% over last 3 years."
    ]
  },
  {
    "symbol": "JINDALSAW",
    "name": "Jindal Saw Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 157,
    "marketCap": 10043,
    "profitabilityScore": 60,
    "valuationScore": 74,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 26,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 7.31,
    "roe": 16.3,
    "roce": 19.4,
    "dividendYield": 1.27,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.83 times its book value",
      "Company has delivered good profit growth of 23.9% CAGR over last 5 years"
    ],
    "cons": [
      "Contingent liabilities of Rs.4,236 Cr."
    ]
  },
  {
    "symbol": "JINDALSTEL",
    "name": "Jindal Steel Ltd",
    "sector": "Commodities",
    "industry": "Iron & Steel",
    "currentPrice": 998,
    "marketCap": 101754,
    "profitabilityScore": 35,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.3,
    "roe": 7.68,
    "roce": 10.7,
    "dividendYield": 0.2,
    "salesGrowth5Y": 2,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 2.47% over past five years.",
      "Company has a low return on equity of 10.7% over last 3 years.",
      "Dividend payout has been low at 5.63% of profits over last 3 years"
    ]
  },
  {
    "symbol": "JMFINANCIL",
    "name": "JM Financial Ltd",
    "sector": "Financial Services",
    "industry": "Holding Company",
    "currentPrice": 138,
    "marketCap": 13243,
    "profitabilityScore": 49,
    "valuationScore": 88,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 31,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 11.6,
    "roe": 9.01,
    "roce": 9.39,
    "dividendYield": 1.95,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 35.6%",
      "Debtor days have improved from 77.2 to 53.5 days."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 5.06% over past five years.",
      "Company has a low return on equity of 7.35% over last 3 years.",
      "The company has delivered a poor sales growth of 5."
    ]
  },
  {
    "symbol": "JSWINFRA",
    "name": "JSW Infrastructure Ltd",
    "sector": "Services",
    "industry": "Port & Port services",
    "currentPrice": 263,
    "marketCap": 55302,
    "profitabilityScore": 68,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 45,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.9,
    "roe": 16.2,
    "roce": 13.9,
    "dividendYield": 0.3,
    "salesGrowth5Y": 31,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 51.5% CAGR over last 5 years",
      "Company's working capital requirements have reduced from 20.0 days to 10.2 days"
    ],
    "cons": [
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "JYOTHYLAB",
    "name": "Jyothy Labs Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Household Products",
    "currentPrice": 283,
    "marketCap": 10387,
    "profitabilityScore": 74,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.4,
    "roe": 19,
    "roce": 24.6,
    "dividendYield": 1.24,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 38.5%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.7% over past five years.",
      "Debtor days have increased from 27.4 to 35.2 days.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "LTF",
    "name": "L&T Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 299,
    "marketCap": 74952,
    "profitabilityScore": 51,
    "valuationScore": 70,
    "financialHealthScore": 60,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 45,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.8,
    "roe": 10.8,
    "roce": 8.71,
    "dividendYield": 0.92,
    "salesGrowth5Y": 2,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 27.8%"
    ],
    "cons": [
      "Stock is trading at 2.84 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 2.46% over past five years."
    ]
  },
  {
    "symbol": "MANKIND",
    "name": "Mankind Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 2190,
    "marketCap": 90425,
    "profitabilityScore": 59,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 36,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 51.7,
    "roe": 14.7,
    "roce": 16,
    "dividendYield": 0.05,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Debtor days have increased from 33.4 to 46.0 days."
    ]
  },
  {
    "symbol": "MASTEK",
    "name": "Mastek Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 2129,
    "marketCap": 6601,
    "profitabilityScore": 60,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 17.9,
    "roe": 16.1,
    "roce": 17.3,
    "dividendYield": 1.08,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 19.4%"
    ],
    "cons": []
  },
  {
    "symbol": "MAYURUNIQ",
    "name": "Mayur Uniquoters Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Leather And Leather Products",
    "currentPrice": 492,
    "marketCap": 2159,
    "profitabilityScore": 68,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 63,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14,
    "roe": 16.2,
    "roce": 21.8,
    "dividendYield": 1.02,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.8% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "NESCO",
    "name": "NESCO Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 1207,
    "marketCap": 8501,
    "profitabilityScore": 79,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.6,
    "roe": 15.8,
    "roce": 21.1,
    "dividendYield": 0.54,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "PACEDIGITK",
    "name": "Pace Digitek Ltd",
    "sector": "Telecommunication",
    "industry": "Telecom - Infrastructure",
    "currentPrice": 201,
    "marketCap": 4336,
    "profitabilityScore": 91,
    "valuationScore": 92,
    "financialHealthScore": 74,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 18.3,
    "roe": 31.4,
    "roce": 41.3,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 31.5%"
    ],
    "cons": [
      "Company has high debtors of 276 days.",
      "Company's cost of borrowing seems high",
      "Working capital days have increased from 53.1 days to 113 days"
    ]
  },
  {
    "symbol": "PNCINFRA",
    "name": "PNC Infratech Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 244,
    "marketCap": 6250,
    "profitabilityScore": 52,
    "valuationScore": 92,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15,
    "roe": 13.9,
    "roce": 13.9,
    "dividendYield": 0.25,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is trading at 0.94 times its book value"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 3.85% over past five years.",
      "Contingent liabilities of Rs.3,595 Cr."
    ]
  },
  {
    "symbol": "REDINGTON",
    "name": "Redington Ltd",
    "sector": "Services",
    "industry": "Trading & Distributors",
    "currentPrice": 268,
    "marketCap": 20963,
    "profitabilityScore": 54,
    "valuationScore": 82,
    "financialHealthScore": 67,
    "growthScore": 70,
    "stabilityScore": 35,
    "volatilityScore": 51,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.3,
    "roe": 14.4,
    "roce": 18.9,
    "dividendYield": 2.54,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 37.8%"
    ],
    "cons": [
      "Earnings include an other income of Rs.837 Cr."
    ]
  },
  {
    "symbol": "RELIANCE",
    "name": "Reliance Industries Ltd",
    "sector": "Energy",
    "industry": "Refineries & Marketing",
    "currentPrice": 1543,
    "marketCap": 2087653,
    "profitabilityScore": 35,
    "valuationScore": 70,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 41,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.2,
    "roe": 8.4,
    "roce": 9.69,
    "dividendYield": 0.36,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 10.0% over past five years.",
      "Company has a low return on equity of 8.79% over last 3 years.",
      "Dividend payout has been low at 9.84% of profits over last 3 years"
    ]
  },
  {
    "symbol": "RUBICON",
    "name": "Rubicon Research Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 615,
    "marketCap": 10137,
    "profitabilityScore": 88,
    "valuationScore": 56,
    "financialHealthScore": 70,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 48,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 66.2,
    "roe": 28.9,
    "roce": 26,
    "dividendYield": 0,
    "salesGrowth5Y": 37,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.8% CAGR over last 5 years",
      "Debtor days have improved from 143 to 92.0 days.",
      "Company's working capital requirements have reduced from 59.3 days to 45.8 days"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -24.2%",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "SBIN",
    "name": "State Bank of India",
    "sector": "Financial Services",
    "industry": "Public Sector Bank",
    "currentPrice": 956,
    "marketCap": 882907,
    "profitabilityScore": 38,
    "valuationScore": 88,
    "financialHealthScore": 53,
    "growthScore": 70,
    "stabilityScore": 28,
    "volatilityScore": 41,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 11.2,
    "roe": 17.2,
    "roce": 6.47,
    "dividendYield": 1.66,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 36.3% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 18.2%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -1.92%",
      "Contingent liabilities of Rs.27,42,584 Cr."
    ]
  },
  {
    "symbol": "SCHAEFFLER",
    "name": "Schaeffler India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 3793,
    "marketCap": 59282,
    "profitabilityScore": 77,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 45,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 55.6,
    "roe": 18.5,
    "roce": 25,
    "dividendYield": 0.74,
    "salesGrowth5Y": 34,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 44.8%"
    ],
    "cons": [
      "Stock is trading at 11.0 times its book value"
    ]
  },
  {
    "symbol": "SHRIPISTON",
    "name": "Shriram Pistons & Rings Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 3044,
    "marketCap": 13414,
    "profitabilityScore": 84,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.8,
    "roe": 23.2,
    "roce": 25.7,
    "dividendYield": 0.33,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 47.8% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "THYROCARE",
    "name": "Thyrocare Technologies Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Service Provider",
    "currentPrice": 422,
    "marketCap": 6709,
    "profitabilityScore": 75,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 28,
    "volatilityScore": 48,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52.5,
    "roe": 16.2,
    "roce": 24.8,
    "dividendYield": 1.66,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 135%"
    ],
    "cons": [
      "Stock is trading at 12.6 times its book value",
      "The company has delivered a poor sales growth of 9.62% over past five years.",
      "Company has a low return on equity of 13.9% over last 3 years."
    ]
  },
  {
    "symbol": "VIJAYA",
    "name": "Vijaya Diagnostic Centre Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Service Provider",
    "currentPrice": 1016,
    "marketCap": 10436,
    "profitabilityScore": 80,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 48,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.5,
    "roe": 19,
    "roce": 20.9,
    "dividendYield": 0.2,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 12.1 times its book value"
    ]
  },
  {
    "symbol": "VIKRAMSOLR",
    "name": "Vikram Solar Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 236,
    "marketCap": 8562,
    "profitabilityScore": 74,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 42,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 32.8,
    "roe": 16.6,
    "roce": 26.4,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 46.5% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoters have pledged or encumbered 48.2% of their holding.",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "AARTIDRUGS",
    "name": "Aarti Drugs Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 398,
    "marketCap": 3631,
    "profitabilityScore": 46,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 54,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 18.2,
    "roe": 12.7,
    "roce": 13.1,
    "dividendYield": 0.25,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding has decreased over last quarter: -0.50%",
      "The company has delivered a poor sales growth of 5.74% over past five years.",
      "Company has a low return on equity of 13.8% over last 3 years."
    ]
  },
  {
    "symbol": "ADVENZYMES",
    "name": "Advanced Enzyme Technologies Ltd",
    "sector": "Healthcare",
    "industry": "Biotechnology",
    "currentPrice": 304,
    "marketCap": 3400,
    "profitabilityScore": 48,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 29,
    "volatilityScore": 54,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.1,
    "roe": 9.54,
    "roce": 13.1,
    "dividendYield": 1.71,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 32.6%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.48% over past five years.",
      "Company has a low return on equity of 10.1% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -6.80%"
    ]
  },
  {
    "symbol": "APLLTD",
    "name": "Alembic Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 881,
    "marketCap": 17307,
    "profitabilityScore": 45,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 48,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.3,
    "roe": 11.4,
    "roce": 13,
    "dividendYield": 1.25,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 39.4%"
    ],
    "cons": [
      "Stock is trading at 3.25 times its book value",
      "The company has delivered a poor sales growth of 7.69% over past five years.",
      "Company has a low return on equity of 10.6% over last 3 years."
    ]
  },
  {
    "symbol": "ASHOKLEY",
    "name": "Ashok Leyland Ltd",
    "sector": "Industrials",
    "industry": "Commercial Vehicles",
    "currentPrice": 159,
    "marketCap": 93565,
    "profitabilityScore": 67,
    "valuationScore": 54,
    "financialHealthScore": 57,
    "growthScore": 70,
    "stabilityScore": 31,
    "volatilityScore": 45,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28,
    "roe": 28.8,
    "roce": 14.3,
    "dividendYield": 1.96,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 54.2% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 59.7%"
    ],
    "cons": [
      "Stock is trading at 7.43 times its book value",
      "Promoters have pledged or encumbered 41.2% of their holding."
    ]
  },
  {
    "symbol": "BSOFT",
    "name": "Birlasoft Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 428,
    "marketCap": 11927,
    "profitabilityScore": 65,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.8,
    "roe": 15.6,
    "roce": 21,
    "dividendYield": 1.52,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 30.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.3% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "CLEAN",
    "name": "Clean Science & Technology Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 893,
    "marketCap": 9484,
    "profitabilityScore": 88,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.8,
    "roe": 20.2,
    "roce": 27.3,
    "dividendYield": 0.67,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 24.2%",
      "Company has been maintaining a healthy dividend payout of 21.3%"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -24.0%"
    ]
  },
  {
    "symbol": "CROMPTON",
    "name": "Crompton Greaves Consumer Electricals Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 253,
    "marketCap": 16275,
    "profitabilityScore": 63,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.4,
    "roe": 17.4,
    "roce": 19,
    "dividendYield": 1.19,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 39.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 11.7% over past five years.",
      "The company has been revamping itself since June 2023.",
      "The company has delivered a poor sales growth of 11."
    ]
  },
  {
    "symbol": "DLF",
    "name": "DLF Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 687,
    "marketCap": 170130,
    "profitabilityScore": 42,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 41,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 44.1,
    "roe": 11.4,
    "roce": 6.51,
    "dividendYield": 0.87,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 3.96 times its book value",
      "The company has delivered a poor sales growth of 5.62% over past five years.",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "DODLA",
    "name": "Dodla Dairy Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Dairy Products",
    "currentPrice": 1220,
    "marketCap": 7352,
    "profitabilityScore": 75,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.3,
    "roe": 19.8,
    "roce": 26.6,
    "dividendYield": 0.41,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 38.7% CAGR over last 5 years"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -0.77%"
    ]
  },
  {
    "symbol": "GATEWAY",
    "name": "Gateway Distriparks Ltd",
    "sector": "Services",
    "industry": "Logistics Solution Provider",
    "currentPrice": 57.4,
    "marketCap": 2866,
    "profitabilityScore": 47,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 42,
    "volatilityScore": 63,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 11.4,
    "roe": 12.2,
    "roce": 10.6,
    "dividendYield": 3.49,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 35.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 5.40% over past five years.",
      "Promoter holding is low: 32.3%",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "GNFC",
    "name": "Gujarat Narmada Valley Fertilizers & Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 498,
    "marketCap": 7329,
    "profitabilityScore": 31,
    "valuationScore": 92,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 43,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 11.5,
    "roe": 7.08,
    "roce": 9.57,
    "dividendYield": 3.61,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is trading at 0.85 times its book value",
      "Stock is providing a good dividend yield of 3.61%."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 8.86% over past five years.",
      "Company has a low return on equity of 9.98% over last 3 years.",
      "Earnings include an other income of Rs.556 Cr."
    ]
  },
  {
    "symbol": "HAVELLS",
    "name": "Havells India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Consumer Electronics",
    "currentPrice": 1407,
    "marketCap": 88271,
    "profitabilityScore": 73,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 45,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 60.3,
    "roe": 18.8,
    "roce": 25.3,
    "dividendYield": 0.71,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 43.6%",
      "Company's working capital requirements have reduced from 16.3 days to 12.0 days"
    ],
    "cons": [
      "Stock is trading at 10.2 times its book value"
    ]
  },
  {
    "symbol": "HINDPETRO",
    "name": "Hindustan Petroleum Corporation Ltd",
    "sector": "Energy",
    "industry": "Refineries & Marketing",
    "currentPrice": 446,
    "marketCap": 94901,
    "profitabilityScore": 39,
    "valuationScore": 70,
    "financialHealthScore": 66,
    "growthScore": 80,
    "stabilityScore": 34,
    "volatilityScore": 45,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 6.81,
    "roe": 13.8,
    "roce": 10.5,
    "dividendYield": 2.35,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 20.4%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.0% over past five years.",
      "Company has a low return on equity of 12.6% over last 3 years.",
      "The company has a 13."
    ]
  },
  {
    "symbol": "ICICIBANK",
    "name": "ICICI Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 1390,
    "marketCap": 993825,
    "profitabilityScore": 41,
    "valuationScore": 82,
    "financialHealthScore": 56,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 18.6,
    "roe": 17.9,
    "roce": 7.87,
    "dividendYield": 0.79,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 39.8% CAGR over last 5 years",
      "Company's working capital requirements have reduced from 88.8 days to 66.0 days"
    ],
    "cons": [
      "Stock is trading at 2.98 times its book value",
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.80,16,362 Cr."
    ]
  },
  {
    "symbol": "INOXINDIA",
    "name": "Inox India Ltd",
    "sector": "Industrials",
    "industry": "Other Industrial Products",
    "currentPrice": 1128,
    "marketCap": 10244,
    "profitabilityScore": 88,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42.9,
    "roe": 29,
    "roce": 38,
    "dividendYield": 0.18,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.9% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 30.2%",
      "Company has been maintaining a healthy dividend payout of 42.1%"
    ],
    "cons": [
      "Stock is trading at 10.4 times its book value"
    ]
  },
  {
    "symbol": "KFINTECH",
    "name": "KFin Technologies Ltd",
    "sector": "Financial Services",
    "industry": "Depositories, Clearing Houses and Other Intermediaries",
    "currentPrice": 1042,
    "marketCap": 17984,
    "profitabilityScore": 96,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52,
    "roe": 25,
    "roce": 32.8,
    "dividendYield": 0.72,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 134% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.0%"
    ],
    "cons": [
      "Stock is trading at 12.3 times its book value"
    ]
  },
  {
    "symbol": "KPITTECH",
    "name": "KPIT Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 1220,
    "marketCap": 33483,
    "profitabilityScore": 88,
    "valuationScore": 42,
    "financialHealthScore": 76,
    "growthScore": 55,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.3,
    "roe": 33.2,
    "roce": 40.9,
    "dividendYield": 0.7,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 40.4% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 30.7%",
      "Company has been maintaining a healthy dividend payout of 29.0%"
    ],
    "cons": [
      "Stock is trading at 10.2 times its book value"
    ]
  },
  {
    "symbol": "KPRMILL",
    "name": "K P R Mill Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 974,
    "marketCap": 33349,
    "profitabilityScore": 69,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.8,
    "roe": 17,
    "roce": 19.8,
    "dividendYield": 0.51,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 17.1%"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -1.21%"
    ]
  },
  {
    "symbol": "KSL",
    "name": "Kalyani Steels Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 715,
    "marketCap": 3124,
    "profitabilityScore": 56,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 63,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 12,
    "roe": 14.3,
    "roce": 15.8,
    "dividendYield": 1.4,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.6% over past five years.",
      "Company might be capitalizing the interest cost",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "LT",
    "name": "Larsen & Toubro Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 3997,
    "marketCap": 549806,
    "profitabilityScore": 56,
    "valuationScore": 54,
    "financialHealthScore": 65,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 41,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.2,
    "roe": 16.6,
    "roce": 14.5,
    "dividendYield": 0.85,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 33.0%"
    ],
    "cons": [
      "Stock is trading at 5.42 times its book value"
    ]
  },
  {
    "symbol": "MAHSEAMLES",
    "name": "Maharashtra Seamless Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 565,
    "marketCap": 7575,
    "profitabilityScore": 54,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 29,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 9.67,
    "roe": 12.9,
    "roce": 16.6,
    "dividendYield": 1.77,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is trading at 1.15 times its book value"
    ],
    "cons": [
      "Dividend payout has been low at 13.4% of profits over last 3 years"
    ]
  },
  {
    "symbol": "MAXHEALTH",
    "name": "Max Healthcare Institute Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 1079,
    "marketCap": 104890,
    "profitabilityScore": 55,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 32,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 74.4,
    "roe": 12.7,
    "roce": 14.9,
    "dividendYield": 0.14,
    "salesGrowth5Y": 46,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 80.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 10.4 times its book value",
      "Company has a low return on equity of 13.9% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "MUTHOOTFIN",
    "name": "Muthoot Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 3776,
    "marketCap": 151563,
    "profitabilityScore": 52,
    "valuationScore": 62,
    "financialHealthScore": 61,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.8,
    "roe": 19.6,
    "roce": 13.2,
    "dividendYield": 0.69,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 22.1%"
    ],
    "cons": [
      "Stock is trading at 4.62 times its book value"
    ]
  },
  {
    "symbol": "NBCC",
    "name": "NBCC (India) Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 108,
    "marketCap": 29131,
    "profitabilityScore": 82,
    "valuationScore": 42,
    "financialHealthScore": 60,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.6,
    "roe": 25.5,
    "roce": 33.2,
    "dividendYield": 0.62,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 51.0% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 10.9 times its book value"
    ]
  },
  {
    "symbol": "NCC",
    "name": "NCC Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 163,
    "marketCap": 10228,
    "profitabilityScore": 57,
    "valuationScore": 88,
    "financialHealthScore": 68,
    "growthScore": 70,
    "stabilityScore": 26,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 12.9,
    "roe": 11.4,
    "roce": 21.7,
    "dividendYield": 1.35,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 19.6%"
    ],
    "cons": [
      "Company has a low return on equity of 11.0% over last 3 years.",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "NUVAMA",
    "name": "Nuvama Wealth Management Ltd",
    "sector": "Financial Services",
    "industry": "Stockbroking & Allied",
    "currentPrice": 7127,
    "marketCap": 25922,
    "profitabilityScore": 89,
    "valuationScore": 54,
    "financialHealthScore": 58,
    "growthScore": 55,
    "stabilityScore": 31,
    "volatilityScore": 51,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.3,
    "roe": 30.9,
    "roce": 20.4,
    "dividendYield": 2.03,
    "salesGrowth5Y": 40,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 28.6% CAGR over last 5 years",
      "Debtor days have improved from 95.3 to 65.8 days."
    ],
    "cons": [
      "Promoters have pledged or encumbered 62.8% of their holding."
    ]
  },
  {
    "symbol": "POWERMECH",
    "name": "Power Mech Projects Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 2140,
    "marketCap": 6761,
    "profitabilityScore": 67,
    "valuationScore": 70,
    "financialHealthScore": 76,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.7,
    "roe": 16.3,
    "roce": 22.9,
    "dividendYield": 0.06,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 20.1% CAGR over last 5 years"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -5.36%"
    ]
  },
  {
    "symbol": "SAIL",
    "name": "Steel Authority of India Ltd",
    "sector": "Commodities",
    "industry": "Iron & Steel",
    "currentPrice": 130,
    "marketCap": 53590,
    "profitabilityScore": 19,
    "valuationScore": 92,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 45,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.2,
    "roe": 4.54,
    "roce": 6.76,
    "dividendYield": 1.23,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.92 times its book value",
      "Company has been maintaining a healthy dividend payout of 27.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.7% over past five years.",
      "Company has a low return on equity of 4.86% over last 3 years.",
      "Contingent liabilities of Rs.44,708 Cr."
    ]
  },
  {
    "symbol": "SHARDACROP",
    "name": "Sharda Cropchem Ltd",
    "sector": "Commodities",
    "industry": "Pesticides & Agrochemicals",
    "currentPrice": 849,
    "marketCap": 7650,
    "profitabilityScore": 50,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.9,
    "roe": 12.6,
    "roce": 16.5,
    "dividendYield": 1.06,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 42.5%"
    ],
    "cons": [
      "Stock is trading at 2.86 times its book value",
      "Company has a low return on equity of 9.89% over last 3 years.",
      "Company has high debtors of 165 days."
    ]
  },
  {
    "symbol": "SHRIRAMFIN",
    "name": "Shriram Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 834,
    "marketCap": 156817,
    "profitabilityScore": 43,
    "valuationScore": 82,
    "financialHealthScore": 61,
    "growthScore": 55,
    "stabilityScore": 25,
    "volatilityScore": 41,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 17.9,
    "roe": 15.6,
    "roce": 11,
    "dividendYield": 1.19,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 26.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 21.4%"
    ],
    "cons": [
      "Stock is trading at 2.59 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last 3 years: -3.98%"
    ]
  },
  {
    "symbol": "TARIL",
    "name": "Transformers & Rectifiers India Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 240,
    "marketCap": 7216,
    "profitabilityScore": 81,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.1,
    "roe": 23.4,
    "roce": 28,
    "dividendYield": 0.08,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 251% CAGR over last 5 years",
      "Debtor days have improved from 142 to 84.8 days."
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -10.6%"
    ]
  },
  {
    "symbol": "TI",
    "name": "Tilaknagar Industries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Breweries & Distilleries",
    "currentPrice": 439,
    "marketCap": 10847,
    "profitabilityScore": 84,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.8,
    "roe": 29.6,
    "roce": 28.2,
    "dividendYield": 0.23,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 26.4% CAGR over last 5 years"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -8.47%",
      "Tax rate seems low",
      "Promoters have pledged or encumbered 81.6% of their holding."
    ]
  },
  {
    "symbol": "UNIONBANK",
    "name": "Union Bank of India",
    "sector": "Financial Services",
    "industry": "Public Sector Bank",
    "currentPrice": 148,
    "marketCap": 113215,
    "profitabilityScore": 38,
    "valuationScore": 74,
    "financialHealthScore": 54,
    "growthScore": 70,
    "stabilityScore": 40,
    "volatilityScore": 41,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 6.12,
    "roe": 17,
    "roce": 6.72,
    "dividendYield": 3.2,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.90 times its book value",
      "Stock is providing a good dividend yield of 3.20%.",
      "Company has delivered good profit growth of 50.7% CAGR over last 5 years"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.6,06,539 Cr.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "ZENSARTECH",
    "name": "Zensar Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 730,
    "marketCap": 16609,
    "profitabilityScore": 64,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 29,
    "volatilityScore": 57,
    "riskScore": 43,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.7,
    "roe": 16.4,
    "roce": 21.3,
    "dividendYield": 1.78,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 36.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 4.78% over past five years.",
      "The company has delivered a poor sales growth of 4."
    ]
  },
  {
    "symbol": "AMRUTANJAN",
    "name": "Amrutanjan Health Care Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 640,
    "marketCap": 1856,
    "profitabilityScore": 79,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 54,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 91.1,
    "roe": 20,
    "roce": 31.4,
    "dividendYield": 0.72,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 33.0%"
    ],
    "cons": [
      "Stock is trading at 17.2 times its book value",
      "The company has delivered a poor sales growth of 11.8% over past five years.",
      "Promoter holding has decreased over last 3 years: -3.50%"
    ]
  },
  {
    "symbol": "APARINDS",
    "name": "Apar Industries Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 8643,
    "marketCap": 34723,
    "profitabilityScore": 74,
    "valuationScore": 42,
    "financialHealthScore": 75,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37,
    "roe": 19.5,
    "roce": 32.7,
    "dividendYield": 0.59,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 43.4% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 24.6%"
    ],
    "cons": [
      "Stock is trading at 7.21 times its book value",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "APLAPOLLO",
    "name": "APL Apollo Tubes Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 1736,
    "marketCap": 48228,
    "profitabilityScore": 69,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 46,
    "roe": 19,
    "roce": 22.4,
    "dividendYield": 0.33,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 21.2%"
    ],
    "cons": [
      "Stock is trading at 10.4 times its book value",
      "Promoter holding has decreased over last 3 years: -6.22%"
    ]
  },
  {
    "symbol": "ARE&M",
    "name": "Amara Raja Energy & Mobility Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 928,
    "marketCap": 16988,
    "profitabilityScore": 50,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.1,
    "roe": 11.9,
    "roce": 16.2,
    "dividendYield": 1.13,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 18.0%",
      "Company's working capital requirements have reduced from 50.9 days to 40.6 days"
    ],
    "cons": [
      "Company has a low return on equity of 13.5% over last 3 years."
    ]
  },
  {
    "symbol": "ASHOKA",
    "name": "Ashoka Buildcon Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 165,
    "marketCap": 4594,
    "profitabilityScore": 90,
    "valuationScore": 70,
    "financialHealthScore": 62,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 3.04,
    "roe": 54.8,
    "roce": 39.7,
    "dividendYield": 0,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is trading at 1.10 times its book value",
      "Company has delivered good profit growth of 60.1% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Tax rate seems low",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "AWL",
    "name": "AWL Agri Business Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Edible Oil",
    "currentPrice": 251,
    "marketCap": 32583,
    "profitabilityScore": 56,
    "valuationScore": 62,
    "financialHealthScore": 72,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.1,
    "roe": 13.9,
    "roce": 20.9,
    "dividendYield": 0,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding has decreased over last quarter: -10.4%",
      "Company has a low return on equity of 7.89% over last 3 years."
    ]
  },
  {
    "symbol": "BAJAJFINSV",
    "name": "Bajaj Finserv Ltd",
    "sector": "Financial Services",
    "industry": "Holding Company",
    "currentPrice": 2059,
    "marketCap": 329092,
    "profitabilityScore": 53,
    "valuationScore": 62,
    "financialHealthScore": 55,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34,
    "roe": 13.4,
    "roce": 11,
    "dividendYield": 0.05,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 21.4% CAGR over last 5 years",
      "Company's median sales growth is 21.2% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 4.30 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "BANKBARODA",
    "name": "Bank of Baroda",
    "sector": "Financial Services",
    "industry": "Public Sector Bank",
    "currentPrice": 285,
    "marketCap": 147487,
    "profitabilityScore": 35,
    "valuationScore": 74,
    "financialHealthScore": 54,
    "growthScore": 70,
    "stabilityScore": 38,
    "volatilityScore": 41,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 7.67,
    "roe": 15.5,
    "roce": 6.29,
    "dividendYield": 2.93,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.93 times its book value",
      "Company has delivered good profit growth of 86.2% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 20.3%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.8,49,004 Cr.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "CANBK",
    "name": "Canara Bank",
    "sector": "Financial Services",
    "industry": "Public Sector Bank",
    "currentPrice": 143,
    "marketCap": 129644,
    "profitabilityScore": 39,
    "valuationScore": 70,
    "financialHealthScore": 53,
    "growthScore": 70,
    "stabilityScore": 37,
    "volatilityScore": 41,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 6.77,
    "roe": 17.8,
    "roce": 6.79,
    "dividendYield": 2.8,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.12 times its book value",
      "Company has delivered good profit growth of 61.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 19.7%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.4,07,369 Cr.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "CEIGALL",
    "name": "Ceigall India Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 230,
    "marketCap": 3999,
    "profitabilityScore": 70,
    "valuationScore": 82,
    "financialHealthScore": 73,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.5,
    "roe": 20.9,
    "roce": 19.4,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.5%"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Debtor days have increased from 59.8 to 71.8 days."
    ]
  },
  {
    "symbol": "CHOLAHLDNG",
    "name": "Cholamandalam Financial Holdings Ltd",
    "sector": "Financial Services",
    "industry": "Investment Company",
    "currentPrice": 1882,
    "marketCap": 35330,
    "profitabilityScore": 68,
    "valuationScore": 82,
    "financialHealthScore": 52,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.9,
    "roe": 19.1,
    "roce": 10.6,
    "dividendYield": 0.07,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 31.6% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 2.59 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "COFORGE",
    "name": "Coforge Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 1951,
    "marketCap": 65375,
    "profitabilityScore": 65,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 45,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 57.4,
    "roe": 16,
    "roce": 20.3,
    "dividendYield": 0.78,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 59.0%"
    ],
    "cons": [
      "Stock is trading at 9.43 times its book value"
    ]
  },
  {
    "symbol": "COHANCE",
    "name": "Cohance Lifesciences Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 530,
    "marketCap": 20297,
    "profitabilityScore": 59,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 42,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.1,
    "roe": 12.7,
    "roce": 14.9,
    "dividendYield": 0,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company's working capital requirements have reduced from 96.3 days to 74.1 days"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding has decreased over last quarter: -8.92%",
      "The company has delivered a poor sales growth of 7.51% over past five years."
    ]
  },
  {
    "symbol": "ESCORTS",
    "name": "Escorts Kubota Ltd",
    "sector": "Industrials",
    "industry": "Tractors",
    "currentPrice": 3676,
    "marketCap": 41147,
    "profitabilityScore": 45,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.5,
    "roe": 12.8,
    "roce": 13.6,
    "dividendYield": 0.76,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 21.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 3.46 times its book value",
      "Company has a low return on equity of 11.3% over last 3 years.",
      "Earnings include an other income of Rs.1,714 Cr."
    ]
  },
  {
    "symbol": "FORTIS",
    "name": "Fortis Healthcare Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 861,
    "marketCap": 65038,
    "profitabilityScore": 43,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 36,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 64.6,
    "roe": 10.1,
    "roce": 12,
    "dividendYield": 0.12,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 70.3% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 6.87 times its book value",
      "The company has delivered a poor sales growth of 10.9% over past five years.",
      "Company has a low return on equity of 8.67% over last 3 years."
    ]
  },
  {
    "symbol": "GALAXYSURF",
    "name": "Galaxy Surfactants Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 2002,
    "marketCap": 7110,
    "profitabilityScore": 52,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.8,
    "roe": 13.5,
    "roce": 16.2,
    "dividendYield": 1.1,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 10.2% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "GICRE",
    "name": "General Insurance Corporation of India",
    "sector": "Financial Services",
    "industry": "General Insurance",
    "currentPrice": 376,
    "marketCap": 65957,
    "profitabilityScore": 46,
    "valuationScore": 74,
    "financialHealthScore": 69,
    "growthScore": 50,
    "stabilityScore": 36,
    "volatilityScore": 45,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 6.89,
    "roe": 11,
    "roce": 13.3,
    "dividendYield": 2.66,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is trading at 0.98 times its book value",
      "Company has delivered good profit growth of 105% CAGR over last 5 years"
    ],
    "cons": [
      "The company has delivered a poor sales growth of -0.29% over past five years.",
      "Company has a low return on equity of 12.7% over last 3 years.",
      "Contingent liabilities of Rs.26,577 Cr."
    ]
  },
  {
    "symbol": "GNA",
    "name": "GNA Axles Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 300,
    "marketCap": 1290,
    "profitabilityScore": 48,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 12.3,
    "roe": 12.5,
    "roce": 14.3,
    "dividendYield": 1,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 11.1% over past five years.",
      "Company might be capitalizing the interest cost",
      "Dividend payout has been low at 10.2% of profits over last 3 years"
    ]
  },
  {
    "symbol": "HDBFS",
    "name": "HDB Financial Services Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 743,
    "marketCap": 61728,
    "profitabilityScore": 59,
    "valuationScore": 80,
    "financialHealthScore": 57,
    "growthScore": 50,
    "stabilityScore": 18,
    "volatilityScore": 45,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.4,
    "roe": 14.7,
    "roce": 9.79,
    "dividendYield": 0.27,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "HERITGFOOD",
    "name": "Heritage Foods Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Dairy Products",
    "currentPrice": 458,
    "marketCap": 4252,
    "profitabilityScore": 74,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.7,
    "roe": 20.2,
    "roce": 25.3,
    "dividendYield": 0.55,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 25.6% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 24.7%"
    ],
    "cons": []
  },
  {
    "symbol": "IOC",
    "name": "Indian Oil Corporation Ltd",
    "sector": "Energy",
    "industry": "Refineries & Marketing",
    "currentPrice": 162,
    "marketCap": 228710,
    "profitabilityScore": 23,
    "valuationScore": 70,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 41,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 9.38,
    "roe": 6.51,
    "roce": 7.36,
    "dividendYield": 1.85,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.16 times its book value",
      "Company has been maintaining a healthy dividend payout of 37.4%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.40% over past five years.",
      "Company has a low return on equity of 13.1% over last 3 years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "IRB",
    "name": "IRB Infrastructure Developers Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 41.9,
    "marketCap": 25303,
    "profitabilityScore": 41,
    "valuationScore": 76,
    "financialHealthScore": 71,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.9,
    "roe": 5.91,
    "roce": 7.82,
    "dividendYield": 0.72,
    "salesGrowth5Y": 2,
    "promoterHolding": 0,
    "pros": [
      "Debtor days have improved from 48.8 to 15.9 days."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 2.13% over past five years.",
      "Company has a low return on equity of 5.29% over last 3 years."
    ]
  },
  {
    "symbol": "JAINREC",
    "name": "Jain Resource Recycling Ltd",
    "sector": "Commodities",
    "industry": "Diversified Metals",
    "currentPrice": 383,
    "marketCap": 13227,
    "profitabilityScore": 82,
    "valuationScore": 68,
    "financialHealthScore": 67,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 49.8,
    "roe": 40.6,
    "roce": 26.7,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "JAMNAAUTO",
    "name": "Jamna Auto Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 117,
    "marketCap": 4664,
    "profitabilityScore": 68,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26,
    "roe": 19.2,
    "roce": 20.7,
    "dividendYield": 1.8,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 46.0%"
    ],
    "cons": []
  },
  {
    "symbol": "JLHL",
    "name": "Jupiter Life Line Hospitals Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 1424,
    "marketCap": 9318,
    "profitabilityScore": 63,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 48,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 46.9,
    "roe": 15,
    "roce": 18,
    "dividendYield": 0.07,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 43.6% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "JUBLPHARMA",
    "name": "Jubilant Pharmova Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1040,
    "marketCap": 16581,
    "profitabilityScore": 36,
    "valuationScore": 70,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 48,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.4,
    "roe": 9.55,
    "roce": 9.54,
    "dividendYield": 0.48,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company's working capital requirements have reduced from 43.0 days to 16.3 days"
    ],
    "cons": [
      "Stock is trading at 2.51 times its book value",
      "The company has delivered a poor sales growth of 3.90% over past five years.",
      "Company has a low return on equity of 1.41% over last 3 years."
    ]
  },
  {
    "symbol": "MBEL",
    "name": "M & B Engineering Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 352,
    "marketCap": 2015,
    "profitabilityScore": 84,
    "valuationScore": 62,
    "financialHealthScore": 67,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.8,
    "roe": 28.5,
    "roce": 26.1,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 48.2% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "NEWGEN",
    "name": "Newgen Software Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 846,
    "marketCap": 12042,
    "profitabilityScore": 83,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 36.6,
    "roe": 22.5,
    "roce": 28,
    "dividendYield": 0.59,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 33.4% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 21.4%"
    ],
    "cons": [
      "Stock is trading at 7.52 times its book value"
    ]
  },
  {
    "symbol": "NHPC",
    "name": "NHPC Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 76.4,
    "marketCap": 76744,
    "profitabilityScore": 44,
    "valuationScore": 76,
    "financialHealthScore": 66,
    "growthScore": 50,
    "stabilityScore": 35,
    "volatilityScore": 45,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.2,
    "roe": 7.53,
    "roce": 7.42,
    "dividendYield": 2.5,
    "salesGrowth5Y": 1,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 54.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 0.73% over past five years.",
      "Company has a low return on equity of 9.20% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "PREMIERENE",
    "name": "Premier Energies Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 870,
    "marketCap": 39384,
    "profitabilityScore": 85,
    "valuationScore": 54,
    "financialHealthScore": 75,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33,
    "roe": 53.6,
    "roce": 41.1,
    "dividendYield": 0.11,
    "salesGrowth5Y": 47,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 90.5% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 42.9%"
    ],
    "cons": [
      "Stock is trading at 11.4 times its book value"
    ]
  },
  {
    "symbol": "RADIANTCMS",
    "name": "Radiant Cash Management Services Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 52.3,
    "marketCap": 555,
    "profitabilityScore": 78,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 46,
    "volatilityScore": 69,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.2,
    "roe": 17.7,
    "roce": 26.2,
    "dividendYield": 4.78,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 39.0%"
    ],
    "cons": []
  },
  {
    "symbol": "RAINBOW",
    "name": "Rainbow Childrens Medicare Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 1344,
    "marketCap": 13651,
    "profitabilityScore": 72,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 48,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 53.8,
    "roe": 17.4,
    "roce": 18.7,
    "dividendYield": 0.22,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 33.7% CAGR over last 5 years",
      "Company's median sales growth is 25.1% of last 10 years",
      "Company's working capital requirements have reduced from 45.4 days to 19.4 days"
    ],
    "cons": [
      "Stock is trading at 8.99 times its book value"
    ]
  },
  {
    "symbol": "RATNAMANI",
    "name": "Ratnamani Metals & Tubes Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 2401,
    "marketCap": 16839,
    "profitabilityScore": 66,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.8,
    "roe": 16,
    "roce": 21.5,
    "dividendYield": 0.58,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "SJS",
    "name": "S J S Enterprises Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 1661,
    "marketCap": 5312,
    "profitabilityScore": 78,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 38.3,
    "roe": 18.9,
    "roce": 22.8,
    "dividendYield": 0.15,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "Promoter holding is low: 21.6%",
      "Promoter holding has decreased over last 3 years: -28.8%"
    ]
  },
  {
    "symbol": "STOVEKRAFT",
    "name": "Stove Kraft Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 569,
    "marketCap": 1881,
    "profitabilityScore": 83,
    "valuationScore": 54,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.1,
    "roe": 67.5,
    "roce": 31.8,
    "dividendYield": 0.53,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 31.0% CAGR over last 5 years",
      "Debtor days have improved from 47.7 to 36.0 days."
    ],
    "cons": [
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "STYLAMIND",
    "name": "Stylam Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plywood Boards/ Laminates",
    "currentPrice": 2103,
    "marketCap": 3561,
    "profitabilityScore": 79,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.5,
    "roe": 20.4,
    "roce": 27.4,
    "dividendYield": 0,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 34.2% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "SUNDRMFAST",
    "name": "Sundram Fasteners Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 923,
    "marketCap": 19384,
    "profitabilityScore": 57,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35,
    "roe": 14.9,
    "roce": 17.1,
    "dividendYield": 0.78,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 30.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.85% over past five years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "SURAKSHA",
    "name": "Suraksha Diagnostic Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Service Provider",
    "currentPrice": 273,
    "marketCap": 1415,
    "profitabilityScore": 69,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 44.3,
    "roe": 16.5,
    "roce": 17.8,
    "dividendYield": 0,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 6.17 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "The company has delivered a poor sales growth of 9.86% over past five years."
    ]
  },
  {
    "symbol": "ULTRACEMCO",
    "name": "UltraTech Cement Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 11540,
    "marketCap": 339979,
    "profitabilityScore": 38,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 46.4,
    "roe": 9.29,
    "roce": 10.9,
    "dividendYield": 0.67,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 29.4%"
    ],
    "cons": [
      "Stock is trading at 4.72 times its book value",
      "Company has a low return on equity of 10.4% over last 3 years."
    ]
  },
  {
    "symbol": "USHAMART",
    "name": "Usha Martin Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 417,
    "marketCap": 12721,
    "profitabilityScore": 61,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.2,
    "roe": 15.8,
    "roce": 18.8,
    "dividendYield": 0.72,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 21.4%"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -0.69%",
      "The company has delivered a poor sales growth of 10.0% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "WINDLAS",
    "name": "Windlas Biotech Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 754,
    "marketCap": 1586,
    "profitabilityScore": 52,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 54,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.6,
    "roe": 12.8,
    "roce": 17,
    "dividendYield": 0.77,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 19.7%",
      "Company's working capital requirements have reduced from 40.2 days to 17.5 days"
    ],
    "cons": [
      "Company has a low return on equity of 12.4% over last 3 years."
    ]
  },
  {
    "symbol": "WSTCSTPAPR",
    "name": "West Coast Paper Mills Ltd",
    "sector": "Commodities",
    "industry": "Paper & Paper Products",
    "currentPrice": 401,
    "marketCap": 2648,
    "profitabilityScore": 46,
    "valuationScore": 92,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 63,
    "riskScore": 44,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.7,
    "roe": 9.49,
    "roce": 11.5,
    "dividendYield": 1.25,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.75 times its book value"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.3% over past five years.",
      "Earnings include an other income of Rs.181 Cr.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "APOLLOTYRE",
    "name": "Apollo Tyres Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tyres & Rubber Products",
    "currentPrice": 520,
    "marketCap": 33089,
    "profitabilityScore": 37,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.2,
    "roe": 8.61,
    "roce": 11.4,
    "dividendYield": 0.96,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 21.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 25.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 9.83% over past five years.",
      "Company has a low return on equity of 10.1% over last 3 years.",
      "The company has delivered a poor sales growth of 9."
    ]
  },
  {
    "symbol": "ATLANTAELE",
    "name": "Atlanta Electricals Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 828,
    "marketCap": 6363,
    "profitabilityScore": 86,
    "valuationScore": 30,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 54.4,
    "roe": 41,
    "roce": 50.1,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 43.5%"
    ],
    "cons": [
      "Stock is trading at 8.14 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "BELRISE",
    "name": "Belrise Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 161,
    "marketCap": 14337,
    "profitabilityScore": 50,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 31.5,
    "roe": 14.1,
    "roce": 14.3,
    "dividendYield": 0.34,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 2.88 times its book value",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "CAPACITE",
    "name": "Capacite Infraprojects Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 252,
    "marketCap": 2130,
    "profitabilityScore": 57,
    "valuationScore": 88,
    "financialHealthScore": 77,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 10.7,
    "roe": 12.6,
    "roce": 18,
    "dividendYield": 0,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.17 times its book value"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding is low: 31.7%",
      "Company has a low return on equity of 10.8% over last 3 years."
    ]
  },
  {
    "symbol": "DEEPAKNTR",
    "name": "Deepak Nitrite Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 1545,
    "marketCap": 21117,
    "profitabilityScore": 53,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.7,
    "roe": 13.4,
    "roce": 16.3,
    "dividendYield": 0.49,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company might be capitalizing the interest cost",
      "Dividend payout has been low at 13.1% of profits over last 3 years"
    ]
  },
  {
    "symbol": "DMART",
    "name": "Avenue Supermarts Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Diversified Retail",
    "currentPrice": 3868,
    "marketCap": 251620,
    "profitabilityScore": 53,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 92.1,
    "roe": 13.4,
    "roce": 18,
    "dividendYield": 0,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company's median sales growth is 26.4% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 11.0 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "ECOSMOBLTY",
    "name": "Ecos (India) Mobility & Hospitality Ltd",
    "sector": "Services",
    "industry": "Road Transport",
    "currentPrice": 221,
    "marketCap": 1330,
    "profitabilityScore": 87,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 24,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.6,
    "roe": 28.9,
    "roce": 35.3,
    "dividendYield": 1.09,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 115% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "ELGIEQUIP",
    "name": "Elgi Equipments Ltd",
    "sector": "Industrials",
    "industry": "Compressors, Pumps & Diesel Engines",
    "currentPrice": 483,
    "marketCap": 15313,
    "profitabilityScore": 73,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.3,
    "roe": 20.1,
    "roce": 21.9,
    "dividendYield": 0.46,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 52.5% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 19.1%"
    ],
    "cons": [
      "Stock is trading at 7.63 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "ENDURANCE",
    "name": "Endurance Technologies Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 2659,
    "marketCap": 37397,
    "profitabilityScore": 56,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42.8,
    "roe": 14.6,
    "roce": 17.3,
    "dividendYield": 0.38,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 18.3%"
    ],
    "cons": [
      "Company has a low return on equity of 13.3% over last 3 years."
    ]
  },
  {
    "symbol": "FEDERALBNK",
    "name": "Federal Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 257,
    "marketCap": 63354,
    "profitabilityScore": 32,
    "valuationScore": 88,
    "financialHealthScore": 55,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 45,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.1,
    "roe": 12.9,
    "roce": 7.03,
    "dividendYield": 0.47,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 21.4% CAGR over last 5 years"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.2,17,515 Cr.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "GKENERGY",
    "name": "GK Energy Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 135,
    "marketCap": 2741,
    "profitabilityScore": 88,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.6,
    "roe": 101,
    "roce": 74.3,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "GRINDWELL",
    "name": "Grindwell Norton Ltd",
    "sector": "Industrials",
    "industry": "Abrasives & Bearings",
    "currentPrice": 1537,
    "marketCap": 17054,
    "profitabilityScore": 67,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 44.8,
    "roe": 16,
    "roce": 20.9,
    "dividendYield": 1.11,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 48.2%"
    ],
    "cons": [
      "Stock is trading at 7.46 times its book value"
    ]
  },
  {
    "symbol": "GRWRHITECH",
    "name": "Garware Hi Tech Films Ltd",
    "sector": "Industrials",
    "industry": "Plastic Products - Industrial",
    "currentPrice": 3562,
    "marketCap": 8273,
    "profitabilityScore": 64,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.4,
    "roe": 15,
    "roce": 20.6,
    "dividendYield": 0.34,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 31.3% CAGR over last 5 years"
    ],
    "cons": [
      "Company has a low return on equity of 11.8% over last 3 years."
    ]
  },
  {
    "symbol": "HAPPYFORGE",
    "name": "Happy Forgings Ltd",
    "sector": "Industrials",
    "industry": "Castings & Forgings",
    "currentPrice": 1013,
    "marketCap": 9604,
    "profitabilityScore": 67,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.4,
    "roe": 15.5,
    "roce": 19.2,
    "dividendYield": 0.3,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "HSCL",
    "name": "Himadri Speciality Chemical Ltd",
    "sector": "Commodities",
    "industry": "Carbon Black",
    "currentPrice": 462,
    "marketCap": 23432,
    "profitabilityScore": 65,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.7,
    "roe": 16.4,
    "roce": 22,
    "dividendYield": 0.13,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.0% CAGR over last 5 years",
      "Promoter holding has increased by 0.89% over last quarter."
    ],
    "cons": [
      "Working capital days have increased from 34.1 days to 68.9 days"
    ]
  },
  {
    "symbol": "ICIL",
    "name": "Indo Count Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 281,
    "marketCap": 5573,
    "profitabilityScore": 45,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.8,
    "roe": 11.3,
    "roce": 13.5,
    "dividendYield": 0.71,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Dividend payout has been low at 14.4% of profits over last 3 years"
    ]
  },
  {
    "symbol": "INDHOTEL",
    "name": "Indian Hotels Co Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 718,
    "marketCap": 102245,
    "profitabilityScore": 63,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 60.6,
    "roe": 16.1,
    "roce": 17.2,
    "dividendYield": 0.31,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 42.8% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.81 times its book value"
    ]
  },
  {
    "symbol": "KEI",
    "name": "KEI Industries Ltd",
    "sector": "Industrials",
    "industry": "Cables - Electricals",
    "currentPrice": 4095,
    "marketCap": 39158,
    "profitabilityScore": 63,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 49.5,
    "roe": 15.6,
    "roce": 21.3,
    "dividendYield": 0.1,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 22.1% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "KIMS",
    "name": "Krishna Institute of Medical Sciences Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 681,
    "marketCap": 27323,
    "profitabilityScore": 64,
    "valuationScore": 30,
    "financialHealthScore": 69,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 42,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 83.1,
    "roe": 18.5,
    "roce": 15,
    "dividendYield": 0,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 12.0 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "KOTAKBANK",
    "name": "Kotak Mahindra Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 2132,
    "marketCap": 423991,
    "profitabilityScore": 38,
    "valuationScore": 70,
    "financialHealthScore": 60,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.8,
    "roe": 15.4,
    "roce": 8.17,
    "dividendYield": 0.12,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 20.8% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 2.52 times its book value",
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.11,75,810 Cr."
    ]
  },
  {
    "symbol": "KRSNAA",
    "name": "Krsnaa Diagnostics Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Service Provider",
    "currentPrice": 724,
    "marketCap": 2356,
    "profitabilityScore": 43,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 54,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.9,
    "roe": 8.76,
    "roce": 11.9,
    "dividendYield": 0.38,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.55 times its book value",
      "Promoter holding is low: 27.1%",
      "Company has a low return on equity of 8.27% over last 3 years."
    ]
  },
  {
    "symbol": "LAURUSLABS",
    "name": "Laurus Labs Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1004,
    "marketCap": 54215,
    "profitabilityScore": 38,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 36,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 79.3,
    "roe": 7.45,
    "roce": 9.15,
    "dividendYield": 0.12,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 19.5%"
    ],
    "cons": [
      "Stock is trading at 11.3 times its book value",
      "Company has a low return on equity of 10.5% over last 3 years."
    ]
  },
  {
    "symbol": "LTFOODS",
    "name": "L T Foods Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Other Agricultural Products",
    "currentPrice": 394,
    "marketCap": 13644,
    "profitabilityScore": 61,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.4,
    "roe": 16.7,
    "roce": 19.2,
    "dividendYield": 0.76,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 26.4% CAGR over last 5 years"
    ],
    "cons": [
      "Company might be capitalizing the interest cost",
      "Promoter holding has decreased over last 3 years: -5.81%"
    ]
  },
  {
    "symbol": "M&MFIN",
    "name": "Mahindra & Mahindra Financial Services Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 351,
    "marketCap": 48857,
    "profitabilityScore": 31,
    "valuationScore": 88,
    "financialHealthScore": 59,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.8,
    "roe": 10.9,
    "roce": 8.77,
    "dividendYield": 1.85,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 37.2%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 10.9% over last 3 years."
    ]
  },
  {
    "symbol": "METROBRAND",
    "name": "Metro Brands Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Footwear",
    "currentPrice": 1100,
    "marketCap": 29926,
    "profitabilityScore": 74,
    "valuationScore": 30,
    "financialHealthScore": 76,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 84.2,
    "roe": 19,
    "roce": 19.4,
    "dividendYield": 0.5,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 72.8%"
    ],
    "cons": [
      "Stock is trading at 16.5 times its book value"
    ]
  },
  {
    "symbol": "MOLDTKPAC",
    "name": "Mold-Tek Packaging Ltd",
    "sector": "Industrials",
    "industry": "Packaging",
    "currentPrice": 572,
    "marketCap": 1899,
    "profitabilityScore": 71,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.9,
    "roe": 17.8,
    "roce": 22.2,
    "dividendYield": 0.7,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 21.3% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 39.0%"
    ],
    "cons": [
      "Promoter holding is low: 33.1%",
      "Debtor days have increased from 66.8 to 82.7 days.",
      "Working capital days have increased from 40.5 days to 105 days"
    ]
  },
  {
    "symbol": "MOTHERSON",
    "name": "Samvardhana Motherson International Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 115,
    "marketCap": 121745,
    "profitabilityScore": 45,
    "valuationScore": 50,
    "financialHealthScore": 70,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 36.4,
    "roe": 12.2,
    "roce": 13.7,
    "dividendYield": 0.49,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 26.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 21.7%"
    ],
    "cons": [
      "Stock is trading at 3.27 times its book value",
      "Company has a low return on equity of 10.6% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -19.6%"
    ]
  },
  {
    "symbol": "MRF",
    "name": "MRF Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tyres & Rubber Products",
    "currentPrice": 153500,
    "marketCap": 65125,
    "profitabilityScore": 42,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.1,
    "roe": 10.6,
    "roce": 13.6,
    "dividendYield": 0.15,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.35 times its book value",
      "The company has delivered a poor sales growth of 11.6% over past five years.",
      "Company has a low return on equity of 9.77% over last 3 years."
    ]
  },
  {
    "symbol": "NEULANDLAB",
    "name": "Neuland Laboratories Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 16078,
    "marketCap": 20608,
    "profitabilityScore": 63,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 42,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 105,
    "roe": 14.8,
    "roce": 18.7,
    "dividendYield": 0.07,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 66.9% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 12.7 times its book value",
      "Promoter holding has decreased over last 3 years: -3.58%"
    ]
  },
  {
    "symbol": "PARADEEP",
    "name": "Paradeep Phosphates Ltd",
    "sector": "Commodities",
    "industry": "Fertilizers",
    "currentPrice": 153,
    "marketCap": 15888,
    "profitabilityScore": 47,
    "valuationScore": 88,
    "financialHealthScore": 68,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.2,
    "roe": 14.1,
    "roce": 13.7,
    "dividendYield": 0.65,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 23.0%",
      "Debtor days have improved from 84.6 to 66.9 days."
    ],
    "cons": [
      "Company has a low return on equity of 9.50% over last 3 years."
    ]
  },
  {
    "symbol": "PNB",
    "name": "Punjab National Bank",
    "sector": "Financial Services",
    "industry": "Public Sector Bank",
    "currentPrice": 116,
    "marketCap": 133329,
    "profitabilityScore": 34,
    "valuationScore": 74,
    "financialHealthScore": 53,
    "growthScore": 70,
    "stabilityScore": 35,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 7.83,
    "roe": 15.2,
    "roce": 6.32,
    "dividendYield": 2.5,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.94 times its book value",
      "Company has delivered good profit growth of 111% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 19.2%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 9.41% over last 3 years.",
      "Contingent liabilities of Rs.6,93,710 Cr."
    ]
  },
  {
    "symbol": "POLYMED",
    "name": "Poly Medicure Ltd",
    "sector": "Healthcare",
    "industry": "Medical Equipment & Supplies",
    "currentPrice": 1858,
    "marketCap": 18829,
    "profitabilityScore": 67,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 48,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52,
    "roe": 15.8,
    "roce": 20.1,
    "dividendYield": 0.19,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 28.4% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "ROUTE",
    "name": "Route Mobile Ltd",
    "sector": "Telecommunication",
    "industry": "Other Telecom Services",
    "currentPrice": 656,
    "marketCap": 4129,
    "profitabilityScore": 56,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 29,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.1,
    "roe": 14.5,
    "roce": 17.7,
    "dividendYield": 1.68,
    "salesGrowth5Y": 37,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 36.2% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "RSYSTEMS",
    "name": "R Systems International Ltd",
    "sector": "Information Technology",
    "industry": "IT Enabled Services",
    "currentPrice": 404,
    "marketCap": 4792,
    "profitabilityScore": 73,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 39,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.4,
    "roe": 21.2,
    "roce": 20.8,
    "dividendYield": 3.1,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Stock is providing a good dividend yield of 3.10%.",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 24.2%",
      "Company has been maintaining a healthy dividend payout of 75.1%"
    ],
    "cons": []
  },
  {
    "symbol": "SAATVIKGL",
    "name": "Saatvik Green Energy Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 363,
    "marketCap": 4623,
    "profitabilityScore": 84,
    "valuationScore": 74,
    "financialHealthScore": 74,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.5,
    "roe": 94.1,
    "roce": 52.3,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Debtor days have increased from 46.5 to 67.6 days."
    ]
  },
  {
    "symbol": "SBCL",
    "name": "Shivalik Bimetal Controls Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 435,
    "marketCap": 2501,
    "profitabilityScore": 82,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.8,
    "roe": 20.6,
    "roce": 25.6,
    "dividendYield": 0.62,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 26.5%"
    ],
    "cons": [
      "Promoter holding is low: 33.2%",
      "Promoter holding has decreased over last 3 years: -27.4%"
    ]
  },
  {
    "symbol": "SONACOMS",
    "name": "Sona BLW Precision Forgings Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 486,
    "marketCap": 30188,
    "profitabilityScore": 62,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 48.2,
    "roe": 14.4,
    "roce": 17.8,
    "dividendYield": 0.66,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 31.5% CAGR over last 5 years"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -25.6%",
      "Working capital days have increased from 76.5 days to 118 days"
    ]
  },
  {
    "symbol": "SUBROS",
    "name": "Subros Ltd",
    "sector": "Industrials",
    "industry": "Other Industrial Products",
    "currentPrice": 846,
    "marketCap": 5526,
    "profitabilityScore": 58,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.4,
    "roe": 14.5,
    "roce": 20,
    "dividendYield": 0.31,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 21.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 4.76 times its book value",
      "The company has delivered a poor sales growth of 11.1% over past five years.",
      "Company has a low return on equity of 10.5% over last 3 years."
    ]
  },
  {
    "symbol": "SUMICHEM",
    "name": "Sumitomo Chemical India Ltd",
    "sector": "Commodities",
    "industry": "Pesticides & Agrochemicals",
    "currentPrice": 452,
    "marketCap": 22601,
    "profitabilityScore": 79,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 41.6,
    "roe": 18.5,
    "roce": 24.7,
    "dividendYield": 0.27,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 34.5%"
    ],
    "cons": [
      "Stock is trading at 7.06 times its book value",
      "The company has delivered a poor sales growth of 5.36% over past five years.",
      "The company has delivered a poor sales growth of 5."
    ]
  },
  {
    "symbol": "SUPREMEIND",
    "name": "Supreme Industries Ltd",
    "sector": "Industrials",
    "industry": "Plastic Products - Industrial",
    "currentPrice": 3348,
    "marketCap": 42577,
    "profitabilityScore": 65,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 51,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 50.2,
    "roe": 17.1,
    "roce": 22,
    "dividendYield": 1.02,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 39.6%"
    ],
    "cons": [
      "Stock is trading at 7.42 times its book value"
    ]
  },
  {
    "symbol": "SYNGENE",
    "name": "Syngene International Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Research, Analytics & Technology",
    "currentPrice": 632,
    "marketCap": 25504,
    "profitabilityScore": 50,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 42,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 54.5,
    "roe": 10.5,
    "roce": 13.5,
    "dividendYield": 0.2,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 5.38 times its book value",
      "Company has a low return on equity of 12.3% over last 3 years.",
      "Dividend payout has been low at 10.3% of profits over last 3 years"
    ]
  },
  {
    "symbol": "TATACOMM",
    "name": "Tata Communications Ltd",
    "sector": "Telecommunication",
    "industry": "Telecom - Cellular & Fixed line services",
    "currentPrice": 1812,
    "marketCap": 51787,
    "profitabilityScore": 74,
    "valuationScore": 30,
    "financialHealthScore": 55,
    "growthScore": 80,
    "stabilityScore": 26,
    "volatilityScore": 45,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 51.9,
    "roe": 55.2,
    "roce": 14.8,
    "dividendYield": 1.38,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 78.3%",
      "Company has been maintaining a healthy dividend payout of 40.4%"
    ],
    "cons": [
      "Stock is trading at 18.1 times its book value",
      "The company has delivered a poor sales growth of 6.25% over past five years.",
      "Contingent liabilities of Rs.15,675 Cr."
    ]
  },
  {
    "symbol": "TATAPOWER",
    "name": "Tata Power Company Ltd",
    "sector": "Utilities",
    "industry": "Integrated Power Utilities",
    "currentPrice": 374,
    "marketCap": 119616,
    "profitabilityScore": 40,
    "valuationScore": 62,
    "financialHealthScore": 63,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.6,
    "roe": 11,
    "roce": 10.8,
    "dividendYield": 0.6,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 45.5% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 18.9%",
      "Debtor days have improved from 40.6 to 31.8 days."
    ],
    "cons": [
      "Stock is trading at 3.17 times its book value",
      "Company has a low return on equity of 11.6% over last 3 years."
    ]
  },
  {
    "symbol": "TCPLPACK",
    "name": "TCPL Packaging Ltd",
    "sector": "Industrials",
    "industry": "Packaging",
    "currentPrice": 3046,
    "marketCap": 2778,
    "profitabilityScore": 77,
    "valuationScore": 62,
    "financialHealthScore": 72,
    "growthScore": 70,
    "stabilityScore": 23,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.9,
    "roe": 24.4,
    "roce": 19.9,
    "dividendYield": 0.98,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 31.2% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 18.5%"
    ],
    "cons": []
  },
  {
    "symbol": "TITAN",
    "name": "Titan Company Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Gems, Jewellery And Watches",
    "currentPrice": 3767,
    "marketCap": 334341,
    "profitabilityScore": 76,
    "valuationScore": 30,
    "financialHealthScore": 64,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 81,
    "roe": 31.8,
    "roce": 19.1,
    "dividendYield": 0.29,
    "salesGrowth5Y": 23,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 31.8%",
      "Company has been maintaining a healthy dividend payout of 28.2%"
    ],
    "cons": [
      "Stock is trading at 26.1 times its book value"
    ]
  },
  {
    "symbol": "TRITURBINE",
    "name": "Triveni Turbine Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 537,
    "marketCap": 17082,
    "profitabilityScore": 88,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 50,
    "roe": 30.6,
    "roce": 41.4,
    "dividendYield": 0.74,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 23.4% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 27.3%"
    ],
    "cons": [
      "Stock is trading at 13.1 times its book value",
      "Debtor days have increased from 47.7 to 66.1 days."
    ]
  },
  {
    "symbol": "TVSMOTOR",
    "name": "TVS Motor Company Ltd",
    "sector": "Consumer Discretionary",
    "industry": "2/3 Wheelers",
    "currentPrice": 3613,
    "marketCap": 171665,
    "profitabilityScore": 70,
    "valuationScore": 30,
    "financialHealthScore": 58,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 65.9,
    "roe": 28.4,
    "roce": 15.4,
    "dividendYield": 0.28,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 27.3% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 27.2%"
    ],
    "cons": [
      "Stock is trading at 21.2 times its book value"
    ]
  },
  {
    "symbol": "UNOMINDA",
    "name": "Uno Minda Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 1258,
    "marketCap": 72566,
    "profitabilityScore": 62,
    "valuationScore": 30,
    "financialHealthScore": 78,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 66.4,
    "roe": 17.5,
    "roce": 18.8,
    "dividendYield": 0.18,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 40.7% CAGR over last 5 years",
      "Company's median sales growth is 24.9% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 11.6 times its book value"
    ]
  },
  {
    "symbol": "VSTIND",
    "name": "VST Industries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Cigarettes & Tobacco Products",
    "currentPrice": 249,
    "marketCap": 4229,
    "profitabilityScore": 86,
    "valuationScore": 30,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 63,
    "riskScore": 45,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.8,
    "roe": 24.9,
    "roce": 34.4,
    "dividendYield": 4.02,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is providing a good dividend yield of 4.02%.",
      "Company has been maintaining a healthy dividend payout of 67.4%"
    ],
    "cons": [
      "Stock is trading at 16.9 times its book value",
      "Promoter holding is low: 32.2%",
      "Earnings include an other income of Rs.34.2 Cr."
    ]
  },
  {
    "symbol": "ABCAPITAL",
    "name": "Aditya Birla Capital Ltd",
    "sector": "Financial Services",
    "industry": "Investment Company",
    "currentPrice": 357,
    "marketCap": 93368,
    "profitabilityScore": 43,
    "valuationScore": 70,
    "financialHealthScore": 55,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.6,
    "roe": 11.5,
    "roce": 9.33,
    "dividendYield": 0,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 28.8% CAGR over last 5 years",
      "Company's median sales growth is 19.6% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 2.90 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "ADANIENSOL",
    "name": "Adani Energy Solutions Ltd",
    "sector": "Utilities",
    "industry": "Power Distribution",
    "currentPrice": 960,
    "marketCap": 115330,
    "profitabilityScore": 52,
    "valuationScore": 38,
    "financialHealthScore": 65,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 51.1,
    "roe": 13.6,
    "roce": 10.2,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 26.0% CAGR over last 5 years",
      "Company's median sales growth is 31.1% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 4.93 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "ASTRAL",
    "name": "Astral Ltd",
    "sector": "Industrials",
    "industry": "Plastic Products - Industrial",
    "currentPrice": 1433,
    "marketCap": 38531,
    "profitabilityScore": 60,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 75.6,
    "roe": 14.9,
    "roce": 19.7,
    "dividendYield": 0.26,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 19.4%"
    ],
    "cons": [
      "Stock is trading at 10.2 times its book value"
    ]
  },
  {
    "symbol": "BAJFINANCE",
    "name": "Bajaj Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 1026,
    "marketCap": 638401,
    "profitabilityScore": 49,
    "valuationScore": 54,
    "financialHealthScore": 61,
    "growthScore": 55,
    "stabilityScore": 19,
    "volatilityScore": 41,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.9,
    "roe": 19.2,
    "roce": 11.4,
    "dividendYield": 0.43,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 25.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 17.4%",
      "Company's median sales growth is 30.9% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 6.19 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "BLUESTARCO",
    "name": "Blue Star Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 1723,
    "marketCap": 35417,
    "profitabilityScore": 75,
    "valuationScore": 30,
    "financialHealthScore": 72,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 66,
    "roe": 20.6,
    "roce": 26.2,
    "dividendYield": 0.52,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 32.2% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 31.6%"
    ],
    "cons": [
      "Stock is trading at 11.4 times its book value"
    ]
  },
  {
    "symbol": "BRIGADE",
    "name": "Brigade Enterprises Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 861,
    "marketCap": 21070,
    "profitabilityScore": 55,
    "valuationScore": 62,
    "financialHealthScore": 64,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.5,
    "roe": 14.9,
    "roce": 13.3,
    "dividendYield": 0.29,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 36.6% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 3.25 times its book value",
      "Company has a low return on equity of 12.7% over last 3 years."
    ]
  },
  {
    "symbol": "CAMPUS",
    "name": "Campus Activewear Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Footwear",
    "currentPrice": 266,
    "marketCap": 8142,
    "profitabilityScore": 90,
    "valuationScore": 56,
    "financialHealthScore": 66,
    "growthScore": 40,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.9,
    "roe": 29.5,
    "roce": 31.8,
    "dividendYield": 0.38,
    "salesGrowth5Y": 261,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 149% CAGR over last 5 years",
      "Debtor days have improved from 54.4 to 40.9 days."
    ],
    "cons": []
  },
  {
    "symbol": "EIDPARRY",
    "name": "EID Parry (India) Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Other Food Products",
    "currentPrice": 1009,
    "marketCap": 17946,
    "profitabilityScore": 45,
    "valuationScore": 82,
    "financialHealthScore": 66,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 17.6,
    "roe": 9.54,
    "roce": 16.6,
    "dividendYield": 0,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company's working capital requirements have reduced from 22.8 days to 13.5 days"
    ],
    "cons": [
      "Company has a low return on equity of 12.8% over last 3 years.",
      "Dividend payout has been low at 8.56% of profits over last 3 years",
      "Promoter holding has decreased over last 3 years: -3.06%"
    ]
  },
  {
    "symbol": "ESABINDIA",
    "name": "Esab India Ltd",
    "sector": "Industrials",
    "industry": "Other Industrial Products",
    "currentPrice": 5676,
    "marketCap": 8742,
    "profitabilityScore": 90,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 163,
    "roe": 59.3,
    "roce": 90.8,
    "dividendYield": 1.15,
    "salesGrowth5Y": 31,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 84.0 times its book value"
    ]
  },
  {
    "symbol": "FLAIR",
    "name": "Flair Writing Industries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Stationary",
    "currentPrice": 282,
    "marketCap": 2965,
    "profitabilityScore": 55,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.6,
    "roe": 12.5,
    "roce": 16.1,
    "dividendYield": 0.35,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "FSL",
    "name": "Firstsource Solutions Ltd",
    "sector": "Services",
    "industry": "Business Process Outsourcing (BPO)/ Knowledge Process Outsourcing (KPO)",
    "currentPrice": 338,
    "marketCap": 23922,
    "profitabilityScore": 54,
    "valuationScore": 42,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 36.2,
    "roe": 15,
    "roce": 15.4,
    "dividendYield": 1.18,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 47.3%"
    ],
    "cons": []
  },
  {
    "symbol": "INDIGO",
    "name": "Interglobe Aviation Ltd",
    "sector": "Services",
    "industry": "Airline",
    "currentPrice": 4924,
    "marketCap": 190310,
    "profitabilityScore": 68,
    "valuationScore": 42,
    "financialHealthScore": 53,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.2,
    "roe": 103,
    "roce": 17.3,
    "dividendYield": 0.2,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 54.1% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 22.0 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -1.96%"
    ]
  },
  {
    "symbol": "INNOVACAP",
    "name": "Innova Captab Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 669,
    "marketCap": 3838,
    "profitabilityScore": 51,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.8,
    "roe": 14.3,
    "roce": 14.6,
    "dividendYield": 0,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 35.7% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "IONEXCHANG",
    "name": "Ion Exchange (India) Ltd",
    "sector": "Utilities",
    "industry": "Water Supply & Management",
    "currentPrice": 335,
    "marketCap": 4910,
    "profitabilityScore": 70,
    "valuationScore": 62,
    "financialHealthScore": 74,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.4,
    "roe": 18.7,
    "roce": 22.3,
    "dividendYield": 0.45,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding is low: 25.7%",
      "Company might be capitalizing the interest cost",
      "Company has high debtors of 151 days."
    ]
  },
  {
    "symbol": "JKPAPER",
    "name": "JK Paper Ltd",
    "sector": "Commodities",
    "industry": "Paper & Paper Products",
    "currentPrice": 358,
    "marketCap": 6070,
    "profitabilityScore": 38,
    "valuationScore": 76,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 27,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.4,
    "roe": 7.04,
    "roce": 8.63,
    "dividendYield": 1.4,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.11 times its book value"
    ],
    "cons": []
  },
  {
    "symbol": "JSWENERGY",
    "name": "JSW Energy Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 454,
    "marketCap": 79417,
    "profitabilityScore": 37,
    "valuationScore": 58,
    "financialHealthScore": 63,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 45,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.2,
    "roe": 7.41,
    "roce": 6.49,
    "dividendYield": 0.44,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 19.7%"
    ],
    "cons": [
      "Stock is trading at 2.72 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 7.26% over past five years."
    ]
  },
  {
    "symbol": "KANSAINER",
    "name": "Kansai Nerolac Paints Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Paints",
    "currentPrice": 222,
    "marketCap": 17946,
    "profitabilityScore": 41,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.6,
    "roe": 10.4,
    "roce": 13,
    "dividendYield": 1.13,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 27.6%"
    ],
    "cons": [
      "Stock is trading at 2.77 times its book value",
      "The company has delivered a poor sales growth of 8.18% over past five years.",
      "Company has a low return on equity of 11.4% over last 3 years."
    ]
  },
  {
    "symbol": "KENNAMET",
    "name": "Kennametal India Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 2135,
    "marketCap": 4693,
    "profitabilityScore": 75,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.1,
    "roe": 18.4,
    "roce": 24.6,
    "dividendYield": 1.87,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 35.4%"
    ],
    "cons": [
      "Stock is trading at 7.26 times its book value",
      "Company has a low return on equity of 13.0% over last 3 years."
    ]
  },
  {
    "symbol": "LICHSGFIN",
    "name": "LIC Housing Finance Ltd",
    "sector": "Financial Services",
    "industry": "Housing Finance Company",
    "currentPrice": 523,
    "marketCap": 28718,
    "profitabilityScore": 40,
    "valuationScore": 74,
    "financialHealthScore": 56,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 5.2,
    "roe": 16,
    "roce": 8.93,
    "dividendYield": 1.91,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.75 times its book value"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 7.33% over past five years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "MARATHON",
    "name": "Marathon Nextgen Realty Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 554,
    "marketCap": 3702,
    "profitabilityScore": 49,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.3,
    "roe": 13.2,
    "roce": 12,
    "dividendYield": 0.18,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 43.1% CAGR over last 5 years"
    ],
    "cons": [
      "Earnings include an other income of Rs.154 Cr.",
      "Debtor days have increased from 43.6 to 60.0 days.",
      "Promoter holding has decreased over last 3 years: -18.7%"
    ]
  },
  {
    "symbol": "PNBHOUSING",
    "name": "PNB Housing Finance Ltd",
    "sector": "Financial Services",
    "industry": "Housing Finance Company",
    "currentPrice": 873,
    "marketCap": 22726,
    "profitabilityScore": 35,
    "valuationScore": 88,
    "financialHealthScore": 61,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 10.6,
    "roe": 12.2,
    "roce": 9.44,
    "dividendYield": 0.57,
    "salesGrowth5Y": 25,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 24.5% CAGR over last 5 years"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -1.95% over past five years.",
      "Company has a low return on equity of 11.4% over last 3 years."
    ]
  },
  {
    "symbol": "PRICOLLTD",
    "name": "Pricol Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 608,
    "marketCap": 7408,
    "profitabilityScore": 70,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 38.9,
    "roe": 17.6,
    "roce": 22.9,
    "dividendYield": 0.33,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 29.6% CAGR over last 5 years"
    ],
    "cons": []
  },
  {
    "symbol": "PRIMESECU",
    "name": "Prime Securities Ltd",
    "sector": "Financial Services",
    "industry": "Other Financial Services",
    "currentPrice": 276,
    "marketCap": 936,
    "profitabilityScore": 72,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 69,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.2,
    "roe": 19.5,
    "roce": 22.6,
    "dividendYield": 0.54,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 34.6% CAGR over last 5 years"
    ],
    "cons": [
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "PRUDENT",
    "name": "Prudent Corporate Advisory Services Ltd",
    "sector": "Financial Services",
    "industry": "Financial Products Distributor",
    "currentPrice": 2583,
    "marketCap": 10688,
    "profitabilityScore": 92,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52.1,
    "roe": 34,
    "roce": 44.1,
    "dividendYield": 0.1,
    "salesGrowth5Y": 37,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 47.6% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 35.1%"
    ],
    "cons": [
      "Stock is trading at 14.0 times its book value",
      "Promoter holding has decreased over last 3 years: -3.13%"
    ]
  },
  {
    "symbol": "SKYGOLD",
    "name": "Sky Gold & Diamonds Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Gems, Jewellery And Watches",
    "currentPrice": 325,
    "marketCap": 5044,
    "profitabilityScore": 74,
    "valuationScore": 62,
    "financialHealthScore": 76,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.2,
    "roe": 25.5,
    "roce": 21.2,
    "dividendYield": 0,
    "salesGrowth5Y": 105,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -2.12%",
      "Debtor days have increased from 29.7 to 46.5 days."
    ]
  },
  {
    "symbol": "SSWL",
    "name": "Steel Strips Wheels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 190,
    "marketCap": 2981,
    "profitabilityScore": 49,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.6,
    "roe": 12.7,
    "roce": 15.2,
    "dividendYield": 0.66,
    "salesGrowth5Y": 29,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "THEJO",
    "name": "Thejo Engineering Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 1623,
    "marketCap": 1760,
    "profitabilityScore": 70,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.3,
    "roe": 18.2,
    "roce": 22.1,
    "dividendYield": 0.31,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "TRAVELFOOD",
    "name": "Travel Food Services Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Restaurants",
    "currentPrice": 1276,
    "marketCap": 16790,
    "profitabilityScore": 90,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 47.8,
    "roe": 39.1,
    "roce": 41.7,
    "dividendYield": 0,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 29.1% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 39.9%"
    ],
    "cons": [
      "Stock is trading at 14.2 times its book value"
    ]
  },
  {
    "symbol": "TVSHLTD",
    "name": "TVS Holdings Ltd",
    "sector": "Financial Services",
    "industry": "Investment Company",
    "currentPrice": 14421,
    "marketCap": 29249,
    "profitabilityScore": 70,
    "valuationScore": 54,
    "financialHealthScore": 55,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.3,
    "roe": 30.2,
    "roce": 15.2,
    "dividendYield": 0.64,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 25.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 19.4%"
    ],
    "cons": [
      "Stock is trading at 5.25 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "VINATIORGA",
    "name": "Vinati Organics Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 1581,
    "marketCap": 16416,
    "profitabilityScore": 67,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.7,
    "roe": 15.4,
    "roce": 20.2,
    "dividendYield": 0.47,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 19.6%"
    ],
    "cons": []
  },
  {
    "symbol": "VISHNU",
    "name": "Vishnu Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 485,
    "marketCap": 3258,
    "profitabilityScore": 60,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.5,
    "roe": 15.5,
    "roce": 18.1,
    "dividendYield": 0.06,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding has decreased over last 3 years: -5.79%",
      "Working capital days have increased from 47.2 days to 66.9 days"
    ]
  },
  {
    "symbol": "WELENT",
    "name": "Welspun Enterprises Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 517,
    "marketCap": 7147,
    "profitabilityScore": 54,
    "valuationScore": 82,
    "financialHealthScore": 73,
    "growthScore": 55,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 46,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.5,
    "roe": 13.3,
    "roce": 18.2,
    "dividendYield": 0.58,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Debtor days have improved from 42.3 to 25.8 days."
    ],
    "cons": [
      "Company has a low return on equity of 13.0% over last 3 years."
    ]
  },
  {
    "symbol": "ACUTAAS",
    "name": "Acutaas Chemicals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1651,
    "marketCap": 13516,
    "profitabilityScore": 65,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 48,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 60.4,
    "roe": 16,
    "roce": 19.9,
    "dividendYield": 0.09,
    "salesGrowth5Y": 33,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 41.4% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 9.56 times its book value",
      "Company has a low return on equity of 13.8% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -6.75%"
    ]
  },
  {
    "symbol": "AHLUCONT",
    "name": "Ahluwalia Contracts (India) Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 957,
    "marketCap": 6417,
    "profitabilityScore": 53,
    "valuationScore": 62,
    "financialHealthScore": 78,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.4,
    "roe": 11.9,
    "roce": 18.5,
    "dividendYield": 0.06,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "Contingent liabilities of Rs.2,507 Cr.",
      "Dividend payout has been low at 1.42% of profits over last 3 years"
    ]
  },
  {
    "symbol": "AUBANK",
    "name": "AU Small Finance Bank Ltd",
    "sector": "Financial Services",
    "industry": "Other Bank",
    "currentPrice": 953,
    "marketCap": 71168,
    "profitabilityScore": 56,
    "valuationScore": 44,
    "financialHealthScore": 59,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 209,
    "roe": 22.3,
    "roce": 12.4,
    "dividendYield": 0.1,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Earnings include an other income of Rs.612 Cr."
    ]
  },
  {
    "symbol": "BANSALWIRE",
    "name": "Bansal Wire Industries Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 311,
    "marketCap": 4876,
    "profitabilityScore": 56,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 32,
    "roe": 17.1,
    "roce": 16.4,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "BHARATFORG",
    "name": "Bharat Forge Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 1374,
    "marketCap": 65712,
    "profitabilityScore": 44,
    "valuationScore": 30,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 45,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 60.8,
    "roe": 11.6,
    "roce": 12.2,
    "dividendYield": 0.62,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 49.6%"
    ],
    "cons": [
      "Stock is trading at 7.02 times its book value",
      "Company has a low return on equity of 10.8% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "BIRLACORPN",
    "name": "Birla Corporation Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 1057,
    "marketCap": 8153,
    "profitabilityScore": 21,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 23,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.5,
    "roe": 4.79,
    "roce": 7.08,
    "dividendYield": 0.95,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.14 times its book value",
      "Company has been maintaining a healthy dividend payout of 30.6%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 5.91% over past five years.",
      "Company has a low return on equity of 4.11% over last 3 years.",
      "The company has delivered a poor sales growth of 5."
    ]
  },
  {
    "symbol": "BLACKBUCK",
    "name": "Blackbuck Ltd",
    "sector": "Services",
    "industry": "Transport Related Services",
    "currentPrice": 630,
    "marketCap": 11425,
    "profitabilityScore": 57,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30.1,
    "roe": 47.3,
    "roce": 10.5,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 8.67 times its book value",
      "Company has a low return on equity of -7.85% over last 3 years."
    ]
  },
  {
    "symbol": "CEWATER",
    "name": "Concord Enviro Systems Ltd",
    "sector": "Utilities",
    "industry": "Waste Management",
    "currentPrice": 354,
    "marketCap": 733,
    "profitabilityScore": 53,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 69,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14,
    "roe": 12,
    "roce": 15,
    "dividendYield": 0,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 45.6% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Tax rate seems low",
      "Company has a low return on equity of 9.79% over last 3 years."
    ]
  },
  {
    "symbol": "CHOLAFIN",
    "name": "Cholamandalam Investment & Finance Company Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 1724,
    "marketCap": 145486,
    "profitabilityScore": 48,
    "valuationScore": 54,
    "financialHealthScore": 56,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 41,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 31.3,
    "roe": 19.7,
    "roce": 10.3,
    "dividendYield": 0.12,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 32.2% CAGR over last 5 years",
      "Company's median sales growth is 18.4% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 5.57 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "DIXON",
    "name": "Dixon Technologies (India) Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Consumer Electronics",
    "currentPrice": 13564,
    "marketCap": 82236,
    "profitabilityScore": 82,
    "valuationScore": 30,
    "financialHealthScore": 61,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 63.6,
    "roe": 32.8,
    "roce": 40,
    "dividendYield": 0.06,
    "salesGrowth5Y": 55,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 45.0% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.1%"
    ],
    "cons": [
      "Stock is trading at 20.2 times its book value",
      "Earnings include an other income of Rs.781 Cr.",
      "Promoter holding has decreased over last 3 years: -5.35%"
    ]
  },
  {
    "symbol": "ERIS",
    "name": "ERIS Lifesciences Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1534,
    "marketCap": 20880,
    "profitabilityScore": 53,
    "valuationScore": 30,
    "financialHealthScore": 75,
    "growthScore": 55,
    "stabilityScore": 20,
    "volatilityScore": 42,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 50.2,
    "roe": 12.9,
    "roce": 12.2,
    "dividendYield": 0.48,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 6.76 times its book value"
    ]
  },
  {
    "symbol": "GREENPANEL",
    "name": "Greenpanel Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plywood Boards/ Laminates",
    "currentPrice": 233,
    "marketCap": 2846,
    "profitabilityScore": 49,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.9,
    "roe": 11.4,
    "roce": 12.9,
    "dividendYield": 0.13,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 32.8% CAGR over last 5 years"
    ],
    "cons": [
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "HDFCBANK",
    "name": "HDFC Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 1003,
    "marketCap": 1543327,
    "profitabilityScore": 35,
    "valuationScore": 70,
    "financialHealthScore": 56,
    "growthScore": 55,
    "stabilityScore": 24,
    "volatilityScore": 41,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.3,
    "roe": 14.4,
    "roce": 7.51,
    "dividendYield": 1.1,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 21.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 23.3%",
      "Company's median sales growth is 16.4% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 2.86 times its book value",
      "Company has low interest coverage ratio.",
      "Contingent liabilities of Rs.27,80,601 Cr."
    ]
  },
  {
    "symbol": "INTELLECT",
    "name": "Intellect Design Arena Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 1023,
    "marketCap": 14252,
    "profitabilityScore": 53,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.4,
    "roe": 12.7,
    "roce": 16.8,
    "dividendYield": 0.39,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 18.9%"
    ],
    "cons": [
      "Company has a low return on equity of 13.6% over last 3 years."
    ]
  },
  {
    "symbol": "JKTYRE",
    "name": "JK Tyre & Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tyres & Rubber Products",
    "currentPrice": 450,
    "marketCap": 12319,
    "profitabilityScore": 41,
    "valuationScore": 70,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.6,
    "roe": 11.1,
    "roce": 12.8,
    "dividendYield": 0.67,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 11.0% over past five years.",
      "Company has a low return on equity of 13.9% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -5.71%"
    ]
  },
  {
    "symbol": "JYOTICNC",
    "name": "Jyoti CNC Automation Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 912,
    "marketCap": 20720,
    "profitabilityScore": 73,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.9,
    "roe": 21.2,
    "roce": 24.4,
    "dividendYield": 0,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 42.8% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 11.3 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Debtor days have increased from 74.3 to 97.7 days."
    ]
  },
  {
    "symbol": "KIRLOSENG",
    "name": "Kirloskar Oil Engines Ltd",
    "sector": "Industrials",
    "industry": "Compressors, Pumps & Diesel Engines",
    "currentPrice": 1097,
    "marketCap": 15943,
    "profitabilityScore": 53,
    "valuationScore": 62,
    "financialHealthScore": 68,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 32.8,
    "roe": 15.4,
    "roce": 13.7,
    "dividendYield": 0.59,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 23.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 20.2%"
    ],
    "cons": [
      "Stock is trading at 4.73 times its book value",
      "Promoter holding has decreased over last 3 years: -18.3%"
    ]
  },
  {
    "symbol": "KKCL",
    "name": "Kewal Kiran Clothing Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Garments & Apparels",
    "currentPrice": 503,
    "marketCap": 3088,
    "profitabilityScore": 63,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23.8,
    "roe": 15.5,
    "roce": 18.2,
    "dividendYield": 0.4,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Debtor days have increased from 93.2 to 114 days."
    ]
  },
  {
    "symbol": "KPIL",
    "name": "Kalpataru Projects International Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 1154,
    "marketCap": 19728,
    "profitabilityScore": 45,
    "valuationScore": 70,
    "financialHealthScore": 65,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24,
    "roe": 9.96,
    "roce": 16,
    "dividendYield": 0.78,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 25.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 12.0% over past five years.",
      "Company has a low return on equity of 9.72% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -18.0%"
    ]
  },
  {
    "symbol": "LAXMIDENTL",
    "name": "Laxmi Dental Ltd",
    "sector": "Healthcare",
    "industry": "Medical Equipment & Supplies",
    "currentPrice": 259,
    "marketCap": 1422,
    "profitabilityScore": 69,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 55.2,
    "roe": 21.9,
    "roce": 19.2,
    "dividendYield": 0,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 57.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 6.20 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "LINDEINDIA",
    "name": "Linde India Ltd",
    "sector": "Commodities",
    "industry": "Industrial Gases",
    "currentPrice": 5854,
    "marketCap": 49926,
    "profitabilityScore": 55,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 97.3,
    "roe": 12.4,
    "roce": 16.9,
    "dividendYield": 0.08,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 21.7%"
    ],
    "cons": [
      "Stock is trading at 12.5 times its book value",
      "The company has delivered a poor sales growth of 7.12% over past five years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "MAHABANK",
    "name": "Bank of Maharashtra",
    "sector": "Financial Services",
    "industry": "Public Sector Bank",
    "currentPrice": 56.2,
    "marketCap": 43242,
    "profitabilityScore": 46,
    "valuationScore": 70,
    "financialHealthScore": 53,
    "growthScore": 70,
    "stabilityScore": 36,
    "volatilityScore": 51,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 7.1,
    "roe": 22.8,
    "roce": 5.72,
    "dividendYield": 2.67,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 69.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 26.2%",
      "Company's working capital requirements have reduced from 38.0 days to 12.6 days"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Tax rate seems low",
      "Contingent liabilities of Rs.47,914 Cr."
    ]
  },
  {
    "symbol": "METROPOLIS",
    "name": "Metropolis Healthcare Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Service Provider",
    "currentPrice": 1920,
    "marketCap": 9956,
    "profitabilityScore": 52,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 48,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 62.9,
    "roe": 11.5,
    "roce": 14.7,
    "dividendYield": 0.21,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 9.22% over past five years.",
      "Company has a low return on equity of 12.8% over last 3 years.",
      "Dividend payout has been low at 14.9% of profits over last 3 years"
    ]
  },
  {
    "symbol": "NILKAMAL",
    "name": "Nilkamal Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plastic Products - Consumer",
    "currentPrice": 1362,
    "marketCap": 2038,
    "profitabilityScore": 30,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 19.5,
    "roe": 7.32,
    "roce": 9.57,
    "dividendYield": 1.47,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 24.9%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.98% over past five years.",
      "Company has a low return on equity of 8.77% over last 3 years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "PNGJL",
    "name": "P N Gadgil Jewellers Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Gems, Jewellery And Watches",
    "currentPrice": 600,
    "marketCap": 8127,
    "profitabilityScore": 66,
    "valuationScore": 62,
    "financialHealthScore": 71,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.4,
    "roe": 21,
    "roce": 19.4,
    "dividendYield": 0,
    "salesGrowth5Y": 25,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 52.1% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.7%"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "PTC",
    "name": "PTC India Ltd",
    "sector": "Utilities",
    "industry": "Power Trading",
    "currentPrice": 153,
    "marketCap": 4517,
    "profitabilityScore": 41,
    "valuationScore": 74,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 46,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 6.86,
    "roe": 12.3,
    "roce": 11.5,
    "dividendYield": 7.67,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is trading at 0.77 times its book value",
      "Stock is providing a good dividend yield of 7.67%."
    ],
    "cons": [
      "The company has delivered a poor sales growth of -2.15% over past five years.",
      "Promoter holding is low: 16.2%",
      "Company has a low return on equity of 10.4% over last 3 years."
    ]
  },
  {
    "symbol": "SPAL",
    "name": "S P Apparels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Garments & Apparels",
    "currentPrice": 719,
    "marketCap": 1792,
    "profitabilityScore": 46,
    "valuationScore": 82,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 16.2,
    "roe": 11.7,
    "roce": 14.2,
    "dividendYield": 0.28,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Company has a low return on equity of 11.9% over last 3 years.",
      "Dividend payout has been low at 3.04% of profits over last 3 years",
      "Debtor days have increased from 52.1 to 65.6 days."
    ]
  },
  {
    "symbol": "SPLPETRO",
    "name": "Supreme Petrochem Ltd",
    "sector": "Commodities",
    "industry": "Petrochemicals",
    "currentPrice": 623,
    "marketCap": 11744,
    "profitabilityScore": 83,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 28,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 194,
    "roe": 27.9,
    "roce": 29.7,
    "dividendYield": 1.6,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 40.8%"
    ],
    "cons": []
  },
  {
    "symbol": "SUNDARMFIN",
    "name": "Sundaram Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 4719,
    "marketCap": 52439,
    "profitabilityScore": 40,
    "valuationScore": 62,
    "financialHealthScore": 60,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 45,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.6,
    "roe": 15.3,
    "roce": 9.64,
    "dividendYield": 0.74,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 22.0%"
    ],
    "cons": [
      "Stock is trading at 3.47 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "TRUALT",
    "name": "TruAlt Bioenergy Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Other Agricultural Products",
    "currentPrice": 400,
    "marketCap": 3427,
    "profitabilityScore": 66,
    "valuationScore": 80,
    "financialHealthScore": 72,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.9,
    "roe": 28.4,
    "roce": 14.2,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding has decreased over last quarter: -17.6%"
    ]
  },
  {
    "symbol": "VTL",
    "name": "Vardhman Textiles Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 430,
    "marketCap": 12421,
    "profitabilityScore": 37,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.8,
    "roe": 8.95,
    "roce": 10.8,
    "dividendYield": 1.16,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 7.76% over past five years.",
      "Company has a low return on equity of 8.57% over last 3 years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "WELSPUNLIV",
    "name": "Welspun Living Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 132,
    "marketCap": 12651,
    "profitabilityScore": 47,
    "valuationScore": 58,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 26,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.8,
    "roe": 13.7,
    "roce": 14.4,
    "dividendYield": 1.29,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.62 times its book value",
      "The company has delivered a poor sales growth of 9.36% over past five years.",
      "Company has a low return on equity of 11.6% over last 3 years."
    ]
  },
  {
    "symbol": "WHIRLPOOL",
    "name": "Whirlpool of India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 915,
    "marketCap": 11604,
    "profitabilityScore": 37,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.2,
    "roe": 9.26,
    "roce": 12.6,
    "dividendYield": 0.55,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 25.3%"
    ],
    "cons": [
      "Stock is trading at 2.84 times its book value",
      "The company has delivered a poor sales growth of 5.73% over past five years.",
      "Company has a low return on equity of 7.39% over last 3 years."
    ]
  },
  {
    "symbol": "YATHARTH",
    "name": "Yatharth Hospital & Trauma Care Services Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 674,
    "marketCap": 6489,
    "profitabilityScore": 49,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 48,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42.6,
    "roe": 10.4,
    "roce": 14,
    "dividendYield": 0,
    "salesGrowth5Y": 45,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 152% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "ZEEL",
    "name": "Zee Entertainment Enterprises Ltd",
    "sector": "Consumer Discretionary",
    "industry": "TV Broadcasting & Software Production",
    "currentPrice": 93.7,
    "marketCap": 8997,
    "profitabilityScore": 32,
    "valuationScore": 92,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 35,
    "volatilityScore": 57,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.1,
    "roe": 6.71,
    "roce": 9.21,
    "dividendYield": 2.59,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Stock is trading at 0.78 times its book value",
      "Company has been maintaining a healthy dividend payout of 34.1%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 0.40% over past five years.",
      "Promoter holding is low: 3.98%",
      "Company has a low return on equity of 3.09% over last 3 years."
    ]
  },
  {
    "symbol": "ZFCVINDIA",
    "name": "ZF Commercial Vehicle Control System India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 14717,
    "marketCap": 27913,
    "profitabilityScore": 62,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 47,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 57.8,
    "roe": 15.1,
    "roce": 20.1,
    "dividendYield": 0.13,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 8.18 times its book value",
      "Promoter holding has decreased over last 3 years: -15.0%"
    ]
  },
  {
    "symbol": "ACI",
    "name": "Archean Chemical Industries Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 493,
    "marketCap": 6073,
    "profitabilityScore": 52,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.6,
    "roe": 9.8,
    "roce": 12.8,
    "dividendYield": 0.61,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 11.4% over past five years.",
      "Debtor days have increased from 43.5 to 57.7 days.",
      "Working capital days have increased from 59.5 days to 83.8 days"
    ]
  },
  {
    "symbol": "AEGISLOG",
    "name": "Aegis Logistics Ltd",
    "sector": "Energy",
    "industry": "Trading - Gas",
    "currentPrice": 730,
    "marketCap": 25623,
    "profitabilityScore": 49,
    "valuationScore": 50,
    "financialHealthScore": 78,
    "growthScore": 55,
    "stabilityScore": 23,
    "volatilityScore": 51,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.7,
    "roe": 15.5,
    "roce": 13.2,
    "dividendYield": 0.99,
    "salesGrowth5Y": 46,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 46.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 42.0%"
    ],
    "cons": [
      "Stock is trading at 4.31 times its book value",
      "The company has delivered a poor sales growth of -1.20% over past five years.",
      "The company has delivered a poor sales growth of -1."
    ]
  },
  {
    "symbol": "ARTEMISMED",
    "name": "Artemis Medicare Services Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 271,
    "marketCap": 4280,
    "profitabilityScore": 49,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 54,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 45.1,
    "roe": 12.9,
    "roce": 14.6,
    "dividendYield": 0.17,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 33.0% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 4.26 times its book value",
      "Promoter holding has decreased over last quarter: -8.10%",
      "Company has a low return on equity of 11.7% over last 3 years."
    ]
  },
  {
    "symbol": "CARYSIL",
    "name": "Carysil Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 914,
    "marketCap": 2599,
    "profitabilityScore": 54,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 32,
    "roe": 14.5,
    "roce": 15.4,
    "dividendYield": 0.26,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company's median sales growth is 15.1% of last 10 years"
    ],
    "cons": [
      "Dividend payout has been low at 10.0% of profits over last 3 years"
    ]
  },
  {
    "symbol": "CEATLTD",
    "name": "CEAT Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tyres & Rubber Products",
    "currentPrice": 3833,
    "marketCap": 15509,
    "profitabilityScore": 46,
    "valuationScore": 62,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.6,
    "roe": 11.8,
    "roce": 15.4,
    "dividendYield": 0.78,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has a low return on equity of 12.3% over last 3 years."
    ]
  },
  {
    "symbol": "DALBHARAT",
    "name": "Dalmia Bharat Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 1994,
    "marketCap": 37399,
    "profitabilityScore": 21,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 51,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.6,
    "roe": 4.15,
    "roce": 5.58,
    "dividendYield": 0.45,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 20.6%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.64% over past five years.",
      "Company has a low return on equity of 5.27% over last 3 years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "DOMS",
    "name": "DOMS Industries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Stationary",
    "currentPrice": 2578,
    "marketCap": 15647,
    "profitabilityScore": 82,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 72.9,
    "roe": 22.3,
    "roce": 26.2,
    "dividendYield": 0.12,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 41.2% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 25.4%"
    ],
    "cons": [
      "Stock is trading at 14.2 times its book value"
    ]
  },
  {
    "symbol": "EDELWEISS",
    "name": "Edelweiss Financial Services Ltd",
    "sector": "Financial Services",
    "industry": "Holding Company",
    "currentPrice": 100,
    "marketCap": 9502,
    "profitabilityScore": 48,
    "valuationScore": 70,
    "financialHealthScore": 55,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.4,
    "roe": 8.68,
    "roce": 13.3,
    "dividendYield": 1.49,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 35.3%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -0.21% over past five years.",
      "Promoter holding is low: 32.7%"
    ]
  },
  {
    "symbol": "EXIDEIND",
    "name": "Exide Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 373,
    "marketCap": 31722,
    "profitabilityScore": 27,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.2,
    "roe": 5.74,
    "roce": 8.65,
    "dividendYield": 0.54,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 20.5%",
      "Company's working capital requirements have reduced from 30.1 days to 17.3 days"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 3.56% over past five years.",
      "Company has a low return on equity of 6.64% over last 3 years.",
      "The company has delivered a poor sales growth of 3."
    ]
  },
  {
    "symbol": "FINPIPE",
    "name": "Finolex Industries Ltd",
    "sector": "Industrials",
    "industry": "Plastic Products - Industrial",
    "currentPrice": 165,
    "marketCap": 10258,
    "profitabilityScore": 26,
    "valuationScore": 76,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.4,
    "roe": 7.08,
    "roce": 9.24,
    "dividendYield": 1.21,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 32.5%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 6.77% over past five years.",
      "Company has a low return on equity of 6.89% over last 3 years.",
      "Earnings include an other income of Rs.288 Cr."
    ]
  },
  {
    "symbol": "FLUOROCHEM",
    "name": "Gujarat Fluorochemicals Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 3318,
    "marketCap": 36388,
    "profitabilityScore": 44,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 53.5,
    "roe": 8.29,
    "roce": 9.89,
    "dividendYield": 0.09,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding has decreased over last quarter: -1.17%",
      "Company has a low return on equity of 13.4% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "GRASIM",
    "name": "Grasim Industries Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 2744,
    "marketCap": 186918,
    "profitabilityScore": 25,
    "valuationScore": 64,
    "financialHealthScore": 60,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 41,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.2,
    "roe": 3.95,
    "roce": 7.5,
    "dividendYield": 0.36,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 6.41% over last 3 years.",
      "Dividend payout has been low at 13.3% of profits over last 3 years"
    ]
  },
  {
    "symbol": "GSFC",
    "name": "Gujarat State Fertilizers & Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Fertilizers",
    "currentPrice": 171,
    "marketCap": 6817,
    "profitabilityScore": 24,
    "valuationScore": 92,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 38,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 10.2,
    "roe": 4.77,
    "roce": 6.18,
    "dividendYield": 2.92,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is trading at 0.55 times its book value"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 4.10% over past five years.",
      "Company has a low return on equity of 6.60% over last 3 years.",
      "Earnings include an other income of Rs.311 Cr."
    ]
  },
  {
    "symbol": "HAPPSTMNDS",
    "name": "Happiest Minds Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 492,
    "marketCap": 7493,
    "profitabilityScore": 54,
    "valuationScore": 50,
    "financialHealthScore": 77,
    "growthScore": 70,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37,
    "roe": 12.6,
    "roce": 15.2,
    "dividendYield": 1.22,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 38.9%"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -9.04%"
    ]
  },
  {
    "symbol": "JKCEMENT",
    "name": "J K Cements Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 5508,
    "marketCap": 42593,
    "profitabilityScore": 50,
    "valuationScore": 42,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 41.2,
    "roe": 13.9,
    "roce": 14,
    "dividendYield": 0.27,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 20.1%"
    ],
    "cons": [
      "Stock is trading at 6.55 times its book value",
      "Company has a low return on equity of 13.3% over last 3 years."
    ]
  },
  {
    "symbol": "JKLAKSHMI",
    "name": "JK Lakshmi Cement Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 756,
    "marketCap": 9381,
    "profitabilityScore": 36,
    "valuationScore": 70,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.1,
    "roe": 8.72,
    "roce": 10.5,
    "dividendYield": 0.86,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 18.5%"
    ],
    "cons": [
      "Stock is trading at 2.53 times its book value",
      "Promoter holding has decreased over last quarter: -1.22%",
      "The company has delivered a poor sales growth of 7.25% over past five years."
    ]
  },
  {
    "symbol": "JSWSTEEL",
    "name": "JSW Steel Ltd",
    "sector": "Commodities",
    "industry": "Iron & Steel",
    "currentPrice": 1119,
    "marketCap": 272487,
    "profitabilityScore": 22,
    "valuationScore": 50,
    "financialHealthScore": 69,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 44.6,
    "roe": 4.94,
    "roce": 8.11,
    "dividendYield": 0.25,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 24.8%"
    ],
    "cons": [
      "Stock is trading at 3.30 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 7.42% over last 3 years."
    ]
  },
  {
    "symbol": "KAJARIACER",
    "name": "Kajaria Ceramics Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Ceramics",
    "currentPrice": 1042,
    "marketCap": 16597,
    "profitabilityScore": 50,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 41.4,
    "roe": 11.2,
    "roce": 17.1,
    "dividendYield": 0.86,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 45.2%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.5% over past five years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "MATRIMONY",
    "name": "Matrimony.com Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Internet & Catalogue Retail",
    "currentPrice": 525,
    "marketCap": 1131,
    "profitabilityScore": 65,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 23,
    "volatilityScore": 63,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33,
    "roe": 17,
    "roce": 19.4,
    "dividendYield": 0.95,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 31.3%",
      "Promoter holding has increased by 1.00% over last quarter."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 4.16% over past five years.",
      "Earnings include an other income of Rs.30.8 Cr.",
      "The company has delivered a poor sales growth of 4."
    ]
  },
  {
    "symbol": "PITTIENG",
    "name": "Pitti Engineering Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 783,
    "marketCap": 2945,
    "profitabilityScore": 60,
    "valuationScore": 62,
    "financialHealthScore": 75,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23,
    "roe": 17.8,
    "roce": 17,
    "dividendYield": 0.19,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 48.2% CAGR over last 5 years"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -5.10%"
    ]
  },
  {
    "symbol": "ROSSARI",
    "name": "Rossari Biotech Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 594,
    "marketCap": 3304,
    "profitabilityScore": 50,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.2,
    "roe": 12.2,
    "roce": 15.8,
    "dividendYield": 0.08,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has a low return on equity of 12.6% over last 3 years.",
      "Dividend payout has been low at 2.24% of profits over last 3 years"
    ]
  },
  {
    "symbol": "RPTECH",
    "name": "Rashi Peripherals Ltd",
    "sector": "Information Technology",
    "industry": "Computers Hardware & Equipments",
    "currentPrice": 327,
    "marketCap": 2155,
    "profitabilityScore": 44,
    "valuationScore": 88,
    "financialHealthScore": 71,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 10.7,
    "roe": 12.5,
    "roce": 14.2,
    "dividendYield": 0.61,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.16 times its book value"
    ],
    "cons": [
      "Company has a low return on equity of 13.6% over last 3 years.",
      "Contingent liabilities of Rs.737 Cr.",
      "Dividend payout has been low at 3.18% of profits over last 3 years"
    ]
  },
  {
    "symbol": "RRKABEL",
    "name": "R R Kabel Ltd",
    "sector": "Industrials",
    "industry": "Cables - Electricals",
    "currentPrice": 1360,
    "marketCap": 15396,
    "profitabilityScore": 58,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 38.1,
    "roe": 15.2,
    "roce": 19.8,
    "dividendYield": 0.44,
    "salesGrowth5Y": 25,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 22.4%"
    ],
    "cons": []
  },
  {
    "symbol": "SAILIFE",
    "name": "Sai Life Sciences Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 860,
    "marketCap": 18091,
    "profitabilityScore": 50,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 48,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 63.2,
    "roe": 11,
    "roce": 14,
    "dividendYield": 0,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 7.95 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 7.86% over last 3 years."
    ]
  },
  {
    "symbol": "SHILPAMED",
    "name": "Shilpa Medicare Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 324,
    "marketCap": 6334,
    "profitabilityScore": 21,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 48,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.9,
    "roe": 4.21,
    "roce": 7.82,
    "dividendYield": 0.15,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 2.60 times its book value",
      "The company has delivered a poor sales growth of 7.12% over past five years.",
      "Company has a low return on equity of 1.52% over last 3 years."
    ]
  },
  {
    "symbol": "SMSPHARMA",
    "name": "SMS Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 320,
    "marketCap": 2998,
    "profitabilityScore": 42,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 54,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.5,
    "roe": 11.8,
    "roce": 12.5,
    "dividendYield": 0.13,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Promoter holding has increased by 1.80% over last quarter."
    ],
    "cons": [
      "Stock is trading at 4.11 times its book value",
      "Company has a low return on equity of 7.21% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "TATACONSUM",
    "name": "Tata Consumer Products Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Tea & Coffee",
    "currentPrice": 1146,
    "marketCap": 113411,
    "profitabilityScore": 31,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 41,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 85.1,
    "roe": 7.01,
    "roce": 9.16,
    "dividendYield": 0.72,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 64.4%"
    ],
    "cons": [
      "Stock is trading at 5.58 times its book value",
      "Company has a low return on equity of 7.39% over last 3 years."
    ]
  },
  {
    "symbol": "TECHNOE",
    "name": "Techno Electric & Engineering Company Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 1063,
    "marketCap": 12369,
    "profitabilityScore": 54,
    "valuationScore": 62,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 27.8,
    "roe": 12.8,
    "roce": 16.5,
    "dividendYield": 0.85,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 29.1%"
    ],
    "cons": [
      "Stock is trading at 3.17 times its book value",
      "Company has a low return on equity of 12.1% over last 3 years.",
      "Earnings include an other income of Rs.208 Cr."
    ]
  },
  {
    "symbol": "TIINDIA",
    "name": "Tube Investments of India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 2567,
    "marketCap": 49608,
    "profitabilityScore": 61,
    "valuationScore": 30,
    "financialHealthScore": 71,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 79.2,
    "roe": 12.8,
    "roce": 21.8,
    "dividendYield": 0.14,
    "salesGrowth5Y": 33,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "TRIVENI",
    "name": "Triveni Engineering and Industries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Sugar",
    "currentPrice": 338,
    "marketCap": 7407,
    "profitabilityScore": 28,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.3,
    "roe": 8.13,
    "roce": 8.65,
    "dividendYield": 0.74,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 19.4%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 5.10% over past five years.",
      "Company might be capitalizing the interest cost",
      "Promoter holding has decreased over last 3 years: -7.27%"
    ]
  },
  {
    "symbol": "UPL",
    "name": "UPL Ltd",
    "sector": "Commodities",
    "industry": "Pesticides & Agrochemicals",
    "currentPrice": 740,
    "marketCap": 62401,
    "profitabilityScore": 25,
    "valuationScore": 76,
    "financialHealthScore": 70,
    "growthScore": 50,
    "stabilityScore": 22,
    "volatilityScore": 45,
    "riskScore": 48,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.3,
    "roe": 3.29,
    "roce": 7.66,
    "dividendYield": 0.81,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 22.6%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 5.46% over past five years.",
      "Company has a low return on equity of 4.37% over last 3 years."
    ]
  },
  {
    "symbol": "ADANIGREEN",
    "name": "Adani Green Energy Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 994,
    "marketCap": 163906,
    "profitabilityScore": 57,
    "valuationScore": 30,
    "financialHealthScore": 58,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 74.8,
    "roe": 14.6,
    "roce": 8.7,
    "dividendYield": 0,
    "salesGrowth5Y": 34,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 127% CAGR over last 5 years",
      "Debtor days have improved from 68.9 to 50.1 days."
    ],
    "cons": [
      "Stock is trading at 8.38 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "AFCONS",
    "name": "Afcons Infrastructure Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 388,
    "marketCap": 14281,
    "profitabilityScore": 53,
    "valuationScore": 70,
    "financialHealthScore": 66,
    "growthScore": 50,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.4,
    "roe": 11.1,
    "roce": 19.6,
    "dividendYield": 0.64,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 4.78% over past five years.",
      "Company has a low return on equity of 13.6% over last 3 years.",
      "Promoters have pledged or encumbered 53.5% of their holding."
    ]
  },
  {
    "symbol": "ASTRAMICRO",
    "name": "Astra Microwave Products Ltd",
    "sector": "Industrials",
    "industry": "Aerospace & Defense",
    "currentPrice": 880,
    "marketCap": 8354,
    "profitabilityScore": 62,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 51.9,
    "roe": 14.4,
    "roce": 18.7,
    "dividendYield": 0.25,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 28.6% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 7.19 times its book value",
      "Promoter holding is low: 6.54%",
      "Company has a low return on equity of 13.9% over last 3 years."
    ]
  },
  {
    "symbol": "BASF",
    "name": "BASF India Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 4024,
    "marketCap": 17444,
    "profitabilityScore": 50,
    "valuationScore": 50,
    "financialHealthScore": 78,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 47.3,
    "roe": 13.4,
    "roce": 17.5,
    "dividendYield": 0.5,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "BATAINDIA",
    "name": "Bata India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Footwear",
    "currentPrice": 948,
    "marketCap": 12196,
    "profitabilityScore": 57,
    "valuationScore": 30,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 31,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 65.6,
    "roe": 15.6,
    "roce": 15.1,
    "dividendYield": 2,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 62.1%",
      "Company's working capital requirements have reduced from 28.6 days to 15.6 days"
    ],
    "cons": [
      "Stock is trading at 8.00 times its book value",
      "The company has delivered a poor sales growth of 2.68% over past five years.",
      "The company has delivered a poor sales growth of 2."
    ]
  },
  {
    "symbol": "CARBORUNIV",
    "name": "Carborundum Universal Ltd",
    "sector": "Industrials",
    "industry": "Abrasives & Bearings",
    "currentPrice": 849,
    "marketCap": 16216,
    "profitabilityScore": 49,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 64.9,
    "roe": 10.8,
    "roce": 16.1,
    "dividendYield": 0.47,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 19.5%"
    ],
    "cons": [
      "Company has a low return on equity of 13.8% over last 3 years."
    ]
  },
  {
    "symbol": "CARRARO",
    "name": "Carraro India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 513,
    "marketCap": 2914,
    "profitabilityScore": 74,
    "valuationScore": 54,
    "financialHealthScore": 71,
    "growthScore": 50,
    "stabilityScore": 23,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.4,
    "roe": 21.1,
    "roce": 22.7,
    "dividendYield": 0.89,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "CPPLUS",
    "name": "Aditya Infotech Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 1499,
    "marketCap": 17636,
    "profitabilityScore": 67,
    "valuationScore": 30,
    "financialHealthScore": 77,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 89.6,
    "roe": 20.9,
    "roce": 19.5,
    "dividendYield": 0,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 54.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 11.1 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Earnings include an other income of Rs.259 Cr."
    ]
  },
  {
    "symbol": "HARSHA",
    "name": "Harsha Engineers International Ltd",
    "sector": "Industrials",
    "industry": "Other Industrial Products",
    "currentPrice": 371,
    "marketCap": 3378,
    "profitabilityScore": 39,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.9,
    "roe": 8.75,
    "roce": 12.1,
    "dividendYield": 0.27,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.57 times its book value",
      "The company has delivered a poor sales growth of 9.71% over past five years.",
      "Company has a low return on equity of 10.8% over last 3 years."
    ]
  },
  {
    "symbol": "INDIASHLTR",
    "name": "India Shelter Finance Corporation Ltd",
    "sector": "Financial Services",
    "industry": "Housing Finance Company",
    "currentPrice": 850,
    "marketCap": 9227,
    "profitabilityScore": 44,
    "valuationScore": 62,
    "financialHealthScore": 69,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.7,
    "roe": 15.1,
    "roce": 12.6,
    "dividendYield": 0.59,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 3.16 times its book value",
      "Promoters have pledged or encumbered 97.0% of their holding."
    ]
  },
  {
    "symbol": "JWL",
    "name": "Jupiter Wagons Ltd",
    "sector": "Industrials",
    "industry": "Railway Wagons",
    "currentPrice": 254,
    "marketCap": 10795,
    "profitabilityScore": 66,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.6,
    "roe": 17.4,
    "roce": 21.1,
    "dividendYield": 0.39,
    "salesGrowth5Y": 71,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Debtor days have increased from 54.0 to 75.0 days.",
      "Promoter holding has decreased over last 3 years: -6.53%",
      "Working capital days have increased from 43.6 days to 62.0 days"
    ]
  },
  {
    "symbol": "KEC",
    "name": "KEC International Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 682,
    "marketCap": 18182,
    "profitabilityScore": 50,
    "valuationScore": 62,
    "financialHealthScore": 63,
    "growthScore": 70,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.6,
    "roe": 12,
    "roce": 18,
    "dividendYield": 0.81,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 33.0%"
    ],
    "cons": [
      "Company has a low return on equity of 8.82% over last 3 years."
    ]
  },
  {
    "symbol": "KIRLFER",
    "name": "Kirloskar Ferrous Industries Ltd",
    "sector": "Commodities",
    "industry": "Pig Iron",
    "currentPrice": 481,
    "marketCap": 7927,
    "profitabilityScore": 38,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 25,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.3,
    "roe": 8.94,
    "roce": 12.2,
    "dividendYield": 1.14,
    "salesGrowth5Y": 29,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 24.7%"
    ],
    "cons": [
      "Company has a low return on equity of 12.1% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -5.82%"
    ]
  },
  {
    "symbol": "PARKHOTELS",
    "name": "Apeejay Surrendra Park Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 132,
    "marketCap": 2816,
    "profitabilityScore": 44,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 31.7,
    "roe": 6.74,
    "roce": 12,
    "dividendYield": 0.38,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has a low return on equity of 7.58% over last 3 years."
    ]
  },
  {
    "symbol": "PCBL",
    "name": "PCBL Chemical Ltd",
    "sector": "Commodities",
    "industry": "Carbon Black",
    "currentPrice": 310,
    "marketCap": 12184,
    "profitabilityScore": 44,
    "valuationScore": 62,
    "financialHealthScore": 69,
    "growthScore": 70,
    "stabilityScore": 31,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.9,
    "roe": 12.5,
    "roce": 11.8,
    "dividendYield": 1.94,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 45.7%"
    ],
    "cons": [
      "Stock is trading at 3.02 times its book value"
    ]
  },
  {
    "symbol": "PENIND",
    "name": "Pennar Industries Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 201,
    "marketCap": 2708,
    "profitabilityScore": 48,
    "valuationScore": 70,
    "financialHealthScore": 67,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.8,
    "roe": 12.6,
    "roce": 15.9,
    "dividendYield": 0,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.53 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "The company has delivered a poor sales growth of 8.90% over past five years."
    ]
  },
  {
    "symbol": "PHOENIXLTD",
    "name": "Phoenix Mills Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 1721,
    "marketCap": 61630,
    "profitabilityScore": 52,
    "valuationScore": 30,
    "financialHealthScore": 77,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 57.6,
    "roe": 9.36,
    "roce": 10.8,
    "dividendYield": 0.15,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 23.3% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 5.70 times its book value",
      "Company has a low return on equity of 10.8% over last 3 years."
    ]
  },
  {
    "symbol": "PPLPHARMA",
    "name": "Piramal Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 175,
    "marketCap": 23202,
    "profitabilityScore": 16,
    "valuationScore": 46,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 42,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 0,
    "roe": 1.11,
    "roce": 6.45,
    "dividendYield": 0.08,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 34.0%"
    ],
    "cons": [
      "Stock is trading at 2.89 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -0.37% over last 3 years."
    ]
  },
  {
    "symbol": "RADICO",
    "name": "Radico Khaitan Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Breweries & Distilleries",
    "currentPrice": 3148,
    "marketCap": 42158,
    "profitabilityScore": 52,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 91.1,
    "roe": 13.3,
    "roce": 16,
    "dividendYield": 0.13,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 14.2 times its book value",
      "Company has a low return on equity of 11.8% over last 3 years."
    ]
  },
  {
    "symbol": "REDTAPE",
    "name": "Redtape Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Footwear",
    "currentPrice": 125,
    "marketCap": 6920,
    "profitabilityScore": 78,
    "valuationScore": 42,
    "financialHealthScore": 69,
    "growthScore": 40,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 38.3,
    "roe": 23.6,
    "roce": 21.7,
    "dividendYield": 0.6,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 28.9%"
    ],
    "cons": [
      "Stock is trading at 8.04 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "SANATHAN",
    "name": "Sanathan Textiles Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 429,
    "marketCap": 3607,
    "profitabilityScore": 36,
    "valuationScore": 76,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.1,
    "roe": 10.2,
    "roce": 10.4,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 11.5% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "SANDHAR",
    "name": "Sandhar Technologies Limited",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 530,
    "marketCap": 3186,
    "profitabilityScore": 43,
    "valuationScore": 82,
    "financialHealthScore": 71,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 18.5,
    "roe": 12.8,
    "roce": 12.3,
    "dividendYield": 0.66,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 19.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 17.8%"
    ],
    "cons": [
      "Stock is trading at 2.59 times its book value",
      "Company has a low return on equity of 10.8% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "SENCO",
    "name": "Senco Gold Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Gems, Jewellery And Watches",
    "currentPrice": 312,
    "marketCap": 5115,
    "profitabilityScore": 33,
    "valuationScore": 70,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 20.5,
    "roe": 9.54,
    "roce": 10.3,
    "dividendYield": 0.32,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has a low return on equity of 13.7% over last 3 years.",
      "Company might be capitalizing the interest cost",
      "Dividend payout has been low at 8.05% of profits over last 3 years"
    ]
  },
  {
    "symbol": "SHREECEM",
    "name": "Shree Cement Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 26135,
    "marketCap": 94303,
    "profitabilityScore": 24,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 45,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 54.9,
    "roe": 5.29,
    "roce": 6.71,
    "dividendYield": 0.42,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 26.5%"
    ],
    "cons": [
      "Stock is trading at 4.20 times its book value",
      "The company has delivered a poor sales growth of 8.42% over past five years.",
      "Company has a low return on equity of 8.14% over last 3 years."
    ]
  },
  {
    "symbol": "STARCEMENT",
    "name": "Star Cement Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 218,
    "marketCap": 8799,
    "profitabilityScore": 28,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.1,
    "roe": 6.05,
    "roce": 8.39,
    "dividendYield": 0.46,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.93 times its book value",
      "The company has delivered a poor sales growth of 11.4% over past five years.",
      "Company has a low return on equity of 9.31% over last 3 years."
    ]
  },
  {
    "symbol": "SULA",
    "name": "Sula Vineyards Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Breweries & Distilleries",
    "currentPrice": 218,
    "marketCap": 1843,
    "profitabilityScore": 53,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 28,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.6,
    "roe": 12.3,
    "roce": 13.2,
    "dividendYield": 1.65,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 68.0%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 3.60% over past five years.",
      "Promoter holding is low: 24.4%",
      "Debtor days have increased from 113 to 148 days."
    ]
  },
  {
    "symbol": "UDS",
    "name": "Updater Services Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 168,
    "marketCap": 1124,
    "profitabilityScore": 48,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 9.88,
    "roe": 13.2,
    "roce": 15.3,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is trading at 1.11 times its book value"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 11.9% over last 3 years."
    ]
  },
  {
    "symbol": "UNICHEMLAB",
    "name": "Unichem Laboratories Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 442,
    "marketCap": 3098,
    "profitabilityScore": 19,
    "valuationScore": 76,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.3,
    "roe": 5.59,
    "roce": 6.24,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 29.1% CAGR over last 5 years"
    ],
    "cons": [
      "Company has a low return on equity of -1.15% over last 3 years.",
      "Contingent liabilities of Rs.980 Cr.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "VOLTAS",
    "name": "Voltas Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 1322,
    "marketCap": 43791,
    "profitabilityScore": 51,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 49,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 79.9,
    "roe": 13.5,
    "roce": 17.6,
    "dividendYield": 0.53,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 68.0%"
    ],
    "cons": [
      "Stock is trading at 6.87 times its book value",
      "Company has a low return on equity of 7.67% over last 3 years.",
      "Earnings include an other income of Rs.285 Cr."
    ]
  },
  {
    "symbol": "AFFLE",
    "name": "Affle 3i Ltd",
    "sector": "Information Technology",
    "industry": "IT Enabled Services",
    "currentPrice": 1610,
    "marketCap": 22665,
    "profitabilityScore": 57,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 54,
    "roe": 14,
    "roce": 16.8,
    "dividendYield": 0,
    "salesGrowth5Y": 47,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has delivered good profit growth of 42.3% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding has decreased over last 3 years: -4.92%"
    ]
  },
  {
    "symbol": "ARVSMART",
    "name": "Arvind SmartSpaces Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 597,
    "marketCap": 2738,
    "profitabilityScore": 68,
    "valuationScore": 62,
    "financialHealthScore": 61,
    "growthScore": 55,
    "stabilityScore": 24,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.7,
    "roe": 18.8,
    "roce": 19,
    "dividendYield": 1,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 21.2% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 40.4%",
      "Company's median sales growth is 32.0% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 4.58 times its book value",
      "Company has a low return on equity of 11.2% over last 3 years."
    ]
  },
  {
    "symbol": "ASTERDM",
    "name": "Aster DM Healthcare Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 619,
    "marketCap": 32054,
    "profitabilityScore": 35,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 22,
    "volatilityScore": 42,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 87.3,
    "roe": 8.26,
    "roce": 10.7,
    "dividendYield": 0.81,
    "salesGrowth5Y": 30,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 1,547%",
      "Debtor days have improved from 110 to 22.7 days."
    ],
    "cons": [
      "Stock is trading at 7.07 times its book value",
      "The company has delivered a poor sales growth of -13.7% over past five years.",
      "Company has a low return on equity of 7.37% over last 3 years."
    ]
  },
  {
    "symbol": "BALRAMCHIN",
    "name": "Balrampur Chini Mills Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Sugar",
    "currentPrice": 429,
    "marketCap": 8658,
    "profitabilityScore": 34,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.4,
    "roe": 11,
    "roce": 10.2,
    "dividendYield": 0.82,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 2.69% over past five years.",
      "Company has a low return on equity of 11.6% over last 3 years.",
      "Dividend payout has been low at 14.3% of profits over last 3 years"
    ]
  },
  {
    "symbol": "BIKAJI",
    "name": "Bikaji Foods International Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Packaged Foods",
    "currentPrice": 708,
    "marketCap": 17740,
    "profitabilityScore": 58,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 82.1,
    "roe": 15.5,
    "roce": 18.2,
    "dividendYield": 0.14,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 28.8% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 11.8 times its book value"
    ]
  },
  {
    "symbol": "CCL",
    "name": "CCL Products (India) Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Tea & Coffee",
    "currentPrice": 942,
    "marketCap": 12569,
    "profitabilityScore": 56,
    "valuationScore": 42,
    "financialHealthScore": 78,
    "growthScore": 55,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.2,
    "roe": 17,
    "roce": 13.1,
    "dividendYield": 0.53,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 22.2%"
    ],
    "cons": [
      "Stock is trading at 6.02 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "CENTENKA",
    "name": "Century Enka Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 417,
    "marketCap": 908,
    "profitabilityScore": 19,
    "valuationScore": 92,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 34,
    "volatilityScore": 69,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 15.5,
    "roe": 4.2,
    "roce": 5.95,
    "dividendYield": 2.4,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is trading at 0.63 times its book value"
    ],
    "cons": [
      "Promoter holding is low: 24.9%",
      "Earnings include an other income of Rs.44.6 Cr."
    ]
  },
  {
    "symbol": "CGCL",
    "name": "Capri Global Capital Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 186,
    "marketCap": 17865,
    "profitabilityScore": 57,
    "valuationScore": 70,
    "financialHealthScore": 65,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.9,
    "roe": 11.8,
    "roce": 11.2,
    "dividendYield": 0.11,
    "salesGrowth5Y": 35,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 24.3% CAGR over last 5 years",
      "Company's median sales growth is 31.5% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 2.68 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 9.15% over last 3 years."
    ]
  },
  {
    "symbol": "DEEDEV",
    "name": "DEE Development Engineers Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 206,
    "marketCap": 1425,
    "profitabilityScore": 32,
    "valuationScore": 76,
    "financialHealthScore": 74,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.9,
    "roe": 7,
    "roce": 9.39,
    "dividendYield": 0,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 26.3% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 5.53% over last 3 years.",
      "Working capital days have increased from 57.2 days to 106 days"
    ]
  },
  {
    "symbol": "GANECOS",
    "name": "Ganesha Ecosphere Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 900,
    "marketCap": 2414,
    "profitabilityScore": 37,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.9,
    "roe": 9.38,
    "roce": 11,
    "dividendYield": 0.5,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Promoter holding has increased by 3.19% over last quarter."
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.5% over past five years.",
      "Company has a low return on equity of 8.28% over last 3 years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "GOCOLORS",
    "name": "Go Fashion (India) Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 471,
    "marketCap": 2552,
    "profitabilityScore": 74,
    "valuationScore": 44,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 144,
    "roe": 19.3,
    "roce": 22.7,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "GRAPHITE",
    "name": "Graphite India Ltd",
    "sector": "Industrials",
    "industry": "Electrodes & Refractories",
    "currentPrice": 526,
    "marketCap": 10266,
    "profitabilityScore": 34,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 32,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42.6,
    "roe": 8,
    "roce": 10.1,
    "dividendYield": 2.09,
    "salesGrowth5Y": 59,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 52.1%",
      "Company's working capital requirements have reduced from 131 days to 84.4 days"
    ],
    "cons": [
      "The company has delivered a poor sales growth of -3.72% over past five years.",
      "Company has a low return on equity of 4.68% over last 3 years.",
      "Earnings include an other income of Rs.315 Cr."
    ]
  },
  {
    "symbol": "HITECH",
    "name": "Hi-Tech Pipes Ltd",
    "sector": "Industrials",
    "industry": "Iron & Steel Products",
    "currentPrice": 94.8,
    "marketCap": 1928,
    "profitabilityScore": 33,
    "valuationScore": 76,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 24.7,
    "roe": 7.95,
    "roce": 11.6,
    "dividendYield": 0.03,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 29.0% CAGR over last 5 years"
    ],
    "cons": [
      "Company has a low return on equity of 9.09% over last 3 years."
    ]
  },
  {
    "symbol": "IFBIND",
    "name": "IFB Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 1535,
    "marketCap": 6214,
    "profitabilityScore": 52,
    "valuationScore": 42,
    "financialHealthScore": 71,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 49,
    "roe": 13.7,
    "roce": 17.4,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 32.4% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 6.74 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 7.46% over last 3 years."
    ]
  },
  {
    "symbol": "INDIGOPNTS",
    "name": "Indigo Paints Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Paints",
    "currentPrice": 1204,
    "marketCap": 5743,
    "profitabilityScore": 60,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.9,
    "roe": 14.6,
    "roce": 19.5,
    "dividendYield": 0.29,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": []
  },
  {
    "symbol": "ISGEC",
    "name": "ISGEC Heavy Engineering  Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 756,
    "marketCap": 5559,
    "profitabilityScore": 41,
    "valuationScore": 76,
    "financialHealthScore": 70,
    "growthScore": 50,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 22.7,
    "roe": 9.37,
    "roce": 14.8,
    "dividendYield": 0.66,
    "salesGrowth5Y": 2,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 1.77% over past five years.",
      "Company has a low return on equity of 9.41% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "JNKINDIA",
    "name": "JNK India Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 214,
    "marketCap": 1199,
    "profitabilityScore": 44,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.7,
    "roe": 8.63,
    "roce": 14.9,
    "dividendYield": 0.14,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Earnings include an other income of Rs.22.1 Cr.",
      "Company has high debtors of 260 days.",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "KTKBANK",
    "name": "Karnataka Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 205,
    "marketCap": 7755,
    "profitabilityScore": 28,
    "valuationScore": 74,
    "financialHealthScore": 55,
    "growthScore": 80,
    "stabilityScore": 34,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 6.76,
    "roe": 11.1,
    "roce": 6.33,
    "dividendYield": 2.44,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.62 times its book value",
      "Company has delivered good profit growth of 24.1% CAGR over last 5 years"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 6.84% over past five years.",
      "Company has a low return on equity of 13.1% over last 3 years."
    ]
  },
  {
    "symbol": "LUMAXTECH",
    "name": "Lumax Auto Technologies Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 1488,
    "marketCap": 10141,
    "profitabilityScore": 67,
    "valuationScore": 42,
    "financialHealthScore": 67,
    "growthScore": 55,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 48,
    "roe": 20.2,
    "roce": 19,
    "dividendYield": 0.37,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 24.7% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 27.6%"
    ],
    "cons": [
      "Stock is trading at 9.61 times its book value"
    ]
  },
  {
    "symbol": "MEDIASSIST",
    "name": "Medi Assist Healthcare Services Ltd",
    "sector": "Financial Services",
    "industry": "Insurance Distributors",
    "currentPrice": 470,
    "marketCap": 3505,
    "profitabilityScore": 68,
    "valuationScore": 42,
    "financialHealthScore": 72,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.1,
    "roe": 17.4,
    "roce": 18.7,
    "dividendYield": 0,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding has decreased over last quarter: -15.9%",
      "Promoter holding is low: 4.63%"
    ]
  },
  {
    "symbol": "NAVINFLUOR",
    "name": "Navin Fluorine International Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 5563,
    "marketCap": 28480,
    "profitabilityScore": 46,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 64.1,
    "roe": 11.5,
    "roce": 11.7,
    "dividendYield": 0.22,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 18.4%",
      "Company's working capital requirements have reduced from 70.0 days to 25.2 days"
    ],
    "cons": [
      "Stock is trading at 7.91 times its book value",
      "Promoter holding has decreased over last quarter: -0.90%",
      "Company has a low return on equity of 13.1% over last 3 years."
    ]
  },
  {
    "symbol": "PRAJIND",
    "name": "Praj Industries Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 301,
    "marketCap": 5535,
    "profitabilityScore": 54,
    "valuationScore": 38,
    "financialHealthScore": 72,
    "growthScore": 70,
    "stabilityScore": 31,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52.4,
    "roe": 14.1,
    "roce": 17.9,
    "dividendYield": 1.99,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 41.3%"
    ],
    "cons": [
      "Promoter holding is low: 32.8%"
    ]
  },
  {
    "symbol": "RAJRATAN",
    "name": "Rajratan Global Wire Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 425,
    "marketCap": 2166,
    "profitabilityScore": 47,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37,
    "roe": 11.1,
    "roce": 14.2,
    "dividendYield": 0.47,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Dividend payout has been low at 13.8% of profits over last 3 years"
    ]
  },
  {
    "symbol": "RATEGAIN",
    "name": "Rategain Travel Technologies Ltd",
    "sector": "Information Technology",
    "industry": "Computers - Software & Consulting",
    "currentPrice": 660,
    "marketCap": 7798,
    "profitabilityScore": 55,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 37.3,
    "roe": 13.3,
    "roce": 17.3,
    "dividendYield": 0,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has delivered good profit growth of 62.3% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 4.29 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 12.7% over last 3 years."
    ]
  },
  {
    "symbol": "REPCOHOME",
    "name": "Repco Home Finance Ltd",
    "sector": "Financial Services",
    "industry": "Housing Finance Company",
    "currentPrice": 392,
    "marketCap": 2446,
    "profitabilityScore": 41,
    "valuationScore": 74,
    "financialHealthScore": 63,
    "growthScore": 80,
    "stabilityScore": 24,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 5.33,
    "roe": 14.4,
    "roce": 11,
    "dividendYield": 1.02,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.69 times its book value"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 4.95% over past five years.",
      "The company has delivered a poor sales growth of 4."
    ]
  },
  {
    "symbol": "ROSSELLIND",
    "name": "Rossell India Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Tea & Coffee",
    "currentPrice": 54.7,
    "marketCap": 206,
    "profitabilityScore": 24,
    "valuationScore": 92,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 69,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.4,
    "roe": 4.5,
    "roce": 6.38,
    "dividendYield": 0.73,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.69 times its book value"
    ],
    "cons": [
      "Company has a low return on equity of 8.20% over last 3 years.",
      "Debtor days have increased from 51.0 to 63.2 days."
    ]
  },
  {
    "symbol": "SAGILITY",
    "name": "Sagility Ltd",
    "sector": "Information Technology",
    "industry": "IT Enabled Services",
    "currentPrice": 48.1,
    "marketCap": 22489,
    "profitabilityScore": 37,
    "valuationScore": 70,
    "financialHealthScore": 71,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.2,
    "roe": 7.38,
    "roce": 9.58,
    "dividendYield": 0.1,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 2.53 times its book value",
      "Company has a low return on equity of 4.89% over last 3 years."
    ]
  },
  {
    "symbol": "SANSERA",
    "name": "Sansera Engineering Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 1629,
    "marketCap": 10157,
    "profitabilityScore": 45,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.8,
    "roe": 10.5,
    "roce": 13.4,
    "dividendYield": 0.2,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 21.8% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 3.52 times its book value",
      "Company has a low return on equity of 12.4% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -5.27%"
    ]
  },
  {
    "symbol": "SOMANYCERA",
    "name": "Somany Ceramics Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Ceramics",
    "currentPrice": 411,
    "marketCap": 1684,
    "profitabilityScore": 34,
    "valuationScore": 70,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.5,
    "roe": 8.17,
    "roce": 11.5,
    "dividendYield": 0.73,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 10.6% over past five years.",
      "Company has a low return on equity of 10.1% over last 3 years.",
      "The company has delivered a poor sales growth of 10."
    ]
  },
  {
    "symbol": "SUNTECK",
    "name": "Sunteck Realty Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 406,
    "marketCap": 5947,
    "profitabilityScore": 22,
    "valuationScore": 76,
    "financialHealthScore": 72,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.9,
    "roe": 4.71,
    "roce": 6.28,
    "dividendYield": 0.37,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 513%",
      "Debtor days have improved from 130 to 50.2 days."
    ],
    "cons": [
      "Company has a low return on equity of 2.49% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -3.83%"
    ]
  },
  {
    "symbol": "TBOTEK",
    "name": "TBO Tek Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tour, Travel Related Services",
    "currentPrice": 1606,
    "marketCap": 17434,
    "profitabilityScore": 85,
    "valuationScore": 30,
    "financialHealthScore": 60,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 78.4,
    "roe": 24.6,
    "roce": 26.7,
    "dividendYield": 0,
    "salesGrowth5Y": 25,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 24.3% CAGR over last 5 years",
      "Company has a good return on equity (ROE) track record: 3 Years ROE 35.1%"
    ],
    "cons": [
      "Stock is trading at 12.6 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "TCIEXP",
    "name": "TCI Express Ltd",
    "sector": "Services",
    "industry": "Logistics Solution Provider",
    "currentPrice": 569,
    "marketCap": 2187,
    "profitabilityScore": 47,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 27,
    "volatilityScore": 63,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.7,
    "roe": 10.7,
    "roce": 14.4,
    "dividendYield": 1.41,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 27.0%"
    ],
    "cons": []
  },
  {
    "symbol": "TEGA",
    "name": "Tega Industries Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 1881,
    "marketCap": 14120,
    "profitabilityScore": 61,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.7,
    "roe": 15.5,
    "roce": 17.8,
    "dividendYield": 0.11,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 24.8% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.48 times its book value"
    ]
  },
  {
    "symbol": "THERMAX",
    "name": "Thermax Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 2806,
    "marketCap": 33438,
    "profitabilityScore": 50,
    "valuationScore": 30,
    "financialHealthScore": 74,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 51,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 56.3,
    "roe": 13.6,
    "roce": 16.2,
    "dividendYield": 0.5,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 24.9% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 23.6%"
    ],
    "cons": [
      "Company has a low return on equity of 13.4% over last 3 years."
    ]
  },
  {
    "symbol": "VGUARD",
    "name": "V-Guard Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 336,
    "marketCap": 14717,
    "profitabilityScore": 59,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 50,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 50.7,
    "roe": 15.8,
    "roce": 19.5,
    "dividendYield": 0.45,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 24.7%"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -0.96%"
    ]
  },
  {
    "symbol": "AARTIIND",
    "name": "Aarti Industries Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 351,
    "marketCap": 12720,
    "profitabilityScore": 26,
    "valuationScore": 58,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 47.3,
    "roe": 6.03,
    "roce": 6.32,
    "dividendYield": 0.28,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 11.7% over past five years.",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "ACMESOLAR",
    "name": "ACME Solar Holdings Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 210,
    "marketCap": 12728,
    "profitabilityScore": 46,
    "valuationScore": 70,
    "financialHealthScore": 63,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.2,
    "roe": 7.57,
    "roce": 8.42,
    "dividendYield": 0.1,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 25.7% CAGR over last 5 years",
      "Debtor days have improved from 138 to 98.9 days."
    ],
    "cons": [
      "Stock is trading at 2.66 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -4.59% over past five years."
    ]
  },
  {
    "symbol": "ALICON",
    "name": "Alicon Castalloy Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 839,
    "marketCap": 1370,
    "profitabilityScore": 36,
    "valuationScore": 58,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.1,
    "roe": 8.02,
    "roce": 11.6,
    "dividendYield": 0.66,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 19.6%",
      "Company's working capital requirements have reduced from 34.1 days to 22.9 days"
    ],
    "cons": [
      "Company has a low return on equity of 10.2% over last 3 years."
    ]
  },
  {
    "symbol": "ALIVUS",
    "name": "Alivus Life Sciences Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 860,
    "marketCap": 10558,
    "profitabilityScore": 12,
    "valuationScore": 80,
    "financialHealthScore": 49,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 48,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 30,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0.58,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "EMBDL",
    "name": "Embassy Developments Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 67.7,
    "marketCap": 9417,
    "profitabilityScore": 28,
    "valuationScore": 56,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 0,
    "roe": 2.53,
    "roce": 3.19,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is trading at 0.90 times its book value",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -7.79% over past five years.",
      "Company has a low return on equity of -9.83% over last 3 years."
    ]
  },
  {
    "symbol": "IDFCFIRSTB",
    "name": "IDFC First Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 79.1,
    "marketCap": 68024,
    "profitabilityScore": 17,
    "valuationScore": 64,
    "financialHealthScore": 55,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 45,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 47.3,
    "roe": 4.21,
    "roce": 6.22,
    "dividendYield": 0.32,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 20.3% CAGR over last 5 years"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 7.87% over last 3 years.",
      "Contingent liabilities of Rs.4,40,995 Cr."
    ]
  },
  {
    "symbol": "JIOFIN",
    "name": "Jio Financial Services Ltd",
    "sector": "Financial Services",
    "industry": "Investment Company",
    "currentPrice": 297,
    "marketCap": 188851,
    "profitabilityScore": 24,
    "valuationScore": 40,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 17,
    "volatilityScore": 41,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 117,
    "roe": 1.23,
    "roce": 1.47,
    "dividendYield": 0.17,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": []
  },
  {
    "symbol": "JUSTDIAL",
    "name": "Just Dial Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Internet & Catalogue Retail",
    "currentPrice": 715,
    "marketCap": 6072,
    "profitabilityScore": 22,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.5,
    "roe": 3.63,
    "roce": 4.81,
    "dividendYield": 0,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 1.70% over last 3 years.",
      "Earnings include an other income of Rs.305 Cr."
    ]
  },
  {
    "symbol": "MANAPPURAM",
    "name": "Manappuram Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 272,
    "marketCap": 23018,
    "profitabilityScore": 34,
    "valuationScore": 52,
    "financialHealthScore": 64,
    "growthScore": 70,
    "stabilityScore": 26,
    "volatilityScore": 51,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 51.2,
    "roe": 10.1,
    "roce": 11,
    "dividendYield": 1.29,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 19.2%"
    ],
    "cons": [
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "MIDHANI",
    "name": "Mishra Dhatu Nigam Ltd",
    "sector": "Industrials",
    "industry": "Aerospace & Defense",
    "currentPrice": 295,
    "marketCap": 5532,
    "profitabilityScore": 43,
    "valuationScore": 38,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 51.4,
    "roe": 8.1,
    "roce": 10.6,
    "dividendYield": 0.25,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 31.4%"
    ],
    "cons": [
      "Stock is trading at 3.84 times its book value",
      "The company has delivered a poor sales growth of 8.54% over past five years.",
      "Company has a low return on equity of 9.18% over last 3 years."
    ]
  },
  {
    "symbol": "MOIL",
    "name": "MOIL Ltd",
    "sector": "Commodities",
    "industry": "Industrial Minerals",
    "currentPrice": 314,
    "marketCap": 6397,
    "profitabilityScore": 48,
    "valuationScore": 46,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 29,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 61.5,
    "roe": 8.31,
    "roce": 11.4,
    "dividendYield": 1.79,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 41.2%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 4.71% over past five years.",
      "Company has a low return on equity of 13.1% over last 3 years.",
      "The company has delivered a poor sales growth of 4."
    ]
  },
  {
    "symbol": "MRPL",
    "name": "Mangalore Refinery And Petrochemicals Ltd",
    "sector": "Energy",
    "industry": "Refineries & Marketing",
    "currentPrice": 151,
    "marketCap": 26394,
    "profitabilityScore": 8,
    "valuationScore": 76,
    "financialHealthScore": 69,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.5,
    "roe": 0.45,
    "roce": 4.38,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "NAUKRI",
    "name": "Info Edge (India) Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Internet & Catalogue Retail",
    "currentPrice": 1372,
    "marketCap": 89002,
    "profitabilityScore": 10,
    "valuationScore": 52,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 45,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 67.6,
    "roe": 1.16,
    "roce": 3,
    "dividendYield": 0.44,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Company has a low return on equity of 0.89% over last 3 years.",
      "Earnings include an other income of Rs.1,083 Cr."
    ]
  },
  {
    "symbol": "NOCIL",
    "name": "NOCIL Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 166,
    "marketCap": 2761,
    "profitabilityScore": 27,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 25,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.8,
    "roe": 5.94,
    "roce": 6.65,
    "dividendYield": 1.21,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 34.5%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 10.5% over past five years.",
      "Promoter holding is low: 33.8%",
      "Company has a low return on equity of 7.59% over last 3 years."
    ]
  },
  {
    "symbol": "QUESS",
    "name": "Quess Corp Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 205,
    "marketCap": 3052,
    "profitabilityScore": 32,
    "valuationScore": 82,
    "financialHealthScore": 68,
    "growthScore": 50,
    "stabilityScore": 46,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 14.4,
    "roe": 9.16,
    "roce": 9.82,
    "dividendYield": 4.89,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is providing a good dividend yield of 4.89%.",
      "Company has been maintaining a healthy dividend payout of 144%"
    ],
    "cons": [
      "Stock is trading at 2.74 times its book value",
      "The company has delivered a poor sales growth of 6.37% over past five years.",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "RANEHOLDIN",
    "name": "Rane Holdings Ltd",
    "sector": "Financial Services",
    "industry": "Holding Company",
    "currentPrice": 1316,
    "marketCap": 1880,
    "profitabilityScore": 31,
    "valuationScore": 76,
    "financialHealthScore": 67,
    "growthScore": 70,
    "stabilityScore": 38,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 25.5,
    "roe": 8.02,
    "roce": 9.64,
    "dividendYield": 2.89,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 35.0% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 31.3%"
    ],
    "cons": [
      "Company has a low return on equity of 12.4% over last 3 years."
    ]
  },
  {
    "symbol": "SAFARI",
    "name": "Safari Industries (India) Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plastic Products - Consumer",
    "currentPrice": 2333,
    "marketCap": 11415,
    "profitabilityScore": 60,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.7,
    "roe": 15.8,
    "roce": 18.7,
    "dividendYield": 0.13,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 35.4% CAGR over last 5 years",
      "Company's median sales growth is 26.8% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 11.0 times its book value",
      "Promoter holding has decreased over last quarter: -0.50%"
    ]
  },
  {
    "symbol": "SAMHI",
    "name": "Samhi Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 181,
    "marketCap": 4011,
    "profitabilityScore": 42,
    "valuationScore": 70,
    "financialHealthScore": 77,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 29.2,
    "roe": 9.62,
    "roce": 9.43,
    "dividendYield": 0,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 20.2% CAGR over last 5 years"
    ],
    "cons": [
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "SATIN",
    "name": "Satin Creditcare Network Ltd",
    "sector": "Financial Services",
    "industry": "Microfinance Institutions",
    "currentPrice": 141,
    "marketCap": 1549,
    "profitabilityScore": 31,
    "valuationScore": 92,
    "financialHealthScore": 61,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 11.5,
    "roe": 7.53,
    "roce": 11.9,
    "dividendYield": 0,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.59 times its book value"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 10.3% over last 3 years."
    ]
  },
  {
    "symbol": "SGLTL",
    "name": "Standard Glass Lining Technology Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 150,
    "marketCap": 2987,
    "profitabilityScore": 52,
    "valuationScore": 50,
    "financialHealthScore": 77,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42,
    "roe": 11.6,
    "roce": 16.5,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Debtor days have increased from 99.4 to 127 days.",
      "Working capital days have increased from 172 days to 272 days"
    ]
  },
  {
    "symbol": "TEAMLEASE",
    "name": "Team Lease Services Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 1613,
    "marketCap": 2704,
    "profitabilityScore": 41,
    "valuationScore": 70,
    "financialHealthScore": 73,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 23,
    "roe": 12.2,
    "roce": 12.7,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.82 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding has decreased over last quarter: -0.50%"
    ]
  },
  {
    "symbol": "THELEELA",
    "name": "Leela Palaces Hotels & Resorts Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 390,
    "marketCap": 13055,
    "profitabilityScore": 52,
    "valuationScore": 46,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 75.1,
    "roe": 13.1,
    "roce": 12,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "UBL",
    "name": "United Breweries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Breweries & Distilleries",
    "currentPrice": 1676,
    "marketCap": 44339,
    "profitabilityScore": 45,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 117,
    "roe": 10.8,
    "roce": 13.9,
    "dividendYield": 0.6,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 63.2%"
    ],
    "cons": [
      "Stock is trading at 10.2 times its book value",
      "Company has a low return on equity of 9.73% over last 3 years.",
      "Debtor days have increased from 96.5 to 117 days."
    ]
  },
  {
    "symbol": "UNIVCABLES",
    "name": "Universal Cables Ltd",
    "sector": "Industrials",
    "industry": "Cables - Electricals",
    "currentPrice": 890,
    "marketCap": 3085,
    "profitabilityScore": 25,
    "valuationScore": 76,
    "financialHealthScore": 77,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 21.1,
    "roe": 5.06,
    "roce": 8.58,
    "dividendYield": 0.45,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 8.95% over past five years.",
      "Company has a low return on equity of 6.57% over last 3 years.",
      "Earnings include an other income of Rs.95.8 Cr."
    ]
  },
  {
    "symbol": "VMM",
    "name": "Vishal Mega Mart Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Diversified Retail",
    "currentPrice": 130,
    "marketCap": 60767,
    "profitabilityScore": 44,
    "valuationScore": 30,
    "financialHealthScore": 61,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 51,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 82.5,
    "roe": 10.1,
    "roce": 13.1,
    "dividendYield": 0,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 71.6% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.80 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 8.39% over last 3 years."
    ]
  },
  {
    "symbol": "ADANIENT",
    "name": "Adani Enterprises Ltd",
    "sector": "Commodities",
    "industry": "Trading - Minerals",
    "currentPrice": 2216,
    "marketCap": 286522,
    "profitabilityScore": 33,
    "valuationScore": 18,
    "financialHealthScore": 64,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 115,
    "roe": 9.82,
    "roce": 9.45,
    "dividendYield": 0.06,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 35.6% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 5.30 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 9.78% over last 3 years."
    ]
  },
  {
    "symbol": "AVALON",
    "name": "Avalon Technologies Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 863,
    "marketCap": 5758,
    "profitabilityScore": 42,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 65.8,
    "roe": 10.4,
    "roce": 12.8,
    "dividendYield": 0,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 8.86 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "The company has delivered a poor sales growth of 11.3% over past five years."
    ]
  },
  {
    "symbol": "CHALET",
    "name": "Chalet Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 893,
    "marketCap": 19532,
    "profitabilityScore": 41,
    "valuationScore": 54,
    "financialHealthScore": 76,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.8,
    "roe": 5.77,
    "roce": 11.1,
    "dividendYield": 0.11,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 5.72 times its book value",
      "Company has a low return on equity of 10.3% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "GMRAIRPORT",
    "name": "GMR Airports Ltd",
    "sector": "Services",
    "industry": "Airport & Airport services",
    "currentPrice": 98.7,
    "marketCap": 104137,
    "profitabilityScore": 23,
    "valuationScore": 56,
    "financialHealthScore": 45,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 0,
    "roe": 0,
    "roce": 6.92,
    "dividendYield": 0,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "GODREJIND",
    "name": "Godrej Industries Ltd",
    "sector": "Diversified",
    "industry": "Diversified",
    "currentPrice": 1014,
    "marketCap": 34140,
    "profitabilityScore": 30,
    "valuationScore": 50,
    "financialHealthScore": 55,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 35.4,
    "roe": 9.64,
    "roce": 7.83,
    "dividendYield": 0,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.28 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "The company has delivered a poor sales growth of 11.7% over past five years."
    ]
  },
  {
    "symbol": "GODREJPROP",
    "name": "Godrej Properties Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 1975,
    "marketCap": 59496,
    "profitabilityScore": 25,
    "valuationScore": 50,
    "financialHealthScore": 64,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 38.4,
    "roe": 8.98,
    "roce": 6.57,
    "dividendYield": 0,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 40.9% CAGR over last 5 years",
      "Debtor days have improved from 42.5 to 32.2 days."
    ],
    "cons": [
      "Stock is trading at 3.26 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 7.33% over last 3 years."
    ]
  },
  {
    "symbol": "GOKEX",
    "name": "Gokaldas Exports Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Garments & Apparels",
    "currentPrice": 836,
    "marketCap": 6089,
    "profitabilityScore": 35,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.9,
    "roe": 8.16,
    "roce": 10.6,
    "dividendYield": 0,
    "salesGrowth5Y": 23,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.84 times its book value",
      "Promoter holding is low: 9.16%",
      "Company has a low return on equity of 11.4% over last 3 years."
    ]
  },
  {
    "symbol": "GREENPLY",
    "name": "Greenply Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plywood Boards/ Laminates",
    "currentPrice": 277,
    "marketCap": 3456,
    "profitabilityScore": 43,
    "valuationScore": 50,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42.2,
    "roe": 12,
    "roce": 12.4,
    "dividendYield": 0.18,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 4.08 times its book value",
      "Company has a low return on equity of 11.4% over last 3 years.",
      "Dividend payout has been low at 7.46% of profits over last 3 years"
    ]
  },
  {
    "symbol": "HATSUN",
    "name": "Hatsun Agro Product Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Dairy Products",
    "currentPrice": 1005,
    "marketCap": 22378,
    "profitabilityScore": 50,
    "valuationScore": 30,
    "financialHealthScore": 73,
    "growthScore": 50,
    "stabilityScore": 21,
    "volatilityScore": 51,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.1,
    "roe": 16.7,
    "roce": 12.9,
    "dividendYield": 0.6,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 12.2 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "HEG",
    "name": "HEG Ltd",
    "sector": "Industrials",
    "industry": "Electrodes & Refractories",
    "currentPrice": 521,
    "marketCap": 10061,
    "profitabilityScore": 22,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39,
    "roe": 2.59,
    "roce": 3.96,
    "dividendYield": 0.35,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 29.6%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 0.12% over past five years.",
      "Company has a low return on equity of 7.44% over last 3 years.",
      "Earnings include an other income of Rs.362 Cr."
    ]
  },
  {
    "symbol": "HIKAL",
    "name": "Hikal Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 234,
    "marketCap": 2895,
    "profitabilityScore": 32,
    "valuationScore": 34,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 54,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 287,
    "roe": 7.38,
    "roce": 9.85,
    "dividendYield": 0.6,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 17.0%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 4.29% over past five years.",
      "Company has a low return on equity of 6.81% over last 3 years."
    ]
  },
  {
    "symbol": "IFGLEXPOR",
    "name": "IFGL Refractories Ltd",
    "sector": "Industrials",
    "industry": "Electrodes & Refractories",
    "currentPrice": 192,
    "marketCap": 1385,
    "profitabilityScore": 20,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 30,
    "volatilityScore": 63,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 46.6,
    "roe": 3.94,
    "roce": 5.71,
    "dividendYield": 1.82,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 40.5%"
    ],
    "cons": [
      "Company has a low return on equity of 6.58% over last 3 years."
    ]
  },
  {
    "symbol": "INDUSINDBK",
    "name": "IndusInd Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 841,
    "marketCap": 65563,
    "profitabilityScore": 17,
    "valuationScore": 52,
    "financialHealthScore": 56,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 0,
    "roe": 4.02,
    "roce": 6.47,
    "dividendYield": 0,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.01 times its book value",
      "Company's working capital requirements have reduced from 177 days to 119 days"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding is low: 15.4%",
      "Company has a low return on equity of 10.9% over last 3 years."
    ]
  },
  {
    "symbol": "INOXWIND",
    "name": "Inox Wind Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 124,
    "marketCap": 21520,
    "profitabilityScore": 37,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 42.2,
    "roe": 11.7,
    "roce": 11.5,
    "dividendYield": 0,
    "salesGrowth5Y": 36,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 29.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 3.22 times its book value",
      "Company has a low return on equity of -2.78% over last 3 years.",
      "Company has high debtors of 276 days."
    ]
  },
  {
    "symbol": "KALYANKJIL",
    "name": "Kalyan Jewellers India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Gems, Jewellery And Watches",
    "currentPrice": 475,
    "marketCap": 49057,
    "profitabilityScore": 53,
    "valuationScore": 30,
    "financialHealthScore": 64,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52.7,
    "roe": 16,
    "roce": 15,
    "dividendYield": 0.32,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 38.2% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 18.1%"
    ],
    "cons": [
      "Stock is trading at 9.18 times its book value"
    ]
  },
  {
    "symbol": "LENSKART",
    "name": "Lenskart Solutions Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 408,
    "marketCap": 70748,
    "profitabilityScore": 22,
    "valuationScore": 44,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 268,
    "roe": 4.32,
    "roce": 5.57,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding has decreased over last quarter: -6.26%",
      "Promoter holding is low: 17.6%",
      "Company has a low return on equity of 1.16% over last 3 years."
    ]
  },
  {
    "symbol": "MHRIL",
    "name": "Mahindra Holidays & Resorts India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 309,
    "marketCap": 6235,
    "profitabilityScore": 55,
    "valuationScore": 42,
    "financialHealthScore": 52,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 46.6,
    "roe": 19.6,
    "roce": 9.73,
    "dividendYield": 0,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 24.3% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.52 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "The company has delivered a poor sales growth of 3.23% over past five years."
    ]
  },
  {
    "symbol": "ORIENTHOT",
    "name": "Oriental Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 110,
    "marketCap": 1958,
    "profitabilityScore": 35,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.6,
    "roe": 5.99,
    "roce": 9.45,
    "dividendYield": 0.46,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 47.6% CAGR over last 5 years",
      "Company has been maintaining a healthy dividend payout of 19.1%"
    ],
    "cons": [
      "Stock is trading at 2.83 times its book value",
      "Company has a low return on equity of 8.25% over last 3 years."
    ]
  },
  {
    "symbol": "SBFC",
    "name": "SBFC Finance Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 105,
    "marketCap": 11459,
    "profitabilityScore": 37,
    "valuationScore": 62,
    "financialHealthScore": 64,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 33.2,
    "roe": 11.6,
    "roce": 11.6,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.56 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 10.9% over last 3 years."
    ]
  },
  {
    "symbol": "SENORES",
    "name": "Senores Pharmaceuticals Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 753,
    "marketCap": 3463,
    "profitabilityScore": 45,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.8,
    "roe": 11.8,
    "roce": 11.4,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Debtor days have improved from 177 to 114 days."
    ],
    "cons": [
      "Stock is trading at 4.26 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Working capital days have increased from 21.7 days to 88.2 days"
    ]
  },
  {
    "symbol": "SHAILY",
    "name": "Shaily Engineering Plastics Ltd",
    "sector": "Industrials",
    "industry": "Plastic Products - Industrial",
    "currentPrice": 2448,
    "marketCap": 11233,
    "profitabilityScore": 67,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 76.9,
    "roe": 18.5,
    "roce": 19.5,
    "dividendYield": 0.08,
    "salesGrowth5Y": 73,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 17.7 times its book value"
    ]
  },
  {
    "symbol": "SOUTHBANK",
    "name": "South Indian Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 38.6,
    "marketCap": 10107,
    "profitabilityScore": 32,
    "valuationScore": 74,
    "financialHealthScore": 54,
    "growthScore": 70,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 7.44,
    "roe": 13.8,
    "roce": 6.5,
    "dividendYield": 1.04,
    "salesGrowth5Y": 32,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.95 times its book value"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 13.4% over last 3 years.",
      "Contingent liabilities of Rs.19,546 Cr."
    ]
  },
  {
    "symbol": "STANLEY",
    "name": "Stanley Lifestyles Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Furniture, Home Furnishing",
    "currentPrice": 226,
    "marketCap": 1290,
    "profitabilityScore": 34,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 39.6,
    "roe": 8.11,
    "roce": 10.1,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.77 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 11.4% over last 3 years."
    ]
  },
  {
    "symbol": "SUPRAJIT",
    "name": "Suprajit Engineering Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 448,
    "marketCap": 6151,
    "profitabilityScore": 32,
    "valuationScore": 50,
    "financialHealthScore": 76,
    "growthScore": 70,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 38.5,
    "roe": 6.5,
    "roce": 11,
    "dividendYield": 0.67,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 27.7%",
      "Company's working capital requirements have reduced from 26.1 days to 19.9 days"
    ],
    "cons": [
      "Stock is trading at 4.50 times its book value",
      "Company has a low return on equity of 10.1% over last 3 years."
    ]
  },
  {
    "symbol": "TATACHEM",
    "name": "Tata Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 763,
    "marketCap": 19442,
    "profitabilityScore": 17,
    "valuationScore": 56,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 27,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.7,
    "roe": 1.2,
    "roce": 3.96,
    "dividendYield": 1.44,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.87 times its book value",
      "Company has been maintaining a healthy dividend payout of 93.8%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of 7.53% over past five years.",
      "Company has a low return on equity of 4.87% over last 3 years.",
      "The company has delivered a poor sales growth of 7."
    ]
  },
  {
    "symbol": "ZYDUSWELL",
    "name": "Zydus Wellness Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Packaged Foods",
    "currentPrice": 412,
    "marketCap": 13140,
    "profitabilityScore": 21,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 52,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 46.7,
    "roe": 6.02,
    "roce": 6.16,
    "dividendYield": 0.29,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "The company has delivered a poor sales growth of 8.92% over past five years.",
      "Tax rate seems low",
      "Company has a low return on equity of 5.91% over last 3 years."
    ]
  },
  {
    "symbol": "AZAD",
    "name": "Azad Engineering Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 1562,
    "marketCap": 10086,
    "profitabilityScore": 45,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 90.3,
    "roe": 8.57,
    "roce": 12.2,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 9.42% over last 3 years.",
      "Company has high debtors of 178 days."
    ]
  },
  {
    "symbol": "BAYERCROP",
    "name": "Bayer CropScience Ltd",
    "sector": "Commodities",
    "industry": "Pesticides & Agrochemicals",
    "currentPrice": 4436,
    "marketCap": 19929,
    "profitabilityScore": 63,
    "valuationScore": 18,
    "financialHealthScore": 68,
    "growthScore": 50,
    "stabilityScore": 37,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 405,
    "roe": 15.8,
    "roce": 20.1,
    "dividendYield": 2.82,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 52.5 times its book value",
      "Company might be capitalizing the interest cost",
      "Earnings include an other income of Rs.83.7 Cr."
    ]
  },
  {
    "symbol": "BESTAGRO",
    "name": "Best Agrolife Ltd",
    "sector": "Commodities",
    "industry": "Pesticides & Agrochemicals",
    "currentPrice": 369,
    "marketCap": 874,
    "profitabilityScore": 47,
    "valuationScore": 52,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 69,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.3,
    "roe": 9.95,
    "roce": 12.9,
    "dividendYield": 0.81,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Stock is trading at 1.08 times its book value"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Debtor days have increased from 92.3 to 113 days."
    ]
  },
  {
    "symbol": "CENTURYPLY",
    "name": "Century Plyboards (India) Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plywood Boards/ Laminates",
    "currentPrice": 789,
    "marketCap": 17533,
    "profitabilityScore": 36,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 75.7,
    "roe": 8.47,
    "roce": 10.4,
    "dividendYield": 0.13,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 7.10 times its book value",
      "Company might be capitalizing the interest cost",
      "Dividend payout has been low at 8.25% of profits over last 3 years"
    ]
  },
  {
    "symbol": "FILATEX",
    "name": "Filatex India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Other Textile Products",
    "currentPrice": 49.8,
    "marketCap": 2213,
    "profitabilityScore": 2,
    "valuationScore": 88,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 12.5,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0.5,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "HDFCLIFE",
    "name": "HDFC Life Insurance Company Ltd",
    "sector": "Financial Services",
    "industry": "Life Insurance",
    "currentPrice": 764,
    "marketCap": 164729,
    "profitabilityScore": 28,
    "valuationScore": 30,
    "financialHealthScore": 51,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 41,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 87,
    "roe": 10.8,
    "roce": 6.58,
    "dividendYield": 0.27,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 27.4%"
    ],
    "cons": [
      "Stock is trading at 9.70 times its book value",
      "Tax rate seems low",
      "Company has a low return on equity of 10.2% over last 3 years."
    ]
  },
  {
    "symbol": "IRMENERGY",
    "name": "IRM Energy Ltd",
    "sector": "Energy",
    "industry": "LPG/CNG/PNG/LNG Supplier",
    "currentPrice": 283,
    "marketCap": 1160,
    "profitabilityScore": 25,
    "valuationScore": 76,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 20,
    "volatilityScore": 63,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 28.2,
    "roe": 4.68,
    "roce": 8.26,
    "dividendYield": 0.53,
    "salesGrowth5Y": 43,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Stock is trading at 1.20 times its book value"
    ],
    "cons": [
      "Company has a low return on equity of 10.3% over last 3 years.",
      "Dividend payout has been low at 7.74% of profits over last 3 years",
      "Company's cost of borrowing seems high"
    ]
  },
  {
    "symbol": "ITCHOTELS",
    "name": "ITC Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 205,
    "marketCap": 42771,
    "profitabilityScore": 38,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 58,
    "roe": 6.66,
    "roce": 9.63,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 3.88 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "KAYNES",
    "name": "Kaynes Technology India Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 3800,
    "marketCap": 25441,
    "profitabilityScore": 46,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 67.2,
    "roe": 10.7,
    "roce": 14.3,
    "dividendYield": 0,
    "salesGrowth5Y": 49,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 95.2% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 11.3% over last 3 years."
    ]
  },
  {
    "symbol": "LEMONTREE",
    "name": "Lemon Tree Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 160,
    "marketCap": 12667,
    "profitabilityScore": 69,
    "valuationScore": 30,
    "financialHealthScore": 55,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 57.6,
    "roe": 18.4,
    "roce": 13,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 207% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 10.2 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "MEDPLUS",
    "name": "Medplus Health Services Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Pharmacy Retail",
    "currentPrice": 810,
    "marketCap": 9710,
    "profitabilityScore": 33,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 49.8,
    "roe": 8.8,
    "roce": 10.3,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 5.26 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 5.51% over last 3 years."
    ]
  },
  {
    "symbol": "MINDACORP",
    "name": "Minda Corporation Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 582,
    "marketCap": 13903,
    "profitabilityScore": 44,
    "valuationScore": 30,
    "financialHealthScore": 77,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52.1,
    "roe": 12.1,
    "roce": 12.7,
    "dividendYield": 0.24,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 5.70 times its book value",
      "Dividend payout has been low at 12.6% of profits over last 3 years"
    ]
  },
  {
    "symbol": "NUVOCO",
    "name": "Nuvoco Vistas Corporation Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 340,
    "marketCap": 12164,
    "profitabilityScore": 10,
    "valuationScore": 64,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 44.4,
    "roe": 0.24,
    "roce": 3.93,
    "dividendYield": 0,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 8.80% over past five years."
    ]
  },
  {
    "symbol": "ORCHPHARMA",
    "name": "Orchid Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 844,
    "marketCap": 4292,
    "profitabilityScore": 30,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 82.1,
    "roe": 8.21,
    "roce": 8.07,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.5% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 3.36 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "PGEL",
    "name": "PG Electroplast Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Consumer Electronics",
    "currentPrice": 530,
    "marketCap": 15108,
    "profitabilityScore": 58,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.4,
    "roe": 14.9,
    "roce": 19.4,
    "dividendYield": 0.05,
    "salesGrowth5Y": 101,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -21.6%"
    ]
  },
  {
    "symbol": "PIRAMALFIN",
    "name": "Piramal Finance Ltd",
    "sector": "Financial Services",
    "industry": "Housing Finance Company",
    "currentPrice": 1474,
    "marketCap": 33367,
    "profitabilityScore": 16,
    "valuationScore": 52,
    "financialHealthScore": 65,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 53.8,
    "roe": 2.31,
    "roce": 7.73,
    "dividendYield": 0,
    "salesGrowth5Y": 1,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Working capital days have increased from 1.08 days to 63.8 days"
    ]
  },
  {
    "symbol": "RBLBANK",
    "name": "RBL Bank Ltd",
    "sector": "Financial Services",
    "industry": "Private Sector Bank",
    "currentPrice": 300,
    "marketCap": 18500,
    "profitabilityScore": 17,
    "valuationScore": 76,
    "financialHealthScore": 55,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 34.2,
    "roe": 4.69,
    "roce": 6.06,
    "dividendYield": 0.33,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 1.14 times its book value",
      "Company's working capital requirements have reduced from 162 days to 92.4 days"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Tax rate seems low",
      "Company has a low return on equity of 6.82% over last 3 years."
    ]
  },
  {
    "symbol": "RHIM",
    "name": "RHI Magnesita India Ltd",
    "sector": "Industrials",
    "industry": "Electrodes & Refractories",
    "currentPrice": 444,
    "marketCap": 9173,
    "profitabilityScore": 26,
    "valuationScore": 46,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 20,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 58.3,
    "roe": 5.19,
    "roce": 7.06,
    "dividendYield": 0.56,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has a low return on equity of 8.64% over last 3 years.",
      "Promoter holding has decreased over last 3 years: -14.1%",
      "Working capital days have increased from 73.8 days to 139 days"
    ]
  },
  {
    "symbol": "RISHABH",
    "name": "Rishabh Instruments Ltd",
    "sector": "Industrials",
    "industry": "Other Electrical Equipment",
    "currentPrice": 389,
    "marketCap": 1498,
    "profitabilityScore": 19,
    "valuationScore": 70,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 26.4,
    "roe": 3.87,
    "roce": 5.43,
    "dividendYield": 0,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 7.58% over last 3 years."
    ]
  },
  {
    "symbol": "RUSTOMJEE",
    "name": "Keystone Realtors Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 536,
    "marketCap": 6775,
    "profitabilityScore": 27,
    "valuationScore": 46,
    "financialHealthScore": 72,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 65.8,
    "roe": 7.53,
    "roce": 9.33,
    "dividendYield": 0.28,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Debtor days have improved from 21.7 to 15.2 days."
    ],
    "cons": [
      "Company has a low return on equity of 6.88% over last 3 years.",
      "Company might be capitalizing the interest cost",
      "Earnings include an other income of Rs.116 Cr."
    ]
  },
  {
    "symbol": "VENTIVE",
    "name": "Ventive Hospitality Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 714,
    "marketCap": 16613,
    "profitabilityScore": 46,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 71.8,
    "roe": 4.75,
    "roce": 11.7,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 3.35 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "WOCKPHARMA",
    "name": "Wockhardt Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1315,
    "marketCap": 21373,
    "profitabilityScore": 8,
    "valuationScore": 26,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 42,
    "riskScore": 53,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 390,
    "roe": -1.22,
    "roce": 3.75,
    "dividendYield": 0,
    "salesGrowth5Y": 1,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 4.67 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 1.15% over past five years."
    ]
  },
  {
    "symbol": "AGARWALEYE",
    "name": "Dr Agarwals Health Care Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 500,
    "marketCap": 15759,
    "profitabilityScore": 34,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 48,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 136,
    "roe": 4.76,
    "roce": 9.99,
    "dividendYield": 0,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 41.7% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 8.18 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 7.83% over last 3 years."
    ]
  },
  {
    "symbol": "ANURAS",
    "name": "Anupam Rasayan India Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 1241,
    "marketCap": 14107,
    "profitabilityScore": 28,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 93.3,
    "roe": 3.32,
    "roce": 7.33,
    "dividendYield": 0.06,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 4.42 times its book value",
      "Promoter holding has decreased over last quarter: -2.11%",
      "Company has a low return on equity of 5.39% over last 3 years."
    ]
  },
  {
    "symbol": "EMBASSY",
    "name": "Embassy Office Parks REIT",
    "sector": "Consumer Discretionary",
    "industry": "Real Estate Investment Trusts (REITs)",
    "currentPrice": 439,
    "marketCap": 41714,
    "profitabilityScore": 37,
    "valuationScore": 40,
    "financialHealthScore": 41,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 51,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 138,
    "roe": 7.05,
    "roce": 3.64,
    "dividendYield": 0.09,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 254%"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding is low: 7.69%",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "EMIL",
    "name": "Electronics Mart India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Diversified Retail",
    "currentPrice": 112,
    "marketCap": 4295,
    "profitabilityScore": 37,
    "valuationScore": 58,
    "financialHealthScore": 68,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 47.1,
    "roe": 11.1,
    "roce": 10.4,
    "dividendYield": 0,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.76 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "ICICIPRULI",
    "name": "ICICI Prudential Life Insurance Company Ltd",
    "sector": "Financial Services",
    "industry": "Life Insurance",
    "currentPrice": 616,
    "marketCap": 89308,
    "profitabilityScore": 36,
    "valuationScore": 30,
    "financialHealthScore": 51,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 68.3,
    "roe": 10.4,
    "roce": 11.9,
    "dividendYield": 0.14,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 7.01 times its book value",
      "Company has a low return on equity of 7.15% over last 3 years.",
      "Earnings include an other income of Rs.938 Cr."
    ]
  },
  {
    "symbol": "JUBLFOOD",
    "name": "Jubilant Foodworks Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Restaurants",
    "currentPrice": 584,
    "marketCap": 38555,
    "profitabilityScore": 47,
    "valuationScore": 18,
    "financialHealthScore": 63,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 129,
    "roe": 10.4,
    "roce": 13.1,
    "dividendYield": 0.21,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 26.6%"
    ],
    "cons": [
      "Stock is trading at 17.7 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 13.7% over last 3 years."
    ]
  },
  {
    "symbol": "JUBLINGREA",
    "name": "Jubilant Ingrevia Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 658,
    "marketCap": 10481,
    "profitabilityScore": 37,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 22,
    "volatilityScore": 57,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 36.4,
    "roe": 8.88,
    "roce": 11.2,
    "dividendYield": 0.76,
    "salesGrowth5Y": 331,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 33.5%"
    ],
    "cons": [
      "Stock is trading at 3.47 times its book value",
      "Company has a low return on equity of 9.24% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "JUNIPER",
    "name": "Juniper Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 225,
    "marketCap": 4991,
    "profitabilityScore": 30,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 40.1,
    "roe": 2.64,
    "roce": 6.31,
    "dividendYield": 0,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 22.9% CAGR over last 5 years"
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 1.42% over last 3 years."
    ]
  },
  {
    "symbol": "PRESTIGE",
    "name": "Prestige Estates Projects Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 1610,
    "marketCap": 69325,
    "profitabilityScore": 28,
    "valuationScore": 38,
    "financialHealthScore": 63,
    "growthScore": 50,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 90.6,
    "roe": 3.48,
    "roce": 7.66,
    "dividendYield": 0.11,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 4.39 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -1.99% over past five years."
    ]
  },
  {
    "symbol": "SYRMA",
    "name": "Syrma SGS Technology Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 729,
    "marketCap": 14057,
    "profitabilityScore": 38,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 18,
    "volatilityScore": 57,
    "riskScore": 54,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 61.2,
    "roe": 9.45,
    "roce": 11.7,
    "dividendYield": 0.21,
    "salesGrowth5Y": 34,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has been maintaining a healthy dividend payout of 20.9%"
    ],
    "cons": [
      "Stock is trading at 4.99 times its book value",
      "Promoter holding has decreased over last quarter: -3.45%",
      "Company has a low return on equity of 8.92% over last 3 years."
    ]
  },
  {
    "symbol": "ABB",
    "name": "ABB India Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 5058,
    "marketCap": 107217,
    "profitabilityScore": 2,
    "valuationScore": 30,
    "financialHealthScore": 78,
    "growthScore": 55,
    "stabilityScore": 23,
    "volatilityScore": 41,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 58.2,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0.87,
    "salesGrowth5Y": 34,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 25.7 times its book value"
    ]
  },
  {
    "symbol": "AEGISVOPAK",
    "name": "Aegis Vopak Terminals Ltd",
    "sector": "Energy",
    "industry": "Oil Storage & Transportation",
    "currentPrice": 243,
    "marketCap": 26897,
    "profitabilityScore": 45,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 149,
    "roe": 8.73,
    "roce": 7.01,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 5.67 times its book value",
      "Company has a low return on equity of 7.34% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "AMBER",
    "name": "Amber Enterprises India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 6451,
    "marketCap": 22711,
    "profitabilityScore": 43,
    "valuationScore": 18,
    "financialHealthScore": 73,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 102,
    "roe": 11.3,
    "roce": 14.5,
    "dividendYield": 0,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Debtor days have improved from 80.7 to 64.0 days.",
      "Company's median sales growth is 30.0% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 6.21 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding has decreased over last quarter: -1.43%"
    ]
  },
  {
    "symbol": "ATULAUTO",
    "name": "Atul Auto Ltd",
    "sector": "Industrials",
    "industry": "Commercial Vehicles",
    "currentPrice": 428,
    "marketCap": 1187,
    "profitabilityScore": 21,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.9,
    "roe": 4.99,
    "roce": 6.48,
    "dividendYield": 0,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.62 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 2.98% over last 3 years."
    ]
  },
  {
    "symbol": "BAJAJELEC",
    "name": "Bajaj Electricals Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 480,
    "marketCap": 5536,
    "profitabilityScore": 33,
    "valuationScore": 38,
    "financialHealthScore": 75,
    "growthScore": 55,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 59.9,
    "roe": 7.12,
    "roce": 11.6,
    "dividendYield": 0.62,
    "salesGrowth5Y": 71,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 24.5%"
    ],
    "cons": [
      "Stock is trading at 3.24 times its book value",
      "The company has delivered a poor sales growth of -0.65% over past five years.",
      "Company has a low return on equity of 8.93% over last 3 years."
    ]
  },
  {
    "symbol": "BHEL",
    "name": "Bharat Heavy Electricals Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 270,
    "marketCap": 93911,
    "profitabilityScore": 11,
    "valuationScore": 26,
    "financialHealthScore": 69,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 168,
    "roe": 2.12,
    "roce": 4.87,
    "dividendYield": 0.19,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 28.2%"
    ],
    "cons": [
      "Stock is trading at 3.85 times its book value",
      "The company has delivered a poor sales growth of 5.72% over past five years.",
      "Company has a low return on equity of 1.92% over last 3 years."
    ]
  },
  {
    "symbol": "GMMPFAUDLR",
    "name": "GMM Pfaudler Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 1065,
    "marketCap": 4789,
    "profitabilityScore": 38,
    "valuationScore": 50,
    "financialHealthScore": 67,
    "growthScore": 70,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 43.2,
    "roe": 6.64,
    "roce": 13.1,
    "dividendYield": 0.19,
    "salesGrowth5Y": 40,
    "promoterHolding": 0,
    "pros": [
      "Company's median sales growth is 17.6% of last 10 years"
    ],
    "cons": [
      "Promoter holding is low: 25.2%",
      "Dividend payout has been low at 9.20% of profits over last 3 years",
      "Promoter holding has decreased over last 3 years: -30.9%"
    ]
  },
  {
    "symbol": "INDOCO",
    "name": "Indoco Remedies Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 252,
    "marketCap": 2333,
    "profitabilityScore": 8,
    "valuationScore": 46,
    "financialHealthScore": 72,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 54,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 0,
    "roe": -7.02,
    "roce": -0.49,
    "dividendYield": 0.08,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company's working capital requirements have reduced from 61.0 days to 38.6 days"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 8.51% over past five years.",
      "Company has a low return on equity of 5.12% over last 3 years."
    ]
  },
  {
    "symbol": "KOLTEPATIL",
    "name": "Kolte Patil Developers Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 373,
    "marketCap": 3312,
    "profitabilityScore": 39,
    "valuationScore": 46,
    "financialHealthScore": 60,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 52.4,
    "roe": 13.2,
    "roce": 10.9,
    "dividendYield": 0,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Promoter holding has increased by 4.36% over last quarter."
    ],
    "cons": [
      "Stock is trading at 2.70 times its book value",
      "Company has a low return on equity of 5.45% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "NTPCGREEN",
    "name": "NTPC Green Energy Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 90.3,
    "marketCap": 76056,
    "profitabilityScore": 34,
    "valuationScore": 26,
    "financialHealthScore": 62,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 125,
    "roe": 3.85,
    "roce": 4.89,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Debtor days have improved from 306 to 85.3 days."
    ],
    "cons": [
      "Stock is trading at 4.06 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "NXST",
    "name": "Nexus Select Trust",
    "sector": "Consumer Discretionary",
    "industry": "Real Estate Investment Trusts (REITs)",
    "currentPrice": 162,
    "marketCap": 24454,
    "profitabilityScore": 33,
    "valuationScore": 52,
    "financialHealthScore": 45,
    "growthScore": 50,
    "stabilityScore": 37,
    "volatilityScore": 51,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 50.4,
    "roe": 2.89,
    "roce": 5.17,
    "dividendYield": 2.74,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 126%"
    ],
    "cons": [
      "Promoters have pledged or encumbered 77.4% of their holding."
    ]
  },
  {
    "symbol": "PTCIL",
    "name": "PTC Industries Ltd",
    "sector": "Industrials",
    "industry": "Other Industrial Products",
    "currentPrice": 18913,
    "marketCap": 28390,
    "profitabilityScore": 35,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 452,
    "roe": 6.07,
    "roce": 7.74,
    "dividendYield": 0,
    "salesGrowth5Y": 33,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 105% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 20.0 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 7.50% over last 3 years."
    ]
  },
  {
    "symbol": "RAMCOCEM",
    "name": "The Ramco Cements Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 996,
    "marketCap": 23544,
    "profitabilityScore": 14,
    "valuationScore": 26,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 18,
    "volatilityScore": 51,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 124,
    "roe": 1.42,
    "roce": 4.77,
    "dividendYield": 0.2,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.11 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 9.59% over past five years."
    ]
  },
  {
    "symbol": "SUDARSCHEM",
    "name": "Sudarshan Chemical Industries Ltd",
    "sector": "Commodities",
    "industry": "Dyes And Pigments",
    "currentPrice": 974,
    "marketCap": 7632,
    "profitabilityScore": 18,
    "valuationScore": 46,
    "financialHealthScore": 71,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 74.3,
    "roe": 3.07,
    "roce": 6.03,
    "dividendYield": 0.46,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 31.8%"
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -8.21%",
      "Promoter holding is low: 8.19%",
      "Company has a low return on equity of 5.52% over last 3 years."
    ]
  },
  {
    "symbol": "TTKPRESTIG",
    "name": "TTK Prestige Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 634,
    "marketCap": 8674,
    "profitabilityScore": 36,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 23,
    "volatilityScore": 57,
    "riskScore": 55,
    "suitableTiers": [
      3,
      4,
      5,
      6
    ],
    "riskCategory": "Moderate",
    "pe": 53.7,
    "roe": 7.42,
    "roce": 11.6,
    "dividendYield": 0.95,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 47.4%"
    ],
    "cons": [
      "Stock is trading at 4.56 times its book value",
      "The company has delivered a poor sales growth of 5.54% over past five years.",
      "Company has a low return on equity of 10.6% over last 3 years."
    ]
  },
  {
    "symbol": "ARVINDFASN",
    "name": "Arvind Fashions Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 470,
    "marketCap": 6287,
    "profitabilityScore": 31,
    "valuationScore": 30,
    "financialHealthScore": 63,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 57,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -3.63,
    "roce": 16.9,
    "dividendYield": 0.34,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 6.28 times its book value",
      "The company has delivered a poor sales growth of 5.04% over past five years.",
      "Company has a low return on equity of 3.11% over last 3 years."
    ]
  },
  {
    "symbol": "AWFIS",
    "name": "AWFIS Space Solutions Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 484,
    "marketCap": 3470,
    "profitabilityScore": 73,
    "valuationScore": 30,
    "financialHealthScore": 59,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 67.7,
    "roe": 26.1,
    "roce": 12.9,
    "dividendYield": 0,
    "salesGrowth5Y": 40,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 23.1% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 6.94 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -3.30%"
    ]
  },
  {
    "symbol": "CRAFTSMAN",
    "name": "Craftsman Automation Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 6909,
    "marketCap": 16499,
    "profitabilityScore": 43,
    "valuationScore": 30,
    "financialHealthScore": 71,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 63.3,
    "roe": 9.41,
    "roce": 11.7,
    "dividendYield": 0.07,
    "salesGrowth5Y": 31,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Dividend payout has been low at 7.83% of profits over last 3 years",
      "Promoter holding has decreased over last 3 years: -10.1%"
    ]
  },
  {
    "symbol": "CYIENTDLM",
    "name": "Cyient DLM Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 418,
    "marketCap": 3313,
    "profitabilityScore": 34,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 40.6,
    "roe": 7.33,
    "roce": 11,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.38 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Working capital days have increased from 51.4 days to 111 days"
    ]
  },
  {
    "symbol": "EPACK",
    "name": "Epack Durable Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 254,
    "marketCap": 2448,
    "profitabilityScore": 25,
    "valuationScore": 46,
    "financialHealthScore": 75,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 59.9,
    "roe": 5.98,
    "roce": 9.7,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Debtor days have improved from 72.8 to 50.1 days."
    ],
    "cons": [
      "Stock is trading at 2.56 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "HCG",
    "name": "Healthcare Global Enterprises Ltd",
    "sector": "Healthcare",
    "industry": "Hospital",
    "currentPrice": 705,
    "marketCap": 9908,
    "profitabilityScore": 29,
    "valuationScore": 18,
    "financialHealthScore": 62,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 48,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 280,
    "roe": 5.14,
    "roce": 8.56,
    "dividendYield": 0,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 19.3% CAGR over last 5 years",
      "Promoter holding has increased by 1.32% over last quarter."
    ],
    "cons": [
      "Stock is trading at 11.0 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "HLEGLAS",
    "name": "HLE Glascoat Ltd",
    "sector": "Industrials",
    "industry": "Industrial Products",
    "currentPrice": 436,
    "marketCap": 3027,
    "profitabilityScore": 44,
    "valuationScore": 30,
    "financialHealthScore": 70,
    "growthScore": 70,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 52.9,
    "roe": 10.7,
    "roce": 12.5,
    "dividendYield": 0.25,
    "salesGrowth5Y": 19,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 17.4%",
      "Debtor days have improved from 83.4 to 65.7 days."
    ],
    "cons": [
      "Promoter holding has decreased over last quarter: -1.14%",
      "Company has a low return on equity of 13.5% over last 3 years."
    ]
  },
  {
    "symbol": "MAHLIFE",
    "name": "Mahindra Lifespace Developers Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 396,
    "marketCap": 8453,
    "profitabilityScore": 7,
    "valuationScore": 46,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 21,
    "volatilityScore": 57,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 52.3,
    "roe": 2.19,
    "roce": 2.2,
    "dividendYield": 0.71,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is expected to give good quarter",
      "Company has been maintaining a healthy dividend payout of 49.2%"
    ],
    "cons": [
      "The company has delivered a poor sales growth of -9.43% over past five years.",
      "Tax rate seems low",
      "Company has a low return on equity of 2.86% over last 3 years."
    ]
  },
  {
    "symbol": "MINDSPACE",
    "name": "Mindspace Business Parks REIT",
    "sector": "Consumer Discretionary",
    "industry": "Real Estate Investment Trusts (REITs)",
    "currentPrice": 494,
    "marketCap": 30202,
    "profitabilityScore": 36,
    "valuationScore": 46,
    "financialHealthScore": 43,
    "growthScore": 40,
    "stabilityScore": 40,
    "volatilityScore": 51,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 58.1,
    "roe": 3.39,
    "roce": 6.53,
    "dividendYield": 3.25,
    "salesGrowth5Y": 151,
    "promoterHolding": 0,
    "pros": [
      "Stock is providing a good dividend yield of 3.25%.",
      "Company has been maintaining a healthy dividend payout of 298%"
    ],
    "cons": [
      "Company has a low return on equity of 3.10% over last 3 years.",
      "Company might be capitalizing the interest cost",
      "Promoters have pledged or encumbered 47.6% of their holding."
    ]
  },
  {
    "symbol": "POCL",
    "name": "Pondy Oxides & Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Diversified Metals",
    "currentPrice": 1287,
    "marketCap": 3927,
    "profitabilityScore": 47,
    "valuationScore": 42,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 44.2,
    "roe": 12.2,
    "roce": 15.6,
    "dividendYield": 0.27,
    "salesGrowth5Y": 89,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 5.72 times its book value",
      "Promoter holding has decreased over last quarter: -0.56%"
    ]
  },
  {
    "symbol": "SFL",
    "name": "Sheela Foam Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Furniture, Home Furnishing",
    "currentPrice": 589,
    "marketCap": 6400,
    "profitabilityScore": 13,
    "valuationScore": 34,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 105,
    "roe": 2.02,
    "roce": 3.52,
    "dividendYield": 0,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 10.1% over past five years."
    ]
  },
  {
    "symbol": "TMCV",
    "name": "Tata Motors Ltd",
    "sector": "Industrials",
    "industry": "Commercial Vehicles",
    "currentPrice": 360,
    "marketCap": 132730,
    "profitabilityScore": 4,
    "valuationScore": 56,
    "financialHealthScore": 49,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "VARROC",
    "name": "Varroc Engineering Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Components & Equipments",
    "currentPrice": 622,
    "marketCap": 9496,
    "profitabilityScore": 42,
    "valuationScore": 42,
    "financialHealthScore": 70,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 49,
    "roe": 7.37,
    "roce": 17.1,
    "dividendYield": 0.16,
    "salesGrowth5Y": 298,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company has delivered good profit growth of 298% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 5.64 times its book value",
      "The company has delivered a poor sales growth of -6.02% over past five years.",
      "Company has a low return on equity of -4.70% over last 3 years."
    ]
  },
  {
    "symbol": "VSTTILLERS",
    "name": "VST Tillers Tractors Ltd",
    "sector": "Industrials",
    "industry": "Tractors",
    "currentPrice": 5535,
    "marketCap": 4788,
    "profitabilityScore": 39,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 56,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 50.4,
    "roe": 9.39,
    "roce": 12.4,
    "dividendYield": 0.36,
    "salesGrowth5Y": 24,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company has been maintaining a healthy dividend payout of 18.8%"
    ],
    "cons": [
      "Stock is trading at 4.53 times its book value",
      "Debtor days have increased from 62.7 to 75.5 days."
    ]
  },
  {
    "symbol": "APOLLOPIPE",
    "name": "Apollo Pipes Ltd",
    "sector": "Industrials",
    "industry": "Plastic Products - Industrial",
    "currentPrice": 286,
    "marketCap": 1315,
    "profitabilityScore": 24,
    "valuationScore": 52,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 18,
    "volatilityScore": 63,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 51.1,
    "roe": 4.61,
    "roce": 7.32,
    "dividendYield": 0.25,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company's median sales growth is 19.7% of last 10 years"
    ],
    "cons": [
      "Promoter holding has decreased over last 3 years: -5.19%"
    ]
  },
  {
    "symbol": "BOROSCI",
    "name": "Borosil Scientific Ltd",
    "sector": "Industrials",
    "industry": "Glass - Industrial",
    "currentPrice": 122,
    "marketCap": 1082,
    "profitabilityScore": 30,
    "valuationScore": 46,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 59.7,
    "roe": 6.87,
    "roce": 10.3,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company's working capital requirements have reduced from 125 days to 86.0 days"
    ],
    "cons": [
      "Stock is trading at 2.67 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend"
    ]
  },
  {
    "symbol": "GODAVARIB",
    "name": "Godavari Biorefineries Ltd",
    "sector": "Fast Moving Consumer Goods",
    "industry": "Diversified FMCG",
    "currentPrice": 235,
    "marketCap": 1200,
    "profitabilityScore": 9,
    "valuationScore": 76,
    "financialHealthScore": 77,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 25.8,
    "roe": -3.79,
    "roce": 5.79,
    "dividendYield": 0,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Debtor days have improved from 34.9 to 27.0 days."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 5.09% over past five years.",
      "Company has a low return on equity of 0.51% over last 3 years."
    ]
  },
  {
    "symbol": "GREENLAM",
    "name": "Greenlam Industries Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Plywood Boards/ Laminates",
    "currentPrice": 235,
    "marketCap": 6003,
    "profitabilityScore": 26,
    "valuationScore": 18,
    "financialHealthScore": 72,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 189,
    "roe": 6.07,
    "roce": 7.41,
    "dividendYield": 0.17,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 5.27 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 11.3% over last 3 years."
    ]
  },
  {
    "symbol": "GUJALKALI",
    "name": "Gujarat Alkalies & Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 506,
    "marketCap": 3709,
    "profitabilityScore": 6,
    "valuationScore": 44,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 39,
    "volatilityScore": 63,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 24728,
    "roe": -1.13,
    "roce": -0.34,
    "dividendYield": 3.12,
    "salesGrowth5Y": 8,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.67 times its book value",
      "Stock is providing a good dividend yield of 3.12%."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 8.37% over past five years.",
      "Company has a low return on equity of 0.59% over last 3 years."
    ]
  },
  {
    "symbol": "HFCL",
    "name": "HFCL Ltd",
    "sector": "Telecommunication",
    "industry": "Telecom - Infrastructure",
    "currentPrice": 66.5,
    "marketCap": 9610,
    "profitabilityScore": 25,
    "valuationScore": 34,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 345,
    "roe": 4.42,
    "roce": 7.55,
    "dividendYield": 0.15,
    "salesGrowth5Y": 1,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -1.56%",
      "The company has delivered a poor sales growth of 1.15% over past five years."
    ]
  },
  {
    "symbol": "INDIACEM",
    "name": "India Cements Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 414,
    "marketCap": 12861,
    "profitabilityScore": 0,
    "valuationScore": 52,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -8.83,
    "roce": -5.49,
    "dividendYield": 0,
    "salesGrowth5Y": 22,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -4.37% over past five years.",
      "Company has a low return on equity of -6.65% over last 3 years."
    ]
  },
  {
    "symbol": "INOXGREEN",
    "name": "Inox Green Energy Services Ltd",
    "sector": "Utilities",
    "industry": "Power Generation",
    "currentPrice": 197,
    "marketCap": 7368,
    "profitabilityScore": 17,
    "valuationScore": 26,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 123,
    "roe": 1.02,
    "roce": 2.6,
    "dividendYield": 0,
    "salesGrowth5Y": 7,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 3.58 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "The company has delivered a poor sales growth of 7.34% over past five years."
    ]
  },
  {
    "symbol": "KIRLPNU",
    "name": "Kirloskar Pneumatic Company Ltd",
    "sector": "Industrials",
    "industry": "Compressors, Pumps & Diesel Engines",
    "currentPrice": 1000,
    "marketCap": 6489,
    "profitabilityScore": 4,
    "valuationScore": 54,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 24,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 34.2,
    "roe": 0,
    "roce": 0,
    "dividendYield": 1,
    "salesGrowth5Y": 44,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 5.70 times its book value"
    ]
  },
  {
    "symbol": "MFSL",
    "name": "Max Financial Services Ltd",
    "sector": "Financial Services",
    "industry": "Life Insurance",
    "currentPrice": 1695,
    "marketCap": 58516,
    "profitabilityScore": 25,
    "valuationScore": 18,
    "financialHealthScore": 51,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 358,
    "roe": 7.26,
    "roce": 8.13,
    "dividendYield": 0,
    "salesGrowth5Y": 21,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 11.0 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding is low: 1.71%"
    ]
  },
  {
    "symbol": "MTARTECH",
    "name": "MTAR Technologies Ltd",
    "sector": "Industrials",
    "industry": "Aerospace & Defense",
    "currentPrice": 2328,
    "marketCap": 7180,
    "profitabilityScore": 40,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 160,
    "roe": 7.39,
    "roce": 10.4,
    "dividendYield": 0,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 9.63 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Promoter holding is low: 31.4%"
    ]
  },
  {
    "symbol": "NYKAA",
    "name": "FSN E-Commerce Ventures Ltd",
    "sector": "Consumer Discretionary",
    "industry": "E-Retail/ E-Commerce",
    "currentPrice": 253,
    "marketCap": 72443,
    "profitabilityScore": 26,
    "valuationScore": 18,
    "financialHealthScore": 64,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 691,
    "roe": 5.16,
    "roce": 9.59,
    "dividendYield": 0,
    "salesGrowth5Y": 35,
    "promoterHolding": 0,
    "pros": [
      "Company's working capital requirements have reduced from 21.1 days to 13.7 days"
    ],
    "cons": [
      "Stock is trading at 52.1 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 2.97% over last 3 years."
    ]
  },
  {
    "symbol": "PAYTM",
    "name": "One 97 Communications Ltd",
    "sector": "Financial Services",
    "industry": "Financial Technology (Fintech)",
    "currentPrice": 1321,
    "marketCap": 84477,
    "profitabilityScore": 0,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 778,
    "roe": -10.3,
    "roce": -10.1,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company's median sales growth is 24.9% of last 10 years"
    ],
    "cons": [
      "Stock is trading at 5.50 times its book value",
      "Company has a low return on equity of -10.8% over last 3 years."
    ]
  },
  {
    "symbol": "PRIMO",
    "name": "Primo Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 22.3,
    "marketCap": 530,
    "profitabilityScore": 23,
    "valuationScore": 52,
    "financialHealthScore": 78,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 69,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 52.3,
    "roe": 0.89,
    "roce": 6.65,
    "dividendYield": 0,
    "salesGrowth5Y": 18,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Promoter holding is low: 31.4%",
      "Company has a low return on equity of 10.2% over last 3 years."
    ]
  },
  {
    "symbol": "PSPPROJECT",
    "name": "PSP Projects Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 844,
    "marketCap": 3349,
    "profitabilityScore": 27,
    "valuationScore": 34,
    "financialHealthScore": 76,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 119,
    "roe": 5.3,
    "roce": 8.69,
    "dividendYield": 0,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Promoter holding has increased by 8.68% over last quarter."
    ],
    "cons": [
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 10.9% over past five years."
    ]
  },
  {
    "symbol": "PVRINOX",
    "name": "PVR Inox Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Film Production, Distribution & Exhibition",
    "currentPrice": 1088,
    "marketCap": 10682,
    "profitabilityScore": 13,
    "valuationScore": 52,
    "financialHealthScore": 75,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -4.18,
    "roce": 2.72,
    "dividendYield": 0,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -3.66% over last 3 years."
    ]
  },
  {
    "symbol": "SWANCORP",
    "name": "Swan Corp Ltd",
    "sector": "Commodities",
    "industry": "Petrochemicals",
    "currentPrice": 444,
    "marketCap": 13910,
    "profitabilityScore": 0,
    "valuationScore": 76,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 23.9,
    "roe": -4.47,
    "roce": -1.44,
    "dividendYield": 0.02,
    "salesGrowth5Y": 71,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Debtor days have improved from 231 to 99.9 days."
    ],
    "cons": [
      "Company has a low return on equity of -0.52% over last 3 years.",
      "Company might be capitalizing the interest cost",
      "Earnings include an other income of Rs.2,000 Cr."
    ]
  },
  {
    "symbol": "SWIGGY",
    "name": "Swiggy Ltd",
    "sector": "Consumer Discretionary",
    "industry": "E-Retail/ E-Commerce",
    "currentPrice": 386,
    "marketCap": 96279,
    "profitabilityScore": 0,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -255,
    "roce": -29.2,
    "dividendYield": 0,
    "salesGrowth5Y": 34,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 9.82 times its book value",
      "Company has low interest coverage ratio.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "URBANCO",
    "name": "Urban Company Ltd",
    "sector": "Consumer Discretionary",
    "industry": "E-Retail/ E-Commerce",
    "currentPrice": 127,
    "marketCap": 18394,
    "profitabilityScore": 29,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 57,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 15.5,
    "roce": 2.37,
    "dividendYield": 0,
    "salesGrowth5Y": 39,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 8.04 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -39.5%"
    ]
  },
  {
    "symbol": "DELHIVERY",
    "name": "Delhivery Ltd",
    "sector": "Services",
    "industry": "Logistics Solution Provider",
    "currentPrice": 398,
    "marketCap": 29732,
    "profitabilityScore": 6,
    "valuationScore": 26,
    "financialHealthScore": 79,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 215,
    "roe": 1.52,
    "roce": 2.47,
    "dividendYield": 0,
    "salesGrowth5Y": 26,
    "promoterHolding": 0,
    "pros": [
      "Company has delivered good profit growth of 19.7% CAGR over last 5 years",
      "Company's working capital requirements have reduced from 118 days to 67.5 days"
    ],
    "cons": [
      "Stock is trading at 3.12 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -4.42% over last 3 years."
    ]
  },
  {
    "symbol": "ETERNAL",
    "name": "Eternal Ltd",
    "sector": "Consumer Discretionary",
    "industry": "E-Retail/ E-Commerce",
    "currentPrice": 285,
    "marketCap": 275459,
    "profitabilityScore": 7,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 41,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 1465,
    "roe": 1.71,
    "roce": 2.66,
    "dividendYield": 0,
    "salesGrowth5Y": 51,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company's working capital requirements have reduced from 95.5 days to 44.9 days"
    ],
    "cons": [
      "Stock is trading at 8.93 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of -0.64% over last 3 years."
    ]
  },
  {
    "symbol": "JSWCEMENT",
    "name": "JSW Cement Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 111,
    "marketCap": 15137,
    "profitabilityScore": 12,
    "valuationScore": 34,
    "financialHealthScore": 69,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 432,
    "roe": -4.81,
    "roce": 4.64,
    "dividendYield": 0,
    "salesGrowth5Y": 15,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 1.60% over last 3 years."
    ]
  },
  {
    "symbol": "MAHLOG",
    "name": "Mahindra Logistics Ltd",
    "sector": "Services",
    "industry": "Logistics Solution Provider",
    "currentPrice": 306,
    "marketCap": 3034,
    "profitabilityScore": 11,
    "valuationScore": 46,
    "financialHealthScore": 69,
    "growthScore": 80,
    "stabilityScore": 22,
    "volatilityScore": 63,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -7.96,
    "roce": 5.64,
    "dividendYield": 0.82,
    "salesGrowth5Y": 12,
    "promoterHolding": 0,
    "pros": [
      "Promoter holding has increased by 1.63% over last quarter."
    ],
    "cons": [
      "Stock is trading at 2.65 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 12.0% over past five years."
    ]
  },
  {
    "symbol": "ONESOURCE",
    "name": "OneSource Specialty Pharma Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 1666,
    "marketCap": 19095,
    "profitabilityScore": 14,
    "valuationScore": 26,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 48,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 138,
    "roe": 3.34,
    "roce": 5.52,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 3.23 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -17.7% over last 3 years."
    ]
  },
  {
    "symbol": "POLICYBZR",
    "name": "PB Fintech Ltd",
    "sector": "Financial Services",
    "industry": "Financial Technology (Fintech)",
    "currentPrice": 1915,
    "marketCap": 88439,
    "profitabilityScore": 18,
    "valuationScore": 18,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 45,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 192,
    "roe": 5.13,
    "roce": 5.9,
    "dividendYield": 0,
    "salesGrowth5Y": 45,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free.",
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 23.2% CAGR over last 5 years"
    ],
    "cons": [
      "Stock is trading at 13.0 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "WESTLIFE",
    "name": "Westlife Foodworld Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Restaurants",
    "currentPrice": 547,
    "marketCap": 8518,
    "profitabilityScore": 20,
    "valuationScore": 30,
    "financialHealthScore": 62,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 1.3,
    "roce": 7.08,
    "dividendYield": 0.14,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 74.1%"
    ],
    "cons": [
      "Stock is trading at 13.7 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 11.5% over last 3 years."
    ]
  },
  {
    "symbol": "YATRA",
    "name": "Yatra Online Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tour, Travel Related Services",
    "currentPrice": 162,
    "marketCap": 2534,
    "profitabilityScore": 18,
    "valuationScore": 50,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 58,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 45.6,
    "roe": 4.77,
    "roce": 5.34,
    "dividendYield": 0,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free.",
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 3.12 times its book value",
      "Company has a low return on equity of 2.90% over last 3 years.",
      "Earnings include an other income of Rs.26.3 Cr."
    ]
  },
  {
    "symbol": "ALLTIME",
    "name": "All Time Plastics Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Houseware",
    "currentPrice": 267,
    "marketCap": 1749,
    "profitabilityScore": 8,
    "valuationScore": 58,
    "financialHealthScore": 79,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 45.9,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.94 times its book value"
    ]
  },
  {
    "symbol": "CAMLINFINE",
    "name": "Camlin Fine Sciences Ltd",
    "sector": "Commodities",
    "industry": "Specialty Chemicals",
    "currentPrice": 146,
    "marketCap": 2741,
    "profitabilityScore": 22,
    "valuationScore": 26,
    "financialHealthScore": 75,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 170,
    "roe": -15,
    "roce": 11,
    "dividendYield": 0,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.08 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 9.70% over past five years."
    ]
  },
  {
    "symbol": "EIHAHOTELS",
    "name": "EIH Associated Hotels Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 351,
    "marketCap": 2138,
    "profitabilityScore": 51,
    "valuationScore": 18,
    "financialHealthScore": 62,
    "growthScore": 50,
    "stabilityScore": 24,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 185,
    "roe": 11.5,
    "roce": 13.2,
    "dividendYield": 1,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 73.1%"
    ],
    "cons": [
      "Stock is trading at 20.8 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 3.42% over past five years."
    ]
  },
  {
    "symbol": "EUREKAFORB",
    "name": "Eureka Forbes Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Household Appliances",
    "currentPrice": 629,
    "marketCap": 12177,
    "profitabilityScore": 14,
    "valuationScore": 46,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 65.7,
    "roe": 3.71,
    "roce": 5.07,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 2.69 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has a low return on equity of 2.45% over last 3 years."
    ]
  },
  {
    "symbol": "OMINFRAL",
    "name": "Om Infra Ltd",
    "sector": "Industrials",
    "industry": "Civil Construction",
    "currentPrice": 101,
    "marketCap": 974,
    "profitabilityScore": 12,
    "valuationScore": 64,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 19,
    "volatilityScore": 69,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 39.4,
    "roe": 3.34,
    "roce": 4.41,
    "dividendYield": 0.4,
    "salesGrowth5Y": 31,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Tax rate seems low",
      "Company has a low return on equity of 3.58% over last 3 years."
    ]
  },
  {
    "symbol": "RAIN",
    "name": "Rain Industries Ltd",
    "sector": "Commodities",
    "industry": "Petrochemicals",
    "currentPrice": 101,
    "marketCap": 3422,
    "profitabilityScore": 14,
    "valuationScore": 56,
    "financialHealthScore": 69,
    "growthScore": 50,
    "stabilityScore": 23,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -8.08,
    "roce": 4.5,
    "dividendYield": 0.99,
    "salesGrowth5Y": 4,
    "promoterHolding": 0,
    "pros": [
      "Stock is trading at 0.49 times its book value",
      "Company's working capital requirements have reduced from 48.1 days to 27.3 days"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 4.46% over past five years.",
      "Company has a low return on equity of -0.31% over last 3 years."
    ]
  },
  {
    "symbol": "SAGCEM",
    "name": "Sagar Cements Ltd",
    "sector": "Commodities",
    "industry": "Cement & Cement Products",
    "currentPrice": 204,
    "marketCap": 2643,
    "profitabilityScore": 0,
    "valuationScore": 52,
    "financialHealthScore": 72,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -10.3,
    "roce": -2.19,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -4.47% over last 3 years.",
      "Contingent liabilities of Rs.1,152 Cr."
    ]
  },
  {
    "symbol": "SAPPHIRE",
    "name": "Sapphire Foods India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Restaurants",
    "currentPrice": 240,
    "marketCap": 7656,
    "profitabilityScore": 20,
    "valuationScore": 18,
    "financialHealthScore": 74,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 3545,
    "roe": 2.03,
    "roce": 5.76,
    "dividendYield": 0,
    "salesGrowth5Y": 17,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 5.53 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "TIRUMALCHM",
    "name": "Thirumalai Chemicals Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 217,
    "marketCap": 2575,
    "profitabilityScore": 5,
    "valuationScore": 52,
    "financialHealthScore": 70,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -4.13,
    "roce": 0.26,
    "dividendYield": 0,
    "salesGrowth5Y": 14,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -5.74%",
      "Company has a low return on equity of 0.09% over last 3 years."
    ]
  },
  {
    "symbol": "TVSSRICHAK",
    "name": "TVS Srichakra Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Tyres & Rubber Products",
    "currentPrice": 4486,
    "marketCap": 3444,
    "profitabilityScore": 16,
    "valuationScore": 34,
    "financialHealthScore": 73,
    "growthScore": 80,
    "stabilityScore": 19,
    "volatilityScore": 63,
    "riskScore": 59,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 141,
    "roe": 2.35,
    "roce": 5.36,
    "dividendYield": 0.38,
    "salesGrowth5Y": 9,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 42.6%"
    ],
    "cons": [
      "Stock is trading at 2.98 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of 9.11% over past five years."
    ]
  },
  {
    "symbol": "ABFRL",
    "name": "Aditya Birla Fashion & Retail Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 74.6,
    "marketCap": 9112,
    "profitabilityScore": 5,
    "valuationScore": 52,
    "financialHealthScore": 66,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -10.9,
    "roce": -2.87,
    "dividendYield": 0,
    "salesGrowth5Y": 5,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Debtor days have improved from 39.1 to 18.5 days."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -3.51% over past five years.",
      "Company has a low return on equity of -11.0% over last 3 years."
    ]
  },
  {
    "symbol": "BRIGHOTEL",
    "name": "Brigade Hotel Ventures Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Hotels & Resorts",
    "currentPrice": 74.6,
    "marketCap": 2832,
    "profitabilityScore": 36,
    "valuationScore": 26,
    "financialHealthScore": 72,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 118,
    "roe": 0,
    "roce": 14.1,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 3.09 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "CHEMPLASTS",
    "name": "Chemplast Sanmar Ltd",
    "sector": "Commodities",
    "industry": "Commodity Chemicals",
    "currentPrice": 259,
    "marketCap": 4098,
    "profitabilityScore": 6,
    "valuationScore": 46,
    "financialHealthScore": 66,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -5.93,
    "roce": 1.83,
    "dividendYield": 0,
    "salesGrowth5Y": 28,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -1.39% over last 3 years."
    ]
  },
  {
    "symbol": "LANDMARK",
    "name": "Landmark Cars Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Auto Dealer",
    "currentPrice": 511,
    "marketCap": 2127,
    "profitabilityScore": 21,
    "valuationScore": 26,
    "financialHealthScore": 65,
    "growthScore": 80,
    "stabilityScore": 17,
    "volatilityScore": 63,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 102,
    "roe": 3.09,
    "roce": 7.99,
    "dividendYield": 0.1,
    "salesGrowth5Y": 13,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.77 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -1.75%"
    ]
  },
  {
    "symbol": "MAXESTATES",
    "name": "Max Estates Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 449,
    "marketCap": 7290,
    "profitabilityScore": 19,
    "valuationScore": 26,
    "financialHealthScore": 62,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 131,
    "roe": 2.01,
    "roce": 2.54,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.14 times its book value",
      "Company has a low return on equity of 0.95% over last 3 years.",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "SEQUENT",
    "name": "Sequent Scientific Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 195,
    "marketCap": 4939,
    "profitabilityScore": 19,
    "valuationScore": 18,
    "financialHealthScore": 75,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 114,
    "roe": 3.21,
    "roce": 8.47,
    "dividendYield": 0,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 6.07 times its book value",
      "The company has delivered a poor sales growth of 5.64% over past five years.",
      "Company has a low return on equity of -3.30% over last 3 years."
    ]
  },
  {
    "symbol": "STYLEBAAZA",
    "name": "Baazar Style Retail Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 264,
    "marketCap": 1968,
    "profitabilityScore": 32,
    "valuationScore": 38,
    "financialHealthScore": 63,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 60,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 54.4,
    "roe": 7.01,
    "roce": 8.93,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 4.32 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "BAJEL",
    "name": "Bajel Projects Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 170,
    "marketCap": 1961,
    "profitabilityScore": 24,
    "valuationScore": 34,
    "financialHealthScore": 70,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 61,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 153,
    "roe": 2.5,
    "roce": 12.1,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 2.78 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "DEVYANI",
    "name": "Devyani International Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Restaurants",
    "currentPrice": 134,
    "marketCap": 16516,
    "profitabilityScore": 20,
    "valuationScore": 30,
    "financialHealthScore": 63,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 61,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 0.54,
    "roce": 6.42,
    "dividendYield": 0,
    "salesGrowth5Y": 27,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 10.6 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -1.20%"
    ]
  },
  {
    "symbol": "POONAWALLA",
    "name": "Poonawalla Fincorp Ltd",
    "sector": "Financial Services",
    "industry": "Non Banking Financial Company (NBFC)",
    "currentPrice": 447,
    "marketCap": 36167,
    "profitabilityScore": 8,
    "valuationScore": 26,
    "financialHealthScore": 61,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 51,
    "riskScore": 61,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 166,
    "roe": -1.28,
    "roce": 4.77,
    "dividendYield": 0,
    "salesGrowth5Y": 11,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Promoter holding has increased by 1.50% over last quarter."
    ],
    "cons": [
      "Stock is trading at 3.68 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of 6.53% over last 3 years."
    ]
  },
  {
    "symbol": "SUVEN",
    "name": "Suven Life Sciences Ltd",
    "sector": "Healthcare",
    "industry": "Healthcare Research, Analytics & Technology",
    "currentPrice": 165,
    "marketCap": 3746,
    "profitabilityScore": 0,
    "valuationScore": 30,
    "financialHealthScore": 79,
    "growthScore": 55,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 61,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -87.2,
    "roce": -87,
    "dividendYield": 0,
    "salesGrowth5Y": 20,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Company is almost debt free."
    ],
    "cons": [
      "Stock is trading at 13.3 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -2.91%"
    ]
  },
  {
    "symbol": "ABREL",
    "name": "Aditya Birla Real Estate Ltd",
    "sector": "Commodities",
    "industry": "Paper & Paper Products",
    "currentPrice": 1658,
    "marketCap": 18504,
    "profitabilityScore": 6,
    "valuationScore": 38,
    "financialHealthScore": 62,
    "growthScore": 55,
    "stabilityScore": 17,
    "volatilityScore": 57,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -2.45,
    "roce": -0.16,
    "dividendYield": 0.12,
    "salesGrowth5Y": 34,
    "promoterHolding": 0,
    "pros": [
      "Company has been maintaining a healthy dividend payout of 39.1%"
    ],
    "cons": [
      "Stock is trading at 4.90 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -18.7% over past five years."
    ]
  },
  {
    "symbol": "DIGITIDE",
    "name": "Digitide Solutions Ltd",
    "sector": "Information Technology",
    "industry": "IT Enabled Services",
    "currentPrice": 129,
    "marketCap": 1925,
    "profitabilityScore": 6,
    "valuationScore": 46,
    "financialHealthScore": 71,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 57.9,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "EXICOM",
    "name": "Exicom Tele-Systems Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 104,
    "marketCap": 1441,
    "profitabilityScore": 4,
    "valuationScore": 52,
    "financialHealthScore": 69,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -16.5,
    "roce": -5.94,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -3.02%",
      "Company has a low return on equity of -2.69% over last 3 years."
    ]
  },
  {
    "symbol": "FIRSTCRY",
    "name": "Brainbees Solutions Ltd",
    "sector": "Consumer Discretionary",
    "industry": "E-Retail/ E-Commerce",
    "currentPrice": 280,
    "marketCap": 14618,
    "profitabilityScore": 0,
    "valuationScore": 38,
    "financialHealthScore": 79,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -4.07,
    "roce": -0.4,
    "dividendYield": 0,
    "salesGrowth5Y": 57,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.07 times its book value",
      "Company has low interest coverage ratio.",
      "Company has a low return on equity of -8.63% over last 3 years."
    ]
  },
  {
    "symbol": "GVT&D",
    "name": "GE Vernova T&D India Ltd",
    "sector": "Industrials",
    "industry": "Heavy Electrical Equipment",
    "currentPrice": 2757,
    "marketCap": 70570,
    "profitabilityScore": 5,
    "valuationScore": 18,
    "financialHealthScore": 62,
    "growthScore": 40,
    "stabilityScore": 17,
    "volatilityScore": 45,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 378,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0.18,
    "salesGrowth5Y": 87,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 65.5 times its book value",
      "Company has high debtors of 194 days.",
      "Promoter holding has decreased over last 3 years: -24.0%"
    ]
  },
  {
    "symbol": "KALAMANDIR",
    "name": "Sai Silks (Kalamandir) Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 151,
    "marketCap": 2309,
    "profitabilityScore": 5,
    "valuationScore": 68,
    "financialHealthScore": 49,
    "growthScore": 50,
    "stabilityScore": 21,
    "volatilityScore": 63,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 42.4,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0.66,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": []
  },
  {
    "symbol": "SPICEJET",
    "name": "SpiceJet Ltd",
    "sector": "Services",
    "industry": "Airline",
    "currentPrice": 32.5,
    "marketCap": 4594,
    "profitabilityScore": 40,
    "valuationScore": 56,
    "financialHealthScore": 6,
    "growthScore": 70,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 0,
    "roce": 29.4,
    "dividendYield": 0,
    "salesGrowth5Y": 16,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last quarter: -2.47%",
      "The company has delivered a poor sales growth of -15.5% over past five years."
    ]
  },
  {
    "symbol": "TARC",
    "name": "TARC Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 145,
    "marketCap": 4270,
    "profitabilityScore": 20,
    "valuationScore": 38,
    "financialHealthScore": 62,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 62,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -20,
    "roce": -4.83,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 3.96 times its book value",
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -24.5% over past five years."
    ]
  },
  {
    "symbol": "ROSSTECH",
    "name": "Rossell Techsys Ltd",
    "sector": "Industrials",
    "industry": "Aerospace & Defense",
    "currentPrice": 670,
    "marketCap": 2533,
    "profitabilityScore": 31,
    "valuationScore": 18,
    "financialHealthScore": 64,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 63,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 121,
    "roe": 6.08,
    "roce": 8.18,
    "dividendYield": 0.03,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Stock is trading at 17.8 times its book value",
      "Company might be capitalizing the interest cost"
    ]
  },
  {
    "symbol": "SHOPERSTOP",
    "name": "Shoppers Stop Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Diversified Retail",
    "currentPrice": 400,
    "marketCap": 4420,
    "profitabilityScore": 25,
    "valuationScore": 18,
    "financialHealthScore": 51,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 63,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 271,
    "roe": 3.39,
    "roce": 7.96,
    "dividendYield": 0,
    "salesGrowth5Y": 6,
    "promoterHolding": 0,
    "pros": [
      "Company has a good return on equity (ROE) track record: 3 Years ROE 29.2%"
    ],
    "cons": [
      "Stock is trading at 15.3 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "SIGNATURE",
    "name": "SignatureGlobal India Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 1111,
    "marketCap": 15615,
    "profitabilityScore": 32,
    "valuationScore": 18,
    "financialHealthScore": 52,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 63,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 201,
    "roe": 14.7,
    "roce": 5.42,
    "dividendYield": 0,
    "salesGrowth5Y": 60,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter",
      "Company has delivered good profit growth of 30.0% CAGR over last 5 years",
      "Company's working capital requirements have reduced from 125 days to 50.9 days"
    ],
    "cons": [
      "Stock is trading at 21.5 times its book value",
      "Though the company is reporting repeated profits, it is not paying out dividend",
      "Tax rate seems low"
    ]
  },
  {
    "symbol": "STLNETWORK",
    "name": "STL Networks Ltd",
    "sector": "Telecommunication",
    "industry": "Other Telecom Services",
    "currentPrice": 21.8,
    "marketCap": 1063,
    "profitabilityScore": 2,
    "valuationScore": 52,
    "financialHealthScore": 66,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 63,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Company has high debtors of 279 days."
    ]
  },
  {
    "symbol": "BLUSPRING",
    "name": "Bluspring Enterprises Ltd",
    "sector": "Services",
    "industry": "Diversified Commercial Services",
    "currentPrice": 65.1,
    "marketCap": 975,
    "profitabilityScore": 8,
    "valuationScore": 52,
    "financialHealthScore": 68,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 69,
    "riskScore": 64,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -5.12,
    "roce": 4.32,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "RBA",
    "name": "Restaurant Brands Asia Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Restaurants",
    "currentPrice": 60.8,
    "marketCap": 3548,
    "profitabilityScore": 2,
    "valuationScore": 38,
    "financialHealthScore": 53,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 64,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -28.2,
    "roce": -3.01,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 4.41 times its book value",
      "Company has low interest coverage ratio.",
      "Promoter holding is low: 11.3%"
    ]
  },
  {
    "symbol": "STLTECH",
    "name": "Sterlite Technologies Ltd",
    "sector": "Telecommunication",
    "industry": "Telecom -  Equipment & Accessories",
    "currentPrice": 95.8,
    "marketCap": 4678,
    "profitabilityScore": 10,
    "valuationScore": 34,
    "financialHealthScore": 69,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 64,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 1169,
    "roe": -6.28,
    "roce": 2.86,
    "dividendYield": 0,
    "salesGrowth5Y": 3,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Debtor days have improved from 105 to 75.4 days."
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -4.96% over past five years.",
      "Company has a low return on equity of -0.89% over last 3 years."
    ]
  },
  {
    "symbol": "EMAMIREAL",
    "name": "Emami Realty Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Residential, Commercial Projects",
    "currentPrice": 82.5,
    "marketCap": 364,
    "profitabilityScore": 0,
    "valuationScore": 56,
    "financialHealthScore": 45,
    "growthScore": 80,
    "stabilityScore": 16,
    "volatilityScore": 69,
    "riskScore": 65,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": 0,
    "roce": -1.92,
    "dividendYield": 0,
    "salesGrowth5Y": 10,
    "promoterHolding": 0,
    "pros": [
      "Company is expected to give good quarter"
    ],
    "cons": [
      "Company has low interest coverage ratio.",
      "The company has delivered a poor sales growth of -39.8% over past five years.",
      "The company has delivered a poor sales growth of -39."
    ]
  },
  {
    "symbol": "ABLBL",
    "name": "Aditya Birla Lifestyle Brands Ltd",
    "sector": "Consumer Discretionary",
    "industry": "Speciality Retail",
    "currentPrice": 129,
    "marketCap": 15682,
    "profitabilityScore": 6,
    "valuationScore": 18,
    "financialHealthScore": 50,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 67,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 144,
    "roe": 0,
    "roce": 0,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Stock is trading at 12.0 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "OLAELEC",
    "name": "Ola Electric Mobility Ltd",
    "sector": "Consumer Discretionary",
    "industry": "2/3 Wheelers",
    "currentPrice": 34.1,
    "marketCap": 15045,
    "profitabilityScore": 0,
    "valuationScore": 38,
    "financialHealthScore": 49,
    "growthScore": 40,
    "stabilityScore": 16,
    "volatilityScore": 57,
    "riskScore": 67,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 0,
    "roe": -108,
    "roce": -28.1,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt."
    ],
    "cons": [
      "Stock is trading at 3.47 times its book value",
      "Company has low interest coverage ratio."
    ]
  },
  {
    "symbol": "RAMCOSYS",
    "name": "Ramco Systems Ltd",
    "sector": "Information Technology",
    "industry": "Software Products",
    "currentPrice": 602,
    "marketCap": 2249,
    "profitabilityScore": 0,
    "valuationScore": 18,
    "financialHealthScore": 73,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 63,
    "riskScore": 67,
    "suitableTiers": [
      4,
      5,
      6
    ],
    "riskCategory": "Moderate-High",
    "pe": 259,
    "roe": -10.9,
    "roce": -5.4,
    "dividendYield": 0,
    "salesGrowth5Y": 1,
    "promoterHolding": 0,
    "pros": [
      "Company has reduced debt.",
      "Debtor days have improved from 78.6 to 57.0 days."
    ],
    "cons": [
      "Stock is trading at 6.94 times its book value",
      "The company has delivered a poor sales growth of 0.78% over past five years.",
      "Company has a low return on equity of -37.3% over last 3 years."
    ]
  },
  {
    "symbol": "SPARC",
    "name": "Sun Pharma Advanced Research Company Ltd",
    "sector": "Healthcare",
    "industry": "Pharmaceuticals",
    "currentPrice": 140,
    "marketCap": 4544,
    "profitabilityScore": 0,
    "valuationScore": 56,
    "financialHealthScore": -21,
    "growthScore": 50,
    "stabilityScore": 16,
    "volatilityScore": 54,
    "riskScore": 72,
    "suitableTiers": [
      5,
      6
    ],
    "riskCategory": "High",
    "pe": 0,
    "roe": 0,
    "roce": -279,
    "dividendYield": 0,
    "salesGrowth5Y": 0,
    "promoterHolding": 0,
    "pros": [],
    "cons": [
      "Company has low interest coverage ratio.",
      "Promoter holding has decreased over last 3 years: -3.42%"
    ]
  }
];

// Statistics
export const stockStats = {
  "total": 634,
  "byRiskCategory": {
    "Low": 100,
    "Moderate": 452,
    "Moderate-High": 81,
    "High": 1
  },
  "byTier": {
    "1": 0,
    "2": 100,
    "3": 552,
    "4": 633,
    "5": 634,
    "6": 634
  },
  "bySector": {
    "Healthcare": 73,
    "Commodities": 73,
    "Telecommunication": 8,
    "Energy": 18,
    "Fast Moving Consumer Goods": 35,
    "Information Technology": 26,
    "Financial Services": 72,
    "Consumer Discretionary": 168,
    "Industrials": 117,
    "Utilities": 16,
    "Services": 26,
    "Diversified": 2
  }
};

// Helper functions
export const getStocksForTier = (tier: number): ScoredStock[] => {
  return scoredStocks.filter(stock => stock.suitableTiers.includes(tier));
};

export const getStocksBySector = (sector: string): ScoredStock[] => {
  return scoredStocks.filter(stock => stock.sector === sector);
};

export const getStocksByRiskCategory = (category: ScoredStock['riskCategory']): ScoredStock[] => {
  return scoredStocks.filter(stock => stock.riskCategory === category);
};

export const getTopStocksForTier = (tier: number, limit: number = 10): ScoredStock[] => {
  return getStocksForTier(tier).slice(0, limit);
};

export const getSectors = (): string[] => {
  return [...new Set(scoredStocks.map(s => s.sector))].sort();
};
