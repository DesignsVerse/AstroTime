"use client"
import React from 'react';
import Link from 'next/link';
import { numberData } from '@/data/numberData';

const NumbersPage = () => {
  const numbersArray = Object.entries(numberData);
  
  // Group numbers for pyramid layout
  const rows = [
    numbersArray.slice(0, 5),  // First row - 5 items
    numbersArray.slice(5, 8),  // Second row - 3 items
    numbersArray.slice(8, 9)   // Third row - 1 item
  ];

  return (
    <div className="bg-[#FCFAF8] font-serif text-[#7a2e09] pt-20 pb-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-1 bg-[#e8c597] rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sacred Numbers <span className="text-[#b85e1a]">Interpretation</span>
          </h1>
          <p className="text-lg md:text-xl text-[#9a4b1d] max-w-2xl mx-auto">
            Discover the mystical meaning behind each sacred number
          </p>
        </div>
        
        {/* Pyramid layout container */}
        <div className="flex flex-col items-center">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-${rowIndex === 1 ? 8 : 6}`}
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${rowIndex * 0.1}s both`,
                maxWidth: `${100 - rowIndex * 20}%`
              }}
            >
              {row.map(([number, data]) => (
                <Link 
                  key={number} 
                  href={`/nemerology-anck/${number}`}
                  className="group relative bg-gradient-to-br from-[#fff7e2] to-[#f8e8cc] rounded-full w-24 h-24 md:w-36 md:h-36 p-4 shadow-[0_4px_12px_rgba(194,141,72,0.2)] flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_16px_rgba(194,141,72,0.3)] mb-4"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(255,236,179,0.4)]"></div>
                  
                  {/* Number symbol */}
                  <div className="text-3xl md:text-5xl mb-2 md:mb-3 transition-transform group-hover:scale-110 duration-300">
                    {data.symbol}
                  </div>
                  
                  {/* Number name */}
                  <h2 className="font-semibold text-sm md:text-lg tracking-wide">
                    {data.name}
                  </h2>
                  
                  {/* Subtle number in corner */}
                  <span className="absolute bottom-2 right-4 text-xs text-[#b85e1a] opacity-70">
                    {number}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        
        {/* Decorative footer */}
        <div className="mt-16 text-center">
          <p className="text-[#9a4b1d] italic">
            "Numbers are the universal language offered by the deities to humans as confirmation of truth."
          </p>
        </div>
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NumbersPage;