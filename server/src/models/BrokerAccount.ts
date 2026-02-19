import { Schema, model, Document, Types } from 'mongoose';

export interface IBrokerAccount extends Document {
    userId: Types.ObjectId;         // Reference to User
    broker: string;                 // 'zerodha'
    apiKey: string;
    apiSecret: string;
    zerodhaUserId: string;          // Zerodha user_id (e.g. AB1234)
    password: string;               // Zerodha login password (encrypted ideally)
    totpKey: string;                // TOTP secret key for 2FA
    accessToken: string | null;     // Current session access token
    isLoggedIn: boolean;
    lastLoginTime: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const brokerAccountSchema = new Schema<IBrokerAccount>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true   // one broker account per user for now
    },
    broker: {
        type: String,
        default: 'zerodha',
        enum: ['zerodha']
    },
    apiKey: {
        type: String,
        required: true,
        trim: true
    },
    apiSecret: {
        type: String,
        required: true,
        trim: true
    },
    zerodhaUserId: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    totpKey: {
        type: String,
        required: true,
        trim: true
    },
    accessToken: {
        type: String,
        default: null
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    lastLoginTime: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

// Hide sensitive fields from JSON output
brokerAccountSchema.set('toJSON', {
    transform: (doc, ret) => {
        const result = { ...ret };
        delete (result as any).password;
        delete (result as any).totpKey;
        delete (result as any).apiSecret;
        delete (result as any).accessToken;
        return result;
    }
});

const BrokerAccount = model<IBrokerAccount>('BrokerAccount', brokerAccountSchema);
export default BrokerAccount;
