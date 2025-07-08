import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FaBook, 
  FaPhoneAlt, 
  FaHeart, 
  FaUserAlt, 
  FaVideo, 
  FaStar, 
  FaBalanceScale,
  FaGem,
  FaBaby,
  FaGraduationCap,
  FaPrayingHands,
  FaChartLine
} from 'react-icons/fa';
import { services } from '../../data/services';

const iconComponents: Record<string, JSX.Element> = {
  FaBook: <FaBook className="text-3xl text-[#5a0808]" />,
  FaPhoneAlt: <FaPhoneAlt className="text-3xl text-[#5a0808]" />,
  FaHeart: <FaHeart className="text-3xl text-[#5a0808]" />,
  FaUserAlt: <FaUserAlt className="text-3xl text-[#5a0808]" />,
  FaVideo: <FaVideo className="text-3xl text-[#5a0808]" />,
  FaStar: <FaStar className="text-3xl text-[#5a0808]" />,
  FaBalanceScale: <FaBalanceScale className="text-3xl text-[#5a0808]" />,
  FaGem: <FaGem className="text-3xl text-[#5a0808]" />,
  FaBaby: <FaBaby className="text-3xl text-[#5a0808]" />,
  FaGraduationCap: <FaGraduationCap className="text-3xl text-[#5a0808]" />,
  FaPrayingHands: <FaPrayingHands className="text-3xl text-[#5a0808]" />,
  FaChartLine: <FaChartLine className="text-3xl text-[#5a0808]" />
};

const Service = () => {
  // Remove the hardcoded services array

  return (
    <React.Fragment>
      <Head>
        <title>Our Services - Premium Astrology Solutions</title>
        <meta
          name="description"
          content="Explore our premium astrology services including Kundali, Lal Kitab, Numerology, and more for personal growth and success."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative min-h-screen py-12 sm:py-16 overflow-hidden">
        {/* Main background image */}
        <div className="absolute inset-0 bg-[url('/service/service-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5a0808]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#5a0808]/10 to-transparent -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
              Our <span className="text-[#8b1e1e]">Premium</span> Services
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#8b1e1e] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-sans leading-relaxed">
              Discover our expertly crafted astrology services, designed to bring clarity, balance, and transformation to your life.
            </p>
          </div>

          <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8e1e1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card content */}
                  <div className="relative p-5 sm:p-6 flex flex-col items-center text-center h-full">
                    {/* Icon with glow effect */}
                    <div className="relative mb-5">
                      <div className="absolute inset-0 rounded-full bg-[#8b1e1e] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-[#f8e1e1] rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        {iconComponents[service.icon]}
                      </div>
                    </div>

                    {/* Title and description */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#5a0808] font-serif mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mb-5">
                      {service.description}
                    </p>

                    {/* Price and duration */}
                    <div className="mb-5 w-full">
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-[#8b1e1e] font-bold">₹{service.price.toLocaleString('en-IN')}</span>
                        <span className="text-gray-500 text-sm">| {service.duration}</span>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="mt-auto w-full">
                      <a
                        href={`/services/${service.slug}`}
                        className="block bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base text-center"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5a0808] mb-4 sm:mb-6">
              Need guidance choosing the right service?
            </h3>
            <button className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
              Contact Our Astrologers
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;