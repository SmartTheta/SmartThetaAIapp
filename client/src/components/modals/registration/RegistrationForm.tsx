import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { labelStyle, inputStyle, primaryButtonStyle, checklistItemStyle } from './RegistrationData';

interface RegistrationFormProps {
    formData: any;
    setFormData: (data: any) => void;
    errors: Record<string, string>;
    validate: (name: string, value: any) => void;
    onLoginClick?: () => void;
}

const PasswordStrengthMeter = ({ password }: { password: string }) => {
    const requirements = [
        { label: "Min 8 characters", test: (p: string) => p.length >= 8 },
        { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
        { label: "One lowercase letter", test: (p: string) => /[a-z]/.test(p) },
        { label: "One number", test: (p: string) => /[0-9]/.test(p) },
        { label: "One special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
    ];

    const metCount = requirements.filter(req => req.test(password)).length;
    let color = "bg-slate-200";
    let statusText = "Very Weak";
    let statusColor = "text-red-500";

    if (metCount >= 5) { color = "bg-green-500"; statusText = "Strong"; statusColor = "text-green-600"; }
    else if (metCount >= 3) { color = "bg-yellow-500"; statusText = "Good"; statusColor = "text-yellow-600"; }
    else if (metCount >= 1) { color = "bg-red-400"; statusText = "Weak"; statusColor = "text-red-400"; }

    return (
        <div className="space-y-2 pt-1 border-t border-slate-50 mt-1">
            <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Strength</span>
                <span className={`text-[11px] font-bold ${statusColor}`}>{statusText}</span>
            </div>

            <div className="h-1 w-full bg-slate-100 rounded-full flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`h-full flex-1 rounded-full transition-all duration-500 ${i <= metCount ? color : 'bg-slate-200'}`} />
                ))}
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 px-0.5">
                {requirements.map((req, idx) => {
                    const isMet = req.test(password);
                    return (
                        <div key={idx} className={checklistItemStyle}>
                            <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${isMet ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
                                {isMet && <div className="w-1 h-1 bg-white rounded-full" />}
                            </div>
                            <span className={`text-[10px] transition-colors ${isMet ? 'text-slate-800' : 'text-slate-400'}`}>{req.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
    formData, setFormData, errors, validate
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [phoneOtpSent, setPhoneOtpSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [emailOtp, setEmailOtp] = useState('');
    const [phoneOtp, setPhoneOtp] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? (checked as any) : value;
        setFormData({ ...formData, [name]: val });
    };

    const isFormValid = formData.fullName && emailVerified && phoneVerified && formData.terms && !errors.confirmPassword && formData.password.length >= 8;

    return (
        <div className="space-y-3 text-left">
            <div>
                <label className={labelStyle}>Full Name</label>
                <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={e => validate('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className={inputStyle(!!errors.fullName)}
                />
            </div>

            <div>
                <label className={labelStyle}>Email Address</label>
                <div className="flex gap-1.5">
                    <input
                        name="email"
                        value={formData.email}
                        onChange={e => { handleChange(e); setEmailVerified(false); }}
                        onBlur={e => validate('email', e.target.value)}
                        placeholder="you@example.com"
                        className={`flex-grow ${inputStyle(!!errors.email)}`}
                    />
                    {!emailVerified && (
                        <button
                            onClick={() => setEmailOtpSent(true)}
                            className="h-12 px-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-[10px] uppercase hover:bg-blue-100 transition-colors shrink-0"
                        >
                            {emailOtpSent ? 'Resend' : 'Verify'}
                        </button>
                    )}
                </div>
                {emailOtpSent && !emailVerified && (
                    <div className="mt-1.5 flex gap-1.5 animate-in slide-in-from-top-1">
                        <input
                            placeholder="OTP"
                            value={emailOtp}
                            onChange={e => setEmailOtp(e.target.value)}
                            className="w-16 h-10 px-2 border border-blue-100 rounded-xl text-center text-xs font-bold outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={() => { if (emailOtp.length >= 4) setEmailVerified(true); }}
                            className="flex-grow h-10 bg-blue-600 text-white rounded-xl font-bold text-[10px] uppercase shadow-lg shadow-blue-100"
                        >
                            Confirm Email
                        </button>
                    </div>
                )}
            </div>

            <div>
                <label className={labelStyle}>Phone Number</label>
                <div className="flex gap-1.5">
                    <div className="relative shrink-0">
                        <select className="h-12 border border-slate-200 bg-slate-50 rounded-xl px-2 pr-6 text-xs font-bold appearance-none outline-none focus:border-blue-500 hover:bg-slate-100 transition-colors">
                            <option>+91</option>
                        </select>
                        <div className="absolute right-1.5 top-4.5 pointer-events-none">
                            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={e => { handleChange(e); setPhoneVerified(false); }}
                        onBlur={e => validate('phone', e.target.value)}
                        placeholder="10 digits"
                        className={`flex-grow ${inputStyle(!!errors.phone)}`}
                    />
                    {!phoneVerified && (
                        <button
                            onClick={() => setPhoneOtpSent(true)}
                            className="h-12 px-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-[10px] uppercase hover:bg-blue-100 transition-colors shrink-0"
                        >
                            {phoneOtpSent ? 'Resend' : 'Verify'}
                        </button>
                    )}
                </div>
                {phoneOtpSent && !phoneVerified && (
                    <div className="mt-1.5 flex gap-1.5 animate-in slide-in-from-top-1">
                        <input
                            placeholder="OTP"
                            value={phoneOtp}
                            onChange={e => setPhoneOtp(e.target.value)}
                            className="w-16 h-10 px-2 border border-blue-100 rounded-xl text-center text-xs font-bold outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={() => { if (phoneOtp.length >= 4) setPhoneVerified(true); }}
                            className="flex-grow h-10 bg-blue-600 text-white rounded-xl font-bold text-[10px] uppercase shadow-lg shadow-blue-100"
                        >
                            Confirm Phone
                        </button>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative">
                    <label className={labelStyle}>Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create password"
                        className={inputStyle(false)}
                    />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>
                <div className="relative">
                    <label className={labelStyle}>Confirm Password</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={e => validate('confirmPassword', e.target.value)}
                        placeholder="Re-enter password"
                        className={inputStyle(!!errors.confirmPassword)}
                    />
                    <button
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-9 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>
            </div>

            <PasswordStrengthMeter password={formData.password} />

            <div className="flex items-start gap-2 cursor-pointer pt-1 group">
                <input
                    type="checkbox"
                    name="terms"
                    id="terms-check"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-3.5 h-3.5 mt-0.5 accent-blue-600"
                />
                <label htmlFor="terms-check" className="text-[11px] font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                    Agree to <button className="text-blue-600 font-bold hover:underline">Terms</button> & <button className="text-blue-600 font-bold hover:underline">Privacy Policy</button>
                </label>
            </div>

            <button
                onClick={() => {
                    if (isFormValid) {
                        window.location.href = '/dashboard';
                    }
                }}
                disabled={!isFormValid}
                className={primaryButtonStyle}
            >
                Create Account
            </button>
        </div>
    );
};
