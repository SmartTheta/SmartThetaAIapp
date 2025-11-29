import { useEffect, useState } from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

export const TopHeader = () => {
    const [isMarketOpen, setIsMarketOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const checkMarketStatus = () => {
            const now = new Date();
            // Convert to IST
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            const day = istTime.getDay();
            const hour = istTime.getHours();
            const minute = istTime.getMinutes();

            // Market Open: Mon-Fri, 9:15 AM - 3:30 PM
            const isWeekday = day >= 1 && day <= 5;
            const isAfterOpen = hour > 9 || (hour === 9 && minute >= 15);
            const isBeforeClose = hour < 15 || (hour === 15 && minute <= 30);

            setIsMarketOpen(isWeekday && isAfterOpen && isBeforeClose);

            // Update time
            setCurrentTime(istTime.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };

        checkMarketStatus();
        const interval = setInterval(checkMarketStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sticky top-0 z-50 bg-slate-900 text-white py-2 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center text-sm">
                    {/* Left: Brand */}
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="font-semibold">SmartTheta</span>
                    </div>

                    {/* Right: Market Status */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full", isMarketOpen ? "bg-green-500" : "bg-red-500")} />
                            <span className="hidden sm:inline">Market Status:</span>
                            <span className={cn("font-medium", isMarketOpen ? "text-green-400" : "text-red-400")}>
                                {isMarketOpen ? "Market Open" : "Market Closed"}
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-1 text-slate-300">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{currentTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
