import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import step4 from '../../assets/step4.png';

const steps = [
    {
        id: 1,
        image: step1,
        title: "Create Risk Profile",
        shortDesc: "Answer questions to understand your investment style",
        details: "Our AI-driven questionnaire analyzes 15+ parameters including your financial goals, time horizon, and risk tolerance to build your unique investor DNA.",
        color: "blue"
    },
    {
        id: 2,
        image: step2,
        title: "Get Insights",
        shortDesc: "AI creates customized strategy for your goals",
        details: "Institutional-grade algorithms process global market data to suggest a balanced, optimized portfolio of equity, debt, and gold tailored specifically for you.",
        color: "indigo"
    },
    {
        id: 3,
        image: step3,
        title: "Connect Broker",
        shortDesc: "Link your demat account securely",
        details: "Securely link your existing broker (Zerodha, Upstox, etc.) via official SEBI-compliant APIs. We never hold your funds; we only send execution signals.",
        color: "cyan"
    },
    {
        id: 4,
        image: step4,
        title: "Relax & Grow",
        shortDesc: "Algorithms optimize your portfolio automatically",
        details: "The AI monitors your portfolio 24/7, automatically rebalancing and optimizing entries/exits to ensure you stay on track with your long-term goals.",
        color: "emerald"
    }
];

export const HowItWorks = () => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-4">
                        Your Wealth, Automated in <span className="text-blue-600">4 Steps</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Experience institutional-grade investing without the complexity.
                        Hover over any step to see the magic behind the scenes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="group relative h-[320px] lg:h-[350px]"
                            onMouseEnter={() => setHoveredStep(step.id)}
                            onMouseLeave={() => setHoveredStep(null)}
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-slate-100 -z-10">
                                    <div
                                        className={cn(
                                            "h-full bg-blue-600 transition-all duration-700 w-0",
                                            hoveredStep !== null && hoveredStep > step.id ? "w-full" : "w-0"
                                        )}
                                    />
                                </div>
                            )}

                            {/* Card Content */}
                            <div className={cn(
                                "h-full w-full bg-white rounded-3xl p-6 transition-all duration-500 flex flex-col items-center text-center",
                                "border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                                hoveredStep === step.id ? "border-blue-200 shadow-[0_20px_50px_rgba(37,99,235,0.1)] -translate-y-2" : ""
                            )}>
                                {/* Step Image Container */}
                                <div className="relative mb-6 w-full aspect-square flex items-center justify-center p-2">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className={cn(
                                            "max-w-full max-h-full object-contain transition-all duration-700",
                                            hoveredStep === step.id ? "scale-110 opacity-40 blur-[2px]" : "scale-100 opacity-100"
                                        )}
                                    />
                                    {/* Small floating ID badge - Now Blue as requested */}
                                    <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-blue-600 border border-blue-400 text-white font-bold text-sm flex items-center justify-center shadow-lg z-20">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Texts Container */}
                                <div className="flex-grow flex flex-col justify-start w-full relative">
                                    {/* Default State */}
                                    <div className={cn(
                                        "transition-all duration-500 transform w-full",
                                        hoveredStep === step.id ? "-translate-y-8 opacity-0 scale-95" : "translate-y-0 opacity-100 scale-100"
                                    )}>
                                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed px-2">{step.shortDesc}</p>
                                    </div>

                                    {/* Hover Detail State - Refined for visibility */}
                                    <div className={cn(
                                        "absolute inset-0 w-full transition-all duration-500 transform flex flex-col items-center",
                                        hoveredStep === step.id ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
                                    )}>
                                        <h3 className="text-[13px] font-bold text-blue-600 mb-2 flex items-center justify-center gap-1 uppercase tracking-wider">
                                            The Depth
                                            <ChevronRight className="w-3 h-3" />
                                        </h3>
                                        <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100/50 backdrop-blur-sm shadow-sm">
                                            <p className="text-[12px] text-slate-700 leading-relaxed font-medium">
                                                {step.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Hint */}
                <div className="mt-12 text-center lg:hidden">
                    <p className="text-xs text-slate-400 font-medium animate-pulse">
                        Tap on a card to see the depth
                    </p>
                </div>
            </div>
        </section>
    );
};
