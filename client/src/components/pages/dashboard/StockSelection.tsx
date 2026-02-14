import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import {
  TrendingUp,
  Plus,
  Minus,
  AlertCircle,
  ChevronRight,
  Search,
  RefreshCcw,
  Target,
  Shield,
  X,
  Loader2,
  Sparkles,
  Trash2,
  Edit3,
  Package,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

// Risk tier definitions
const riskTiers = [
  { tier: 1, name: 'Capital Preservation', description: 'Ultra conservative, focus on capital safety', color: 'emerald', riskLevel: 'Very Low' },
  { tier: 2, name: 'Conservative Income', description: 'Low risk with steady income focus', color: 'green', riskLevel: 'Low' },
  { tier: 3, name: 'Moderate Balanced', description: 'Balanced growth and stability', color: 'blue', riskLevel: 'Moderate' },
  { tier: 4, name: 'Growth Focused', description: 'Higher growth with some volatility', color: 'yellow', riskLevel: 'Moderate-High' },
  { tier: 5, name: 'Aggressive Growth', description: 'High growth, accepts significant risk', color: 'orange', riskLevel: 'High' },
  { tier: 6, name: 'Maximum Growth', description: 'Maximum returns, highest risk tolerance', color: 'red', riskLevel: 'Very High' },
];
import useAssessmentStore from '../../../store/assessmentStore';
import { getStocksForTier, ScoredStock, getSectors } from '../../../data/scoredStocks';
import { fetchLivePrice, LivePrice } from '../../../services/priceService';
import {
  generateSmartBasket,
  GeneratedBasket,
  BasketItem,
  removeFromBasket,
  updateBasketUnits,
  addToBasket
} from '../../../utils/basketGenerator';
import {
  generatePortfolio,
  PortfolioAllocation,
  tierAllocations
} from '../../../data/assetRecommendations';

const StockSelection: React.FC = () => {
  const navigate = useNavigate();
  const { results } = useAssessmentStore();

  // User's tier and capital
  const initialTier = useMemo(() => {
    if (results?.tier?.tier) return results.tier.tier;
    const saved = localStorage.getItem('riskAssessmentResult');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.tier || 3;
      } catch (e) {
        return 3;
      }
    }
    return 3;
  }, [results]);

  const userCapital = useMemo(() => {
    const saved = localStorage.getItem('userCapital') || sessionStorage.getItem('userCapital');
    const parsed = parseInt(saved || '100000', 10);
    return isNaN(parsed) ? 100000 : parsed;
  }, []);

  // Current tier state (can be changed by user)
  const [currentTier, setCurrentTier] = useState<number>(initialTier);
  const [showTierModal, setShowTierModal] = useState(false);
  const [selectedNewTier, setSelectedNewTier] = useState<number | null>(null);

  // Basket state
  const [basket, setBasket] = useState<GeneratedBasket | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);

  // Asset allocation state (ETFs, Debt, Gold)
  const [assetAllocation, setAssetAllocation] = useState<PortfolioAllocation[]>([]);
  const tierAllocation = tierAllocations[currentTier] || tierAllocations[3];

  // Add stock modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('All');

  // Edit units modal
  const [editingItem, setEditingItem] = useState<BasketItem | null>(null);
  const [editUnits, setEditUnits] = useState(0);

  // Live prices
  const [livePrices, setLivePrices] = useState<Map<string, LivePrice>>(new Map());
  const [loadingPrices, setLoadingPrices] = useState<Set<string>>(new Set());
  const [isRefreshingPrices, setIsRefreshingPrices] = useState(false);

  // Handle tier change request
  const handleTierChangeRequest = (newTier: number) => {
    if (newTier !== currentTier) {
      setSelectedNewTier(newTier);
      setShowTierModal(true);
    }
  };

  // Confirm tier change and regenerate basket
  const confirmTierChange = async () => {
    if (selectedNewTier) {
      setCurrentTier(selectedNewTier);
      sessionStorage.setItem('userTier', selectedNewTier.toString());
      setShowTierModal(false);
      setSelectedNewTier(null);

      // Regenerate basket with new tier
      setIsGenerating(true);
      setBasket(null);
      setLivePrices(new Map());
    }
  };

  // Available stocks for adding (based on current tier)
  const availableStocks = useMemo(() => getStocksForTier(currentTier), [currentTier]);
  const sectors = useMemo(() => ['All', ...getSectors()], []);

  // Stocks not in basket (for add modal)
  const stocksNotInBasket = useMemo(() => {
    if (!basket) return availableStocks;
    const basketSymbols = new Set(basket.items.map(item => item.stock.symbol));
    return availableStocks.filter(stock => !basketSymbols.has(stock.symbol));
  }, [availableStocks, basket]);

  // Filtered stocks for add modal
  const filteredStocks = useMemo(() => {
    return stocksNotInBasket.filter(stock => {
      const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'All' || stock.sector === selectedSector;
      return matchesSearch && matchesSector;
    });
  }, [stocksNotInBasket, searchTerm, selectedSector]);

  // Fetch live price
  const fetchPriceForStock = useCallback(async (symbol: string): Promise<number | null> => {
    if (loadingPrices.has(symbol)) return null;

    setLoadingPrices(prev => new Set(prev).add(symbol));

    try {
      const livePrice = await fetchLivePrice(symbol, 'NSE');
      if (!livePrice.error && livePrice.price > 0) {
        setLivePrices(prev => new Map(prev).set(symbol, livePrice));
        return livePrice.price;
      }
    } catch (error) {
      console.error(`Error fetching price for ${symbol}:`, error);
    } finally {
      setLoadingPrices(prev => {
        const next = new Set(prev);
        next.delete(symbol);
        return next;
      });
    }
    return null;
  }, [loadingPrices]);

  // Generate basket on mount or when tier changes
  useEffect(() => {
    const generateBasketAndAllocation = async () => {
      setIsGenerating(true);

      // Calculate equity portion of capital based on tier allocation
      const equityPortion = userCapital * (tierAllocation.equity.target / 100);

      // Generate stock basket for equity portion only
      const generatedBasket = generateSmartBasket(currentTier, equityPortion);
      setBasket(generatedBasket);

      // Generate asset allocation (ETFs, Debt, Gold)
      const allocation = generatePortfolio(userCapital, currentTier);
      setAssetAllocation(allocation);

      // Fetch live prices for basket items
      for (const item of generatedBasket.items) {
        await fetchPriceForStock(item.stock.symbol);
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      setIsGenerating(false);
    };

    generateBasketAndAllocation();
  }, [currentTier, userCapital, tierAllocation.equity.target]);

  // Refresh all prices
  const refreshAllPrices = async () => {
    if (!basket) return;
    setIsRefreshingPrices(true);

    for (const item of basket.items) {
      await fetchPriceForStock(item.stock.symbol);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    setIsRefreshingPrices(false);
  };

  // Get display price
  const getDisplayPrice = (symbol: string, staticPrice: number): { price: number; isLive: boolean; change?: number } => {
    const live = livePrices.get(symbol);
    if (live && !live.error && live.price > 0) {
      return { price: live.price, isLive: true, change: live.changePercent };
    }
    return { price: staticPrice, isLive: false };
  };

  // Remove stock from basket
  const handleRemove = (symbol: string) => {
    if (!basket) return;
    setBasket(removeFromBasket(basket, symbol, userCapital));
  };

  // Update units
  const handleUpdateUnits = () => {
    if (!basket || !editingItem) return;
    setBasket(updateBasketUnits(basket, editingItem.stock.symbol, editUnits, userCapital));
    setEditingItem(null);
  };

  // Add stock to basket
  const handleAddStock = async (stock: ScoredStock) => {
    if (!basket) return;

    // Fetch price first
    const livePrice = await fetchPriceForStock(stock.symbol);
    const price = livePrice || stock.currentPrice;

    // Calculate suggested units based on remaining capital
    const suggestedAmount = Math.min(basket.unusedCapital * 0.5, userCapital * 0.15);
    const units = Math.max(1, Math.floor(suggestedAmount / price));

    setBasket(addToBasket(basket, stock, units, price));
    setShowAddModal(false);
  };

  // Proceed to broker
  const handleProceed = () => {
    if (!basket || basket.items.length === 0) return;

    // Convert basket to order cart format
    const orderCart = basket.items.map(item => ({
      stock: {
        symbol: item.stock.symbol,
        name: item.stock.name,
        currentPrice: item.price
      },
      quantity: item.units,
      orderType: 'MKT' as const,
      amount: item.amount
    }));

    sessionStorage.setItem('orderCart', JSON.stringify(orderCart));
    sessionStorage.setItem('userCapital', userCapital.toString());
    navigate('/dashboard/broker-selection');
  };

  // Calculate basket with live prices
  const basketWithLivePrices = useMemo(() => {
    if (!basket) return null;

    let totalAmount = 0;
    const updatedItems = basket.items.map(item => {
      const priceData = getDisplayPrice(item.stock.symbol, item.price);
      const amount = item.units * priceData.price;
      totalAmount += amount;
      return { ...item, price: priceData.price, amount, isLive: priceData.isLive };
    });

    return {
      ...basket,
      items: updatedItems,
      totalAmount,
      unusedCapital: userCapital - totalAmount
    };
  }, [basket, livePrices, userCapital]);

  // Get current tier info
  const currentTierInfo = riskTiers.find(t => t.tier === currentTier);

  if (isGenerating) {
    return (
      <OnboardingLayout currentStep={2}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Generating Your Smart Basket</h2>
            <p className="text-slate-500">
              {availableStocks.length} stocks match your Tier {currentTier} ({currentTierInfo?.name || 'Moderate'}) profile
            </p>
            <p className="text-slate-400 text-sm mt-1">Filtered from 634 scored stocks based on risk compatibility</p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              <span className="text-sm text-slate-600">Optimizing allocation & fetching live prices...</span>
            </div>
          </div>
        </div>
      </OnboardingLayout>
    );
  }

  const CustomHeader = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Your Smart Basket</h1>
          <p className="text-xs text-slate-500 font-medium">
            {basketWithLivePrices?.strategy} • {basketWithLivePrices?.totalStocks} stocks
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={refreshAllPrices}
          disabled={isRefreshingPrices}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition disabled:opacity-50"
        >
          <RefreshCcw className={`w-3.5 h-3.5 ${isRefreshingPrices ? 'animate-spin' : ''}`} />
          <span className="text-xs font-bold hidden sm:inline">Refresh</span>
        </button>

        <div className="flex items-center gap-4 bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-100">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Capital</p>
            <p className="font-bold text-slate-900 text-sm">₹{userCapital.toLocaleString('en-IN')}</p>
          </div>
          <div className="w-px h-6 bg-slate-200" />
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Invested</p>
            <p className="font-bold text-green-600 text-sm">
              ₹{basketWithLivePrices?.totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 }) || 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <OnboardingLayout currentStep={2} customHeader={CustomHeader} maxWidth="w-full">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <main className="max-w-6xl mx-auto px-6 py-8">
          {/* Strategy Info */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{basketWithLivePrices?.strategy}</h2>
                <p className="text-blue-100 text-sm mb-4">
                  AI-curated basket based on your risk profile. Diversified across{' '}
                  {basketWithLivePrices?.diversification.sectors.length} sectors.
                </p>
                <div className="flex flex-wrap gap-2">
                  {basketWithLivePrices?.diversification.sectors.map(sector => (
                    <span key={sector} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-white text-blue-600 px-4 py-2 rounded-xl font-bold hover:bg-blue-50 transition flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Stock
              </button>
            </div>
          </div>

          {/* Recommended Allocation - ETFs, Debt, Gold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 mb-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Recommended Allocation</h3>
            </div>

            <div className="space-y-3">
              {assetAllocation.map((category, idx) => {
                const colorMap: Record<string, { bg: string; border: string; text: string }> = {
                  'Equity (ETFs)': { bg: 'bg-blue-50', border: 'border-l-blue-500', text: 'text-blue-600' },
                  'Debt (Funds & Bonds)': { bg: 'bg-green-50', border: 'border-l-green-500', text: 'text-green-600' },
                  'Gold': { bg: 'bg-yellow-50', border: 'border-l-yellow-500', text: 'text-yellow-600' },
                };
                const colors = colorMap[category.category] || { bg: 'bg-purple-50', border: 'border-l-purple-500', text: 'text-purple-600' };

                return (
                  <div
                    key={category.category}
                    className={`${colors.bg} rounded-xl p-4 border-l-4 ${colors.border}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-bold text-slate-900">{category.category}</p>
                        <p className="text-sm text-slate-500">
                          {category.assets.map(a => a.asset.name).join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${colors.text}`}>{category.totalPercentage}%</p>
                        <p className="text-sm text-slate-500">₹{category.totalAmount.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Direct Stocks */}
              {basketWithLivePrices && basketWithLivePrices.items.length > 0 && (
                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-l-purple-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">Direct Stocks</p>
                      <p className="text-sm text-slate-500">
                        {basketWithLivePrices.totalStocks} individual stocks
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">
                        {Math.round((basketWithLivePrices.totalAmount / userCapital) * 100)}%
                      </p>
                      <p className="text-sm text-slate-500">
                        ₹{basketWithLivePrices.totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Fine-tune Your Risk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Fine-tune Your Risk</h3>
                <p className="text-sm text-slate-500">Answer a few quick questions to adjust your portfolio risk level</p>
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
                <Target className="w-5 h-5" />
                <span className="font-medium">Adjust Risk</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  if (currentTier > 1) {
                    handleTierChangeRequest(currentTier - 1);
                  }
                }}
                disabled={currentTier <= 1}
                className="p-4 border-2 border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-600">Lower Risk</span>
              </button>
              <button
                onClick={() => {
                  if (currentTier < 6) {
                    handleTierChangeRequest(currentTier + 1);
                  }
                }}
                disabled={currentTier >= 6}
                className="p-4 border-2 border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="font-bold text-orange-600">Higher Risk</span>
              </button>
            </div>
          </motion.div>

          {/* Basket Items - Direct Stocks */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Direct Stock Holdings</h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">{basketWithLivePrices?.totalStocks} stocks</span>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {basketWithLivePrices?.items.map((item, idx) => {
                const priceData = getDisplayPrice(item.stock.symbol, item.price);
                const isLoading = loadingPrices.has(item.stock.symbol);

                return (
                  <motion.div
                    key={item.stock.symbol}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      {/* Stock Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-slate-900">{item.stock.symbol}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${item.stock.riskCategory === 'Low' ? 'bg-green-100 text-green-700' :
                            item.stock.riskCategory === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                            {item.stock.riskCategory}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 truncate">{item.stock.name}</p>
                        <p className="text-xs text-slate-400 mt-1">{item.reason}</p>
                      </div>

                      {/* Units */}
                      <div className="text-center">
                        <p className="text-xs text-slate-500">Units</p>
                        <p className="text-lg font-bold text-slate-900">{item.units}</p>
                        <button
                          onClick={() => {
                            setEditingItem(item);
                            setEditUnits(item.units);
                          }}
                          className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-1"
                        >
                          <Edit3 className="w-3 h-3" />
                          Edit
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right min-w-[100px]">
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin text-blue-500 ml-auto" />
                        ) : (
                          <>
                            <p className="font-bold text-slate-900">₹{priceData.price.toLocaleString('en-IN')}</p>
                            <p className={`text-xs flex items-center justify-end gap-1 ${priceData.isLive ? 'text-green-600' : 'text-slate-400'
                              }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${priceData.isLive ? 'bg-green-500' : 'bg-slate-300'
                                }`} />
                              {priceData.isLive ? 'Live' : 'Static'}
                            </p>
                          </>
                        )}
                      </div>

                      {/* Amount & Allocation */}
                      <div className="text-right min-w-[120px]">
                        <p className="font-bold text-slate-900">
                          ₹{item.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </p>
                        <p className="text-xs text-slate-500">{item.allocation.toFixed(1)}% of basket</p>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => handleRemove(item.stock.symbol)}
                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary & Proceed */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Stocks</p>
                <p className="text-2xl font-bold text-slate-900">{basketWithLivePrices?.totalStocks}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Investment</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{basketWithLivePrices?.totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Unused Capital</p>
                <p className="text-2xl font-bold text-slate-600">
                  ₹{basketWithLivePrices?.unusedCapital.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Sectors</p>
                <p className="text-2xl font-bold text-slate-900">
                  {basketWithLivePrices?.diversification.sectors.length}
                </p>
              </div>
            </div>

            <button
              onClick={handleProceed}
              disabled={!basketWithLivePrices || basketWithLivePrices.items.length === 0}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Proceed to Broker
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </main>

        {/* Edit Units Modal */}
        <AnimatePresence>
          {editingItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setEditingItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">Edit Units - {editingItem.stock.symbol}</h3>

                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => setEditUnits(Math.max(1, editUnits - 1))}
                    className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 transition"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <input
                    type="number"
                    value={editUnits}
                    onChange={e => setEditUnits(Math.max(1, Number(e.target.value)))}
                    className="flex-1 text-center text-2xl font-bold px-4 py-3 border border-slate-200 rounded-xl"
                  />
                  <button
                    onClick={() => setEditUnits(editUnits + 1)}
                    className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 transition"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-center text-slate-600 mb-6">
                  New Amount: <strong>₹{(editUnits * editingItem.price).toLocaleString('en-IN')}</strong>
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setEditingItem(null)}
                    className="flex-1 py-3 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateUnits}
                    className="flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Update
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Stock Modal */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowAddModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-4 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Add Stock to Basket</h3>
                    <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-slate-100 rounded-lg">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search stocks..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <select
                      value={selectedSector}
                      onChange={e => setSelectedSector(e.target.value)}
                      className="px-4 py-2 border border-slate-200 rounded-xl"
                    >
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="overflow-y-auto max-h-[50vh]">
                  {filteredStocks.slice(0, 30).map(stock => (
                    <div
                      key={stock.symbol}
                      className="p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition flex items-center gap-4"
                      onClick={() => handleAddStock(stock)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{stock.symbol}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${stock.riskCategory === 'Low' ? 'bg-green-100 text-green-700' :
                            stock.riskCategory === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>{stock.riskCategory}</span>
                        </div>
                        <p className="text-sm text-slate-500">{stock.name}</p>
                        <p className="text-xs text-slate-400">{stock.sector}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₹{stock.currentPrice.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-slate-500">Risk: {stock.riskScore}</p>
                      </div>
                      <Plus className="w-5 h-5 text-blue-600" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tier Change Confirmation Modal */}
        <AnimatePresence>
          {showTierModal && selectedNewTier && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => {
                setShowTierModal(false);
                setSelectedNewTier(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const currentTierData = riskTiers.find(t => t.tier === currentTier);
                  const newTierData = riskTiers.find(t => t.tier === selectedNewTier);
                  const isUpgrade = selectedNewTier > currentTier;

                  return (
                    <>
                      <div className="flex items-center justify-center mb-6">
                        <div className={`p-4 rounded-full ${isUpgrade ? 'bg-orange-100' : 'bg-blue-100'}`}>
                          {isUpgrade ? (
                            <TrendingUp className="w-8 h-8 text-orange-600" />
                          ) : (
                            <Shield className="w-8 h-8 text-blue-600" />
                          )}
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">
                        {isUpgrade ? 'Increase Risk Level?' : 'Decrease Risk Level?'}
                      </h2>
                      <p className="text-center text-slate-500 mb-6">
                        Your basket will be regenerated with new stocks
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-5 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="text-center flex-1">
                            <span className="text-xs text-slate-500 block mb-1">Current</span>
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 font-bold text-sm mb-1">
                              Tier {currentTier}
                            </span>
                            <p className="text-sm font-medium text-slate-700">{currentTierData?.name}</p>
                            <p className="text-xs text-slate-500">{currentTierData?.riskLevel}</p>
                          </div>

                          <div className="px-4">
                            <ArrowRight className={`w-6 h-6 ${isUpgrade ? 'text-orange-500' : 'text-blue-500'}`} />
                          </div>

                          <div className="text-center flex-1">
                            <span className="text-xs text-slate-500 block mb-1">New</span>
                            <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm mb-1 ${isUpgrade ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                              }`}>
                              Tier {selectedNewTier}
                            </span>
                            <p className="text-sm font-medium text-slate-700">{newTierData?.name}</p>
                            <p className="text-xs text-slate-500">{newTierData?.riskLevel}</p>
                          </div>
                        </div>
                      </div>

                      {/* Warning Message */}
                      <div className={`p-4 rounded-xl mb-6 ${isUpgrade ? 'bg-orange-50 border border-orange-200' : 'bg-blue-50 border border-blue-200'
                        }`}>
                        <div className="flex items-start gap-3">
                          <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isUpgrade ? 'text-orange-600' : 'text-blue-600'
                            }`} />
                          <div>
                            <p className={`text-sm font-medium ${isUpgrade ? 'text-orange-800' : 'text-blue-800'}`}>
                              {isUpgrade
                                ? 'Higher risk stocks will be included for potentially higher returns'
                                : 'Only lower risk stocks will be selected for more stability'
                              }
                            </p>
                            <p className={`text-xs mt-1 ${isUpgrade ? 'text-orange-600' : 'text-blue-600'}`}>
                              Your current basket will be replaced with new AI-curated stocks.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setShowTierModal(false);
                            setSelectedNewTier(null);
                          }}
                          className="flex-1 py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={confirmTierChange}
                          className={`flex-1 py-4 rounded-xl font-bold text-white transition flex items-center justify-center gap-2 ${isUpgrade
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                            }`}
                        >
                          <CheckCircle className="w-5 h-5" />
                          Confirm & Regenerate
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OnboardingLayout>
  );
};

export default StockSelection;
