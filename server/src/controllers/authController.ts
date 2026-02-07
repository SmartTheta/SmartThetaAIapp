import { Request, Response } from 'express';
import { sendOtp, verifyOtp } from '../services/twilioService';
import User from '../models/User';
import bcrypt from 'bcrypt';

const MAX_ATTEMPTS = 3;

/**
 * Check if email already exists
 */
export const checkEmailExists = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(200).json({ message: 'Email is available' });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

/**
 * Check if phone already exists
 */
export const checkPhoneExists = async (req: Request, res: Response) => {
    const { phone } = req.body;
    try {
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ message: 'Phone number already registered' });
        }
        res.status(200).json({ message: 'Phone number is available' });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

/**
 * Send OTP via Twilio
 */
export const sendVerificationOtp = async (req: Request, res: Response) => {
    const { to, channel } = req.body; // channel is 'sms' or 'email'

    if (!to || !channel) {
        return res.status(400).json({ message: 'Recipient and channel are required' });
    }

    try {
        await sendOtp(to, channel);
        res.status(200).json({ message: `OTP sent to ${to} via ${channel}` });
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to send OTP', error: error.message });
    }
};

/**
 * Verify OTP via Twilio
 */
export const verifyVerificationOtp = async (req: Request, res: Response) => {
    const { to, code } = req.body;

    if (!to || !code) {
        return res.status(400).json({ message: 'Recipient and code are required' });
    }

    try {
        const verification = await verifyOtp(to, code);

        if (verification.status === 'approved') {
            res.status(200).json({ message: 'Verification successful' });
        } else {
            res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Verification failed', error: error.message });
    }
};

/**
 * Final registration
 */
export const register = async (req: Request, res: Response) => {
    const { fullName, email, phone, password, agreedToTerms } = req.body;

    try {
        // Double check existence
        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: 'Email already exists' });

        const existingPhone = await User.findOne({ phone });
        if (existingPhone) return res.status(400).json({ message: 'Phone already registered' });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            phone,
            password: hashedPassword,
            agreedToTerms,
            isVerified: true // Assuming they passed all OTP steps before calling this
        });

        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email
            }
        });
    } catch (error: any) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};
