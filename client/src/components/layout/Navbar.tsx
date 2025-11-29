import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { StockModal } from '../features/StockModal';

interface SearchResult {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
}

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [selectedStock, setSelectedStock] = useState<string | null>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'Index', href: '#index', isHash: true },
        { name: 'About Product', href: '#products', isHash: true },
        { name: 'Pricing', href: '#pricing', isHash: true },
        { name: 'Blog', href: '/blog', isHash: false },
    ];

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Debounced search
    useEffect(() => {
        const searchStock = async () => {
            if (!searchQuery.trim()) {
                setSearchResults(null);
                return;
            }

            setIsSearching(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/stocks/search?query=${searchQuery}`);
                setSearchResults(response.data);
                setShowResults(true);
            } catch (error) {
                console.error('Search error:', error);
                setSearchResults(null);
            } finally {
                setIsSearching(false);
            }
        };

        const timeoutId = setTimeout(searchStock, 500);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    return (
        <>
            <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo & Desktop Nav */}
                        <div className="flex items-center gap-8">
                            <Link to="/" className="flex items-center gap-2">
                                <img src="/logo.png" alt="SmartTheta" className="h-8 w-auto" />
                            </Link>

                            <div className="hidden md:flex items-center gap-6">
                                {navItems.map((item) => (
                                    item.isHash ? (
                                        <a
                                            key={item.name}
                                            href={isHomePage ? item.href : `/${item.href}`}
                                            onClick={(e) => {
                                                if (!isHomePage) {
                                                    e.preventDefault();
                                                    window.location.href = `/${item.href}`;
                                                }
                                            }}
                                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Search & Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="relative" ref={searchRef}>
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => {
                                        if (searchResults) setShowResults(true);
                                    }}
                                    placeholder="Search stocks"
                                    className="pl-9 pr-4 py-2 w-64 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                                />

                                {/* Search Results Dropdown */}
                                {showResults && searchResults && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                                        <button
                                            onClick={() => {
                                                setSelectedStock(searchResults.symbol);
                                                setShowResults(false);
                                                setSearchQuery('');
                                            }}
                                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
                                        >
                                            <div>
                                                <div className="font-bold text-slate-900">{searchResults.symbol}</div>
                                                <div className="text-xs text-slate-500 truncate">{searchResults.name}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium text-slate-900">₹{searchResults.price.toFixed(2)}</div>
                                                <div className={`text-xs ${searchResults.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {searchResults.change >= 0 ? '+' : ''}{searchResults.changePercent.toFixed(2)}%
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                )}

                                {isSearching && (
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="text-sm font-medium text-slate-600 hover:text-primary px-3 py-2">
                                    Login
                                </button>
                                <button className="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-5 py-2 rounded-full shadow-lg shadow-primary/25 transition-all">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-slate-900 p-2"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                item.isHash ? (
                                    <a
                                        key={item.name}
                                        href={isHomePage ? item.href : `/${item.href}`}
                                        className="text-base font-medium text-slate-600 hover:text-primary"
                                        onClick={(e) => {
                                            setIsMenuOpen(false);
                                            if (!isHomePage) {
                                                e.preventDefault();
                                                window.location.href = `/${item.href}`;
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-base font-medium text-slate-600 hover:text-primary"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                <button className="text-base font-medium text-slate-600 hover:text-primary text-left">
                                    Login
                                </button>
                                <button className="text-base font-medium text-white bg-primary hover:bg-primary/90 px-5 py-2 rounded-full shadow-lg shadow-primary/25 transition-all">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Stock Modal */}
            {selectedStock && (
                <StockModal
                    symbol={selectedStock}
                    onClose={() => setSelectedStock(null)}
                />
            )}
        </>
    );
};
