import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  ChevronRight,
  RefreshCcw,
  FileText,
  ArrowRight,
  Loader2,
  LayoutGrid,
  Wallet
} from 'lucide-react';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import { Broker } from '../../../data/brokers';

interface OrderItem {
  stock: {
    symbol: string;
    name: string;
    currentPrice: number;
  };
  quantity: number;
  orderType: 'MKT' | 'LMT';
  limitPrice?: number;
  amount: number;
}

interface OrderResult {
  orderId: string;
  symbol: string;
  status: 'success' | 'failed' | 'pending' | 'partial';
  executedQty: number;
  requestedQty: number;
  executedPrice: number;
  message: string;
  timestamp: string;
}

const OrderExecution: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const broker = location.state?.broker as Broker | undefined;

  const [isExecuting, setIsExecuting] = useState(true);
  const [currentOrderIndex, setCurrentOrderIndex] = useState(0);
  const [orderResults, setOrderResults] = useState<OrderResult[]>([]);
  const [cart, setCart] = useState<OrderItem[]>([]);

  // Load cart from session
  useEffect(() => {
    const savedCart = sessionStorage.getItem('orderCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Simulate order execution
  useEffect(() => {
    if (cart.length === 0 || currentOrderIndex >= cart.length) {
      setIsExecuting(false);
      return;
    }

    const executeOrder = async () => {
      const order = cart[currentOrderIndex];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

      // Simulate different outcomes
      const random = Math.random();
      let result: OrderResult;

      if (random < 0.7) {
        // Success (70%)
        result = {
          orderId: `ORD${Date.now()}${currentOrderIndex}`,
          symbol: order.stock.symbol,
          status: 'success',
          executedQty: order.quantity,
          requestedQty: order.quantity,
          executedPrice: order.orderType === 'MKT'
            ? order.stock.currentPrice * (1 + (Math.random() - 0.5) * 0.01) // Slight slippage
            : order.limitPrice || order.stock.currentPrice,
          message: 'Order executed successfully',
          timestamp: new Date().toLocaleTimeString()
        };
      } else if (random < 0.85) {
        // Partial fill (15%)
        const executedQty = Math.floor(order.quantity * (0.3 + Math.random() * 0.5));
        result = {
          orderId: `ORD${Date.now()}${currentOrderIndex}`,
          symbol: order.stock.symbol,
          status: 'partial',
          executedQty,
          requestedQty: order.quantity,
          executedPrice: order.stock.currentPrice,
          message: `Partially filled: ${executedQty}/${order.quantity} shares. Remaining quantity pending.`,
          timestamp: new Date().toLocaleTimeString()
        };
      } else if (random < 0.95) {
        // Failed - Margin shortfall (10%)
        result = {
          orderId: `ORD${Date.now()}${currentOrderIndex}`,
          symbol: order.stock.symbol,
          status: 'failed',
          executedQty: 0,
          requestedQty: order.quantity,
          executedPrice: 0,
          message: 'REJECTED: Insufficient margin. Required: ₹' +
            (order.amount * 1.2).toLocaleString('en-IN') +
            '. Available: ₹' + (order.amount * 0.8).toLocaleString('en-IN'),
          timestamp: new Date().toLocaleTimeString()
        };
      } else {
        // Failed - Other (5%)
        result = {
          orderId: `ORD${Date.now()}${currentOrderIndex}`,
          symbol: order.stock.symbol,
          status: 'failed',
          executedQty: 0,
          requestedQty: order.quantity,
          executedPrice: 0,
          message: 'REJECTED: Circuit limit hit. Stock is in upper circuit.',
          timestamp: new Date().toLocaleTimeString()
        };
      }

      setOrderResults(prev => [...prev, result]);
      setCurrentOrderIndex(prev => prev + 1);
    };

    executeOrder();
  }, [cart, currentOrderIndex]);

  // Calculate summary
  const successCount = orderResults.filter(r => r.status === 'success').length;
  const partialCount = orderResults.filter(r => r.status === 'partial').length;
  const failedCount = orderResults.filter(r => r.status === 'failed').length;
  const totalExecutedValue = orderResults.reduce((sum, r) => {
    return sum + (r.executedPrice * r.executedQty);
  }, 0);

  // Save executed portfolio to sessionStorage when execution completes
  useEffect(() => {
    if (!isExecuting && orderResults.length > 0) {
      // Build executed portfolio from successful/partial orders
      const executedPortfolio = orderResults
        .filter(r => r.status === 'success' || r.status === 'partial')
        .map(result => {
          const originalOrder = cart.find(item => item.stock.symbol === result.symbol);
          return {
            symbol: result.symbol,
            name: originalOrder?.stock.name || result.symbol,
            executedQty: result.executedQty,
            executedPrice: result.executedPrice,
            totalValue: result.executedQty * result.executedPrice,
            status: result.status,
            orderId: result.orderId,
            timestamp: result.timestamp
          };
        });

      // Save to sessionStorage
      sessionStorage.setItem('executedPortfolio', JSON.stringify(executedPortfolio));
      sessionStorage.setItem('portfolioSummary', JSON.stringify({
        totalInvested: totalExecutedValue,
        successCount,
        partialCount,
        failedCount,
        executionDate: new Date().toISOString()
      }));
    }
  }, [isExecuting, orderResults, cart, totalExecutedValue, successCount, partialCount, failedCount]);

  const getStatusIcon = (status: OrderResult['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'partial':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'failed':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Clock className="w-6 h-6 text-slate-400" />;
    }
  };

  const getStatusColor = (status: OrderResult['status']) => {
    switch (status) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'partial':
        return 'bg-yellow-50 border-yellow-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  const CustomHeader = (
    <div>
      <h1 className="text-xl font-bold text-slate-900">Order Execution</h1>
      <p className="text-xs text-slate-500 font-medium">
        {broker ? `Via ${broker.name}` : 'Processing your orders'}
      </p>
    </div>
  );

  const steps = [
    { name: 'Portfolio Dashboard', icon: LayoutGrid, path: '/dashboard/portfolio', status: 'current' as const },
    { name: 'Connect Another Broker', icon: Wallet, path: '/dashboard/broker-selection', status: 'upcoming' as const }
  ];

  return (
    <OnboardingLayout currentStep={0} steps={steps} customHeader={CustomHeader} maxWidth="w-full">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Progress */}
          {isExecuting && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600">Processing Orders</span>
                <span className="font-bold text-slate-900">
                  {currentOrderIndex} / {cart.length}
                </span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentOrderIndex / cart.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {cart[currentOrderIndex] && (
                <p className="text-sm text-slate-500 mt-3">
                  Executing: <span className="font-medium">{cart[currentOrderIndex].stock.symbol}</span>
                  {' '}({cart[currentOrderIndex].quantity} shares)
                </p>
              )}
            </motion.div>
          )}

          {/* Summary Card (shown after completion) */}
          {!isExecuting && orderResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl p-8 text-white mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Execution Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Successful</p>
                  <p className="text-3xl font-bold text-green-300">{successCount}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-1">Partial</p>
                  <p className="text-3xl font-bold text-yellow-300">{partialCount}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-1">Failed</p>
                  <p className="text-3xl font-bold text-red-300">{failedCount}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-1">Total Invested</p>
                  <p className="text-3xl font-bold">₹{totalExecutedValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Order Results */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Order Details</h2>

            <AnimatePresence>
              {orderResults.map((result, idx) => (
                <motion.div
                  key={result.orderId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border rounded-xl p-5 ${getStatusColor(result.status)}`}
                >
                  <div className="flex items-start gap-4">
                    {getStatusIcon(result.status)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg text-slate-900">{result.symbol}</span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${result.status === 'success' ? 'bg-green-100 text-green-700' :
                            result.status === 'partial' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                            {result.status === 'success' ? 'EXECUTED' :
                              result.status === 'partial' ? 'PARTIAL' : 'REJECTED'}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">{result.timestamp}</span>
                      </div>

                      <p className="text-sm text-slate-600 mb-3">{result.message}</p>

                      {result.executedQty > 0 && (
                        <div className="flex items-center gap-6 text-sm">
                          <div>
                            <span className="text-slate-500">Qty: </span>
                            <span className="font-medium">{result.executedQty}/{result.requestedQty}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Price: </span>
                            <span className="font-medium">₹{result.executedPrice.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Value: </span>
                            <span className="font-bold text-green-600">
                              ₹{(result.executedQty * result.executedPrice).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </span>
                          </div>
                        </div>
                      )}

                      <p className="text-xs text-slate-400 mt-2">Order ID: {result.orderId}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Pending orders */}
            {isExecuting && cart.slice(currentOrderIndex).map((order, idx) => (
              <motion.div
                key={order.stock.symbol + idx}
                initial={{ opacity: 0.5 }}
                className="border border-slate-200 rounded-xl p-5 bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-slate-400">{order.stock.symbol}</span>
                    <span className="text-sm text-slate-400 ml-3">
                      {order.quantity} shares @ {order.orderType === 'LMT' ? `₹${order.limitPrice} (LMT)` : 'Market'}
                    </span>
                  </div>
                  <span className="text-sm text-slate-400">Pending</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          {!isExecuting && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              {failedCount > 0 && (
                <button
                  onClick={() => {
                    // Retry failed orders logic
                    setCurrentOrderIndex(0);
                    setOrderResults([]);
                    setIsExecuting(true);
                  }}
                  className="flex-1 py-4 rounded-xl font-bold border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5" />
                  Retry Failed Orders
                </button>
              )}

              <button
                onClick={() => navigate('/dashboard/portfolio')}
                className="flex-1 py-4 rounded-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View Portfolio
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Download Report */}
          {!isExecuting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 mx-auto">
                <FileText className="w-4 h-4" />
                Download Trade Report
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </OnboardingLayout>
  );
};

export default OrderExecution;
