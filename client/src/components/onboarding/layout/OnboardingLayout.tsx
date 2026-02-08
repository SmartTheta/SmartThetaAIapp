import React from 'react';
import { Bot, CheckCircle2, Globe, ChevronDown, Bell, Binary, Wallet, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';

interface OnboardingLayoutProps {
    children: React.ReactNode;
    currentStep: number;
    mode?: 'ai' | 'classic';
    setMode?: (mode: 'ai' | 'classic') => void;
    showModeToggle?: boolean;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
    children,
    currentStep,
    mode,
    setMode,
    showModeToggle = false
}) => {
    const steps = [
        { name: 'Portfolio Setup', status: 'current', icon: Bot, path: '/onboarding/portfolio' },
        { name: 'KYC Setup', status: 'upcoming', icon: ShieldCheck, path: '/onboarding/kyc' },
        { name: 'Portfolio Review', status: 'upcoming', icon: CheckCircle2, path: '/dashboard/portfolio-result' },
        { name: 'Connect Broker', status: 'upcoming', icon: Wallet, path: '#' },
    ];

    const updatedSteps = steps.map((step, idx) => {
        if (idx < currentStep) return { ...step, status: 'completed' };
        if (idx === currentStep) return { ...step, status: 'current' };
        return { ...step, status: 'upcoming' };
    });

    const [selectedLang, setSelectedLang] = React.useState('English');
    const [isLangOpen, setIsLangOpen] = React.useState(false);

    const languages = [
        'English', 'Hindi', 'Tamil', 'Telugu', 'Kannada',
        'Malayalam', 'Marathi', 'Gujarati', 'Bengali', 'Punjabi'
    ];

    return (
        <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col h-full border-r border-slate-800 shrink-0">
                <div className="p-6 mb-4">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/theta1.png" alt="SmartTheta" className="h-8 w-auto" />
                        <span className="text-xl font-extrabold text-white tracking-tight">SmartTheta</span>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {updatedSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
                                step.status === 'current'
                                    ? "bg-blue-600/10 text-blue-400 border border-blue-600/20"
                                    : step.status === 'completed'
                                        ? "text-blue-400"
                                        : "text-slate-500"
                            )}
                        >
                            <step.icon className={cn(
                                "w-5 h-5",
                                step.status === 'upcoming' ? "text-slate-600" : "text-blue-500"
                            )} />
                            {step.name}
                            {step.status === 'completed' && <CheckCircle2 className="ml-auto w-4 h-4 text-blue-500" />}
                            {step.status === 'current' && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
                            )}
                        </div>
                    ))}
                </nav>

                <div className="p-6 mt-auto border-t border-slate-800/50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
                            S
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate">Sri</p>
                            <p className="text-[10px] text-slate-500 truncate font-medium uppercase tracking-wider">Onboarding</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Topbar */}
                <header className="h-16 bg-white flex items-center justify-between px-8 shrink-0 relative z-20 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                        {showModeToggle && setMode && (
                            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
                                <button
                                    onClick={() => setMode('ai')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all",
                                        mode === 'ai'
                                            ? "bg-white text-blue-600 shadow-sm border border-slate-200"
                                            : "text-slate-600 hover:text-slate-900"
                                    )}
                                >
                                    <Bot size={14} />
                                    AI Mode
                                </button>
                                <button
                                    onClick={() => setMode('classic')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all",
                                        mode === 'classic'
                                            ? "bg-white text-blue-600 shadow-sm border border-slate-200"
                                            : "text-slate-600 hover:text-slate-900"
                                    )}
                                >
                                    <Binary size={14} />
                                    Classic Mode
                                </button>
                            </div>
                        )}
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
                                    <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">Investor</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm transition-transform hover:scale-105">
                                    <span className="text-blue-600 font-bold text-sm">S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#f8fafc]">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
