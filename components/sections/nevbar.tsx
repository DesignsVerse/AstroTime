"use client";
import Link from "next/link";
import { FC, useState, useEffect } from "react";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactBarVisible, setIsContactBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      setIsContactBarVisible(!scrolled);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div
        className={`bg-[#f8f9fb] py-2 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          isContactBarVisible && !isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-[#1a1f3d]">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span className="hidden sm:inline">🔮</span>
            <span>Talk to Astrologer:</span>
            <Link
              href="tel:+911234567890"
              className="font-medium hover:underline whitespace-nowrap"
            >
              +91 123 456 7890
            </Link>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="mailto:contact@suriyaastrology.com"
              className="hover:underline whitespace-nowrap hidden sm:inline"
            >
              contact@suriyaastrology.com
            </Link>
            <span className="hidden sm:inline border-l border-[#1a1f3d] h-4"></span>
            <span className="hidden sm:inline">Follow us:</span>
            <div className="flex space-x-2 sm:space-x-3">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-[#fca58d] transition-colors duration-200"
              >
                <span className="text-base sm:text-lg">📘</span>
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-[#fca58d] transition-colors duration-200"
              >
                <span className="text-base sm:text-lg">📸</span>
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-[#fca58d] transition-colors duration-200"
              >
                <span className="text-base sm:text-lg">▶️</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 ${
          isScrolled ? "text-[#1a1f3d]" : "text-white"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`font-playfair text-2xl sm:text-3xl select-none hover:text-[#fca58d] transition-colors duration-200 ${
                isScrolled ? "text-[#1a1f3d]" : "text-white"
              }`}
            >
              Suriya Jyotish
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#fca58d] p-2 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`w-6 h-6 ${isScrolled ? "text-[#1a1f3d]" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul
            className={`hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-sm font-medium ${
              isScrolled ? "text-[#1a1f3d]" : "text-white"
            }`}
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Horoscope", href: "/horoscope" },
              { name: "Kundli", href: "/kundli" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    item.name === "Home" && isScrolled ? "text-[#fca58d]" : ""
                  } hover:text-[#fca58d] hover:underline py-2 block transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/consultation"
              className="bg-[#fca58d] hover:bg-[#e88a6e] text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors duration-200 whitespace-nowrap inline-block shadow-md hover:shadow-lg"
              aria-label="Book Consultation"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden py-2 px-4 mt-2 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          } ${isScrolled ? "bg-white shadow-md rounded-lg" : "bg-[#1a1f3d]/80 backdrop-blur-sm rounded-lg"}`}
        >
          <ul className={`space-y-3 ${isScrolled ? "text-[#1a1f3d]" : "text-white"}`}>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Horoscope", href: "/horoscope" },
              { name: "Kundli", href: "/kundli" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 ${
                    item.name === "Home" && isScrolled ? "text-[#fca58d]" : ""
                  } font-medium hover:text-[#fca58d] transition-colors duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/consultation"
                className="bg-[#fca58d] hover:bg-[#e88a6e] text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors duration-200 whitespace-nowrap inline-block w-full text-center shadow-md hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;