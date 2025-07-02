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

const Service = () => {
  const services = [
    {
      title: 'Lal Kitab Report',
      description: 'Unlock success, prosperity, and positivity with tailored Lal Kitab remedies.',
      icon: <FaBook className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Book Consultation Call',
      description: 'Receive personalized guidance on life, love, career, business, and finances.',
      icon: <FaPhoneAlt className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Couple Kundali',
      description: 'Ensure marital harmony with precise Kundali Milan horoscope matching.',
      icon: <FaHeart className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Personalized Kundali',
      description: 'Comprehensive 10+ year predictions for career, health, love, and marriage.',
      icon: <FaUserAlt className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Mega Numerology Webinar',
      description: 'Join our 2-day live numerology webinar on Zoom for deep insights.',
      icon: <FaVideo className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Lal Kitab Webinar',
      description: 'Explore Lal Kitab astrology in our live Zoom webinar.',
      icon: <FaStar className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Kaal Sarp & Manglik Dosh Report',
      description: 'Balance your life with remedies for Kaal Sarp and Manglik Dosh.',
      icon: <FaBalanceScale className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Fortune Report',
      description: 'Align with cosmic energies to attract success, wealth, and positivity.',
      icon: <FaChartLine className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Baby Name Report',
      description: 'Discover numerologically aligned name suggestions for your child.',
      icon: <FaBaby className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Buy Gemstones',
      description: 'Browse our curated collection of astrological gemstones.',
      icon: <FaGem className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Our Courses',
      description: 'Master Astrology, Numerology, and Vastu with our online courses.',
      icon: <FaGraduationCap className="text-3xl text-[#5a0808]" />,
    },
    {
      title: 'Buy Rudraksha',
      description: 'Explore our authentic Rudraksha collection for spiritual growth.',
      icon: <FaPrayingHands className="text-3xl text-[#5a0808]" />,
    },
  ];

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

      <div className="relative min-h-screen py-16 overflow-hidden">
        {/* Main background image */}
        <div className="absolute inset-0 bg-[url('/service/service-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5a0808]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#5a0808]/10 to-transparent -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
              Our <span className="text-[#8b1e1e]">Premium</span> Services
            </h2>
            <div className="w-24 h-1 bg-[#8b1e1e] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-sans leading-relaxed">
              Discover our expertly crafted astrology services, designed to bring clarity, balance, and transformation to your life.
            </p>
          </div>

          <div className="relative p-8 rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8e1e1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card content */}
                  <div className="relative p-6 flex flex-col items-center text-center h-full">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-[#8b1e1e] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-[#f8e1e1] rounded-full w-20 h-20 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <div className="text-[#5a0808] transition-transform duration-300 group-hover:scale-110">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-[#5a0808] font-bold text-xl font-serif mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed mb-6 px-2">
                      {service.description}
                    </p>

                    {/* Button */}
                    <div className="mt-auto w-full">
                      <button className="relative overflow-hidden bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-medium rounded-lg px-6 py-2 transition-all duration-300 w-full max-w-[180px] shadow-sm group-hover:shadow-md">
                        <span className="relative z-10">Book Now</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-[#5a0808] mb-6">
              Need guidance choosing the right service?
            </h3>
            <button className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Our Astrologers
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;