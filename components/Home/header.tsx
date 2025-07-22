"use client";
import Link from "next/link";
import { FC, useState, useEffect, useRef, useCallback } from "react";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactBarVisible, setIsContactBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const contactBarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll behavior
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsContactBarVisible(currentScrollY < 50);
    setIsScrolled(currentScrollY > 10);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen &&
        !(event.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Navigation items
  const navItems = [
    { name: "Call Consultation", href: "/call-consultation", highlight: true },
    { name: "Panchang", href: "/panchang " },
    { name: "Nemerology", href: "/nemerology-anck" },
    { name: "Services", href: "/services" },
    { name: "Online Puja", href: "https://www.ujjainkalsarp.com/" },
    { name: "Gemstone", href: "https://www.bestrudraksha.com/shop-filter/gemstones" },
    { name: "Rudraksha", href: "https://www.bestrudraksha.com/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header
    
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Contact Bar - Single CTA Number */}
      <div
        ref={contactBarRef}
        className={`bg-[#1C1C1C] py-2 px-4 transition-all duration-300 fixed w-full top-0 z-50 ${
          isContactBarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl flex justify-center items-center text-white text-sm">
          <div className="flex items-center space-x-2">
            <span>Talk to Astrologer:</span>
            <Link
              href="tel:+919153164444"
              className="font-medium hover:text-[#800000] transition-colors whitespace-nowrap"
            >
              +91 91531 64444
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? "py-2 bg-[#FCFAF8] shadow-md" : "py-3 bg-[#FCFAF8]"
        } ${!isContactBarVisible ? "mt-0" : "mt-8"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  <div className="flex items-center justify-between h-16">
    {/* Enhanced Logo */}
    <div className="flex-shrink-0">
  <Link href="/" className="flex items-center">
    <span className="text-3xl font-black text-black hover:text-[#800000] transition-colors
          [text-shadow:_2px_2px_0_#00000030]">
      <span className="relative">
        ASTRO
        <span className="absolute inset-0 -z-10 text-transparent 
              [text-shadow:_2px_2px_0_#800000,_-2px_-2px_0_#800000]">
          ASTRO
        </span>
      </span>
      <span className="text-[#800000] [text-shadow:_2px_2px_0_#00000020]">ANK</span>
    </span>
  </Link>
</div>

    {/* Desktop Navigation */}
    <div className="hidden md:block">
      <div className="ml-4 flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
              item.highlight 
                ? "bg-[#800000] text-white hover:bg-[#600000]" 
                : "text-gray-700 hover:text-[#800000] hover:bg-gray-50"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>

    {/* Mobile menu button */}
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMobileMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#800000] focus:outline-none"
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open main menu</span>
        {!isMobileMenuOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </div>
  </div>
</div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
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
            className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center px-5 py-4 border-b">
                <Link
                  href="/"
                  className="text-xl font-bold text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Astro<span className="text-[#800000]">Ank</span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-500 hover:text-[#800000] focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-2 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 rounded-md text-base font-medium mx-2 transition-colors ${
                        item.highlight 
                          ? "bg-[#800000] text-white hover:bg-[#600000]" 
                          : "text-gray-700 hover:bg-gray-100 hover:text-[#800000]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Mobile Footer - Simplified */}
              <div className="px-5 py-3 border-t bg-gray-50">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <Link href="tel:+919153164444" className="text-gray-700 hover:text-[#800000] transition-colors">
                      +91 91531 64444
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