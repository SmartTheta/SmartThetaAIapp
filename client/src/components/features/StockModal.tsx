import { X, TrendingUp, TrendingDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import axios from 'axios';

interface StockModalProps {
    symbol: string;
    onClose: () => void;
}

interface StockHistory {
    date: string;
    price: number;
}

interface StockDetails {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
}

export const StockModal = ({ symbol, onClose }: StockModalProps) => {
    const [history, setHistory] = useState<StockHistory[]>([]);
    const [details, setDetails] = useState<StockDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');

                // Fetch details and history in parallel
                const [detailsRes, historyRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/api/stocks/search?query=${symbol}`),
                    axios.get(`${import.meta.env.VITE_API_URL}/api/stocks/${symbol}/history?range=1mo`)
                ]);

                setDetails(detailsRes.data);
                setHistory(historyRes.data);
            } catch (err) {
                console.error('Error fetching stock data:', err);
                setError('Failed to load stock data');
            } finally {
                setLoading(false);
            }
        };

        if (symbol) {
            fetchData();
        }
    }, [symbol]);

    if (!symbol) return null;

    const isPositive = details ? details.change >= 0 : true;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        {/* Logo Placeholder - In a real app, use a logo API */}
                        <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600">
                            {details?.symbol.slice(0, 2)}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                {details?.name || symbol}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-2xl font-bold text-slate-900">
                                    ₹{details?.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                </span>
                                {details && (
                                    <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                        <span>{details.change > 0 ? '+' : ''}{details.change.toFixed(2)}</span>
                                        <span>({details.changePercent.toFixed(2)}%)</span>
                                        <span className="text-slate-400 ml-1">1M</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {loading ? (
                        <div className="h-64 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    ) : error ? (
                        <div className="h-64 flex items-center justify-center text-red-500">
                            {error}
                        </div>
                    ) : (
                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={history}>
                                    <defs>
                                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={isPositive ? '#16a34a' : '#dc2626'} stopOpacity={0.1} />
                                            <stop offset="95%" stopColor={isPositive ? '#16a34a' : '#dc2626'} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="date"
                                        hide
                                    />
                                    <YAxis
                                        domain={['auto', 'auto']}
                                        hide
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                        }}
                                        formatter={(value: number) => [`₹${value.toFixed(2)}`, 'Price']}
                                        labelFormatter={(label) => new Date(label).toLocaleDateString()}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="price"
                                        stroke={isPositive ? '#16a34a' : '#dc2626'}
                                        strokeWidth={2}
                                        fill="url(#colorPrice)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>

                <div className="px-6 pb-6 flex justify-end gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        Create Alert
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm transition-colors">
                        Watchlist
                    </button>
                </div>
            </div>
        </div>
    );
};
