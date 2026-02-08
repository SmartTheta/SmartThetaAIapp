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
    const [kycStep, setKycStep] = useState(1);

    const steps = [
        { id: 1, title: 'Mobile & PAN', desc: 'Verify identity' },
        { id: 2, title: 'Personal info', desc: 'Income & details' },
        { id: 3, title: 'Documents', desc: 'Upload & Photo' },
        { id: 4, title: 'Banking', desc: 'Bank & Nominee' },
        { id: 5, title: 'Consent', desc: 'Final review' },
    ];

    const handleNext = () => {
        if (kycStep < 5) {
            setKycStep(kycStep + 1);
        } else {
            // KYC Complete
            navigate('/dashboard/portfolio-result');
        }
    };

    const renderStep = () => {
        switch (kycStep) {
            case 1:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
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
                            <button className="w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-xl cursor-not-allowed">
                                Send OTP
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
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
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Upload size={24} />
                                </div>
                                Document Upload
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
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
                                            <option>Son</option>
                                            <option>Daughter</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-center max-w-2xl mx-auto">
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldAlert size={40} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900">Risk Disclosure</h2>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                I hereby declare that the information provided is true to the best of my knowledge. I understand that investment in securities market are subject to market risks. I have read the risk disclosure documents carefully.
                            </p>
                            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl text-left border border-slate-100">
                                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-sm font-bold text-slate-700">I agree and provide electronic consent (E-SIGN)</span>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <OnboardingLayout currentStep={1}>
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Horizontal Step Indicator */}
                <div className="flex items-center justify-between px-2">
                    {steps.map((step, idx) => (
                        <div key={step.id} className="flex flex-col items-center gap-2 group flex-1 relative">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm",
                                kycStep === step.id
                                    ? "bg-blue-600 text-white scale-110 ring-4 ring-blue-50"
                                    : kycStep > step.id
                                        ? "bg-emerald-500 text-white"
                                        : "bg-white text-slate-400 border border-slate-200"
                            )}>
                                {kycStep > step.id ? <CheckCircle2 size={18} /> : step.id}
                            </div>
                            <div className="text-center">
                                <p className={cn(
                                    "text-[10px] font-black uppercase tracking-widest",
                                    kycStep === step.id ? "text-blue-600" : "text-slate-400"
                                )}>
                                    {step.title}
                                </p>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className={cn(
                                    "absolute top-5 left-[60%] w-[80%] h-0.5 -z-10",
                                    kycStep > idx + 1 ? "bg-emerald-500" : "bg-slate-200"
                                )} />
                            )}
                        </div>
                    ))}
                </div>

                {renderStep()}

                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={() => kycStep > 1 && setKycStep(kycStep - 1)}
                        className={cn(
                            "px-8 py-4 font-bold text-slate-500 hover:text-slate-900 transition-all",
                            kycStep === 1 && "opacity-0 pointer-events-none"
                        )}
                    >
                        Go Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"
                    >
                        {kycStep === 5 ? 'Confirm & Finish' : 'Save & Continue'}
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Secure Footer */}
                <div className="flex items-center justify-center gap-2 text-slate-400">
                    <Lock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">256-bit Secure Bank Grade Encryption</span>
                </div>
            </div>
        </OnboardingLayout>
    );
};
