import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SmartThetaIndex } from './SmartThetaIndex';

export const HeroSection = () => {
    return (
        <section className="relative bg-[#ffffff] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center items-start h-full py-2">
                        <div className="mb-4">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight">
                                Grow Your Wealth with <br />
                                <span className="text-blue-600">Smart Theta AI</span>
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-lg leading-relaxed">
                                Experience the precision of algorithmic investing. Transparent, secure, and built to scale your portfolio from ₹0.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                            {[
                                'AI-driven portfolio optimization',
                                'Automated risk management',
                                'SEBI-compliant broker integration'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-6 w-full sm:w-auto">
                            <button className="group relative px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Trust Indicators */}
                            <div className="pt-6 border-t border-slate-100 mt-2">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                                    Trusted by Investors
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    <div>
                                        <p className="text-lg font-bold text-slate-900">100+</p>
                                        <p className="text-xs text-slate-500">Active Users</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <div>
                                            <p className="text-lg font-bold text-slate-900">₹5Cr+</p>
                                            <p className="text-xs text-slate-500">Assets Managed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <div>
                                            <p className="text-lg font-bold text-slate-900">Secure</p>
                                            <p className="text-xs text-slate-500">256-bit AES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Chart Card */}
                    <div className="lg:block relative">
                        <div className="bg-white rounded-[2rem] shadow-[0_24px_48px_-12px_rgba(37,99,235,0.12)] border border-slate-100 p-2 transform hover:scale-[1.01] transition-transform duration-500 max-w-lg mx-auto lg:ml-auto lg:mr-0">
                            <div className="overflow-hidden rounded-[1.5rem] scale-[0.95] origin-top">
                                <SmartThetaIndex />
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 bg-blue-100/20 rounded-[3rem] blur-2xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};
