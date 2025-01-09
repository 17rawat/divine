export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl text-orange-900 text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
