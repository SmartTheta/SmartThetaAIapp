import { Router } from 'express';
import {
    saveRiskProfile,
    getRiskProfile,
    adjustRiskNumber,
    refreshRiskProfile,
    getCategories,
} from '../controllers/riskProfileController';

const router = Router();

router.post('/save', saveRiskProfile);
router.get('/categories', getCategories);
router.get('/:userId', getRiskProfile);
router.put('/:userId/adjust', adjustRiskNumber);
router.post('/:userId/refresh', refreshRiskProfile);

export default router;
