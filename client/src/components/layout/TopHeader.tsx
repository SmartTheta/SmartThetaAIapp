import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getGlobalIndices, type StockData } from '../../services/api';
import { motion } from 'framer-motion';

export const TopHeader = () => {
    const [isMarketOpen, setIsMarketOpen] = useState(false);
    const [indices, setIndices] = useState<StockData[]>([]);
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const checkMarketStatus = () => {
            const now = new Date();
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            const day = istTime.getDay();
            const hour = istTime.getHours();
            const minute = istTime.getMinutes();

            const isWeekday = day >= 1 && day <= 5;
            const isAfterOpen = hour > 9 || (hour === 9 && minute >= 15);
            const isBeforeClose = hour < 15 || (hour === 15 && minute <= 30);

            setIsMarketOpen(isWeekday && isAfterOpen && isBeforeClose);
        };

        const fetchIndices = async () => {
            try {
                const response = await getGlobalIndices();
                if (response.data && response.data.length > 0) {
                    setIndices([...response.data, ...response.data]);
                }
            } catch (err) {
                console.error('Error fetching global indices:', err);
            }
        };

        const updateTime = () => {
            const now = new Date();
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            setCurrentTime(istTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };

        checkMarketStatus();
        fetchIndices();
        updateTime();
        const interval = setInterval(() => {
            checkMarketStatus();
            fetchIndices();
            updateTime();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-50 bg-slate-950 text-white py-1.5 shadow-md border-b border-slate-800">
            <div className="max-w-[1440px] mx-auto px-12">
                <div className="flex justify-between items-center h-7 text-[11px] sm:text-xs font-medium">

                    {/* Left Anchor: Current Time (IST) */}
                    <div className="flex items-center gap-1.5 flex-shrink-0 border-r border-slate-800 pr-4">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-slate-300 tabular-nums uppercase tracking-tight">{currentTime} IST</span>
                    </div>

                    {/* Center: World Indices Scrolling Ticker (Maximized Width) */}
                    <div className="flex-grow overflow-hidden group">
                        <div className="flex overflow-hidden relative w-full h-full items-center">
                            {indices.length > 0 ? (
                                <motion.div
                                    className="flex items-center gap-8 whitespace-nowrap"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {indices.map((index: StockData, i: number) => (
                                        <div key={`${index.symbol}-${i}`} className="flex items-center gap-2.5">
                                            <span className="text-slate-400 uppercase tracking-tight">{index.name}</span>
                                            <span className="font-bold tabular-nums">
                                                {index.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                            <div className={cn("flex items-center py-0.5 rounded text-[10px]",
                                                index.change >= 0 ? "text-green-400" : "text-red-400"
                                            )}>
                                                {index.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                                <span>{Math.abs(index.changePercent).toFixed(2)}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="w-full text-center text-slate-500 animate-pulse tracking-wide italic">
                                    Loading world markets...
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Anchor: Market Status Symbol */}
                    <div className="flex items-center gap-2 flex-shrink-0 pl-4 border-l border-slate-800">
                        <div className={cn("w-2 h-2 rounded-full animate-pulse", isMarketOpen ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]")} />
                        <span className={cn("uppercase tracking-widest opacity-80", isMarketOpen ? "text-green-400" : "text-red-400")}>
                            {isMarketOpen ? "Market Open" : "Market Closed"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
