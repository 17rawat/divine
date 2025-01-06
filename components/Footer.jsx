import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-gray-600">
            <li>
              <Link href="/about" className="hover:text-orange-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/chapters" className="hover:text-orange-600">
                Chapters
              </Link>
            </li>
            <li>
              <Link href="/guide" className="hover:text-orange-600">
                Guide
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-1 text-orange-600" />
          <span>for spiritual seekers</span>
        </div>
      </div>
    </footer>
  );
}
