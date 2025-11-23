'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import WeatherSection from '@/components/WeatherSection';
import TradingSection from '@/components/TradingSection';
import NewsSection from '@/components/NewsSection';

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState<'weather' | 'trading' | 'news'>('weather');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="lg:hidden">
                <h1 className="text-2xl font-bold text-green-700">FarmPrecise</h1>
              </div>
              <div className="hidden lg:block">
                <h1 className="text-2xl font-bold text-gray-800">
                  {activeTab === 'weather' && '🌤️ 農業氣象'}
                  {activeTab === 'trading' && '📊 交易行情'}
                  {activeTab === 'news' && '📰 最新消息'}
                </h1>
              </div>
              <Link
                href="/"
                className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
              >
                <span>←</span>
                <span className="hidden sm:inline">返回首頁</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 overflow-auto">
          {activeTab === 'weather' && <WeatherSection />}
          {activeTab === 'trading' && <TradingSection />}
          {activeTab === 'news' && <NewsSection />}
        </main>
      </div>
    </div>
  );
}
