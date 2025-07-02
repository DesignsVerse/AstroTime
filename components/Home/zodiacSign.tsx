"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ZodiacSign {
  name: string;
  src: string;
  month: string;
  color: string;
}

const Rashi: React.FC = () => {
  const zodiacSigns: ZodiacSign[] = [
    { name: "Aries", src: "/rashi/1.webp", month: "April", color: "#FCFAF8" },
    { name: "Taurus", src: "/rashi/2.webp", month: "May", color: "#FCFAF8" },
    { name: "Gemini", src: "/rashi/3.webp", month: "June", color: "#FCFAF8" },
    { name: "Cancer", src: "/rashi/4.webp", month: "July", color: "#FCFAF8" },
    { name: "Leo", src: "/rashi/5.webp", month: "August", color: "#FCFAF8" },
    { name: "Virgo", src: "/rashi/6.webp", month: "September", color: "#FCFAF8" },
    { name: "Libra", src: "/rashi/7.webp", month: "October", color: "#FCFAF8" },
    { name: "Scorpio", src: "/rashi/8.webp", month: "November", color: "#FCFAF8" },
    { name: "Sagittarius", src: "/rashi/9.webp", month: "December", color: "#FCFAF8" },
    { name: "Capricornus", src: "/rashi/10.webp", month: "January", color: "#FCFAF8" },
    { name: "Aquarius", src: "/rashi/11.webp", month: "February", color: "#FCFAF8" },
    { name: "Pisces", src: "/rashi/12.webp", month: "March", color: "#FCFAF8" },
  ];

  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

  return (
    <div
      className="bg-gradient-to-b from-white to-gray-50 text-[#1a1a1a] font-serif min-h-screen flex flex-col items-center justify-center w-full"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      <div className="text-center pt-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-light text-[#120B41] tracking-wide">
          Explore Your <br />
          <span className="text-5xl md:text-6xl font-bold text-[#800000]">
            Zodiac Sign
          </span>
        </h2>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-8 py-4 flex flex-col items-center">
        <h3 className="text-3xl font-normal mb-12 text-gray-800 text-center">
          Select Your Zodiac Sign
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 w-full">
          {zodiacSigns.map((sign) => (
            <div
              key={sign.name}
              className="flex flex-col items-center justify-center gap-3 border-2 rounded-xl p-3 sm:p-5 transition-all duration-300 cursor-pointer border-gray-200 hover:border-gray-400 hover:shadow-lg"
              style={{ backgroundColor: sign.color }}
              onClick={() => setSelectedSign(sign)}
            >
              <Image
                alt={`${sign.name} zodiac symbol`}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                src={sign.src}
                width={96}
                height={96}
                unoptimized
              />
              <span className="text-sm sm:text-base text-center font-light">
                {sign.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rashi;