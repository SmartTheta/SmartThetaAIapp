import React, { useState } from 'react';
import {
    Mail, Phone, Lock, Hash,
    ArrowRight, Loader2, X,
    ChevronDown, CheckCircle2
} from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSignUpClick: () => void;
}

type LoginMethod = 'email' | 'phone';

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSignUpClick }) => {
    const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');
    const [isLoading, setIsLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        countryCode: '+91',
        otp: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (loginMethod === 'phone' && !otpSent) {
            // Simulate sending OTP
            await new Promise(r => setTimeout(r, 1200));
            setOtpSent(true);
            setIsLoading(false);
            return;
        }

        // Simulate final login
        await new Promise(r => setTimeout(r, 1500));
        setIsLoading(false);
        onClose();
        window.location.href = '/dashboard/risk-assessment';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/theta1.png" alt="Logo" className="h-6 w-auto" />
                            <span className="text-sm font-bold text-slate-900 tracking-tight">SmartTheta</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
                        <p className="text-slate-500 text-sm mt-1">Select your preferred login method.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="px-8 pb-8">
                    {/* Method Toggle (Radio Buttons) */}
                    <div className="grid grid-cols-2 gap-4 mb-8 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                        <label className={`cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${loginMethod === 'email' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>
                            <input
                                type="radio"
                                className="sr-only"
                                checked={loginMethod === 'email'}
                                onChange={() => { setLoginMethod('email'); setOtpSent(false); }}
                            />
                            <Mail className="w-4 h-4" />
                            <span className="text-sm font-bold">Email</span>
                        </label>
                        <label className={`cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${loginMethod === 'phone' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>
                            <input
                                type="radio"
                                className="sr-only"
                                checked={loginMethod === 'phone'}
                                onChange={() => setLoginMethod('phone')}
                            />
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-bold">Phone</span>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {loginMethod === 'email' ? (
                            <>
                                {/* Email Field */}
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none text-sm"
                                        />
                                        <Mail className="absolute right-4 top-3.5 w-5 h-5 text-slate-300" />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">Password</label>
                                        <button type="button" className="text-[11px] font-bold text-blue-600 hover:underline">Forgot?</button>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            name="password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none text-sm"
                                        />
                                        <Lock className="absolute right-4 top-3.5 w-5 h-5 text-slate-300" />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Phone Field */}
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Phone Number</label>
                                    <div className="flex gap-2">
                                        <div className="relative shrink-0">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="h-12 px-3 pr-8 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 appearance-none font-bold text-sm outline-none focus:border-blue-500"
                                            >
                                                <option value="+91">+91</option>
                                                <option value="+1">+1</option>
                                            </select>
                                            <ChevronDown className="absolute right-2 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                                        </div>
                                        <div className="relative flex-grow">
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                disabled={otpSent}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="10-digit number"
                                                className={`w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 transition-all outline-none text-sm ${otpSent ? 'opacity-50 cursor-not-allowed' : 'focus:border-blue-500 focus:bg-white'}`}
                                            />
                                            <Phone className="absolute right-4 top-3.5 w-5 h-5 text-slate-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* OTP Field (Conditional) */}
                                {otpSent && (
                                    <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                                        <div className="flex justify-between items-center px-1">
                                            <label className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">Enter OTP</label>
                                            <button
                                                type="button"
                                                onClick={() => setOtpSent(false)}
                                                className="text-[11px] font-bold text-blue-600 hover:underline"
                                            >
                                                Change Number
                                            </button>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="otp"
                                                required
                                                maxLength={6}
                                                value={formData.otp}
                                                onChange={handleChange}
                                                placeholder="000 000"
                                                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none text-sm font-bold tracking-[0.5em] text-center"
                                            />
                                            <Hash className="absolute left-4 top-3.5 w-5 h-5 text-slate-300" />
                                        </div>
                                        <p className="text-[11px] text-slate-500 mt-2 text-center">
                                            Didn't receive code? <button type="button" className="text-blue-600 font-bold hover:underline">Resend</button>
                                        </p>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full h-13 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-sm shadow-lg ${isLoading
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                    : 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0'
                                    }`}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        {loginMethod === 'phone' && !otpSent ? 'Sending OTP...' : 'Authenticating...'}
                                    </>
                                ) : (
                                    <>
                                        {loginMethod === 'phone' && !otpSent ? 'Send OTP' : 'Login Securely'}
                                        {!otpSent && <ArrowRight className="w-5 h-5" />}
                                        {otpSent && <CheckCircle2 className="w-5 h-5" />}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-8 space-y-4">
                        <p className="text-center text-[13px] text-slate-500">
                            Don't have an account?{' '}
                            <button
                                onClick={() => { onClose(); onSignUpClick(); }}
                                className="font-bold text-blue-600 hover:underline"
                            >
                                Sign Up
                            </button>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};


