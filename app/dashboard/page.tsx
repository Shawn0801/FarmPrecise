import Link from 'next/link';
import StatCard from '@/components/StatCard';
import CropPriceTable from '@/components/CropPriceTable';
import TopCropsChart from '@/components/TopCropsChart';
import { getCropPrices, getAgriculturalStats, getTopCrops } from '@/lib/api';

export default async function Dashboard() {
  // 並行取得所有資料
  const [cropPrices, stats, topCrops] = await Promise.all([
    getCropPrices(),
    getAgriculturalStats(),
    getTopCrops()
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-green-700">🌾 FarmPrecise</h1>
              <p className="text-sm text-gray-500 mt-1">農業資料開放平台儀表板</p>
            </div>
            <Link
              href="/"
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              ← 返回首頁
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 統計卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* 圖表區域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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

        {/* 交易行情表格 */}
        <CropPriceTable data={cropPrices} />

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>資料來源: 行政院農業委員會農業資料開放平台</p>
          <p className="mt-1">更新時間: {new Date().toLocaleString('zh-TW')}</p>
        </footer>
      </main>
    </div>
  );
}
