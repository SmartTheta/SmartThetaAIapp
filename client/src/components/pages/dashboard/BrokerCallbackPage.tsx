import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import axios from 'axios';

type CallbackState = 'processing' | 'success' | 'error';

export const BrokerCallbackPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [state, setState] = useState<CallbackState>('processing');
    const [errorMessage, setErrorMessage] = useState('');
    const [brokerInfo, setBrokerInfo] = useState<{ zerodhaUserId?: string } | null>(null);
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const exchangeToken = async () => {
            // Extract request_token from URL params (sent by Zerodha after OAuth login)
            const requestToken = searchParams.get('request_token');
            const status = searchParams.get('status');

            if (status === 'error' || !requestToken) {
                setState('error');
                setErrorMessage(
                    status === 'error'
                        ? 'Zerodha login was cancelled or failed. Please try again.'
                        : 'No request token received from Zerodha. Please try again.'
                );
                return;
            }

            // Retrieve saved credentials from localStorage
            const apiKey = localStorage.getItem('zerodha_pending_apiKey');
            const apiSecret = localStorage.getItem('zerodha_pending_apiSecret');
            const totpKey = localStorage.getItem('zerodha_pending_totpKey');
            const userId = localStorage.getItem('zerodha_pending_userId') || localStorage.getItem('userId') || '';

            if (!apiKey || !apiSecret || !totpKey) {
                setState('error');
                setErrorMessage('API credentials not found. Please go back and enter your credentials again.');
                return;
            }

            if (!userId) {
                setState('error');
                setErrorMessage('User session not found. Please log in again.');
                return;
            }

            try {
                // Exchange request_token for access_token via our backend
                const response = await axios.post('http://localhost:5000/api/broker/connect-oauth', {
                    userId,
                    apiKey,
                    apiSecret,
                    totpKey,
                    requestToken
                });

                if (response.data.success) {
                    // Clean up temporary credentials from localStorage
                    localStorage.removeItem('zerodha_pending_apiKey');
                    localStorage.removeItem('zerodha_pending_apiSecret');
                    localStorage.removeItem('zerodha_pending_totpKey');
                    localStorage.removeItem('zerodha_pending_userId');

                    // Store connection status
                    localStorage.setItem('brokerConnected', 'true');
                    localStorage.setItem('brokerName', 'zerodha');
                    if (response.data.broker?.zerodhaUserId) {
                        localStorage.setItem('zerodhaUserId', response.data.broker.zerodhaUserId);
                    }

                    setBrokerInfo(response.data.broker);
                    setState('success');
                } else {
                    setState('error');
                    setErrorMessage(response.data.error || 'Failed to connect Zerodha account.');
                }
            } catch (err: any) {
                setState('error');
                const msg =
                    err.response?.data?.details ||
                    err.response?.data?.error ||
                    err.message ||
                    'Failed to exchange token. Please try again.';
                setErrorMessage(msg);
            }
        };

        exchangeToken();
    }, [searchParams]);

    const handleRetry = () => {
        // Go back to broker selection to re-enter credentials
        navigate('/dashboard/broker-selection');
    };

    const handleContinue = () => {
        navigate('/dashboard/order-execution');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 text-center"
            >
                {/* Processing State */}
                {state === 'processing' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-2">Connecting Zerodha...</h2>
                            <p className="text-slate-500 font-medium text-sm">
                                Exchanging token and setting up your trading account.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span>Please wait, do not close this page</span>
                        </div>
                    </motion.div>
                )}

                {/* Success/Step 2: Selection & Agreement State */}
                {state === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6 text-left"
                    >
                        {/* Choice Mode */}
                        {!localStorage.getItem('execution_mode') ? (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-2xl font-black text-slate-900 mb-2">Choose Execution Mode</h2>
                                    <p className="text-slate-500 text-sm font-medium">How would you like to execute your Smart Basket?</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('execution_mode', 'one_click');
                                            // Force re-render
                                            setState('success');
                                        }}
                                        className="p-5 border-2 border-slate-100 rounded-3xl hover:border-blue-500 hover:bg-blue-50 transition text-left group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                                                <Zap size={20} />
                                            </div>
                                            <span className="font-black text-slate-900">One-Click Execution</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium">You will review and click "Execute" manually for every batch of trades.</p>
                                    </button>

                                    <button
                                        onClick={() => {
                                            localStorage.setItem('execution_mode', 'pre_consented');
                                            setState('success');
                                        }}
                                        className="p-5 border-2 border-slate-100 rounded-3xl hover:border-emerald-500 hover:bg-emerald-50 transition text-left group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                                                <Shield size={20} />
                                            </div>
                                            <span className="font-black text-slate-900">Pre-Consented Execution</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium">Fully automated. AI rebalances your portfolio automatically within guarded risk limits.</p>
                                    </button>
                                </div>
                            </div>
                        ) : localStorage.getItem('execution_mode') === 'pre_consented' && !localStorage.getItem('agreement_accepted') ? (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                                    <p className="text-[11px] text-red-700 font-bold uppercase tracking-tight">Legal Authorization Required</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 h-[400px] overflow-y-auto text-[11px] text-slate-600 font-medium leading-relaxed font-mono">
                                    <h3 className="font-black text-slate-900 text-sm mb-4 border-b pb-2">SMARTTHETA: PRE-CONSENTED ALGORITHMIC EXECUTION AGREEMENT</h3>

                                    <p className="font-bold text-slate-900 mt-4 mb-1">1. NATURE OF SERVICE (NON-ADVISORY ACKNOWLEDGEMENT)</p>
                                    <p>1.1 Algorithmic Execution Only: Smarttheta provides a deterministic, rule-based AI strategy platform. It is an algorithmic execution platform, not a discretionary portfolio management service (PMS) or personalized advisory service.</p>
                                    <p>1.2 No Discretionary Management: Smarttheta does not actively "manage" the User's money. The platform operates strictly within predefined parameters.</p>
                                    <p>1.3 Measurable Triggers: Trade execution is triggered solely by measurable mathematical parameters.</p>

                                    <p className="font-bold text-slate-900 mt-4 mb-1">2. PRE-CONSENTED EXECUTION AUTHORIZATION</p>
                                    <p>2.1 API Broker Linkage: The User explicitly authorizes Smarttheta to transmit electronic trade instructions to the User’s linked execution broker via API, without requiring manual approval for each transaction.</p>
                                    <p>2.2 Bounded Operations: The User authorizes Smarttheta to continuously monitor the portfolio and execute rebalancing trades.</p>
                                    <p>2.3 Revocation & Kill Switch: The User retains full control and may pause the automated execution at any time using the "Kill Switch" feature.</p>

                                    <p className="font-bold text-slate-900 mt-4 mb-1">3. EXECUTION MECHANICS & OPERATIONAL TIMINGS</p>
                                    <p>3.1 Delivery-Based Trading Only (CNC): All orders will be strictly Cash and Carry (CNC). No Intraday (MIS) or Margin trades.</p>
                                    <p>3.2 Market Orders: All automated trades will be placed as Market Orders.</p>
                                    <p>3.3 Operational Time Window: Order entry strictly after 09:45 AM with a hard cut-off at 03:00 PM.</p>
                                    <p>3.4 No After Market Orders (AMO): The system is programmed to operate exclusively during live market hours.</p>

                                    <p className="font-bold text-slate-900 mt-4 mb-1">4. RISK DISCLOSURE & LIMITATION OF LIABILITY</p>
                                    <p>4.1 Execution Slippage: User assumes full risk for market spread variations between trigger and execution.</p>
                                    <p>4.2 Broker API & Infrastructure Failures: Chronoquant Technologies shall not be held liable for losses arising from broker API downtime.</p>
                                    <p>4.3 Auto-Disable: System is designed to auto-disable upon detecting severe anomalies.</p>

                                    <p className="font-bold text-slate-900 mt-4 mb-1">5. AUDIT & LOGGING CONSENT</p>
                                    <p>5.1 Immutable Records: The User consents to Smarttheta recording an immutable audit log of their strategy selection and IP address.</p>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('execution_mode');
                                            setState('success');
                                        }}
                                        className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-200 transition"
                                    >
                                        Go Back
                                    </button>
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('agreement_accepted', 'true');
                                            setState('success');
                                        }}
                                        className="flex-[2] py-4 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition shadow-xl shadow-emerald-100"
                                    >
                                        I ACCEPT & AGREE
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Final Step: Technical Keys */
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-slate-900 leading-tight">Step 2: Technical Setup</h2>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                            Mode: {localStorage.getItem('execution_mode') === 'pre_consented' ? 'Automated' : 'One-Click'}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                                    <p className="text-[11px] text-blue-800 font-medium leading-relaxed italic">
                                        "Please enter your Kite API Secret and TOTP Setup Key to finalize the connection bridge."
                                    </p>
                                </div>

                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const apiSecret = (e.target as any).apiSecret.value;
                                    const totpKey = (e.target as any).totpKey.value;

                                    if (!apiSecret || !totpKey) return alert('Please enter both keys');

                                    setState('processing');
                                    try {
                                        const requestToken = searchParams.get('request_token');
                                        const apiKey = localStorage.getItem('zerodha_pending_apiKey');
                                        const userId = localStorage.getItem('zerodha_pending_userId') || localStorage.getItem('userId');

                                        const response = await axios.post('http://localhost:5000/api/broker/connect-oauth', {
                                            userId,
                                            apiKey,
                                            apiSecret,
                                            totpKey,
                                            requestToken,
                                            mode: localStorage.getItem('execution_mode')
                                        });

                                        if (response.data.success) {
                                            // Clean up
                                            localStorage.removeItem('execution_mode');
                                            localStorage.removeItem('agreement_accepted');
                                            navigate('/dashboard/order-execution');
                                        }
                                    } catch (err: any) {
                                        setState('error');
                                        setErrorMessage(err.response?.data?.error || 'Final connection failed');
                                    }
                                }} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Kite API Secret</label>
                                        <input
                                            name="apiSecret"
                                            type="password"
                                            required
                                            placeholder="Enter your API Secret"
                                            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1">TOTP Setup Key (32-chars)</label>
                                        <input
                                            name="totpKey"
                                            required
                                            placeholder="Paste TOTP secret key"
                                            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold font-mono"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#387ed1] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#2c6ab8] transition flex items-center justify-center gap-3 shadow-xl shadow-blue-100 mt-6"
                                    >
                                        <span>Link Broker & Start Engine</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Error State */}
                {state === 'error' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                            <XCircle className="w-10 h-10 text-red-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-2">Connection Failed</h2>
                            <p className="text-slate-500 font-medium text-sm mb-3">
                                {errorMessage}
                            </p>
                            <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                                <p className="text-[11px] text-red-700 font-medium leading-relaxed">
                                    <span className="font-black">Common fixes:</span> Check your API Key is correct, ensure the redirect URL in your Kite app matches{' '}
                                    <code className="bg-red-100 px-1 py-0.5 rounded text-[10px] font-mono font-bold">
                                        {window.location.origin}/dashboard/broker-callback
                                    </code>
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleRetry}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            <RefreshCw size={18} />
                            <span>Try Again</span>
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default BrokerCallbackPage;
