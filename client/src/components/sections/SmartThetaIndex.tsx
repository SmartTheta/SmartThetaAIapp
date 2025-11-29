import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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
            console.error('Error fetching data:', err);
            setError('Failed to fetch data. Please check if the server is running.');
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchData();
    }, []);

    // Prepare chart data - show last 30 days
    const chartData: ChartDataPoint[] = historicalData.map((point) => ({
        date: new Date(point.date).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short'
        }),
        value: point.profitLoss
    }));

    // Calculate values
    const todayValue = comparison?.today?.profitLoss || 0;
    const yesterdayValue = comparison?.yesterday?.profitLoss || 0;
    const difference = comparison?.difference || 0;
    const percentage = comparison?.percentageChange || 0;
    const isPositive = difference >= 0;

    if (loading) {
        return (
            <section id="index" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center justify-center">
                        <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
                        <span className="ml-3 text-slate-600">Loading SmartTheta Index...</span>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="index" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                    <div className="text-center">
                        <p className="text-red-600 font-medium">{error}</p>
                        <button
                            onClick={fetchData}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="index" className="w-full h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col">
                <div className="p-6 md:p-8 border-b border-slate-100">
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
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-slate-500">Yesterday's Close:</span>
                                <span className="text-lg font-semibold text-slate-700">
                                    ₹{yesterdayValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="h-[400px] w-full p-4">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    domain={['auto', 'auto']}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                                    tickFormatter={(value) => `₹${value.toLocaleString()}`}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#1e293b', fontWeight: 600 }}
                                    formatter={(value: number) => [`₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 'Value']}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    name="SmartTheta Index"
                                    stroke={isPositive ? "#22c55e" : "#ef4444"}
                                    strokeWidth={3}
                                    dot={{ fill: isPositive ? "#22c55e" : "#ef4444", r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-slate-400">No historical data available</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
