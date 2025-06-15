"use client"
import { Merriweather } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Configure Merriweather font
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const experts = [
  {
    name: "Jhonny Lekris",
    title: "Numerologist",
    image: "https://storage.googleapis.com/a1aa/image/237213a1-7d5a-47b4-733c-0b227ede9666.jpg",
    alt: "Portrait of Jhonny Lekris, a numerologist, wearing a purple head wrap and holding a crystal ball"
  },
  {
    name: "Nisha Jenifer",
    title: "Writer",
    image: "https://storage.googleapis.com/a1aa/image/25d1b9db-eecd-4f9d-7a0b-17c35ab2dcfe.jpg",
    alt: "Portrait of Nisha Jenifer, a writer, smiling and pointing upwards with one finger"
  },
  {
    name: "Dev Martin",
    title: "Palmist",
    image: "https://storage.googleapis.com/a1aa/image/7a9ed816-906e-4869-d0d9-d17a2375a4ce.jpg",
    alt: "Portrait of Dev Martin, a palmist, sitting at a table with cards in hand"
  }
];

export default function Experts() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Talk With Our Experts</title>
        <meta name="description" content="Connect with our team of experts for personalized guidance and insights." />
      </Head>
      
      <section className={`${merriweather.className} bg-[#f7f7f7] relative overflow-hidden py-16`}>
        {/* Animated background element */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-r from-[#800000] to-[#1a254f] opacity-10 -skew-y-[3deg] origin-top-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          {/* Section header */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-[#1a254f] text-3xl md:text-4xl font-bold leading-tight">
                Talk With Our <span className="text-[#800000]">Experts</span>
              </h2>
              <p className="text-[#4a4a4a] mt-3 max-w-2xl">
                Get personalized guidance from our team of experienced professionals.
              </p>
            </div>
            <button
              className="text-[#800000] border border-[#800000] rounded-full px-6 py-2 text-sm font-medium leading-6 hover:bg-[#800000] hover:text-white transition-all duration-300 hover:shadow-lg"
              type="button"
              aria-label="View all experts"
            >
              View All Experts
            </button>
          </motion.div>
          
          {/* Experts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                className="bg-white border border-[#fff0e9] rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg transition-all duration-300 hover:border-[#800000]/30"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <Image
                    alt={expert.alt}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#fff0e9]"
                    height={112}
                    width={112}
                    src={expert.image}
                    priority={index === 0}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#800000] text-white text-xs font-bold px-2 py-1 rounded-full">
                    Online
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[#1a254f] text-xl font-bold leading-tight mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm mb-4">
                    {expert.title}
                  </p>
                  <div className="flex gap-2 mb-4 justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500">(24)</span>
                  </div>
                  <button
                    className="bg-gradient-to-r from-[#800000] to-[#e06f4a] text-white rounded-full px-6 py-2 text-sm font-medium leading-6 hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                    type="button"
                    aria-label={`Chat with ${expert.name}`}
                  >
                    Let's Chat
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Divider */}
          <motion.div 
            className="flex justify-center items-center space-x-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#800000]"></div>
            <div className="text-[#800000] text-2xl leading-none select-none animate-pulse">✧</div>
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#800000]"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
}