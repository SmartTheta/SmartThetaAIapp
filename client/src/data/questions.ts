export type Section = 'CAPACITY' | 'TOLERANCE' | 'BIAS';

export interface Option {
    id: string;
    text: string;
    score: number;
}

export interface Question {
    id: number;
    section: Section;
    category: string;
    title: string;
    question: string;
    options: Option[];
}

export const sections: Record<Section, { name: string; description: string; questions: number[] }> = {
    CAPACITY: {
        name: 'Risk Capacity',
        description: 'Financial ability to take risk',
        questions: [1, 2, 3, 4, 5, 6],
    },
    TOLERANCE: {
        name: 'Risk Tolerance',
        description: 'Psychological comfort level',
        questions: [7, 8, 9, 10, 11, 12, 13],
    },
    BIAS: {
        name: 'Behavioral Bias',
        description: 'Investment behavior & biases',
        questions: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    },
};

export const goalMultipliers: Record<string, { name: string; multiplier: number; description: string }> = {
    wealth_accumulation: { name: 'Wealth Building', multiplier: 1.2, description: 'Long-term wealth growth' },
    retirement: { name: 'Retirement Planning', multiplier: 1.0, description: 'Building retirement corpus' },
    education: { name: 'Children\'s Education', multiplier: 0.9, description: 'Education funding' },
    home_purchase: { name: 'Home Purchase', multiplier: 0.75, description: 'Saving for property' },
    emergency: { name: 'Emergency Fund', multiplier: 0.7, description: 'Financial safety net' },
    legacy: { name: 'Legacy Planning', multiplier: 1.15, description: 'Generational wealth' },
};

export const questions: Question[] = [
    // SECTION 0: Risk Capacity (Questions 1-6)
    {
        id: 1,
        section: 'CAPACITY',
        category: 'emergency_savings',
        title: 'Emergency Savings',
        question: 'If you lost your income today, how long could you pay all your bills using your savings?',
        options: [
            { id: 'A', text: 'Less than 3 months', score: 25 },
            { id: 'B', text: '3 to 6 months', score: 50 },
            { id: 'C', text: '6 to 12 months', score: 75 },
            { id: 'D', text: 'More than 12 months', score: 100 },
        ],
    },
    {
        id: 2,
        section: 'CAPACITY',
        category: 'loan_burden',
        title: 'Monthly Loan Payments',
        question: 'What percentage of your monthly income goes towards paying loans (home loan, car loan, personal loans)?',
        options: [
            { id: 'A', text: 'More than 50% of my income', score: 25 },
            { id: 'B', text: '30% to 50% of my income', score: 50 },
            { id: 'C', text: '10% to 30% of my income', score: 75 },
            { id: 'D', text: 'Less than 10% (or no loans)', score: 100 },
        ],
    },
    {
        id: 3,
        section: 'CAPACITY',
        category: 'insurance',
        title: 'Insurance Coverage',
        question: 'Do you have adequate insurance for yourself and your family?',
        options: [
            { id: 'A', text: 'No life or health insurance', score: 25 },
            { id: 'B', text: 'Basic health insurance only', score: 50 },
            { id: 'C', text: 'Both life + health (covering 5-7 yrs income)', score: 75 },
            { id: 'D', text: 'Comprehensive coverage (10x income + health)', score: 100 },
        ],
    },
    {
        id: 4,
        section: 'CAPACITY',
        category: 'time_horizon',
        title: 'Investment Timeline',
        question: 'When will you need to use this money you\'re planning to invest?',
        options: [
            { id: 'A', text: 'Within 2 years', score: 25 },
            { id: 'B', text: '2 to 5 years from now', score: 50 },
            { id: 'C', text: '5 to 10 years from now', score: 75 },
            { id: 'D', text: 'More than 10 years from now', score: 100 },
        ],
    },
    {
        id: 5,
        section: 'CAPACITY',
        category: 'job_security',
        title: 'Job Security',
        question: 'How stable is your main source of income?',
        options: [
            { id: 'A', text: 'Very uncertain (freelance/commission)', score: 25 },
            { id: 'B', text: 'Somewhat stable (contract/business)', score: 50 },
            { id: 'C', text: 'Stable (permanent job)', score: 75 },
            { id: 'D', text: 'Very stable (Govt/Professional/Multiple)', score: 100 },
        ],
    },
    {
        id: 6,
        section: 'CAPACITY',
        category: 'upcoming_expenses',
        title: 'Upcoming Major Expenses',
        question: 'Do you expect any big expenses in the next 3 years (wedding, home, education)?',
        options: [
            { id: 'A', text: 'Yes, very soon (within 1 year)', score: 25 },
            { id: 'B', text: 'Yes, within 2-3 years', score: 50 },
            { id: 'C', text: 'Maybe, but not confirmed', score: 75 },
            { id: 'D', text: 'No major expenses expected', score: 100 },
        ],
    },

    // SECTION 1: Risk Tolerance (Questions 7-13)
    {
        id: 7,
        section: 'TOLERANCE',
        category: 'loss_reaction',
        title: 'Portfolio Drop Reaction',
        question: 'Imagine you invested ₹10 lakhs. Within 6 months, it drops to ₹7 lakhs. What would you do?',
        options: [
            { id: 'A', text: 'Panic and sell immediately', score: 25 },
            { id: 'B', text: 'Worry, stop investing, wait and watch', score: 50 },
            { id: 'C', text: 'Concerned but continue investing', score: 75 },
            { id: 'D', text: 'See it as buying opportunity, invest more', score: 100 },
        ],
    },
    {
        id: 8,
        section: 'TOLERANCE',
        category: 'sleep_test',
        title: 'Sleep Quality Test',
        question: 'How much loss in your investment portfolio would cause you to lose sleep?',
        options: [
            { id: 'A', text: 'Any loss at all, even 5%', score: 25 },
            { id: 'B', text: '10-15% loss would worry me a lot', score: 50 },
            { id: 'C', text: '20-25% loss would make me uncomfortable', score: 75 },
            { id: 'D', text: 'Can handle 30-40% drops for long term', score: 100 },
        ],
    },
    {
        id: 9,
        section: 'TOLERANCE',
        category: 'regret_duration',
        title: 'Past Investment Mistakes',
        question: 'If you made a wrong investment decision and lost money, how long would you feel bad?',
        options: [
            { id: 'A', text: 'For months, I\'d keep thinking about it', score: 25 },
            { id: 'B', text: 'For several weeks', score: 50 },
            { id: 'C', text: 'For a few days, then move on', score: 75 },
            { id: 'D', text: 'Accept quickly as learning experience', score: 100 },
        ],
    },
    {
        id: 10,
        section: 'TOLERANCE',
        category: 'knowledge',
        title: 'Investment Knowledge',
        question: 'How would you rate your understanding of investments and markets?',
        options: [
            { id: 'A', text: 'Beginner (FDs/Savings only)', score: 25 },
            { id: 'B', text: 'Basic (Mutual Funds/Stocks concepts)', score: 50 },
            { id: 'C', text: 'Intermediate (Asset allocation/Cycles)', score: 75 },
            { id: 'D', text: 'Advanced (Active tracking/Ratios)', score: 100 },
        ],
    },
    {
        id: 11,
        section: 'TOLERANCE',
        category: 'experience',
        title: 'Past Investment Experience',
        question: 'Have you ever invested in equity mutual funds or stocks during a market crash?',
        options: [
            { id: 'A', text: 'No, only safe options (FD/PPF)', score: 25 },
            { id: 'B', text: 'Invested but sold in panic', score: 50 },
            { id: 'C', text: 'Stayed invested but stopped SIPs', score: 75 },
            { id: 'D', text: 'Stayed invested and continued SIPs', score: 100 },
        ],
    },
    {
        id: 12,
        section: 'TOLERANCE',
        category: 'openness',
        title: 'Trying New Things',
        question: 'In general life, how comfortable are you with trying new experiences?',
        options: [
            { id: 'A', text: 'Prefer familiar routines, avoid change', score: 25 },
            { id: 'B', text: 'Cautious but willing after research', score: 50 },
            { id: 'C', text: 'Enjoy new experiences, adapt well', score: 75 },
            { id: 'D', text: 'Actively seek new challenges', score: 100 },
        ],
    },
    {
        id: 13,
        section: 'TOLERANCE',
        category: 'stress_handling',
        title: 'Handling Stress',
        question: 'When facing uncertain situations in life, how do you typically react?',
        options: [
            { id: 'A', text: 'Get very anxious and stressed', score: 25 },
            { id: 'B', text: 'Feel worried but can manage', score: 50 },
            { id: 'C', text: 'Stay fairly calm and think rationally', score: 75 },
            { id: 'D', text: 'Remain very calm, see it as challenge', score: 100 },
        ],
    },

    // SECTION 2: Behavioral Bias (Questions 14-22)
    {
        id: 14,
        section: 'BIAS',
        category: 'overconfidence',
        title: 'Investment Confidence',
        question: 'How would you rate your ability to pick good investments?',
        options: [
            { id: 'A', text: 'No confidence; need expert guidance', score: 25 },
            { id: 'B', text: 'Some decisions but prefer validation', score: 50 },
            { id: 'C', text: 'Confident in my research and decisions', score: 75 },
            { id: 'D', text: 'Very confident; often beat market', score: 100 },
        ],
    },
    {
        id: 15,
        section: 'BIAS',
        category: 'anchoring',
        title: 'First Impression Stickiness',
        question: 'A stock was ₹500, now ₹700. Friend says it\'s a buy. What do you think?',
        options: [
            { id: 'A', text: 'Too expensive; wait for ₹500', score: 25 },
            { id: 'B', text: 'Uncomfortable buying at ₹700', score: 50 },
            { id: 'C', text: 'Re-evaluate without thinking of ₹500', score: 75 },
            { id: 'D', text: 'If fundamentals support, old price irrelevant', score: 100 },
        ],
    },
    {
        id: 16,
        section: 'BIAS',
        category: 'confirmation',
        title: 'Information Gathering',
        question: 'When researching an investment, which approach do you typically follow?',
        options: [
            { id: 'A', text: 'Look for info that confirms my belief', score: 25 },
            { id: 'B', text: 'Mostly positive reviews, glance at negative', score: 50 },
            { id: 'C', text: 'Look at both positive and negative equally', score: 75 },
            { id: 'D', text: 'Actively seek opposing views', score: 100 },
        ],
    },
    {
        id: 17,
        section: 'BIAS',
        category: 'availability',
        title: 'Recent News Impact',
        question: 'How much do recent news headlines affect your investment decisions?',
        options: [
            { id: 'A', text: 'A lot – often decide based on news', score: 25 },
            { id: 'B', text: 'Quite a bit – events stay in mind', score: 50 },
            { id: 'C', text: 'Somewhat – aware but try to ignore', score: 75 },
            { id: 'D', text: 'Very little – focus on fundamentals', score: 100 },
        ],
    },
    {
        id: 18,
        section: 'BIAS',
        category: 'herding',
        title: 'Following the Crowd',
        question: 'Everyone you know is investing in a hot sector. What do you do?',
        options: [
            { id: 'A', text: 'Jump in quickly – must be good', score: 25 },
            { id: 'B', text: 'Feel pressured but worried', score: 50 },
            { id: 'C', text: 'Research independently before deciding', score: 75 },
            { id: 'D', text: 'Often avoid – cautious when everyone buys', score: 100 },
        ],
    },
    {
        id: 19,
        section: 'BIAS',
        category: 'mental_accounting',
        title: 'Money Mental Boxes',
        question: 'You have ₹5L savings and get ₹2L bonus. How do you invest the bonus?',
        options: [
            { id: 'A', text: 'Treat differently – take more risk', score: 25 },
            { id: 'B', text: 'Separate bucket – specific purpose', score: 50 },
            { id: 'C', text: 'View separate initially but plan', score: 75 },
            { id: 'D', text: 'See as ₹7L total, one strategy', score: 100 },
        ],
    },
    {
        id: 20,
        section: 'BIAS',
        category: 'loss_aversion',
        title: 'Winning vs. Losing Mindset',
        question: 'If your investments gain ₹50k vs losing ₹50k, which affects you more?',
        options: [
            { id: 'A', text: 'Loss affects me 3-4x more', score: 25 },
            { id: 'B', text: 'Loss affects me 2x more', score: 50 },
            { id: 'C', text: 'Roughly equal', score: 75 },
            { id: 'D', text: 'Focus on learning, not emotion', score: 100 },
        ],
    },
    {
        id: 21,
        section: 'BIAS',
        category: 'attribution',
        title: 'Success and Failure Attribution',
        question: 'When your investment does well or poorly, what do you typically think?',
        options: [
            { id: 'A', text: 'Gains=Skill, Losses=Bad Luck', score: 25 },
            { id: 'B', text: 'Gains=Confidence, Losses=Self Doubt', score: 50 },
            { id: 'C', text: 'Both are partly luck, partly skill', score: 75 },
            { id: 'D', text: 'Learn from both objectively', score: 100 },
        ],
    },
    {
        id: 22,
        section: 'BIAS',
        category: 'status_quo',
        title: 'Fear of Change',
        question: 'Advisor suggests moving money for better long-term returns. How do you feel?',
        options: [
            { id: 'A', text: 'Very uncomfortable – keep as is', score: 25 },
            { id: 'B', text: 'Hesitant – need convincing', score: 50 },
            { id: 'C', text: 'Open if reasoning makes sense', score: 75 },
            { id: 'D', text: 'Comfortable with change', score: 100 },
        ],
    },
];
