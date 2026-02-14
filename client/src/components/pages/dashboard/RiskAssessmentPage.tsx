import { useState } from 'react';
import { Bot, ChevronRight, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';

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
    constrainingFactor: 'capacity' | 'tolerance' | 'both';
    behavioralInsights: {
        lossAversion: 'Low' | 'Moderate' | 'High';
        regretSensitivity: 'Low' | 'Moderate' | 'High';
        anchoring: 'Low' | 'Moderate' | 'High';
        overconfidence: 'Low' | 'Moderate' | 'High';
        herding: 'Low' | 'Moderate' | 'High';
    };
    goalType: string;
    goalTimeframe: string;
}

export const RiskAssessmentPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const sections = [
        { name: 'Risk Capacity', description: 'Financial ability to take risk', icon: TrendingUp },
        { name: 'Risk Tolerance', description: 'Psychological comfort level', icon: Shield },
        { name: 'Behavioral Bias', description: 'Investment behavior & biases', icon: Bot },
    ];

    const questions = [
        // SECTION 0: Risk Capacity (Questions 1-6)
        {
            id: 'q1',
            section: 0,
            text: 'If you lost your income today, how long could you pay all your bills using your savings?',
            options: [
                { value: 'A', score: 25, text: 'Less than 3 months' },
                { value: 'B', score: 50, text: '3 to 6 months' },
                { value: 'C', score: 75, text: '6 to 12 months' },
                { value: 'D', score: 100, text: 'More than 12 months' },
            ],
        },
        {
            id: 'q2',
            section: 0,
            text: 'What percentage of your monthly income goes towards paying loans (home loan, car loan, personal loans)?',
            options: [
                { value: 'A', score: 25, text: 'More than 50% of my income' },
                { value: 'B', score: 50, text: '30% to 50% of my income' },
                { value: 'C', score: 75, text: '10% to 30% of my income' },
                { value: 'D', score: 100, text: 'Less than 10% (or no loans)' },
            ],
        },
        {
            id: 'q3',
            section: 0,
            text: 'Do you have adequate insurance for yourself and your family?',
            options: [
                { value: 'A', score: 25, text: 'No life or health insurance' },
                { value: 'B', score: 50, text: 'Basic health insurance only' },
                { value: 'C', score: 75, text: 'Both life + health (covering 5-7 yrs income)' },
                { value: 'D', score: 100, text: 'Comprehensive coverage (10x income + health)' },
            ],
        },
        {
            id: 'q4',
            section: 0,
            text: 'When will you need to use this money you\'re planning to invest?',
            options: [
                { value: 'A', score: 25, text: 'Within 2 years' },
                { value: 'B', score: 50, text: '2 to 5 years from now' },
                { value: 'C', score: 75, text: '5 to 10 years from now' },
                { value: 'D', score: 100, text: 'More than 10 years from now' },
            ],
        },
        {
            id: 'q5',
            section: 0,
            text: 'How stable is your main source of income?',
            options: [
                { value: 'A', score: 25, text: 'Very uncertain (freelance/commission)' },
                { value: 'B', score: 50, text: 'Somewhat stable (contract/business)' },
                { value: 'C', score: 75, text: 'Stable (permanent job)' },
                { value: 'D', score: 100, text: 'Very stable (Govt/Professional/Multiple)' },
            ],
        },
        {
            id: 'q6',
            section: 0,
            text: 'Do you expect any big expenses in the next 3 years (wedding, home, education)?',
            options: [
                { value: 'A', score: 25, text: 'Yes, very soon (within 1 year)' },
                { value: 'B', score: 50, text: 'Yes, within 2-3 years' },
                { value: 'C', score: 75, text: 'Maybe, but not confirmed' },
                { value: 'D', score: 100, text: 'No major expenses expected' },
            ],
        },

        // SECTION 1: Risk Tolerance (Questions 7-13)
        {
            id: 'q7',
            section: 1,
            text: 'Imagine you invested ₹10 lakhs. Within 6 months, it drops to ₹7 lakhs. What would you do?',
            options: [
                { value: 'A', score: 25, text: 'Panic and sell immediately' },
                { value: 'B', score: 50, text: 'Worry, stop investing, wait and watch' },
                { value: 'C', score: 75, text: 'Concerned but continue investing' },
                { value: 'D', score: 100, text: 'See it as buying opportunity, invest more' },
            ],
        },
        {
            id: 'q8',
            section: 1,
            text: 'How much loss in your investment portfolio would cause you to lose sleep?',
            options: [
                { value: 'A', score: 25, text: 'Any loss at all, even 5%' },
                { value: 'B', score: 50, text: '10-15% loss would worry me a lot' },
                { value: 'C', score: 75, text: '20-25% loss would make me uncomfortable' },
                { value: 'D', score: 100, text: 'Can handle 30-40% drops for long term' },
            ],
        },
        {
            id: 'q9',
            section: 1,
            text: 'If you made a wrong investment decision and lost money, how long would you feel bad?',
            options: [
                { value: 'A', score: 25, text: 'For months, I\'d keep thinking about it' },
                { value: 'B', score: 50, text: 'For several weeks' },
                { value: 'C', score: 75, text: 'For a few days, then move on' },
                { value: 'D', score: 100, text: 'Accept quickly as learning experience' },
            ],
        },
        {
            id: 'q10',
            section: 1,
            text: 'How would you rate your understanding of investments and markets?',
            options: [
                { value: 'A', score: 25, text: 'Beginner (FDs/Savings only)' },
                { value: 'B', score: 50, text: 'Basic (Mutual Funds/Stocks concepts)' },
                { value: 'C', score: 75, text: 'Intermediate (Asset allocation/Cycles)' },
                { value: 'D', score: 100, text: 'Advanced (Active tracking/Ratios)' },
            ],
        },
        {
            id: 'q11',
            section: 1,
            text: 'Have you ever invested in equity mutual funds or stocks during a market crash?',
            options: [
                { value: 'A', score: 25, text: 'No, only safe options (FD/PPF)' },
                { value: 'B', score: 25, text: 'Invested but sold in panic' },
                { value: 'C', score: 75, text: 'Stayed invested but stopped SIPs' },
                { value: 'D', score: 100, text: 'Stayed invested and continued SIPs' },
            ],
        },
        {
            id: 'q12',
            section: 1,
            text: 'In general life, how comfortable are you with trying new experiences?',
            options: [
                { value: 'A', score: 25, text: 'Prefer familiar routines, avoid change' },
                { value: 'B', score: 50, text: 'Cautious but willing after research' },
                { value: 'C', score: 75, text: 'Enjoy new experiences, adapt well' },
                { value: 'D', score: 100, text: 'Actively seek new challenges' },
            ],
        },
        {
            id: 'q13',
            section: 1,
            text: 'When facing uncertain situations in life, how do you typically react?',
            options: [
                { value: 'A', score: 25, text: 'Get very anxious and stressed' },
                { value: 'B', score: 50, text: 'Feel worried but can manage' },
                { value: 'C', score: 75, text: 'Stay fairly calm and think rationally' },
                { value: 'D', score: 100, text: 'Remain very calm, see it as challenge' },
            ],
        },

        // SECTION 2: Behavioral Bias (Questions 14-22)
        {
            id: 'q14',
            section: 2,
            text: 'How would you rate your ability to pick good investments?',
            options: [
                { value: 'A', score: 25, text: 'No confidence; need expert guidance' },
                { value: 'B', score: 50, text: 'Some decisions but prefer validation' },
                { value: 'C', score: 75, text: 'Confident in my research and decisions' },
                { value: 'D', score: 100, text: 'Very confident; often beat market' },
            ],
        },
        {
            id: 'q15',
            section: 2,
            text: 'A stock was ₹500, now ₹700. Friend says it\'s a buy. What do you think?',
            options: [
                { value: 'A', score: 25, text: 'Too expensive; wait for ₹500' },
                { value: 'B', score: 50, text: 'Uncomfortable buying at ₹700' },
                { value: 'C', score: 75, text: 'Re-evaluate without thinking of ₹500' },
                { value: 'D', score: 100, text: 'If fundamentals support, old price irrelevant' },
            ],
        },
        {
            id: 'q16',
            section: 2,
            text: 'When researching an investment, which approach do you typically follow?',
            options: [
                { value: 'A', score: 25, text: 'Look for info that confirms my belief' },
                { value: 'B', score: 50, text: 'Mostly positive reviews, glance at negative' },
                { value: 'C', score: 75, text: 'Look at both positive and negative equally' },
                { value: 'D', score: 100, text: 'Actively seek opposing views' },
            ],
        },
        {
            id: 'q17',
            section: 2,
            text: 'How much do recent news headlines affect your investment decisions?',
            options: [
                { value: 'A', score: 25, text: 'A lot – often decide based on news' },
                { value: 'B', score: 50, text: 'Quite a bit – events stay in mind' },
                { value: 'C', score: 75, text: 'Somewhat – aware but try to ignore' },
                { value: 'D', score: 100, text: 'Very little – focus on fundamentals' },
            ],
        },
        {
            id: 'q18',
            section: 2,
            text: 'Everyone you know is investing in a hot sector. What do you do?',
            options: [
                { value: 'A', score: 25, text: 'Jump in quickly – must be good' },
                { value: 'B', score: 50, text: 'Feel pressured but worried' },
                { value: 'C', score: 75, text: 'Research independently before deciding' },
                { value: 'D', score: 100, text: 'Often avoid – cautious when everyone buys' },
            ],
        },
        {
            id: 'q19',
            section: 2,
            text: 'You have ₹5L savings and get ₹2L bonus. How do you invest the bonus?',
            options: [
                { value: 'A', score: 25, text: 'Treat differently – take more risk' },
                { value: 'B', score: 50, text: 'Separate bucket – specific purpose' },
                { value: 'C', score: 75, text: 'View separate initially but plan' },
                { value: 'D', score: 100, text: 'See as ₹7L total, one strategy' },
            ],
        },
        {
            id: 'q20',
            section: 2,
            text: 'If your investments gain ₹50k vs losing ₹50k, which affects you more?',
            options: [
                { value: 'A', score: 25, text: 'Loss affects me 3-4x more' },
                { value: 'B', score: 50, text: 'Loss affects me 2x more' },
                { value: 'C', score: 75, text: 'Roughly equal' },
                { value: 'D', score: 100, text: 'Focus on learning, not emotion' },
            ],
        },
        {
            id: 'q21',
            section: 2,
            text: 'When your investment does well or poorly, what do you think?',
            options: [
                { value: 'A', score: 25, text: 'Gains=Skill, Losses=Bad Luck' },
                { value: 'B', score: 50, text: 'Gains=Confidence, Losses=Self Doubt' },
                { value: 'C', score: 75, text: 'Both are partly luck, partly skill' },
                { value: 'D', score: 100, text: 'Learn from both objectively' },
            ],
        },
        {
            id: 'q22',
            section: 2,
            text: 'Advisor suggests moving money for better long-term returns. How do you feel?',
            options: [
                { value: 'A', score: 25, text: 'Very uncomfortable – keep as is' },
                { value: 'B', score: 50, text: 'Hesitant – need convincing' },
                { value: 'C', score: 75, text: 'Open if reasoning makes sense' },
                { value: 'D', score: 100, text: 'Comfortable with change' },
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

        // Determine constraining factor
        const diff = Math.abs(riskCapacity - riskTolerance);
        let constrainingFactor: 'capacity' | 'tolerance' | 'both' = 'both';
        if (diff > 5) {
            constrainingFactor = riskCapacity < riskTolerance ? 'capacity' : 'tolerance';
        }

        // Analyze behavioral insights
        const analyzeBias = (score: number): 'Low' | 'Moderate' | 'High' => {
            if (score >= 70) return 'Low'; // Higher score = more rational = low bias
            if (score >= 40) return 'Moderate';
            return 'High'; // Low score = high bias
        };

        // Mapping to new questions for insights
        const behavioralInsights = {
            lossAversion: analyzeBias(getScore('q20')), // Loss vs Gain
            regretSensitivity: analyzeBias(getScore('q9')), // Past mistake regret
            anchoring: analyzeBias(getScore('q15')), // Anchoring 500->700
            overconfidence: analyzeBias(getScore('q14')), // Skill vs Pros
            herding: analyzeBias(getScore('q18')), // Hot sector
        };

        let tier = 1; let tierName = ''; let tierDescription = '';
        let allocation = { equity: '', debt: '', gold: '' };

        if (finalScore >= 90) {
            tier = 6; tierName = 'Ultra-Aggressive'; tierDescription = 'Maximum wealth creation with concentrated positions';
            allocation = { equity: '90-95%', debt: '0-5%', gold: '5-10%' };
        } else if (finalScore >= 75) {
            tier = 5; tierName = 'Aggressive Growth'; tierDescription = 'Strong focus on wealth creation with high equity exposure';
            allocation = { equity: '80-90%', debt: '5-15%', gold: '5%' };
        } else if (finalScore >= 60) {
            tier = 4; tierName = 'Growth Focused'; tierDescription = 'Long-term wealth creation with managed volatility';
            allocation = { equity: '65-80%', debt: '15-30%', gold: '5%' };
        } else if (finalScore >= 45) {
            tier = 3; tierName = 'Moderate Balanced'; tierDescription = 'Balance between growth and stability';
            allocation = { equity: '45-60%', debt: '35-45%', gold: '5-10%' };
        } else if (finalScore >= 30) {
            tier = 2; tierName = 'Conservative Income'; tierDescription = 'Prioritizes steady income and stability';
            allocation = { equity: '20-35%', debt: '60-70%', gold: '5-10%' };
        } else {
            tier = 1; tierName = 'Safety First'; tierDescription = 'Safety and capital protection above all';
            allocation = { equity: '5-15%', debt: '75-85%', gold: '10%' };
        }

        // Default goal based on time horizon (Q4)
        const timeHorizonScore = getScore('q4'); // 25 to 100
        let goalType = 'Retirement Planning';
        let goalTimeframe = '(10-20 years)';

        if (timeHorizonScore >= 90) { // More than 10 years
            goalType = 'Wealth Accumulation';
            goalTimeframe = '(15+ years)';
        } else if (timeHorizonScore >= 70) { // 5-10 years
            goalType = 'Retirement Planning';
            goalTimeframe = '(10-20 years)';
        } else if (timeHorizonScore >= 50) { // 2-5 years
            goalType = 'Education Planning';
            goalTimeframe = '(5-15 years)';
        } else {
            goalType = 'Near-term Goal';
            goalTimeframe = '(2-5 years)';
        }

        return {
            riskCapacity,
            riskTolerance,
            behavioralBias: behavioralScore,
            finalScore,
            tier,
            tierName,
            tierDescription,
            allocation,
            answers,
            constrainingFactor,
            behavioralInsights,
            goalType,
            goalTimeframe
        };
    };

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const questionsInSection = questions.filter(q => q.section === currentSection);
    const currentQuestion = questionsInSection[currentQuestionIdx];

    const handleSubmit = () => {
        const result = calculateResults();
        localStorage.setItem('riskAssessmentResult', JSON.stringify(result));
        window.location.href = '/dashboard/risk-profile';
    };

    const handleAnswer = (questionId: string, value: string) => {
        if (isTransitioning) return;
        setAnswers(prev => ({ ...prev, [questionId]: value }));

        // Auto-advance logic: move to next question/section after a small delay for visual feedback
        setIsTransitioning(true);
        setTimeout(() => {
            if (currentQuestionIdx < questionsInSection.length - 1) {
                setCurrentQuestionIdx(prev => prev + 1);
            } else if (currentSection < 2) {
                setCurrentSection(prev => prev + 1);
                setCurrentQuestionIdx(0);
            }
            setIsTransitioning(false);
        }, 400); // 400ms delay to allow the user to see their selection (checkmark)
    };

    const answeredCount = Object.keys(answers).length;

    const sectionsData = sections.map((s, idx) => {
        const sectionQs = questions.filter(q => q.section === idx);
        const answeredInIdx = sectionQs.filter(q => answers[q.id]).length;
        return { ...s, count: answeredInIdx, total: sectionQs.length };
    });


    return (
        <div className="max-w-6xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-2 gap-3">
                <div>
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Welcome, Sri!</h1>
                    <p className="text-[13px] text-slate-500 font-medium">Let's get started with your <span className="text-blue-600 font-bold">Risk Assessment</span> for your Personalized Investment strategy.</p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Progress bar and time removed */}
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-[1.5rem] p-4 lg:p-6 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col min-h-[400px]">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-3">
                    <div>
                        <h2 className="text-lg font-extrabold text-slate-900 mb-0.5">Risk Assessment</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Question {answeredCount + 1} of 20</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">~ 5 mins</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        {sectionsData.map((s, idx) => (
                            <div key={idx} className={cn(
                                "px-6 py-4 rounded-2xl border transition-all flex flex-col gap-2 min-w-[140px]",
                                currentSection === idx ? "border-blue-200 bg-blue-50/50 shadow-sm shadow-blue-100/50" : "border-slate-100"
                            )}>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.name.split(' ')[1]}</span>
                                    <span className={cn("text-xs font-black", currentSection === idx ? "text-blue-600" : "text-slate-400")}>{s.count}/{s.total}</span>
                                </div>
                                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(s.count / s.total) * 100}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-grow pb-1 text-left">
                    <h3 className="text-[17px] font-bold text-slate-900 mb-3 leading-tight max-w-3xl border-l-[3px] border-blue-600 pl-3 animate-in slide-in-from-left duration-500">
                        {currentQuestion?.text}
                    </h3>

                    <div className="grid grid-cols-1 gap-2.5">
                        {currentQuestion?.options.map((opt) => {
                            const qId = currentQuestion.id;
                            const isSelected = answers[qId] === opt.value;
                            return (
                                <button
                                    key={opt.value}
                                    onClick={() => handleAnswer(qId, opt.value)}
                                    disabled={isTransitioning}
                                    className={cn(
                                        "w-full text-left p-2.5 rounded-lg border-2 transition-all flex items-center justify-between group",
                                        isSelected
                                            ? "border-blue-600 bg-blue-50 shadow-sm translate-x-1"
                                            : "border-slate-100 hover:border-slate-200 hover:bg-slate-50",
                                        isTransitioning && "opacity-75 cursor-not-allowed"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-7 h-7 rounded flex items-center justify-center transition-all",
                                            isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                        )}>
                                            <span className="text-xs font-bold">{opt.value}</span>
                                        </div>
                                        <span className={cn("text-[13px] font-bold leading-tight", isSelected ? "text-blue-900" : "text-slate-600")}>
                                            {opt.text}
                                        </span>
                                    </div>
                                    {isSelected && (
                                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-300">
                                            <CheckCircle size={20} />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="sticky bottom-0 mt-auto flex items-center justify-between pt-4 pb-0 bg-white border-t border-slate-50 z-10">
                    <div className="flex items-center gap-3 text-slate-400">
                        <TrendingUp className="w-4 h-4 shrink-0" />
                        <span className="text-[12px] font-medium italic">Answer naturally for accurate AI allocation.</span>
                    </div>

                    <div className="flex gap-4 shrink-0">
                        {(currentSection > 0 || currentQuestionIdx > 0) && (
                            <button
                                onClick={() => {
                                    if (isTransitioning) return;
                                    if (currentQuestionIdx > 0) {
                                        setCurrentQuestionIdx(prev => prev - 1);
                                    } else {
                                        const prevSection = currentSection - 1;
                                        setCurrentSection(prevSection);
                                        setCurrentQuestionIdx(questions.filter(q => q.section === prevSection).length - 1);
                                    }
                                }}
                                disabled={isTransitioning}
                                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all text-[13px] whitespace-nowrap disabled:opacity-50"
                            >
                                Back
                            </button>
                        )}
                        {currentQuestionIdx < questionsInSection.length - 1 ? (
                            <button
                                onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                                disabled={!answers[currentQuestion.id] || isTransitioning}
                                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center gap-2 group disabled:opacity-50 text-[13px] whitespace-nowrap"
                            >
                                Next Question
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : currentSection < 2 ? (
                            <button
                                onClick={() => {
                                    setCurrentSection(prev => prev + 1);
                                    setCurrentQuestionIdx(0);
                                }}
                                disabled={!answers[currentQuestion.id] || isTransitioning}
                                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center gap-2 group disabled:opacity-50 text-[13px] whitespace-nowrap"
                            >
                                Next Section
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={answeredCount < questions.length || isTransitioning}
                                className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 flex items-center gap-2 group text-[13px] whitespace-nowrap"
                            >
                                Analyze Portfolio
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
