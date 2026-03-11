import React, { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { labelStyle, inputStyle, primaryButtonStyle, checklistItemStyle } from './RegistrationData';

const API = 'http://localhost:5000/api/auth';

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
    const [emailOtpLoading, setEmailOtpLoading] = useState(false);
    const [phoneOtpLoading, setPhoneOtpLoading] = useState(false);
    const [emailOtpError, setEmailOtpError] = useState('');
    const [phoneOtpError, setPhoneOtpError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? (checked as any) : value;
        setFormData({ ...formData, [name]: val });
    };

    const handleSendEmailOtp = async () => {
        if (!formData.email) return;
        setEmailOtpLoading(true);
        setEmailOtpError('');
        try {
            await axios.post(`${API}/send-otp`, { to: formData.email, channel: 'email' });
            setEmailOtpSent(true);
        } catch (err: any) {
            setEmailOtpError(err.response?.data?.message || 'Failed to send OTP');
        } finally {
            setEmailOtpLoading(false);
        }
    };

    const handleVerifyEmailOtp = async () => {
        if (!emailOtp) return;
        setEmailOtpLoading(true);
        setEmailOtpError('');
        try {
            await axios.post(`${API}/verify-otp`, { to: formData.email, channel: 'email', code: emailOtp });
            setEmailVerified(true);
        } catch (err: any) {
            setEmailOtpError(err.response?.data?.message || 'Invalid OTP');
        } finally {
            setEmailOtpLoading(false);
        }
    };

    const handleSendPhoneOtp = async () => {
        if (!formData.phone) return;
        setPhoneOtpLoading(true);
        setPhoneOtpError('');
        try {
            await axios.post(`${API}/send-otp`, { to: `+91${formData.phone}`, channel: 'sms' });
            setPhoneOtpSent(true);
        } catch (err: any) {
            setPhoneOtpError(err.response?.data?.message || 'Failed to send OTP');
        } finally {
            setPhoneOtpLoading(false);
        }
    };

    const handleVerifyPhoneOtp = async () => {
        if (!phoneOtp) return;
        setPhoneOtpLoading(true);
        setPhoneOtpError('');
        try {
            await axios.post(`${API}/verify-otp`, { to: `+91${formData.phone}`, channel: 'sms', code: phoneOtp });
            setPhoneVerified(true);
        } catch (err: any) {
            setPhoneOtpError(err.response?.data?.message || 'Invalid OTP');
        } finally {
            setPhoneOtpLoading(false);
        }
    };

    const [registerLoading, setRegisterLoading] = useState(false);
    const [registerError, setRegisterError] = useState('');

    const isFormValid = formData.fullName && formData.dob && emailVerified && phoneVerified && formData.terms && !errors.confirmPassword && formData.password.length >= 8;

    const handleRegister = async () => {
        if (!isFormValid) return;
        setRegisterLoading(true);
        setRegisterError('');
        try {
            const res = await axios.post(`${API}/register`, {
                fullName: formData.fullName,
                dob: formData.dob,
                email: formData.email,
                phone: `+91${formData.phone}`,
                password: formData.password,
                agreedToTerms: formData.terms,
            });
            // Save user info for risk calculator
            localStorage.setItem('userId', res.data.user.id);
            localStorage.setItem('userDob', formData.dob);
            localStorage.setItem('userName', formData.fullName);
            window.location.href = '/dashboard/risk-assessment';
        } catch (err: any) {
            setRegisterError(err.response?.data?.message || 'Registration failed. Please try again.');
            setRegisterLoading(false);
        }
    };

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
                <label className={labelStyle}>Date of Birth</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    onBlur={e => validate('dob', e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                    className={inputStyle(!!errors.dob)}
                />
                <p className="text-amber-600 text-[10px] mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                    Your DOB will be used to calculate your risk score. Please enter the correct date.
                </p>
                {errors.dob && <p className="text-red-500 text-[10px] mt-1">{errors.dob}</p>}
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
                            onClick={handleSendEmailOtp}
                            disabled={emailOtpLoading || !formData.email}
                            className="h-12 px-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-[10px] uppercase hover:bg-blue-100 transition-colors shrink-0 disabled:opacity-50"
                        >
                            {emailOtpLoading ? '...' : emailOtpSent ? 'Resend' : 'Verify'}
                        </button>
                    )}
                </div>
                {emailOtpError && <p className="text-red-500 text-[10px] mt-1">{emailOtpError}</p>}
                {emailOtpSent && !emailVerified && (
                    <div className="mt-1.5 flex gap-1.5 animate-in slide-in-from-top-1">
                        <input
                            placeholder="OTP"
                            value={emailOtp}
                            onChange={e => setEmailOtp(e.target.value)}
                            className="w-16 h-10 px-2 border border-blue-100 rounded-xl text-center text-xs font-bold outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={handleVerifyEmailOtp}
                            disabled={emailOtpLoading || emailOtp.length < 4}
                            className="flex-grow h-10 bg-blue-600 text-white rounded-xl font-bold text-[10px] uppercase shadow-lg shadow-blue-100 disabled:opacity-50"
                        >
                            {emailOtpLoading ? '...' : 'Confirm Email'}
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
                            onClick={handleSendPhoneOtp}
                            disabled={phoneOtpLoading || !formData.phone}
                            className="h-12 px-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-[10px] uppercase hover:bg-blue-100 transition-colors shrink-0 disabled:opacity-50"
                        >
                            {phoneOtpLoading ? '...' : phoneOtpSent ? 'Resend' : 'Verify'}
                        </button>
                    )}
                </div>
                {phoneOtpError && <p className="text-red-500 text-[10px] mt-1">{phoneOtpError}</p>}
                {phoneOtpSent && !phoneVerified && (
                    <div className="mt-1.5 flex gap-1.5 animate-in slide-in-from-top-1">
                        <input
                            placeholder="OTP"
                            value={phoneOtp}
                            onChange={e => setPhoneOtp(e.target.value)}
                            className="w-16 h-10 px-2 border border-blue-100 rounded-xl text-center text-xs font-bold outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={handleVerifyPhoneOtp}
                            disabled={phoneOtpLoading || phoneOtp.length < 4}
                            className="flex-grow h-10 bg-blue-600 text-white rounded-xl font-bold text-[10px] uppercase shadow-lg shadow-blue-100 disabled:opacity-50"
                        >
                            {phoneOtpLoading ? '...' : 'Confirm Phone'}
                        </button>
                    </div>
                )}
                {phoneVerified && <p className="text-green-600 text-[10px] mt-1">Phone verified</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

            {registerError && <p className="text-red-500 text-[11px] text-center">{registerError}</p>}
            <button
                onClick={handleRegister}
                disabled={!isFormValid || registerLoading}
                className={primaryButtonStyle}
            >
                {registerLoading ? 'Creating Account...' : 'Create Account'}
            </button>
        </div>
    );
};
