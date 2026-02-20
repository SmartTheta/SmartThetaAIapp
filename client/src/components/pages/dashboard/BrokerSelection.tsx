import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import {
  Search,
  Check,
  Star,
  Users,
  Shield,
  Zap,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';
import { brokers, Broker, getRecommendedBrokers } from '../../../data/brokers';

const BrokerSelection: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<Broker['type'] | 'all'>('all');
  const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);
  const [showDDPIModal, setShowDDPIModal] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const recommended = getRecommendedBrokers();

  const filteredBrokers = brokers.filter(broker => {
    const matchesSearch = broker.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || broker.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleConnect = async (broker: Broker) => {
    setSelectedBroker(broker);
    setShowDDPIModal(true);
  };

  const handleConfirmDDPI = async () => {
    setIsConnecting(true);
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnecting(false);
    setShowDDPIModal(false);
    // Navigate to order execution with broker info
    navigate('/dashboard/order-execution', { state: { broker: selectedBroker } });
  };

  const typeLabels = {
    all: 'All Brokers',
    discount: 'Discount Brokers',
    fullService: 'Full Service',
    bank: 'Bank Brokers'
  };

  const CustomHeader = (
    <div>
      <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">Connect Broker</h1>
      <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Select from 20+ SEBI registered brokers</p>
    </div>
  );

  return (
    <OnboardingLayout currentStep={3} customHeader={CustomHeader} maxWidth="w-full">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Recommended Brokers */}
          <section className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Recommended for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommended.map((broker) => (
                <motion.div
                  key={broker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border-2 border-slate-100 rounded-2xl p-5 sm:p-6 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                  onClick={() => handleConnect(broker)}
                >
                  <div className="absolute top-0 right-0 p-3">
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-yellow-700">{broker.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      style={{ backgroundColor: broker.color }}
                    >
                      {broker.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">{broker.name}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium">{broker.brokerage}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] sm:text-sm text-slate-500 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-slate-400" />
                      <span>{broker.usersMillions}M+ users</span>
                    </div>
                    {broker.ddpiSupported && (
                      <div className="flex items-center gap-1.5 text-blue-600 font-bold">
                        <Shield size={14} />
                        <span>DDPI Enabled</span>
                      </div>
                    )}
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold group-hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-100 active:scale-95 text-sm sm:text-base">
                    Connect Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-8">
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search over 20+ brokers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-sm"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {Object.entries(typeLabels).map(([type, label]) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type as Broker['type'] | 'all')}
                    className={`px-4 py-2.5 rounded-xl font-bold transition whitespace-nowrap text-xs sm:text-sm ${selectedType === type
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* All Brokers Grid */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">All Brokers ({filteredBrokers.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredBrokers.map((broker, index) => (
                <motion.div
                  key={broker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group"
                  onClick={() => handleConnect(broker)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: broker.color }}
                    >
                      {broker.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate">{broker.name}</h3>
                      <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold ${broker.type === 'discount' ? 'bg-green-100 text-green-700' :
                        broker.type === 'fullService' ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                        {broker.type === 'discount' ? 'Discount' :
                          broker.type === 'fullService' ? 'Full Service' : 'Bank'}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-sm text-slate-500 mb-3 truncate font-medium">{broker.brokerage}</p>

                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1 font-bold">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span>{broker.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span>{broker.usersMillions}M</span>
                    </div>
                    {broker.apiAvailable && (
                      <div className="flex items-center gap-1 text-emerald-600 font-bold">
                        <Zap size={10} className="fill-emerald-600" />
                        <span>Fast API</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {broker.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100 font-medium whitespace-nowrap">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* DDPI Modal */}
        <AnimatePresence>
          {showDDPIModal && selectedBroker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
              onClick={() => !isConnecting && setShowDDPIModal(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold"
                      style={{ backgroundColor: selectedBroker.color }}
                    >
                      {selectedBroker.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">Connect {selectedBroker.name}</h2>
                      <p className="text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">SEBI: {selectedBroker.sebiRegNo}</p>
                    </div>
                  </div>

                  {/* DDPI Information */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 sm:p-5 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-blue-100 rounded-lg shrink-0">
                        <Info size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 text-sm sm:text-base mb-1.5 leading-tight">DDPI Authorization</h3>
                        <p className="text-[12px] sm:text-sm text-blue-700/80 leading-relaxed">
                          SEBI's Demat Debit instruction allows secure, faster trade settlements without a physical PoA.
                        </p>
                        <div className="mt-3 grid grid-cols-1 gap-2">
                          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-green-700 font-bold">
                            <Check size={14} className="text-green-600" />
                            SEBI Regulated & Safe
                          </div>
                          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-green-700 font-bold">
                            <Check size={14} className="text-green-600" />
                            Faster Execution
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Steps */}
                  <div className="space-y-2 mb-8">
                    {[
                      'Redirect to secure login',
                      'Enter broker credentials',
                      'Authorize secure trading'
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                        <div className="w-6 h-6 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 text-xs font-bold leading-none">{i + 1}</div>
                        <span className="text-[12px] sm:text-sm text-slate-600 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowDDPIModal(false)}
                      disabled={isConnecting}
                      className="flex-1 py-4 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition disabled:opacity-50 text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmDDPI}
                      disabled={isConnecting}
                      className="flex-3 py-4 rounded-xl font-black bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-100 text-sm sm:text-base"
                    >
                      {isConnecting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <span>Connect Now</span>
                          <ExternalLink size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OnboardingLayout>
  );
};

export default BrokerSelection;
