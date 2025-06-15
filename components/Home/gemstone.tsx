"use client"
import { Merriweather } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar, FiChevronRight } from 'react-icons/fi';

// Configure Merriweather font
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const gems = [
  {
    id: 1,
    name: "Pale Emerald Gem",
    price: 5.00,
    description: "Known for its calming properties and connection to the heart chakra.",
    rating: 4.5,
    image: "/gems/emerald.png",
    bgPattern: "/patterns/celestial.png"
  },
  {
    id: 2,
    name: "Agate Palm Stone",
    price: 9.00,
    description: "Grounding stone that promotes emotional stability and self-confidence.",
    rating: 4.8,
    image: "/gems/agate.png",
    bgPattern: "/patterns/celestial.png"
  },
  {
    id: 3,
    name: "Blue Mineral Rock",
    price: 6.00,
    description: "Enhances communication and self-expression with its soothing energy.",
    rating: 4.2,
    image: "/gems/blue-mineral.png",
    bgPattern: "/patterns/celestial.png"
  },
  {
    id: 4,
    name: "Mineral Crystal Fluorapatite",
    price: 10.00,
    description: "Stimulates intellect and enhances motivation for personal growth.",
    rating: 4.7,
    image: "/gems/fluorapatite.png",
    bgPattern: "/patterns/celestial.png"
  },
  {
    id: 5,
    name: "Greenish-Yellow Beryl",
    price: 9.00,
    description: "Brings joy and lightness while helping to alleviate stress.",
    rating: 4.3,
    image: "/gems/beryl.png",
    bgPattern: "/patterns/celestial.png"
  },
  {
    id: 6,
    name: "Green Emerald Stone",
    price: 12.00,
    description: "Stone of successful love, enhancing unity and promoting partnership.",
    rating: 4.9,
    image: "/gems/emerald-green.png",
    bgPattern: "/patterns/celestial.png"
  }
];

export default function Gems() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Celestial Gems & Crystal Stones</title>
        <meta name="description" content="Premium quality crystals and gemstones for healing and spiritual growth" />
      </Head>
      
      <div className={`${merriweather.className} bg-white relative min-h-screen overflow-hidden`}>
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <Image
            alt="Subtle constellation pattern"
            className="w-full h-full object-cover"
            fill
            src="/patterns/constellation.png"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          {/* Hero Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2a2c4a] mb-4">
              Celestial Gems & Crystals
            </h1>
            <p className="text-lg sm:text-xl text-[#5a5c7a] max-w-2xl mx-auto">
              Harness the cosmic energy with our premium collection of healing stones and crystals
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-between items-center mb-12 gap-4"
          >
            <div className="flex items-center space-x-2">
              <span className="text-[#5a5c7a]">Filter by:</span>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                All Gems
              </button>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                Healing
              </button>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                Zodiac
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-[#5a5c7a] mr-2">Sort by:</span>
              <select className="bg-white rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
              </select>
            </div>
          </motion.div>

          {/* Gems Grid */}
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gems.map((gem, index) => (
              <motion.li 
                key={gem.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-64 bg-[#f9f7f3] flex items-center justify-center p-6">
                    <div 
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${gem.bgPattern})`, backgroundSize: 'cover' }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative z-10"
                    >
                      <Image
                        alt={gem.name}
                        className="object-contain"
                        height={160}
                        width={160}
                        src={gem.image}
                      />
                    </motion.div>
                    {/* Wishlist button */}
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-[#f9f7f3] transition-colors">
                      <FiHeart className="text-[#5a5c7a]" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`${i < Math.floor(gem.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-4 h-4`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({gem.rating})</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2a2c4a] mb-2">{gem.name}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{gem.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-[#2a2c4a]">${gem.price.toFixed(2)}</span>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-[#2a2c4a] text-white px-4 py-2 rounded-lg hover:bg-[#3a3c5a] transition-colors"
                      >
                        <span>Add to Cart</span>
                        <FiShoppingCart />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <button className="inline-flex items-center px-6 py-3 border border-[#2a2c4a] rounded-full text-[#2a2c4a] font-medium hover:bg-[#2a2c4a] hover:text-white transition-colors">
              View All Crystals
              <FiChevronRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        body {
          font-family: ${merriweather.style.fontFamily}, serif;
          background-color: #faf8f5;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </>
  );
}