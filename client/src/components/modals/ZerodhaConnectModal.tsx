import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, Shield, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

interface ZerodhaConnectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (brokerData: any) => void;
    userId: string;
}

const ZerodhaConnectModal: React.FC<ZerodhaConnectModalProps> = ({ isOpen, onClose, onSuccess, userId }) => {
    const [formData, setFormData] = useState({
        apiKey: '',
        apiSecret: '',
        zerodhaUserId: '',
        password: '',
        totpKey: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState<'form' | 'success'>('form');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/broker/connect', {
                userId,
                ...formData
            });

            if (response.data.success) {
                setStep('success');
                setTimeout(() => {
                    onSuccess(response.data.broker);
                }, 2000);
            }
        } catch (err: any) {
            setError(err.response?.data?.error || err.response?.data?.details || 'Failed to connect Zerodha. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
                <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#387ed1] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                Z
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Connect Zerodha</h2>
                                <p className="text-xs text-slate-500 font-medium">Automatic execution via Kite Connect API</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-xl transition"
                            disabled={isLoading}
                        >
                            <X size={20} className="text-slate-400" />
                        </button>
                    </div>

                    {step === 'form' ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600">
                                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                    <p className="text-sm font-medium">{error}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Kite API Key</label>
                                    <div className="relative">
                                        <input
                                            required
                                            name="apiKey"
                                            value={formData.apiKey}
                                            onChange={handleChange}
                                            placeholder="Enter API Key"
                                            className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Kite API Secret</label>
                                    <div className="relative">
                                        <input
                                            required
                                            type="password"
                                            name="apiSecret"
                                            value={formData.apiSecret}
                                            onChange={handleChange}
                                            placeholder="Enter API Secret"
                                            className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Zerodha User ID</label>
                                <input
                                    required
                                    name="zerodhaUserId"
                                    value={formData.zerodhaUserId}
                                    onChange={handleChange}
                                    placeholder="e.g. AB1234"
                                    className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Login Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Kite login password"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 pb-2">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center justify-between">
                                    <span>TOTP Setup Key</span>
                                    <span className="text-[10px] text-blue-600 normal-case font-bold cursor-help hover:underline">How to get?</span>
                                </label>
                                <div className="relative">
                                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        required
                                        name="totpKey"
                                        value={formData.totpKey}
                                        onChange={handleChange}
                                        placeholder="Paste 32-char TOTP secret"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium"
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1 ml-1">
                                    Found in Zerodha Console {'>'} My Profile {'>'} Password & Security {'>'} Enable 2FA {'>'} External App.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#387ed1] text-white py-4 rounded-2xl font-black text-lg hover:bg-[#2c6ab8] transition flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-blue-100 active:scale-[0.98]"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Verifying & Connecting...</span>
                                    </>
                                ) : (
                                    <>
                                        <Shield size={20} />
                                        <span>Connect and verify account</span>
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Connected!</h3>
                            <p className="text-slate-500 font-medium">
                                Your Zerodha account has been linked successfully. Redirecting to order execution...
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ZerodhaConnectModal;
