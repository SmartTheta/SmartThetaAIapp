import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, User, RefreshCw, Download } from 'lucide-react';
import { RiskAssessmentResult } from './RiskAssessmentPage';

export const RiskProfilePage = () => {
    const [results, setResults] = useState<RiskAssessmentResult | null>(null);
    const [isCalculationOpen, setIsCalculationOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('riskAssessmentResult');
        if (saved) {
            try {
                setResults(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse risk results", e);
            }
        }
    }, []);

    const handleDownload = () => {
        window.print();
    };

    if (!results) {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center">
                <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <User className="w-10 h-10 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">No Risk Profile Found</h1>
                    <p className="text-slate-600 mb-10 max-w-md mx-auto">Please complete the Risk Assessment to unlock your personalized investment profile.</p>
                    <button
                        onClick={() => window.location.href = '/dashboard/risk-assessment'}
                        className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all"
                    >
                        Start Risk Assessment
                    </button>
                </div>
            </div>
        );
    }


    const getConstraintMessage = () => {
        if (results.constrainingFactor === 'capacity') {
            return 'Your risk is limited by your lower score.';
        } else if (results.constrainingFactor === 'tolerance') {
            return 'Your risk is limited by your lower score.';
        }
        return 'Your capacity and tolerance are well balanced.';
    };

    const getBehavioralList = () => {
        const items: { label: string; level: string }[] = [];

        if (results.behavioralInsights.lossAversion !== 'Low') {
            items.push({ label: 'Loss aversion', level: results.behavioralInsights.lossAversion });
        }
        if (results.behavioralInsights.regretSensitivity !== 'Low') {
            items.push({ label: 'Regret sensitivity', level: results.behavioralInsights.regretSensitivity });
        }
        if (results.behavioralInsights.anchoring !== 'Low') {
            items.push({ label: 'Anchoring', level: results.behavioralInsights.anchoring });
        }
        if (results.behavioralInsights.overconfidence !== 'Low') {
            items.push({ label: 'Overconfidence', level: results.behavioralInsights.overconfidence });
        }
        if (results.behavioralInsights.herding !== 'Low') {
            items.push({ label: 'Herding tendency', level: results.behavioralInsights.herding });
        }

        return items.length > 0 ? items : [{ label: 'Well-balanced behavioral profile', level: '' }];
    };

    return (
        <div className="max-w-7xl mx-auto">
            <style>
                {`
                @media print {
                    .no-print { display: none !important; }
                    .max-w-7xl { max-width: 100% !important; margin: 0 !important; }
                    .bg-slate-900 { background: #000 !important; color: #fff !important; }
                    button { display: none !important; }
                    body { background: white !important; }
                }
                `}
            </style>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Risk Profile</h1>
                    <p className="text-slate-600">Based on your latest assessment, here's your personalized investment profile.</p>
                </div>
                <div className="flex items-center gap-3 no-print">
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
                    >
                        <Download size={16} /> Download Report
                    </button>
                    <button
                        onClick={() => window.location.href = '/dashboard/risk-assessment'}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-all shadow-sm"
                    >
                        <RefreshCw size={16} /> Retake Assessment
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tier Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                <User className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">{results.tierName}</h2>
                                <p className="text-sm text-slate-600 mb-3">
                                    Adjusted for: <span className="font-semibold text-slate-900">{results.goalType}</span> {results.goalTimeframe}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Calculation Details - Collapsible */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                        <button
                            onClick={() => setIsCalculationOpen(!isCalculationOpen)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                            <span className="font-semibold text-slate-900">How your risk profile was calculated</span>
                            {isCalculationOpen ? (
                                <ChevronUp className="w-5 h-5 text-slate-400" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400" />
                            )}
                        </button>

                        {isCalculationOpen && (
                            <div className="px-6 pb-6 space-y-6 border-t border-slate-100">
                                {/* Risk Capacity */}
                                <div className="pt-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-900">
                                            Risk Capacity <span className="text-slate-500 font-normal">(Ability)</span>
                                        </span>
                                        <span className="text-sm font-bold text-slate-900">{Math.round(results.riskCapacity)} / 100</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 transition-all duration-500"
                                            style={{ width: `${results.riskCapacity}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Risk Tolerance */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-900">
                                            Risk Tolerance <span className="text-slate-500 font-normal">(Willingness)</span>
                                        </span>
                                        <span className="text-sm font-bold text-slate-900">{Math.round(results.riskTolerance)} / 100</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-amber-500 transition-all duration-500"
                                            style={{ width: `${results.riskTolerance}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Constraint Message */}
                                <div className="text-sm text-slate-600 italic">
                                    {getConstraintMessage()}
                                </div>

                                {/* Behavioral Bias Index */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-900">
                                            Behavioral Bias Index: <span className="text-slate-900">{results.behavioralBias.toFixed(2)}</span> <span className="text-slate-500 font-normal">(Low bias)</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Explanation */}
                                <div className="text-sm text-slate-600 pt-2 border-t border-slate-100">
                                    Based on your ability, willingness, and biases.
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Behavioral Tendencies */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-4">Your behavioral tendencies</h3>
                        <ul className="space-y-2">
                            {getBehavioralList().map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <span className="text-slate-900">•</span>
                                    <span className="text-slate-700">
                                        <span className="font-semibold">{item.label}</span>
                                        {item.level && ` – ${item.level}`}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>




                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Allocation Card */}
                    <div className="bg-slate-900 rounded-2xl p-6 text-white">
                        <h3 className="font-semibold mb-6">Recommended allocation range</h3>

                        <div className="space-y-5">
                            <div>
                                <div className="flex items-center justify-between mb-2 text-sm">
                                    <span>Equity</span>
                                    <span className="font-semibold">{results.allocation.equity}</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: '70%' }} />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2 text-sm">
                                    <span>Debt</span>
                                    <span className="font-semibold">{results.allocation.debt}</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500" style={{ width: '25%' }} />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2 text-sm">
                                    <span>Gold</span>
                                    <span className="font-semibold">{results.allocation.gold}</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-500" style={{ width: '5%' }} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="text-xs text-slate-400 mb-1">Goal: <span className="text-white font-medium">{results.goalType}</span> {results.goalTimeframe}</div>
                            <div className="text-xs text-slate-400">Moderate equity focus for your long-term goal</div>
                        </div>

                        <button
                            onClick={() => window.location.href = '/dashboard/pricing'}
                            className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold mt-6 hover:bg-slate-100 transition-all"
                        >
                            Continue to Investment Setup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
