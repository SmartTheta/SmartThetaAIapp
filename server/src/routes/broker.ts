import express from 'express';
import {
    connectBroker,
    getBrokerStatus,
    loginBroker,
    placeOrder,
    placeBatchOrders,
    disconnectBroker
} from '../controllers/brokerController';

const router = express.Router();

// Connect broker (save credentials + test login)
router.post('/connect', connectBroker);

// Get broker connection status for a user
router.get('/status/:userId', getBrokerStatus);

// Force re-login (refresh access token)
router.post('/login/:userId', loginBroker);

// Place a single stock order
router.post('/order', placeOrder);

// Place multiple orders (portfolio execution)
router.post('/orders/batch', placeBatchOrders);

// Disconnect / remove broker account
router.delete('/:userId', disconnectBroker);

export default router;
