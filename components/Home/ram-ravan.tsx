"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function RamayanaBanner() {
  const [hovered, setHovered] = useState<'ram' | 'ravan' | null>(null);
  const router = useRouter();

  const handleClick = (character: 'ram' | 'ravan') => {
    router.push(`/ram-ravan/${character}`);
  };

  return (
    <div className="w-full bg-[#FCFAF8] min-h-screen flex flex-col items-center justify-center pt-40 pb-32 relative">
      {/* Header section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
            <span className="text-[#8b1e1e] font-semibold text-sm tracking-wider">PRODUCT RANGE</span>
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
          Ram-Ravan Kundali
        </motion.h2>
        <motion.p 
          className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Explore the astrological charts of Ram and Ravan. Click left for Ram's kundali or right for Ravan's kundali.
        </motion.p>
      </motion.div>
      
      {/* Main image container */}
      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Desktop image */}
        <img 
          src="/ram/ram-1.png" 
          alt="Ramayana Banner Desktop" 
          className="hidden sm:block w-full h-auto object-contain rounded-2xl shadow-2xl"
        />
        {/* Mobile image */}
        <img 
          src="/ram/ram-2.png" 
          alt="Ramayana Banner Mobile" 
          className="block sm:hidden w-full h-auto object-contain rounded-2xl shadow-2xl"
        />
        
        {/* Ram clickable area (Left side) */}
        <button
          onClick={() => handleClick('ram')}
          onMouseEnter={() => setHovered('ram')}
          onMouseLeave={() => setHovered(null)}
          className="absolute left-0 top-0 h-full w-1/2 bg-transparent border-none outline-none cursor-pointer hidden sm:block"
          aria-label="View Ram's Kundali"
        />
        
        {/* Ravan clickable area (Right side) */}
        <button
          onClick={() => handleClick('ravan')}
          onMouseEnter={() => setHovered('ravan')}
          onMouseLeave={() => setHovered(null)}
          className="absolute right-0 top-0 h-full w-1/2 bg-transparent border-none outline-none cursor-pointer hidden sm:block"
          aria-label="View Ravan's Kundali"
        />
      </div>
      
      {/* Mobile click instructions */}
      <div className="block sm:hidden w-full text-center mt-12">
        <div className="flex justify-center space-x-8">
          <button 
            onClick={() => handleClick('ram')}
            className="px-10 py-5 bg-[#5a0808] text-white rounded-xl text-xl font-semibold"
          >
            Ram's Kundali
          </button>
          <button 
            onClick={() => handleClick('ravan')}
            className="px-10 py-5 bg-[#8b1e1e] text-white rounded-xl text-xl font-semibold"
          >
            Ravan's Kundali
          </button>
        </div>
      </div>
      
      {/* Hover popup (desktop only) */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`hidden sm:block absolute z-50 text-2xl px-10 py-6 rounded-2xl shadow-2xl bg-black bg-opacity-80 text-white
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          {hovered === 'ram' 
            ? 'Click to explore Ram\'s kundali details' 
            : 'Click to explore Ravan\'s kundali details'}
        </motion.div>
      )}
    </div>
  );
}