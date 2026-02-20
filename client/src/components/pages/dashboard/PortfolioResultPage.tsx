import { useState, useEffect } from 'react';
import { Download, ShieldCheck, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import { RiskAssessmentResult } from './RiskAssessmentPage';

export const PortfolioResultPage = () => {
    const [results, setResults] = useState<RiskAssessmentResult | null>(null);
    const [selection, setSelection] = useState<{ amount: string, type: string, mode: string } | null>(null);
    const [riskLevel, setRiskLevel] = useState<'moderate' | 'aggressive' | 'conservative'>('moderate');

    useEffect(() => {
        const savedResults = localStorage.getItem('riskAssessmentResult');
        const savedSelection = localStorage.getItem('portfolioSelection');

        if (savedResults) setResults(JSON.parse(savedResults));
        if (savedSelection) setSelection(JSON.parse(savedSelection));
    }, []);

    const amount = selection ? parseInt(selection.amount) || 0 : 0;
    const strategyName = selection?.type === 'sip' ? 'SIP Strategy' : selection?.type === 'lumpsum' ? 'Lumpsum Strategy' : 'Hybrid Strategy';

    // Simulated Dynamic Data Based on Selection
    const portfolioStats = {
        expectedReturns: '12-15%',
        historicalAvg: '14.2%',
        riskScore: '6/10'
    };

    const getAllocation = () => {
        // Base proportions
        return [
            { category: 'Large Cap Equity', asset: 'Nifty 50 Index Fund', percentage: 40, color: 'bg-blue-600' },
            { category: 'Mid Cap Equity', asset: 'Diversified Growth Fund', percentage: 30, color: 'bg-indigo-600' },
            { category: 'Debt Funds', asset: 'Short Duration Fund', percentage: 20, color: 'bg-slate-400' },
            { category: 'Gold ETF', asset: 'Sovereign Gold Bonds', percentage: 10, color: 'bg-amber-400' },
        ];
    };

    const allocation = getAllocation();

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    const [mode, setMode] = useState<'ai' | 'classic'>('classic');

    return (
        <OnboardingLayout
            currentStep={2}
            mode={mode}
            setMode={setMode}
            showModeToggle={true}
        >
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Your AI-Generated Portfolio</h1>
                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                {results?.tierName || 'Moderate Risk'}
                            </span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>{strategyName}</span>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                        <Download size={18} />
                        Download Report
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Expected Returns (1Y)</p>
                        <p className="text-3xl font-black text-green-600">{portfolioStats.expectedReturns}</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Historical Avg (3Y)</p>
                        <p className="text-3xl font-black text-slate-900">{portfolioStats.historicalAvg}</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Risk Score</p>
                        <p className="text-3xl font-black text-amber-600">{portfolioStats.riskScore}</p>
                    </div>
                </div>

                {/* Allocation Table / Cards */}
                <div className="bg-white rounded-3xl border-2 border-slate-100 overflow-hidden shadow-sm">
                    <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-tight">Recommended Allocation</h3>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Asset distribution</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Value</p>
                            <p className="text-lg sm:text-xl font-black text-blue-600">{formatCurrency(amount)}</p>
                        </div>
                    </div>

                    {/* Mobile: Card View */}
                    <div className="block sm:hidden p-4 space-y-3">
                        {allocation.map((item, idx) => (
                            <div key={idx} className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm`}></div>
                                    <div>
                                        <p className="font-black text-slate-900 text-sm leading-tight">{item.category}</p>
                                        <p className="text-[11px] text-slate-500 font-medium">{item.asset}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-slate-900">{item.percentage}%</p>
                                    <p className="text-[10px] font-bold text-blue-600 uppercase mt-0.5">{formatCurrency((amount * item.percentage) / 100)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Table View */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="text-left px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                                    <th className="text-left px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset Name</th>
                                    <th className="text-right px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Allocation %</th>
                                    <th className="text-right px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {allocation.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-125 transition-transform`}></div>
                                                <span className="font-black text-slate-900">{item.category}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="text-slate-600 font-bold">{item.asset}</span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <span className="text-slate-900 font-black text-lg">{item.percentage}%</span>
                                        </td>
                                        <td className="px-8 py-5 text-right font-black text-blue-600 text-lg">
                                            {formatCurrency((amount * item.percentage) / 100)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Fine-tune Section */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-bold mb-2">Fine-tune Your Risk</h3>
                            <p className="text-slate-400 font-medium">Adjust risk level to see how it changes your target allocation and expected returns.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setRiskLevel('conservative')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${riskLevel === 'conservative' ? 'bg-white text-slate-900 shadow-xl' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                    }`}
                            >
                                <ArrowDownCircle size={20} />
                                Lower Risk
                            </button>
                            <button
                                onClick={() => setRiskLevel('aggressive')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${riskLevel === 'aggressive' ? 'bg-white text-slate-900 shadow-xl' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                    }`}
                            >
                                <ArrowUpCircle size={20} />
                                Higher Risk
                            </button>
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-0"></div>
                </div>

                {/* Action Button */}
                <button
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                    <ShieldCheck size={26} />
                    Execute Portfolio
                </button>
            </div>
        </OnboardingLayout>
    );
};
