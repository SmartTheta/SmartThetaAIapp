import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onSignUpClick?: () => void;
    onLoginClick?: () => void;
}

export const Navbar = ({ onSignUpClick, onLoginClick }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'Home', href: '/', isHash: false },
        { name: 'Blog', href: '/blog', isHash: false },
        { name: 'Contact', href: '#contact', isHash: true },
    ];

    return (
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left: SmartTheta Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src="/theta1.png" alt="SmartTheta" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                            <span className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">SmartTheta</span>
                        </Link>
                    </div>

                    {/* Center: Menu Items (Desktop) */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navItems.map((item) => (
                            item.isHash ? (
                                <a
                                    key={item.name}
                                    href={isHomePage ? item.href : `/${item.href}`}
                                    onClick={() => {
                                        if (!isHomePage) {
                                            // Handle redirect to hash on homepage
                                        }
                                    }}
                                    className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right: Login & Sign Up (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={onLoginClick}
                            className="text-sm font-bold text-slate-700 hover:text-blue-600 px-4 py-2 transition-colors"
                        >
                            Login
                        </button>
                        <button
                            onClick={onSignUpClick}
                            className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-slate-50 p-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-x-0 bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                        {navItems.map((item) => (
                            item.isHash ? (
                                <a
                                    key={item.name}
                                    href={isHomePage ? item.href : `/${item.href}`}
                                    className="text-lg font-bold text-slate-900 bg-slate-50 px-4 py-3 rounded-xl active:bg-blue-50 active:text-blue-600 transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-lg font-bold text-slate-900 bg-slate-50 px-4 py-3 rounded-xl active:bg-blue-50 active:text-blue-600 transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>
                    <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                onLoginClick?.();
                            }}
                            className="w-full py-4 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-xl"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                onSignUpClick?.();
                            }}
                            className="w-full py-4 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-lg text-center"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};