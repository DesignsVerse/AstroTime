'use client';
import React from 'react';
import { motion } from 'framer-motion';

const NumberSelector = () => {
  const numberGroups = [
    [1, 2, 3, 4, 5],    // First row - 5 numbers
    [6, 7, 8],          // Second row - 3 numbers
    [9]                 // Third row - 1 number
  ];

  return (
    <div className="bg-[#FCFAF8] pt-8 pb-2 px-2 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#800000] mb-3 sm:mb-6 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Divine <span className="text-[#600000]">Numbers</span>
        </motion.h2>
        
        <motion.p
          className="text-base sm:text-xl text-[#800000]/90 mb-6 sm:mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Select your sacred number (1-9)
        </motion.p>

        <div className="flex flex-col items-center gap-3 sm:gap-6">
          {numberGroups.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              className="flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            >
              {group.map((number) => (
                <motion.div
                  key={number}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative bg-white rounded-xl w-14 h-16 sm:w-20 sm:h-24 md:w-28 md:h-28 flex flex-col items-center justify-center border-2 border-[#800000]/20 hover:border-[#800000]/50 shadow-md hover:shadow-xl transition-all cursor-pointer">
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#800000]/5"></div>
                    <div 
                      className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#800000] transition-all duration-300 group-hover:text-[#600000] mb-0.5 sm:mb-1"
                      style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                      {number}
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      <span className="text-[8px] sm:text-xs md:text-sm text-[#800000] font-serif opacity-80">1</span>
                      <span className="text-[8px] sm:text-xs md:text-sm text-[#800000] font-serif opacity-80">10</span>
                      <span className="text-[8px] sm:text-xs md:text-sm text-[#800000] font-serif opacity-80">5</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button className="px-6 py-2 sm:px-10 sm:py-4 bg-[#800000] text-white text-sm sm:text-lg font-medium rounded-lg hover:bg-[#600000] transition-all shadow-md hover:shadow-lg">
            Discover Your Number's Power
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NumberSelector;