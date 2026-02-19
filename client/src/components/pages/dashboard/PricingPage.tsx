import { Check, X, Calculator, Plus, Minus, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
    "AI report",
    "Individual Risk profile",
    "Curated Portfolio",
    "Portfolio Health Check",
    "Existing Portfolio Rebalance",
    "Auto Pilot",
    "Broker Integration",
    "Whatsapp Commands & Reports",
    "PNL Postmortem"
];

export const PricingPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [riskProfiles, setRiskProfiles] = useState(1);
    const [brokerIntegrations, setBrokerIntegrations] = useState(1);
    const [pnlReports, setPnlReports] = useState(30);

    const calculateCustomPrice = () => {
        let basePrice = 2000;
        if (riskProfiles > 1) basePrice += (riskProfiles - 1) * 100;
        if (brokerIntegrations > 1) basePrice += (brokerIntegrations - 1) * 100;
        if (pnlReports > 30) basePrice += (pnlReports - 30) * 500;
        return basePrice;
    };

    const pricingTiers = [
        {
            name: 'Explore us',
            price: 'Free',
            period: '',
            yearlyPrice: '',
            isPopular: false,
            isCustom: false,
            features: {
                "AI report": true,
                "Individual Risk profile": "1",
                "Curated Portfolio": false,
                "Portfolio Health Check": false,
                "Existing Portfolio Rebalance": false,
                "Auto Pilot": false,
                "Broker Integration": false,
                "Whatsapp Commands & Reports": false,
                "PNL Postmortem": false,
            },
            cta: 'Get Started',
            action: () => navigate('/onboarding/portfolio'),
        },
        {
            name: 'New aspirant',
            price: '₹800',
            period: '/month',
            yearlyPrice: '₹8600 /year',
            isPopular: false,
            isCustom: false,
            features: {
                "AI report": true,
                "Individual Risk profile": "1",
                "Curated Portfolio": true,
                "Portfolio Health Check": false,
                "Existing Portfolio Rebalance": false,
                "Auto Pilot": true,
                "Broker Integration": false,
                "Whatsapp Commands & Reports": true,
                "PNL Postmortem": false,
            },
            cta: 'Get Started',
            action: () => navigate('/onboarding/portfolio'),
        },
        {
            name: 'Already in market',
            price: '₹1000',
            period: '/month',
            yearlyPrice: '₹11000 /year',
            isPopular: true,
            isCustom: false,
            features: {
                "AI report": true,
                "Individual Risk profile": "1",
                "Curated Portfolio": true,
                "Portfolio Health Check": true,
                "Existing Portfolio Rebalance": true,
                "Auto Pilot": true,
                "Broker Integration": "1",
                "Whatsapp Commands & Reports": true,
                "PNL Postmortem": false,
            },
            cta: 'Get Started',
            action: () => navigate('/onboarding/portfolio'),
        },
        {
            name: 'Organization / Family Office',
            price: 'Starts from ₹2000',
            period: '/month',
            yearlyPrice: '',
            isPopular: false,
            isCustom: true,
            features: {
                "AI report": true,
                "Individual Risk profile": "1 (Customizable)",
                "Curated Portfolio": true,
                "Portfolio Health Check": true,
                "Existing Portfolio Rebalance": true,
                "Auto Pilot": true,
                "Broker Integration": "1 (Customizable)",
                "Whatsapp Commands & Reports": true,
                "PNL Postmortem": "30",
            },
            cta: 'Customize Now',
            action: () => setIsModalOpen(true),
        },
    ];

    return (
        <div className="flex flex-col" style={{ height: 'calc(100vh - 112px)' }}>
            {/* Header */}
            <div className="text-center mb-3 shrink-0">
                <h1 className="text-xl font-bold text-slate-900 mb-0.5">Choose Your Plan</h1>
                <p className="text-xs text-slate-500">Start building your AI-powered portfolio today</p>
            </div>

            {/* Pricing Cards — flex-1 so they fill remaining height */}
            <div className="grid grid-cols-4 gap-3 flex-1 min-h-0">
                {pricingTiers.map((tier, idx) => (
                    <div
                        key={idx}
                        className={`relative bg-white rounded-xl overflow-hidden border-2 flex flex-col transition-all ${tier.isPopular
                            ? 'border-blue-600 shadow-lg shadow-blue-100'
                            : 'border-slate-200 shadow-sm'
                            }`}
                    >
                        {/* Popular Badge */}
                        {tier.isPopular && (
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 py-0.5 rounded-bl-lg text-[10px] font-bold flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" />
                                POPULAR
                            </div>
                        )}

                        {/* Card Header */}
                        <div className="px-3.5 pt-3.5 pb-2.5 border-b border-slate-100 shrink-0">
                            <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1.5">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 flex-wrap">
                                <span className="text-lg font-black text-slate-900 leading-none">{tier.price}</span>
                                {tier.period && <span className="text-xs text-slate-500">{tier.period}</span>}
                            </div>
                            {tier.yearlyPrice
                                ? <p className="text-[10px] text-green-600 font-medium mt-0.5">{tier.yearlyPrice}</p>
                                : <div className="h-3.5" />
                            }
                        </div>

                        {/* Features — scrollable only if truly needed */}
                        <div className="px-3.5 py-2 flex-1 overflow-hidden">
                            <ul className="space-y-1.5">
                                {features.map((feature, featureIdx) => {
                                    const value = (tier.features as Record<string, boolean | string>)[feature];
                                    return (
                                        <li key={featureIdx} className="flex items-center gap-2 text-xs">
                                            {value === false ? (
                                                <div className="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                    <X className="w-2 h-2 text-slate-400" />
                                                </div>
                                            ) : (
                                                <div className="w-3.5 h-3.5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                    <Check className="w-2 h-2 text-blue-600" strokeWidth={3} />
                                                </div>
                                            )}
                                            <span className={`leading-tight ${value === false ? 'text-slate-400' : 'text-slate-700'}`}>
                                                {feature}
                                                {typeof value === 'string' && (
                                                    <span className="font-semibold text-slate-900 ml-0.5">
                                                        {value === "1" || value === "30" ? `: ${value}` : ` - ${value}`}
                                                    </span>
                                                )}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="px-3.5 pb-3.5 pt-2 shrink-0">
                            <button
                                onClick={tier.action}
                                className={`w-full py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${tier.isPopular
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200'
                                    : tier.isCustom
                                        ? 'bg-slate-800 text-white hover:bg-slate-900'
                                        : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {tier.isCustom && <Calculator className="w-3.5 h-3.5" />}
                                {tier.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="text-center mt-2 shrink-0">
                <p className="text-[10px] text-slate-400">
                    All plans include secure data encryption and 24/7 customer support
                </p>
            </div>

            {/* Customization Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-900">Customize Your Plan</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            {/* Risk Profiles */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-medium text-slate-900">Individual Risk Profiles</label>
                                    <span className="text-sm text-slate-500">₹100/extra</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setRiskProfiles(Math.max(1, riskProfiles - 1))} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Minus className="w-4 h-4" /></button>
                                    <span className="text-xl font-bold w-12 text-center">{riskProfiles}</span>
                                    <button onClick={() => setRiskProfiles(riskProfiles + 1)} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Plus className="w-4 h-4" /></button>
                                </div>
                            </div>
                            {/* Broker Integration */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-medium text-slate-900">Broker Integrations</label>
                                    <span className="text-sm text-slate-500">₹100/extra</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setBrokerIntegrations(Math.max(1, brokerIntegrations - 1))} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Minus className="w-4 h-4" /></button>
                                    <span className="text-xl font-bold w-12 text-center">{brokerIntegrations}</span>
                                    <button onClick={() => setBrokerIntegrations(brokerIntegrations + 1)} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Plus className="w-4 h-4" /></button>
                                </div>
                            </div>
                            {/* PNL Postmortem */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-medium text-slate-900">PNL Postmortem Units</label>
                                    <span className="text-sm text-slate-500">₹500/extra (&gt;30)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setPnlReports(Math.max(30, pnlReports - 1))} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Minus className="w-4 h-4" /></button>
                                    <span className="text-xl font-bold w-12 text-center">{pnlReports}</span>
                                    <button onClick={() => setPnlReports(pnlReports + 1)} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Plus className="w-4 h-4" /></button>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-slate-600">Estimated Monthly Cost</span>
                                    <span className="text-3xl font-bold text-blue-600">₹{calculateCustomPrice()}</span>
                                </div>
                                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
