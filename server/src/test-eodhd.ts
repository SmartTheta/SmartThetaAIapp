/**
 * Test script for EODHD API integration
 * Run with: npx ts-node src/test-eodhd.ts
 */

import dotenv from 'dotenv';
dotenv.config();

import { marketDataService } from './services/marketDataService';

async function testEODHD() {
    console.log('🧪 Testing EODHD API Integration...\n');

    try {
        // Test 1: Real-time quote
        console.log('1️⃣ Testing Real-time Quote (RELIANCE.NSE)...');
        const quote = await marketDataService.getRealTimeQuote('RELIANCE.NSE');
        if (quote) {
            console.log('✅ Success:', {
                symbol: quote.code,
                price: quote.close,
                change: quote.change,
                changePercent: quote.change_p
            });
        } else {
            console.log('❌ Failed to fetch quote');
        }
        console.log('');

        // Test 2: Search stock
        console.log('2️⃣ Testing Stock Search (Apple)...');
        const searchResult = await marketDataService.searchStock('Apple');
        if (searchResult) {
            console.log('✅ Success:', searchResult);
        } else {
            console.log('❌ Failed to search stock');
        }
        console.log('');

        // Test 3: Top gainers
        console.log('3️⃣ Testing Top Gainers (limit 3)...');
        const gainers = await marketDataService.getTopGainers(3);
        if (gainers.length > 0) {
            console.log('✅ Success:', gainers);
        } else {
            console.log('❌ No gainers found');
        }
        console.log('');

        // Test 4: Global indices
        console.log('4️⃣ Testing Global Indices...');
        const indices = await marketDataService.getGlobalIndices();
        if (indices.length > 0) {
            console.log('✅ Success: Found', indices.length, 'indices');
            console.log('Sample:', indices[0]);
        } else {
            console.log('❌ No indices found');
        }
        console.log('');

        // Test 5: Historical data
        console.log('5️⃣ Testing Historical Data (AAPL.US, 1 month)...');
        const history = await marketDataService.getStockHistory('AAPL.US', '1mo');
        if (history.length > 0) {
            console.log('✅ Success: Found', history.length, 'data points');
            console.log('Latest:', history[history.length - 1]);
        } else {
            console.log('❌ No historical data found');
        }
        console.log('');

        console.log('✨ All tests completed!');
    } catch (error) {
        console.error('❌ Error during testing:', error);
    }
}

// Run tests
testEODHD();
