export interface RiskCategory {
    category: number;
    name: string;
    min: number;
    max: number;
    equity: string;
    debt: string;
    gold: string;
}

export const RISK_CATEGORIES: RiskCategory[] = [
    { category: 1, name: 'Ultra Conservative', min: 0, max: 10, equity: '5%', debt: '85%', gold: '10%' },
    { category: 2, name: 'Capital Preservation', min: 11, max: 20, equity: '15%', debt: '75%', gold: '10%' },
    { category: 3, name: 'Conservative', min: 21, max: 30, equity: '25%', debt: '65%', gold: '10%' },
    { category: 4, name: 'Moderately Conservative', min: 31, max: 40, equity: '35%', debt: '55%', gold: '10%' },
    { category: 5, name: 'Moderate', min: 41, max: 50, equity: '45%', debt: '45%', gold: '10%' },
    { category: 6, name: 'Moderately Aggressive', min: 51, max: 60, equity: '55%', debt: '35%', gold: '10%' },
    { category: 7, name: 'Growth', min: 61, max: 70, equity: '65%', debt: '25%', gold: '10%' },
    { category: 8, name: 'Aggressive Growth', min: 71, max: 80, equity: '75%', debt: '18%', gold: '7%' },
    { category: 9, name: 'High Growth', min: 81, max: 90, equity: '85%', debt: '10%', gold: '5%' },
    { category: 10, name: 'Maximum Growth', min: 91, max: 100, equity: '95%', debt: '3%', gold: '2%' },
];

export function calculateAgeFactor(age: number): number {
    if (age < 25) return 1.00;
    if (age < 30) return 0.95;
    if (age < 35) return 0.90;
    if (age < 40) return 0.85;
    if (age < 45) return 0.78;
    if (age < 50) return 0.70;
    if (age < 55) return 0.62;
    if (age < 60) return 0.52;
    if (age < 65) return 0.42;
    return 0.35;
}

export function calculateAge(dob: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

export function getNextBirthday(dob: Date): Date {
    const today = new Date();
    const next = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (next <= today) {
        next.setFullYear(next.getFullYear() + 1);
    }
    return next;
}

export function getCategoryFromScore(score: number): RiskCategory {
    const clamped = Math.max(0, Math.min(100, Math.round(score)));
    for (const cat of RISK_CATEGORIES) {
        if (clamped >= cat.min && clamped <= cat.max) {
            return cat;
        }
    }
    return RISK_CATEGORIES[0];
}

export interface RiskCalculationInput {
    riskCapacity: number;
    riskTolerance: number;
    behavioralBias: number;
    dob: Date;
    answers: Record<string, string>;
    behavioralInsights: {
        lossAversion: string;
        regretSensitivity: string;
        anchoring: string;
        overconfidence: string;
        herding: string;
    };
    goalType: string;
    goalTimeframe: string;
    constrainingFactor: string;
}

export function calculateRiskProfile(input: RiskCalculationInput) {
    const age = calculateAge(input.dob);
    const ageFactor = calculateAgeFactor(age);

    // Constraint-based: MIN(RC, RT) is the base
    const constrainedBase = Math.min(input.riskCapacity, input.riskTolerance);

    // BBI multiplier: 0.5 (worst biases) to 1.0 (no biases)
    const bbiMultiplier = 0.5 + (input.behavioralBias / 100) * 0.5;

    // Raw score before age adjustment
    const rawScore = constrainedBase * bbiMultiplier;

    // Final risk number after age factor
    const riskNumber = Math.round(rawScore * ageFactor);

    const cat = getCategoryFromScore(riskNumber);
    const nextBirthday = getNextBirthday(input.dob);

    return {
        riskCapacity: input.riskCapacity,
        riskTolerance: input.riskTolerance,
        behavioralBias: input.behavioralBias,
        age,
        ageFactor,
        rawScore: Math.round(rawScore * 100) / 100,
        riskNumber,
        category: cat.category,
        categoryName: cat.name,
        allocation: { equity: cat.equity, debt: cat.debt, gold: cat.gold },
        answers: input.answers,
        behavioralInsights: input.behavioralInsights,
        goalType: input.goalType,
        goalTimeframe: input.goalTimeframe,
        constrainingFactor: input.constrainingFactor,
        dob: input.dob,
        nextBirthdayRefresh: nextBirthday,
        lastCalculatedAt: new Date(),
    };
}
