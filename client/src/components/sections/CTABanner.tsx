import { ArrowRight } from 'lucide-react';

export const CTABanner = () => {
    return (
        <section className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden bg-blue-600 rounded-[3rem] px-8 py-16 md:px-16 md:py-24 text-center">
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            Ready to transform your <br className="hidden md:block" />
                            investment journey?
                        </h2>
                        <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join 100+ investors who are already using SmartTheta to grow their wealth with AI-driven precision.
                        </p>
                        <div className="flex justify-center">
                            <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 text-xl font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
                                Get Started Now
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
