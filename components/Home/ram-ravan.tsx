"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RamayanaBanner() {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#FCFAF8] h-full flex flex-col items-center justify-center pt-20 relative">
      {/* Header section */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center mb-4">
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
          Ram-Ravan Banner
        </motion.h2>
        <motion.p 
          className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Interactive Ramayana experience. Click left or right for more!
        </motion.p>
      </motion.div>
      <img 
        src="/ram/ram-1.png" 
        alt="Ramayana Banner" 
        className="max-w-full h-auto object-contain rounded-lg shadow-lg"
      />
      {/* Left clickable overlay */}
      <button
        onClick={() => handleClick('https://left-link.com')}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        className="absolute left-0 top-0 h-full cursor-pointer"
        style={{ width: '50%', background: 'transparent', border: 'none', outline: 'none' }}
        aria-label="Left Link"
      />
      {/* Right clickable overlay */}
      <button
        onClick={() => handleClick('https://right-link.com')}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        className="absolute right-0 top-0 h-full cursor-pointer"
        style={{ width: '50%', background: 'transparent', border: 'none', outline: 'none' }}
        aria-label="Right Link"
      />
      {/* Popup message on hover */}
      {hovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-lg animate-fade-in">
          {hovered === 'left' ? 'Click to open left side link!' : 'Click to open right side link!'}
        </div>
      )}
    </div>
  );
}