import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import {
    Phone,
    CreditCard,
    User,
    Upload,
    Camera,
    Building2,
    ShieldAlert,
    CheckCircle2,
    ChevronRight,
    Lock,
    ShieldCheck
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export const KYCOnboardingPage = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // KYC Complete
        navigate('/dashboard/portfolio-result');
    };

    return (
        <OnboardingLayout currentStep={1}>
            <div className="max-w-3xl mx-auto space-y-12 pb-20">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-black text-slate-900">Complete Your KYC</h1>
                    <p className="text-slate-500 font-medium">Please provide the following details to verify your identity and secure your account.</p>
                </div>

                {/* Section 1: Mobile & PAN */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Phone size={24} />
                        </div>
                        Verify Mobile & PAN
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+91</span>
                                <input
                                    type="tel"
                                    placeholder="Enter 10 digit mobile"
                                    className="w-full pl-14 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">PAN Number</label>
                            <div className="relative">
                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="ABCDE1234F"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all uppercase"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        Verify Identity
                    </button>
                </div>

                {/* Section 2: Personal & Income */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                            <User size={24} />
                        </div>
                        Personal & Income Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Annual Income</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Below 1 Lakh</option>
                                <option>1-5 Lakhs</option>
                                <option>5-10 Lakhs</option>
                                <option>10-25 Lakhs</option>
                                <option>Above 25 Lakhs</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Occupation</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Salaried</option>
                                <option>Business</option>
                                <option>Professional</option>
                                <option>Student</option>
                                <option>Retired</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Experience</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
                                <option>No past experience</option>
                                <option>1-3 Years</option>
                                <option>3-5 Years</option>
                                <option>5+ Years</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Section 3: Documents */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                            <Upload size={24} />
                        </div>
                        Document Upload
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600">
                                <CreditCard size={24} />
                            </div>
                            <p className="text-xs font-bold text-slate-700">PAN Card</p>
                            <p className="text-[10px] text-slate-400">Front view image</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600">
                                <ShieldCheck size={24} />
                            </div>
                            <p className="text-xs font-bold text-slate-700">Aadhaar Card</p>
                            <p className="text-[10px] text-slate-400">Front & Back</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600">
                                <Camera size={24} />
                            </div>
                            <p className="text-xs font-bold text-slate-700">Live Selfie</p>
                            <p className="text-[10px] text-slate-400">Face clearly visible</p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Banking */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                            <Building2 size={24} />
                        </div>
                        Bank & Nominee
                    </h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Account Number</label>
                                <input
                                    type="password"
                                    placeholder="Primary bank account 1234..."
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">IFSC Code</label>
                                <input
                                    type="text"
                                    placeholder="HDFC0001234"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all uppercase"
                                />
                            </div>
                        </div>
                        <div className="pt-4 border-t border-slate-100">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Nominee Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nominee Full Name"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Relationship (Spouse, Mother, etc)</option>
                                    <option>Spouse</option>
                                    <option>Mother</option>
                                    <option>Father</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Consent */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-center">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                        <ShieldAlert size={40} />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-slate-900">Risk Disclosure</h2>
                        <p className="text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
                            I hereby declare that the information provided is true to the best of my knowledge. I understand that investment in securities market are subject to market risks.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto">
                        <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm font-bold text-slate-700">I agree and provide electronic consent</span>
                    </div>

                    <div className="pt-8 border-t border-slate-100">
                        <button
                            onClick={handleSubmit}
                            className="w-full px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            Confirm & Complete KYC
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Secure Footer */}
                <div className="flex flex-col items-center gap-4 text-slate-400 pb-10">
                    <div className="flex items-center gap-2">
                        <Lock size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">256-bit Secure Bank Grade Encryption</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <ShieldCheck size={32} className="opacity-20" />
                        <div className="h-4 w-px bg-slate-200" />
                        <Building2 size={32} className="opacity-20" />
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
};
