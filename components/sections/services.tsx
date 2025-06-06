'use client';

import { Merriweather } from 'next/font/google';
import { useState } from 'react';
import { FaStar, FaHeart, FaBriefcase, FaUsers, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Configure Merriweather font
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Birth Chart Readings",
      description: "Unlock the secrets of your natal chart with our comprehensive astrological analysis.",
      icon: <FaStar className="w-8 h-8 text-white" />,
      bgImage: "/service/1.avif"
    },
    {
      id: 2,
      title: "Compatibility Assessments",
      description: "Discover your cosmic connection with partners, friends, or colleagues.",
      icon: <FaHeart className="w-8 h-8 text-white" />,
      bgImage: "/service/2.webp"
    },
    {
      id: 3,
      title: "Career Guidance",
      description: "Align your professional path with your astrological strengths and potentials.",
      icon: <FaBriefcase className="w-8 h-8 text-white" />,
      bgImage: "/service/3.webp"
    },
    {
      id: 4,
      title: "Relationship Advice",
      description: "Navigate your relationships with celestial wisdom and understanding.",
      icon: <FaUsers className="w-8 h-8 text-white" />,
      bgImage: "/service/4.webp"
    },
    {
      id: 5,
      title: "Sun Signs Consultation",
      description: "Personalized insights based on your zodiac sign's current transits.",
      icon: <FaSun className="w-8 h-8 text-white" />,
      bgImage: "/service/5.webp"
    }
  ];

  return (
    <section className={`${merriweather.className} bg-gradient-to-b from-gray-50 to-white py-32 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 text-[#1a1f3d]"
          >
            Our Astrological Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed"
          >
            Harness the power of the cosmos with our expert astrological guidance and personalized celestial insights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={serviceVariants}
              className="relative group"
            >
              <div 
                className="service-card h-[420px] w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out bg-white shadow-lg"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background image that appears on hover */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${hoveredService === service.id ? 'opacity-20 scale-110' : 'opacity-0 scale-100'}`}
                  style={{ 
                    backgroundImage: `url(${service.bgImage})`,
                    filter: 'blur(1px)'
                  }}
                />
                
                <div className="relative z-10 h-full flex flex-col items-center justify-between p-8">
                  <div className="text-center">
                    <div className="icon-bg mb-8 mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#1a1f3d] leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Read More button that appears on hover */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredService === service.id ? 1 : 0,
                      y: hoveredService === service.id ? 0 : 20
                    }}
                    className="w-full px-3 py-3 bg-gradient-to-r from-[#f9a8d4] to-[#fcd5b2] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:from-[#f88ec9] hover:to-[#facaa5]"
                  >
                    Explore Service
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 border-2 border-[#1a1f3d] text-[#1a1f3d] rounded-full font-semibold hover:bg-[#1a1f3d] hover:text-white transition-colors duration-300">
            View All Services
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .icon-bg {
          background: linear-gradient(135deg, #fcd5b2 0%, #f9a8d4 100%);
          border-radius: 9999px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgb(249 168 212 / 0.3),
            0 4px 6px -4px rgb(252 213 178 / 0.4);
          transition: all 0.3s ease;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f9a8d4, #fcd5b2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15);
        }

        .icon-bg:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 25px -5px rgb(249 168 212 / 0.4),
            0 10px 10px -5px rgb(252 213 178 / 0.3);
        }
      `}</style>
    </section>
  );
}