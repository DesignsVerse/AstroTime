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
  FaHandsHelping,
  FaChartLine,
  FaBookOpen,
  FaStar,
  FaUsers
} from 'react-icons/fa';

const Achievements = () => {
  const [counters, setCounters] = useState([
    { value: 0, suffix: 'k', text: 'Kundli Analysis', target: 200, icon: <FaScroll className="text-2xl" />, color: 'text-[#800000]' },
    { value: 0, suffix: '+', text: "Years of Wisdom", target: 50, icon: <FaHourglassHalf className="text-2xl" />, color: 'text-[#800000]' },
    { value: 0, suffix: 'k+', text: 'Students Mentored', target: 50, icon: <FaUserGraduate className="text-2xl" />, color: 'text-[#800000]' },
    { value: 0, suffix: 'k+', text: 'Consultations', target: 100, icon: <FaComments className="text-2xl" />, color: 'text-[#800000]' },
    { value: 0, suffix: '+', text: 'Global Languages', target: 5, icon: <FaGlobe className="text-2xl" />, color: 'text-[#800000]' },
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
    <div className="relative m-10 bg-gradient-to-br from-[#800000] to-[#600000] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-2xl" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10 rounded-2xl"></div>
      
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] via-white to-[#800000] rounded-t-2xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] via-white to-[#800000] rounded-b-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#f8d7d7]">Milestones</span> & Achievements
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800000] to-[#600000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              
              {/* Icon with animated background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto bg-gradient-to-br from-white to-[#f8d7d7] group-hover:from-[#f8d7d7] group-hover:to-white transition-all duration-500 ${counter.color}`}>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {counter.icon}
                </motion.div>
              </div>
              
              {/* Counter */}
              <div className="text-3xl font-bold text-gray-900 mb-2 font-serif">
                {Math.floor(counter.value)}
                <span className={counter.color}>{counter.suffix}</span>
              </div>
              
              {/* Title */}
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">
                {counter.text}
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#800000]/30 rounded-2xl pointer-events-none transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#f8d7d7]/10 blur-xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#f8d7d7]/10 blur-xl"></div>
      </div>
    </div>
  );
};

export default Achievements;