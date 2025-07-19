"use client";
import { FaChartLine, FaStar, FaHandsHelping, FaGlobe } from 'react-icons/fa';
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { GiSpellBook, GiCrystalBall } from 'react-icons/gi';
import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';

const features = [
  { text: 'Numerology Reports', icon: <FaChartLine className="text-xl" /> },
  { text: 'Personalized Guidance', icon: <MdOutlineSelfImprovement className="text-xl" /> },
  { text: 'Life Path Analysis', icon: <GiSpellBook className="text-xl" /> },
  { text: 'Name Correction', icon: <FaStar className="text-xl" /> },
  { text: 'Compatibility Reading', icon: <FaHandsHelping className="text-xl" /> },
  { text: 'Global Consultations', icon: <FaGlobe className="text-xl" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};

export default function NumerologySection() {
  return (
    <section className="w-full min-h-screen md:min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-[#FCFAF8] py-12 md:py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Enhanced cosmic background with animated elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15 overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#8b1e1e] mix-blend-multiply filter blur-xl md:blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#5a0808] mix-blend-multiply filter blur-xl md:blur-3xl"
        ></motion.div>
        
        {/* Floating numbers */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -30],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute rounded-full text-[#5a0808] font-bold"
            style={{
              fontSize: `${14 + Math.random() * 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 9 + 1}
          </motion.div>
        ))}
      </div>
      {/* Left Side - Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 max-w-2xl relative z-10 order-2 md:order-1 mt-8 md:mt-0"
      >
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-center mb-2">
            <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
            <span className="text-[#8b1e1e] font-semibold text-sm tracking-wider">NUMEROLOGY</span>
            <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
          </div>
        </div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] mb-4 md:mb-6 font-serif text-center relative">
            <span className="text-[#8b1e1e]">Anko Ka Khel</span> - Decode Your Divine Numbers
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#8b1e1e]" viewBox="0 0 200 20">
              <path 
                d="M0,10 Q50,5 100,10 T200,10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-base md:text-lg text-[#5a0808]/90 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
            Numbers govern our destiny. Discover how your birth date and name influence your personality, relationships, and life path through the ancient science of numerology. Our precise calculations reveal your hidden potential and challenges.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.text} 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="flex items-center space-x-2 md:space-x-3 group"
            >
              <div className="p-1.5 md:p-2 rounded-full bg-[#8b1e1e]/10 text-[#8b1e1e] group-hover:bg-[#5a0808] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                {feature.icon}
              </div>
              <span className="text-sm md:text-base lg:text-lg text-[#5a0808] font-medium group-hover:text-[#8b1e1e] transition-colors duration-300">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
          <Link href="/services/numerology-analysis">
            <button className="mt-6 md:mt-8 bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Calculate Your Numbers</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#8b1e1e] to-[#5a0808] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side - Enhanced Video */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex items-center justify-center w-full md:w-auto order-1 md:order-2 md:ml-8 lg:ml-12 relative z-10"
      >
        <div className="w-full max-w-md md:max-w-lg h-[250px] sm:h-[300px] md:h-[380px] bg-gradient-to-br from-[#5a0808] to-[#8b1e1e] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border-2 border-[#f0e6d9] flex items-center justify-center overflow-hidden relative group">
          {/* Video placeholder with mystical overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000')] bg-cover bg-center opacity-40"></div>
          
          {/* Animated number grid background */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1 p-2 opacity-20">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
                className="text-white text-xs flex items-center justify-center"
              >
                {i % 9 + 1}
              </motion.div>
            ))}
          </div>
          
          {/* Central crystal ball with glowing effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{
                boxShadow: [
                  '0 0 10px 5px rgba(139, 30, 30, 0.3)',
                  '0 0 20px 10px rgba(139, 30, 30, 0.4)',
                  '0 0 10px 5px rgba(139, 30, 30, 0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20"
            ></motion.div>
            <GiCrystalBall className="absolute text-white/20 text-7xl md:text-8xl" />
          </div>
          
          {/* Enhanced Play button */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group-hover:rotate-[15deg]"
          >
            <motion.div 
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255, 255, 255, 0.7)',
                  '0 0 0 10px rgba(255, 255, 255, 0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="absolute inset-0 rounded-full"
            ></motion.div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#8b1e1e] flex items-center justify-center group-hover:bg-[#5a0808] transition-colors duration-300">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 text-white font-serif text-xs md:text-sm tracking-wider">Numerology Secrets Revealed</div>
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 text-white/80 text-xs flex items-center">
            <span>Watch Introduction</span>
            <svg className="w-4 h-4 ml-1 animate-bounce-horizontal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Floating numbers animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <motion.span
                key={num}
                initial={{ 
                  opacity: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50
                }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5
                }}
                className="absolute text-white/40 font-bold"
                style={{
                  fontSize: `${12 + Math.random() * 15}px`,
                }}
              >
                {num}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}