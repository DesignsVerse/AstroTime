"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ZodiacSign {
  name: string;
  src: string;
  product: {
    title: string;
    image: string;
    month: string;
    description: string;
  };
}

const RashiProductPage: React.FC = () => {
    const zodiacSigns: ZodiacSign[] = [
        { 
          name: 'Aries', 
          src: '/rashi/1.webp',
          product: {
            title: 'Diamond',
            image: '/ruby.png',
            month: 'April',
            description: 'Diamonds are known for their unmatched brilliance and durability. They symbolize eternal love and strength, making them perfect for Aries individuals.'
          }
        },
        { 
          name: 'Taurus', 
          src: '/rashi/2.webp',
          product: {
            title: 'Emerald',
            image: '/ruby.png',
            month: 'May',
            description: 'Emeralds represent growth, patience, and harmony. Their lush green color resonates with Taurus love for nature and stability.'
          }
        },
        { 
          name: 'Gemini', 
          src: '/rashi/3.webp',
          product: {
            title: 'Pearl',
            image: '/ruby.png',
            month: 'June',
            description: 'Pearls symbolize purity and wisdom, complementing Gemini dual nature with their luminous, multifaceted beauty.'
          }
        },
        { 
          name: 'Cancer', 
          src: '/rashi/4.webp',
          product: {
            title: 'Ruby',
            image: '/ruby.png',
            month: 'July',
            description: 'Rubies with their passionate red hue embody the emotional depth and protective nature of Cancer individuals.'
          }
        },
        { 
          name: 'Leo', 
          src: '/rashi/5.webp',
          product: {
            title: 'Peridot',
            image: '/ruby.png',
            month: 'August',
            description: 'Peridots vibrant green color matches Leos bold personality, symbolizing strength and vitality.'
          }
        },
        { 
          name: 'Virgo', 
          src: '/rashi/6.webp',
          product: {
            title: 'Sapphire',
            image: '/ruby.png',
            month: 'September',
            description: 'Sapphires with their deep blue hue represent wisdom and purity, qualities that resonate with Virgos analytical mind.'
          }
        },
        { 
          name: 'Libra', 
          src: '/rashi/7.webp',
          product: {
            title: 'Opal',
            image: '/ruby.png',
            month: 'October',
            description: 'Opals play of colors reflects Libras love for beauty and balance, symbolizing hope and creativity.'
          }
        },
        { 
          name: 'Scorpio', 
          src: '/rashi/8.webp',
          product: {
            title: 'Topaz',
            image: '/ruby.png',
            month: 'November',
            description: 'Topaz with its fiery hues matches Scorpios intense personality, symbolizing strength and healing.'
          }
        },
        { 
          name: 'Sagittarius', 
          src: '/rashi/9.webp',
          product: {
            title: 'Turquoise',
            image: '/ruby.png',
            month: 'December',
            description: 'Turquoise represents adventure and protection, perfect for the free-spirited Sagittarius.'
          }
        },
        { 
          name: 'Capricornus', 
          src: '/rashi/10.webp',
          product: {
            title: 'Garnet',
            image: '/ruby.png',
            month: 'January',
            description: 'Garnets deep red color symbolizes commitment and energy, matching Capricorns determined nature.'
          }
        },
        { 
          name: 'Aquarius', 
          src: '/rashi/11.webp',
          product: {
            title: 'Amethyst',
            image: '/ruby.png',
            month: 'February',
            description: 'Amethysts purple hues represent spirituality and creativity, aligning with Aquarius innovative spirit.'
          }
        },
        { 
          name: 'Pisces', 
          src: '/rashi/12.webp',
          product: {
            title: 'Aquamarine',
            image: '/ruby.png',
            month: 'March',
            description: 'Aquamarines soothing blue tones reflect Pisces compassionate and intuitive nature, symbolizing serenity.'
          }
        },
      ];
    

  const [selectedSign, setSelectedSign] = useState<ZodiacSign>(zodiacSigns[0]); // Default to Aries
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-[#1a1a1a] font-serif min-h-screen" style={{ fontFamily: '"Times New Roman", serif' }}>
      {/* Main Product Heading at the very top */}
      <div className="text-center pt-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-light text-[#120B41] tracking-wide">
          Explore Our <br />
          <span className="text-5xl md:text-6xl font-bold text-[#F88D72] inline-block">Products</span>
        </h2>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 py-4 flex flex-col lg:flex-row gap-12">
        {/* Left side: Zodiac grid - now at the bottom */}
        <div className="lg:hidden w-full">
          <h3 className="text-xl font-normal mb-4 text-gray-800">Select Your Zodiac Sign</h3>
          <div className="grid grid-cols-3 gap-3">
            {zodiacSigns.map((sign) => (
              <div 
                key={sign.name}
                className="relative h-[200px] cursor-pointer group"
                onMouseEnter={() => setHoveredSign(sign.name)}
                onMouseLeave={() => setHoveredSign(null)}
                onClick={() => setSelectedSign(sign)}
              >
                {/* Zodiac Sign (animated on hover) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 rounded-xl p-2 transition-all duration-500 ease-in-out ${
                  selectedSign.name === sign.name ? 'border-red-400 text-red-500 bg-red-50 shadow-lg' : 'border-gray-200 hover:border-red-200 hover:shadow-md'
                } ${
                  hoveredSign === sign.name ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
                }`}>
                  <Image
                    alt={`${sign.name} zodiac symbol`}
                    className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
                    src={sign.src}
                    width={80}
                    height={80}
                    unoptimized
                  />
                  <span className="text-sm text-center font-light">
                    {sign.name}
                  </span>
                </div>

                {/* Product Image (appears on hover) */}
                <div className={`absolute inset-0 flex items-center justify-center border-2 rounded-xl bg-white transition-all duration-500 ease-in-out ${
                  hoveredSign === sign.name ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-0 translate-y-6'
                }`}>
                  <Image
                    alt={`${sign.product.title} product`}
                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                    src={sign.product.image}
                    width={80}
                    height={80}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Product details - now on top for mobile */}
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start gap-12">
          <div className="flex items-center gap-2 text-sm text-[#d2691e] cursor-pointer select-none font-light hover:text-[#b35a1a] transition-colors">
            <span className="text-xs leading-none">×</span>
            <span>Zodiac Gemstones</span>
          </div>
          
          <div className="text-center lg:text-left w-full">
            <h2 className="text-5xl font-normal mb-3 text-gray-800">{selectedSign.product.title}</h2>
            <p className="text-xl text-gray-600">{selectedSign.product.month}</p>
          </div>
          
          <div className="w-full max-w-[600px] h-[500px] bg-white rounded-2xl shadow-xl flex items-center justify-center p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              alt={`${selectedSign.product.title} stone`}
              className="w-full h-full object-contain"
              src={selectedSign.product.image}
              width={600}
              height={500}
              unoptimized
            />
          </div>
          
          <div className="text-lg text-[#1a1a1a] font-light leading-relaxed max-w-[600px]">
            {selectedSign.product.description}
          </div>
          
          <button
            className="bg-[#ff7f50] text-lg text-white rounded-full px-10 py-4 hover:bg-[#e76b3c] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="button"
          >
            View Detailed Information
          </button>
        </div>

        {/* Left side: Zodiac grid - now on the right for desktop */}
        <div className="hidden lg:block lg:w-[800px]">
          <h3 className="text-3xl font-normal mb-8 text-gray-800">Select Your Zodiac Sign</h3>
          <div className="grid grid-cols-3 gap-6">
            {zodiacSigns.map((sign) => (
              <div 
                key={sign.name}
                className="relative h-[280px] cursor-pointer group"
                onMouseEnter={() => setHoveredSign(sign.name)}
                onMouseLeave={() => setHoveredSign(null)}
                onClick={() => setSelectedSign(sign)}
              >
                {/* Zodiac Sign (animated on hover) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-5 border-2 rounded-xl p-8 transition-all duration-500 ease-in-out ${
                  selectedSign.name === sign.name ? 'border-red-400 text-red-500 bg-red-50 shadow-lg' : 'border-gray-200 hover:border-red-200 hover:shadow-md'
                } ${
                  hoveredSign === sign.name ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
                }`}>
                  <Image
                    alt={`${sign.name} zodiac symbol`}
                    className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300"
                    src={sign.src}
                    width={128}
                    height={128}
                    unoptimized
                  />
                  <span className="text-lg text-center font-light">
                    {sign.name}
                  </span>
                </div>

                {/* Product Image (appears on hover) */}
                <div className={`absolute inset-0 flex items-center justify-center border-2 rounded-xl bg-white transition-all duration-500 ease-in-out ${
                  hoveredSign === sign.name ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-0 translate-y-6'
                }`}>
                  <Image
                    alt={`${sign.product.title} product`}
                    className="w-full h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-300"
                    src={sign.product.image}
                    width={128}
                    height={128}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RashiProductPage;