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

  // Handle scroll behavior with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show contact bar only at top and start hiding after 50px scroll
    setIsContactBarVisible(currentScrollY < 50);
    
    // Update scroll state for header
    setIsScrolled(currentScrollY > 10);
    
    // Close mobile menu on scroll
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
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
    { name: "Pancahng", href: "/panchnag" },
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
      {/* Contact Bar */}
      <div
        ref={contactBarRef}
        className={`bg-[#1C1C1C] py-2 px-4 transition-all duration-300 fixed w-full top-0 z-50 ${
          isContactBarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl flex flex-row justify-center items-center gap-x-6 text-xs md:text-sm text-white">
          <div className="flex items-center space-x-2">
            <span>Talk to Astrologer:</span>
            <Link
              href="tel:+919153164444"
              className="font-medium hover:text-[#800000] transition-colors whitespace-nowrap"
            >
              +919153164444
            </Link>
            <Link
              href="tel:+917067771773"
              className="font-medium hover:text-[#800000] transition-colors whitespace-nowrap"
            >
              +917067771773
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <span className="border-l border-white/30 h-4 hidden sm:block"></span>
            <span className="hidden sm:block">Follow us:</span>
            <div className="flex space-x-3">
              {['facebook', 'instagram', 'youtube', 'whatsapp'].map((social) => {
                let href = '#';
                if (social === 'facebook') href = 'https://www.facebook.com/astrodeepakgoutamm/';
                if (social === 'instagram') href = 'https://www.instagram.com/astrodeepakgoutam/';
                if (social === 'youtube') href = 'https://www.youtube.com/@Astrodeepakgoutam';
                if (social === 'whatsapp') href = 'https://wa.me/919153164444?text=namaste%20pandit%20ji';
                return (
                  <Link
                    key={social}
                    href={href}
                    aria-label={social.charAt(0).toUpperCase() + social.slice(1)}
                    className="hover:text-[#800000] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      {social === 'facebook' && (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      )}
                      {social === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      )}
                      {social === 'youtube' && (
                        <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 002.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      )}
                      {social === 'whatsapp' && (
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.989.583 3.84 1.588 5.385L2 22l4.755-1.561A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                      )}
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? "py-2 bg-[#FCFAF8] shadow-md" : "py-3 bg-[#FCFAF8]"
        } ${!isContactBarVisible ? "mt-0" : "mt-[40px] sm:mt-8"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-black hover:text-[#800000] transition-colors">
                  Astro<span className="text-[#800000]">Ank</span>
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
                        ? "bg-[#800000] text-white hover:bg-[#600000] border border-[#800000]" 
                        : "text-gray-700 hover:text-[#800000] hover:bg-gray-50 border border-transparent"
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
                  Astro<span className="text-[#800000]">Time</span>
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
              
              {/* Mobile Footer */}
              <div className="px-5 py-4 border-t bg-gray-50">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <Link href="tel:+000123456789" className="text-gray-700 hover:text-[#800000] transition-colors">
                      +000 123 456789
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <Link href="mailto:info@example.com" className="text-gray-700 hover:text-[#800000] transition-colors">
                      info@example.com
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4 pt-2">
                    <span className="text-gray-700">Follow us:</span>
                    <div className="flex space-x-3">
                      {['facebook', 'instagram', 'youtube', 'whatsapp'].map((social) => {
                        let href = '#';
                        if (social === 'facebook') href = 'https://www.facebook.com/astrodeepakgoutamm/';
                        if (social === 'instagram') href = 'https://www.instagram.com/astrodeepakgoutam/';
                        if (social === 'youtube') href = 'https://www.youtube.com/@Astrodeepakgoutam';
                        if (social === 'whatsapp') href = 'https://wa.me/919153164444?text=namaste%20pandit%20ji';
                        return (
                          <Link
                            key={social}
                            href={href}
                            className="text-gray-700 hover:text-[#800000] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                              {social === 'facebook' && (
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                              )}
                              {social === 'instagram' && (
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                              )}
                              {social === 'youtube' && (
                                <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 002.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              )}
                              {social === 'whatsapp' && (
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.989.583 3.84 1.588 5.385L2 22l4.755-1.561A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                              )}
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
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