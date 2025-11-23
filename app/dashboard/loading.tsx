export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mb-4"></div>
        <p className="text-gray-600 font-medium">載入農業資料中...</p>
      </div>
    </div>
  );
}
