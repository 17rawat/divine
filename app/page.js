import { ScrollText, Book, Headphones, Heart } from "lucide-react";
import Link from "next/link";

import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import hero from "@/assets/hero.jpg";

export default function Home() {
  return (
    <main className="bg-orange-50">
      <section className="pt-14 pb-20 min-h-[calc(100vh-3.5rem)]">
        <Image
          src={hero}
          alt="Bhagavad Gita hero image"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-16 md:pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-semibold">
            श्रीमद्भगवद्गीता
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-200 mb-4 sm:mb-6">
            Divine Wisdom for Modern Life
          </p>
          <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Explore the timeless teachings of Lord Krishna through the sacred
            dialogue of the Bhagavad Gita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chapters"
              className="bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Book className="w-4 h-4 sm:w-5 sm:h-5" />
              Begin Reading
            </Link>
            <Link
              href="/lectures"
              className="bg-orange-100 text-orange-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-200 transition-colors inline-flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
              Listen to Lectures
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-orange-900 text-center mb-10 sm:mb-16">
            Experience the Divine Knowledge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <FeatureCard
              icon={<Book className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />}
              title="Original Sanskrit"
              description="Read and study the original Sanskrit verses with accurate transliterations"
            />
            <FeatureCard
              icon={
                <ScrollText className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              }
              title="Detailed Commentary"
              description="Access in-depth explanations and commentaries from realized spiritual masters"
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />}
              title="Daily Inspiration"
              description="Receive daily verses and insights to inspire your spiritual journey"
            />
          </div>
        </div>
      </section>

      <section className="bg-orange-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-orange-900 mb-4 sm:mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">
            Join thousands of spiritual seekers discovering the eternal wisdom
            of the Bhagavad Gita
          </p>
          <Link
            href="/chapters"
            className="bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            Explore Chapters
          </Link>
        </div>
      </section>
    </main>
  );
}
