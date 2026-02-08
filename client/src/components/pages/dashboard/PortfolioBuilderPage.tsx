import { useState } from 'react';
import { Bot, TrendingUp, Repeat, AlertCircle } from 'lucide-react';

export const PortfolioBuilderPage = () => {
    const [investmentAmount, setInvestmentAmount] = useState('');
    const [investmentType, setInvestmentType] = useState<'sip' | 'lumpsum' | 'both' | null>(null);

    const investmentTypes = [
        {
            id: 'sip' as const,
            icon: Repeat,
            title: 'SIP',
            subtitle: 'Monthly investments',
        },
        {
            id: 'lumpsum' as const,
            icon: TrendingUp,
            title: 'Lumpsum',
            subtitle: 'One-time payment',
        },
        {
            id: 'both' as const,
            icon: Bot,
            title: 'Both',
            subtitle: 'Hybrid approach',
        },
    ];

    const handleGenerate = () => {
        console.log('Generating portfolio with:', { investmentAmount, investmentType });
        // TODO: Navigate to portfolio generation
    };

    return (
        <div className="max-w-3xl mx-auto py-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Let's Build Your Portfolio</h1>
                <p className="text-slate-600">Tell us about your investment goals</p>
            </div>

            {/* AI Assistant Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">AI Portfolio Assistant</h3>
                        <p className="text-sm text-slate-600">
                            I'll help you create a portfolio based on your goals. Let's start with your investment amount.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-8">
                {/* Investment Amount */}
                <div>
                    <label className="block text-lg font-bold text-slate-900 mb-3">
                        How much do you want to invest?
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">₹</span>
                        <input
                            type="text"
                            value={investmentAmount}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^0-9]/g, '');
                                setInvestmentAmount(value);
                            }}
                            placeholder="Enter amount (e.g., 50000)"
                            className="w-full pl-8 pr-4 py-4 border-2 border-slate-200 rounded-xl text-lg font-semibold focus:border-blue-600 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Investment Type */}
                <div>
                    <label className="block text-lg font-bold text-slate-900 mb-3">
                        How do you want to invest?
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        {investmentTypes.map((type) => {
                            const Icon = type.icon;
                            const isSelected = investmentType === type.id;

                            return (
                                <button
                                    key={type.id}
                                    onClick={() => setInvestmentType(type.id)}
                                    className={`p-4 rounded-xl border-2 transition-all text-center ${isSelected
                                            ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100'
                                            : 'border-slate-200 hover:border-slate-300 bg-white'
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center ${isSelected ? 'bg-blue-600' : 'bg-slate-100'
                                        }`}>
                                        <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                                    </div>
                                    <div className={`font-bold mb-0.5 ${isSelected ? 'text-blue-600' : 'text-slate-900'}`}>
                                        {type.title}
                                    </div>
                                    <div className="text-xs text-slate-500">{type.subtitle}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* KYC Notice */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-1">
                                KYC Required <span className="text-sm font-normal">(முக்கியமானது)</span>
                            </h4>
                            <p className="text-sm text-amber-800">
                                Next step: Complete KYC + e-Mandate for automated investments
                            </p>
                        </div>
                    </div>
                </div>

                {/* Generate Button */}
                <button
                    onClick={handleGenerate}
                    disabled={!investmentAmount || !investmentType}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${investmentAmount && investmentType
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                >
                    <Bot className="w-5 h-5" />
                    Generate AI Portfolio
                </button>
            </div>
        </div>
    );
};
