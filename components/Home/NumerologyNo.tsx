"use client"
import React from 'react';
import Link from 'next/link';
import { numberData } from '@/data/numberData';

const NumbersPage = () => {
  const numbersArray = Object.entries(numberData);
  
  // Group numbers for grid layout - 3x3 on mobile, pyramid on desktop
  const mobileGrid = [
    numbersArray.slice(0, 3),  // First row - 3 items
    numbersArray.slice(3, 6),  // Second row - 3 items  
    numbersArray.slice(6, 9)   // Third row - 3 items
  ];

  // Desktop pyramid layout
  const desktopRows = [
    numbersArray.slice(0, 5),  // First row - 5 items
    numbersArray.slice(5, 8),  // Second row - 3 items
    numbersArray.slice(8, 9)   // Third row - 1 item
  ];

  return (
    <div className="bg-[#FCFAF8] font-serif text-[#800000] pt-32 md:pt-20 pb-8 md:pb-16 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header with decorative elements */}
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-1 bg-[#8b1e1e] rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sacred Numbers <span className="text-[#8b1e1e]">Interpretation</span>
          </h1>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
            Discover the mystical meaning behind each sacred number
          </p>
        </div>
        
        {/* Mobile Grid Layout (3x3) */}
        <div className="block md:hidden">
          {mobileGrid.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className="flex justify-center gap-4 mb-4"
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${rowIndex * 0.1}s both`
              }}
            >
              {row.map(([number, data]) => (
                <Link 
                  key={number} 
                  href={`/nemerology-anck/${number}`}
                  className="group relative bg-gradient-to-br from-[#2a0a0a] to-[#5a0808] rounded-full w-20 h-20 p-3 shadow-[0_4px_12px_rgba(139,30,30,0.3)] flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_16px_rgba(139,30,30,0.5)] border border-[#8b1e1e]/20"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(139,30,30,0.2)]"></div>
                  
                  {/* Number symbol */}
                  <div className="text-2xl mb-1 transition-transform group-hover:scale-110 duration-300 text-[#f8e1e1]">
                    {data.symbol}
                  </div>
                  
                  {/* Number name */}
                  <h2 className="font-semibold text-xs tracking-wide text-white">
                    {data.name}
                  </h2>
                  
                  {/* Subtle number in corner */}
                  <span className="absolute bottom-1 right-2 text-xs text-[#8b1e1e] opacity-70">
                    {number}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop Pyramid Layout */}
        <div className="hidden md:flex flex-col items-center">
          {desktopRows.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className={`flex flex-wrap justify-center gap-8 mb-${rowIndex === 1 ? 8 : 6}`}
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${rowIndex * 0.1}s both`,
                maxWidth: `${100 - rowIndex * 20}%`
              }}
            >
              {row.map(([number, data]) => (
                <Link 
                  key={number} 
                  href={`/nemerology-anck/${number}`}
                  className="group relative bg-gradient-to-br from-[#2a0a0a] to-[#5a0808] rounded-full w-36 h-36 p-4 shadow-[0_4px_12px_rgba(139,30,30,0.3)] flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_16px_rgba(139,30,30,0.5)] mb-4 border border-[#8b1e1e]/20"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(139,30,30,0.2)]"></div>
                  
                  {/* Number symbol */}
                  <div className="text-5xl mb-3 transition-transform group-hover:scale-110 duration-300 text-[#f8e1e1]">
                    {data.symbol}
                  </div>
                  
                  {/* Number name */}
                  <h2 className="font-semibold text-lg tracking-wide text-white">
                    {data.name}
                  </h2>
                  
                  {/* Subtle number in corner */}
                  <span className="absolute bottom-2 right-4 text-xs text-[#8b1e1e] opacity-70">
                    {number}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        
        {/* Decorative footer */}
        <div className="mt-8 md:mt-16 text-center">
          <p className=" italic">
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