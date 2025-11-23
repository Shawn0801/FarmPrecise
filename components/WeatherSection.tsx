'use client';

import { useEffect, useState } from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  condition: string;
  icon: string;
}

interface WeatherAlert {
  id: number;
  type: 'warning' | 'info' | 'success';
  title: string;
  message: string;
  time: string;
}

export default function WeatherSection() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([
    {
      location: '台北',
      temperature: 26,
      humidity: 75,
      rainfall: 0,
      condition: '多雲',
      icon: '⛅'
    },
    {
      location: '台中',
      temperature: 28,
      humidity: 68,
      rainfall: 0,
      condition: '晴天',
      icon: '☀️'
    },
    {
      location: '高雄',
      temperature: 30,
      humidity: 82,
      rainfall: 5,
      condition: '陰天',
      icon: '☁️'
    },
    {
      location: '花蓮',
      temperature: 25,
      humidity: 88,
      rainfall: 15,
      condition: '小雨',
      icon: '🌧️'
    }
  ]);

  const [alerts, setAlerts] = useState<WeatherAlert[]>([
    {
      id: 1,
      type: 'warning',
      title: '高溫警示',
      message: '未來三天預計高溫達 35°C，請注意作物灌溉與遮陰',
      time: '2小時前'
    },
    {
      id: 2,
      type: 'info',
      title: '降雨預報',
      message: '明日下午可能有局部陣雨，建議提前準備排水措施',
      time: '5小時前'
    },
    {
      id: 3,
      type: 'success',
      title: '適宜耕作',
      message: '本週氣候穩定，適合進行田間作業與施肥',
      time: '1天前'
    }
  ]);

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-red-50 border-red-300 text-red-800';
      case 'info':
        return 'bg-blue-50 border-blue-300 text-blue-800';
      case 'success':
        return 'bg-green-50 border-green-300 text-green-800';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      case 'success':
        return '✅';
      default:
        return '📌';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">🌤️ 農業氣象</h1>
        <p className="text-gray-500 mt-2">即時氣象資訊與農業氣象提醒</p>
      </div>

      {/* Weather Alerts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🔔</span>
          <span>氣象提醒</span>
        </h2>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`border-l-4 p-4 rounded-r-lg ${getAlertColor(alert.type)}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{alert.title}</h3>
                  <p className="text-sm mb-2">{alert.message}</p>
                  <p className="text-xs opacity-75">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Cards */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">主要產區天氣</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weatherData.map((weather, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">{weather.location}</h3>
                <span className="text-4xl">{weather.icon}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">溫度</span>
                  <span className="text-2xl font-bold text-orange-600">
                    {weather.temperature}°C
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">濕度</span>
                  <span className="font-medium text-blue-600">{weather.humidity}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">降雨量</span>
                  <span className="font-medium text-green-600">{weather.rainfall}mm</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">{weather.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Tips */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>💡</span>
          <span>農事建議</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h3 className="font-semibold text-green-700 mb-2">🌱 本週適宜作業</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 水稻田間管理與病蟲害防治</li>
              <li>• 蔬菜施肥與除草作業</li>
              <li>• 果樹修剪與整枝</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-700 mb-2">⚠️ 注意事項</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 注意午後雷陣雨，提前收割成熟作物</li>
              <li>• 高溫時段避免噴灑農藥</li>
              <li>• 保持田間排水系統暢通</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Update Time */}
      <div className="text-center text-sm text-gray-500">
        <p>更新時間: {new Date().toLocaleString('zh-TW')}</p>
      </div>
    </div>
  );
}
