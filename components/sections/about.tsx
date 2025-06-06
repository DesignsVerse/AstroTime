'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

const AboutAstrologer = () => {
  useEffect(() => {
    // Client-side initialization for animations (if needed)
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>About Our Astrologer - Expert Guidance</title>
        <meta
          name="description"
          content="Meet our expert astrologer, Holiya Zaikai, with 25 years of experience in numerology, palmistry, and astrology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="relative bg-gradient-to-b from-white to-[#f8e1e1] py-12 md:py-20 lg:py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Stars */}
        <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-[#800000] clip-star animate-particle"></div>
        <div className="absolute top-[20%] right-[10%] w-2 h-2 bg-[#800000] clip-star animate-particle animation-delay-1000"></div>
        <div className="absolute bottom-[15%] left-[25%] w-2 h-2 bg-[#800000] clip-star animate-particle animation-delay-500"></div>
        <div className="absolute top-[30%] left-[80%] w-2 h-2 bg-[#800000] clip-star animate-particle animation-delay-1500"></div>
        <div className="absolute bottom-[25%] right-[20%] w-2 h-2 bg-[#800000] clip-star animate-particle animation-delay-2000"></div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#120B41] font-merriweather tracking-wide leading-tight">
              Meet & Connect With Our <br />
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#800000] inline-block mt-2 animate-typewriter">
                Expert Astrologer
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#800000] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Astrologer Image */}
            <div className="relative animate-scale-in flex-shrink-0 mx-auto lg:mx-0">
              <div className="absolute -inset-4 border-2 border-dashed border-[#800000] rounded-full animate-rotate"></div>
              <div className="relative overflow-hidden rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-2xl border-4 border-white group">
                <img
                  src="/astrologer-image.jpg"
                  alt="Astrologer Holiya Zaikai"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#800000] text-white px-6 py-2 rounded-full shadow-lg font-montserrat font-semibold text-sm whitespace-nowrap">
                25+ Years Experience
              </div>
            </div>

            {/* Astrologer Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#120B41] font-merriweather mb-6 leading-tight animate-fade-in animation-delay-300">
                Your Life's Challenges, <br className="hidden sm:block" />
                <span className="text-[#800000]">Our Spiritual Solutions</span>
              </h2>
              
              <div className="mb-8">
                <p className="text-gray-700 text-lg md:text-xl font-montserrat leading-relaxed mb-6 animate-fade-in animation-delay-500">
                  With profound knowledge in Vedic astrology, numerology, and palmistry, I provide personalized guidance to help you navigate life's complexities and unlock your true potential.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-in animation-delay-700">
                  <span className="bg-[#800000]/10 text-[#800000] px-4 py-2 rounded-full text-sm font-montserrat font-medium flex items-center gap-2">
                    <i className="fas fa-star text-[#800000]"></i> Vedic Astrology
                  </span>
                  <span className="bg-[#800000]/10 text-[#800000] px-4 py-2 rounded-full text-sm font-montserrat font-medium flex items-center gap-2">
                    <i className="fas fa-hand-paper text-[#800000]"></i> Palmistry
                  </span>
                  <span className="bg-[#800000]/10 text-[#800000] px-4 py-2 rounded-full text-sm font-montserrat font-medium flex items-center gap-2">
                    <i className="fas fa-calculator text-[#800000]"></i> Numerology
                  </span>
                </div>
              </div>

              <div className="mb-10 animate-fade-in animation-delay-900">
                <h3 className="text-2xl md:text-3xl font-bold text-[#120B41] font-merriweather mb-2">Pandit Holiya Zaikai</h3>
                <p className="text-gray-600 text-lg font-montserrat">Master Astrologer & Spiritual Guide</p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-[#800000]">
                    <i className="fas fa-check-circle"></i>
                    <span className="text-gray-700 font-montserrat">5000+ Satisfied Clients</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#800000]">
                    <i className="fas fa-globe"></i>
                    <span className="text-gray-700 font-montserrat">Worldwide Consultations</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in animation-delay-1100">
                <button className="bg-gradient-to-r from-[#800000] to-[#a53838] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg font-montserrat hover:from-[#800000]/90 hover:to-[#a53838]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center">
                  <i className="fas fa-phone-alt"></i> Book Consultation
                </button>
                <button className="bg-white border-2 border-[#800000] text-[#800000] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg font-montserrat hover:bg-[#800000]/10 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 justify-center">
                  <i className="fas fa-comments"></i> Live Chat
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#800000]/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-xl hidden lg:block"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#800000]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-xl hidden lg:block"></div>
        </section>

        {/* CSS styles */}
        <style>
          {`
            .clip-star {
              clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
              opacity: 0.7;
            }
            .animate-rotate {
              animation: rotate 20s linear infinite;
            }
            @keyframes rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-particle {
              animation: particle 5s infinite ease-in-out;
            }
            @keyframes particle {
              0% { transform: translateY(0) scale(1); opacity: 0.7; }
              50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
              100% { transform: translateY(0) scale(1); opacity: 0.7; }
            }
            .animate-fade-in {
              animation: fadeIn 1.2s ease-in-out forwards;
            }
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(15px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-scale-in {
              animation: scaleIn 1s ease-out forwards;
            }
            @keyframes scaleIn {
              0% { transform: scale(0.9); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-pulse {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
            .animate-typewriter {
              overflow: hidden;
              white-space: nowrap;
              animation: typing 2.5s steps(30, end) forwards;
            }
            @keyframes typing {
              from { width: 0; }
              to { width: 100%; }
            }
            .animation-delay-300 { animation-delay: 0.3s; }
            .animation-delay-500 { animation-delay: 0.5s; }
            .animation-delay-700 { animation-delay: 0.7s; }
            .animation-delay-900 { animation-delay: 0.9s; }
            .animation-delay-1000 { animation-delay: 1s; }
            .animation-delay-1100 { animation-delay: 1.1s; }
            .animation-delay-1500 { animation-delay: 1.5s; }
            .animation-delay-2000 { animation-delay: 2s; }
          `}
        </style>
      </div>
    </React.Fragment>
  );
};

export default AboutAstrologer;