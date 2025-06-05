import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="text-[#1a1f3d] bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#f8f9fb] py-2 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between text-xs text-[#1a1f3d]">
          <div className="flex items-center justify-center sm:justify-start space-x-1 mb-1 sm:mb-0">
            <span>🔮 Talk to Astrologer:</span>
            <Link href="tel:+911234567890" className="font-medium hover:underline">
              +91 123 456 7890
            </Link>
          </div>
          <div className="flex items-center justify-center sm:justify-end space-x-3">
            <Link href="mailto:contact@suriyaastrology.com" className="hover:underline">
              contact@suriyaastrology.com
            </Link>
            <span className="hidden sm:inline border-l border-[#1a1f3d] h-4"></span>
            <span>Follow us:</span>
            <Link href="#" aria-label="Facebook" className="hover:text-[#fca58d]">
              <span className="text-lg">📘</span>
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-[#fca58d]">
              <span className="text-lg">📸</span>
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-[#fca58d]">
              <span className="text-lg">▶️</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="font-playfair text-3xl text-[#1a1f3d] select-none">
            Suriya Jyotish
          </span>
        </div>
        
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-sm font-medium text-[#1a1f3d] w-full md:w-auto mb-4 md:mb-0">
          <li>
            <Link href="#" className="text-[#fca58d] hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#fca58d] hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#fca58d] hover:underline">
              Horoscope
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#fca58d] hover:underline">
              Kundli
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#fca58d] hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#fca58d] hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#fca58d] hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="flex justify-center md:justify-start items-center space-x-4 text-[#1a1f3d] text-lg w-full md:w-auto">
          <button 
            className="bg-[#fca58d] text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-[#e88a6e] transition"
            aria-label="Book Consultation"
          >
            Book Now
          </button>
        </div>
      </nav>    
    </header>
  );
};

export default Header;