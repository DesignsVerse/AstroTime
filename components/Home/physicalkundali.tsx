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
            alt="Astro Deepak Goutam Personal Kundali Delivery in Ujjain"
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
          Personal Kundali Delivery<br />
          by Astro Deepak Goutam
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl mx-auto lg:mx-0">
          Experience the expertise of Astro Deepak Goutam, Ujjain’s trusted Vedic astrologer, who personally delivers physical Kundali services to your doorstep. Get detailed horoscope analysis, personalized astrology consultations, and insights into your career, relationships, and future, all crafted with authentic Vedic wisdom.
        </p>
        <Link href="/services/kundli-ghar-tak">
          <button className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-opacity-50">
            Book Personal Kundali Service
          </button>
        </Link>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Personal Physical Kundali Delivery",
            "provider": {
              "@type": "Person",
              "name": "Astro Deepak Goutam",
              "description": "Ujjain’s renowned Vedic astrologer, personally delivering physical Kundali and astrology consultations to your home.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ujjain",
                "addressRegion": "Madhya Pradesh",
                "addressCountry": "India"
              },
              "url": "http://astroank.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ujjain"
            },
            "description": "Astro Deepak Goutam personally delivers physical Kundali services and Vedic astrology consultations at your doorstep in Ujjain, offering insights into career, relationships, and life.",
            "offers": {
              "@type": "Offer",
              "url": "http://astroank.com/services/kundli-ghar-tak",
              "name": "Personal Kundali Delivery at Home"
            }
          })
        }}
      />
    </div>
  );
};

export default PhysicalKundaliBanner;