import React from 'react';
import Image from 'next/image';

const ConsultationBanner = () => {
  return (
    <div className="mt-20 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-xl hover:shadow-2xl px-6 py-2 md:px-8 md:py-4 gap-8 border-2 border-[#800000] transition-all duration-300">
      {/* Image Section - Order changes based on screen size */}
      <div className="flex-1 flex justify-center lg:justify-start items-center w-full lg:w-auto">
        <div className="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[380px] md:w-[380px] md:h-[420px] overflow-hidden rounded-xl">
          <Image
            src="/physicalkundali.png"
            alt="Consultation with Best Astrologer"
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
          Book Consultation Call<br />
          With India's Top Astrologers
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl mx-auto lg:mx-0">
          Astrology is a profound science that guides life's journey. For 50 years, we've helped thousands through personalized consultations using Vedic astrology, kundali analysis, numerology, and palmistry. Let our experienced astrologers provide clarity and direction for your life's questions.
        </p>
        <button className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-opacity-50">
          Book Your Session
        </button>
      </div>
    </div>
  );
};

export default ConsultationBanner;