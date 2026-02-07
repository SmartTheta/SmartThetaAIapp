import React, { useState } from 'react';
import { Target, IndianRupee, Calendar, Zap, TrendingUp, Shield, ChevronRight } from 'lucide-react';

interface InvestmentDetailsProps {
    onComplete: (data: { capital: number; strategy: 'sip' | 'lumpsum' | 'both' }) => void;
}

const InvestmentDetails: React.FC<InvestmentDetailsProps> = ({ onComplete }) => {
    const [capital, setCapital] = useState<number>(0);
    const [strategy, setStrategy] = useState<'sip' | 'lumpsum' | 'both' | null>(null);

    return (
        <div className="min-h-full bg-slate-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                                <Target className="w-10 h-10" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">Let's Build Your Portfolio</h1>
                                <p className="text-blue-100 mt-1">Tell us about your investment goals</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* AI Guide Notice */}
                        <div className="mb-8 p-5 bg-blue-50 rounded-2xl border-2 border-blue-100">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-2 rounded-xl">
                                    <TrendingUp className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">AI Portfolio Assistant</p>
                                    <p className="text-sm text-blue-700">I'll help you create a portfolio based on your goals. Let's start with your investment amount.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Capital Input */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <label className="block font-bold text-slate-800 mb-3 text-lg">
                                    How much do you want to invest?
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <IndianRupee className="w-6 h-6" />
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Enter amount (e.g., 50000)"
                                        className="w-full pl-14 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-xl font-bold text-slate-900 transition-all outline-none"
                                        onChange={(e) => setCapital(parseInt(e.target.value) || 0)}
                                    />
                                </div>
                            </div>

                            {/* Investment Type */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <label className="block font-bold text-slate-800 mb-4 text-lg">
                                    How do you want to invest?
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <button
                                        onClick={() => setStrategy('sip')}
                                        className={`p-5 border-2 rounded-2xl text-center transition-all group hover:scale-[1.02] active:scale-[0.98] ${strategy === 'sip'
                                            ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100'
                                            : 'border-slate-200 hover:border-blue-300 bg-white'
                                            }`}
                                    >
                                        <div className={`mb-3 p-3 rounded-xl inline-block ${strategy === 'sip' ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                                            <Calendar className={`w-8 h-8 ${strategy === 'sip' ? 'text-blue-600' : 'text-slate-500'}`} />
                                        </div>
                                        <p className="font-bold text-lg text-slate-900">SIP</p>
                                        <p className="text-sm text-slate-600 mt-1">Monthly investments</p>
                                    </button>

                                    <button
                                        onClick={() => setStrategy('lumpsum')}
                                        className={`p-5 border-2 rounded-2xl text-center transition-all group hover:scale-[1.02] active:scale-[0.98] ${strategy === 'lumpsum'
                                            ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100'
                                            : 'border-slate-200 hover:border-blue-300 bg-white'
                                            }`}
                                    >
                                        <div className={`mb-3 p-3 rounded-xl inline-block ${strategy === 'lumpsum' ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                                            <Zap className={`w-8 h-8 ${strategy === 'lumpsum' ? 'text-blue-600' : 'text-slate-500'}`} />
                                        </div>
                                        <p className="font-bold text-lg text-slate-900">Lumpsum</p>
                                        <p className="text-sm text-slate-600 mt-1">One-time payment</p>
                                    </button>

                                    <button
                                        onClick={() => setStrategy('both')}
                                        className={`p-5 border-2 rounded-2xl text-center transition-all group hover:scale-[1.02] active:scale-[0.98] ${strategy === 'both'
                                            ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100'
                                            : 'border-slate-200 hover:border-blue-300 bg-white'
                                            }`}
                                    >
                                        <div className={`mb-3 p-3 rounded-xl inline-block ${strategy === 'both' ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                                            <TrendingUp className={`w-8 h-8 ${strategy === 'both' ? 'text-blue-600' : 'text-slate-500'}`} />
                                        </div>
                                        <p className="font-bold text-lg text-slate-900">Both</p>
                                        <p className="text-sm text-slate-600 mt-1">Hybrid approach</p>
                                    </button>
                                </div>
                            </div>

                            {/* KYC Notice */}
                            <div className="p-5 bg-amber-50 rounded-2xl border-2 border-amber-100">
                                <div className="flex items-start gap-3">
                                    <div className="bg-amber-100 p-2 rounded-xl">
                                        <Shield className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-amber-900 mb-1">KYC Required (முக்கியமானது)</p>
                                        <p className="text-sm text-amber-800 font-medium">Next step: Complete KYC + e-Mandate for automated investments</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => strategy && capital > 0 && onComplete({ capital, strategy })}
                            disabled={!strategy || capital <= 0}
                            className="w-full mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-100 disabled:from-slate-300 disabled:to-slate-400 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                        >
                            Generate AI Portfolio
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDetails;
