'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
  const [counters, setCounters] = useState([
    { value: 0, suffix: 'k', text: 'Kundli Served', target: 200, icon: '📜' },
    { value: 0, suffix: '+', text: "Year's Of Legacy", target: 50, icon: '🕰️' },
    { value: 0, suffix: 'k+', text: 'Students Enrolled', target: 50, icon: '🎓' },
    { value: 0, suffix: 'k+', text: 'Consultations Given', target: 100, icon: '💬' },
    { value: 0, suffix: '+', text: 'Languages For Reports', target: 5, icon: '🌐' },
    { value: 0, suffix: '+', text: 'Awards in the field of Occult', target: 20, icon: '🏆' }
  ]);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      const duration = 2000; // Animation duration in ms
      const interval = 50; // Update interval in ms
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

      // Clean up
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-[#FAFAFB] py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-[#800000] mx-auto"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#800000]"></div>
              <div className="text-4xl mb-3">{counter.icon}</div>
              <div className="text-3xl font-bold text-[#800000] mb-2">
                {Math.floor(counter.value)}
                <span className="text-[#800000]">{counter.suffix}</span>
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {counter.text}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute left-0 right-0 mx-auto w-full max-w-7xl -z-10 opacity-10">
          <div className="grid grid-cols-6 gap-8">
            {counters.map((_, index) => (
              <div key={index} className="h-32 border-l border-r border-[#800000]"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;