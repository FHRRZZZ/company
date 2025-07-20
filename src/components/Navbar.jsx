import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/logo-pertamina.png"
            alt="Logo"
            className="h-8 md:h-10"
          />
          <span className="text-xl font-semibold">PERTAMINA</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link to="/aboutpage" className="hover:text-red-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Our Businesses
            </a>
          </li>
          <li>
            <Link to="/investorpage" className="hover:text-red-500 transition">
              Investor Relations
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Media & Info
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Sustainability
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
