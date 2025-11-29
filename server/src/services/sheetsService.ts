import axios from 'axios';
import { parse } from 'csv-parse/sync';

export interface SheetData {
    profitLoss: number;
    fetchedAt: Date;
}

export class SheetsService {
    private csvUrl: string;

    constructor() {
        this.csvUrl = process.env.SHEETS_CSV_URL || '';
        if (!this.csvUrl) {
            throw new Error('SHEETS_CSV_URL environment variable is not set');
        }
    }

    /**
     * Fetch CSV data from Google Sheets
     */
    async fetchSheetData(): Promise<SheetData> {
        try {
            const response = await axios.get(this.csvUrl, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'SmartTheta-Index-Bot/1.0'
                }
            });

            const csvData = response.data;
            const profitLoss = this.parseCSVData(csvData);

            return {
                profitLoss,
                fetchedAt: new Date()
            };
        } catch (error) {
            console.error('❌ Error fetching sheet data:', error);
            throw new Error(`Failed to fetch Google Sheets data: ${error}`);
        }
    }

    /**
     * Parse CSV data and extract Total Profit value from cell E1
     */
    private parseCSVData(csvData: string): number {
        try {
            const records = parse(csvData, {
                skip_empty_lines: true,
                trim: true
            });

            if (records.length === 0 || !records[0]) {
                throw new Error('CSV data is empty');
            }

            const firstRow = records[0];
            const profitLossValue = firstRow[4]; // Column E (index 4)

            if (profitLossValue === undefined || profitLossValue === null || profitLossValue === '') {
                throw new Error('Total Profit value (cell E1) is empty');
            }

            const profitLoss = parseFloat(profitLossValue);

            if (isNaN(profitLoss)) {
                throw new Error(`Invalid profit/loss value: ${profitLossValue}`);
            }

            return profitLoss;
        } catch (error) {
            console.error('❌ Error parsing CSV data:', error);
            throw new Error(`Failed to parse CSV data: ${error}`);
        }
    }
}
