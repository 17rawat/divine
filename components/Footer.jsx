import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
      <p className="text-sm">© 2024 Gita. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm hover:text-white transition-colors" href="#">
          Terms of Service
        </Link>
        <Link className="text-sm hover:text-white transition-colors" href="#">
          Privacy
        </Link>
        <Link className="text-sm hover:text-white transition-colors" href="#">
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
