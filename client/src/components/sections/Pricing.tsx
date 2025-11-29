import { useState } from 'react';
import { Check, X, Calculator, Plus, Minus } from 'lucide-react';

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

const plans = [
    {
        name: "Explore us",
        price: "Free",
        features: {
            "AI report": true,
            "Individual Risk profile": "1",
            "Curated Portfolio": false,
            "Portfolio Health Check": false,
            "Existing Portfolio Rebalance": false,
            "Auto Pilot": false,
            "Broker Integration": false,
            "Whatsapp Commands & Reports": false,
            "PNL Postmortem": false
        }
    },
    {
        name: "New aspirant",
        price: "₹800",
        period: "/month",
        yearlyPrice: "₹8600 /year",
        features: {
            "AI report": true,
            "Individual Risk profile": "1",
            "Curated Portfolio": true,
            "Portfolio Health Check": false,
            "Existing Portfolio Rebalance": false,
            "Auto Pilot": true,
            "Broker Integration": false,
            "Whatsapp Commands & Reports": true,
            "PNL Postmortem": false
        }
    },
    {
        name: "Already in market",
        price: "₹1000",
        period: "/month",
        yearlyPrice: "₹11000 /year",
        isPopular: true,
        features: {
            "AI report": true,
            "Individual Risk profile": "1",
            "Curated Portfolio": true,
            "Portfolio Health Check": true,
            "Existing Portfolio Rebalance": true,
            "Auto Pilot": true,
            "Broker Integration": "1",
            "Whatsapp Commands & Reports": true,
            "PNL Postmortem": false
        }
    },
    {
        name: "Organization/Family Office",
        price: "Starts from ₹2000",
        period: "/month",
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
            "PNL Postmortem": "30"
        }
    }
];

export const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [riskProfiles, setRiskProfiles] = useState(1);
    const [brokerIntegrations, setBrokerIntegrations] = useState(1);
    const [pnlReports, setPnlReports] = useState(30);

    const calculateCustomPrice = () => {
        let basePrice = 2000;

        // Risk Profile: > 1 add 100 each
        if (riskProfiles > 1) {
            basePrice += (riskProfiles - 1) * 100;
        }

        // Broker Integration: > 1 add 100 each
        if (brokerIntegrations > 1) {
            basePrice += (brokerIntegrations - 1) * 100;
        }

        // PNL Postmortem: > 30 add 500 for each 1 (assuming per report/unit)
        // The requirement says "more than 30 for each 1 500 rs extra"
        if (pnlReports > 30) {
            basePrice += (pnlReports - 30) * 500;
        }

        return basePrice;
    };

    return (
        <section id="pricing" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose the plan that best fits your investment journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${plan.isPopular ? 'border-primary ring-2 ring-primary/20' : 'border-slate-100'} flex flex-col`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    POPULAR
                                </div>
                            )}

                            <div className="p-6 border-b border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
                                    {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
                                </div>
                                {plan.yearlyPrice && (
                                    <p className="text-sm text-green-600 font-medium mt-1">{plan.yearlyPrice}</p>
                                )}
                            </div>

                            <div className="p-6 flex-grow">
                                <ul className="space-y-4">
                                    {features.map((feature, idx) => {
                                        const value = plan.features[feature as keyof typeof plan.features];
                                        return (
                                            <li key={idx} className="flex items-start gap-3 text-sm">
                                                {value === false ? (
                                                    <X className="w-5 h-5 text-slate-300 shrink-0" />
                                                ) : (
                                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                                )}
                                                <span className={value === false ? 'text-slate-400' : 'text-slate-700'}>
                                                    {feature}
                                                    {typeof value === 'string' && (
                                                        <span className="font-semibold text-slate-900 ml-1">
                                                            {value === "1" || value === "30" ? `: ${value}` : ` - ${value}`}
                                                        </span>
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="p-6 bg-slate-50 mt-auto">
                                {plan.isCustom ? (
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full py-3 px-4 bg-secondary text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Calculator className="w-4 h-4" />
                                        Customize Now
                                    </button>
                                ) : (
                                    <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors ${plan.isPopular
                                        ? 'bg-primary text-white hover:bg-blue-700'
                                        : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'
                                        }`}>
                                        Get Started
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customization Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-900">Customize Your Plan</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Risk Profile */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="font-medium text-slate-900">Individual Risk Profiles</label>
                                    <span className="text-sm text-slate-500">₹100/extra</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setRiskProfiles(Math.max(1, riskProfiles - 1))}
                                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-xl font-bold w-12 text-center">{riskProfiles}</span>
                                    <button
                                        onClick={() => setRiskProfiles(riskProfiles + 1)}
                                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Broker Integration */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="font-medium text-slate-900">Broker Integrations</label>
                                    <span className="text-sm text-slate-500">₹100/extra</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setBrokerIntegrations(Math.max(1, brokerIntegrations - 1))}
                                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-xl font-bold w-12 text-center">{brokerIntegrations}</span>
                                    <button
                                        onClick={() => setBrokerIntegrations(brokerIntegrations + 1)}
                                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* PNL Postmortem */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="font-medium text-slate-900">PNL Postmortem Units</label>
                                    <span className="text-sm text-slate-500">₹500/extra (&gt;30)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setPnlReports(Math.max(30, pnlReports - 1))}
                                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-xl font-bold w-12 text-center">{pnlReports}</span>
                                    <button
                                        onClick={() => setPnlReports(pnlReports + 1)}
                                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-slate-600">Estimated Monthly Cost</span>
                                    <span className="text-3xl font-bold text-primary">₹{calculateCustomPrice()}</span>
                                </div>
                                <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/25">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
