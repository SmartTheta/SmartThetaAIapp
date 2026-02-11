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
        {
            id: 'q1',
            section: 0,
            category: 'financial_position',
            text: 'Financial Safety Net - Which best describes your current financial position?',
            options: [
                { value: 'A', score: 20, text: 'Minimal emergency fund, high debt (>50% DTI), little savings outside home' },
                { value: 'B', score: 40, text: '3-6 months expenses saved, moderate debt (30-50% DTI), some investments' },
                { value: 'C', score: 60, text: '6-12 months expenses saved, low debt (<30% DTI), diversified investments' },
                { value: 'D', score: 80, text: '12+ months expenses saved, minimal debt, substantial liquid net worth' },
                { value: 'E', score: 100, text: 'Financial independence achieved, passive income > expenses, significant net worth' },
            ],
        },
        {
            id: 'q2',
            section: 0,
            category: 'time_horizon',
            text: 'Investment Time Horizon - When do you need to access the majority of invested funds?',
            options: [
                { value: 'A', score: 20, text: 'Within 2 years (home purchase, emergency needs)' },
                { value: 'B', score: 40, text: '2-5 years (education, near-term major goal)' },
                { value: 'C', score: 60, text: '5-10 years (child\'s education, mid-term retirement planning)' },
                { value: 'D', score: 80, text: '10-20 years (retirement planning, long-term wealth)' },
                { value: 'E', score: 100, text: '20+ years (early career, generational wealth, no near-term needs)' },
            ],
        },
        {
            id: 'q3',
            section: 0,
            category: 'time_horizon',
            text: 'Age and Retirement Proximity',
            options: [
                { value: 'A', score: 20, text: '55+ years, retiring within 5 years' },
                { value: 'B', score: 40, text: '45-55 years, 5-15 years to retirement' },
                { value: 'C', score: 60, text: '35-45 years, mid-career, peak earning phase' },
                { value: 'D', score: 80, text: '25-35 years, early career, decades to retirement' },
                { value: 'E', score: 100, text: 'Under 25 years, just starting career' },
            ],
        },
        {
            id: 'q4',
            section: 0,
            category: 'human_capital',
            text: 'Income Stability and Human Capital',
            options: [
                { value: 'A', score: 20, text: 'Unstable income (freelance/gig), single income source, declining industry' },
                { value: 'B', score: 40, text: 'Moderate stability (business owner, variable income), growing field' },
                { value: 'C', score: 60, text: 'Stable salaried job, steady industry, good job security' },
                { value: 'D', score: 80, text: 'Very stable (MNC/PSU/Govt), multiple income sources, high demand skills' },
                { value: 'E', score: 100, text: 'Passive income established, not dependent on salary, recession-proof skills' },
            ],
        },
        {
            id: 'q5',
            section: 0,
            category: 'financial_position',
            text: 'Financial Dependents',
            options: [
                { value: 'A', score: 20, text: '4+ dependents with significant obligations (education, elderly care)' },
                { value: 'B', score: 40, text: '2-3 dependents with moderate obligations' },
                { value: 'C', score: 60, text: '1-2 dependents, manageable obligations' },
                { value: 'D', score: 80, text: '0-1 dependents, minimal obligations' },
                { value: 'E', score: 100, text: 'No dependents, financially secure family, surplus capacity' },
            ],
        },
        {
            id: 'q6',
            section: 0,
            category: 'financial_position',
            text: 'Insurance and Risk Protection',
            options: [
                { value: 'A', score: 20, text: 'Minimal/no life and health insurance coverage' },
                { value: 'B', score: 40, text: 'Basic coverage (3-5x income life, basic health)' },
                { value: 'C', score: 60, text: 'Good coverage (5-10x income life, comprehensive health)' },
                { value: 'D', score: 80, text: 'Comprehensive coverage (10x+ income, family health, disability)' },
                { value: 'E', score: 100, text: 'Over-insured, all risks covered, additional umbrella policies' },
            ],
        },
        // Risk Tolerance (Q7-Q13)
        {
            id: 'q7',
            section: 1,
            category: 'emotional_composure',
            text: 'Volatility Stress Test (Sleep Test) - Your ₹10 lakh portfolio drops to ₹7 lakh in one month. You:',
            options: [
                { value: 'A', score: 20, text: 'Panic sell immediately, lose sleep, high anxiety' },
                { value: 'B', score: 40, text: 'Worry significantly, consider selling, check portfolio daily' },
                { value: 'C', score: 60, text: 'Uncomfortable but stay invested, seek reassurance' },
                { value: 'D', score: 80, text: 'Calm, stay invested, check occasionally' },
                { value: 'E', score: 100, text: 'View as opportunity, consider investing more, completely unbothered' },
            ],
        },
        {
            id: 'q8',
            section: 1,
            category: 'emotional_composure',
            text: 'Loss vs Gain Sensitivity (Loss Aversion) - Which causes you more emotional distress?',
            options: [
                { value: 'A', score: 20, text: 'Losing ₹1 lakh feels 5x worse than gaining ₹1 lakh feels good' },
                { value: 'B', score: 40, text: 'Losing ₹1 lakh feels 3x worse than equivalent gain' },
                { value: 'C', score: 60, text: 'Losses and gains feel roughly equal in emotional impact' },
                { value: 'D', score: 80, text: 'Gains feel slightly better than losses feel bad' },
                { value: 'E', score: 100, text: 'Focus entirely on long-term, short-term losses barely register' },
            ],
        },
        {
            id: 'q9',
            section: 1,
            category: 'emotional_composure',
            text: 'Past Behavior During Corrections - During 2020 crash or similar correction, you:',
            options: [
                { value: 'A', score: 20, text: 'Sold everything, moved to cash/FD, still recovering' },
                { value: 'B', score: 40, text: 'Reduced equity significantly, took 1-2 years to recover allocation' },
                { value: 'C', score: 60, text: 'Stayed invested but stopped SIPs/new investments' },
                { value: 'D', score: 80, text: 'Continued SIPs, stayed disciplined, didn\'t check portfolio frequently' },
                { value: 'E', score: 100, text: 'Increased investments, saw it as opportunity, deployed cash reserves' },
            ],
        },
        {
            id: 'q10',
            section: 1,
            category: 'personality',
            text: 'Personality - Openness and Emotional Stability - Which describes you best?',
            options: [
                { value: 'A', score: 20, text: 'Prefer safety, worry often, avoid anything unfamiliar or risky' },
                { value: 'B', score: 40, text: 'Generally cautious, some anxiety about financial decisions' },
                { value: 'C', score: 60, text: 'Balanced - open to new ideas but need some reassurance' },
                { value: 'D', score: 80, text: 'Enjoy exploring new strategies, stay calm under pressure' },
                { value: 'E', score: 100, text: 'Highly experimental, thrive on uncertainty, exceptional composure' },
            ],
        },
        {
            id: 'q11',
            section: 1,
            category: 'experience',
            text: 'Investment Knowledge and Experience',
            options: [
                { value: 'A', score: 20, text: 'Beginner, <2 years investing, rely entirely on advisors' },
                { value: 'B', score: 40, text: 'Basic knowledge, 2-5 years experience, understand fundamentals' },
                { value: 'C', score: 60, text: 'Good knowledge, 5-10 years experience, can evaluate investments independently' },
                { value: 'D', score: 80, text: 'Advanced knowledge, 10+ years, understand market cycles deeply' },
                { value: 'E', score: 100, text: 'Expert level, professional experience, sophisticated strategies' },
            ],
        },
        {
            id: 'q12',
            section: 1,
            category: 'emotional_composure',
            text: 'Regret and Decision-Making Style - Which regret would bother you more?',
            options: [
                { value: 'A', score: 20, text: 'Making a risky investment that loses money (strong regret, dwell for months)' },
                { value: 'B', score: 40, text: 'Investing in something volatile that drops (moderate regret)' },
                { value: 'C', score: 60, text: 'Missing gains and losing money feel equally regrettable' },
                { value: 'D', score: 80, text: 'Missing a great opportunity bothers me more than losses' },
                { value: 'E', score: 100, text: 'Don\'t dwell on past decisions, focus on future (minimal regret)' },
            ],
        },
        {
            id: 'q13',
            section: 1,
            category: 'personality',
            text: 'Focus and Return Expectations - When reviewing your portfolio, you focus primarily on:',
            options: [
                { value: 'A', score: 20, text: 'Avoiding any losses, need guaranteed returns, check daily' },
                { value: 'B', score: 40, text: 'Stability and steady returns, acceptable to slightly lag inflation' },
                { value: 'C', score: 60, text: 'Beating inflation, willing to accept moderate volatility' },
                { value: 'D', score: 80, text: 'Long-term growth, accept significant short-term swings' },
                { value: 'E', score: 100, text: 'Maximum long-term returns, embrace volatility as opportunity' },
            ],
        },
        // Behavioral Bias (Q14-Q20)
        {
            id: 'q14',
            section: 2,
            category: 'cognitive_bias',
            text: 'Overconfidence Check - Rate your investment skill vs professional fund managers:',
            options: [
                { value: 'A', score: 20, text: 'I can consistently outperform them with my stock picks' },
                { value: 'B', score: 40, text: 'I can beat them occasionally by timing market and picking winners' },
                { value: 'C', score: 60, text: 'I can match their returns with right research' },
                { value: 'D', score: 80, text: 'They likely have an edge due to resources and experience' },
                { value: 'E', score: 100, text: 'I should index and let them compete; market efficiency is real' },
            ],
        },
        {
            id: 'q15',
            section: 2,
            category: 'cognitive_bias',
            text: 'Anchoring Bias - Stock bought at ₹1000 is now ₹700. Fundamentals unchanged. You think:',
            options: [
                { value: 'A', score: 20, text: 'Won\'t sell until it gets back to ₹1000 (my purchase price)' },
                { value: 'B', score: 40, text: 'Feel anchored to ₹1000 but consider selling if fundamentals change' },
                { value: 'C', score: 60, text: 'Purchase price matters somewhat but evaluate current value' },
                { value: 'D', score: 80, text: 'Purchase price irrelevant, only current value and future potential matter' },
                { value: 'E', score: 100, text: 'View ₹700 as discount to intrinsic value, consider buying more' },
            ],
        },
        {
            id: 'q16',
            section: 2,
            category: 'cognitive_bias',
            text: 'Herding and Social Influence - When everyone around you is excited about a hot investment:',
            options: [
                { value: 'A', score: 20, text: 'FOMO - immediately invest without research, don\'t want to miss out' },
                { value: 'B', score: 40, text: 'Feel pressure to join, do quick research and likely invest' },
                { value: 'C', score: 60, text: 'Consider it but do thorough research before deciding' },
                { value: 'D', score: 80, text: 'Skeptical of crowd behavior, avoid most trendy investments' },
                { value: 'E', score: 100, text: 'Contrarian signal - when everyone\'s buying, I\'m cautious or selling' },
            ],
        },
        {
            id: 'q17',
            section: 2,
            category: 'cognitive_bias',
            text: 'Confirmation Bias - When researching an investment you\'re excited about:',
            options: [
                { value: 'A', score: 20, text: 'Only seek positive information that confirms my belief' },
                { value: 'B', score: 40, text: 'Mostly look for supporting evidence, briefly check risks' },
                { value: 'C', score: 60, text: 'Balanced research, look at both pros and cons' },
                { value: 'D', score: 80, text: 'Actively seek contradicting views, play devil\'s advocate' },
                { value: 'E', score: 100, text: 'Start by looking for reasons NOT to invest (inversion thinking)' },
            ],
        },
        {
            id: 'q18',
            section: 2,
            category: 'cognitive_bias',
            text: 'Availability Bias (Recency) - Recent market crash news makes you feel:',
            options: [
                { value: 'A', score: 20, text: 'Another crash is imminent, must reduce equity now' },
                { value: 'B', score: 40, text: 'Market is very risky right now, should be cautious' },
                { value: 'C', score: 60, text: 'Aware but don\'t let recent news significantly change strategy' },
                { value: 'D', score: 80, text: 'Recent news is noise, focus on long-term data and trends' },
                { value: 'E', score: 100, text: 'Headlines are contrary indicator, ignore completely' },
            ],
        },
        {
            id: 'q19',
            section: 2,
            category: 'cognitive_bias',
            text: 'Mental Accounting - You receive ₹2 lakh bonus. How do you view it for investing?',
            options: [
                { value: 'A', score: 20, text: '\'Fun money\' - take more risks than with regular savings' },
                { value: 'B', score: 40, text: 'Different bucket from salary, slightly more risk acceptable' },
                { value: 'C', score: 60, text: 'Somewhat separate but generally follow same strategy' },
                { value: 'D', score: 80, text: 'All money is same, follow consistent investment approach' },
                { value: 'E', score: 100, text: 'Money is fungible, optimize based on tax and overall portfolio' },
            ],
        },
        {
            id: 'q20',
            section: 2,
            category: 'emotional_bias',
            text: 'Status Quo and Change Resistance - Advisor suggests rebalancing your portfolio:',
            options: [
                { value: 'A', score: 20, text: 'Very uncomfortable, strongly resist any changes' },
                { value: 'B', score: 40, text: 'Hesitant, need a lot of convincing to make changes' },
                { value: 'C', score: 60, text: 'Open to changes if rationale is clear' },
                { value: 'D', score: 80, text: 'Welcome periodic rebalancing, understand the logic' },
                { value: 'E', score: 100, text: 'Actively seek portfolio optimization opportunities' },
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

        const financialPosition = (getScore('q1') + getScore('q5') + getScore('q6')) / 3;
        const timeHorizon = (getScore('q2') + getScore('q3')) / 2;
        const humanCapital = getScore('q4');
        const riskCapacity = (financialPosition * 0.4) + (timeHorizon * 0.3) + (humanCapital * 0.3);

        const emotionalComposure = (getScore('q7') + getScore('q8') + getScore('q9') + getScore('q12')) / 4;
        const personality = (getScore('q10') + getScore('q13')) / 2;
        const experience = getScore('q11');
        const riskTolerance = (emotionalComposure * 0.35) + (personality * 0.35) + (experience * 0.30);

        const cognitiveBias = (getScore('q14') + getScore('q15') + getScore('q16') + getScore('q17') + getScore('q18') + getScore('q19')) / 6;
        const emotionalBias = getScore('q20');
        const behavioralBias = 1.0 - ((cognitiveBias * 0.6) + (emotionalBias * 0.4)) / 100;

        const finalScore = Math.min(riskCapacity, riskTolerance) * behavioralBias;

        // Determine constraining factor
        const diff = Math.abs(riskCapacity - riskTolerance);
        let constrainingFactor: 'capacity' | 'tolerance' | 'both' = 'both';
        if (diff > 5) {
            constrainingFactor = riskCapacity < riskTolerance ? 'capacity' : 'tolerance';
        }

        // Analyze behavioral insights
        const analyzeBias = (score: number): 'Low' | 'Moderate' | 'High' => {
            if (score >= 70) return 'Low';
            if (score >= 40) return 'Moderate';
            return 'High';
        };

        const behavioralInsights = {
            lossAversion: analyzeBias(getScore('q7')),
            regretSensitivity: analyzeBias(getScore('q12')),
            anchoring: analyzeBias(getScore('q15')),
            overconfidence: analyzeBias(getScore('q14')),
            herding: analyzeBias(getScore('q16')),
        };

        let tier = 1; let tierName = ''; let tierDescription = '';
        let allocation = { equity: '', debt: '', gold: '' };

        if (finalScore >= 86) {
            tier = 6; tierName = 'Ultra-Aggressive'; tierDescription = 'Maximum wealth creation with concentrated positions';
            allocation = { equity: '90-95%', debt: '0-5%', gold: '5-10%' };
        } else if (finalScore >= 71) {
            tier = 5; tierName = 'Aggressive Growth'; tierDescription = 'Strong focus on wealth creation with high equity exposure';
            allocation = { equity: '80-90%', debt: '5-15%', gold: '5%' };
        } else if (finalScore >= 56) {
            tier = 4; tierName = 'Growth Focused'; tierDescription = 'Long-term wealth creation with managed volatility';
            allocation = { equity: '65-80%', debt: '15-30%', gold: '5%' };
        } else if (finalScore >= 36) {
            tier = 3; tierName = 'Moderate Balanced'; tierDescription = 'Balance between growth and stability';
            allocation = { equity: '45-60%', debt: '35-45%', gold: '5-10%' };
        } else if (finalScore >= 16) {
            tier = 2; tierName = 'Conservative Income'; tierDescription = 'Prioritizes steady income and stability';
            allocation = { equity: '20-35%', debt: '60-70%', gold: '5-10%' };
        } else {
            tier = 1; tierName = 'Capital Preservation'; tierDescription = 'Safety and capital protection above all';
            allocation = { equity: '5-15%', debt: '75-85%', gold: '10%' };
        }

        // Default goal based on time horizon
        const timeHorizonScore = timeHorizon;
        let goalType = 'Retirement Planning';
        let goalTimeframe = '(10-20 years)';

        if (timeHorizonScore >= 80) {
            goalType = 'Wealth Accumulation';
            goalTimeframe = '(15+ years)';
        } else if (timeHorizonScore >= 60) {
            goalType = 'Retirement Planning';
            goalTimeframe = '(10-20 years)';
        } else if (timeHorizonScore >= 40) {
            goalType = 'Education Planning';
            goalTimeframe = '(5-15 years)';
        } else {
            goalType = 'Near-term Goal';
            goalTimeframe = '(2-7 years)';
        }

        return {
            riskCapacity,
            riskTolerance,
            behavioralBias,
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
