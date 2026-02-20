import React from 'react';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { riskSections, Question } from './RegistrationData';

interface RiskQuestionnaireProps {
    riskAnswers: Record<string, number>;
    setRiskAnswers: (answers: Record<string, number> | ((prev: any) => any)) => void;
    riskStep: number;
    onNext: () => void;
    onBack: () => void;
}

export const RiskQuestionnaire: React.FC<RiskQuestionnaireProps> = ({
    riskAnswers, setRiskAnswers, riskStep, onNext, onBack
}) => {
    const allQs = riskSections.flatMap(s => s.questions);
    const currQ: Question = allQs[riskStep] || allQs[0];
    const progress = Math.round(((riskStep + 1) / allQs.length) * 100);
    const isAnswered = !!riskAnswers[currQ.id];

    return (
        <div className="space-y-4 sm:space-y-6 text-left">
            <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="space-y-1">
                <h3 className="text-[20px] sm:text-2xl font-bold text-slate-800 leading-tight">
                    {currQ.text}
                </h3>
                {isAnswered && (
                    <div className="flex items-center gap-2 text-emerald-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        <CheckCircle size={14} />
                        <span>Selection Captured</span>
                    </div>
                )}
            </div>

            <div className="space-y-2 sm:space-y-3">
                {currQ.options.map((o) => (
                    <button
                        key={o.value}
                        onClick={() => {
                            setRiskAnswers((p: any) => ({ ...p, [currQ.id]: o.score }));
                            onNext();
                        }}
                        className={`w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 text-left text-[14px] font-bold transition-all ${riskAnswers[currQ.id] === o.score ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md translate-x-1' : 'border-slate-50 hover:border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${riskAnswers[currQ.id] === o.score ? 'border-blue-600 bg-blue-600' : 'border-slate-200'}`}>
                                {riskAnswers[currQ.id] === o.score && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                            </div>
                            <span className="leading-snug">{o.text}</span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex justify-between items-center pt-2 sm:pt-4">
                <button
                    onClick={onBack}
                    className="text-[10px] sm:text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest underline decoration-dotted hover:text-slate-600 transition-colors"
                >
                    <ChevronLeft size={14} className="sm:w-4 sm:h-4" /> Back
                </button>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-black text-slate-300 tracking-widest uppercase">
                        Question {riskStep + 1} / {allQs.length}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">{progress}% Complete</span>
                </div>
            </div>
        </div>
    );
};
