import React, { useState } from 'react';
import {
    CreditCard,
    User,
    Upload,
    Camera,
    ShieldAlert,
    ChevronRight,
    Lock,
    ShieldCheck,
    AlertCircle,
    FileText,
    Wallet,
    Building2
} from 'lucide-react';

interface KYCComponentProps {
    onComplete: () => void;
}

export const KYCComponent: React.FC<KYCComponentProps> = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        mobile: '',
        pan: '',
        income: '',
        occupation: '',
        experience: '',
        consent: false
    });

    const handleSubmit = () => {
        if (formData.consent) {
            onComplete();
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                    <Lock size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Secure KYC Process</span>
                </div>
                <h1 className="text-4xl font-black text-slate-900">Complete Your Verification</h1>
                <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                    As per SEBI regulations, we need to verify your identity and assess your investor profile before you can start investing.
                </p>
            </div>

            {/* Section 1: Identity Verification */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="p-3 bg-blue-50 rounded-xl">
                        <ShieldCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">Identity Verification</h2>
                        <p className="text-sm text-slate-600">Verify your mobile & PAN</p>
                    </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                        <p className="font-bold text-amber-900">SEBI Requirement</p>
                        <p className="text-amber-700">PAN is mandatory for all securities market transactions as per SEBI guidelines.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+91</span>
                            <input
                                type="tel"
                                placeholder="Enter 10 digit mobile"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">We'll send an OTP to verify this number</p>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">PAN Number</label>
                        <div className="relative">
                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="ABCDE1234F"
                                value={formData.pan}
                                onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all uppercase text-lg"
                                maxLength={10}
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Format: ABCDE1234F (5 letters, 4 digits, 1 letter)</p>
                    </div>
                </div>
            </div>

            {/* Section 2: Investor Classification */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="p-3 bg-indigo-50 rounded-xl">
                        <User className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">Investor Classification</h2>
                        <p className="text-sm text-slate-600">Income & experience details</p>
                    </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                        <p className="font-bold text-blue-900">Investor Classification</p>
                        <p className="text-blue-700">This helps us determine suitable investment products as per regulatory guidelines.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Annual Income</label>
                        <select
                            value={formData.income}
                            onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                            className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        >
                            <option value="">Select income range</option>
                            <option value="below1">Below ₹1 Lakh</option>
                            <option value="1-5">₹1-5 Lakhs</option>
                            <option value="5-10">₹5-10 Lakhs</option>
                            <option value="10-25">₹10-25 Lakhs</option>
                            <option value="above25">Above ₹25 Lakhs</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Occupation</label>
                            <select
                                value={formData.occupation}
                                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                                className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select occupation</option>
                                <option value="salaried">Salaried</option>
                                <option value="business">Business</option>
                                <option value="professional">Professional</option>
                                <option value="student">Student</option>
                                <option value="retired">Retired</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Investment Experience</label>
                            <select
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select experience</option>
                                <option value="none">No past experience</option>
                                <option value="1-3">1-3 Years</option>
                                <option value="3-5">3-5 Years</option>
                                <option value="5+">5+ Years</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Document Upload */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="p-3 bg-emerald-50 rounded-xl">
                        <Upload className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">Document Upload</h2>
                        <p className="text-sm text-slate-600">KYC documents & selfie</p>
                    </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                        <p className="font-bold text-purple-900">Document Requirements</p>
                        <p className="text-purple-700">Upload clear, readable images. Accepted formats: JPG, PNG (Max 5MB each)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-3 p-8 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all">
                            <CreditCard size={32} />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-slate-700">PAN Card</p>
                            <p className="text-xs text-slate-400 mt-1">Front view image</p>
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all">
                            Upload
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-3 p-8 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all">
                            <ShieldCheck size={32} />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-slate-700">Aadhaar Card</p>
                            <p className="text-xs text-slate-400 mt-1">Front & Back</p>
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all">
                            Upload
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-3 p-8 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all">
                            <Camera size={32} />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-slate-700">Live Selfie</p>
                            <p className="text-xs text-slate-400 mt-1">Face clearly visible</p>
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all">
                            Capture
                        </button>
                    </div>
                </div>
            </div>

            {/* Section 4: Risk Disclosure */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="p-3 bg-rose-50 rounded-xl">
                        <FileText className="w-8 h-8 text-rose-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">Risk Disclosure</h2>
                        <p className="text-sm text-slate-600">Regulatory consent</p>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 max-h-96 overflow-y-auto">
                    <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                        <p className="font-bold text-slate-900">SEBI Risk Disclosure:</p>
                        <p>• Investment in securities market are subject to market risks. Read all the related documents carefully before investing.</p>
                        <p>• Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs.</p>
                        <p>• The value of investments may go down as well as up and you may not get back the amount originally invested.</p>

                        <p className="font-bold text-slate-900 mt-4">Declaration:</p>
                        <p>I hereby declare that:</p>
                        <p>• The information provided is true and correct to the best of my knowledge.</p>
                        <p>• I understand the risks associated with securities market investments.</p>
                        <p>• I have read and understood the terms and conditions.</p>
                        <p>• I authorize SmartTheta to process my KYC information as per regulatory requirements.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                    <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-6 h-6 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <div className="flex-1">
                        <p className="font-bold text-slate-900 mb-1">I agree and provide electronic consent</p>
                        <p className="text-sm text-slate-600">
                            By checking this box, I confirm that I have read, understood, and agree to all the terms, conditions, and risk disclosures mentioned above.
                        </p>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                <button
                    onClick={handleSubmit}
                    disabled={!formData.consent}
                    className="w-full px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:shadow-none"
                >
                    Complete KYC & Continue
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Security Footer */}
            <div className="flex flex-col items-center gap-4 text-slate-400 pt-8">
                <div className="flex items-center gap-2">
                    <Lock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">256-bit Bank Grade Encryption</span>
                </div>
                <div className="flex items-center gap-6">
                    <ShieldCheck size={32} className="opacity-20" />
                    <div className="h-4 w-px bg-slate-200" />
                    <Building2 size={32} className="opacity-20" />
                    <div className="h-4 w-px bg-slate-200" />
                    <Wallet size={32} className="opacity-20" />
                </div>
                <p className="text-xs text-center text-slate-400 max-w-md">
                    Your data is encrypted and stored securely. We comply with all SEBI and RBI regulations.
                </p>
            </div>
        </div>
    );
};
