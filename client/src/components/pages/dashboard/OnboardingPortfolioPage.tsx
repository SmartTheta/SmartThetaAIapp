import { useState, useEffect, useRef } from 'react';
import { Bot, TrendingUp, Repeat, AlertCircle, Sparkles, Send, Mic, Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import { RiskAssessmentResult } from './RiskAssessmentPage';
import { cn } from '../../../lib/utils';

export const OnboardingPortfolioPage = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState<RiskAssessmentResult | null>(null);
    const [mode, setMode] = useState<'ai' | 'classic'>('classic');
    const [investmentAmount, setInvestmentAmount] = useState('');
    const [investmentType, setInvestmentType] = useState<'sip' | 'lumpsum' | 'both' | null>(null);
    const [timeline, setTimeline] = useState('');

    // Chat UI State
    const [messages, setMessages] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [currentStage, setCurrentStage] = useState('greeting');
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem('riskAssessmentResult');
        if (saved) {
            try {
                setResults(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse risk results", e);
            }
        }

        // Initialize chat
        setMessages([
            {
                type: 'ai',
                content: `வணக்கம் (Hello)! I'm your SmartTheta AI Assistant. I've analyzed your ${results?.tierName ? results.tierName + ' ' : ''}risk profile. Let's build your personalized portfolio together. What brings you here today?`,
                timestamp: new Date(),
            }
        ]);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const addMessage = (type: 'user' | 'ai', content: string) => {
        setMessages(prev => [...prev, {
            type,
            content,
            timestamp: new Date(),
        }]);
    };

    const handleQuickReply = (reply: string, nextStage: string, updateData: any = {}) => {
        addMessage('user', reply);
        if (updateData.amount) setInvestmentAmount(updateData.amount);
        if (updateData.type) setInvestmentType(updateData.type);
        if (updateData.timeline) setTimeline(updateData.timeline);
        setShowQuickReplies(false);

        setTimeout(() => {
            processStage(nextStage, updateData);
        }, 800);
    };

    const processStage = (stage: string, data: any = {}) => {
        setCurrentStage(stage);

        switch (stage) {
            case 'ask-amount':
                setTimeout(() => {
                    addMessage('ai', "Great! Let's start with the basics. How much would you like to invest today? You can type an amount or select from below.");
                    setShowQuickReplies(true);
                }, 1000);
                break;
            case 'ask-timeline':
                setTimeout(() => {
                    addMessage('ai', `Got it. ₹${parseInt(investmentAmount || data.amount).toLocaleString()} is a great start. How long do you plan to stay invested?`);
                    setShowQuickReplies(true);
                }, 1000);
                break;
            case 'ask-type':
                setTimeout(() => {
                    addMessage('ai', "Perfect. Now, how would you like to invest? We support SIP (Monthly), Lumpsum (One-time), or a Hybrid approach.");
                    setShowQuickReplies(true);
                }, 1000);
                break;
            case 'ready':
                setTimeout(() => {
                    addMessage('ai', "Excellent choices! Your AI-optimized portfolio is ready to be generated. This will reflect your risk profile and investment goals.");
                    setShowQuickReplies(true);
                }, 1000);
                break;
        }
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const value = inputValue;
        addMessage('user', value);
        setInputValue('');

        if (currentStage === 'ask-amount') {
            const amount = value.replace(/[^0-9]/g, '');
            if (amount) {
                setInvestmentAmount(amount);
                processStage('ask-timeline', { amount });
            }
        }
    };

    const handleGenerate = () => {
        localStorage.setItem('portfolioSelection', JSON.stringify({
            amount: investmentAmount,
            type: investmentType,
            mode: mode,
            timeline: timeline
        }));
        navigate('/onboarding/kyc');
    };

    const QuickReplies = () => {
        if (!showQuickReplies) return null;

        const replies: any = {
            'greeting': [
                { text: '🎯 Build my portfolio', action: () => handleQuickReply('I want to build my first portfolio', 'ask-amount') },
                { text: '📈 Optimize my wealth', action: () => handleQuickReply('I want to optimize my investments', 'ask-amount') },
            ],
            'ask-amount': [
                { text: '₹10,000', action: () => handleQuickReply('₹10,000', 'ask-timeline', { amount: '10000' }) },
                { text: '₹50,000', action: () => handleQuickReply('₹50,000', 'ask-timeline', { amount: '50000' }) },
                { text: '₹1,00,000', action: () => handleQuickReply('₹1,00,000', 'ask-timeline', { amount: '100000' }) },
            ],
            'ask-timeline': [
                { text: '1-3 Years', action: () => handleQuickReply('1-3 Years', 'ask-type', { timeline: '1-3y' }) },
                { text: '3-5 Years', action: () => handleQuickReply('3-5 Years', 'ask-type', { timeline: '3-5y' }) },
                { text: '5+ Years', action: () => handleQuickReply('5+ Years', 'ask-type', { timeline: '5y+' }) },
            ],
            'ask-type': [
                { text: '📅 SIP', action: () => handleQuickReply('SIP (Monthly)', 'ready', { type: 'sip' }) },
                { text: '⚡ Lumpsum', action: () => handleQuickReply('Lumpsum (One-time)', 'ready', { type: 'lumpsum' }) },
                { text: '🔄 Both', action: () => handleQuickReply('Both (Hybrid)', 'ready', { type: 'both' }) },
            ],
            'ready': [
                { text: '🚀 Generate My Portfolio', action: handleGenerate },
            ]
        };

        const currentReplies = replies[currentStage];
        if (!currentReplies) return null;

        return (
            <div className="flex flex-wrap gap-2 px-4 py-2">
                {currentReplies.map((reply: any, idx: number) => (
                    <button
                        key={idx}
                        onClick={reply.action}
                        className="px-4 py-2 bg-white border-2 border-blue-100 text-blue-600 rounded-full text-xs font-bold hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                    >
                        {reply.text}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <OnboardingLayout
            currentStep={0}
            mode={mode}
            setMode={setMode}
            showModeToggle={true}
        >
            <div className="max-w-3xl mx-auto">
                {mode === 'ai' ? (
                    <div className="h-[600px] bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-500">
                        {/* Chat Header */}
                        <div className="bg-slate-900 p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20">
                                <Bot className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">SmartTheta AI</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-slate-400 text-[10px] uppercase font-black tracking-widest">Active Assistant</span>
                                </div>
                            </div>
                        </div>

                        {/* Message Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/50">
                            {messages.map((message, idx) => (
                                <div key={idx} className={cn(
                                    "flex items-start gap-3",
                                    message.type === 'user' ? "flex-row-reverse" : "flex-row"
                                )}>
                                    {message.type === 'ai' && (
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                                            <Bot className="text-white" size={16} />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm border",
                                        message.type === 'ai'
                                            ? "bg-white border-slate-100 rounded-tl-none text-slate-800"
                                            : "bg-blue-600 border-blue-500 rounded-tr-none text-white"
                                    )}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            <QuickReplies />
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                    <Paperclip size={20} />
                                </button>
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Type your response..."
                                        className="w-full pl-4 pr-12 py-3 bg-slate-100 border border-transparent focus:border-blue-200 focus:bg-white rounded-xl text-sm font-bold transition-all outline-none"
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:scale-110 transition-transform"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                    <Mic size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-8">
                            <div>
                                <label className="block text-lg font-bold text-slate-900 mb-4">How much do you want to invest?</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">₹</span>
                                    <input
                                        type="text"
                                        value={investmentAmount}
                                        onChange={(e) => setInvestmentAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                        placeholder="Enter amount (e.g., 50000)"
                                        className="w-full pl-10 pr-6 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl text-2xl font-black transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-lg font-bold text-slate-900 mb-4">How do you want to invest?</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { id: 'sip', title: 'SIP', desc: 'Monthly investments', icon: Repeat },
                                        { id: 'lumpsum', title: 'Lumpsum', desc: 'One-time payment', icon: TrendingUp },
                                        { id: 'both', title: 'Both', desc: 'Hybrid approach', icon: Bot },
                                    ].map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setInvestmentType(type.id as any)}
                                            className={`p-6 rounded-2xl border-2 transition-all text-left flex flex-col gap-3 ${investmentType === type.id
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${investmentType === type.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'
                                                }`}>
                                                <type.icon size={20} />
                                            </div>
                                            <div>
                                                <p className={`font-bold ${investmentType === type.id ? 'text-blue-600' : 'text-slate-900'}`}>{type.title}</p>
                                                <p className="text-xs text-slate-500 font-medium">{type.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
                                <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                                <div>
                                    <p className="text-lg font-bold text-amber-900">KYC Required (முக்கியமானது)</p>
                                    <p className="text-slate-700 font-medium">Next step: Complete KYC + e-Mandate for automated investments</p>
                                </div>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={!investmentAmount || !investmentType}
                                className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl ${investmentAmount && investmentType
                                    ? 'bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                                    }`}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <Sparkles size={24} />
                                    Generate AI Portfolio
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </OnboardingLayout>
    );
};
