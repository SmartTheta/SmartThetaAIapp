import React, { useState, useEffect } from 'react';
import { User, Clock, LayoutGrid, Briefcase, Shield, Settings, ChevronRight, AlertCircle, UserCheck } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import RiskQuestionnaire, { RiskAssessmentResult } from '../components/dashboard/RiskQuestionnaire';
import { AIAnalysisComplete } from '../components/modals/registration/AIAnalysisComplete';
import { KYCComponent } from '../components/dashboard/KYCComponent';
import InvestmentDetails from '../components/dashboard/InvestmentDetails';
import PortfolioPreview from '../components/dashboard/PortfolioPreview';
import { tiers } from '../components/modals/registration/RegistrationData';

type OnboardingStage = 'idle' | 'risk-assessment' | 'pricing' | 'kyc' | 'investment-details' | 'portfolio-preview';

export const Dashboard: React.FC = () => {
    const [onboardingStage, setOnboardingStage] = useState<OnboardingStage>('idle');
    const [assessmentResult, setAssessmentResult] = useState<RiskAssessmentResult | null>(null);
    const [investmentData, setInvestmentData] = useState<{ capital: number; strategy: 'sip' | 'lumpsum' | 'both' } | null>(null);

    useEffect(() => {
        // Auto-trigger risk assessment if not done
        if (onboardingStage === 'idle' && !assessmentResult) {
            setOnboardingStage('risk-assessment');
        }
    }, [onboardingStage, assessmentResult]);


    // Get current time
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const chartData = [
        { name: 'Jan', value: 1000000 },
        { name: 'Feb', value: 1050000 },
        { name: 'Mar', value: 1020000 },
        { name: 'Apr', value: 1100000 },
        { name: 'May', value: 1150000 },
        { name: 'Jun', value: 1250000 },
    ];


    const sidebarItems = [
        { id: 'assessment', label: 'Risk Assessment', icon: AlertCircle, active: onboardingStage === 'risk-assessment' },
        { id: 'risk', label: 'Risk Profile', icon: Shield, active: onboardingStage === 'pricing' },
        { id: 'portfolio', label: 'Portfolio Setup', icon: Briefcase, active: onboardingStage === 'investment-details' },
        { id: 'kyc', label: 'KYC Setup', icon: UserCheck, active: onboardingStage === 'kyc' },
        { id: 'dashboard', label: 'Smart Basket', icon: LayoutGrid, active: onboardingStage === 'portfolio-preview' },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            {/* Sidebar */}
            <aside className="w-64 bg-[#2D4D6D] text-white flex flex-col shrink-0">
                <div className="p-8 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 p-1.5">
                        <img src="/theta1.png" className="w-full h-full object-contain brightness-0 invert" alt="ST" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">SmartTheta</span>
                </div>

                <nav className="flex-grow px-4 space-y-1">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${item.active
                                ? 'bg-white/15 text-white shadow-sm'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={20} className={item.active ? 'text-blue-400' : 'text-slate-400'} />
                            <span className="flex-grow text-left">{item.label}</span>
                            {item.active && <ChevronRight size={16} className="text-blue-400" />}
                        </button>
                    ))}
                </nav>

                <div className="p-6 mt-auto">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                        <Settings size={20} className="text-slate-400" />
                        <span>Settings</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow overflow-y-auto flex flex-col">
                {/* Global Top Navigation */}
                <header className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                            <User size={24} className="text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-800 leading-tight">Welcome, Sri!</h2>
                            <p className="text-base text-slate-500 font-medium tracking-tight mt-1">Let's get started with your <span className="text-slate-900 font-bold underline decoration-blue-500/30 underline-offset-4">Risk Assessment</span> to build your Personalized Investment strategy.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Status indicators like in img */}
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-12 bg-blue-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-2/3"></div>
                            </div>
                            <div className="h-2 w-12 bg-emerald-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-full"></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-lg">
                            <Clock size={16} />
                            <span>{currentTime}</span>
                        </div>

                        <select className="text-sm font-bold border-none bg-transparent focus:ring-0 cursor-pointer text-slate-600">
                            <option>English</option>
                        </select>

                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-100 transition-colors">
                            <User size={20} />
                        </div>
                    </div>
                </header>

                <div className={`flex-grow ${onboardingStage === 'risk-assessment' ? 'p-4 lg:p-6' : 'p-8'}`}>
                    {/* Onboarding Content */}
                    {onboardingStage === 'risk-assessment' && (
                        <div className="max-w-6xl mx-auto h-full">
                            <RiskQuestionnaire
                                onComplete={(result) => {
                                    setAssessmentResult(result);
                                    setOnboardingStage('pricing');
                                    window.scrollTo(0, 0);
                                }}
                            />
                        </div>
                    )}

                    {onboardingStage === 'pricing' && assessmentResult && (
                        <div className="max-w-6xl mx-auto py-12 px-6">
                            <AIAnalysisComplete
                                tier={tiers.find(t => t.id === assessmentResult.tier) || tiers[0]}
                                onComplete={() => {
                                    setOnboardingStage('investment-details');
                                    window.scrollTo(0, 0);
                                }}
                            />
                        </div>
                    )}

                    {onboardingStage === 'investment-details' && (
                        <InvestmentDetails
                            onComplete={(data) => {
                                setInvestmentData(data);
                                setOnboardingStage('kyc');
                            }}
                        />
                    )}

                    {onboardingStage === 'kyc' && (
                        <div className="max-w-4xl mx-auto py-12 px-6">
                            <KYCComponent
                                onComplete={() => {
                                    setOnboardingStage('portfolio-preview');
                                    window.scrollTo(0, 0);
                                }}
                            />
                        </div>
                    )}

                    {onboardingStage === 'portfolio-preview' && assessmentResult && investmentData && (
                        <PortfolioPreview
                            result={assessmentResult}
                            capital={investmentData.capital}
                            strategy={investmentData.strategy}
                            onExecute={() => {
                                setOnboardingStage('idle');
                            }}
                        />
                    )}

                    {onboardingStage === 'idle' && (
                        <div className="space-y-8">
                            {/* Original Dashboard Layout if idle */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* ... original charts and info cards ... */}
                                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 flex flex-col h-[550px]">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Portfolio Performance</h2>
                                    <p className="text-red-500 font-bold mb-6">Not Connected Yet</p>
                                    <div className="h-60 w-full mb-8">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={chartData}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                                                <YAxis hide />
                                                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                                                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="mt-auto bg-blue-50 p-6 rounded-xl text-center">
                                        <p className="text-slate-700 mb-4">Connect Your Broker to check portfolio performance</p>
                                        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Connect Your Broker</button>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 flex flex-col h-[550px]">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Your Risk Profile</h2>
                                    <p className="text-red-500 font-bold mb-6">Not Assessed Yet</p>
                                    <div className="flex-grow flex items-center justify-center">
                                        <p className="text-slate-400">Assessment Data visualization</p>
                                    </div>
                                    <div className="mt-auto bg-blue-50 p-6 rounded-xl text-center">
                                        <p className="text-slate-700 mb-4">Complete your Risk Assessment questionnaire</p>
                                        <button
                                            onClick={() => setOnboardingStage('risk-assessment')}
                                            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
                                        >
                                            Risk Assessment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

