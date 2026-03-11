import { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, User, RefreshCw, Download, Save, Cake } from 'lucide-react';
import { RiskAssessmentResult } from './RiskAssessmentPage';

// Error boundary to prevent blank page crashes
class RiskProfileErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    state = { hasError: false };
    static getDerivedStateFromError() { return { hasError: true }; }
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('RiskProfilePage crash:', error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="max-w-4xl mx-auto py-20 text-center">
                    <div className="bg-white rounded-2xl p-12 shadow-lg border border-red-200">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
                        <p className="text-slate-600 mb-6">Your risk profile data may be outdated. Please retake the assessment.</p>
                        <div className="flex gap-3 justify-center">
                            <button onClick={() => {
                                localStorage.removeItem('riskAssessmentResult');
                                window.location.href = '/dashboard/risk-assessment';
                            }} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700">
                                Retake Assessment
                            </button>
                            <button onClick={() => this.setState({ hasError: false })}
                                className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50">
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

const API = 'http://localhost:5000/api/risk-profile';

const RISK_CATEGORIES = [
    { category: 1, name: 'Ultra Conservative', min: 0, max: 10, color: '#1e3a5f' },
    { category: 2, name: 'Capital Preservation', min: 11, max: 20, color: '#1e5f8a' },
    { category: 3, name: 'Conservative', min: 21, max: 30, color: '#2563eb' },
    { category: 4, name: 'Mod. Conservative', min: 31, max: 40, color: '#3b82f6' },
    { category: 5, name: 'Moderate', min: 41, max: 50, color: '#6366f1' },
    { category: 6, name: 'Mod. Aggressive', min: 51, max: 60, color: '#8b5cf6' },
    { category: 7, name: 'Growth', min: 61, max: 70, color: '#a855f7' },
    { category: 8, name: 'Aggressive Growth', min: 71, max: 80, color: '#f59e0b' },
    { category: 9, name: 'High Growth', min: 81, max: 90, color: '#ef4444' },
    { category: 10, name: 'Maximum Growth', min: 91, max: 100, color: '#dc2626' },
];

const RiskProfilePageInner = () => {
    const [results, setResults] = useState<RiskAssessmentResult | null>(null);
    const [isCalculationOpen, setIsCalculationOpen] = useState(false);
    const [adjustedValue, setAdjustedValue] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        // Try loading from backend first, then fall back to localStorage
        const loadProfile = async () => {
            const userId = localStorage.getItem('userId');
            if (userId) {
                try {
                    const res = await axios.get(`${API}/${userId}`);
                    const p = res.data.profile;
                    const loaded: RiskAssessmentResult = {
                        riskCapacity: p.riskCapacity,
                        riskTolerance: p.riskTolerance,
                        behavioralBias: p.behavioralBias,
                        age: p.age,
                        ageFactor: p.ageFactor,
                        rawScore: p.rawScore,
                        riskNumber: p.adjustedRiskNumber ?? p.riskNumber,
                        category: p.category,
                        categoryName: p.categoryName,
                        allocation: p.allocation,
                        answers: p.answers,
                        constrainingFactor: p.constrainingFactor,
                        behavioralInsights: p.behavioralInsights,
                        goalType: p.goalType,
                        goalTimeframe: p.goalTimeframe,
                    };
                    setResults(loaded);
                    setAdjustedValue(p.adjustedRiskNumber ?? p.riskNumber);
                    return;
                } catch {
                    // Fall through to localStorage
                }
            }

            const saved = localStorage.getItem('riskAssessmentResult');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    // Handle old format data (finalScore/tier/tierName) -> new format
                    const normalized: RiskAssessmentResult = {
                        riskCapacity: parsed.riskCapacity ?? 50,
                        riskTolerance: parsed.riskTolerance ?? 50,
                        behavioralBias: parsed.behavioralBias ?? 50,
                        age: parsed.age ?? 30,
                        ageFactor: parsed.ageFactor ?? 0.90,
                        rawScore: parsed.rawScore ?? parsed.finalScore ?? 50,
                        riskNumber: parsed.riskNumber ?? parsed.finalScore ?? 50,
                        category: parsed.category ?? parsed.tier ?? 5,
                        categoryName: parsed.categoryName ?? parsed.tierName ?? 'Moderate',
                        allocation: parsed.allocation ?? { equity: '45%', debt: '45%', gold: '10%' },
                        answers: parsed.answers ?? {},
                        constrainingFactor: parsed.constrainingFactor ?? 'both',
                        behavioralInsights: parsed.behavioralInsights ?? {
                            lossAversion: 'Low', regretSensitivity: 'Low',
                            anchoring: 'Low', overconfidence: 'Low', herding: 'Low',
                        },
                        goalType: parsed.goalType ?? 'Retirement Planning',
                        goalTimeframe: parsed.goalTimeframe ?? '(10-20 years)',
                    };
                    setResults(normalized);
                    setAdjustedValue(normalized.riskNumber);
                } catch (e) {
                    console.error("Failed to parse risk results", e);
                }
            }
        };
        loadProfile();
    }, []);

    const handleSaveAdjustment = async () => {
        if (adjustedValue === null || !results) return;

        setSaveStatus('saving');
        const userId = localStorage.getItem('userId');

        // Update localStorage immediately
        const updated = { ...results, riskNumber: adjustedValue };
        setResults(updated);
        localStorage.setItem('riskAssessmentResult', JSON.stringify(updated));

        // Save to backend
        if (userId) {
            try {
                const res = await axios.put(`${API}/${userId}/adjust`, {
                    adjustedRiskNumber: adjustedValue,
                });
                if (res.data.success) {
                    const p = res.data.profile;
                    setResults(prev => prev ? {
                        ...prev,
                        riskNumber: adjustedValue,
                        allocation: p.allocation,
                    } : prev);
                }
                setSaveStatus('saved');
            } catch (err) {
                console.error('Failed to save adjustment:', err);
                setSaveStatus('error');
            }
        } else {
            setSaveStatus('saved');
        }

        setIsEditing(false);
        setTimeout(() => setSaveStatus('idle'), 2000);
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        const userId = localStorage.getItem('userId');

        if (userId) {
            try {
                const res = await axios.post(`${API}/${userId}/refresh`);
                if (res.data.success) {
                    const p = res.data.profile;
                    const refreshed: RiskAssessmentResult = {
                        riskCapacity: p.riskCapacity,
                        riskTolerance: p.riskTolerance,
                        behavioralBias: p.behavioralBias,
                        age: p.age,
                        ageFactor: p.ageFactor,
                        rawScore: p.rawScore,
                        riskNumber: p.riskNumber,
                        category: p.category,
                        categoryName: p.categoryName,
                        allocation: p.allocation,
                        answers: p.answers,
                        constrainingFactor: p.constrainingFactor,
                        behavioralInsights: p.behavioralInsights,
                        goalType: p.goalType,
                        goalTimeframe: p.goalTimeframe,
                    };
                    setResults(refreshed);
                    setAdjustedValue(p.riskNumber);
                    localStorage.setItem('riskAssessmentResult', JSON.stringify(refreshed));
                }
            } catch (err) {
                console.error('Failed to refresh:', err);
            }
        }
        setRefreshing(false);
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

    const currentCat = RISK_CATEGORIES.find(c => results.riskNumber >= c.min && results.riskNumber <= c.max) || RISK_CATEGORIES[0];
    const catMin = currentCat.min;
    const catMax = currentCat.max;

    const getConstraintMessage = () => {
        if (results.constrainingFactor === 'capacity') return 'Your risk is limited by your financial capacity.';
        if (results.constrainingFactor === 'tolerance') return 'Your risk is limited by your emotional tolerance.';
        return 'Your capacity and tolerance are well balanced.';
    };

    const getBehavioralList = () => {
        const items: { label: string; level: string }[] = [];
        if (results.behavioralInsights.lossAversion !== 'Low')
            items.push({ label: 'Loss aversion', level: results.behavioralInsights.lossAversion });
        if (results.behavioralInsights.regretSensitivity !== 'Low')
            items.push({ label: 'Regret sensitivity', level: results.behavioralInsights.regretSensitivity });
        if (results.behavioralInsights.anchoring !== 'Low')
            items.push({ label: 'Anchoring', level: results.behavioralInsights.anchoring });
        if (results.behavioralInsights.overconfidence !== 'Low')
            items.push({ label: 'Overconfidence', level: results.behavioralInsights.overconfidence });
        if (results.behavioralInsights.herding !== 'Low')
            items.push({ label: 'Herding tendency', level: results.behavioralInsights.herding });
        return items.length > 0 ? items : [{ label: 'Well-balanced behavioral profile', level: '' }];
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Risk Profile</h1>
                    <p className="text-slate-600">Based on your latest assessment, here's your personalized investment profile.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleRefresh}
                        disabled={refreshing}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-sm font-semibold hover:bg-amber-100 transition-all shadow-sm disabled:opacity-50"
                    >
                        <Cake size={16} className={refreshing ? 'animate-spin' : ''} />
                        {refreshing ? 'Refreshing...' : 'Refresh'}
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
                    >
                        <Download size={16} /> Download
                    </button>
                    <button
                        onClick={() => window.location.href = '/dashboard/risk-assessment'}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-all shadow-sm"
                    >
                        <RefreshCw size={16} /> Retake
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Risk Number Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-700">Your Risk Number</h2>
                                <p className="text-sm text-slate-500">Category {currentCat.category} of 10</p>
                            </div>
                            <span
                                className="px-3 py-1 rounded-full text-sm font-bold text-white"
                                style={{ backgroundColor: currentCat.color }}
                            >
                                {currentCat.name}
                            </span>
                        </div>

                        {/* Big Risk Number */}
                        <div className="text-center mb-6">
                            <div className="text-7xl font-black text-slate-900">{adjustedValue ?? results.riskNumber}</div>
                            <p className="text-sm text-slate-500 mt-1">out of 100</p>
                        </div>

                        {/* 10-Category Scale Bar */}
                        <div className="mb-6">
                            <div className="flex rounded-lg overflow-hidden h-4">
                                {RISK_CATEGORIES.map(cat => (
                                    <div
                                        key={cat.category}
                                        className="flex-1 relative"
                                        style={{ backgroundColor: cat.color }}
                                    >
                                        {(adjustedValue ?? results.riskNumber) >= cat.min && (adjustedValue ?? results.riskNumber) <= cat.max && (
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-slate-900" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="text-[10px] text-slate-400">0</span>
                                <span className="text-[10px] text-slate-400">100</span>
                            </div>
                        </div>

                        {/* Age Info */}
                        <div className="bg-slate-50 rounded-xl p-4 mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Cake size={18} className="text-amber-500" />
                                <div>
                                    <span className="text-sm font-semibold text-slate-700">Age: {results.age}</span>
                                    <span className="text-sm text-slate-500 ml-3">Age Factor: {results.ageFactor}</span>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400">
                                Score reduced by {Math.round((1 - results.ageFactor) * 100)}% due to age
                            </div>
                        </div>

                        {/* Adjustment Slider */}
                        <div className="border-t border-slate-100 pt-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-semibold text-slate-700">
                                    Adjust Risk Number <span className="text-slate-400 font-normal">(within category {catMin}-{catMax})</span>
                                </h3>
                                {!isEditing ? (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="text-sm text-blue-600 font-semibold hover:text-blue-700"
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                setAdjustedValue(results.riskNumber);
                                                setIsEditing(false);
                                            }}
                                            className="text-sm text-slate-500 font-semibold hover:text-slate-700"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSaveAdjustment}
                                            disabled={saveStatus === 'saving'}
                                            className="flex items-center gap-1 px-4 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all disabled:opacity-50"
                                        >
                                            <Save size={14} />
                                            {saveStatus === 'saving' ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {isEditing && (
                                <div className="space-y-2">
                                    <input
                                        type="range"
                                        min={catMin}
                                        max={catMax}
                                        value={adjustedValue ?? results.riskNumber}
                                        onChange={(e) => setAdjustedValue(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>{catMin}</span>
                                        <span className="font-bold text-blue-600 text-sm">{adjustedValue}</span>
                                        <span>{catMax}</span>
                                    </div>
                                </div>
                            )}

                            {saveStatus === 'saved' && (
                                <p className="text-sm text-emerald-600 font-semibold mt-2">Risk number saved successfully!</p>
                            )}
                            {saveStatus === 'error' && (
                                <p className="text-sm text-red-600 font-semibold mt-2">Failed to save. Please try again.</p>
                            )}
                        </div>
                    </div>

                    {/* Calculation Details */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                        <button
                            onClick={() => setIsCalculationOpen(!isCalculationOpen)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                            <span className="font-semibold text-slate-900">How your risk profile was calculated</span>
                            {isCalculationOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                        </button>

                        {isCalculationOpen && (
                            <div className="px-6 pb-6 space-y-6 border-t border-slate-100">
                                <div className="pt-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-900">Risk Capacity <span className="text-slate-500 font-normal">(Ability)</span></span>
                                        <span className="text-sm font-bold text-slate-900">{Math.round(results.riskCapacity)} / 100</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${results.riskCapacity}%` }} />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-900">Risk Tolerance <span className="text-slate-500 font-normal">(Willingness)</span></span>
                                        <span className="text-sm font-bold text-slate-900">{Math.round(results.riskTolerance)} / 100</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${results.riskTolerance}%` }} />
                                    </div>
                                </div>

                                <div className="text-sm text-slate-600 italic">{getConstraintMessage()}</div>

                                <div>
                                    <span className="text-sm font-semibold text-slate-900">
                                        Behavioral Bias Index: {results.behavioralBias.toFixed(1)} / 100
                                    </span>
                                </div>

                                {/* Formula breakdown */}
                                <div className="bg-slate-50 rounded-xl p-4 text-sm space-y-1 font-mono">
                                    <p className="text-slate-600">MIN(RC, RT) = MIN({Math.round(results.riskCapacity)}, {Math.round(results.riskTolerance)}) = {Math.round(Math.min(results.riskCapacity, results.riskTolerance))}</p>
                                    <p className="text-slate-600">BBI Multiplier = 0.5 + ({results.behavioralBias.toFixed(1)}/100) x 0.5 = {(0.5 + (results.behavioralBias / 100) * 0.5).toFixed(3)}</p>
                                    <p className="text-slate-600">Raw Score = {Math.round(Math.min(results.riskCapacity, results.riskTolerance))} x {(0.5 + (results.behavioralBias / 100) * 0.5).toFixed(3)} = {results.rawScore}</p>
                                    <p className="text-slate-600">Age Factor (age {results.age}) = {results.ageFactor}</p>
                                    <p className="font-bold text-slate-900">Risk Number = {results.rawScore} x {results.ageFactor} = {results.riskNumber}</p>
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
                                    <span className="text-slate-900">&#8226;</span>
                                    <span className="text-slate-700">
                                        <span className="font-semibold">{item.label}</span>
                                        {item.level && ` \u2013 ${item.level}`}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* All 10 Categories Grid */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-4">All Risk Categories</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                            {RISK_CATEGORIES.map(cat => (
                                <div
                                    key={cat.category}
                                    className={`rounded-xl p-3 text-center border-2 transition-all ${cat.category === currentCat.category
                                            ? 'border-slate-900 shadow-md scale-105'
                                            : 'border-transparent opacity-60'
                                        }`}
                                    style={{ backgroundColor: cat.color + '18' }}
                                >
                                    <div className="text-lg font-black" style={{ color: cat.color }}>{cat.category}</div>
                                    <div className="text-[10px] font-semibold text-slate-700 leading-tight">{cat.name}</div>
                                    <div className="text-[9px] text-slate-400">{cat.min}-{cat.max}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Allocation Card */}
                    <div className="bg-slate-900 rounded-2xl p-6 text-white">
                        <h3 className="font-semibold mb-6">Recommended allocation</h3>
                        <div className="space-y-5">
                            <div>
                                <div className="flex items-center justify-between mb-2 text-sm">
                                    <span>Equity</span>
                                    <span className="font-semibold">{results.allocation.equity}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: results.allocation.equity }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2 text-sm">
                                    <span>Debt</span>
                                    <span className="font-semibold">{results.allocation.debt}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full" style={{ width: results.allocation.debt }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2 text-sm">
                                    <span>Gold</span>
                                    <span className="font-semibold">{results.allocation.gold}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: results.allocation.gold }} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="text-xs text-slate-400 mb-1">Goal: <span className="text-white font-medium">{results.goalType}</span> {results.goalTimeframe}</div>
                        </div>

                        <button
                            onClick={() => window.location.href = '/dashboard/tier-selection'}
                            className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold mt-6 hover:bg-slate-100 transition-all"
                        >
                            Continue to Plan Setup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const RiskProfilePage = () => (
    <RiskProfileErrorBoundary>
        <RiskProfilePageInner />
    </RiskProfileErrorBoundary>
);
