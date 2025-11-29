import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import step4 from '../../assets/step4.png';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        image: step1,
        title: "Create Risk Profile",
        description: "Answer questions to understand your investment style"
    },
    {
        image: step2,
        title: "Get Insights",
        description: "AI creates customized strategy for your goals"
    },
    {
        image: step3,
        title: "Connect Broker",
        description: "Link your demat account securely"
    },
    {
        image: step4,
        title: "Relax & Grow",
        description: "Algorithms optimize your portfolio automatically"
    }
];

export const Products = () => {
    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Get started with SmartTheta in four simple steps
                    </p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center space-y-4">
                                {/* Step Number Badge */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg shadow-lg z-10">
                                    {index + 1}
                                </div>

                                {/* Arrow Connector (hidden on last step and mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/3 -right-4 text-primary">
                                        <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
                                    </div>
                                )}

                                {/* Image */}
                                <div className="w-full aspect-square flex items-center justify-center p-4 pt-8">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
