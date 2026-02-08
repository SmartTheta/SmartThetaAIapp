import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, ChevronDown, Globe } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [selectedLang, setSelectedLang] = React.useState('English');
    const [isLangOpen, setIsLangOpen] = React.useState(false);

    const languages = [
        'English', 'Hindi', 'Tamil', 'Telugu', 'Kannada',
        'Malayalam', 'Marathi', 'Gujarati', 'Bengali', 'Punjabi'
    ];

    return (
        <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Topbar */}
                <header className="h-16 bg-white flex items-center justify-between px-8 shrink-0 relative z-20">
                    <div className="flex items-center gap-4 text-slate-500">
                        {/* Search bar removed */}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 text-sm font-semibold text-slate-600 cursor-pointer hover:text-blue-600 transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {selectedLang}
                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isLangOpen && "rotate-180")} />
                            </button>

                            {isLangOpen && (
                                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => {
                                                setSelectedLang(lang);
                                                setIsLangOpen(false);
                                            }}
                                            className={cn(
                                                "w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors",
                                                selectedLang === lang ? "text-blue-600 font-bold bg-blue-50/50" : "text-slate-600 font-medium"
                                            )}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-4 border-l border-slate-200 pl-6 text-slate-400">
                            <button className="relative hover:text-blue-600 transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
                            </button>

                            <div className="flex items-center gap-3 ml-2">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-bold text-slate-900 leading-none">Sri</p>
                                    <p className="text-[10px] font-medium text-slate-500 mt-1">Investor Account</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm ring-1 ring-blue-50">
                                    <span className="text-blue-600 font-bold text-sm">S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
