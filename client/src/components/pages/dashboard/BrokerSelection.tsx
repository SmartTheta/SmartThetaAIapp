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
      <h1 className="text-xl font-bold text-slate-900">Connect Your Broker</h1>
      <p className="text-xs text-slate-500 font-medium">Select from 20+ SEBI registered brokers</p>
    </div>
  );

  return (
    <OnboardingLayout currentStep={3} customHeader={CustomHeader} maxWidth="w-full">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Recommended Brokers */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-bold text-slate-900">Recommended for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommended.map((broker) => (
                <motion.div
                  key={broker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-white to-slate-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => handleConnect(broker)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: broker.color }}
                    >
                      {broker.name.charAt(0)}
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-yellow-700">{broker.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{broker.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{broker.brokerage}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{broker.usersMillions}M+ users</span>
                    </div>
                    {broker.ddpiSupported && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Shield className="w-4 h-4" />
                        <span>DDPI</span>
                      </div>
                    )}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold group-hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    Connect Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search brokers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                {Object.entries(typeLabels).map(([type, label]) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type as Broker['type'] | 'all')}
                    className={`px-4 py-3 rounded-xl font-medium transition ${selectedType === type
                      ? 'bg-blue-600 text-white'
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
            <h2 className="text-xl font-bold text-slate-900 mb-6">All Brokers ({filteredBrokers.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredBrokers.map((broker, index) => (
                <motion.div
                  key={broker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group"
                  onClick={() => handleConnect(broker)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: broker.color }}
                    >
                      {broker.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{broker.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${broker.type === 'discount' ? 'bg-green-100 text-green-700' :
                        broker.type === 'fullService' ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                        {broker.type === 'discount' ? 'Discount' :
                          broker.type === 'fullService' ? 'Full Service' : 'Bank'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-3 line-clamp-1">{broker.brokerage}</p>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span>{broker.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{broker.usersMillions}M</span>
                    </div>
                    {broker.apiAvailable && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Zap className="w-3 h-3" />
                        <span>API</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {broker.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => !isConnecting && setShowDDPIModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                      style={{ backgroundColor: selectedBroker.color }}
                    >
                      {selectedBroker.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Connect {selectedBroker.name}</h2>
                      <p className="text-slate-500">SEBI: {selectedBroker.sebiRegNo}</p>
                    </div>
                  </div>

                  {/* DDPI Information */}
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-blue-900 mb-2">What is DDPI?</h3>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          <strong>Demat Debit and Pledge Instruction (DDPI)</strong> is a SEBI mandate that allows
                          your broker to debit shares from your demat account for selling, without requiring
                          a separate Power of Attorney (PoA).
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-blue-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Faster trade settlements
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Enhanced security over PoA
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            SEBI regulated & compliant
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connection Steps */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">1</div>
                      <span className="text-slate-700">You'll be redirected to {selectedBroker.name}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">2</div>
                      <span className="text-slate-700">Login with your broker credentials</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">3</div>
                      <span className="text-slate-700">Authorize SmartTheta access</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowDDPIModal(false)}
                      disabled={isConnecting}
                      className="flex-1 py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmDDPI}
                      disabled={isConnecting}
                      className="flex-1 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isConnecting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        <>
                          Connect & Authorize
                          <ExternalLink className="w-4 h-4" />
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
