import cron from 'node-cron';
import { IndexService } from '../services/indexService';

const indexService = new IndexService();

/**
 * Update index data from Google Sheets
 */
async function updateIndexJob() {
    try {
        console.log('🔄 Fetching latest data from Google Sheets...');
        await indexService.updateIndexData();
        console.log('✅ Data updated successfully');
    } catch (error) {
        console.error('❌ Error in scheduled update:', error);
    }
}

/**
 * Initialize cron jobs - Daily update at 5 PM
 */
export function initializeCronJobs() {
    console.log('⏰ Initializing cron jobs...');

    // Run daily at 5:00 PM (17:00) to fetch and save daily closing value
    cron.schedule('0 17 * * *', async () => {
        console.log('🕔 Running daily update at 5:00 PM...');
        await updateIndexJob();
    });

    console.log('✅ Cron jobs initialized');
    console.log('📅 Schedule: Daily at 5:00 PM');

    // Run initial update on server start
    console.log('🚀 Running initial update...');
    updateIndexJob();
}
