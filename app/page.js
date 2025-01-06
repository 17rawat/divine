import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl text-orange-900 mb-6">भगवद्गीता</h1>
          <p className="text-2xl text-orange-800 mb-8">
            Timeless Wisdom for Modern Life
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Explore the profound teachings of the Bhagavad Gita, a divine
            dialogue between Lord Krishna and Arjuna
          </p>
          <Link
            href="/chapters"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Begin Reading
          </Link>
        </div>
      </div>
    </div>
  );
}
