import {
    Briefcase, Smartphone, Bot,
    AlertTriangle, CheckCircle2,
    TrendingUp, Clock,
    ShieldAlert, BrainCircuit, Lock,
    Ban, UserX, AlertOctagon,
    Search, GraduationCap, BarChart4,
    Zap
} from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section id="features" className="py-20 px-6 lg:px-8 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-[42px] font-bold text-[#1F2937] leading-tight">
                        Traditional Investing Is Broken. <br className="hidden md:block" />
                        We Fixed It.
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                    {/* Column 1: Traditional Advisor (Pain) */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500 p-8 relative flex flex-col h-full">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-[60px] h-[60px] bg-red-50 rounded-full flex items-center justify-center mb-4">
                                <Briefcase className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1F2937]">Traditional Advisor</h3>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {[
                                { icon: Ban, color: 'text-red-500', title: 'Extremely Expensive', desc: '1-3% annual fees = ₹50K-1.5L per year on ₹50L' },
                                { icon: Lock, color: 'text-red-500', title: 'High Entry Barriers', desc: 'Minimum ₹10-50 Lakhs required to start' },
                                { icon: Clock, color: 'text-red-500', title: 'Slow & Inefficient', desc: 'Takes weeks for changes, endless meetings' },
                                { icon: UserX, color: 'text-red-500', title: 'Limited Availability', desc: 'Only during office hours, hard to reach' },
                                { icon: AlertOctagon, color: 'text-red-500', title: 'Conflicts of Interest', desc: 'Earn commissions, not always your best interest' },
                                { icon: ShieldAlert, color: 'text-red-500', title: 'Black Box Decisions', desc: "No transparency, just 'trust me' approach" },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                        <h4 className="text-base font-semibold text-[#374151]">{item.title}</h4>
                                        <p className="text-sm text-[#6B7280] leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: DIY Trading (Risk) */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-amber-500 p-8 relative flex flex-col h-full">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-[60px] h-[60px] bg-amber-50 rounded-full flex items-center justify-center mb-4">
                                <Smartphone className="w-8 h-8 text-amber-500" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1F2937]">DIY Trading</h3>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {[
                                { icon: AlertTriangle, color: 'text-amber-500', title: 'Emotional Trading', desc: 'Panic sell in crashes, FOMO buy at peaks' },
                                { icon: Clock, color: 'text-amber-500', title: 'Extremely Time-Consuming', desc: '3-5 hours daily researching, monitoring' },
                                { icon: GraduationCap, color: 'text-amber-500', title: 'Steep Learning Curve', desc: 'Years to learn, expensive mistakes along the way' },
                                { icon: TrendingUp, color: 'text-amber-500', title: 'High Risk of Losses', desc: '90% of retail traders lose money' },
                                { icon: Ban, color: 'text-amber-500', title: 'No Discipline', desc: 'Miss rebalancing, forget profit booking' },
                                { icon: Search, color: 'text-amber-500', title: 'Lack of Strategy', desc: 'Random stock picking, poor diversification' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                        <h4 className="text-base font-semibold text-[#374151]">{item.title}</h4>
                                        <p className="text-sm text-[#6B7280] leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: SmartTheta (Solution) */}
                    <div className="bg-blue-50/10 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-blue-600 p-8 relative flex flex-col h-full ring-1 ring-blue-100">
                        {/* Badge */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                                Best Choice
                            </span>
                        </div>

                        <div className="flex flex-col items-center mb-8">
                            <div className="w-[60px] h-[60px] bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                <Bot className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1F2937]">SmartTheta</h3>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {[
                                { icon: CheckCircle2, title: 'Affordable for Everyone', desc: 'Flat ₹800-2,000/month' },
                                { icon: CheckCircle2, title: 'Start with ₹0', desc: 'No minimum investment • Free tier available' },
                                { icon: Zap, title: 'Lightning Fast', desc: 'Real-time AI execution in milliseconds' },
                                { icon: BrainCircuit, title: 'Emotion-Free Investing', desc: 'AI follows strategy, not fear or greed' },
                                { icon: Bot, title: 'AI Does the Heavy Lifting', desc: 'Monitors 1000s of stocks 24/7 while you relax' },
                                { icon: BarChart4, title: 'Complete Transparency', desc: 'See every decision with AI explanations' },
                                { icon: Lock, title: 'You Stay in Control', desc: 'Your money in YOUR broker • Withdraw anytime' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <item.icon className="w-3.5 h-3.5 text-green-600 font-bold" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-[#1F2937]">{item.title}</h4>
                                        <p className="text-sm text-[#6B7280] leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};
