import { Schema, model, Document } from 'mongoose';

export interface IRiskProfile extends Document {
    userId: Schema.Types.ObjectId;
    riskCapacity: number;
    riskTolerance: number;
    behavioralBias: number;
    age: number;
    ageFactor: number;
    rawScore: number;
    riskNumber: number;
    category: number;
    categoryName: string;
    adjustedRiskNumber: number | null;
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
    allocation: {
        equity: string;
        debt: string;
        gold: string;
    };
    constrainingFactor: string;
    lastCalculatedAt: Date;
    dob: Date;
    nextBirthdayRefresh: Date;
    createdAt: Date;
    updatedAt: Date;
}

const riskProfileSchema = new Schema<IRiskProfile>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    riskCapacity: { type: Number, required: true },
    riskTolerance: { type: Number, required: true },
    behavioralBias: { type: Number, required: true },
    age: { type: Number, required: true },
    ageFactor: { type: Number, required: true },
    rawScore: { type: Number, required: true },
    riskNumber: { type: Number, required: true },
    category: { type: Number, required: true, min: 1, max: 10 },
    categoryName: { type: String, required: true },
    adjustedRiskNumber: { type: Number, default: null },
    answers: { type: Schema.Types.Mixed, required: true },
    behavioralInsights: {
        lossAversion: String,
        regretSensitivity: String,
        anchoring: String,
        overconfidence: String,
        herding: String,
    },
    goalType: String,
    goalTimeframe: String,
    allocation: {
        equity: String,
        debt: String,
        gold: String,
    },
    constrainingFactor: String,
    lastCalculatedAt: { type: Date, default: Date.now },
    dob: { type: Date, required: true },
    nextBirthdayRefresh: { type: Date },
}, {
    timestamps: true,
});

const RiskProfile = model<IRiskProfile>('RiskProfile', riskProfileSchema);

export default RiskProfile;
