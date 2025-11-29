import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyClosing extends Document {
    date: Date;
    closeValue: number;
    createdAt: Date;
}

const DailyClosingSchema: Schema = new Schema({
    date: {
        type: Date,
        required: true,
        unique: true, // One entry per day
        index: true
    },
    closeValue: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export const DailyClosing = mongoose.model<IDailyClosing>('DailyClosing', DailyClosingSchema);
