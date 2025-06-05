"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaStar, FaRegStar, FaHandHoldingHeart } from 'react-icons/fa';
import { GiCrystalBall, GiSpiralArrow } from 'react-icons/gi';

interface AstrologerCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
  description: string;
  experience: number;
  onContactClick: () => void;
  onChatClick: () => void;
}

const AstrologerCard: React.FC<AstrologerCardProps> = ({
  imageSrc,
  imageAlt,
  name,
  title,
  description,
  experience,
  onContactClick,
  onChatClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGlowPosition({ x, y });
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 20,
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#1a1200] via-[#2a1a00] to-[#3a2200]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl w-full mx-auto p-6 sm:p-8 lg:p-12"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-[#1a1408] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-[0_15px_60px_rgba(255, 165, 0, 0.3)] border border-[#5a4a30]"
          style={{
            backgroundImage: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255, 165, 0, 0.1), rgba(255, 165, 0, 0))`
          }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Floating stars */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={starVariants}
              className="absolute text-yellow-300"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 0.5 + 0.5}rem`
              }}
              whileHover="hover"
            >
              {Math.random() > 0.5 ? <FaStar /> : <FaRegStar />}
            </motion.div>
          ))}

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
            {/* Image container with 3D effect */}
            <motion.div 
              className="relative flex-shrink-0 w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden group"
              whileHover={{ rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={'/ruby.png'}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 288px, 320px"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(50,40,20,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="absolute -bottom-5 -right-5 text-6xl text-amber-300 opacity-70"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.2 : 1
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <GiCrystalBall />
              </motion.div>
            </motion.div>

            {/* Text content */}
            <div className="flex flex-col max-w-2xl relative">
              {/* Mystical floating elements */}
              <motion.div 
                className="absolute -top-10 -left-10 text-4xl text-amber-300"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <GiSpiralArrow />
              </motion.div>

              <motion.h2 
                className="text-center lg:text-left text-2xl lg:text-3xl font-serif text-[#f0f0f0] mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Connect with Our <span className="text-amber-300">Expert Astrologer</span>
              </motion.h2>

              <motion.h3 
                className="font-semibold text-3xl lg:text-4xl font-serif mb-6 leading-tight bg-clip-text  bg-gradient-to-r from-amber-300 to-orange-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Discover Solutions to Your Challenges
              </motion.h3>

              <motion.p 
                className="text-[#e0e0e0] text-base leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {description}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center sm:gap-10 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div>
                  <p className="text-orange-300 font-semibold text-xl mb-1">{name}</p>
                  <p className="text-[#d0d0d0] text-sm font-medium">{title}</p>
                </div>

                <div className="flex items-center gap-6 mt-6 sm:mt-0">
                  <motion.div 
                    className="relative w-16 h-16 rounded-full bg-[#2a200f] flex items-center justify-center text-white font-semibold text-xl border-2 border-amber-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    {experience}
                    <motion.svg
                      aria-hidden="true"
                      className="absolute -top-2 -right-3 w-10 h-10 stroke-orange-300 stroke-[1.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{
                        rotate: isHovered ? 360 : 0
                      }}
                      transition={{ duration: 3 }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </motion.svg>
                  </motion.div>
                  <div className="flex flex-col text-orange-300 text-sm font-medium">
                    <span>Years of</span>
                    <span>Expertise</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  type="button"
                  className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 group overflow-hidden"
                  onClick={onContactClick}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 165, 0, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaHandHoldingHeart /> Contact Us
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                <motion.button
                  type="button"
                  className="relative bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 group overflow-hidden"
                  onClick={onChatClick}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 200, 0, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <GiCrystalBall /> Start a Chat
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Animated cosmic background */}
          <motion.div 
            className="absolute inset-0 -z-10 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `radial-gradient(circle at center, #ffa500, #ff8c00, transparent 70%)`,
              backgroundSize: "200% 200%"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function AstrologerSection() {
  const handleContactClick = () => {
    // Add your contact logic here
    console.log('Contact button clicked!');
  };

  const handleChatClick = () => {
    // Add your chat logic here
    console.log('Chat button clicked!');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated cosmic background for the entire section */}
      <div className="fixed inset-0 -z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>

      <AstrologerCard
        imageSrc="https://storage.googleapis.com/a1aa/image/a7223dca-076a-4806-e9db-a504608e98d9.jpg"
        imageAlt="Portrait of an older woman astrologer sitting with candles around her, wearing a dark red cardigan and black top with a green pendant necklace"
        name="Holiya Zaikai"
        title="Writer, Numerologist, Palmist"
        description="With decades of expertise, Holiya offers profound insights and guidance. Her holistic approach combines ancient wisdom with modern perspectives to address your unique challenges."
        experience={25}
        onContactClick={handleContactClick}
        onChatClick={handleChatClick}
      />

      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.1; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}