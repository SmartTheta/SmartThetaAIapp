import mongoose, { Schema, Document } from 'mongoose';

export interface IIndexData extends Document {
    date: Date;
    profitLoss: number;
    timestamp: Date;
}

const IndexDataSchema: Schema = new Schema({
    date: {
        type: Date,
        required: true,
        index: true
    },
    profitLoss: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    timestamps: true
});

// Create compound index for efficient querying
IndexDataSchema.index({ date: -1, timestamp: -1 });

export const IndexData = mongoose.model<IIndexData>('IndexData', IndexDataSchema);
