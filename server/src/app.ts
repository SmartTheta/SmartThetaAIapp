import { Request, Response, NextFunction } from 'express';
import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index';
import scannerRoutes from './routes/scanner';
import stockRoutes from './routes/stocks';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/index', indexRoutes);
app.use('/api/scanner', scannerRoutes);
app.use('/api/stocks', stockRoutes);

// Health check
app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

export default app;
