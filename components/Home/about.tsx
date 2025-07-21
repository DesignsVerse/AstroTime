'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FaAward,
  FaStarAndCrescent,
  FaHeart,
  FaBriefcase,
  FaGem,
  FaHandHoldingHeart,
  FaGlobeAsia,
  FaCalendarAlt,
  FaEnvelope,
  FaBookOpen,
  FaChalkboardTeacher,
  FaPrayingHands
} from 'react-icons/fa';

const AboutAstrologer = () => {
  useEffect(() => {
    // Client-side initialization (if needed)
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>About Pandit Holiya Zaikai - Vedic Astrologer</title>
        <meta
          name="description"
          content="Pandit Holiya Zaikai, with 25+ years of experience, offers expert Vedic astrology consultations for life guidance and spiritual growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-[#FCFAF8] py-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Main Card */}
          <div className="bg-white rounded-lg shadow-md border border-[#e8e0d7] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Enhanced Astrologer Image Section */}
              <div className="lg:w-2/5 relative h-full overflow-hidden">
                <motion.div 
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[580px] lg:min-h-[300px]"
                >
                  {/* Background Image */}
                  <motion.img
                    src="/service/service-bg-1.png"
                    alt="Background"
                    className="w-full h-full min-h-[200px] lg:min-h-[300px] object-cover object-top"
                    loading="eager"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                   <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <motion.img
                      src="/bg.webp"
                      alt="Pandit Holiya Zaikai"
                      className="w-3/2 h-auto object-contain rounded-full mt-16"
                      style={{ maxHeight: '60%' }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                    />
                  </motion.div>
                  {/* Overlay Image (Astrologer) */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <img
                      src="/name.jpg"
                      alt="Pandit Holiya Zaikai"
                      className="w-3/2 h-auto object-contain rounded-full  mt-8"
                      style={{ maxHeight: '60%' }}
                    />
                  </motion.div>
                 
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a0a]/80 via-transparent to-transparent"></div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#8b1e1e] inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3"
                    >
                      <FaAward className="mr-1" /> EST. 1992
                    </motion.div>
                    <h1 className="text-2xl lg:text-3xl font-bold mt-3 font-['Playfair_Display'] tracking-wide">
                      Pandit Deepak Goutam
                    </h1>
                    <p className="text-sm opacity-90 mt-2 font-['Poppins'] font-light">
                      Vedic Astrologer | Spiritual Guide
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Rest of your existing content remains the same */}
              <div className="lg:w-3/5 p-6 lg:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#2a0a0a] font-['Playfair_Display'] mb-4">
                    Expert Vedic Astrology
                  </h2>
                  <div className="h-1 w-16 bg-[#8b1e1e] mb-5"></div>
                  <p className="text-gray-700 text-base lg:text-lg font-['Poppins'] font-light leading-relaxed">
                    Pandit Deepak Goutam, with 25+ years of experience, offers precise Vedic astrology insights from his <strong className="font-bold">Indore</strong> lineage, guiding clients globally with clarity and purpose. His profound knowledge of planetary movements and ancient scriptures provides transformative guidance for life's challenges.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#2a0a0a] font-['Playfair_Display'] mb-4">
                    Expertise
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: <FaStarAndCrescent className="text-[#8b1e1e]" />, name: 'Vedic Astrology', desc: 'Birth chart & predictions' },
                      { icon: <FaHeart className="text-[#8b1e1e]" />, name: 'Relationships', desc: 'Compatibility guidance' },
                      { icon: <FaBriefcase className="text-[#8b1e1e]" />, name: 'Career', desc: 'Path & timing' },
                      { icon: <FaGem className="text-[#8b1e1e]" />, name: 'Gemology', desc: 'Gem recommendations' },
                      { icon: <FaHandHoldingHeart className="text-[#8b1e1e]" />, name: 'Remedies', desc: 'Spiritual solutions' },
                      { icon: <FaGlobeAsia className="text-[#8b1e1e]" />, name: 'Muhurta', desc: 'Auspicious timing' },
                      
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        className="bg-[#f8f4ef] border border-[#e8e0d7] rounded-lg p-4 hover:border-[#8b1e1e]/40 transition-all"
                      >
                        <div className="flex items-start">
                          <div className="bg-[#8b1e1e]/10 p-2 rounded-full mr-3">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#2a0a0a] mb-1 font-['Poppins']">{item.name}</h4>
                            <p className="text-xs text-gray-600 font-['Poppins'] font-light">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#8b1e1e] text-white px-6 py-3 rounded-lg font-['Poppins'] font-medium hover:bg-[#7a1919] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    Whatsapp
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white border border-[#8b1e1e] text-[#8b1e1e] px-6 py-3 rounded-lg font-['Poppins'] font-medium hover:bg-[#f8f4ef] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    Call Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutAstrologer;