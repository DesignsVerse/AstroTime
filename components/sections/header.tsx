"use client";
import Link from "next/link";
import { FC, useState, useEffect, useRef } from "react";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactBarVisible, setIsContactBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const contactBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current && contactBarRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isContactBarVisible]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Only show contact bar when at the very top
      if (currentScrollY < 10) {
        setIsContactBarVisible(true);
      } else {
        setIsContactBarVisible(false);
      }

      // Compact header when scrolled
      setIsScrolled(currentScrollY > 10);
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar - Smooth hide/show on scroll */}
      <div
        ref={contactBarRef}
        className={`bg-white py-2 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-gray-200 ${
          isContactBarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 absolute"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-[#1a1f3d]">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span>Talk to Astrologer:</span>
            <Link
              href="tel:+000123456789"
              className="font-medium hover:underline whitespace-nowrap"
            >
              +000 123 456789
            </Link>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="mailto:info@example.com"
              className="hover:underline whitespace-nowrap"
            >
              info@example.com
            </Link>
            <span className="border-l border-[#1a1f3d]/30 h-4"></span>
            <span>Follow us on</span>
            <div className="flex space-x-2 sm:space-x-3">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-[#e88a6e] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                FB
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-[#e88a6e] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                In
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-[#e88a6e] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tw
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Becomes compact when scrolled */}
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled ? "py-3 bg-white" : "py-4 sm:py-5 bg-transparent"
        } ${isScrolled ? "text-[#1a1f3d]" : "text-[#1a1f3d]"} ${
          !isContactBarVisible ? "mt-0" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`font-playfair select-none flex items-center space-x-2 hover:text-[#e88a6e] transition-colors duration-200 ${
                isScrolled ? "text-2xl text-[#1a1f3d]" : "text-2xl sm:text-3xl text-[#1a1f3d]"
              }`}
            >
              <svg
                className="w-6 h-6 text-[#e88a6e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="tracking-wide">Suriya</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#e88a6e] p-2 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`w-6 h-6 ${isScrolled ? "text-[#1a1f3d]" : "text-[#1a1f3d]"}`}
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
            className={`hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-sm font-medium items-center ${
              isScrolled ? "text-[#1a1f3d]" : "text-[#1a1f3d]"
            } ${isScrolled ? "py-1" : "py-2"}`}
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Horoscope", href: "/horoscope" },
              { name: "Shop", href: "/shop", hasDropdown: true },
              { name: "FAQ", href: "/faq" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`${
                    item.name === "Home" ? "text-[#e88a6e] font-semibold" : ""
                  } hover:text-[#e88a6e] transition-colors duration-200 flex items-center`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
            <li className="flex items-center space-x-2">
              <Link href="/search" aria-label="Search">
                <svg
                  className="w-5 h-5 hover:text-[#e88a6e] transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
              <Link href="/profile" aria-label="Profile">
                <svg
                  className="w-5 h-5 hover:text-[#e88a6e] transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link href="/cart" aria-label="Cart">
                <svg
                  className="w-5 h-5 hover:text-[#e88a6e] transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden py-2 px-4 mt-2 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          } ${isScrolled ? "bg-white shadow-md rounded-lg" : "bg-[#f8f9fb] rounded-lg"}`}
        >
          <ul className={`space-y-3 ${isScrolled ? "text-[#1a1f3d]" : "text-[#1a1f3d]"}`}>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Horoscope", href: "/horoscope" },
              { name: "Shop", href: "/shop" },
              { name: "FAQ", href: "/faq" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 px-2 rounded-md ${
                    item.name === "Home" ? "bg-[#e88a6e]/10 text-[#e88a6e]" : ""
                  } font-medium hover:text-[#e88a6e] hover:bg-gray-100 transition-colors duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;