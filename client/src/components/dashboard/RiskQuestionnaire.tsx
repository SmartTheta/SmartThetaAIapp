import React, { useState } from 'react';
import { Bot, ChevronRight, TrendingUp, Shield, CheckCircle, Award, Clock, Wallet, ShieldCheck, User, AlertCircle, RefreshCw, Download } from 'lucide-react';

export interface RiskQuestionnaireProps {
    onComplete: (result: RiskAssessmentResult) => void;
}

export interface RiskAssessmentResult {
    riskCapacity: number;
    riskTolerance: number;
    behavioralBias: number;
    finalScore: number;
    tier: number;
    tierName: string;
    tierDescription: string;
    allocation: {
        equity: string;
        debt: string;
        gold: string;
    };
    answers: Record<string, string>;
}

const RiskQuestionnaire: React.FC<RiskQuestionnaireProps> = ({ onComplete }) => {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState<RiskAssessmentResult | null>(null);

    const sections = [
        { name: 'Risk Capacity', description: 'Financial ability to take risk', icon: TrendingUp },
        { name: 'Risk Tolerance', description: 'Psychological comfort with risk', icon: Shield },
        { name: 'Behavioral Assessment', description: 'Understanding investment biases', icon: Bot },
    ];

    const questions = [
        // SECTION 0: Risk Capacity (Questions 1-6)
        {
            id: 'q1',
            section: 0,
            text: 'If you lost your income today, how long could you pay all your bills using your savings?',
            options: [
                { value: 'A', score: 25, text: 'Less than 3 months', icon: Wallet },
                { value: 'B', score: 50, text: '3 to 6 months', icon: Wallet },
                { value: 'C', score: 75, text: '6 to 12 months', icon: Wallet },
                { value: 'D', score: 100, text: 'More than 12 months', icon: Wallet },
            ],
        },
        {
            id: 'q2',
            section: 0,
            text: 'What percentage of your monthly income goes towards paying loans (home loan, car loan, personal loans)?',
            options: [
                { value: 'A', score: 25, text: 'More than 50% of my income', icon: Wallet },
                { value: 'B', score: 50, text: '30% to 50% of my income', icon: Wallet },
                { value: 'C', score: 75, text: '10% to 30% of my income', icon: Wallet },
                { value: 'D', score: 100, text: 'Less than 10% (or no loans)', icon: Wallet },
            ],
        },
        {
            id: 'q3',
            section: 0,
            text: 'Do you have adequate insurance for yourself and your family?',
            options: [
                { value: 'A', score: 25, text: 'No life or health insurance', icon: Shield },
                { value: 'B', score: 50, text: 'Basic health insurance only', icon: Shield },
                { value: 'C', score: 75, text: 'Both life + health (covering 5-7 yrs income)', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Comprehensive coverage (10x income + health)', icon: ShieldCheck },
            ],
        },
        {
            id: 'q4',
            section: 0,
            text: 'When will you need to use this money you\'re planning to invest?',
            options: [
                { value: 'A', score: 25, text: 'Within 2 years', icon: Clock },
                { value: 'B', score: 50, text: '2 to 5 years from now', icon: Clock },
                { value: 'C', score: 75, text: '5 to 10 years from now', icon: Clock },
                { value: 'D', score: 100, text: 'More than 10 years from now', icon: Clock },
            ],
        },
        {
            id: 'q5',
            section: 0,
            text: 'How stable is your main source of income?',
            options: [
                { value: 'A', score: 25, text: 'Very uncertain (freelance/commission)', icon: User },
                { value: 'B', score: 50, text: 'Somewhat stable (contract/business)', icon: User },
                { value: 'C', score: 75, text: 'Stable (permanent job)', icon: User },
                { value: 'D', score: 100, text: 'Very stable (Govt/Professional/Multiple)', icon: Award },
            ],
        },
        {
            id: 'q6',
            section: 0,
            text: 'Do you expect any big expenses in the next 3 years (wedding, home, education)?',
            options: [
                { value: 'A', score: 25, text: 'Yes, very soon (within 1 year)', icon: Wallet },
                { value: 'B', score: 50, text: 'Yes, within 2-3 years', icon: Wallet },
                { value: 'C', score: 75, text: 'Maybe, but not confirmed', icon: Wallet },
                { value: 'D', score: 100, text: 'No major expenses expected', icon: Wallet },
            ],
        },

        // SECTION 1: Risk Tolerance (Questions 7-13)
        {
            id: 'q7',
            section: 1,
            text: 'Imagine you invested ₹10 lakhs. Within 6 months, it drops to ₹7 lakhs. What would you do?',
            options: [
                { value: 'A', score: 25, text: 'Panic and sell immediately', icon: AlertCircle },
                { value: 'B', score: 50, text: 'Worry, stop investing, wait and watch', icon: Shield },
                { value: 'C', score: 75, text: 'Concerned but continue investing', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'See it as buying opportunity, invest more', icon: TrendingUp },
            ],
        },
        {
            id: 'q8',
            section: 1,
            text: 'How much loss in your investment portfolio would cause you to lose sleep?',
            options: [
                { value: 'A', score: 25, text: 'Any loss at all, even 5%', icon: User },
                { value: 'B', score: 50, text: '10-15% loss would worry me a lot', icon: Shield },
                { value: 'C', score: 75, text: '20-25% loss would make me uncomfortable', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Can handle 30-40% drops for long term', icon: TrendingUp },
            ],
        },
        {
            id: 'q9',
            section: 1,
            text: 'If you made a wrong investment decision and lost money, how long would you feel bad?',
            options: [
                { value: 'A', score: 25, text: 'For months, I\'d keep thinking about it', icon: Clock },
                { value: 'B', score: 50, text: 'For several weeks', icon: Clock },
                { value: 'C', score: 75, text: 'For a few days, then move on', icon: Clock },
                { value: 'D', score: 100, text: 'Accept quickly as learning experience', icon: CheckCircle },
            ],
        },
        {
            id: 'q10',
            section: 1,
            text: 'How would you rate your understanding of investments and markets?',
            options: [
                { value: 'A', score: 25, text: 'Beginner (FDs/Savings only)', icon: User },
                { value: 'B', score: 50, text: 'Basic (Mutual Funds/Stocks concepts)', icon: User },
                { value: 'C', score: 75, text: 'Intermediate (Asset allocation/Cycles)', icon: Award },
                { value: 'D', score: 100, text: 'Advanced (Active tracking/Ratios)', icon: TrendingUp },
            ],
        },
        {
            id: 'q11',
            section: 1,
            text: 'Have you ever invested in equity mutual funds or stocks during a market crash?',
            options: [
                { value: 'A', score: 25, text: 'No, only safe options (FD/PPF)', icon: Shield },
                { value: 'B', score: 25, text: 'Invested but sold in panic', icon: AlertCircle },
                { value: 'C', score: 75, text: 'Stayed invested but stopped SIPs', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Stayed invested and continued SIPs', icon: TrendingUp },
            ],
        },
        {
            id: 'q12',
            section: 1,
            text: 'In general life, how comfortable are you with trying new experiences?',
            options: [
                { value: 'A', score: 25, text: 'Prefer familiar routines, avoid change', icon: User },
                { value: 'B', score: 50, text: 'Cautious but willing after research', icon: User },
                { value: 'C', score: 75, text: 'Enjoy new experiences, adapt well', icon: TrendingUp },
                { value: 'D', score: 100, text: 'Actively seek new challenges', icon: Award },
            ],
        },
        {
            id: 'q13',
            section: 1,
            text: 'When facing uncertain situations in life, how do you typically react?',
            options: [
                { value: 'A', score: 25, text: 'Get very anxious and stressed', icon: AlertCircle },
                { value: 'B', score: 50, text: 'Feel worried but can manage', icon: Shield },
                { value: 'C', score: 75, text: 'Stay fairly calm and think rationally', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Remain very calm, see it as challenge', icon: Award },
            ],
        },

        // SECTION 2: Behavioral Bias (Questions 14-22)
        {
            id: 'q14',
            section: 2,
            text: 'How would you rate your ability to pick good investments?',
            options: [
                { value: 'A', score: 25, text: 'No confidence; need expert guidance', icon: User },
                { value: 'B', score: 50, text: 'Some decisions but prefer validation', icon: Shield },
                { value: 'C', score: 75, text: 'Confident in my research and decisions', icon: CheckCircle },
                { value: 'D', score: 100, text: 'Very confident; often beat market', icon: Award },
            ],
        },
        {
            id: 'q15',
            section: 2,
            text: 'A stock was ₹500, now ₹700. Friend says it\'s a buy. What do you think?',
            options: [
                { value: 'A', score: 25, text: 'Too expensive; wait for ₹500', icon: Wallet },
                { value: 'B', score: 50, text: 'Uncomfortable buying at ₹700', icon: Shield },
                { value: 'C', score: 75, text: 'Re-evaluate without thinking of ₹500', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'If fundamentals support, old price irrelevant', icon: TrendingUp },
            ],
        },
        {
            id: 'q16',
            section: 2,
            text: 'When researching an investment, which approach do you typically follow?',
            options: [
                { value: 'A', score: 25, text: 'Look for info that confirms my belief', icon: User },
                { value: 'B', score: 50, text: 'Mostly positive reviews, glance at negative', icon: Shield },
                { value: 'C', score: 75, text: 'Look at both positive and negative equally', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Actively seek opposing views', icon: Award },
            ],
        },
        {
            id: 'q17',
            section: 2,
            text: 'How much do recent news headlines affect your investment decisions?',
            options: [
                { value: 'A', score: 25, text: 'A lot – often decide based on news', icon: Bot },
                { value: 'B', score: 50, text: 'Quite a bit – events stay in mind', icon: User },
                { value: 'C', score: 75, text: 'Somewhat – aware but try to ignore', icon: Shield },
                { value: 'D', score: 100, text: 'Very little – focus on fundamentals', icon: Award },
            ],
        },
        {
            id: 'q18',
            section: 2,
            text: 'Everyone you know is investing in a hot sector. What do you do?',
            options: [
                { value: 'A', score: 25, text: 'Jump in quickly – must be good', icon: User },
                { value: 'B', score: 50, text: 'Feel pressured but worried', icon: Shield },
                { value: 'C', score: 75, text: 'Research independently before deciding', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Often avoid – cautious when everyone buys', icon: Award },
            ],
        },
        {
            id: 'q19',
            section: 2,
            text: 'You have ₹5L savings and get ₹2L bonus. How do you invest the bonus?',
            options: [
                { value: 'A', score: 100, text: 'Treat differently – take more risk', icon: TrendingUp },
                { value: 'B', score: 50, text: 'Separate bucket – specific purpose', icon: Wallet },
                { value: 'C', score: 75, text: 'View separate initially but plan', icon: Shield },
                { value: 'D', score: 75, text: 'See as ₹7L total, one strategy', icon: Award },
            ],
        },
        {
            id: 'q20',
            section: 2,
            text: 'If your investments gain ₹50k vs losing ₹50k, which affects you more?',
            options: [
                { value: 'A', score: 25, text: 'Loss affects me 3-4x more', icon: AlertCircle },
                { value: 'B', score: 50, text: 'Loss affects me 2x more', icon: Shield },
                { value: 'C', score: 75, text: 'Roughly equal', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Focus on learning, not emotion', icon: Award },
            ],
        },
        {
            id: 'q21',
            section: 2,
            text: 'When your investment does well or poorly, what do you think?',
            options: [
                { value: 'A', score: 25, text: 'Gains=Skill, Losses=Bad Luck', icon: User },
                { value: 'B', score: 50, text: 'Gains=Confidence, Losses=Self Doubt', icon: User },
                { value: 'C', score: 75, text: 'Both are partly luck, partly skill', icon: ShieldCheck },
                { value: 'D', score: 100, text: 'Learn from both objectively', icon: Award },
            ],
        },
        {
            id: 'q22',
            section: 2,
            text: 'Advisor suggests moving money for better long-term returns. How do you feel?',
            options: [
                { value: 'A', score: 25, text: 'Very uncomfortable – keep as is', icon: Shield },
                { value: 'B', score: 50, text: 'Hesitant – need convincing', icon: ShieldCheck },
                { value: 'C', score: 75, text: 'Open if reasoning makes sense', icon: TrendingUp },
                { value: 'D', score: 100, text: 'Comfortable with change', icon: Award },
            ],
        },
    ];

    const calculateResults = (): RiskAssessmentResult => {
        const getScore = (questionId: string): number => {
            const answer = answers[questionId];
            if (!answer) return 0;
            const question = questions.find(q => q.id === questionId);
            const option = question?.options.find(opt => opt.value === answer);
            return option?.score || 0;
        };

        // Calculate average score per section (0-100 scale)
        const categories = [0, 1, 2].map(sectionIdx => {
            const sectionQuestions = questions.filter(q => q.section === sectionIdx);
            const totalScore = sectionQuestions.reduce((sum, q) => sum + getScore(q.id), 0);
            return sectionQuestions.length > 0 ? totalScore / sectionQuestions.length : 0;
        });

        const riskCapacity = categories[0];
        const riskTolerance = categories[1];
        const behavioralScore = categories[2];

        // Weighted Score Strategy: 40% Capacity, 40% Tolerance, 20% Behavior (Rationality)
        // High Score = High Risk Capacity/Tolerance/Rationality = Aggressive Profile
        const finalScore = (riskCapacity * 0.4) + (riskTolerance * 0.4) + (behavioralScore * 0.2);

        let tier = 1;
        let tierName = '';
        let tierDescription = '';
        let allocation = { equity: '', debt: '', gold: '' };

        // Thresholds adjusted for 0-100 scale where min is ~25
        if (finalScore >= 90) {
            tier = 6;
            tierName = 'Ultra-Aggressive';
            tierDescription = 'Maximum wealth creation with concentrated positions';
            allocation = { equity: '90-95%', debt: '0-5%', gold: '5-10%' };
        } else if (finalScore >= 75) {
            tier = 5;
            tierName = 'Aggressive Growth';
            tierDescription = 'Strong focus on wealth creation with high equity exposure';
            allocation = { equity: '80-90%', debt: '5-15%', gold: '5%' };
        } else if (finalScore >= 60) {
            tier = 4;
            tierName = 'Growth Focused';
            tierDescription = 'Long-term wealth creation with managed volatility';
            allocation = { equity: '65-80%', debt: '15-30%', gold: '5%' };
        } else if (finalScore >= 45) {
            tier = 3;
            tierName = 'Moderate Balanced';
            tierDescription = 'Balance between growth and stability';
            allocation = { equity: '45-60%', debt: '35-45%', gold: '5-10%' };
        } else if (finalScore >= 30) {
            tier = 2;
            tierName = 'Conservative Income';
            tierDescription = 'Prioritizes steady income and stability';
            allocation = { equity: '20-35%', debt: '60-70%', gold: '5-10%' };
        } else {
            tier = 1;
            tierName = 'Safety First';
            tierDescription = 'Safety and capital protection above all';
            allocation = { equity: '5-15%', debt: '75-85%', gold: '10%' };
        }

        return {
            riskCapacity,
            riskTolerance,
            behavioralBias: behavioralScore, // Returning score (0-100) for display
            finalScore,
            tier,
            tierName,
            tierDescription,
            allocation,
            answers,
        };
    };

    const handleAnswer = (questionId: string, value: string) => {
        if (isTransitioning) return;
        setAnswers(prev => ({ ...prev, [questionId]: value }));

        // Auto-advance logic: move to next question after a small delay
        if (currentQuestionIdx < questions.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
                handleNext();
                setIsTransitioning(false);
            }, 400);
        }
    };

    const handleNext = () => {
        if (currentQuestionIdx < questions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
        } else {
            const result = calculateResults();
            setResults(result);
            setShowResults(true);
        }
    };

    const handleContinue = () => {
        if (results) {
            onComplete(results);
        }
    };

    const currentQuestion = questions[currentQuestionIdx];
    const isAnswered = !!answers[currentQuestion.id];

    const getCategoryCount = (sectionIdx: number) => {
        return questions.filter(q => q.section === sectionIdx && !!answers[q.id]).length;
    };

    if (showResults && results) {
        return (
            <div className="max-w-4xl mx-auto py-12 px-6">
                <style>
                    {`
                    @media print {
                        .no-print { display: none !important; }
                        .max-w-4xl { max-width: 100% !important; margin: 0 !important; }
                        button { display: none !important; }
                        body { background: white !important; }
                    }
                    `}
                </style>
                <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 text-center">
                    <h2 className="text-xl font-bold text-slate-500 mb-2 uppercase tracking-widest">Your Strategy</h2>
                    <h1 className="text-4xl lg:text-6xl font-black text-blue-600 mb-6">{results.tierName}</h1>
                    <p className="text-lg lg:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">{results.tierDescription}</p>

                    <div className="grid grid-cols-3 gap-8 mb-12">
                        {Object.entries(results.allocation).map(([key, val]) => (
                            <div key={key} className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100">
                                <span className="block text-2xl lg:text-4xl font-bold text-slate-900 mb-2">{val}</span>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{key}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-12 mb-12 border-t pt-12 border-slate-100">
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-slate-800">{Math.round(results.riskCapacity)}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase">Capacity</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-slate-800">{Math.round(results.riskTolerance)}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase">Tolerance</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-slate-800">{results.behavioralBias.toFixed(0)}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase">Behavior Score</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 no-print">
                        <button
                            onClick={() => window.print()}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
                        >
                            <Download size={18} /> Download Report
                        </button>
                        <button
                            onClick={() => {
                                setShowResults(false);
                                setCurrentQuestionIdx(0);
                                setAnswers({});
                            }}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-100 transition-all shadow-sm"
                        >
                            <RefreshCw size={18} /> Retake Assessment
                        </button>
                    </div>

                    <button
                        onClick={handleContinue}
                        className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 flex items-center gap-4 mx-auto no-print"
                    >
                        Continue to Investment Setup<ChevronRight size={28} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Top Status Area - Ultra Compact */}
            <div className="mb-2">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-none">Risk Assessment</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">Question {currentQuestionIdx + 1} of {questions.length}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[10px] font-medium text-slate-400">~ 5 mins</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {sections.map((_, idx) => {
                            const shortName = ['Capacity', 'Tolerance', 'Behavioral'][idx];
                            return (
                                <div key={idx} className={`px-3 py-1.5 rounded-lg border transition-all ${currentQuestion.section === idx ? 'border-blue-200 bg-blue-50/50 shadow-sm' : 'border-slate-100 bg-white'}`}>
                                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 leading-none">{shortName}</span>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={`text-[10px] font-bold leading-none ${currentQuestion.section === idx ? 'text-blue-600' : 'text-slate-600'}`}>
                                            {getCategoryCount(idx)}/{[6, 7, 9][idx]}
                                        </span>
                                        <div className="h-1 w-6 bg-slate-100 rounded-full overflow-hidden shrink-0">
                                            <div
                                                className="h-full bg-blue-500 transition-all duration-500"
                                                style={{ width: `${(getCategoryCount(idx) / [6, 7, 9][idx]) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Question Card - Scroll-Free */}
            <div className="bg-white rounded-[1.5rem] p-4 lg:p-5 shadow-xl shadow-blue-900/[0.02] border border-slate-100/60 flex-grow flex flex-col">
                <h1 className="text-lg font-semibold text-slate-800 mb-3 leading-tight">
                    {currentQuestion.text}
                </h1>

                <div className="space-y-2 flex-grow overflow-y-auto pr-1 custom-scrollbar">
                    {currentQuestion.options.map((option) => {
                        const isSelected = answers[currentQuestion.id] === option.value;
                        const Icon = option.icon;

                        return (
                            <button
                                key={option.value}
                                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                                disabled={isTransitioning}
                                className={`w-full text-left p-3 rounded-lg border transition-all duration-200 flex items-center gap-3 group relative ${isSelected
                                    ? 'border-blue-400 bg-blue-50/40'
                                    : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50/60'
                                    } ${isTransitioning ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 bg-slate-50 text-slate-400 ${isSelected ? 'bg-blue-100/60 text-blue-600' : ''}`}>
                                    <Icon size={16} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className={`text-[13px] font-medium leading-snug ${isSelected ? 'text-blue-900' : 'text-slate-600'}`}>
                                        {option.text}
                                    </h3>

                                </div>
                                {isSelected && (
                                    <div className="bg-blue-600 text-white p-0.5 rounded-full">
                                        <CheckCircle size={10} />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Footer Navigation - Tight & Accessible */}
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="text-[10px] font-medium italic text-slate-400/80">There's no right or wrong answer.</span>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={!isAnswered || isTransitioning}
                        className={`px-5 py-2 rounded-lg font-bold text-[13px] transition-all flex items-center gap-1.5 ${isAnswered && !isTransitioning
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-100'
                            : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                            }`}
                    >
                        {currentQuestionIdx === questions.length - 1 ? 'Analyze Risk' : 'Next Question'}
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RiskQuestionnaire;
