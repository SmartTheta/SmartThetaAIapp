import express from 'express';
import { searchStock, getStockHistory } from '../controllers/stockController';

const router = express.Router();

router.get('/search', searchStock);
router.get('/:symbol/history', getStockHistory);

export default router;
