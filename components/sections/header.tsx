"use client";
import Link from "next/link";
import { FC, useState, useEffect, useRef } from "react";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactBarVisible, setIsContactBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const contactBarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      
      // Show contact bar only at top
      setIsContactBarVisible(currentScrollY < 10);
      // Update scroll state for header
      setIsScrolled(currentScrollY > 10);
      
      // Close mobile menu on scroll
      if (currentScrollY !== lastScrollY && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
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
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen &&
        // Check if the click is not on the menu button
        !(event.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Updated navigation items
  const navItems = [
    { name: "Call Consultation", href: "/call-consultation" },
    { name: "Gemstone", href: "/gemstone" },
    { name: "Free Calculator", href: "/free-calculator" },
    { name: "Panchang", href: "/panchang" },
    { name: "Horoscope", href: "/horoscope" },
    { name: "Rudraksha", href: "/rudraksha" },
    { name: "Online Puja Services", href: "/online-puja" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "About", href: "/about" },
    { name: "Customer Support", href: "/customer-support" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? "bg-[#1C1C1C] shadow-md" : "bg-[#1C1C1C]"
      }`}
    >
      {/* Contact Bar */}
      <div
        ref={contactBarRef}
        className={`bg-[#1C1C1C] py-2 px-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-gray-700 ${
          isContactBarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 absolute"
        }`}
      >
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-white">
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
            <span className="border-l border-white/30 h-4"></span>
            <span>Follow us on</span>
            <div className="flex space-x-2 sm:space-x-3">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-[#800000] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                FB
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-[#800000] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                In
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-[#800000] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tw
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full px-2 sm:px-3 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled ? "py-3 bg-white" : "py-4 bg-white"
        } text-black ${!isContactBarVisible ? "mt-0" : ""}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between px-2 sm:px-3">
            <Link
              href="/"
              className={`font-playfair select-none flex items-center text-black space-x-2 hover:text-[#800000] transition-colors duration-200 text-2xl `}
            >
              <span className="tracking-wide">Astro Time</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#800000] p-2 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-black"
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
            className={`hidden md:flex space-x-4 text-sm font-medium items-center ${
              isScrolled ? "py-1" : "py-2"
            } text-black px-2 sm:px-3`}
          >
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`hover:text-[#800000] transition-colors duration-200 ${
                    item.name === "Call Consultation" ? "text-[#800000] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu - Overlay and Side Drawer */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
          }}
        >
          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Side Drawer */}
          <div
            ref={mobileMenuRef}
            className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-full overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <Link
                  href="/"
                  className="font-playfair text-black text-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Astro Time
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="text-black focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <ul className="py-4 px-2 space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-md ${
                        item.name === "Call Consultation" 
                          ? "bg-white text-[#800000]" 
                          : "text-black hover:bg-gray-800"
                      } font-medium transition-colors duration-200`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Contact Info in Mobile Menu */}
              <div className="p-4 border-t border-gray-700 mt-auto">
                <div className="text-black text-sm space-y-3">
                  <div className="flex items-center space-x-2">
                    <span>Call:</span>
                    <Link href="tel:+000123456789" className="hover:underline">
                      +000 123 456789
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Email:</span>
                    <Link href="mailto:info@example.com" className="hover:underline">
                      info@example.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;