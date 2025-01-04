import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center py-6 w-full shrink-0 border-t border-gray-800">
      <p className="text-sm mb-2 sm:mb-0">© 2024 Gita. All rights reserved.</p>
      <nav className="sm:ml-4 flex gap-4 sm:gap-6 overflow-x-auto ">
        <Link
          className="text-sm hover:text-orange-400 transition-colors whitespace-nowrap"
          href="/about"
        >
          About the Gita
        </Link>

        <Link
          className="text-sm hover:text-orange-400 transition-colors whitespace-nowrap"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
