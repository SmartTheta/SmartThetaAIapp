import { Check, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PricingPage = () => {
    const navigate = useNavigate();

    const pricingTiers = [
        {
            name: 'Free',
            price: '₹0',
            period: 'Forever free',
            recommended: false,
            features: [
                { text: '20 AI Reports per month', subtext: 'Perfect for casual investors', included: true },
                { text: 'Basic Finance Q&A Chatbot', subtext: 'Get answers to your investment questions', included: true },
                { text: 'தமிழ் + English support', subtext: 'Bilingual interface and support', included: true },
                { text: 'Credit-based system', subtext: 'Flexible usage model', included: true },
                { text: 'Pay-as-you-go after limit', subtext: 'Only pay for what you use beyond free tier', included: true },
                { text: 'Daily portfolio tracking', subtext: 'Not included', included: false },
                { text: 'Monthly rebalancing', subtext: 'Not included', included: false },
            ],
            cta: 'Start Free',
            action: () => navigate('/onboarding/portfolio'),
        },
        {
            name: 'Platform',
            price: '₹499',
            period: '/month + GST',
            recommended: true,
            features: [
                { text: 'Unlimited AI Reports', subtext: 'Generate as many as you need', included: true },
                { text: 'Advanced AI Chatbot', subtext: 'தமிழ் + English with deep insights', included: true },
                { text: 'Daily Portfolio Tracking', subtext: 'Real-time performance monitoring', included: true },
                { text: 'Monthly AI Rebalancing', subtext: 'Automatic portfolio optimization', included: true },
                { text: 'Priority Execution Alerts', subtext: 'Never miss an opportunity', included: true },
                { text: 'Multi-account Support', subtext: 'Manage all your accounts in one place', included: true },
            ],
            cta: 'Start Platform Plan',
            action: () => navigate('/onboarding/portfolio'),
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-4">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-1">Choose Your Plan</h1>
                <p className="text-sm text-slate-600">Start building your AI-powered portfolio today</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {pricingTiers.map((tier, idx) => (
                    <div
                        key={idx}
                        className={`relative bg-white rounded-2xl border-2 p-6 transition-all ${tier.recommended
                            ? 'border-blue-600 shadow-xl shadow-blue-100'
                            : 'border-slate-200 shadow-lg'
                            }`}
                    >
                        {/* Recommended Badge */}
                        {tier.recommended && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                <Sparkles className="w-3 h-3" />
                                AI RECOMMENDED
                            </div>
                        )}

                        {/* Plan Name */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{tier.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                                <span className="text-sm text-slate-600 font-medium">{tier.period}</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2.5 mb-5">
                            {tier.features.map((feature, featureIdx) => (
                                <div key={featureIdx} className="flex items-start gap-2.5">
                                    <div
                                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${feature.included
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'bg-slate-100 text-slate-400'
                                            }`}
                                    >
                                        {feature.included ? (
                                            <Check className="w-3 h-3" strokeWidth={3} />
                                        ) : (
                                            <span className="text-xs font-bold">×</span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div
                                            className={`text-sm font-semibold leading-tight ${feature.included ? 'text-slate-900' : 'text-slate-400'
                                                }`}
                                        >
                                            {feature.text}
                                        </div>
                                        {feature.subtext && (
                                            <div className="text-xs text-slate-500 mt-0.5 leading-tight">{feature.subtext}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={tier.action}
                            className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${tier.recommended
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                                : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}
                        >
                            {tier.cta}
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="text-center mt-4">
                <p className="text-xs text-slate-500">
                    All plans include secure data encryption and 24/7 customer support
                </p>
            </div>
        </div>
    );
};
