"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { zodiacSigns } from "@/data/rashi";
import { motion } from "framer-motion";

const Rashi: React.FC = () => {
  // Function to track zodiac sign clicks
  const trackZodiacClick = async (signName: string) => {
    try {
      // Send data to your analytics endpoint
      await fetch('/api/track-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sign: signName,
          timestamp: new Date().toISOString(),
          // You can add more data like user IP, device info, etc.
        }),
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  };

  return (
    <div
      className="bg-[#FCFAF8] text-[#1a1a1a] font-serif min-h-screen flex flex-col items-center justify-center w-full"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      {/* Header section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-center mb-2">
            <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
            <span className="text-[#8b1e1e] font-semibold text-sm tracking-wider">ZODIAC COLLECTION</span>
            <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
          </div>
        </div>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#5a0808] mb-4 tracking-tight font-serif"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Your Daily Zodiac Horoscope
        </motion.h2>
        <motion.p 
          className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Select Your Zodiac Sign to Reveal Today's Insights
        </motion.p>
      </motion.div>

      <div className="w-full max-w-7xl px-4 sm:px-8 py-4 flex flex-col items-center">

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 w-full">
          {zodiacSigns.map((sign: any) => (
            <div 
              key={sign.name}
              className="flex flex-col items-center justify-center gap-3 border-2 rounded-xl p-3 sm:p-5 transition-all duration-300 cursor-pointer border-gray-200 hover:border-gray-400 hover:shadow-lg"
              style={{ backgroundColor: "#fff" }}
              onClick={() => trackZodiacClick(sign.name)}
            >
              <Link 
                href={`/rashi/${sign.name.toLowerCase()}`}
                className="flex flex-col items-center"
              >
                <Image
                  alt={`${sign.name} zodiac symbol`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  src={sign.src}
                  width={96}
                  height={96}
                  unoptimized
                />
                <span className="text-sm sm:text-base text-center font-light">
                  {sign.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rashi;