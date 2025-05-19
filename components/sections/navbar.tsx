"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener('routeChange', handleRouteChange);
    return () => window.removeEventListener('routeChange', handleRouteChange);
  }, []);

  return (
    <>
      <nav className="fixed top-2 left-1/2 z-50 w-full max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-2rem)] -translate-x-1/2">
        <div className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 transition-all duration-300 ease-out ${
          isScrolled 
            ? "rounded-full bg-white/95 shadow-lg backdrop-blur-md border border-gray-100" 
            : "rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100/50"
        }`}>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.avif" 
                alt="Novoflow AI Receptionist" 
                width={120} 
                height={40} 
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              asChild 
              className={`transition-all hover:bg-gray-100/50 ${
                isScrolled ? "text-gray-700" : "text-gray-600"
              }`}
            >
              <Link href="/features">Solutions</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className={`transition-all hover:bg-gray-100/50 ${
                isScrolled ? "text-gray-700" : "text-gray-600"
              }`}
            >
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className={`transition-all ${
                isScrolled 
                  ? "border-gray-300 bg-transparent hover:bg-gray-100/30" 
                  : "border-gray-200 bg-transparent hover:bg-gray-100/30"
              } text-gray-700`}
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button 
              asChild 
              className={`bg-[#146EF5] hover:bg-[#146EF5]/90 text-white transition-transform hover:scale-[1.02] ${
                isScrolled ? "shadow-md" : "shadow-sm"
              }`}
            >
              <Link href="mailto:founders@novoflow.com">Join Founding Partners</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
        isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } pt-20 px-6`}>
        <div className="flex flex-col space-y-4">
          <Button 
            variant="ghost" 
            asChild 
            className="w-full justify-start py-6 text-lg text-gray-700 hover:bg-gray-100/50"
          >
            <Link href="/features">Solutions</Link>
          </Button>
          <Button 
            variant="ghost" 
            asChild 
            className="w-full justify-start py-6 text-lg text-gray-700 hover:bg-gray-100/50"
          >
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button 
            variant="outline" 
            asChild 
            className="w-full justify-start py-6 text-lg text-gray-700 border-gray-200 hover:bg-gray-100/30"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button 
            asChild 
            className="w-full justify-start py-6 text-lg bg-[#146EF5] hover:bg-[#146EF5]/90 text-white"
          >
            <Link href="mailto:founders@novoflow.com">Join Founding Partners</Link>
          </Button>
        </div>
      </div>
    </>
  );
}