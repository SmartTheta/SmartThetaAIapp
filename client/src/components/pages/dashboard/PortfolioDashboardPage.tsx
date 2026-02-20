
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp,
    TrendingDown,
    Bell,
    AlertTriangle,
    CheckCircle,
    ArrowUpRight,
    ArrowDownRight,
    ArrowRight,
    Filter,
    RefreshCcw,
    Download,
    Wallet,
    Target,
    Shield,
    Clock,
    Info,
    X,
    LayoutGrid
} from 'lucide-react';
import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    AreaChart,
    Area,
    PieChart as RechartsPie,
    Pie,
    Cell
} from 'recharts';
import useAssessmentStore from '../../../store/assessmentStore';
import { generatePortfolio } from '../../../data/assetRecommendations';
import { getTopStocksForTier } from '../../../data/scoredStocks';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';

// Stock alerts data
interface StockAlert {
    id: string;
    symbol: string;
    name: string;
    type: 'negative' | 'warning' | 'positive';
    message: string;
    timestamp: string;
    impact: string;
    action: string;
}

const sampleAlerts: StockAlert[] = [
    {
        id: '1',
        symbol: 'TATASTEEL',
        name: 'Tata Steel Ltd',
        type: 'warning',
        message: 'Steel prices under pressure due to China export surge',
        timestamp: '2 hours ago',
        impact: 'Medium',
        action: 'Monitor position, consider reducing if price drops 5%'
    },
    {
        id: '2',
        symbol: 'HDFCBANK',
        name: 'HDFC Bank',
        type: 'positive',
        message: 'Q3 results beat estimates, NII growth strong',
        timestamp: '1 day ago',
        impact: 'Positive',
        action: 'Hold - fundamentals remain strong'
    },
    {
        id: '3',
        symbol: 'ADANIENT',
        name: 'Adani Enterprises',
        type: 'negative',
        message: 'Regulatory scrutiny on new project approvals',
        timestamp: '3 hours ago',
        impact: 'High',
        action: 'Review position - high volatility expected'
    }
];

// Executed stock from order execution
interface ExecutedStock {
    symbol: string;
    name: string;
    executedQty: number;
    executedPrice: number;
    totalValue: number;
    status: 'success' | 'partial';
    orderId: string;
    timestamp: string;
}

interface PortfolioSummary {
    totalInvested: number;
    successCount: number;
    partialCount: number;
    failedCount: number;
    executionDate: string;
}

export const PortfolioDashboardPage: React.FC = () => {
    const location = useLocation();
    const { results } = useAssessmentStore();
    const broker = location.state?.broker;

    const [timeRange, setTimeRange] = useState<'1W' | '1M' | '3M' | '6M' | '1Y' | 'ALL'>('1M');
    const [selectedAlert, setSelectedAlert] = useState<StockAlert | null>(null);
    const [showAlerts, setShowAlerts] = useState(false);
    const [showRiskModal, setShowRiskModal] = useState(false);
    const [selectedNewTier, setSelectedNewTier] = useState<number | null>(null);
    const [currentUserTier, setCurrentUserTier] = useState<number>(3);

    // All 6 risk tiers with their details
    const riskTiers = [
        { tier: 1, name: 'Capital Preservation', description: 'Ultra conservative, focus on capital safety', color: 'emerald', riskLevel: 'Very Low' },
        { tier: 2, name: 'Conservative Income', description: 'Low risk with steady income focus', color: 'green', riskLevel: 'Low' },
        { tier: 3, name: 'Moderate Balanced', description: 'Balanced growth and stability', color: 'blue', riskLevel: 'Moderate' },
        { tier: 4, name: 'Growth Focused', description: 'Higher growth with some volatility', color: 'yellow', riskLevel: 'Moderate-High' },
        { tier: 5, name: 'Aggressive Growth', description: 'High growth, accepts significant risk', color: 'orange', riskLevel: 'High' },
        { tier: 6, name: 'Maximum Growth', description: 'Maximum returns, highest risk tolerance', color: 'red', riskLevel: 'Very High' },
    ];

    // Initialize current tier from results or sessionStorage
    React.useEffect(() => {
        const savedTier = sessionStorage.getItem('currentUserTier');
        if (savedTier) {
            setCurrentUserTier(parseInt(savedTier));
        } else if (results?.tier?.tier) {
            setCurrentUserTier(results.tier.tier);
        }
    }, [results]);


    const confirmTierChange = () => {
        if (selectedNewTier) {
            setCurrentUserTier(selectedNewTier);
            sessionStorage.setItem('currentUserTier', selectedNewTier.toString());
            setShowRiskModal(false);
            setSelectedNewTier(null);
            // Note: In a real app, this would trigger portfolio rebalancing
        }
    };

    // Determine capital from sessionStorage
    const userCapital = useMemo(() => {
        const saved = sessionStorage.getItem('userCapital');
        return saved ? parseInt(saved) : 100000;
    }, []);

    // Load executed portfolio from sessionStorage
    const executedPortfolio = useMemo((): ExecutedStock[] => {
        const saved = sessionStorage.getItem('executedPortfolio');
        return saved ? JSON.parse(saved) : [];
    }, []);

    const portfolioSummary = useMemo((): PortfolioSummary | null => {
        const saved = sessionStorage.getItem('portfolioSummary');
        return saved ? JSON.parse(saved) : null;
    }, []);

    // Calculate total invested from executed orders
    const actualInvested = useMemo(() => {
        return executedPortfolio.reduce((sum, stock) => sum + stock.totalValue, 0);
    }, [executedPortfolio]);

    // Generate portfolio based on tier (for asset allocation view)
    const portfolio = useMemo(() => generatePortfolio(userCapital, currentUserTier), [currentUserTier, userCapital]);

    // Get recommended stocks for user's tier
    const recommendedStocks = useMemo(() => getTopStocksForTier(currentUserTier, 10), [currentUserTier]);

    // Performance data based on time range - use actual invested amount
    const performanceData = useMemo(() => {
        const days = {
            '1W': 7,
            '1M': 30,
            '3M': 90,
            '6M': 180,
            '1Y': 365,
            'ALL': 730
        };
        // Use actual invested amount for performance simulation
        const baseAmount = actualInvested > 0 ? actualInvested : userCapital;
        const data = [];
        let value = baseAmount;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days[timeRange]);

        for (let i = 0; i <= days[timeRange]; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            const change = (Math.random() - 0.45) * 2; // Slight upward bias
            value = value * (1 + change / 100);
            data.push({
                date: date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
                fullDate: date.toISOString().split('T')[0],
                value: Math.round(value),
                change: change.toFixed(2)
            });
        }
        return data;
    }, [timeRange, actualInvested, userCapital]);

    // Calculate returns - use actual invested amount if available
    const investedAmount = actualInvested > 0 ? actualInvested : userCapital;
    const currentValue = performanceData[performanceData.length - 1]?.value ?? investedAmount;
    const startValue = performanceData[0]?.value ?? investedAmount;
    const absoluteReturn = currentValue - startValue;
    const percentageReturn = ((currentValue - startValue) / startValue * 100).toFixed(2);
    const isPositive = absoluteReturn >= 0;

    // Pie chart data for allocation - use executed portfolio if available
    const allocationData = useMemo(() => {
        if (executedPortfolio.length > 0) {
            // Group executed stocks by their allocation
            return executedPortfolio.map(stock => ({
                name: stock.symbol,
                value: Math.round((stock.totalValue / actualInvested) * 100),
                amount: stock.totalValue
            }));
        }
        // Fallback to category-based allocation
        return portfolio.map(cat => ({
            name: cat.category.split(' ')[0],
            value: cat.totalPercentage,
            amount: cat.totalAmount
        }));
    }, [executedPortfolio, actualInvested, portfolio]);

    const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#6366F1', '#84CC16', '#06B6D4'];

    const CustomHeader = (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 sm:gap-4">
                <div>
                    <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">My Portfolio</h1>
                    <div className="flex items-center gap-2 mt-0.5">
                        {broker && (
                            <span className="flex items-center gap-1 text-[10px] sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                                {broker.name}
                            </span>
                        )}
                        <span className="flex items-center gap-1 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                            Live
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
                {/* Alerts button */}
                <button
                    onClick={() => setShowAlerts(true)}
                    className="relative p-2 hover:bg-slate-100 rounded-xl transition border border-transparent"
                >
                    <Bell className="w-5 h-5 text-slate-600" />
                    {sampleAlerts.filter(a => a.type === 'negative' || a.type === 'warning').length > 0 && (
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                    )}
                </button>

                <button className="p-2 hover:bg-slate-100 rounded-xl transition border border-transparent">
                    <RefreshCcw className="w-5 h-5 text-slate-600" />
                </button>

                <button className="p-2 hover:bg-slate-100 rounded-xl transition border border-transparent hidden sm:flex">
                    <Download className="w-5 h-5 text-slate-600" />
                </button>
            </div>
        </div>
    );

    const steps = [
        { name: 'Portfolio Dashboard', icon: LayoutGrid, path: '/dashboard/portfolio', status: 'current' as const },
        { name: 'Connect Another Broker', icon: Wallet, path: '/dashboard/broker-selection', status: 'upcoming' as const }
    ];

    return (
        <OnboardingLayout currentStep={0} steps={steps} customHeader={CustomHeader} maxWidth="w-full">
            <div className="min-h-screen bg-slate-50/50 p-4 sm:p-8">

                <main className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
                    {/* Value Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-slate-100 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-2 mb-2 sm:mb-4">
                                <div className="p-1.5 sm:p-2 bg-blue-50 rounded-lg">
                                    <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                </div>
                                <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">Balance</span>
                            </div>
                            <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                                ₹{currentValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-slate-100 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-2 mb-2 sm:mb-4">
                                <div className="p-1.5 sm:p-2 bg-purple-50 rounded-lg">
                                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                </div>
                                <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">Invested</span>
                            </div>
                            <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                                ₹{investedAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </p>
                            {portfolioSummary && (
                                <span className="text-[9px] text-slate-400 block mt-1 font-bold uppercase">
                                    {portfolioSummary.successCount + portfolioSummary.partialCount} active orders
                                </span>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`bg-white rounded-2xl p-4 sm:p-6 border-2 shadow-sm hover:shadow-lg transition-all ${isPositive ? 'border-green-100' : 'border-red-100'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-2 sm:mb-4">
                                <div className={`p-1.5 sm:p-2 rounded-lg ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
                                    {isPositive ? (
                                        <TrendingUp className={`w-4 h-4 sm:w-5 sm:h-5 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    ) : (
                                        <TrendingDown className={`w-4 h-4 sm:w-5 sm:h-5 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    )}
                                </div>
                                <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">Returns</span>
                            </div>
                            <div className="flex flex-col mt-1">
                                <p className={`text-xl sm:text-2xl font-black ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {isPositive ? '+' : ''}₹{absoluteReturn.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                </p>
                                <span className={`text-[11px] font-black flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                                    {percentageReturn}%
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-slate-100 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group cursor-pointer"
                            onClick={() => setShowRiskModal(true)}
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2 sm:mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 sm:p-2 bg-emerald-50 rounded-lg">
                                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">Risk</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                                </div>
                                <p className="text-sm sm:text-xl font-black text-slate-900 leading-tight">
                                    {riskTiers.find(t => t.tier === currentUserTier)?.name.split(' ')[0] ?? 'Moderate'}
                                </p>
                                <p className="text-[10px] text-blue-600 font-bold uppercase mt-1">Modify Tier {currentUserTier}</p>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors opacity-50"></div>
                        </motion.div>
                    </div>

                    {/* Performance Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-slate-100 shadow-sm sm:shadow-lg sm:shadow-slate-100"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                            <div>
                                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">Performance Tracker</h2>
                                <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider mt-1">Growth analysis</p>
                            </div>
                            <div className="bg-slate-50 p-1 rounded-2xl flex gap-1 overflow-x-auto no-scrollbar -mx-1 px-1">
                                {(['1W', '1M', '3M', '6M', '1Y', 'ALL'] as const).map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => setTimeRange(range)}
                                        className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${timeRange === range
                                            ? 'bg-white text-blue-600 shadow-xl shadow-blue-100 border border-blue-50'
                                            : 'text-slate-400 hover:text-slate-900'
                                            }`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-[250px] sm:h-[350px] -ml-4 sm:ml-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={performanceData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={isPositive ? '#10B981' : '#EF4444'} stopOpacity={0.2} />
                                            <stop offset="95%" stopColor={isPositive ? '#10B981' : '#EF4444'} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }}
                                        tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
                                        dx={-10}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#FFFFFF',
                                            borderRadius: '16px',
                                            border: '1px solid #E2E8F0',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                            padding: '12px 16px'
                                        }}
                                        itemStyle={{ color: '#0F172A', fontWeight: 700 }}
                                        formatter={(value: number) => [`₹${value.toLocaleString('en-IN')}`, 'Portfolio Value']}
                                        labelStyle={{ color: '#64748B', marginBottom: '4px', fontSize: '12px', fontWeight: 600 }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke={isPositive ? '#10B981' : '#EF4444'}
                                        strokeWidth={3}
                                        fill="url(#colorValue)"
                                        activeDot={{ r: 6, strokeWidth: 0, fill: isPositive ? '#10B981' : '#EF4444' }}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Allocation & Holdings Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Allocation Pie Chart */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-lg sm:text-xl font-black text-slate-900">Asset Allocation</h2>
                                <div className="p-2 bg-slate-50 rounded-xl">
                                    <Filter className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                            <div className="h-64 sm:h-80 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RechartsPie>
                                        <Pie
                                            data={allocationData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={window.innerWidth < 640 ? 60 : 80}
                                            outerRadius={window.innerWidth < 640 ? 90 : 120}
                                            paddingAngle={4}
                                            cornerRadius={8}
                                            dataKey="value"
                                        >
                                            {allocationData.map((_, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', fontWeight: 'bold' }}
                                            formatter={(value: number, name: string, props) =>
                                                [`₹${(props.payload.amount || 0).toLocaleString('en-IN')} (${value}%)`, name]
                                            }
                                        />
                                    </RechartsPie>
                                </ResponsiveContainer>
                                {/* Center Text */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total</p>
                                    <p className="text-base sm:text-2xl font-black text-slate-900 leading-none">₹{investedAmount.toLocaleString('en-IN', { notation: 'compact' })}</p>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 justify-center">
                                {allocationData.slice(0, 4).map((_, index) => (
                                    <div key={index} className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                                        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-black text-slate-900 truncate leading-none mb-0.5">{allocationData[index].name}</p>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase">{allocationData[index].value}%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Holdings List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                                    {executedPortfolio.length > 0 ? 'My Holdings' : 'Key Holdings'}
                                </h2>
                                {executedPortfolio.length > 0 && (
                                    <span className="text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-black uppercase tracking-wider border border-indigo-100">
                                        {executedPortfolio.length} Securities
                                    </span>
                                )}
                            </div>
                            <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pr-1 max-h-[350px]">
                                {executedPortfolio.length > 0 ? (
                                    executedPortfolio.map((stock) => (
                                        <div
                                            key={stock.orderId}
                                            className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-slate-50 hover:border-blue-100 hover:bg-blue-50/20 transition-all group"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm border border-slate-100 shrink-0 group-hover:bg-white group-hover:text-blue-500 transition-colors">
                                                    {stock.symbol.substring(0, 2)}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-black text-slate-900 leading-tight truncate">{stock.symbol}</p>
                                                    <p className="text-[11px] text-slate-400 font-bold truncate max-w-[120px] uppercase">{stock.status === 'success' ? 'Settled' : 'Partial'}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-black text-slate-900 text-sm">₹{stock.totalValue.toLocaleString('en-IN')}</p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">{stock.executedQty} Units</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    portfolio.map((category, catIdx) => (
                                        <div key={catIdx} className="mb-6 last:mb-0">
                                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">{category.category}</h3>
                                            <div className="grid grid-cols-1 gap-2">
                                                {category.assets.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center justify-between p-3.5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all"
                                                    >
                                                        <div className="flex-1 min-w-0 pr-4">
                                                            <p className="font-bold text-slate-900 text-sm truncate">{item.asset.name}</p>
                                                            <p className="text-[11px] text-slate-500 font-medium">₹{item.asset.latestPrice} • {item.units} units</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-black text-slate-900 text-sm">₹{item.amount.toLocaleString('en-IN')}</p>
                                                            <p className="text-[10px] font-black text-blue-600 uppercase mt-0.5">{item.allocation.toFixed(1)}%</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <button className="w-full mt-6 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition active:scale-[0.98] text-sm flex items-center justify-center gap-2 shadow-xl shadow-slate-100">
                                Portfolio Analytics
                                <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    </div>

                    {/* Recommended Stocks Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                            <div>
                                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">Investment Opportunities</h2>
                                <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider mt-1">
                                    SmartTheta Picks • Tier {currentUserTier}
                                </p>
                            </div>
                            <button className="w-full sm:w-auto px-6 py-3 bg-blue-50 text-blue-600 font-black rounded-xl hover:bg-blue-100 transition flex items-center justify-center gap-2 text-sm shadow-sm">
                                Market Insights
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Mobile: Card View, Desktop: Table View */}
                        <div className="block sm:hidden space-y-3">
                            {recommendedStocks.slice(0, 4).map((stock) => (
                                <div key={stock.symbol} className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center font-black text-blue-600 text-xs shadow-sm">
                                                {stock.symbol.substring(0, 1)}
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900">{stock.symbol}</p>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{stock.sector}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-black text-slate-900">₹{stock.currentPrice.toLocaleString('en-IN')}</p>
                                            <p className="text-[10px] text-green-600 font-black uppercase tracking-widest">{stock.roe.toFixed(1)}% Pot.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${stock.riskScore <= 40 ? 'bg-emerald-500' : stock.riskScore <= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                                                    style={{ width: `${stock.riskScore}%` }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-500">{stock.riskScore} Risk</span>
                                        </div>
                                        <button className="px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-100 active:scale-95">
                                            Invest
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden sm:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-slate-50">
                                        <th className="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Security</th>
                                        <th className="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Sector</th>
                                        <th className="text-right py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">LTP</th>
                                        <th className="text-right py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pot. Upside</th>
                                        <th className="text-center py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Factor</th>
                                        <th className="text-right py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recommendedStocks.slice(0, 5).map((stock) => (
                                        <tr
                                            key={stock.symbol}
                                            className="border-b border-slate-50 hover:bg-slate-50/80 transition-all group"
                                        >
                                            <td className="py-5 px-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center font-black text-xs group-hover:bg-white group-hover:text-blue-600 transition-colors border border-slate-50 group-hover:border-blue-50">
                                                        {stock.symbol.substring(0, 1)}
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-slate-900">{stock.symbol}</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase truncate max-w-[120px]">{stock.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 text-center">
                                                <span className="text-[10px] font-black text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl uppercase border border-slate-100">{stock.sector}</span>
                                            </td>
                                            <td className="py-5 px-4 text-right">
                                                <span className="font-black text-slate-900">₹{stock.currentPrice.toLocaleString('en-IN')}</span>
                                            </td>
                                            <td className="py-5 px-4 text-right">
                                                <span className="font-black text-emerald-600 text-sm">+{stock.roe.toFixed(1)}%</span>
                                            </td>
                                            <td className="py-5 px-4">
                                                <div className="flex items-center justify-center gap-3">
                                                    <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${stock.riskScore <= 40 ? 'bg-emerald-500' : stock.riskScore <= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                                                            style={{ width: `${stock.riskScore}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs font-black text-slate-600">{stock.riskScore}</span>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 text-right">
                                                <button className="text-[10px] font-black bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-blue-600 transition active:scale-95 shadow-lg shadow-slate-100">
                                                    INVEST
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Market Alerts Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 sm:p-3 bg-amber-50 rounded-2xl relative shadow-sm border border-amber-100">
                                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">Market Intelligence</h2>
                                    <p className="text-[10px] sm:text-sm text-slate-400 font-bold uppercase tracking-wider mt-1">Real-time signal desk</p>
                                </div>
                            </div>
                            <button className="text-xs font-black text-slate-400 hover:text-slate-900 border-2 border-slate-50 px-4 py-2 rounded-xl transition uppercase tracking-widest">History</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sampleAlerts.map((alert) => (
                                <div
                                    key={alert.id}
                                    onClick={() => setSelectedAlert(alert)}
                                    className={`p-5 rounded-3xl border-2 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden ${alert.type === 'negative' ? 'bg-white border-red-50 hover:border-red-200' :
                                        alert.type === 'warning' ? 'bg-white border-amber-50 hover:border-amber-200' :
                                            'bg-white border-emerald-50 hover:border-emerald-200'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-2.5 rounded-xl ${alert.type === 'negative' ? 'bg-red-50 text-red-600 border border-red-100' :
                                            alert.type === 'warning' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                                'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                            }`}>
                                            {alert.type === 'negative' ? (
                                                <AlertTriangle size={20} />
                                            ) : alert.type === 'warning' ? (
                                                <AlertTriangle size={20} />
                                            ) : (
                                                <CheckCircle size={20} />
                                            )}
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 uppercase tracking-wider border border-slate-100">
                                            <Clock size={12} />
                                            {alert.timestamp}
                                        </span>
                                    </div>

                                    <h3 className="font-black text-slate-900 mb-1 leading-tight text-base">{alert.name}</h3>
                                    <p className="text-[13px] text-slate-500 mb-6 line-clamp-2 h-10 font-medium leading-relaxed">{alert.message}</p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${alert.impact === 'High' ? 'text-red-500' :
                                            alert.impact === 'Medium' ? 'text-amber-500' :
                                                'text-emerald-500'
                                            }`}>
                                            {alert.impact} Impact
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </main>

                {/* Alerts Modal */}
                <AnimatePresence>
                    {showAlerts && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6"
                            onClick={() => setShowAlerts(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                className="bg-white rounded-[32px] shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-50">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">Market Alerts</h3>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time update desk</p>
                                    </div>
                                    <button
                                        onClick={() => setShowAlerts(false)}
                                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition active:scale-95 text-slate-400 hover:text-slate-900"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-4">
                                    {sampleAlerts.map((alert) => (
                                        <div
                                            key={alert.id}
                                            className={`p-5 rounded-3xl border-2 transition-all ${alert.type === 'negative' ? 'bg-red-50/20 border-red-50' :
                                                alert.type === 'warning' ? 'bg-amber-50/20 border-amber-50' :
                                                    'bg-emerald-50/20 border-emerald-50'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className={`p-2 rounded-xl bg-white shadow-sm border ${alert.type === 'negative' ? 'text-red-500 border-red-100' :
                                                    alert.type === 'warning' ? 'text-amber-500 border-amber-100' :
                                                        'text-emerald-500 border-emerald-100'
                                                    }`}>
                                                    <AlertTriangle size={18} />
                                                </div>
                                                <span className="text-[10px] font-black text-slate-400">{alert.timestamp}</span>
                                            </div>
                                            <h4 className="font-black text-slate-900 mb-1">{alert.symbol}: {alert.name}</h4>
                                            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">{alert.message}</p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg border ${alert.impact === 'High' ? 'bg-red-50 text-red-600 border-red-100' :
                                                    'bg-slate-50 text-slate-600 border-slate-100'
                                                    }`}>{alert.impact} Impact</span>
                                                <button className="text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest">Execute Action</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-slate-50 border-t border-slate-100 italic text-[11px] text-slate-400 font-medium text-center">
                                    AI-powered insights based on your current portfolio holdings.
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Alert Detail Modal */}
            <AnimatePresence>
                {selectedAlert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedAlert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-[2rem] shadow-2xl max-w-lg w-full p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className={`p-4 rounded-2xl ${selectedAlert.type === 'negative' ? 'bg-red-50 text-red-600' :
                                        selectedAlert.type === 'warning' ? 'bg-amber-50 text-amber-600' :
                                            'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        {selectedAlert.type === 'negative' ? (
                                            <AlertTriangle className="w-8 h-8" />
                                        ) : selectedAlert.type === 'warning' ? (
                                            <AlertTriangle className="w-8 h-8" />
                                        ) : (
                                            <CheckCircle className="w-8 h-8" />
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900">{selectedAlert.symbol}</h2>
                                        <p className="text-slate-500 font-medium">{selectedAlert.name}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedAlert(null)}
                                    className="p-2 hover:bg-slate-100 rounded-xl transition"
                                >
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Alert Details</h3>
                                    <p className="text-lg font-medium text-slate-900 leading-relaxed">{selectedAlert.message}</p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Impact</h3>
                                        <span className={`text-lg font-black ${selectedAlert.impact === 'High' ? 'text-red-600' :
                                            selectedAlert.impact === 'Medium' ? 'text-amber-600' :
                                                'text-emerald-600'
                                            }`}>
                                            {selectedAlert.impact}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Detected</h3>
                                        <p className="text-lg font-bold text-slate-900">{selectedAlert.timestamp}</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Info className="w-24 h-24 text-blue-600" />
                                    </div>
                                    <div className="flex items-start gap-3 relative z-10">
                                        <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-blue-900 mb-2">Recommended Action</h3>
                                            <p className="text-sm font-medium text-blue-700 leading-relaxed">{selectedAlert.action}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setSelectedAlert(null)}
                                    className="flex-1 py-4 rounded-xl font-bold border-2 border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50 transition"
                                >
                                    Dismiss
                                </button>
                                <button
                                    className="flex-1 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Risk Profile Change Confirmation Modal */}
            <AnimatePresence>
                {showRiskModal && selectedNewTier && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => {
                            setShowRiskModal(false);
                            setSelectedNewTier(null);
                        }}
                    >
                        {/* Modal content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const currentTierInfo = riskTiers.find(t => t.tier === currentUserTier);
                                const newTierInfo = riskTiers.find(t => t.tier === selectedNewTier);
                                const isUpgrade = selectedNewTier > currentUserTier;

                                return (
                                    <>
                                        <div className="flex items-center justify-center mb-6">
                                            <div className={`p-4 rounded-full ${isUpgrade ? 'bg-orange-100' : 'bg-blue-100'}`}>
                                                {isUpgrade ? (
                                                    <TrendingUp className={`w-8 h-8 ${isUpgrade ? 'text-orange-600' : 'text-blue-600'}`} />
                                                ) : (
                                                    <Shield className="w-8 h-8 text-blue-600" />
                                                )}
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">
                                            {isUpgrade ? 'Increase Risk Level?' : 'Decrease Risk Level?'}
                                        </h2>
                                        <p className="text-center text-slate-500 mb-6">
                                            You are about to change your risk profile
                                        </p>

                                        <div className="bg-slate-50 rounded-2xl p-5 mb-6">
                                            <div className="flex items-center justify-between">
                                                <div className="text-center flex-1">
                                                    <span className="text-xs text-slate-500 block mb-1">Current</span>
                                                    <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 font-bold text-sm mb-1">
                                                        Tier {currentUserTier}
                                                    </span>
                                                    <p className="text-sm font-medium text-slate-700">{currentTierInfo?.name}</p>
                                                    <p className="text-xs text-slate-500">{currentTierInfo?.riskLevel}</p>
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
                                                    <p className="text-sm font-medium text-slate-700">{newTierInfo?.name}</p>
                                                    <p className="text-xs text-slate-500">{newTierInfo?.riskLevel}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Warning/Info Message */}
                                        <div className={`p-4 rounded-xl mb-6 ${isUpgrade ? 'bg-orange-50 border border-orange-200' : 'bg-blue-50 border border-blue-200'
                                            }`}>
                                            <div className="flex items-start gap-3">
                                                <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${isUpgrade ? 'text-orange-600' : 'text-blue-600'
                                                    }`} />
                                                <div>
                                                    <p className={`text-sm font-medium ${isUpgrade ? 'text-orange-800' : 'text-blue-800'}`}>
                                                        {isUpgrade
                                                            ? 'Higher risk means higher potential returns but also greater volatility'
                                                            : 'Lower risk means more stable returns with reduced growth potential'
                                                        }
                                                    </p>
                                                    <p className={`text-xs mt-1 ${isUpgrade ? 'text-orange-600' : 'text-blue-600'}`}>
                                                        Your portfolio recommendations will be updated to match the new risk profile.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => {
                                                    setShowRiskModal(false);
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
                                                Confirm Change
                                            </button>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </OnboardingLayout>
    );
};
