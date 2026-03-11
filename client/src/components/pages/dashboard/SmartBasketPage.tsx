import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Bot,
    ArrowRight,
    Trash2,
    Plus,
    ShieldCheck,
    RefreshCcw,
    PlusCircle,
    MinusCircle,
    Search,
    Loader2,
    X,
    AlertCircle
} from 'lucide-react';
import { fetchLivePrice, LivePrice } from '../../../services/priceService';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';

interface PortfolioItem {
    symbol: string;
    companyName: string;
    quantity: number;
    ltp: number;
    amount: number;
    riskScore: number;
    sector: string;
    reason: string;
    isLive?: boolean;
}

export const SmartBasketPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [adjusting, setAdjusting] = useState(false);
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
    const [userRiskScore, setUserRiskScore] = useState(50);
    const [totalCapital, setTotalCapital] = useState(50000);
    const [livePrices, setLivePrices] = useState<Map<string, LivePrice>>(new Map());
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddStock, setShowAddStock] = useState(false);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searching, setSearching] = useState(false);

    const handleSearch = async (val: string) => {
        setSearchTerm(val);
        if (val.length < 3) {
            setSearchResults([]);
            return;
        }

        setSearching(true);
        try {
            // Using existing backend search endpoint
            const response = await axios.get(`http://localhost:5000/api/stocks/search?query=${val}`);
            // If it returns a single object (compatible with stockController.ts)
            setSearchResults(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        } finally {
            setSearching(false);
        }
    };

    const confirmAddStock = (stock: any) => {
        // Calculate a reasonable quantity based on price
        const price = stock.last_price || 100;
        const qty = Math.max(1, Math.floor((totalCapital * 0.05) / price));

        const newItem: PortfolioItem = {
            symbol: stock.tradingsymbol || stock.symbol,
            companyName: stock.name || stock.tradingsymbol,
            quantity: qty,
            ltp: price,
            amount: price * qty,
            riskScore: 50, // Default for custom stocks
            sector: 'Custom',
            reason: 'Added by user'
        };

        setPortfolio([...portfolio, newItem]);
        setShowAddStock(false);
        setSearchTerm('');
        setSearchResults([]);

        // Refresh price for the new stock
        refreshPrices([...portfolio, newItem]);
    };

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedRisk = localStorage.getItem('riskAssessmentResult');
        const savedAmount = localStorage.getItem('investmentAmount');

        let risk = 50;
        if (savedRisk) {
            try {
                const parsed = JSON.parse(savedRisk);
                risk = parsed.riskNumber || parsed.totalScore || 50;
                setUserRiskScore(risk);
            } catch (e) { }
        }

        let amount = 50000;
        if (savedAmount) {
            amount = parseFloat(savedAmount);
            if (!isNaN(amount)) setTotalCapital(amount);
            else amount = 50000;
        }

        fetchPortfolio(risk, amount);
    }, []);

    const fetchPortfolio = async (risk: number, capital: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:5000/api/portfolio/generate', {
                riskScore: risk,
                totalCapital: capital
            });
            if (response.data.portfolio && response.data.portfolio.length > 0) {
                setPortfolio(response.data.portfolio);
            } else {
                setError("No stocks match your profile yet. Try adjusting the risk score.");
            }
            setUserRiskScore(response.data.userRiskScore);
            refreshPrices(response.data.portfolio || []);
        } catch (error: any) {
            console.error('Error fetching portfolio:', error);
            setError(error.response?.data?.details || "Failed to connect to the Smart Theta engine. Ensure the backend server is running.");
        } finally {
            setLoading(false);
        }
    };

    const adjustRisk = async (adjustment: number) => {
        setAdjusting(true);
        try {
            const response = await axios.post('http://localhost:5000/api/portfolio/adjust-risk', {
                currentRiskScore: userRiskScore,
                adjustment,
                totalCapital
            });
            setPortfolio(response.data.portfolio);
            setUserRiskScore(response.data.userRiskScore);
            refreshPrices(response.data.portfolio);
        } catch (error) {
            console.error('Error adjusting risk:', error);
        } finally {
            setAdjusting(false);
        }
    };

    const refreshPrices = async (items: PortfolioItem[]) => {
        const newPrices = new Map(livePrices);
        for (const item of items) {
            try {
                // Symbols might be Symbol.NSE, we need to extract the base symbol
                const baseSymbol = item.symbol.split('.')[0];
                const price = await fetchLivePrice(baseSymbol, 'NSE');
                if (price.price > 0) {
                    newPrices.set(item.symbol, price);
                }
            } catch (e) { }
        }
        setLivePrices(newPrices);
    };

    const handleUpdateQuantity = (symbol: string, delta: number) => {
        setPortfolio(portfolio.map(item => {
            if (item.symbol === symbol) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty, amount: item.ltp * newQty };
            }
            return item;
        }));
    };

    const handleRemoveStock = (symbol: string) => {
        setPortfolio(portfolio.filter(s => s.symbol !== symbol));
    };

    const handleAddStock = () => {
        setShowAddStock(true);
    };

    const portfolioWithLive = useMemo(() => {
        return portfolio.map(item => {
            const live = livePrices.get(item.symbol);
            if (live) {
                return {
                    ...item,
                    ltp: live.price,
                    amount: live.price * item.quantity,
                    isLive: true
                };
            }
            return item;
        });
    }, [portfolio, livePrices]);

    const totalAllocated = portfolioWithLive.reduce((sum, item) => sum + item.amount, 0);

    const sectorDistribution = useMemo(() => {
        const sectors: Record<string, number> = {};
        portfolio.forEach(item => {
            sectors[item.sector] = (sectors[item.sector] || 0) + 1;
        });
        return sectors;
    }, [portfolio]);

    const allocationBreakdown = useMemo(() => {
        let equityPct = 60;
        let debtPct = 32;
        let goldPct = 8;

        if (userRiskScore < 30) {
            equityPct = 30; debtPct = 60; goldPct = 10;
        } else if (userRiskScore > 70) {
            equityPct = 80; debtPct = 10; goldPct = 10;
        }

        return [
            {
                type: 'Equity (ETFs)',
                instruments: 'UTI Nifty 50 ETF, HDFC Sensex ETF',
                pct: equityPct,
                amount: totalCapital * (equityPct / 100)
            },
            {
                type: 'Debt (Funds & Bonds)',
                instruments: 'HDFC Overnight Fund, Axis Liquid Fund, SBI Short Duration Fund',
                pct: debtPct,
                amount: totalCapital * (debtPct / 100)
            },
            {
                type: 'Gold',
                instruments: 'Sovereign Gold Bond 2026-27, Nippon India Gold ETF',
                pct: goldPct,
                amount: totalCapital * (goldPct / 100)
            },
            {
                type: 'Direct Stocks',
                instruments: `${portfolio.length} individual stocks`,
                pct: Math.round((totalAllocated / totalCapital) * 100),
                amount: totalAllocated
            }
        ];
    }, [userRiskScore, totalCapital, portfolio.length, totalAllocated]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                <Bot className="w-12 h-12 text-blue-600 animate-bounce mb-4" />
                <h2 className="text-xl font-black text-slate-900">Generating Your Smart Basket</h2>
                <p className="text-slate-500 font-medium">Crunching 700+ stocks based on Smart Theta Risk Engine...</p>
            </div>
        );
    }

    return (
        <OnboardingLayout currentStep={3}>
            <div className="max-w-6xl mx-auto pb-20 px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-indigo-100">
                            <Bot size={12} />
                            AI Powered Smart Basket
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none mb-2">Configure Your Portfolio</h1>
                        <p className="text-slate-500 font-medium max-w-xl mb-4">
                            We've optimized these stocks specifically for your <span className="text-blue-600 font-bold">{userRiskScore}</span> risk profile.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <div className="px-3 py-1.5 bg-slate-100/50 border border-slate-200 rounded-lg">
                                <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Diversification</p>
                                <p className="text-xs font-bold text-slate-700">{Object.keys(sectorDistribution).length} Sectors</p>
                            </div>
                            {Object.entries(sectorDistribution).map(([sector, count]) => (
                                <div key={sector} className="px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg">
                                    <p className="text-[10px] font-black text-blue-400 uppercase leading-none mb-1">{sector}</p>
                                    <p className="text-xs font-bold text-blue-700">{count} Stock{count > 1 ? 's' : ''}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => refreshPrices(portfolio)}
                            className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-blue-600 hover:border-blue-100 transition-all"
                        >
                            <RefreshCcw size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/dashboard/broker-selection')}
                            className="h-14 px-8 bg-blue-600 text-white rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            Connect Broker
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-8 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 text-rose-600 animate-in slide-in-from-top-2">
                        <AlertCircle size={20} />
                        <p className="text-sm font-bold">{error}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Risk Adjustment & Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Risk Engine Card */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />

                            <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Smart Theta Risk Engine</h3>

                            <div className="flex items-center justify-between mb-8">
                                <div className="text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Risk Score</p>
                                    <p className="text-5xl font-black">{userRiskScore}</p>
                                </div>
                                <div className="h-12 w-px bg-white/10" />
                                <div className="text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Category</p>
                                    <p className="text-lg font-black text-blue-400">{userRiskScore > 70 ? 'Aggressive' : userRiskScore > 40 ? 'Moderate' : 'Conservative'}</p>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                                <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Portfolio Strategy</p>
                                <p className="text-xs font-bold text-blue-400">Risk-Matched Optimization</p>
                            </div>

                            {adjusting && (
                                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                                    <Loader2 className="animate-spin text-blue-500" size={32} />
                                </div>
                            )}
                        </div>

                        {/* Summary Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Portfolio Summary</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-500">Total Stocks</span>
                                    <span className="text-lg font-black text-slate-900">{portfolio.length}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-500">Allocated Capital</span>
                                    <span className="text-lg font-black text-slate-900">₹{totalAllocated.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-500">Unused Capital</span>
                                    <span className="text-lg font-black text-emerald-600">₹{(totalCapital - totalAllocated).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-50">
                                    <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                                        <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={16} />
                                        <p className="text-[10px] text-blue-800 font-bold leading-relaxed uppercase">
                                            Compliance Note: Portfolio adheres to 30% max sector exposure and minimum 5 stocks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Basket Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                                <h3 className="font-black text-slate-900 text-lg">Stock Bucket</h3>
                                <button
                                    onClick={handleAddStock}
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-all font-bold text-xs"
                                >
                                    <Plus size={16} />
                                    Add Custom Stock
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-slate-50/30">
                                            <th className="text-left py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Company / Sector</th>
                                            <th className="text-center py-5 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk</th>
                                            <th className="text-right py-5 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Qty</th>
                                            <th className="text-right py-5 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">LTP</th>
                                            <th className="text-right py-5 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                                            <th className="text-center py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50/50">
                                        {portfolioWithLive.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/30 transition-colors group">
                                                <td className="py-5 px-8">
                                                    <div>
                                                        <p className="font-black text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">{item.symbol}</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tight">{item.sector}</p>
                                                    </div>
                                                </td>
                                                <td className="py-5 px-4 text-center">
                                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${item.riskScore > 70 ? 'bg-rose-50 text-rose-600 border border-rose-100' : item.riskScore > 40 ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                                                        {item.riskScore}
                                                    </span>
                                                </td>
                                                <td className="py-5 px-4 text-right">
                                                    <div className="flex items-center justify-end gap-3">
                                                        <button
                                                            onClick={() => handleUpdateQuantity(item.symbol, -1)}
                                                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600 transition-colors"
                                                        >
                                                            <MinusCircle size={14} />
                                                        </button>
                                                        <p className="font-black text-slate-900 text-sm w-6 text-center">{item.quantity}</p>
                                                        <button
                                                            onClick={() => handleUpdateQuantity(item.symbol, 1)}
                                                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600 transition-colors"
                                                        >
                                                            <PlusCircle size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-5 px-4 text-right">
                                                    <div className="flex flex-col items-end">
                                                        <p className="font-bold text-slate-700 text-sm">₹{item.ltp.toLocaleString('en-IN')}</p>
                                                        {item.isLive && (
                                                            <span className="flex items-center gap-1 text-[8px] font-black text-green-500 uppercase tracking-widest animate-pulse">
                                                                <div className="w-1 h-1 bg-green-500 rounded-full" />
                                                                Live
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-5 px-4 text-right">
                                                    <p className="font-black text-blue-600 text-sm">₹{item.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                                                </td>
                                                <td className="py-5 px-8 text-center">
                                                    <button
                                                        onClick={() => handleRemoveStock(item.symbol)}
                                                        className="p-2 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {portfolio.length === 0 && (
                                <div className="py-20 text-center">
                                    <AlertCircle className="mx-auto text-slate-200 mb-4" size={48} />
                                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No stocks in your basket</p>
                                    <button onClick={handleAddStock} className="mt-4 text-blue-600 font-black text-sm hover:underline">Add Stocks Manually</button>
                                </div>
                            )}

                            <div className="p-8 bg-slate-50/50 border-t border-slate-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-blue-600">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-tight">Recommended Allocation</p>
                                            <p className="text-[10px] text-slate-500 font-medium">Strategic asset distribution</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 overflow-hidden border border-slate-100 rounded-2xl">
                                    <table className="w-full text-left bg-white">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="py-3 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset Class</th>
                                                <th className="py-3 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Instruments</th>
                                                <th className="py-3 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Allocation</th>
                                                <th className="py-3 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {allocationBreakdown.map((row, i) => (
                                                <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                                                    <td className="py-3 px-4 text-xs font-black text-slate-900">{row.type}</td>
                                                    <td className="py-3 px-4 text-[10px] font-medium text-slate-500">{row.instruments}</td>
                                                    <td className="py-3 px-4 text-xs font-bold text-slate-900 text-right">{row.pct}%</td>
                                                    <td className="py-3 px-4 text-xs font-black text-blue-600 text-right">₹{row.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Broker Note */}
                        <div className="bg-amber-50 rounded-3xl p-6 border-2 border-dashed border-amber-200 flex items-center gap-4">
                            <div className="p-3 bg-amber-200/50 rounded-2xl text-amber-700">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-amber-900 text-sm">Ready for Execution</h4>
                                <p className="text-xs text-amber-700 font-medium">Once you connect your Zerodha account, these stocks will be executed in real-time at market prices (MKT orders).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Stock Modal - Mocked */}
            {showAddStock && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in duration-300">
                        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                            <h3 className="text-xl font-black text-slate-900">Add Stock to Basket</h3>
                            <button onClick={() => setShowAddStock(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                                <X size={20} className="text-slate-400" />
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="relative mb-6">
                                <Search className="absolute left-4 top-3.5 text-slate-300" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by Symbol or Name (e.g. RELIANCE)"
                                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-900 outline-none focus:border-blue-500 transition-colors"
                                    value={searchTerm}
                                    onChange={e => handleSearch(e.target.value)}
                                />
                                {searching && <Loader2 className="absolute right-4 top-3.5 text-blue-500 animate-spin" size={18} />}
                            </div>

                            <div className="max-h-[300px] overflow-y-auto space-y-2">
                                {searchResults.map((stock, i) => (
                                    <button
                                        key={i}
                                        onClick={() => confirmAddStock(stock)}
                                        className="w-full p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-between group"
                                    >
                                        <div className="text-left">
                                            <p className="font-black text-slate-900 group-hover:text-blue-600 transition-colors">{stock.tradingsymbol || stock.symbol}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase">{stock.name || stock.exchange}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <p className="text-sm font-black text-slate-900">₹{stock.last_price || '---'}</p>
                                            <Plus size={16} className="text-blue-600" />
                                        </div>
                                    </button>
                                ))}

                                {searchTerm.length >= 3 && searchResults.length === 0 && !searching && (
                                    <div className="py-12 text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                                        No stocks found matching "{searchTerm}"
                                    </div>
                                )}

                                {searchTerm.length < 3 && (
                                    <div className="py-12 text-center bg-slate-50 border-2 border-dashed border-slate-100 rounded-2xl">
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Type at least 3 characters to search</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="p-8 bg-slate-50 border-t border-slate-100">
                            <button
                                onClick={() => setShowAddStock(false)}
                                className="w-full py-4 bg-slate-900 text-white rounded-xl font-black shadow-lg shadow-slate-200 active:scale-95 transition-all"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </OnboardingLayout>
    );
};
