import {
    Briefcase, Smartphone, Bot,
    AlertTriangle, CheckCircle2,
    TrendingUp, Clock,
    BrainCircuit, Lock,
    Ban, UserX, AlertOctagon,
    Search, GraduationCap,
    Zap
} from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section id="features" className="py-16 px-6 lg:px-8 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight">
                        Rethinking Wealth Management. <br className="hidden md:block" />
                        Built for the Modern Investor.
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

                    {/* Column 1: Traditional Advisor (Pain) */}
                    <div className="bg-white rounded-xl shadow-sm border-l-4 border-red-500/80 p-6 relative flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-3">
                                <Briefcase className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1F2937]">Traditional Advisor</h3>
                        </div>

                        <ul className="space-y-4 flex-grow">
                            {[
                                { icon: Ban, color: 'text-red-500', title: 'Extremely Expensive', desc: '1-3% annual fees eat into your long-term returns' },
                                { icon: Lock, color: 'text-red-500', title: 'High Entry Force', desc: 'Minimum ₹10-25 Lakhs usually required to start' },
                                { icon: Clock, color: 'text-red-500', title: 'Slow & Manual', desc: 'Days for transaction processing and rebalancing' },
                                { icon: UserX, color: 'text-red-500', title: 'Limited Time', desc: 'Only available during standard office hours' },
                                { icon: AlertOctagon, color: 'text-red-500', title: 'Inherent Bias', desc: 'Earns commissions, creating conflict of interest' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-2 items-start">
                                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#374151]">{item.title}</h4>
                                        <p className="text-[13px] text-[#6B7280] leading-snug mt-0.5">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: DIY Trading (Risk) */}
                    <div className="bg-white rounded-xl shadow-sm border-l-4 border-amber-500/80 p-6 relative flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-3">
                                <Smartphone className="w-6 h-6 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1F2937]">DIY Trading</h3>
                        </div>

                        <ul className="space-y-4 flex-grow">
                            {[
                                { icon: AlertTriangle, color: 'text-amber-500', title: 'Emotional Bias', desc: 'Panic selling or greed-driven FOMO buying' },
                                { icon: Clock, color: 'text-amber-500', title: 'Time Sink', desc: 'Requires hours of daily research and monitoring' },
                                { icon: GraduationCap, color: 'text-amber-500', title: 'Learning Curve', desc: 'Years of study and expensive trial-and-error' },
                                { icon: TrendingUp, color: 'text-amber-500', title: 'High Risk', desc: 'Statistical majority of independent traders lose capital' },
                                { icon: Search, color: 'text-amber-500', title: 'No Strategy', desc: 'Inconsistent decisions and lack of diversification' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-2 items-start">
                                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#374151]">{item.title}</h4>
                                        <p className="text-[13px] text-[#6B7280] leading-snug mt-0.5">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: SmartTheta (Solution) */}
                    <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 relative flex flex-col h-full ring-1 ring-blue-50 hover:shadow-lg transition-shadow">
                        {/* Badge with better spacing */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-widest border border-blue-500">
                                Recommended
                            </span>
                        </div>

                        <div className="flex flex-col items-center mb-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-blue-600">
                                <Bot className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1F2937]">SmartTheta AI</h3>
                        </div>

                        <ul className="space-y-4 flex-grow">
                            {[
                                { icon: CheckCircle2, title: 'Cost Efficient', desc: 'Flat ₹800-2,000/month regardless of portfolio size' },
                                { icon: Zap, title: 'Algorithmic Speed', desc: 'Real-time AI execution in milliseconds 24/7' },
                                { icon: BrainCircuit, title: 'Logic-Driven', desc: 'Emotionless strategy execution based on data' },
                                { icon: Bot, title: 'Fully Automated', desc: 'AI monitors 1000s of stocks while you stay relaxed' },
                                { icon: Lock, title: 'Broker Neutral', desc: 'Your money stays in your broker account at all times' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-2 items-start">
                                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <item.icon className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#1F2937]">{item.title}</h4>
                                        <p className="text-[13px] text-slate-500 leading-snug mt-0.5">{item.desc}</p>
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