import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, TrendingUp, ChevronRight, CheckCircle } from 'lucide-react';

const tiers = [
    {
        id: 'beginner',
        title: 'Beginner',
        subtitle: "I'm new to investing",
        description: 'No existing demat or trading accounts. Our AI builds a fully managed, conservative-first portfolio with strict guardrails.',
        icon: GraduationCap,
        color: 'blue',
        rules: [
            'Max 10% per stock (system enforced)',
            'Minimum 1 stock, max 15 stocks',
            'Equity / Debt / Gold ratios locked to risk score',
            'Quantities set automatically — no manual edits',
        ],
        badge: 'Tier 1 — Guided',
    },
    {
        id: 'experienced',
        title: 'Experienced',
        subtitle: 'I have existing investment accounts',
        description: 'You already hold a demat or trading account. Unlock expanded controls and higher allocation limits.',
        icon: TrendingUp,
        color: 'indigo',
        rules: [
            'Up to 50% per stock allocation',
            'Minimum 1 stock, max 5 curated stocks',
            'Equity / Debt / Gold ratios adjustable within bands',
            'Manual quantity overrides allowed',
        ],
        badge: 'Tier 2 — Expanded',
    },
];

export const TierSelectionPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<'beginner' | 'experienced' | null>(null);

    const handleContinue = () => {
        if (!selected) return;
        localStorage.setItem('investorType', selected);
        navigate('/dashboard/payment');
    };

    const handleSkip = () => {
        localStorage.setItem('investorType', 'skip');
        navigate('/dashboard/free-trial');
    };

    return (
        <div className="max-w-4xl mx-auto px-1 lg:px-0">
            {/* Header */}
            <div className="mb-8 px-3 lg:px-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                        Tell us about your experience
                    </h1>
                    <p className="text-sm text-slate-500 font-medium">
                        This helps us apply the right portfolio rules and position limits for you.
                    </p>
                </div>
                <button
                    onClick={handleSkip}
                    className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors border border-slate-200 flex items-center gap-2"
                >
                    Skip to Free Trial
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 px-3 lg:px-0">
                {tiers.map((tier) => {
                    const isSelected = selected === tier.id;
                    const Icon = tier.icon;
                    const isBlue = tier.color === 'blue';
                    const displayTitle = tier.id === 'beginner' ? 'Tier 1 — Complete Beginner' : 'Tier 2 — Experienced';

                    return (
                        <button
                            key={tier.id}
                            onClick={() => setSelected(tier.id as 'beginner' | 'experienced')}
                            className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 relative ${isSelected
                                ? isBlue
                                    ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100'
                                    : 'border-indigo-600 bg-indigo-50 shadow-lg shadow-indigo-100'
                                : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'
                                }`}
                        >
                            {/* Badge */}
                            <span className={`absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${isSelected
                                ? isBlue ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
                                : 'bg-slate-100 text-slate-500'
                                }`}>
                                {tier.badge}
                            </span>

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isSelected
                                ? isBlue ? 'bg-blue-600' : 'bg-indigo-600'
                                : 'bg-slate-100'
                                }`}>
                                <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-black text-slate-900 mb-0.5">{displayTitle}</h2>
                            <p className={`text-sm font-semibold mb-3 ${isSelected ? isBlue ? 'text-blue-600' : 'text-indigo-600' : 'text-slate-500'}`}>
                                {tier.subtitle}
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-5">{tier.description}</p>

                            {/* Rules */}
                            <ul className="space-y-2">
                                {tier.rules.map((rule, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? isBlue ? 'text-blue-500' : 'text-indigo-500' : 'text-slate-300'
                                            }`} />
                                        {rule}
                                    </li>
                                ))}
                            </ul>

                            {/* Selection indicator */}
                            {isSelected && (
                                <div className={`mt-5 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest ${isBlue ? 'text-blue-600' : 'text-indigo-600'
                                    }`}>
                                    <div className={`w-2 h-2 rounded-full ${isBlue ? 'bg-blue-600' : 'bg-indigo-600'} animate-pulse`} />
                                    Selected
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Continue Button */}
            <div className="flex justify-end px-3 lg:px-0">
                <button
                    onClick={handleContinue}
                    disabled={!selected}
                    className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none group"
                >
                    Continue to Payment
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};
