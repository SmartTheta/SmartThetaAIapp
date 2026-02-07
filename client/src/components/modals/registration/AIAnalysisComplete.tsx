import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { TierData } from './RegistrationData';

interface AIAnalysisCompleteProps {
    tier: TierData;
    onComplete: () => void;
}

// Pricing plans data based on the image
const pricingPlans = [
    {
        name: "Explore us",
        subtitle: "Free",
        price: "Free",
        features: [
            { text: "AI report", included: true },
            { text: "Individual Risk profile : 1", included: true },
            { text: "Curated Portfolio", included: false },
            { text: "Portfolio Health Check", included: false },
            { text: "Existing Portfolio Rebalance", included: false },
            { text: "Auto Pilot", included: false },
            { text: "Broker Integration", included: false },
            { text: "Whatsapp Commands & Reports", included: false },
            { text: "PNL Postmortem", included: false },
        ],
        buttonText: "Get Started",
        buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    },
    {
        name: "New aspirant",
        subtitle: "₹800 /month",
        price: "₹8600 /year",
        features: [
            { text: "AI report", included: true },
            { text: "Individual Risk profile : 1", included: true },
            { text: "Curated Portfolio", included: true },
            { text: "Portfolio Health Check", included: true },
            { text: "Existing Portfolio Rebalance", included: false },
            { text: "Auto Pilot", included: true },
            { text: "Broker Integration", included: false },
            { text: "Whatsapp Commands & Reports", included: true },
            { text: "PNL Postmortem", included: false },
        ],
        buttonText: "Get Started",
        buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    },
    {
        name: "Already in market",
        subtitle: "₹1000 /month",
        price: "₹11000 /year",
        popular: true,
        features: [
            { text: "AI report", included: true },
            { text: "Individual Risk profile : 1", included: true },
            { text: "Curated Portfolio", included: true },
            { text: "Portfolio Health Check", included: true },
            { text: "Existing Portfolio Rebalance", included: true },
            { text: "Auto Pilot", included: true },
            { text: "Broker Integration : 1", included: true },
            { text: "Whatsapp Commands & Reports", included: true },
            { text: "PNL Postmortem", included: false },
        ],
        buttonText: "Get Started",
        buttonStyle: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
    },
    {
        name: "Organization/Family Office",
        subtitle: "Starts from",
        price: "₹2000 /month",
        features: [
            { text: "AI report", included: true },
            { text: "Individual Risk profile : 1 (Customizable)", included: true },
            { text: "Curated Portfolio", included: true },
            { text: "Portfolio Health Check", included: true },
            { text: "Existing Portfolio Rebalance", included: true },
            { text: "Auto Pilot", included: true },
            { text: "Broker Integration : 1 (Customizable)", included: true },
            { text: "Whatsapp Commands & Reports", included: true },
            { text: "PNL Postmortem : 30", included: true },
        ],
        buttonText: "Customize Now",
        buttonStyle: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700"
    }
];

export const AIAnalysisComplete: React.FC<AIAnalysisCompleteProps> = ({ tier, onComplete }) => {
    // Determine recommended plan based on tier
    const getRecommendedPlan = () => {
        if (tier.id <= 2) return 1; // New aspirant for conservative
        if (tier.id <= 4) return 2; // Already in market for moderate to growth
        return 2; // Already in market for aggressive
    };

    const recommendedPlanIndex = getRecommendedPlan();

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-20">
            {/* Header */}
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-slate-900">Your AI Analysis Complete!</h1>
                <div className="flex items-center justify-center gap-3 text-xl">
                    <span className="text-slate-600">Based on your profile:</span>
                    <span className="px-6 py-2 bg-blue-50 text-blue-700 font-bold rounded-full border border-blue-200">
                        {tier.name}
                    </span>
                </div>
            </div>

            {/* Recommended Plans */}
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 inline-block border-b-4 border-blue-500 pb-2">
                        Recommended Plans for You
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-3xl border-2 p-6 transition-all duration-300 ${index === recommendedPlanIndex
                                ? 'border-blue-500 bg-white shadow-2xl shadow-blue-100 scale-105 z-10'
                                : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                                        POPULAR
                                    </span>
                                </div>
                            )}
                            {index === recommendedPlanIndex && (
                                <div className="absolute -top-3 right-6">
                                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">
                                        RECOMMENDED
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                                <p className="text-sm font-semibold text-slate-400 mt-1 uppercase tracking-wider">{plan.subtitle}</p>
                                <div className="mt-4">
                                    <p className="text-3xl font-black text-blue-600">{plan.price}</p>
                                    {plan.subtitle.includes('/') && (
                                        <p className="text-xs text-slate-500 mt-1">Billed annually</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-2.5">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${feature.included ? 'bg-blue-50' : ''}`}>
                                            <Check
                                                className={`w-3.5 h-3.5 ${feature.included ? 'text-blue-600' : 'text-slate-200'
                                                    }`}
                                            />
                                        </div>
                                        <span
                                            className={`text-[13px] leading-tight ${feature.included ? 'text-slate-700 font-medium' : 'text-slate-300'
                                                }`}
                                        >
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onComplete}
                                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group ${plan.buttonStyle}`}
                            >
                                {plan.buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};
