import React, { useState } from 'react';
import { X } from 'lucide-react';

// Import Modular Components
import { RegistrationForm } from './registration/RegistrationForm';
import { LanguageSelection } from './registration/LanguageSelection';
import { RiskQuestionnaire } from './registration/RiskQuestionnaire';
import { PortfolioResults } from './registration/PortfolioResults';
import { AIAnalysisComplete } from './registration/AIAnalysisComplete';
import { riskSections, TierData } from './registration/RegistrationData';

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginClick?: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onLoginClick }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', password: '', confirmPassword: '', terms: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [selectedLangId, setSelectedLangId] = useState('en');
    const [riskAnswers, setRiskAnswers] = useState<Record<string, number>>({});
    const [riskStep, setRiskStep] = useState(0);
    const [userTier, setUserTier] = useState<TierData | null>(null);

    if (!isOpen) return null;

    const validate = (n: string, v: any) => {
        let e = '';
        if (n === 'fullName' && !v) e = 'Required';
        if (n === 'email' && !/\S+@\S+\.\S+/.test(v)) e = 'Invalid email';
        if (n === 'phone' && !/^\d{10}$/.test(v)) e = '10 digits';
        if (n === 'password' && v.length < 8) e = 'Min 8 chars';
        if (n === 'confirmPassword' && v !== formData.password) e = 'Mismatch';
        setErrors(prev => ({ ...prev, [n]: e }));
    };

    const handleNext = () => {
        if (step === 1) {
            // Simplified for now: Close modal and move to assessment page
            onClose();
            window.location.href = '/dashboard/risk-assessment';
        } else if (step === 3) {
            const allQs = riskSections.flatMap(s => s.questions);
            if (riskStep < allQs.length - 1) {
                setRiskStep(s => s + 1);
            } else {
                setStep(4);
            }
        } else {
            setStep(s => s + 1);
        }
    };

    const handleBack = () => {
        if (step === 3 && riskStep > 0) {
            setRiskStep(s => s - 1);
        } else {
            setStep(s => s - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />

            <div className={`relative w-full ${step === 5 ? 'max-w-6xl' : step === 4 ? 'max-w-5xl' : step === 3 ? 'max-w-3xl' : 'max-w-[460px]'} bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col transition-all duration-300`}>

                {/* Header */}
                {step < 4 && step !== 5 && (
                    <div className="px-8 pt-8 pb-4 flex justify-between items-start text-left shrink-0">
                        <div className="space-y-0.5">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img src="/theta1.png" className="w-full h-full object-contain" alt="ST" />
                                </div>
                                <span className="text-[14px] font-bold text-slate-900">SmartTheta</span>
                            </div>
                            <h2 className="text-[28px] font-bold text-slate-900 leading-tight">
                                {step === 1 ? 'Create Account' : step === 2 ? 'Select Language' : 'Investor Profile'}
                            </h2>
                            <p className="text-[13px] text-slate-500 font-medium tracking-tight">
                                {step === 1 ? 'Start your AI-powered investment journey.' : step === 2 ? 'Customize your experience.' : 'Analyze your risk tolerance.'}
                            </p>
                        </div>
                        <button onClick={onClose} className="p-1 -mr-1 text-slate-400 hover:text-slate-600 transition-colors">
                            <X size={22} />
                        </button>
                    </div>
                )}

                {/* Content Area */}
                <div className={`px-8 py-4 ${step === 4 || step === 5 ? 'overflow-y-auto custom-scrollbar' : 'overflow-y-auto custom-scrollbar'} flex-grow ${step === 4 || step === 5 ? 'max-h-[80vh]' : 'max-h-[70vh]'}`}>
                    {step === 1 && (
                        <RegistrationForm
                            formData={formData}
                            setFormData={setFormData}
                            errors={errors}
                            validate={validate}
                        />
                    )}

                    {step === 2 && (
                        <LanguageSelection
                            selectedLangId={selectedLangId}
                            onSelect={setSelectedLangId}
                            onNext={handleNext}
                        />
                    )}

                    {step === 3 && (
                        <RiskQuestionnaire
                            riskAnswers={riskAnswers}
                            setRiskAnswers={setRiskAnswers}
                            riskStep={riskStep}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}

                    {step === 4 && (
                        <PortfolioResults
                            riskAnswers={riskAnswers}
                            onClose={onClose}
                            onComplete={(tier) => { setUserTier(tier); setStep(5); }}
                        />
                    )}

                    {step === 5 && userTier && (
                        <AIAnalysisComplete
                            tier={userTier}
                            onComplete={() => { onClose(); window.location.href = '/dashboard'; }}
                        />
                    )}
                </div>

                {/* Footer Link (Step 1 only) */}
                {step === 1 && (
                    <div className="py-4 border-t border-slate-50 bg-slate-50/50 text-center shrink-0">
                        <p className="text-[12px] font-medium text-slate-500">
                            Already have an account? <button onClick={onLoginClick} className="text-blue-600 font-bold hover:underline">Login</button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
