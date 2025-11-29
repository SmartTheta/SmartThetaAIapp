import { Router } from 'express';
import {
    getCurrentIndex,
    getHistoricalDaily,
    getComparisonData,
    getHistoricalData,
    refreshData,
    setKiteToken
} from '../controllers/indexController';

const router = Router();

router.get('/current', getCurrentIndex);
router.get('/daily', getHistoricalDaily);
router.get('/comparison', getComparisonData);
router.get('/history', getHistoricalData);
router.post('/refresh', refreshData);
router.post('/kite/token', setKiteToken);

export default router;
