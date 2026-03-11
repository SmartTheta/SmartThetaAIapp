import nodemailer from 'nodemailer';
import axios from 'axios';
import OtpStore from '../models/OtpStore';

const OTP_EXPIRY_MINUTES = 10;
const MAX_VERIFY_ATTEMPTS = 5;

// ─── OTP Generator ───────────────────────────────────────────────────────────

function generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// ─── Gmail Transporter ───────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Google App Password (not your login password)
    },
});

// ─── Send Email OTP ──────────────────────────────────────────────────────────

async function sendEmailOtp(email: string, otp: string): Promise<void> {
    await transporter.sendMail({
        from: `"SmartTheta" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `${otp} is your SmartTheta verification code`,
        html: `
            <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;border:1px solid #e2e8f0;border-radius:12px;">
                <h2 style="color:#1e293b;margin-bottom:8px;">Your verification code</h2>
                <p style="color:#64748b;margin-bottom:24px;">Use the code below to verify your email address. It expires in ${OTP_EXPIRY_MINUTES} minutes.</p>
                <div style="background:#f1f5f9;border-radius:8px;padding:24px;text-align:center;letter-spacing:12px;font-size:32px;font-weight:700;color:#1e293b;">
                    ${otp}
                </div>
                <p style="color:#94a3b8;font-size:12px;margin-top:24px;">If you did not request this, please ignore this email.</p>
            </div>
        `,
    });
}

// ─── Send SMS OTP via Fast2SMS ────────────────────────────────────────────────

async function sendSmsOtp(phone: string, otp: string): Promise<void> {
    // In development, skip SMS and log OTP to terminal
    if (process.env.NODE_ENV !== 'production') {
        console.log(`\n[OTP DEV] SMS OTP for ${phone}: \x1b[33m${otp}\x1b[0m\n`);
        return;
    }

    // Fast2SMS expects the number without country code (+91)
    const number = phone.replace(/^\+91/, '').replace(/\D/g, '');

    const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
        params: {
            authorization: process.env.FAST2SMS_API_KEY,
            variables_values: otp,
            route: 'otp',
            numbers: number,
        },
        headers: {
            'cache-control': 'no-cache',
        },
        timeout: 10000,
    });

    if (!response.data?.return) {
        throw new Error(`Fast2SMS error: ${JSON.stringify(response.data)}`);
    }
}

// ─── Public: Send OTP ─────────────────────────────────────────────────────────

export async function sendOtp(to: string, channel: 'email' | 'sms'): Promise<void> {
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

    // Upsert: replace any existing OTP for this (to, channel) pair
    await OtpStore.findOneAndUpdate(
        { to, channel },
        { otp, expiresAt, attempts: 0 },
        { upsert: true, new: true }
    );

    if (channel === 'email') {
        await sendEmailOtp(to, otp);
    } else {
        await sendSmsOtp(to, otp);
    }

    console.log(`[OTP] Sent ${channel} OTP to ${to}`);
}

// ─── Public: Verify OTP ───────────────────────────────────────────────────────

export async function verifyOtp(
    to: string,
    channel: 'email' | 'sms',
    code: string
): Promise<{ status: 'approved' | 'expired' | 'invalid' | 'max_attempts' }> {
    const record = await OtpStore.findOne({ to, channel });

    if (!record) {
        return { status: 'invalid' };
    }

    if (new Date() > record.expiresAt) {
        await OtpStore.deleteOne({ _id: record._id });
        return { status: 'expired' };
    }

    if (record.attempts >= MAX_VERIFY_ATTEMPTS) {
        return { status: 'max_attempts' };
    }

    if (record.otp !== code.trim()) {
        await OtpStore.updateOne({ _id: record._id }, { $inc: { attempts: 1 } });
        return { status: 'invalid' };
    }

    // Correct — delete the record so it can't be reused
    await OtpStore.deleteOne({ _id: record._id });
    return { status: 'approved' };
}
