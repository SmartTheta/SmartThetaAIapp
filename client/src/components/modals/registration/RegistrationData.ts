import { TrendingUp, Shield, Bot } from 'lucide-react';
import React from 'react';

// --- INTERFACES ---

export interface QuestionOption {
    value: string;
    text: string;
    score: number;
}

export interface Question {
    id: string;
    text: string;
    options: QuestionOption[];
    section: number;
    category: string;
}

export interface RiskSection {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    questions: Question[];
}

export interface TierData {
    id: number; // Added Tier ID
    range: [number, number];
    name: string;
    desc: string;
    equity: string;
    debt: string;
    gold: string;
}

export interface Language {
    id: string;
    name: string;
    nativeName: string;
    flag: string;
}

// --- DATA ---

export const languages: Language[] = [
    { id: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { id: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { id: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { id: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { id: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
    { id: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { id: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { id: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

export const riskSections: RiskSection[] = [
    {
        id: 0,
        title: "Risk Capacity",
        description: "Your financial ability to take risk",
        icon: React.createElement(TrendingUp, { className: "w-4 h-4" }),
        questions: [
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
            }
        ]
    },
    {
        id: 1,
        title: "Risk Tolerance",
        description: "Your psychological comfort with risk",
        icon: React.createElement(Shield, { className: "w-4 h-4" }),
        questions: [
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
        ]
    },
    {
        id: 2,
        title: "Behavioral Profile",
        description: "Understanding your investment biases",
        icon: React.createElement(Bot, { className: "w-4 h-4" }),
        questions: [
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
        ]
    }
];

export const tiers: TierData[] = [
    { id: 1, range: [0, 15], name: "Capital Preservation", desc: "Safety and capital protection above all", equity: "5-15%", debt: "75-85%", gold: "10%" },
    { id: 2, range: [16, 35], name: "Conservative Income", desc: "Prioritizes steady income and stability", equity: "20-35%", debt: "60-70%", gold: "5-10%" },
    { id: 3, range: [36, 55], name: "Moderate Balanced", desc: "Balance between growth and stability", equity: "45-60%", debt: "35-45%", gold: "5-10%" },
    { id: 4, range: [56, 70], name: "Growth Focused", desc: "Long-term wealth creation with managed volatility", equity: "65-80%", debt: "15-30%", gold: "5%" },
    { id: 5, range: [71, 85], name: "Aggressive Growth", desc: "Strong focus on wealth creation with high equity exposure", equity: "80-90%", debt: "5-15%", gold: "5%" },
    { id: 6, range: [86, 100], name: "Ultra-Aggressive", desc: "Maximum wealth creation with concentrated positions", equity: "90-95%", debt: "0-5%", gold: "5-10%" }
];

// --- SHARED STYLES ---

export const labelStyle = "text-[14px] font-bold text-slate-800 mb-1 flex transition-colors";
export const inputStyle = (hasError: boolean) => `w-full h-12 px-4 rounded-xl bg-slate-50 border transition-all duration-200 outline-none text-sm placeholder:text-slate-400 ${hasError ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5'}`;
export const primaryButtonStyle = "w-full h-14 bg-blue-600 text-white font-bold rounded-2xl text-[15px] shadow-xl shadow-blue-100 transition-all hover:bg-blue-700 active:scale-[0.98] disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none";
export const checklistItemStyle = "flex items-center gap-2 text-[11px] font-medium text-slate-500 transition-colors";
