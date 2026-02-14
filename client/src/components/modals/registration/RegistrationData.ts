import { TrendingUp, Shield, Bot } from 'lucide-react';
import React from 'react';

// --- INTERFACES ---

export interface QuestionOption {
    value: string;
    text: string;
    score: number;
    subtext?: string;
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
                category: 'capacity',
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
                category: 'capacity',
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
                category: 'capacity',
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
                category: 'capacity',
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
                category: 'capacity',
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
                category: 'capacity',
                text: 'Do you expect any big expenses in the next 3 years (wedding, home, education)?',
                options: [
                    { value: 'A', score: 25, text: 'Yes, very soon (within 1 year)' },
                    { value: 'B', score: 50, text: 'Yes, within 2-3 years' },
                    { value: 'C', score: 75, text: 'Maybe, but not confirmed' },
                    { value: 'D', score: 100, text: 'No major expenses expected' },
                ],
            },
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
                category: 'tolerance',
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
                category: 'tolerance',
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
                category: 'tolerance',
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
                category: 'tolerance',
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
                category: 'tolerance',
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
                category: 'tolerance',
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
                category: 'tolerance',
                text: 'When facing uncertain situations in life, how do you typically react?',
                options: [
                    { value: 'A', score: 25, text: 'Get very anxious and stressed' },
                    { value: 'B', score: 50, text: 'Feel worried but can manage' },
                    { value: 'C', score: 75, text: 'Stay fairly calm and think rationally' },
                    { value: 'D', score: 100, text: 'Remain very calm, see it as challenge' },
                ],
            },
        ]
    },
    {
        id: 2,
        title: "Behavioral Bias",
        description: "Understanding your investment biases",
        icon: React.createElement(Bot, { className: "w-4 h-4" }),
        questions: [
            {
                id: 'q14',
                section: 2,
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
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
                category: 'behavior',
                text: 'Advisor suggests moving money for better long-term returns. How do you feel?',
                options: [
                    { value: 'A', score: 25, text: 'Very uncomfortable – keep as is' },
                    { value: 'B', score: 50, text: 'Hesitant – need convincing' },
                    { value: 'C', score: 75, text: 'Open if reasoning makes sense' },
                    { value: 'D', score: 100, text: 'Comfortable with change' },
                ],
            },
        ]
    }
];

export const tiers: TierData[] = [
    { id: 1, range: [0, 29], name: "Safety First", desc: "Safety and capital protection above all", equity: "5-15%", debt: "75-85%", gold: "10%" },
    { id: 2, range: [30, 44], name: "Conservative Income", desc: "Prioritizes steady income and stability", equity: "20-35%", debt: "60-70%", gold: "5-10%" },
    { id: 3, range: [45, 59], name: "Moderate Balanced", desc: "Balance between growth and stability", equity: "45-60%", debt: "35-45%", gold: "5-10%" },
    { id: 4, range: [60, 74], name: "Growth Focused", desc: "Long-term wealth creation with managed volatility", equity: "65-80%", debt: "15-30%", gold: "5%" },
    { id: 5, range: [75, 89], name: "Aggressive Growth", desc: "Strong focus on wealth creation with high equity exposure", equity: "80-90%", debt: "5-15%", gold: "5%" },
    { id: 6, range: [90, 100], name: "Ultra-Aggressive", desc: "Maximum wealth creation with concentrated positions", equity: "90-95%", debt: "0-5%", gold: "5-10%" }
];

// --- SHARED STYLES ---

export const labelStyle = "text-[14px] font-bold text-slate-800 mb-1 flex transition-colors";
export const inputStyle = (hasError: boolean) => `w-full h-12 px-4 rounded-xl bg-slate-50 border transition-all duration-200 outline-none text-sm placeholder:text-slate-400 ${hasError ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5'}`;
export const primaryButtonStyle = "w-full h-14 bg-blue-600 text-white font-bold rounded-2xl text-[15px] shadow-xl shadow-blue-100 transition-all hover:bg-blue-700 active:scale-[0.98] disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none";
export const checklistItemStyle = "flex items-center gap-2 text-[11px] font-medium text-slate-500 transition-colors";
