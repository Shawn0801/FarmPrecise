interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  description: string;
  bgColor: string;
}

export default function StatCard({ title, value, icon, description, bgColor }: StatCardProps) {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-2">{description}</p>
        </div>
        <div className="text-5xl opacity-50">{icon}</div>
      </div>
    </div>
  );
}
