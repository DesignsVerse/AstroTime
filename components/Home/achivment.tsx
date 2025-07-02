'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaScroll,
  FaHourglassHalf,
  FaUserGraduate,
  FaComments,
  FaGlobe,
  FaTrophy,
  FaAward,
  FaHandsHelping
} from 'react-icons/fa';

const Achievements = () => {
  const [counters, setCounters] = useState([
    { value: 0, suffix: 'k', text: 'Kundli Analysis', target: 200, icon: <FaScroll />, color: 'text-[#800000]' },
    { value: 0, suffix: '+', text: "Years of Wisdom", target: 50, icon: <FaHourglassHalf />, color: 'text-[#800000]' },
    { value: 0, suffix: 'k+', text: 'Students Mentored', target: 50, icon: <FaUserGraduate />, color: 'text-[#800000]' },
    { value: 0, suffix: 'k+', text: 'Consultations', target: 100, icon: <FaComments />, color: 'text-[#800000]' },
    { value: 0, suffix: '+', text: 'Global Languages', target: 5, icon: <FaGlobe />, color: 'text-[#800000]' },
    { value: 0, suffix: '', text: 'Awards Won', target: 25, icon: <FaTrophy />, color: 'text-[#800000]' }
  ]);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;
      
      const incrementCounters = () => {
        setCounters(prevCounters => 
          prevCounters.map(counter => {
            const increment = counter.target / steps;
            return {
              ...counter,
              value: Math.min(counter.value + increment, counter.target)
            };
          })
        );
      };

      const animationTimer = setInterval(incrementCounters, interval);
      return () => clearInterval(animationTimer);
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  return (
    <div className="relative mx-4 sm:mx-6 lg:mx-8 my-10 bg-gradient-to-br from-[#800000] to-[#600000] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-xl sm:rounded-2xl" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10 rounded-xl sm:rounded-2xl"></div>
      
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] via-white to-[#800000] rounded-t-xl sm:rounded-t-2xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] via-white to-[#800000] rounded-b-xl sm:rounded-b-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#f8d7d7]">Milestones</span> & Achievements
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg sm:rounded-xl border border-gray-100 p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800000] to-[#600000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg sm:rounded-t-xl"></div>
              
              {/* Icon with animated background */}
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mb-3 sm:mb-4 mx-auto bg-gradient-to-br from-white to-[#f8d7d7] group-hover:from-[#f8d7d7] group-hover:to-white transition-all duration-300 ${counter.color}`}>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-xl sm:text-2xl"
                >
                  {counter.icon}
                </motion.div>
              </div>
              
              {/* Counter */}
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 font-serif">
                {Math.floor(counter.value)}
                <span className={counter.color}>{counter.suffix}</span>
              </div>
              
              {/* Title */}
              <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-600">
                {counter.text}
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#800000]/30 rounded-lg sm:rounded-xl pointer-events-none transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -left-16 -top-16 sm:-left-20 sm:-top-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[#f8d7d7]/10 blur-lg sm:blur-xl"></div>
        <div className="absolute -right-16 -bottom-16 sm:-right-20 sm:-bottom-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[#f8d7d7]/10 blur-lg sm:blur-xl"></div>
      </div>
    </div>
  );
};

export default Achievements;