import React from "react";
import Link from "next/link";
import { Home, Book } from "lucide-react";

const NotFound = () => {
  return (
    <main className="bg-orange-50  flex items-center justify-center mt-20">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-orange-900 mb-4 font-semibold">
          404 - Page Not Found
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          The verse or chapter you are looking for does not exist
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Return Home
          </Link>
          <Link
            href="/chapters"
            className="bg-orange-100 text-orange-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-200 transition-colors inline-flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            <Book className="w-4 h-4 sm:w-5 sm:h-5" />
            Explore Chapters
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
