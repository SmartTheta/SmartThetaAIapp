import React from 'react';
import { Bot, FileText, Sparkles, ChevronRight, Shield, TrendingUp } from 'lucide-react';
import { RiskAssessmentResult } from './RiskQuestionnaire';

interface PortfolioPreviewProps {
    result: RiskAssessmentResult;
    capital: number;
    strategy: 'sip' | 'lumpsum' | 'both';
    onExecute: () => void;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ result, capital, strategy, onExecute }) => {
    // Parse percentage strings (e.g., "40-50%" -> 45)
    const parseValue = (val: string) => {
        const nums = val.replace(/[^0-9-]/g, '').split('-').map(Number);
        return nums.length > 1 ? (nums[0] + nums[1]) / 2 : nums[0];
    };

    const equityPct = parseValue(result.allocation.equity);
    const debtPct = parseValue(result.allocation.debt);
    const goldPct = parseValue(result.allocation.gold);

    const allocations = [
        {
            name: 'Large Cap Equity',
            fund: 'Nifty 50 Index Fund',
            percentage: equityPct,
            color: 'bg-blue-600',
            gradient: 'from-blue-50 to-blue-100',
            borderColor: 'border-blue-200'
        },
        {
            name: 'Mid Cap Equity',
            fund: 'Diversified Growth Fund',
            percentage: debtPct > 20 ? 30 : debtPct, // Mocking some logic like the reference
            color: 'bg-green-600',
            gradient: 'from-green-50 to-green-100',
            borderColor: 'border-green-200'
        },
        {
            name: 'Debt Funds',
            fund: 'Short Duration Fund',
            percentage: debtPct > 20 ? 20 : debtPct,
            color: 'bg-purple-600',
            gradient: 'from-purple-50 to-purple-100',
            borderColor: 'border-purple-200'
        },
        {
            name: 'Gold ETF',
            fund: 'Sovereign Gold Bonds',
            percentage: goldPct,
            color: 'bg-yellow-600',
            gradient: 'from-yellow-50 to-yellow-100',
            borderColor: 'border-yellow-200'
        }
    ];

    return (
        <div className="min-h-full bg-slate-50 py-12 px-6 pb-32">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* AI Report Header */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="p-8 text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                                    <Bot className="w-10 h-10" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">Your AI-Generated Portfolio</h2>
                                    <p className="text-blue-100 mt-1">Based on {result.tierName} | {strategy.toUpperCase()} Strategy</p>
                                </div>
                            </div>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 border border-white/30 whitespace-nowrap">
                                <FileText className="w-5 h-5" />
                                Download Report
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                                <p className="text-blue-100 text-sm mb-2">Expected Returns (1Y)</p>
                                <p className="text-3xl font-bold">12-15%</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                                <p className="text-blue-100 text-sm mb-2">Historical Avg (3Y)</p>
                                <p className="text-3xl font-bold">14.2%</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                                <p className="text-blue-100 text-sm mb-2">Risk Score</p>
                                <p className="text-3xl font-bold">{Math.round(result.finalScore / 10)}/10</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Allocation */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-8">
                            <Sparkles className="w-6 h-6 text-blue-600" />
                            <h3 className="text-2xl font-bold text-slate-900">Recommended Allocation</h3>
                        </div>
                        <div className="space-y-4">
                            {allocations.map((item, idx) => (
                                <div key={idx} className={`flex items-center gap-4 p-5 bg-gradient-to-r ${item.gradient} rounded-2xl border ${item.borderColor} hover:shadow-lg transition-all transform hover:scale-[1.01]`}>
                                    <div className={`w-3 h-20 ${item.color} rounded-full`}></div>
                                    <div className="flex-1">
                                        <p className="font-bold text-xl text-slate-900">{item.name}</p>
                                        <p className="text-slate-600 mt-1">{item.fund}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-3xl text-slate-800">{item.percentage}%</p>
                                        <p className="text-slate-600 mt-1">₹{Math.round(capital * (item.percentage / 100)).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Risk Tuning */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-slate-900">Fine-tune Your Risk</h3>
                            <button className="text-blue-600 font-bold hover:text-blue-700 transition flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Adjust Risk
                            </button>
                        </div>
                        <p className="text-slate-600 mb-8">Answer a few quick questions to adjust your portfolio risk level</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button className="p-4 border-2 border-red-200 text-red-700 rounded-2xl font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2 group">
                                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Lower Risk
                            </button>
                            <button className="p-4 border-2 border-green-200 text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2 group">
                                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Higher Risk
                            </button>
                        </div>
                    </div>
                </div>

                {/* Execute Button */}
                <button
                    onClick={onExecute}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-6 rounded-2xl font-bold text-2xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-2xl shadow-green-100 flex items-center justify-center gap-3 group transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Execute Portfolio
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default PortfolioPreview;
