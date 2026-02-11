import React, { useState } from 'react';
import { Bot, ChevronRight, TrendingUp, Shield, CheckCircle, Award, Clock, Wallet, ShieldCheck, User, BarChart3, AlertCircle, RefreshCw, Download } from 'lucide-react';

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
        // SECTION 0: Risk Capacity
        {
            id: 'q1',
            section: 0,
            text: 'Financial Safety Net - Which best describes your current financial position?',
            options: [
                { value: 'A', score: 20, text: 'Minimal emergency fund, high debt (>50% DTI)', subtext: 'Extremely limited savings', icon: Wallet },
                { value: 'B', score: 40, text: '3-6 months expenses saved, moderate debt (30-50% DTI)', subtext: 'Some savings and investments', icon: Clock },
                { value: 'C', score: 60, text: '6-12 months expenses saved, low debt (<30% DTI)', subtext: 'Diversified investments', icon: ShieldCheck },
                { value: 'D', score: 80, text: '12+ months expenses saved, minimal debt', subtext: 'Substantial liquid net worth', icon: Award },
                { value: 'E', score: 100, text: 'Financial independence achieved, passive income > expenses', subtext: 'Significant net worth', icon: Bot },
            ],
        },
        {
            id: 'q2',
            section: 0,
            text: 'Investment Time Horizon - When do you need to access the majority of invested funds?',
            options: [
                { value: 'A', score: 20, text: 'Within 2 years', subtext: 'Immediate or near-term needs', icon: Clock },
                { value: 'B', score: 40, text: '2-5 years', subtext: 'Near-term major goals', icon: Clock },
                { value: 'C', score: 60, text: '5-10 years', subtext: 'Mid-term retirement or education planning', icon: ShieldCheck },
                { value: 'D', score: 80, text: '10-20 years', subtext: 'Long-term wealth creation', icon: Award },
                { value: 'E', score: 100, text: '20+ years', subtext: 'Generational wealth, no near-term needs', icon: Bot },
            ],
        },
        {
            id: 'q3',
            section: 0,
            text: 'Age and Retirement Proximity',
            options: [
                { value: 'A', score: 20, text: '55+ years, retiring within 5 years', subtext: 'Focus on wealth preservation', icon: User },
                { value: 'B', score: 40, text: '45-55 years, 5-15 years to retirement', subtext: 'Late career transition', icon: User },
                { value: 'C', score: 60, text: '35-45 years, mid-career, peak earning phase', subtext: 'Balanced horizon', icon: User },
                { value: 'D', score: 80, text: '25-35 years, early career, decades to retirement', subtext: 'Long growth horizon', icon: User },
                { value: 'E', score: 100, text: 'Under 25 years, just starting career', subtext: 'Maximum human capital', icon: User },
            ],
        },
        {
            id: 'q4',
            section: 0,
            text: 'Income Stability and Human Capital',
            options: [
                { value: 'A', score: 20, text: 'Unstable income (freelance/gig)', subtext: 'Irregular cash flows', icon: Wallet },
                { value: 'B', score: 40, text: 'Moderate stability (business owner)', subtext: 'Variable income, growing field', icon: BarChart3 },
                { value: 'C', score: 60, text: 'Stable salaried job, steady industry', subtext: 'Good job security', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Very stable (MNC/PSU/Govt)', subtext: 'Multiple income sources', icon: Award },
                { value: 'E', score: 100, text: 'Passive income established', subtext: 'Not dependent on salary', icon: Bot },
            ],
        },
        {
            id: 'q5',
            section: 0,
            text: 'Financial Dependents',
            options: [
                { value: 'A', score: 20, text: '4+ dependents with significant obligations', subtext: 'High educational/elderly care needs', icon: User },
                { value: 'B', score: 40, text: '2-3 dependents with moderate obligations', subtext: 'Moderate responsibilities', icon: User },
                { value: 'C', score: 60, text: '1-2 dependents, manageable obligations', subtext: 'Low responsibilities', icon: User },
                { value: 'D', score: 80, text: '0-1 dependents, minimal obligations', subtext: 'Minimal responsibilities', icon: User },
                { value: 'E', score: 100, text: 'No dependents, surplus capacity', subtext: 'Full financial flexibility', icon: User },
            ],
        },
        {
            id: 'q6',
            section: 0,
            text: 'Insurance and Risk Protection',
            options: [
                { value: 'A', score: 20, text: 'Minimal/no life and health insurance coverage', subtext: 'High exposed risk', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Basic coverage (3-5x income life, basic health)', subtext: 'Essentials covered', icon: Shield },
                { value: 'C', score: 60, text: 'Good coverage (5-10x income life, health)', subtext: 'Solid protection base', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Comprehensive coverage (10x+ life, health, disability)', subtext: 'Fully protected', icon: Award },
                { value: 'E', score: 100, text: 'Over-insured, all risks covered + umbrella policies', subtext: 'Maximum safety', icon: Bot },
            ],
        },
        // SECTION 1: Risk Tolerance
        {
            id: 'q7',
            section: 1,
            text: 'Volatility Stress Test (Sleep Test) - Your ₹10L portfolio drops to ₹7L. You:',
            options: [
                { value: 'A', score: 20, text: 'Panic sell immediately, lose sleep', subtext: 'High anxiety response', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Worry significantly, consider selling', subtext: 'Check portfolio daily', icon: Shield },
                { value: 'C', score: 60, text: 'Uncomfortable but stay invested', subtext: 'Seek reassurance, stay focus', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Calm, stay invested, check occasionally', subtext: 'Disciplined approach', icon: Award },
                { value: 'E', score: 100, text: 'View as opportunity, buy more', subtext: 'Unbothered by market swings', icon: TrendingUp },
            ],
        },
        {
            id: 'q8',
            section: 1,
            text: 'Loss vs Gain Sensitivity - Which causes you more emotional distress?',
            options: [
                { value: 'A', score: 20, text: 'Losing ₹1L feels 5x worse than gaining ₹1L', subtext: 'High loss aversion', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Losing ₹1L feels 3x worse than gains', subtext: 'Moderate loss aversion', icon: Shield },
                { value: 'C', score: 60, text: 'Losses and gains feel roughly equal', subtext: 'Balanced emotional impact', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Gains feel slightly better than losses feel bad', subtext: 'Growth focus', icon: Award },
                { value: 'E', score: 100, text: 'Focus entirely on long-term, losses barely register', subtext: 'Horizon-led patience', icon: TrendingUp },
            ],
        },
        {
            id: 'q9',
            section: 1,
            text: 'Past Behavior During Corrections - During 2020 crash, you:',
            options: [
                { value: 'A', score: 20, text: 'Sold everything, moved to cash/FD', subtext: 'Severe reaction to crash', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Reduced equity significantly', subtext: 'Took 1-2 years to recover allocation', icon: Shield },
                { value: 'C', score: 60, text: 'Stayed invested but stopped SIPs', subtext: 'Cautious holding pattern', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Continued SIPs, stayed disciplined', subtext: 'Consistent strategy execution', icon: Award },
                { value: 'E', score: 100, text: 'Increased investments, deployed cash', subtext: 'Opportunistic buying', icon: TrendingUp },
            ],
        },
        {
            id: 'q10',
            section: 1,
            text: 'Personality - Openness and Emotional Stability',
            options: [
                { value: 'A', score: 20, text: 'Prefer safety, worry often', subtext: 'Avoid unfamiliar risks', icon: Shield },
                { value: 'B', score: 40, text: 'Generally cautious', subtext: 'Some anxiety about decisions', icon: Shield },
                { value: 'C', score: 60, text: 'Balanced - open but need reassurance', subtext: 'Rational explorer', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Enjoy exploring new strategies', subtext: 'Stay calm under pressure', icon: Award },
                { value: 'E', score: 100, text: 'Highly experimental, thrive on uncertainty', subtext: 'Exceptional composure', icon: TrendingUp },
            ],
        },
        {
            id: 'q11',
            section: 1,
            text: 'Investment Knowledge and Experience',
            options: [
                { value: 'A', score: 20, text: 'Beginner, <2 years investing', subtext: 'Rely entirely on advisors', icon: User },
                { value: 'B', score: 40, text: 'Basic knowledge, 2-5 years experience', subtext: 'Understand fundamentals', icon: User },
                { value: 'C', score: 60, text: 'Good knowledge, 5-10 years experience', subtext: 'Independent evaluations', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Advanced knowledge, 10+ years', subtext: 'Deep market cycle understanding', icon: Award },
                { value: 'E', score: 100, text: 'Expert level, professional experience', subtext: 'Sophisticated strategies', icon: TrendingUp },
            ],
        },
        {
            id: 'q12',
            section: 1,
            text: 'Regret and Decision-Making Style - Which regret would bother you more?',
            options: [
                { value: 'A', score: 20, text: 'Making a risky investment that loses money', subtext: 'Strong regret, dwell for months', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Investing in something volatile (moderate regret)', subtext: 'Dislike capital loss', icon: Shield },
                { value: 'C', score: 60, text: 'Missing gains and losing money feel equal', subtext: 'Balanced regret', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Missing a great opportunity bothers me more', subtext: 'FOMO over loss aversion', icon: Award },
                { value: 'E', score: 100, text: 'Don\'t dwell on past decisions', subtext: 'Forward-looking mindset', icon: TrendingUp },
            ],
        },
        {
            id: 'q13',
            section: 1,
            text: 'Focus and Return Expectations - When reviewing portfolio, you focus on:',
            options: [
                { value: 'A', score: 20, text: 'Avoiding any losses, need guaranteed returns', subtext: 'Check daily, ultra-safe', icon: Shield },
                { value: 'B', score: 40, text: 'Stability and steady returns', subtext: 'Slightly lag inflation is okay', icon: Shield },
                { value: 'C', score: 60, text: 'Beating inflation, accept moderate volatility', subtext: 'Standard growth goal', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Long-term growth, accept significant swings', subtext: 'Growth-led appetite', icon: Award },
                { value: 'E', score: 100, text: 'Maximum returns, embrace volatility', subtext: 'High-risk, high-conviction', icon: TrendingUp },
            ],
        },
        // SECTION 2: Behavioral Bias
        {
            id: 'q14',
            section: 2,
            text: 'Overconfidence Check - Rate your skill vs professional managers:',
            options: [
                { value: 'A', score: 20, text: 'I can consistently outperform them', subtext: 'High confidence in stock picking', icon: Bot },
                { value: 'B', score: 40, text: 'I can beat them occasionally', subtext: 'Timing and selection edge', icon: BarChart3 },
                { value: 'C', score: 60, text: 'I can match their returns', subtext: 'Research leads to parity', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'They likely have an edge due to resources', subtext: 'Humility in selection', icon: Award },
                { value: 'E', score: 100, text: 'I should index; market efficiency is real', subtext: 'Passive conviction', icon: Bot },
            ],
        },
        {
            id: 'q15',
            section: 2,
            text: 'Anchoring Bias - Stock at ₹1000 is now ₹700. Thoughts:',
            options: [
                { value: 'A', score: 20, text: 'Won\'t sell until it gets back to ₹1000', subtext: 'Anchored to purchase price', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Anchored but consider selling if fundamentals change', subtext: 'Partial anchoring', icon: Shield },
                { value: 'C', score: 60, text: 'Purchase price matters somewhat', subtext: 'Evaluate current value', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Purchase price irrelevant, future matters only', subtext: 'Rational valuation', icon: Award },
                { value: 'E', score: 100, text: 'View ₹700 as discount, buy more', subtext: 'Margin of safety focused', icon: Bot },
            ],
        },
        {
            id: 'q16',
            section: 2,
            text: 'Herding and Social Influence - When everyone is excited about an investment:',
            options: [
                { value: 'A', score: 20, text: 'FOMO - immediately invest without research', subtext: 'High herd mentality', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Feel pressure to join, do quick research', subtext: 'Susceptible to trends', icon: Shield },
                { value: 'C', score: 60, text: 'Consider it but do thorough research first', subtext: 'Balanced skepticism', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Skeptical of crowd behavior, avoid trends', subtext: 'Independent thinker', icon: Award },
                { value: 'E', score: 100, text: 'Contrarian signal - cautiously selling', subtext: 'Anti-herd strategy', icon: Bot },
            ],
        },
        {
            id: 'q17',
            section: 2,
            text: 'Confirmation Bias - When researching an investment you like:',
            options: [
                { value: 'A', score: 20, text: 'Only seek positive info that confirms my belief', subtext: 'High confirmation search', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Mostly look for supporting evidence', subtext: 'Brief check on risks', icon: Shield },
                { value: 'C', score: 60, text: 'Balanced research, pros and cons', subtext: 'Objective analysis', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Actively seek contradicting views', subtext: 'Play devil\'s advocate', icon: Award },
                { value: 'E', score: 100, text: 'Look for reasons NOT to invest (inversion)', subtext: 'Maximum critical thinking', icon: Bot },
            ],
        },
        {
            id: 'q18',
            section: 2,
            text: 'Availability Bias (Recency) - News of a market crash makes you:',
            options: [
                { value: 'A', score: 20, text: 'Another crash is imminent, reduce equity now', subtext: 'High recency stress', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Market is very risky right now, be cautious', subtext: 'Short-term fear', icon: Shield },
                { value: 'C', score: 60, text: 'Aware but don\'t change strategy', subtext: 'Calm awareness', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Recent news is noise, focus on long-term data', subtext: 'Data-led horizon', icon: Award },
                { value: 'E', score: 100, text: 'Headlines are contrary indicator, ignore', subtext: 'Strategic detachment', icon: Bot },
            ],
        },
        {
            id: 'q19',
            section: 2,
            text: 'Mental Accounting - You receive a ₹2L bonus. How do you invest?',
            options: [
                { value: 'A', score: 20, text: '"Fun money" - take more risks than regular savings', subtext: 'Compartmentalized risk', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Different bucket, slightly more risk acceptable', subtext: 'Moderate bucket thinking', icon: Shield },
                { value: 'C', score: 60, text: 'Somewhat separate but generally follow strategy', subtext: 'Fungibility awareness', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'All money is same, follow consistent approach', subtext: 'Rational fungibility', icon: Award },
                { value: 'E', score: 100, text: 'Optimize based on taxes and overall portfolio', subtext: 'Total wealth mindset', icon: Bot },
            ],
        },
        {
            id: 'q20',
            section: 2,
            text: 'Status Quo and Change Resistance - Advisor suggests rebalancing:',
            options: [
                { value: 'A', score: 20, text: 'Very uncomfortable, strongly resist changes', subtext: 'Path dependency', icon: AlertCircle },
                { value: 'B', score: 40, text: 'Hesitant, need a lot of convincing', subtext: 'Change aversion', icon: Shield },
                { value: 'C', score: 60, text: 'Open to changes if rationale is clear', subtext: 'Flexible mind', icon: ShieldCheck },
                { value: 'D', score: 80, text: 'Welcome periodic rebalancing', subtext: 'Disciplined adjustment', icon: Award },
                { value: 'E', score: 100, text: 'Actively seek optimization opportunities', subtext: 'Proactive evolution', icon: Bot },
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

        // RC Calculation
        const financialPosition = (getScore('q1') + getScore('q5') + getScore('q6')) / 3;
        const timeHorizon = (getScore('q2') + getScore('q3')) / 2;
        const humanCapital = getScore('q4');
        const riskCapacity = (financialPosition * 0.4) + (timeHorizon * 0.3) + (humanCapital * 0.3);

        // RT Calculation
        const emotionalComposure = (getScore('q7') + getScore('q8') + getScore('q9') + getScore('q12')) / 4;
        const personality = (getScore('q10') + getScore('q13')) / 2;
        const experience = getScore('q11');
        const riskTolerance = (emotionalComposure * 0.35) + (personality * 0.35) + (experience * 0.30);

        // BBI Calculation
        const cognitiveBias = (getScore('q14') + getScore('q15') + getScore('q16') + getScore('q17') + getScore('q18') + getScore('q19')) / 6;
        const emotionalBias = getScore('q20');
        const behavioralBias = 1.0 - ((cognitiveBias * 0.6) + (emotionalBias * 0.4)) / 100;

        // RPS Calculation (Constraint Factor)
        const finalScore = Math.min(riskCapacity, riskTolerance) * behavioralBias;

        let tier = 1;
        let tierName = '';
        let tierDescription = '';
        let allocation = { equity: '', debt: '', gold: '' };

        if (finalScore >= 86) {
            tier = 6;
            tierName = 'Ultra-Aggressive';
            tierDescription = 'Maximum wealth creation with concentrated positions';
            allocation = { equity: '90-95%', debt: '0-5%', gold: '5-10%' };
        } else if (finalScore >= 71) {
            tier = 5;
            tierName = 'Aggressive Growth';
            tierDescription = 'Strong focus on wealth creation with high equity exposure';
            allocation = { equity: '80-90%', debt: '5-15%', gold: '5%' };
        } else if (finalScore >= 56) {
            tier = 4;
            tierName = 'Growth Focused';
            tierDescription = 'Long-term wealth creation with managed volatility';
            allocation = { equity: '65-80%', debt: '15-30%', gold: '5%' };
        } else if (finalScore >= 36) {
            tier = 3;
            tierName = 'Moderate Balanced';
            tierDescription = 'Balance between growth and stability';
            allocation = { equity: '45-60%', debt: '35-45%', gold: '5-10%' };
        } else if (finalScore >= 16) {
            tier = 2;
            tierName = 'Conservative Income';
            tierDescription = 'Prioritizes steady income and stability';
            allocation = { equity: '20-35%', debt: '60-70%', gold: '5-10%' };
        } else {
            tier = 1;
            tierName = 'Capital Preservation';
            tierDescription = 'Safety and capital protection above all';
            allocation = { equity: '5-15%', debt: '75-85%', gold: '10%' };
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
                            <span className="block text-2xl font-bold text-slate-800">{results.behavioralBias.toFixed(2)}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase">Bias Index</span>
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
                                        <span className={`text-[10px] font-bold leading-none ${currentQuestion.section === idx ? 'text-blue-600' : 'text-slate-600'}`}>{getCategoryCount(idx)}/{idx === 0 ? 6 : 7}</span>
                                        <div className="h-1 w-6 bg-slate-100 rounded-full overflow-hidden shrink-0">
                                            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${(getCategoryCount(idx) / (idx === 0 ? 6 : 7)) * 100}%` }}></div>
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
                                    {option.subtext && (
                                        <p className={`text-[10px] font-normal mt-0.5 leading-none ${isSelected ? 'text-blue-600/70' : 'text-slate-400'}`}>
                                            {option.subtext}
                                        </p>
                                    )}
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
