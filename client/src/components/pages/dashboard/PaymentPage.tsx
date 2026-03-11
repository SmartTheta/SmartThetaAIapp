import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

export const PaymentPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
        name: ''
    });

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment validation
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    if (success) {
        return (
            <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-3xl shadow-xl border border-slate-100 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h1 className="text-2xl font-black text-slate-900 mb-2">Payment Successful!</h1>
                <p className="text-slate-500 mb-8 font-medium">Your account has been upgraded. You're ready to set up your investments.</p>
                <button
                    onClick={() => navigate('/dashboard/investment-setup')}
                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                    Continue to Investment Setup
                    <ChevronRight size={18} />
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Setup Payment</h1>
                <p className="text-sm text-slate-500 font-medium">Safe & secure checkout powered by 256-bit encryption.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Payment Form */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                    <form onSubmit={handlePayment} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Cardholder Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Full name as on card"
                                className="w-full h-12 px-4 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-500 transition-colors"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Card Number</label>
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-500 transition-colors"
                                    value={formData.cardNumber}
                                    onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                                />
                                <CreditCard className="absolute right-4 top-3.5 text-slate-300" size={18} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Expiry Date</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-500 transition-colors"
                                    value={formData.expiry}
                                    onChange={e => setFormData({ ...formData, expiry: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">CVV</label>
                                <div className="relative">
                                    <input
                                        required
                                        type="password"
                                        maxLength={3}
                                        placeholder="***"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-500 transition-colors"
                                        value={formData.cvv}
                                        onChange={e => setFormData({ ...formData, cvv: e.target.value })}
                                    />
                                    <Lock className="absolute right-4 top-3.5 text-slate-300" size={18} />
                                </div>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 mt-4 h-14"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <ShieldCheck size={18} />
                                    Pay ₹2,999 Securely
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-6 grayscale opacity-50">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6" alt="Mastercard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" className="h-4" alt="Paypal" />
                    </div>
                </div>

                {/* Summary Card */}
                <div className="space-y-6">
                    <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-200">
                        <h3 className="font-bold mb-4 opacity-80">Order Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">SmartTheta Premium</span>
                                <span className="font-bold">₹2,999</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Onboarding Fee</span>
                                <span className="font-bold text-emerald-300">Free</span>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-lg">
                                <span className="font-black">Total</span>
                                <span className="font-black text-2xl font-mono">₹2,999</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <ShieldCheck className="text-blue-600" size={18} />
                            Why pay now?
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-xs text-slate-600 font-medium">
                                <div className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                Unlock full AI-powered portfolio management
                            </li>
                            <li className="flex gap-2 text-xs text-slate-600 font-medium">
                                <div className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                Direct integration with your Zerodha/Kite account
                            </li>
                            <li className="flex gap-2 text-xs text-slate-600 font-medium">
                                <div className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                100% money-back guarantee for first 30 days
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
