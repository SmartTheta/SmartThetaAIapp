import { useState, useEffect } from 'react';
import { RefreshCw, Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getTopGainers, getTopLosers, getMostActive, searchStock, type StockData } from '../../services/api';

export const PortfolioScanner = () => {
    const [activeTab, setActiveTab] = useState<'Top Gainers' | 'Top Losers' | 'Most Active'>('Top Gainers');
    const [stocks, setStocks] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState<StockData | null>(null);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState<string | null>(null);

    const tabs: Array<'Top Gainers' | 'Top Losers' | 'Most Active'> = ['Top Gainers', 'Top Losers', 'Most Active'];

    // Fetch data based on active tab
    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            let data: StockData[] = [];
            if (activeTab === 'Top Gainers') {
                const response = await getTopGainers(10);
                data = response.data;
            } else if (activeTab === 'Top Losers') {
                const response = await getTopLosers(10);
                data = response.data;
            } else {
                const response = await getMostActive(10);
                data = response.data;
            }

            setStocks(data);
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Error fetching scanner data:', err);
            setError('Failed to fetch market data');
        } finally {
            setLoading(false);
        }
    };

    // Handle search
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!searchQuery.trim()) {
            setSearchError('Please enter a stock symbol');
            return;
        }

        try {
            setSearchLoading(true);
            setSearchError(null);
            const data = await searchStock(searchQuery.trim());
            setSearchResult(data);
        } catch (err: any) {
            console.error('Error searching stock:', err);
            setSearchError(err.response?.data?.message || 'Stock not found');
            setSearchResult(null);
        } finally {
            setSearchLoading(false);
        }
    };

    // Clear search
    const clearSearch = () => {
        setSearchQuery('');
        setSearchResult(null);
        setSearchError(null);
    };

    // Initial fetch and when tab changes
    useEffect(() => {
        if (!searchResult) {
            fetchData();
        }
    }, [activeTab]);

    // Auto-refresh every 10 seconds (only when not searching)
    useEffect(() => {
        if (!searchResult) {
            const interval = setInterval(() => {
                fetchData();
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [activeTab, searchResult]);

    const displayStocks = searchResult ? [searchResult] : stocks;

    return (
        <section id="portfolio" className="w-full h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
                <div className="p-6 border-b border-slate-100">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                Live Market Scanner
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </h2>
                            <p className="text-sm text-slate-500 mt-1">Real-time NSE stock movements</p>
                        </div>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search stock symbol (e.g., RELIANCE, TCS, INFY)"
                                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={searchLoading}
                                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                            >
                                {searchLoading ? 'Searching...' : 'Search'}
                            </button>
                            {searchResult && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
                                >
                                    Clear
                                </button>
                            )}
                        </form>

                        {searchError && (
                            <p className="text-sm text-red-600">{searchError}</p>
                        )}

                        {!searchResult && (
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                                <div className="flex bg-slate-50 rounded-lg p-1 border border-slate-200">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={cn("px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap",
                                                activeTab === tab
                                                    ? "bg-white text-primary shadow-sm ring-1 ring-slate-200"
                                                    : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
                                            )}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={fetchData}
                                    className="p-2 text-slate-400 hover:text-primary transition-colors ml-auto"
                                    disabled={loading}
                                >
                                    <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1 overflow-auto">
                    {error ? (
                        <div className="flex items-center justify-center h-full p-6">
                            <p className="text-red-500 text-sm">{error}</p>
                        </div>
                    ) : loading && stocks.length === 0 ? (
                        <div className="flex items-center justify-center h-full p-6">
                            <RefreshCw className="w-6 h-6 text-slate-400 animate-spin" />
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead className="bg-slate-50 sticky top-0 z-10">
                                <tr className="text-xs text-slate-600 border-b border-slate-100">
                                    <th className="text-left py-3 px-4 font-medium">Symbol</th>
                                    <th className="text-left py-3 px-4 font-medium hidden md:table-cell">Name</th>
                                    <th className="text-right py-3 px-4 font-medium">LTP</th>
                                    <th className="text-right py-3 px-4 font-medium">Change</th>
                                    <th className="text-right py-3 px-4 font-medium hidden sm:table-cell">Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayStocks.map((stock, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                                    >
                                        <td className="py-3 px-4">
                                            <span className="font-semibold text-slate-900 text-sm">{stock.symbol}</span>
                                        </td>
                                        <td className="py-3 px-4 hidden md:table-cell">
                                            <span className="text-xs text-slate-600">{stock.name}</span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <span className="font-medium text-slate-900 text-sm">
                                                ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <div className="flex flex-col items-end gap-0.5">
                                                <span className={cn("text-sm font-medium",
                                                    stock.change >= 0 ? "text-green-600" : "text-red-600"
                                                )}>
                                                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                                                </span>
                                                <span className={cn("text-xs font-medium px-1.5 py-0.5 rounded",
                                                    stock.changePercent >= 0
                                                        ? "bg-green-50 text-green-700"
                                                        : "bg-red-50 text-red-700"
                                                )}>
                                                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-right hidden sm:table-cell">
                                            <span className="text-xs text-slate-600">
                                                {(stock.volume / 100000).toFixed(2)}L
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="p-3 border-t border-slate-100 bg-slate-50">
                    <p className="text-xs text-slate-500 text-center">
                        {searchResult
                            ? `Showing search result for: ${searchResult.symbol}`
                            : `Last updated: ${lastUpdate.toLocaleTimeString('en-IN')} • Auto-refreshes every 10s`
                        }
                    </p>
                </div>
            </div>
        </section>
    );
};
