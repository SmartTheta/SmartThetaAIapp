import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getComparisonData, getHistoricalDaily } from '../../services/api';
import type { ComparisonData, HistoricalDataPoint } from '../../types/index';

interface ChartDataPoint {
    date: string;
    value: number;
}

export const SmartThetaIndex = () => {
    const [comparison, setComparison] = useState<ComparisonData | null>(null);
    const [historicalData, setHistoricalData] = useState<HistoricalDataPoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

    // Fetch data from API
    const fetchData = async () => {
        try {
            setError(null);
            const [comparisonData, dailyData] = await Promise.all([
                getComparisonData(),
                getHistoricalDaily()
            ]);

            setComparison(comparisonData);
            setHistoricalData(dailyData.data);
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Data fetch error:', err);
            setError('Unavailable');
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchData();
    }, []);

    // Calculate values
    const todayValue = comparison?.today?.profitLoss || 0;
    const yesterdayValue = comparison?.yesterday?.profitLoss || 0;
    const difference = comparison?.difference || 0;
    const percentage = comparison?.percentageChange || 0;
    const isPositive = difference >= 0;

    // Prepare chart data - show last 30 days
    let chartData: ChartDataPoint[] = historicalData.map((point) => ({
        date: new Date(point.date).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short'
        }),
        value: point.profitLoss
    }));

    // If only one data point (Day 1), prepend a starting point (Day 0) to show a trend line
    if (chartData.length === 1) {
        chartData = [
            { date: "Start", value: 0 },
            ...chartData
        ];
    } else if (chartData.length === 0 && !loading) {
        // Just for safety if no data yet
        chartData = [
            { date: "Start", value: 0 },
            { date: "Current", value: todayValue }
        ];
    }

    if (error || loading) {
        return (
            <div className="flex flex-col items-center justify-center p-8 min-h-[300px] bg-slate-50/50 rounded-[1.5rem] border border-dashed border-slate-200">
                <RefreshCw className="w-8 h-8 animate-spin text-blue-400 opacity-50" />
                <span className="mt-4 text-sm font-medium text-slate-400 uppercase tracking-widest">
                    Updating Live Index...
                </span>
                <p className="text-xs text-slate-300 mt-2">Connecting to secure data feed</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col p-6 lg:p-8">
            <div className="h-full flex flex-col">
                <div className="pb-4 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-500 uppercase tracking-wider">SmartTheta Index</h2>
                            <div className="flex items-baseline gap-4 mt-1">
                                <span className="text-4xl font-bold text-slate-900">
                                    ₹{todayValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                </span>
                                <div className={cn("flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium",
                                    isPositive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
                                    {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                    <span>₹{Math.abs(difference).toFixed(2)}</span>
                                    <span>({Math.abs(percentage).toFixed(2)}%)</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-2">
                                Today vs Yesterday • Last updated: {lastUpdate.toLocaleTimeString('en-IN')}
                            </p>
                        </div>

                        <button
                            onClick={fetchData}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Refresh
                        </button>
                    </div>

                    {/* Yesterday's value display */}
                    {comparison?.yesterday && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-slate-500">Yesterday's Close:</span>
                                <span className="text-lg font-semibold text-slate-700">
                                    ₹{yesterdayValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="h-[250px] w-full mt-8 py-2">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={isPositive ? "#22c55e" : "#ef4444"} stopOpacity={0.1} />
                                        <stop offset="95%" stopColor={isPositive ? "#22c55e" : "#ef4444"} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                                    dy={10}
                                />
                                <YAxis
                                    domain={['auto', 'auto']}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 10, opacity: 0.8 }}
                                    tickFormatter={(value) => `₹${value.toLocaleString()}`}
                                    width={60}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#1e293b', fontWeight: 600 }}
                                    formatter={(value: number) => [`₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 'Value']}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    name="SmartTheta Index"
                                    stroke={isPositive ? "#22c55e" : "#ef4444"}
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                    dot={{ fill: isPositive ? "#22c55e" : "#ef4444", r: 4, strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 6, strokeWidth: 0 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-slate-400">No historical data available</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};