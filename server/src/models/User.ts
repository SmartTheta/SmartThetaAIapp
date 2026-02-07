import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    agreedToTerms: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters']
    },
    agreedToTerms: {
        type: Boolean,
        required: [true, 'Terms must be accepted'],
        validate: {
            validator: (v: boolean) => v === true,
            message: 'Terms must be accepted'
        }
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Remove password when converting to JSON
userSchema.set('toJSON', {
    transform: (doc, ret) => {
        const result = { ...ret };
        delete (result as any).password;
        return result;
    }
});

const User = model<IUser>('User', userSchema);

export default User;
