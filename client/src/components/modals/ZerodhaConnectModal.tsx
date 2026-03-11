import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Shield, AlertCircle, Key, Lock, ExternalLink, Info, Users, Zap, ArrowRight } from 'lucide-react';
import axios from 'axios';

interface ZerodhaConnectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (brokerData: any) => void;
    userId: string;
}

const ZerodhaConnectModal: React.FC<ZerodhaConnectModalProps> = ({ isOpen, onClose, onSuccess, userId }) => {
    const [formData, setFormData] = useState({
        zerodhaUserId: '',
        password: '',
        totpKey: '',
        apiKey: '',
        apiSecret: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validation: For Step 1, we only NEED the API Key to start the redirect
        if (!formData.apiKey.trim()) {
            setError('Kite API Key is required to start the integration');
            return;
        }

        // Save current progress to localStorage so we can resume after redirect
        localStorage.setItem('zerodha_pending_apiKey', formData.apiKey.trim());
        localStorage.setItem('zerodha_pending_userId', userId);

        // Redirect to Zerodha Kite Connect OAuth login (Step 1)
        const kiteLoginUrl = `https://kite.trade/connect/login?v=3&api_key=${encodeURIComponent(formData.apiKey.trim())}`;
        window.location.href = kiteLoginUrl;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 overflow-y-auto">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full overflow-hidden my-8"
            >
                <div className="p-8 sm:p-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#387ed1] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-200">
                                Z
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-0.5">Step 1: Authenticate</h2>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <Shield size={12} className="text-emerald-500" />
                                    Official Zerodha Login
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-xl transition"
                        >
                            <X size={24} className="text-slate-400" />
                        </button>
                    </div>

                    {/* Instruction Box */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-100 rounded-xl shrink-0">
                                <Info size={18} className="text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-900 text-sm mb-1">How it Works</h3>
                                <p className="text-[12px] text-blue-700/80 leading-relaxed font-medium">
                                    1. Enter your <span className="font-bold">Kite API Key</span> below.<br />
                                    2. You will be redirected to <span className="font-bold">Zerodha official page</span> to login.<br />
                                    3. After login, you'll come back here to set up <span className="font-bold">Auto-Execution</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 animate-shake">
                                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                <p className="text-sm font-bold">{error}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Kite API Key</label>
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    required
                                    name="apiKey"
                                    value={formData.apiKey}
                                    onChange={handleChange}
                                    placeholder="Enter your Kite API Key"
                                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-bold"
                                />
                            </div>
                            <p className="text-[10px] text-slate-400 ml-1">
                                Found in <a href="https://developers.kite.trade" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-bold">developers.kite.trade</a>
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#387ed1] text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-[#2c6ab8] transition flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 active:scale-[0.98]"
                        >
                            <span>Redirect to Zerodha Login</span>
                            <ExternalLink size={20} />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ZerodhaConnectModal;
