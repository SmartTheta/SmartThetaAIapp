export interface IndexDataPoint {
    profitLoss: number;
    timestamp: string;
}

export interface ComparisonData {
    today: IndexDataPoint | null;
    yesterday: IndexDataPoint | null;
    difference: number | null;
    percentageChange: number | null;
}

export interface HistoricalDataPoint {
    date: string;
    profitLoss: number;
    timestamp: string;
}

export interface TodayHistoryResponse {
    count: number;
    data: HistoricalDataPoint[];
}

export interface HistoricalDataResponse {
    startDate: string;
    endDate: string;
    count: number;
    data: HistoricalDataPoint[];
}
