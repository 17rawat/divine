import { ScrollText } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font tracking-tight text-primary mb-6">
              Discover the Wisdom of
              <span className="block text-primary">Bhagavad Gita</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore ancient wisdom for modern life. Read, learn, and
              understand the timeless teachings of the Bhagavad Gita in a simple
              and accessible way.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/chapters"
                size="lg"
                className="gap-2 border border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center text-lg text-gray hover:bg-gray-300 hover:text-black transition-colors"
              >
                <ScrollText className="w-5 h-5" />
                Start Reading
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
