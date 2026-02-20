import {
    ClipboardList,
    UserCircle,
    LineChart,
    Settings,
    LogOut,
    X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../../lib/utils';

interface SidebarProps {
    onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
    const location = useLocation();

    const menuItems = [
        { icon: ClipboardList, label: 'Risk Assessment', href: '/dashboard/risk-assessment' },
        { icon: UserCircle, label: 'Risk Profile', href: '/dashboard/risk-profile' },
        { icon: LineChart, label: 'My Portfolio', href: '/dashboard/portfolio' },
    ];

    return (
        <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col h-full border-r border-slate-800">
            {/* Logo Section */}
            <div className="p-6 mb-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group" onClick={onClose}>
                    <img src="/theta1.png" alt="SmartTheta" className="h-8 w-auto" />
                    <span className="text-xl font-extrabold text-white tracking-tight">SmartTheta</span>
                </Link>
                {/* Close button — only visible on mobile */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                        aria-label="Close sidebar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow px-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            onClick={onClose}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group",
                                isActive
                                    ? "bg-blue-600/10 text-blue-400 border border-blue-600/20"
                                    : "hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-colors",
                                isActive ? "text-blue-500" : "text-slate-400 group-hover:text-slate-200"
                            )} />
                            {item.label}
                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 mt-auto border-t border-slate-800/50">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                    <Settings className="w-5 h-5" />
                    Settings
                </button>
                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
};
