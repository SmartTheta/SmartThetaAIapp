export interface Broker {
    id: string;
    name: string;
    logo: string;
    type: 'discount' | 'fullService' | 'bank';
    accountType: string[];
    brokerage: string;
    features: string[];
    rating: number;
    usersMillions: number;
    yearEstablished: number;
    sebiRegNo: string;
    supportedInstruments: string[];
    ddpiSupported: boolean;
    apiAvailable: boolean;
    color: string;
}

export const brokers: Broker[] = [
    {
        id: 'zerodha',
        name: 'Zerodha',
        logo: '/brokers/zerodha.png',
        type: 'discount',
        accountType: ['Demat', 'Trading'],
        brokerage: '₹0 for delivery, ₹20/order for intraday',
        features: ['Kite Platform', 'Coin for MF', 'Console Analytics'],
        rating: 4.5,
        usersMillions: 15,
        yearEstablished: 2010,
        sebiRegNo: 'INZ000031633',
        supportedInstruments: ['Equity', 'F&O', 'MF', 'Bonds'],
        ddpiSupported: true,
        apiAvailable: true,
        color: '#387ED1'
    },
    {
        id: 'groww',
        name: 'Groww',
        logo: '/brokers/groww.png',
        type: 'discount',
        accountType: ['Demat', 'Trading'],
        brokerage: '₹0 for delivery, ₹20/order for intraday',
        features: ['User-Friendly App', 'Direct MF', 'US Stocks'],
        rating: 4.4,
        usersMillions: 12,
        yearEstablished: 2017,
        sebiRegNo: 'INZ000195431',
        supportedInstruments: ['Equity', 'F&O', 'MF', 'US Stocks'],
        ddpiSupported: true,
        apiAvailable: false,
        color: '#5367FF'
    },
    {
        id: 'upstox',
        name: 'Upstox',
        logo: '/brokers/upstox.png',
        type: 'discount',
        accountType: ['Demat', 'Trading'],
        brokerage: '₹0 for delivery, ₹20/order for intraday',
        features: ['Pro Platform', 'Advanced Charts', 'GTT Orders'],
        rating: 4.2,
        usersMillions: 10,
        yearEstablished: 2009,
        sebiRegNo: 'INZ000185137',
        supportedInstruments: ['Equity', 'F&O', 'Currency', 'IPO'],
        ddpiSupported: true,
        apiAvailable: true,
        color: '#6C3BF4'
    },
    {
        id: 'angelone',
        name: 'Angel One',
        logo: '/brokers/angelone.png',
        type: 'fullService',
        accountType: ['Demat', 'Trading'],
        brokerage: '₹0 for delivery, ₹20/order for intraday',
        features: ['ARQ Prime AI', 'SmartAPI', 'Research Reports'],
        rating: 4.3,
        usersMillions: 8,
        yearEstablished: 1996,
        sebiRegNo: 'INZ000161534',
        supportedInstruments: ['Equity', 'F&O', 'Commodities', 'IPO'],
        ddpiSupported: true,
        apiAvailable: true,
        color: '#FF6B00'
    },
    {
        id: 'shoonya',
        name: 'Shoonya',
        logo: '/brokers/shoonya.png',
        type: 'discount',
        accountType: ['Demat', 'Trading'],
        brokerage: '₹0 for all orders (lifetime zero brokerage)',
        features: ['Zero Brokerage', 'Advanced APIs', 'AI Tools'],
        rating: 4.6,
        usersMillions: 5,
        yearEstablished: 2016,
        sebiRegNo: 'INZ000176037',
        supportedInstruments: ['Equity', 'F&O', 'Commodities', 'Currency'],
        ddpiSupported: true,
        apiAvailable: true,
        color: '#E53935'
    }
];

export const getBrokerById = (id: string): Broker | undefined => brokers.find(b => b.id === id);
export const getBrokersByType = (type: Broker['type']): Broker[] => brokers.filter(b => b.type === type);
export const getRecommendedBrokers = (): Broker[] => [...brokers].sort((a, b) => (b.rating * b.usersMillions) - (a.rating * a.usersMillions)).slice(0, 5);
