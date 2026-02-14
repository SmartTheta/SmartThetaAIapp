
import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    Settings,
    Download,
    ChevronRight,
    Building2,
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
import { generatePortfolio, tierAllocations, PortfolioAllocation } from '../../../data/assetRecommendations';
import { getTopStocksForTier, ScoredStock, stockStats } from '../../../data/scoredStocks';
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
    const navigate = useNavigate();
    const { results } = useAssessmentStore();
    const broker = location.state?.broker;

    const [timeRange, setTimeRange] = useState<'1W' | '1M' | '3M' | '6M' | '1Y' | 'ALL'>('1M');
    const [showAlerts, setShowAlerts] = useState(false);
    const [selectedAlert, setSelectedAlert] = useState<StockAlert | null>(null);
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

    // Handle tier change confirmation
    const handleTierChange = (newTier: number) => {
        if (newTier !== currentUserTier) {
            setSelectedNewTier(newTier);
            setShowRiskModal(true);
        }
    };

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
            <div className="flex items-center gap-4">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">Portfolio Dashboard</h1>
                    <div className="flex items-center gap-2 mt-1">
                        {broker && (
                            <span className="flex items-center gap-1 text-sm text-slate-500">
                                <Building2 className="w-4 h-4" />
                                Connected via {broker.name}
                            </span>
                        )}
                        <span className="flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Live Market
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Alerts button */}
                <button
                    onClick={() => setShowAlerts(true)}
                    className="relative p-2 hover:bg-slate-100 rounded-lg transition border border-transparent hover:border-slate-200"
                >
                    <Bell className="w-5 h-5 text-slate-600" />
                    {sampleAlerts.filter(a => a.type === 'negative' || a.type === 'warning').length > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
                            {sampleAlerts.filter(a => a.type === 'negative' || a.type === 'warning').length}
                        </span>
                    )}
                </button>

                <button className="p-2 hover:bg-slate-100 rounded-lg transition border border-transparent hover:border-slate-200">
                    <RefreshCcw className="w-5 h-5 text-slate-600" />
                </button>

                <button className="p-2 hover:bg-slate-100 rounded-lg transition border border-transparent hover:border-slate-200">
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
            <div className="min-h-screen bg-slate-50/50 -m-8 p-8"> {/* Negative margin to counteract OnboardingLayout padding */}

                <main className="max-w-7xl mx-auto">
                    {/* Value Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <Wallet className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-slate-500">Current Value</span>
                            </div>
                            <p className="text-3xl font-bold text-slate-900 mt-2">
                                ₹{currentValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-purple-50 rounded-lg">
                                    <Target className="w-5 h-5 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-slate-500">Invested</span>
                            </div>
                            <p className="text-3xl font-bold text-slate-900 mt-2">
                                ₹{investedAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </p>
                            {portfolioSummary && (
                                <span className="text-xs text-slate-500 block mt-1 font-medium">
                                    {portfolioSummary.successCount + portfolioSummary.partialCount} orders executed
                                </span>
                            )}
                        </motion.div>

                        {/* Returns Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow ${isPositive ? 'border-green-100' : 'border-red-100'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
                                    {isPositive ? (
                                        <TrendingUp className={`w-5 h-5 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    ) : (
                                        <TrendingDown className={`w-5 h-5 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    )}
                                </div>
                                <span className="text-sm font-medium text-slate-500">Total Returns</span>
                            </div>
                            <div className="flex items-end gap-3 mt-2">
                                <p className={`text-3xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {isPositive ? '+' : ''}₹{absoluteReturn.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                </p>
                                <span className={`text-sm font-bold mb-1.5 flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {isPositive ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> : <ArrowDownRight className="w-4 h-4 mr-0.5" />}
                                    {percentageReturn}%
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer"
                            onClick={() => setShowRiskModal(true)}
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-emerald-50 rounded-lg">
                                            <Shield className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-500">Risk Profile</span>
                                    </div>
                                    <Settings className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                </div>
                                <p className="text-xl font-bold text-slate-900 mt-2">
                                    {riskTiers.find(t => t.tier === currentUserTier)?.name ?? 'Moderate'}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm text-slate-500 font-medium">Tier {currentUserTier}</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span className="text-xs text-blue-600 font-bold group-hover:underline">Manage</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors"></div>
                        </motion.div>
                    </div>

                    {/* Performance Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Portfolio Performance</h2>
                                <p className="text-sm text-slate-500 font-medium">Track your investment growth over time</p>
                            </div>
                            <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
                                {(['1W', '1M', '3M', '6M', '1Y', 'ALL'] as const).map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => setTimeRange(range)}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${timeRange === range
                                                ? 'bg-white text-blue-600 shadow-sm'
                                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                            }`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-[350px]">
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

                    {/* Portfolio Allocation & Holdings */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Allocation Pie Chart */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Asset Allocation</h2>
                                <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 transition">
                                    <Filter className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="h-80 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RechartsPie>
                                        <Pie
                                            data={allocationData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={120}
                                            paddingAngle={4}
                                            cornerRadius={8}
                                            dataKey="value"
                                        >
                                            {allocationData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                            formatter={(value: number, name: string, props) =>
                                                [`₹${(props.payload.amount || 0).toLocaleString('en-IN')} (${value}%)`, name]
                                            }
                                        />
                                    </RechartsPie>
                                </ResponsiveContainer>
                                {/* Center Text */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total</p>
                                    <p className="text-xl font-black text-slate-900">₹{investedAmount.toLocaleString('en-IN', { notation: 'compact' })}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                {allocationData.slice(0, 4).map((entry, index) => (
                                    <div key={index} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                        <span className="text-xs font-bold text-slate-600">{entry.name}</span>
                                        <span className="text-xs text-slate-400 border-l border-slate-200 pl-1.5 ml-0.5">{entry.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Holdings List - Show executed stocks if available */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900">
                                    {executedPortfolio.length > 0 ? 'Your Holdings' : 'Holdings'}
                                </h2>
                                {executedPortfolio.length > 0 && (
                                    <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold">
                                        {executedPortfolio.length} Stocks
                                    </span>
                                )}
                            </div>
                            <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pr-2 max-h-[300px]">
                                {executedPortfolio.length > 0 ? (
                                    // Show actual executed stocks
                                    executedPortfolio.map((stock, idx) => (
                                        <div
                                            key={stock.orderId}
                                            className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-100 transition-colors group"
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-xs font-bold text-slate-700 shadow-sm border border-slate-100">
                                                        {stock.symbol.substring(0, 2)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 leading-tight">{stock.symbol}</p>
                                                        <p className="text-xs text-slate-500 truncate max-w-[120px]">{stock.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-slate-900">
                                                    ₹{stock.totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                                </p>
                                                <div className="flex items-center justify-end gap-1">
                                                    <span className="text-xs font-medium text-slate-500">
                                                        {stock.executedQty} qty
                                                    </span>
                                                    <span className="text-slate-300">•</span>
                                                    <span className={`text-xs font-bold ${stock.status === 'success' ? 'text-emerald-600' : 'text-amber-600'}`}>
                                                        {stock.status === 'success' ? 'Active' : 'Part'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Show generic portfolio categories
                                    portfolio.map((category, catIdx) => (
                                        <div key={catIdx} className="mb-4 last:mb-0">
                                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">{category.category}</h3>
                                            {category.assets.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-2 border border-slate-100"
                                                >
                                                    <div className="flex-1">
                                                        <p className="font-bold text-slate-900 text-sm">{item.asset.name}</p>
                                                        <p className="text-xs text-slate-500">{item.units} units @ ₹{item.asset.latestPrice}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-slate-900 text-sm">₹{item.amount.toLocaleString('en-IN')}</p>
                                                        <p className="text-xs text-slate-500 font-medium">{item.allocation.toFixed(1)}%</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                )}
                            </div>

                            <button className="w-full mt-4 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition text-sm flex items-center justify-center gap-2">
                                View All Holdings
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Recommended Stocks Section - Simplified for Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-8"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Recommended Opportunities</h2>
                                <p className="text-sm text-slate-500 font-medium">
                                    Top picks based on your Tier {currentUserTier} profile
                                </p>
                            </div>
                            <button className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                View All Stocks
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="text-left py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Stock</th>
                                        <th className="text-left py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Sector</th>
                                        <th className="text-right py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Price</th>
                                        <th className="text-right py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Potential</th>
                                        <th className="text-center py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Risk Score</th>
                                        <th className="text-right py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recommendedStocks.slice(0, 5).map((stock, idx) => (
                                        <tr
                                            key={stock.symbol}
                                            className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group"
                                        >
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                                                        {stock.symbol.substring(0, 1)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">{stock.symbol}</p>
                                                        <p className="text-xs text-slate-500 truncate max-w-[150px]">{stock.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{stock.sector}</span>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <span className="font-bold text-slate-900">₹{stock.currentPrice.toLocaleString('en-IN')}</span>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <span className="font-bold text-green-600 text-sm">+{stock.roe.toFixed(1)}%</span>
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${stock.riskScore <= 40 ? 'bg-emerald-500' : stock.riskScore <= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                                                            style={{ width: `${stock.riskScore}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-600">{stock.riskScore}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <button className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                                                    Invest
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Alerts Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-50 rounded-xl relative">
                                    <Bell className="w-6 h-6 text-amber-600" />
                                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">Market Alerts</h2>
                                    <p className="text-sm text-slate-500">Critical updates for your portfolio stocks</p>
                                </div>
                            </div>
                            <button className="text-sm font-bold text-slate-500 hover:text-slate-700">View History</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sampleAlerts.map((alert) => (
                                <div
                                    key={alert.id}
                                    onClick={() => setSelectedAlert(alert)}
                                    className={`p-5 rounded-2xl border cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 group ${alert.type === 'negative' ? 'bg-red-50/50 border-red-100 hover:border-red-200' :
                                            alert.type === 'warning' ? 'bg-amber-50/50 border-amber-100 hover:border-amber-200' :
                                                'bg-emerald-50/50 border-emerald-100 hover:border-emerald-200'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className={`p-2 rounded-xl ${alert.type === 'negative' ? 'bg-white text-red-600 shadow-sm' :
                                                alert.type === 'warning' ? 'bg-white text-amber-600 shadow-sm' :
                                                    'bg-white text-emerald-600 shadow-sm'
                                            }`}>
                                            {alert.type === 'negative' ? (
                                                <AlertTriangle className="w-5 h-5" />
                                            ) : alert.type === 'warning' ? (
                                                <AlertTriangle className="w-5 h-5" />
                                            ) : (
                                                <CheckCircle className="w-5 h-5" />
                                            )}
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {alert.timestamp}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-slate-900 mb-1 leading-tight">{alert.name}</h3>
                                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 h-10">{alert.message}</p>

                                    <div className="flex items-center justify-between text-xs">
                                        <span className={`font-bold ${alert.impact === 'High' ? 'text-red-600' :
                                                alert.impact === 'Medium' ? 'text-amber-600' :
                                                    'text-emerald-600'
                                            }`}>
                                            {alert.impact} Impact
                                        </span>
                                        <span className="font-bold text-blue-600 group-hover:underline">View Details</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </main>
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
