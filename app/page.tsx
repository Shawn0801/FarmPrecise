import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <main className="text-center px-4">
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          🌾 FarmPrecise
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          農業資料開放平台儀表板
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
        >
          前往儀表板
        </Link>
      </main>
    </div>
  );
}
