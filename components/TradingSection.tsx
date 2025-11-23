'use client';

import { useEffect, useState } from 'react';
import CropPriceTable from './CropPriceTable';
import TopCropsChart from './TopCropsChart';
import StatCard from './StatCard';
import { getCropPrices, getAgriculturalStats, getTopCrops, CropPrice } from '@/lib/api';

export default function TradingSection() {
  const [loading, setLoading] = useState(true);
  const [cropPrices, setCropPrices] = useState<CropPrice[]>([]);
  const [topCrops, setTopCrops] = useState<{ name: string; count: number }[]>([]);
  const [stats, setStats] = useState({
    totalFarms: 758234,
    totalArea: 795683,
    totalProduction: 1234567,
    activeMarkets: 18
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [prices, statsData, crops] = await Promise.all([
          getCropPrices(),
          getAgriculturalStats(),
          getTopCrops()
        ]);
        setCropPrices(prices);
        setStats(statsData);
        setTopCrops(crops);
      } catch (error) {
        console.error('Failed to fetch trading data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-green-600 mb-4"></div>
          <p className="text-gray-600">載入交易資料中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">📊 交易行情</h1>
        <p className="text-gray-500 mt-2">農產品批發市場即時交易資訊</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="農戶總數"
          value={stats.totalFarms}
          icon="👨‍🌾"
          description="全台登記農戶數量"
          bgColor="bg-gradient-to-br from-green-100 to-green-50"
        />
        <StatCard
          title="耕地面積"
          value={`${stats.totalArea.toLocaleString()}`}
          icon="🌱"
          description="總耕地面積 (公頃)"
          bgColor="bg-gradient-to-br from-blue-100 to-blue-50"
        />
        <StatCard
          title="年產量"
          value={stats.totalProduction}
          icon="🚜"
          description="農產品年產量 (公噸)"
          bgColor="bg-gradient-to-br from-yellow-100 to-yellow-50"
        />
        <StatCard
          title="批發市場"
          value={stats.activeMarkets}
          icon="🏪"
          description="活躍批發市場數量"
          bgColor="bg-gradient-to-br from-purple-100 to-purple-50"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopCropsChart data={topCrops} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📈 市場動態</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm font-medium text-gray-700">價格穩定</p>
              <p className="text-xs text-gray-500 mt-1">主要蔬果價格保持穩定</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm font-medium text-gray-700">交易活躍</p>
              <p className="text-xs text-gray-500 mt-1">今日交易量較昨日增加</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-sm font-medium text-gray-700">季節轉換</p>
              <p className="text-xs text-gray-500 mt-1">當季作物開始上市</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-sm font-medium text-gray-700">產量預估</p>
              <p className="text-xs text-gray-500 mt-1">下季產量預期樂觀</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Table */}
      <CropPriceTable data={cropPrices} />

      {/* Update Time */}
      <div className="text-center text-sm text-gray-500">
        <p>資料來源: 行政院農業委員會農業資料開放平台</p>
        <p className="mt-1">更新時間: {new Date().toLocaleString('zh-TW')}</p>
      </div>
    </div>
  );
}
