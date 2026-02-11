import { motion } from 'framer-motion';
import { Cpu, TrendingUp } from 'lucide-react';

const InputTicker = ({ symbol, delay }: { symbol: string; delay: number }) => (
    <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{
            x: 0,
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 0.5, 0]
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className="absolute left-0 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-mono"
    >
        {symbol}
    </motion.div>
);

const OutputSignal = ({ text, delay, color }: { text: string; delay: number; color: string }) => (
    <motion.div
        initial={{ x: 0, opacity: 0, scale: 0 }}
        animate={{
            x: 100,
            opacity: [0, 1, 0],
            scale: [0, 1, 1]
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeOut"
        }}
        className={`absolute right-0 ${color} backdrop-blur-sm border border-current px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2`}
    >
        {text} <TrendingUp size={14} />
    </motion.div>
);

export const AIShowcase = () => {
    return (
        <div className="w-full bg-slate-950 py-12 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
                    >
                        <Cpu size={14} />
                        <span>Powered by SmartTheta AI</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        The Brain Behind Your Profits
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Our advanced AI processes millions of market data points in real-time to identify high-probability trading opportunities before they happen.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-[320px]">

                    {/* Left: Data Input */}
                    <div className="relative h-full flex flex-col justify-center items-center md:items-end pr-8 border-r border-slate-800/50">
                        <div className="text-slate-500 text-[10px] mb-6 font-mono tracking-widest uppercase">Raw Market Data</div>
                        <div className="relative w-32 h-48 flex flex-col justify-center gap-3">
                            <InputTicker symbol="NIFTY 50" delay={0} />
                            <InputTicker symbol="BANKNIFTY" delay={0.5} />
                            <InputTicker symbol="RELIANCE" delay={1} />
                            <InputTicker symbol="HDFCBANK" delay={1.5} />
                            <InputTicker symbol="INFY" delay={2} />

                            {/* Flow Lines */}
                            <svg className="absolute top-0 right-[-40px] w-20 h-full overflow-visible opacity-20">
                                <motion.path
                                    d="M0,32 C40,32 40,128 80,128"
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M0,224 C40,224 40,128 80,128"
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Center: AI Core */}
                    <div className="relative flex justify-center items-center">
                        {/* Core Glow */}
                        <div className="absolute w-48 h-48 bg-blue-500/20 rounded-full blur-[80px]" />

                        {/* The Orb */}
                        <div className="relative w-36 h-36">
                            {/* Outer Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-3 rounded-full border border-cyan-500/30 border-dotted"
                            />

                            {/* Inner Core */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center"
                            >
                                <Cpu size={32} className="text-white" />
                            </motion.div>

                            {/* Orbiting Particles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Insights Output */}
                    <div className="relative h-full flex flex-col justify-center items-center md:items-start pl-8 border-l border-slate-800/50">
                        <div className="text-slate-500 text-[10px] mb-6 font-mono tracking-widest uppercase">Actionable Insights</div>
                        <div className="relative w-48 h-48 flex flex-col justify-center gap-4">
                            <OutputSignal text="BUY SIGNAL" delay={0.5} color="bg-green-500/20 text-green-400 border-green-500/50" />
                            <OutputSignal text="HIGH PROBABILITY" delay={1.5} color="bg-blue-500/20 text-blue-400 border-blue-500/50" />
                            <OutputSignal text="TREND REVERSAL" delay={2.5} color="bg-purple-500/20 text-purple-400 border-purple-500/50" />
                        </div>
                    </div>

                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 border-t border-slate-800 pt-6">
                    {[
                        { label: "Data Points/Sec", value: "1.2M+" },
                        { label: "Prediction Accuracy", value: "94%" },
                        { label: "Processing Time", value: "<50ms" },
                        { label: "Active Models", value: "12" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-slate-500 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};
