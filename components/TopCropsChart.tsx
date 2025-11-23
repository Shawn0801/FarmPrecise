interface TopCrop {
  name: string;
  count: number;
}

interface TopCropsChartProps {
  data: TopCrop[];
}

export default function TopCropsChart({ data }: TopCropsChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🏆 熱門農產品</h2>
        <p className="text-gray-500 text-center py-8">暫無資料</p>
      </div>
    );
  }

  const maxCount = Math.max(...data.map(item => item.count));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">🏆 熱門農產品</h2>
      <div className="space-y-4">
        {data.map((crop, index) => {
          const percentage = (crop.count / maxCount) * 100;
          const colors = [
            'bg-green-500',
            'bg-blue-500',
            'bg-yellow-500',
            'bg-purple-500',
            'bg-red-500'
          ];

          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{crop.name}</span>
                <span className="text-sm text-gray-500">{crop.count} 筆交易</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${colors[index % colors.length]} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
