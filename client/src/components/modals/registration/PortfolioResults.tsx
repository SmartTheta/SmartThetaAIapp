import React, { useMemo } from 'react';
import { ShieldCheck, BarChart3, PieChart, TrendingUp, Shield, Bot, ArrowRight } from 'lucide-react';
import { tiers, riskSections, TierData } from './RegistrationData';

interface PortfolioResultsProps {
    riskAnswers: Record<string, number>;
    onClose: () => void;
    onComplete: (tier: TierData) => void;
}

export const PortfolioResults: React.FC<PortfolioResultsProps> = ({
    riskAnswers, onComplete
}) => {
    const allQs = riskSections.flatMap(s => s.questions);

    const scores = useMemo(() => {
        if (Object.keys(riskAnswers).length < allQs.length) return null;

        const getScore = (id: string) => riskAnswers[id] || 0;

        // 1. Risk Capacity (RC)
        const financialPosition = (getScore('q1') + getScore('q5') + getScore('q6')) / 3;
        const timeHorizon = (getScore('q2') + getScore('q3')) / 2;
        const humanCapital = getScore('q4');
        const rc = (financialPosition * 0.4) + (timeHorizon * 0.3) + (humanCapital * 0.3);

        // 2. Risk Tolerance (RT)
        const emotionalComposure = (getScore('q7') + getScore('q8') + getScore('q9') + getScore('q12')) / 4;
        const personality = (getScore('q10') + getScore('q13')) / 2;
        const experience = getScore('q11');
        const rt = (emotionalComposure * 0.35) + (personality * 0.35) + (experience * 0.30);

        // 3. Behavioral Bias Index (BBI)
        const cognitiveBias = (getScore('q14') + getScore('q15') + getScore('q16') + getScore('q17') + getScore('q18') + getScore('q19')) / 6;
        const emotionalBias = getScore('q20');
        const bbi = 1.0 - ((cognitiveBias * 0.6) + (emotionalBias * 0.4)) / 100;

        const finalRps = Math.min(rc, rt) * bbi * 1.0;
        const tier = tiers.find(t => finalRps >= t.range[0] && finalRps <= t.range[1]) || tiers[0];

        return { rc, rt, bbi, finalRps, tier };
    }, [riskAnswers, allQs.length]);

    if (!scores) return null;

    return (
        <div className="flex flex-col md:flex-row h-full animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
            {/* Left Sidebar: Summary & Profile */}
            <div className="w-full md:w-[320px] bg-slate-50 p-8 border-r border-slate-100 flex flex-col">
                <div className="mb-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                        <ShieldCheck className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Risk Profile</h1>
                    <p className="text-sm text-slate-500 font-medium">Analysis complete based on your responses</p>
                </div>

                <div className="flex-grow space-y-6">
                    {/* Tier Card */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Recommended Tier</p>
                        <h2 className="text-xl font-bold text-slate-900 leading-tight">Tier {scores.tier.id}: {scores.tier.name}</h2>

                        <div className="mt-4 pt-4 border-t border-slate-50">
                            <div className="flex justify-between items-end mb-1">
                                <span className="text-xs font-semibold text-slate-500">Risk Score</span>
                                <span className="text-2xl font-black text-blue-600">{Math.round(scores.finalRps)}<span className="text-xs text-slate-400 font-normal ml-0.5">/100</span></span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                                    style={{ width: `${Math.round(scores.finalRps)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Shield size={16} className="text-blue-500" />
                            <span className="text-xs font-medium">Standard Volatility Protection</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <TrendingUp size={16} className="text-blue-500" />
                            <span className="text-xs font-medium">Optimized for Long-term Growth</span>
                        </div>
                    </div>
                </div>

                {/* Continue Action in Sidebar for Desktop */}
                <button
                    onClick={() => onComplete(scores.tier)}
                    className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                    Continue to Builder
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Right Main Content: Detailed Metrics & Allocation */}
            <div className="flex-grow p-8 bg-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Metrics Grid */}
                    <section>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Risk Foundation Metrics</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Capacity */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <TrendingUp size={16} />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Capacity</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">{Math.round(scores.rc)}</span>
                                    <span className="text-[10px] font-medium text-slate-400">Score</span>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1">Financial ability to absorb loss</p>
                            </div>

                            {/* Tolerance */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-200 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <PieChart size={16} />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Tolerance</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">{Math.round(scores.rt)}</span>
                                    <span className="text-[10px] font-medium text-slate-400">Score</span>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1">Emotional comfort with risk</p>
                            </div>

                            {/* Bias */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-slate-50 text-slate-600 rounded-lg flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                        <Bot size={16} />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Bias Index</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">{scores.bbi.toFixed(2)}</span>
                                    <span className="text-[10px] font-medium text-slate-400">Idx</span>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1">Behavioral bias adjustment</p>
                            </div>
                        </div>
                    </section>

                    {/* Asset Allocation */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recommended Allocation</h3>
                            <div className="px-3 py-1 bg-blue-50 rounded-full">
                                <span className="text-[10px] font-bold text-blue-600">OPTIMIZED FOR YOU</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { label: 'Equity', value: scores.tier.equity, color: 'bg-blue-600', icon: BarChart3, desc: 'Growth oriented investments in stocks' },
                                { label: 'Debt', value: scores.tier.debt, color: 'bg-indigo-500', icon: Shield, desc: 'Stable returns and capital protection' },
                                { label: 'Gold / Alts', value: scores.tier.gold, color: 'bg-amber-400', icon: TrendingUp, desc: 'Inflation hedge and diversification' }
                            ].map((asset, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors group">
                                    <div className={`w-10 h-10 ${asset.color} rounded-lg flex items-center justify-center text-white shrink-0`}>
                                        <asset.icon size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-bold text-slate-900">{asset.label}</span>
                                            <span className="text-sm font-black text-slate-900">{asset.value}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-grow h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${asset.color} rounded-full transition-all duration-1000`}
                                                    style={{ width: asset.value }}
                                                />
                                            </div>
                                            <p className="text-[11px] text-slate-400 whitespace-nowrap hidden sm:block">{asset.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Disclaimer/Footer */}
                    <div className="pt-4 border-t border-slate-100">
                        <p className="text-[10px] text-slate-400 leading-relaxed">
                            This risk profile is based on your provided answers and should be used as a guide only. SmartTheta's AI adjusts these allocations based on real-time market conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

