import { Schema, model, Document } from 'mongoose';

export interface IOtpStore extends Document {
    to: string;           // email address or phone number
    channel: 'email' | 'sms';
    otp: string;          // plain OTP (short-lived, not sensitive enough to hash)
    expiresAt: Date;
    attempts: number;
}

const otpStoreSchema = new Schema<IOtpStore>({
    to: {
        type: String,
        required: true,
        index: true,
    },
    channel: {
        type: String,
        enum: ['email', 'sms'],
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
        // MongoDB TTL index — auto-deletes expired documents
        index: { expires: 0 },
    },
    attempts: {
        type: Number,
        default: 0,
    },
});

// Compound index so each (to + channel) pair has one active OTP at a time
otpStoreSchema.index({ to: 1, channel: 1 });

const OtpStore = model<IOtpStore>('OtpStore', otpStoreSchema);
export default OtpStore;
