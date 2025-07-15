"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RamayanaBanner() {
  const router = useRouter();

  return (
    <section className="w-full min-h-[70vh] md:min-h-[55vh] flex items-center justify-center bg-[#56130D] py-8 md:py-6 px-4 md:px-3 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/25"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content container - Stack vertically on mobile */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-6 md:gap-2">

        {/* Ram Ji Section - Full width on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 flex justify-center md:justify-end relative order-2 md:order-none"
        >
          <div className="relative md:mr-6 -translate-x-0 md:-translate-x-16 lg:-translate-x-32">
            <img 
              src="ram/ram.png"
              alt="Lord Ram"
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto object-contain opacity-80 md:opacity-70 blur-[1px] md:blur-[1.5px] z-0 hover:opacity-90 transition-opacity duration-300 mx-auto md:mx-0"
            />
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2  bg-white/95 p-1.5 sm:p-2 rounded-md shadow-lg w-[160px] sm:w-[200px] md:w-[260px] z-10 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/kundli/ram">
                <img 
                  src="/ram/kundali.jpeg"
                  alt="Ram Kundli"
                  className="w-full h-auto border border-[#800000]/10 max-h-[160px] sm:max-h-[200px] md:max-h-[260px]"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Center Title Section - Smaller on mobile */}
        <div className="w-full md:w-1/5 flex flex-col items-center justify-center px-2 my-2 md:my-0 order-1 md:order-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2 font-serif">
              <span className="text-[#FFD700] block text-2xl sm:text-3xl md:text-5xl italic">Ramayana</span>
              <span className="block mt-1 sm:mt-2 text-sm sm:text-base">Cosmic</span>
              <span className="text-[#FFD700] block text-xl sm:text-2xl md:text-4xl">Numerology</span>
            </h1>
            
            <p className="text-white/80 italic font-light text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-[160px] sm:max-w-[200px] mx-auto">
              "Discover the divine numbers"
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6"
          >
            <button className="bg-[#FFD700] hover:bg-[#FFC000] text-[#800000] px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105">
              Explore Destiny
            </button>
          </motion.div>
        </div>

        {/* Ravan Section - Full width on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 flex justify-center md:justify-start relative order-3 md:order-none"
        >
          <div className="relative md:ml-6 translate-x-0 md:translate-x-16 lg:translate-x-32">
            <img 
              src="/ram/ravan.png"
              alt="Ravan"
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto object-contain opacity-80 md:opacity-70 blur-[1px] md:blur-[1.5px] z-0 hover:opacity-90 transition-opacity duration-300 mx-auto md:mx-0"
            />
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2  bg-white/95 p-1.5 sm:p-2 rounded-md shadow-lg w-[160px] sm:w-[200px] md:w-[260px] z-10 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/kundli/ravan">
                <img 
                  src="/ram/kundali.jpeg"
                  alt="Ravan Kundli"
                  className="w-full h-auto border border-[#800000]/10 max-h-[160px] sm:max-h-[200px] md:max-h-[260px]"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}