import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-50 border-b border-orange-100 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="ml-4 text-2xl text-orange-900">
              भगवद्गीता
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* <button className="p-2 rounded-md hover:bg-orange-100">
              <Search className="h-5 w-5 text-orange-800" />
            </button>
            <button className="p-2 rounded-md hover:bg-orange-100">
              <BookOpen className="h-5 w-5 text-orange-800" />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
