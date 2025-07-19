"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { numberData } from '@/data/numberData';
import { FaSearch, FaBookOpen, FaCalculator, FaHistory, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { GiCrystalBall, GiSpellBook, GiAncientSword } from 'react-icons/gi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NumbersPage = () => {
  const numbersArray = Object.entries(numberData);
  const [activeNumber, setActiveNumber] = useState<string | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Group numbers for grid layout
  const mobileGrid = [
    numbersArray.slice(0, 3),
    numbersArray.slice(3, 6),  
    numbersArray.slice(6, 9)
  ];

  // Desktop pyramid layout
  const desktopRows = [
    numbersArray.slice(0, 5),
    numbersArray.slice(5, 8),
    numbersArray.slice(8, 9)
  ];

  // Animation variants
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
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Hero section animation
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Feature cards data
  const features = [
    {
      icon: <GiCrystalBall className="text-4xl" />,
      title: "Vedic Numerology",
      description: "Ancient Indian system of numbers based on Vedic scriptures and planetary influences",
      color: "from-purple-900 to-purple-700"
    },
    {
      icon: <GiSpellBook className="text-4xl" />,
      title: "Name Analysis",
      description: "Discover how your name's numerical value affects your destiny and personality",
      color: "from-amber-900 to-amber-700"
    },
    {
      icon: <FaCalculator className="text-4xl" />,
      title: "Life Path Number",
      description: "Calculate your core number that reveals your life's purpose and challenges",
      color: "from-red-900 to-red-700"
    },
    {
      icon: <GiAncientSword className="text-4xl" />,
      title: "Karmic Lessons",
      description: "Identify your karmic debts and spiritual lessons through numbers",
      color: "from-blue-900 to-blue-700"
    }
  ];

  // Helper to get number data by string key
  const getNumberData = (key: string | null) => {
    if (!key) return undefined;
    const numKey = Number(key);
    return numberData[numKey as keyof typeof numberData];
  };

  return (
    <div className="bg-[#FCFAF8] font-serif text-[#800000] min-h-screen">
      {/* Floating Numbers Background */}
      <div className="fixed inset-0 overflow-hidden z-0 opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute text-[#8b1e1e] font-bold"
            style={{
              fontSize: `${15 + Math.random() * 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 9 + 1}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5a0808]/10 to-[#FCFAF8] z-10"></div>
        
        {/* Animated Numbers Flow */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity
          }}
        >
          {[1,2,3,4,5,6,7,8,9].map(num => (
            <motion.span
              key={num}
              animate={{
                x: Math.sin(num * 0.5) * 300,
                y: Math.cos(num * 0.5) * 300,
                scale: [0.5, 1, 0.5],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 15 + num,
                repeat: Infinity,
                delay: num * 0.3
              }}
              className="absolute text-[#8b1e1e] font-bold text-9xl opacity-20"
            >
              {num}
            </motion.span>
          ))}
        </motion.div>

        <div className="container mx-auto px-4 z-20 relative">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div 
              className="mb-6 flex justify-center"
            >
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#8b1e1e] via-[#5a0808] to-[#8b1e1e] rounded-full"></div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-[#5a0808]">अंको का खेल</span> - <span className="text-[#8b1e1e]">Sacred Numbers</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-10"
            >
              Unlock the divine secrets hidden in your birth date and name through ancient numerology
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="/numerology-calculator"
                className="px-8 py-3 bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <FaCalculator /> Calculate Your Numbers
              </Link>
              <Link 
                href="/learn-numerology"
                className="px-8 py-3 bg-white text-[#5a0808] rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 border border-[#8b1e1e]/20"
              >
                <FaBookOpen /> Learn Numerology
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 -mt-20">
        {/* Numbers Grid Section */}
        <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border border-[#8b1e1e]/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#5a0808]">Discover Your Destiny Number</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">Each number carries unique vibrations that influence your life path</p>
          </div>

          {/* Mobile Grid */}
          <div className="block md:hidden mb-16">
            {mobileGrid.map((row, rowIndex) => (
              <motion.div 
                key={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="flex justify-center gap-4 mb-6"
              >
                {row.map(([number, data]) => (
                  <motion.div 
                    key={number}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setActiveNumber(number as string)}
                    onHoverEnd={() => setActiveNumber(null)}
                  >
                    <Link 
                      href={`/nemerology-anck/${number}`}
                      className={`group relative rounded-full w-24 h-24 p-3 flex flex-col items-center justify-center text-center border-2 transition-all duration-300 ${
                        activeNumber === number 
                          ? 'bg-[#8b1e1e] border-[#5a0808] shadow-lg scale-105'
                          : 'bg-white border-[#8b1e1e]/20 hover:border-[#8b1e1e]/40'
                      }`}
                    >
                      <div className={`text-3xl mb-1 transition-all duration-300 ${
                        activeNumber === number ? 'text-white scale-110' : 'text-[#8b1e1e] group-hover:scale-110'
                      }`}>
                        {data.symbol}
                      </div>
                      <h2 className={`font-semibold text-sm tracking-wide transition-all ${
                        activeNumber === number ? 'text-white' : 'text-[#5a0808]'
                      }`}>
                        {data.name}
                      </h2>
                      <span className={`absolute bottom-1 right-2 text-xs transition-all ${
                        activeNumber === number ? 'text-white/70' : 'text-[#8b1e1e]/70'
                      }`}>
                        {number}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Desktop Pyramid */}
          <div className="hidden md:flex flex-col items-center mb-16">
            {desktopRows.map((row, rowIndex) => (
              <motion.div 
                key={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className={`flex justify-center gap-8 ${rowIndex === 1 ? 'mb-8' : 'mb-6'}`}
                style={{ maxWidth: `${100 - rowIndex * 20}%` }}
              >
                {row.map(([number, data]) => (
                  <motion.div 
                    key={number}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setActiveNumber(number as string)}
                    onHoverEnd={() => setActiveNumber(null)}
                  >
                    <Link 
                      href={`/nemerology-anck/${number}`}
                      className={`group relative rounded-full w-40 h-40 p-4 flex flex-col items-center justify-center text-center border-2 transition-all duration-300 ${
                        activeNumber === number 
                          ? 'bg-[#8b1e1e] border-[#5a0808] shadow-lg scale-105'
                          : 'bg-white border-[#8b1e1e]/20 hover:border-[#8b1e1e]/40'
                      }`}
                    >
                      <div className={`text-5xl mb-3 transition-all duration-300 ${
                        activeNumber === number ? 'text-white scale-110' : 'text-[#8b1e1e] group-hover:scale-110'
                      }`}>
                        {data.symbol}
                      </div>
                      <h2 className={`font-semibold text-lg tracking-wide transition-all ${
                        activeNumber === number ? 'text-white' : 'text-[#5a0808]'
                      }`}>
                        {data.name}
                      </h2>
                      <span className={`absolute bottom-2 right-4 text-xs transition-all ${
                        activeNumber === number ? 'text-white/70' : 'text-[#8b1e1e]/70'
                      }`}>
                        {number}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Active Number Description */}
          {getNumberData(activeNumber) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FCFAF8] p-6 rounded-xl border border-[#8b1e1e]/20 shadow-sm mt-8"
            >
              <h3 className="text-xl font-bold text-[#5a0808] mb-2">
                {getNumberData(activeNumber)?.name} ({activeNumber})
              </h3>
              <p className="text-black/80">{getNumberData(activeNumber)?.description}</p>
            </motion.div>
          )}
        </section>

        {/* Feature Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 text-white shadow-xl overflow-hidden relative h-full`}
            >
              <div className="absolute -right-10 -top-10 text-white/10 text-9xl">
                {feature.icon}
              </div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/90 mb-6">{feature.description}</p>
                <Link 
                  href="/learn-more" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-all border border-white/20"
                >
                  Explore More <FaSearch />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Testimonial Section */}
        <section className="bg-[#5a0808] rounded-3xl p-8 md:p-12 mb-20 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#8b1e1e]/30"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#8b1e1e]/30"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Numerology revealed my true life path. The accuracy was unbelievable!",
                  author: "Rahul Sharma, Mumbai"
                },
                {
                  quote: "After name correction suggested by them, my career took a positive turn.",
                  author: "Priya Patel, Delhi"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <FaQuoteLeft className="text-2xl text-white/30 mb-4" />
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-medium">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] rounded-2xl p-8 md:p-12 text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Numbers?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Unlock the secrets of your birth date and name with our personalized numerology report
            </p>
            <Link 
              href="/get-started"
              className="inline-block px-10 py-4 bg-white text-[#5a0808] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get Your Free Analysis
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default NumbersPage;