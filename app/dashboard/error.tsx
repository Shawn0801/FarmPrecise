'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">發生錯誤</h2>
        <p className="text-gray-600 mb-6">無法載入農業資料，請稍後再試</p>
        <button
          onClick={reset}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
        >
          重新載入
        </button>
      </div>
    </div>
  );
}
