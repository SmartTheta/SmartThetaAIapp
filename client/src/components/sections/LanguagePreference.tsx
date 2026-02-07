import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

const languages = [
    { id: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { id: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { id: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { id: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { id: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
    { id: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { id: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { id: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

export const LanguagePreference: React.FC = () => {
    const [selected, setSelected] = useState('en');
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const selectedLang = languages.find(l => l.id === selected);

    const filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-slate-100">
                {/* Header - Matching RegisterModal style */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-start border-b border-slate-50">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <img src="/theta1.png" alt="Logo" className="h-5 w-auto brightness-0 invert" />
                            </div>
                            <span className="text-lg font-bold text-slate-900 tracking-tight">SmartTheta</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">Select Your Preferred Language</h2>
                        <p className="text-slate-500 text-sm mt-1">Choose your language for a personalized experience.</p>
                    </div>
                </div>

                <div className="px-8 py-8 relative">
                    <div className="space-y-6">
                        <div className="relative">
                            <label className="text-[12px] font-bold text-slate-700 tracking-wide uppercase ml-1 mb-2 block">Available Languages</label>

                            {/* Dropdown Trigger */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className={`w-full h-12 px-4 rounded-xl bg-slate-50 border transition-all duration-200 flex items-center justify-between outline-none ${isOpen ? 'border-blue-500 bg-white ring-4 ring-blue-500/5' : 'border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{selectedLang?.flag}</span>
                                    <span className="text-sm font-semibold text-slate-900">{selectedLang?.name} ({selectedLang?.nativeName})</span>
                                </div>
                                <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute z-20 left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="p-2 border-b border-slate-100 bg-slate-50/50">
                                        <input
                                            type="text"
                                            placeholder="Search languages..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all"
                                        />
                                    </div>
                                    <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                                        {filteredLanguages.length > 0 ? (
                                            filteredLanguages.map((lang) => (
                                                <button
                                                    key={lang.id}
                                                    onClick={() => {
                                                        setSelected(lang.id);
                                                        setIsOpen(false);
                                                        setSearchQuery('');
                                                    }}
                                                    className={`w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 ${selected === lang.id ? 'bg-blue-50/50' : ''
                                                        }`}
                                                >
                                                    <span className="text-2xl">{lang.flag}</span>
                                                    <div className="flex-grow text-left">
                                                        <p className={`font-bold text-sm ${selected === lang.id ? 'text-blue-600' : 'text-slate-700'}`}>
                                                            {lang.name}
                                                        </p>
                                                        <p className="text-xs text-slate-500">{lang.nativeName}</p>
                                                    </div>
                                                    {selected === lang.id && (
                                                        <Check className="w-4 h-4 text-blue-600" />
                                                    )}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center text-slate-400 text-sm">
                                                No languages found
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Continue Button - Exact same as RegisterModal */}
                        <div className="pt-2">
                            <button
                                onClick={() => window.location.href = '/risk-assessment'}
                                className="w-full h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-lg bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Continue
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-center text-[12px] text-slate-400 pt-2">
                            Step 2 of 4: Preference
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
