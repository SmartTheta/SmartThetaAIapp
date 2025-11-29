// Load environment variables FIRST before any other imports
import dotenv from 'dotenv';
dotenv.config();

// Now import other modules
import app from './app';
import { connectDB } from './config/database';
import { initializeCronJobs } from './jobs/updateIndex';

const PORT = process.env.PORT || 5000;

/**
 * Start the server
 */
async function startServer() {
    try {
        // Connect to MongoDB
        await connectDB();

        // Initialize cron jobs
        initializeCronJobs();

        // Start Express server
        app.listen(PORT, () => {
            console.log('🚀 Server started successfully');
            console.log(`📡 Server running on http://localhost:${PORT}`);
            console.log(`🏥 Health check: http://localhost:${PORT}/health`);
            console.log(`📊 API Base URL: http://localhost:${PORT}/api/index`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n⚠️  Received SIGINT. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n⚠️  Received SIGTERM. Shutting down gracefully...');
    process.exit(0);
});

// Start the server
startServer();
