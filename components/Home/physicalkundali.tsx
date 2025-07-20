import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PhysicalKundaliBanner = () => {
  return (
    <div className="mt-20 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-xl hover:shadow-2xl px-6 py-2 md:px-8 md:py-4 gap-8 border-2 border-[#800000] transition-all duration-300">
      {/* Image Section - Order changes based on screen size */}
      <div className="flex-1 flex justify-center lg:justify-start items-center w-full lg:w-auto">
        <div className="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[380px] md:w-[380px] md:h-[420px] overflow-hidden rounded-xl">
          <Image
            src="/physicalkundali.png"
            alt="Physical Kundali Services at Home"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      
      {/* Text Content Section */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800000] mb-4 font-serif leading-tight">
          Get Physical Kundali<br />
          Services at Your Home
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl mx-auto lg:mx-0">
          Experience authentic Vedic astrology services in the comfort of your home. Our expert astrologers provide physical kundali analysis, horoscope reading, and personalized consultations at your doorstep. Get detailed insights about your life, career, relationships, and future through traditional kundali services.
        </p>
        <Link href="/services/kundli-ghar-tak">
          <button className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-opacity-50">
            Book Home Service
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhysicalKundaliBanner;