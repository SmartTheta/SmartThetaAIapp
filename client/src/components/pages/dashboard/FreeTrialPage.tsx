import { useNavigate } from 'react-router-dom';
import { Sparkles, BarChart3, Lock, ChevronRight, Info } from 'lucide-react';

export const FreeTrialPage = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0">
            {/* Success Banner */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8 flex items-center gap-4 animate-in slide-in-from-top duration-500">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <Sparkles size={24} />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-emerald-900">Free Trial Activated!</h2>
                    <p className="text-sm text-emerald-700 font-medium">You now have 100 credits to explore our AI stock analysis.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Stats Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Your Credits</h3>
                        <div className="text-4xl font-black text-slate-900 mb-2">100</div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            Each stock report costs <span className="text-blue-600 font-bold">10 credits</span>. Credits reset every 30 days.
                        </p>

                        <div className="mt-6 pt-6 border-t border-slate-50">
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-full" />
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-tighter">
                                <span className="text-slate-400">Used: 0</span>
                                <span className="text-blue-600">Remaining: 100</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-indigo-900 rounded-2xl p-6 text-white text-center">
                        <Lock className="mx-auto mb-4 opacity-50" size={32} />
                        <h4 className="font-bold mb-2">Experience Full Power</h4>
                        <p className="text-xs text-indigo-200 mb-6 leading-relaxed">
                            Upgrade to Premium to unlock automated order execution and managed portfolios.
                        </p>
                        <button
                            onClick={() => navigate('/dashboard/tier-selection')}
                            className="w-full py-3 bg-white text-indigo-900 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all"
                        >
                            Upgrade Now
                        </button>
                    </div>
                </div>

                {/* Main Action Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <BarChart3 size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Explore Stocks</h3>
                        </div>

                        <p className="text-slate-600 mb-8 leading-relaxed">
                            In your free trial, you can view real-time data for all Nifty 50 tokens and generate AI analysis reports. Note that manual order execution and automated rebalancing are disabled.
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-sm font-semibold text-slate-700">Real-time Stock LTP & Charts</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-sm font-semibold text-slate-700">AI Sentiment Analysis (10 credits/report)</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 opacity-50">
                                <Lock size={14} className="text-slate-400" />
                                <span className="text-sm font-semibold text-slate-400">Automated Order Execution</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/dashboard/stock-selection')}
                            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group"
                        >
                            Explore Nifty 50 Tokens
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 p-4 rounded-xl">
                        <Info className="text-amber-600 shrink-0 mt-0.5" size={18} />
                        <p className="text-xs text-amber-800 leading-relaxed">
                            Free trial users are restricted to informational features only. To connect your broker and place trades, please upgrade to a paid tier.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
