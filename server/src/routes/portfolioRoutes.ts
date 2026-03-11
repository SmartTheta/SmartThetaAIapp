import { Router } from 'express';
import { portfolioController } from '../controllers/portfolioController';

const router = Router();

router.post('/generate', portfolioController.generate);
router.post('/adjust-risk', portfolioController.adjustRisk);

export default router;
