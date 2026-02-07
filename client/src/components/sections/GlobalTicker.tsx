// ... imports
import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getGlobalIndices, type StockData } from '../../services/api';
import { motion } from 'framer-motion';

interface GlobalTickerProps {
    theme?: 'light' | 'dark';
}

export const GlobalTicker = ({ theme = 'light' }: GlobalTickerProps) => {
    const [indices, setIndices] = useState<StockData[]>([]);

    // Fetch global indices data
    useEffect(() => {
        const fetchIndices = async () => {
            try {
                const response = await getGlobalIndices();
                if (response.data && response.data.length > 0) {
                    // Duplicate data to create seamless loop
                    setIndices([...response.data, ...response.data]);
                } else {
                    throw new Error("No data returned");
                }
            } catch (err) {
                console.error('Error fetching global indices:', err);
                // Restoring mock data for visual verification
                const mockIndices: StockData[] = [
                    { symbol: 'GSPC', name: 'S&P 500', price: 4783.45, change: 23.45, changePercent: 0.49, volume: 0 },
                    { symbol: 'DJI', name: 'Dow Jones', price: 37468.61, change: 201.94, changePercent: 0.54, volume: 0 },
                    { symbol: 'IXIC', name: 'NASDAQ', price: 15055.65, change: 200.03, changePercent: 1.35, volume: 0 },
                    { symbol: 'NSEI', name: 'NIFTY 50', price: 21622.40, change: 109.55, changePercent: 0.52, volume: 0 },
                    { symbol: 'BSESN', name: 'SENSEX', price: 71683.23, change: 496.37, changePercent: 0.70, volume: 0 },
                    { symbol: 'FTSE', name: 'FTSE 100', price: 7459.09, change: -30.02, changePercent: -0.40, volume: 0 },
                    { symbol: 'N225', name: 'Nikkei 225', price: 35963.27, change: 497.10, changePercent: 1.40, volume: 0 },
                ];
                setIndices([...mockIndices, ...mockIndices]);
            }
        };

        fetchIndices();
        const interval = setInterval(fetchIndices, 60000);
        return () => clearInterval(interval);
    }, []);

    if (indices.length === 0) return null;

    const isDark = theme === 'dark';
    const bgClass = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100";
    const textPrimaryClass = isDark ? "text-slate-100" : "text-slate-900";
    const textSecondaryClass = isDark ? "text-slate-400" : "text-slate-700";

    return (
        <div className={cn("w-full overflow-hidden flex items-center h-10 border-b", bgClass)}>
            {/* Ticker Content */}
            <div className="flex overflow-hidden relative w-full h-full items-center">
                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {indices.map((index, i) => (
                        <div key={`${index.symbol}-${i}`} className="flex items-center gap-3">
                            <div className="flex items-center gap-3">
                                <span className={cn("font-bold text-xs",
                                    index.change >= 0 ? "text-green-500" : "text-red-500"
                                )}>
                                    {Math.abs(index.changePercent).toFixed(2)}%
                                </span>
                                <span className={cn("font-bold text-xs uppercase tracking-wide", textSecondaryClass)}>{index.name}</span>
                                <span className={cn("font-bold text-xs", textPrimaryClass)}>
                                    {index.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                                {isDark ? null : (
                                    <span className={cn("flex items-center text-[10px] font-medium px-1 py-0.5 rounded",
                                        index.change >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                                    )}>
                                        {index.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
