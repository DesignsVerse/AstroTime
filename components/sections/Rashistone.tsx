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
          src: '/ruby.png',
          product: {
            title: 'Diamond',
            image: '/ruby.png',
            month: 'April',
            description: 'Diamonds are known for their unmatched brilliance and durability. They symbolize eternal love and strength, making them perfect for Aries individuals.'
          }
        },
        { 
          name: 'Taurus', 
          src: '/ruby.png',
          product: {
            title: 'Emerald',
            image: '/ruby.png',
            month: 'May',
            description: 'Emeralds represent growth, patience, and harmony. Their lush green color resonates with Taurus love for nature and stability.'
          }
        },
        { 
          name: 'Gemini', 
          src: '/ruby.png',
          product: {
            title: 'Pearl',
            image: '/ruby.png',
            month: 'June',
            description: 'Pearls symbolize purity and wisdom, complementing Gemini dual nature with their luminous, multifaceted beauty.'
          }
        },
        { 
          name: 'Cancer', 
          src: '/ruby.png',
          product: {
            title: 'Ruby',
            image: '/ruby.png',
            month: 'July',
            description: 'Rubies with their passionate red hue embody the emotional depth and protective nature of Cancer individuals.'
          }
        },
        { 
          name: 'Leo', 
          src: '/ruby.png',
          product: {
            title: 'Peridot',
            image: '/ruby.png',
            month: 'August',
            description: 'Peridots vibrant green color matches Leos bold personality, symbolizing strength and vitality.'
          }
        },
        { 
          name: 'Virgo', 
          src: '/ruby.png',
          product: {
            title: 'Sapphire',
            image: '/ruby.png',
            month: 'September',
            description: 'Sapphires with their deep blue hue represent wisdom and purity, qualities that resonate with Virgos analytical mind.'
          }
        },
        { 
          name: 'Libra', 
          src: '/ruby.png',
          product: {
            title: 'Opal',
            image: '/ruby.png',
            month: 'October',
            description: 'Opals play of colors reflects Libras love for beauty and balance, symbolizing hope and creativity.'
          }
        },
        { 
          name: 'Scorpio', 
          src: '/ruby.png',
          product: {
            title: 'Topaz',
            image: '/ruby.png',
            month: 'November',
            description: 'Topaz with its fiery hues matches Scorpios intense personality, symbolizing strength and healing.'
          }
        },
        { 
          name: 'Sagittarius', 
          src: '/ruby.png',
          product: {
            title: 'Turquoise',
            image: '/ruby.png',
            month: 'December',
            description: 'Turquoise represents adventure and protection, perfect for the free-spirited Sagittarius.'
          }
        },
        { 
          name: 'Capricornus', 
          src: '/ruby.png',
          product: {
            title: 'Garnet',
            image: '/ruby.png',
            month: 'January',
            description: 'Garnets deep red color symbolizes commitment and energy, matching Capricorns determined nature.'
          }
        },
        { 
          name: 'Aquarius', 
          src: '/ruby.png',
          product: {
            title: 'Amethyst',
            image: '/ruby.png',
            month: 'February',
            description: 'Amethysts purple hues represent spirituality and creativity, aligning with Aquarius innovative spirit.'
          }
        },
        { 
          name: 'Pisces', 
          src: '/ruby.png',
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
    <>
     
      <div className="bg-white text-[#1a1a1a] font-serif" style={{ fontFamily: '"Times New Roman", serif' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
          {/* Left side: Zodiac grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {zodiacSigns.map((sign) => (
              <div 
                key={sign.name}
                className="relative h-[120px]"
                onMouseEnter={() => setHoveredSign(sign.name)}
                onMouseLeave={() => setHoveredSign(null)}
                onClick={() => setSelectedSign(sign)}
              >
                {/* Zodiac Sign (animated on hover) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 border rounded-md p-6 transition-all duration-500 ease-in-out ${
                  selectedSign.name === sign.name ? 'border-red-400 text-red-500' : 'border-gray-300'
                } ${
                  hoveredSign === sign.name ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
                }`}>
                  <Image
                    alt={`${sign.name} zodiac symbol`}
                    className="w-14 h-14"
                    src={sign.src}
                    width={56}
                    height={56}
                    unoptimized
                  />
                  <span className="text-[11px] text-center font-light">
                    {sign.name}
                  </span>
                </div>

                {/* Product Image (appears on hover) */}
                <div className={`absolute inset-0 flex items-center justify-center border rounded-md transition-all duration-500 ease-in-out ${
                  hoveredSign === sign.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <Image
                    alt={`${sign.product.title} product`}
                    className="w-full h-full object-contain p-4"
                    src={sign.product.image}
                    width={80}
                    height={80}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Product details */}
          <div className="flex-1 max-w-lg flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 text-xs text-[#d2691e] cursor-pointer select-none font-light">
              <span className="text-xs leading-none">×</span>
              <span>Products</span>
            </div>
            <h2 className="text-lg text-[#1a1a1a] font-normal">{selectedSign.product.title}</h2>
            <Image
              alt={`${selectedSign.product.title} stone`}
              className="w-full max-w-[350px] h-[230px] object-contain rounded-md shadow-md"
              src={selectedSign.product.image}
              width={350}
              height={230}
              unoptimized
            />
            <div className="text-[11px] text-[#1a1a1a] font-light leading-relaxed">
              <strong className="block text-[12px] mb-2 font-normal">{selectedSign.product.month}</strong>
              {selectedSign.product.description}
            </div>
            <button
              className="bg-[#ff7f50] text-[10px] text-white rounded-full px-5 py-2 mt-2 hover:bg-[#e76b3c] transition-colors duration-300"
              type="button"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RashiProductPage;
