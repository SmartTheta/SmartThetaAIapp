import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { languages, primaryButtonStyle } from './RegistrationData';

interface LanguageSelectionProps {
    selectedLangId: string;
    onSelect: (id: string) => void;
    onNext: () => void;
}

export const LanguageSelection: React.FC<LanguageSelectionProps> = ({
    selectedLangId, onSelect, onNext
}) => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const selectedLang = languages.find(l => l.id === selectedLangId);

    return (
        <div className="space-y-4 text-left">
            <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Preferred Language</label>
                <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="w-full h-14 border border-slate-200 rounded-xl px-4 flex justify-between items-center bg-slate-50 text-sm font-bold"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">{selectedLang?.flag}</span>
                        <span>{selectedLang?.name}</span>
                    </div>
                    <ChevronDown size={20} className="text-slate-400" />
                </button>

                {isLangOpen && (
                    <div className="mt-2 border border-slate-100 rounded-xl max-h-48 overflow-y-auto shadow-lg bg-white">
                        {languages.map(l => (
                            <button
                                key={l.id}
                                onClick={() => { onSelect(l.id); setIsLangOpen(false); }}
                                className={`w-full p-4 text-left hover:bg-slate-50 text-sm font-bold border-b border-slate-50 last:border-0 ${selectedLangId === l.id ? 'bg-blue-50 text-blue-600' : ''}`}
                            >
                                <span className="mr-3">{l.flag}</span>
                                {l.name}
                                <span className="ml-2 font-normal text-slate-400 text-xs">({l.nativeName})</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button
                onClick={onNext}
                className={`${primaryButtonStyle} flex items-center justify-center gap-2`}
            >
                Continue <ChevronRight size={18} />
            </button>
        </div>
    );
};
