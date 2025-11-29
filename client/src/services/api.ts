import axios from 'axios';
import type {
    IndexDataPoint,
    ComparisonData,
    TodayHistoryResponse,
    HistoricalDataResponse
} from '../types/index';

export interface StockData {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
}

export interface ScannerResponse {
    count: number;
    data: StockData[];
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCurrentIndex = async (): Promise<IndexDataPoint> => {
    const response = await api.get<IndexDataPoint>('/index/current');
    return response.data;
};

export const getHistoricalDaily = async (): Promise<TodayHistoryResponse> => {
    const response = await api.get<TodayHistoryResponse>('/index/daily');
    return response.data;
};

export const getComparisonData = async (): Promise<ComparisonData> => {
    const response = await api.get<ComparisonData>('/index/comparison');
    return response.data;
};

export const getHistoricalData = async (
    startDate: string,
    endDate: string
): Promise<HistoricalDataResponse> => {
    const response = await api.get<HistoricalDataResponse>('/index/history', {
        params: { startDate, endDate },
    });
    return response.data;
};

export const refreshData = async (): Promise<IndexDataPoint> => {
    const response = await api.post<IndexDataPoint>('/index/refresh');
    return response.data;
};

// Scanner APIs
export const getTopGainers = async (limit: number = 10): Promise<ScannerResponse> => {
    const response = await api.get<ScannerResponse>('/scanner/top-gainers', {
        params: { limit }
    });
    return response.data;
};

export const getTopLosers = async (limit: number = 10): Promise<ScannerResponse> => {
    const response = await api.get<ScannerResponse>('/scanner/top-losers', {
        params: { limit }
    });
    return response.data;
};

export const getMostActive = async (limit: number = 10): Promise<ScannerResponse> => {
    const response = await api.get<ScannerResponse>('/scanner/most-active', {
        params: { limit }
    });
    return response.data;
};

export const searchStock = async (symbol: string): Promise<StockData> => {
    const response = await api.get<StockData>('/scanner/search', {
        params: { symbol }
    });
    return response.data;
};

export const getGlobalIndices = async (): Promise<ScannerResponse> => {
    const response = await api.get<ScannerResponse>('/scanner/global-indices');
    return response.data;
};

export default api;
