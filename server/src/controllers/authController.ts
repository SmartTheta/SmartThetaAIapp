import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { sendOtp, verifyOtp } from '../services/otpService';
import User from '../models/User';

// ─── Check if email exists ────────────────────────────────────────────────────

export const checkEmailExists = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        res.status(200).json({ message: 'Email is available' });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// ─── Check if phone exists ────────────────────────────────────────────────────

export const checkPhoneExists = async (req: Request, res: Response) => {
    const { phone } = req.body;
    try {
        const existing = await User.findOne({ phone });
        if (existing) {
            return res.status(400).json({ message: 'Phone number already registered' });
        }
        res.status(200).json({ message: 'Phone number is available' });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// ─── Send OTP ─────────────────────────────────────────────────────────────────
// Body: { to: string, channel: 'email' | 'sms' }

export const sendVerificationOtp = async (req: Request, res: Response) => {
    const { to, channel } = req.body;

    if (!to || !channel || !['email', 'sms'].includes(channel)) {
        return res.status(400).json({ message: 'to and channel (email | sms) are required' });
    }

    try {
        await sendOtp(to, channel as 'email' | 'sms');
        res.status(200).json({ message: `OTP sent to ${to} via ${channel}` });
    } catch (error: any) {
        console.error('[sendVerificationOtp]', error.message);
        res.status(500).json({ message: 'Failed to send OTP', error: error.message });
    }
};

// ─── Verify OTP ───────────────────────────────────────────────────────────────
// Body: { to: string, channel: 'email' | 'sms', code: string }

export const verifyVerificationOtp = async (req: Request, res: Response) => {
    const { to, channel, code } = req.body;

    if (!to || !channel || !code) {
        return res.status(400).json({ message: 'to, channel and code are required' });
    }

    try {
        const result = await verifyOtp(to, channel as 'email' | 'sms', code);

        if (result.status === 'approved') {
            return res.status(200).json({ message: 'OTP verified successfully' });
        }

        const messages: Record<string, string> = {
            expired:      'OTP has expired. Please request a new one.',
            invalid:      'Invalid OTP. Please try again.',
            max_attempts: 'Too many failed attempts. Please request a new OTP.',
        };

        res.status(400).json({ message: messages[result.status] || 'Verification failed' });
    } catch (error: any) {
        console.error('[verifyVerificationOtp]', error.message);
        res.status(500).json({ message: 'Verification failed', error: error.message });
    }
};

// ─── Register ─────────────────────────────────────────────────────────────────
// Body: { fullName, email, phone, password, agreedToTerms }

export const register = async (req: Request, res: Response) => {
    const { fullName, dob, email, phone, password, agreedToTerms } = req.body;

    if (!fullName || !dob || !email || !phone || !password || !agreedToTerms) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: 'Email already registered' });

        const existingPhone = await User.findOne({ phone });
        if (existingPhone) return res.status(400).json({ message: 'Phone already registered' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            fullName,
            dob: new Date(dob),
            email,
            phone,
            password: hashedPassword,
            agreedToTerms,
            isVerified: true,
        });

        await user.save();

        res.status(201).json({
            message: 'Registration successful',
            user: { id: user._id, fullName: user.fullName, email: user.email },
        });
    } catch (error: any) {
        console.error('[register]', error.message);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};
