"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RamayanaBanner() {
  return (
    <section className="w-full min-h-[60vh] md:min-h-[50vh] flex items-center justify-center bg-[#56130D] py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Subtle decorative elements - optimized for performance */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/25"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="container mx-auto flex flex-col items-center justify-center relative z-10 gap-6 md:gap-8 max-w-6xl">

        {/* Title Section with improved typography */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-4 md:mb-6 w-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif tracking-wide">
            <span className="text-[#FFD700] bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Ramayana</span> Cosmic Numerology
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-2 max-w-md mx-auto">
            Discover the divine numerology behind the epic battle of Dharma
          </p>
        </motion.div>

        {/* Main content row - optimized for mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8 lg:gap-12">

          {/* Ram Ji Section - improved positioning */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-1/3 flex justify-center md:justify-end relative"
          >
            <div className="relative group">
              <img 
                src="ram/ram.png"
                alt="Lord Ram"
                className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 group-hover:blur-none blur-[0.5px] md:blur-[1px]"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-0 bottom-[-60px] md:bottom-[-80px] bg-white/95 p-2 rounded-lg shadow-xl w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] z-10 cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gold-200/20"
              >
                <Link href="/kundli/ram" className="block">
                  <img 
                    src="/ram/kundali.jpeg"
                    alt="Ram Kundli"
                    className="w-full h-auto border border-[#800000]/10 object-cover aspect-square"
                  />
                  <p className="text-center text-xs sm:text-sm font-medium text-[#56130D] mt-2">Ram's Kundali</p>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Center Image Section - enhanced */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-1/3 flex justify-center order-first md:order-none my-4 md:my-0"
          >
            <div className="relative hover:scale-105 transition-transform duration-500">
              <img 
                src="/ram/bg.png"
                alt="Cosmic Symbol"
                className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] h-auto object-contain mx-auto drop-shadow-lg"
              />
            </div>
          </motion.div>

          {/* Ravan Section - improved positioning */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-1/3 flex justify-center md:justify-start relative"
          >
            <div className="relative group">
              <img 
                src="/ram/ravan.png"
                alt="Ravan"
                className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 group-hover:blur-none blur-[0.5px] md:blur-[1px]"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute left-1/2 -translate-x-1/2 md:left-0 bottom-[-60px] md:bottom-[-80px] bg-white/95 p-2 rounded-lg shadow-xl w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] z-10 cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gold-200/20"
              >
                <Link href="/kundli/ravan" className="block">
                  <img 
                    src="/ram/kundali.jpeg"
                    alt="Ravan Kundli"
                    className="w-full h-auto border border-[#800000]/10 object-cover aspect-square"
                  />
                  <p className="text-center text-xs sm:text-sm font-medium text-[#56130D] mt-2">Ravan's Kundali</p>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Button Section - enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 md:mt-12"
        >
          <Link href="/explore" className="block">
            <button className="bg-gradient-to-r from-[#FFD700] to-[#FFC000] hover:from-[#FFC000] hover:to-[#FFA500] text-[#800000] px-6 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 active:scale-95 transform-gpu">
              Explore Divine Destiny
            </button>
          </Link>
        </motion.div>
      </div>

      {/* CSS for twinkling animation */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}