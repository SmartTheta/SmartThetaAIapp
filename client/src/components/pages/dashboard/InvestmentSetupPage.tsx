import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, Repeat, TrendingUp, Info, ChevronRight, Check } from 'lucide-react';
import { RiskAssessmentResult } from './RiskAssessmentPage';


export const InvestmentSetupPage = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState<'lumpsum' | 'sip' | 'both'>('lumpsum');
    const [amount, setAmount] = useState<string>('50000');
    const [results, setResults] = useState<RiskAssessmentResult | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('riskAssessmentResult');
        if (saved) setResults(JSON.parse(saved));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0 pb-20">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Build Your Portfolio</h1>
                <p className="text-sm text-slate-500 font-medium">Configure your investment mode and capital allocation.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Configuration Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4">Investment Mode</label>
                        <div className="space-y-3">
                            {[
                                { id: 'lumpsum', name: 'Lumpsum', icon: Wallet },
                                { id: 'sip', name: 'Monthly SIP', icon: Repeat },
                                { id: 'both', name: 'Lumpsum + SIP', icon: TrendingUp },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setMode(item.id as any)}
                                    className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${mode === item.id
                                        ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md translate-x-1'
                                        : 'border-slate-50 bg-slate-50/50 text-slate-600 hover:border-slate-200'
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === item.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <span className="font-bold text-sm">{item.name}</span>
                                    {mode === item.id && <Check className="ml-auto text-blue-600" size={18} />}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                    {mode === 'sip' ? 'Monthly SIP Amount' : 'Initial Investment'}
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3.5 font-bold text-slate-400">₹</span>
                                    <input
                                        type="number"
                                        className="w-full h-12 pl-8 pr-4 rounded-xl bg-slate-50 border border-slate-100 font-black text-slate-900 outline-none focus:border-blue-500 transition-colors"
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl">
                                <Info className="text-blue-600 shrink-0 mt-0.5" size={14} />
                                <p className="text-[10px] text-blue-800 font-medium leading-relaxed">
                                    Recommended minimum for your risk profile is <span className="font-bold">₹25,000</span> to ensure proper diversification.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Risk Profile Mini Card */}
                    {results && (
                        <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-10 -mt-10 blur-2xl" />
                            <h3 className="text-[11px] font-black opacity-50 uppercase tracking-widest mb-4">Risk Profile</h3>
                            <div className="flex items-end gap-2 mb-1">
                                <span className="text-4xl font-black">{results.riskNumber}</span>
                                <span className="text-xs font-bold opacity-60 mb-1.5">/ 100</span>
                            </div>
                            <div className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-6">{results.categoryName}</div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-[11px] font-black uppercase">
                                    <span className="opacity-50">Allocation Target</span>
                                </div>
                                <div className="flex border border-white/10 rounded-lg overflow-hidden h-2">
                                    <div className="bg-blue-500" style={{ width: results.allocation.equity }} />
                                    <div className="bg-amber-500" style={{ width: results.allocation.debt }} />
                                    <div className="bg-yellow-500" style={{ width: results.allocation.gold }} />
                                </div>
                                <div className="flex justify-between text-[10px] font-bold opacity-80">
                                    <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" /> Eq</span>
                                    <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500" /> Debt</span>
                                    <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-yellow-500" /> Gold</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Portfolio Preview */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8 text-center">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <TrendingUp className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4">Investment Configuration</h3>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">
                            You've selected a <span className="font-bold text-slate-900">{mode.toUpperCase()}</span> plan for <span className="font-bold text-slate-900">₹{parseFloat(amount).toLocaleString()}</span>.
                            Next, we need to complete your KYC verification as per SEBI regulations before generating your custom portfolio.
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8 max-w-md mx-auto text-left">
                            <h4 className="font-bold text-sm text-slate-700 mb-3 flex items-center gap-2">
                                <Check className="text-emerald-500" size={16} />
                                What happens next?
                            </h4>
                            <ul className="space-y-3 text-xs text-slate-500 font-medium">
                                <li>1. Aadhaar-based OTP verification</li>
                                <li>2. AI Portfolio generation using Risk Engine</li>
                                <li>3. One-click execution via your broker</li>
                            </ul>
                        </div>

                        <button
                            onClick={() => {
                                localStorage.setItem('investmentAmount', amount);
                                localStorage.setItem('investmentMode', mode);
                                navigate('/dashboard/kyc-onboarding');
                            }}
                            className="w-full max-w-md py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 group"
                        >
                            Proceed to KYC Verification
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
