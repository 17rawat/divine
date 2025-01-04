import { ScrollText } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full border-b border-gray-800 bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <ScrollText className="h-6 w-6 text-orange-400" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
