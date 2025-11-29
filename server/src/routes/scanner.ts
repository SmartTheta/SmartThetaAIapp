import { Router } from 'express';
import {
    getTopGainers,
    getTopLosers,
    getMostActive,
    searchStock,
    getGlobalIndices
} from '../controllers/scannerController';

const router = Router();

router.get('/top-gainers', getTopGainers);
router.get('/top-losers', getTopLosers);
router.get('/most-active', getMostActive);
router.get('/search', searchStock);
router.get('/global-indices', getGlobalIndices);

export default router;
