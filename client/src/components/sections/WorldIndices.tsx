import { useState, useEffect } from 'react';
import { Globe, ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getGlobalIndices, type StockData } from '../../services/api';

export const WorldIndices = () => {
    const [indices, setIndices] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

    // Fetch global indices data
    const fetchIndices = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getGlobalIndices();
            setIndices(response.data);
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Error fetching global indices:', err);
            setError('Failed to fetch global indices');
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchIndices();
    }, []);

    // Auto-refresh every 30 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            fetchIndices();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
                <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-blue-600" />
                                Global Indices
                            </h2>
                            <p className="text-sm text-slate-500 mt-1">Major world market performance</p>
                        </div>
                        <button
                            onClick={fetchIndices}
                            className="p-2 text-slate-400 hover:text-primary transition-colors"
                            disabled={loading}
                        >
                            <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto flex-grow">
                    {error ? (
                        <div className="flex items-center justify-center h-full p-6">
                            <p className="text-red-500 text-sm">{error}</p>
                        </div>
                    ) : loading && indices.length === 0 ? (
                        <div className="flex items-center justify-center h-full p-6">
                            <RefreshCw className="w-6 h-6 text-slate-400 animate-spin" />
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100 text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                                    <th className="px-6 py-3">Index</th>
                                    <th className="px-6 py-3 text-right">Value</th>
                                    <th className="px-6 py-3 text-right">Change</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {indices.map((index) => (
                                    <tr key={index.symbol} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-900 text-sm">{index.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium text-slate-900 text-sm">
                                            {index.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className={cn("flex items-center justify-end gap-1 font-medium text-sm",
                                                index.change >= 0 ? "text-green-600" : "text-red-600"
                                            )}>
                                                {index.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                                {Math.abs(index.change).toFixed(2)}
                                                <span className="text-[10px] ml-1 opacity-80">
                                                    ({Math.abs(index.changePercent).toFixed(2)}%)
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="p-3 border-t border-slate-100 bg-slate-50">
                    <p className="text-xs text-slate-500 text-center">
                        Last updated: {lastUpdate.toLocaleTimeString('en-IN')} • Auto-refreshes every 30s
                    </p>
                </div>
            </div>
        </section>
    );
};
