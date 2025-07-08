import React from 'react';
import Link from 'next/link';
import { numberData } from '@/data/numberData';

const NumbersPage = () => {
  // Convert object to array and split into groups for pyramid layout
  const numbersArray = Object.entries(numberData);
  const firstRow = numbersArray.slice(0, 5);
  const secondRow = numbersArray.slice(5, 8);
  const thirdRow = numbersArray.slice(8, 9);

  return (
    <div className="bg-[#FCFAF8] font-serif text-[#7a2e09] pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">
          Sacred Numbers Interpretation
        </h1>
        
        {/* First row - 5 items */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          {firstRow.map(([number, data]) => (
            <Link 
              key={number} 
              href={`/nemerology-anck/${number}`}
              className="bg-[#fff7e2] rounded-full w-20 h-20 md:w-32 md:h-32 p-3 md:p-6 shadow-[2px_2px_6px_rgba(194,141,72,0.3)] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform mb-3"
            >
              <div className="text-2xl md:text-4xl mb-2 md:mb-3">{data.symbol}</div>
              <h2 className="font-semibold text-sm md:text-lg">{data.name}</h2>
            </Link>
          ))}
        </div>
        
        {/* Second row - 3 items */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          {secondRow.map(([number, data]) => (
            <Link 
              key={number} 
              href={`/nemerology-anck/${number}`}
              className="bg-[#fff7e2] rounded-full w-20 h-20 md:w-32 md:h-32 p-3 md:p-6 shadow-[2px_2px_6px_rgba(194,141,72,0.3)] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform mb-3"
            >
              <div className="text-2xl md:text-4xl mb-2 md:mb-3">{data.symbol}</div>
              <h2 className="font-semibold text-sm md:text-lg">{data.name}</h2>
            </Link>
          ))}
        </div>
        
        {/* Third row - 1 item */}
        <div className="flex flex-wrap justify-center">
          {thirdRow.map(([number, data]) => (
            <Link 
              key={number} 
              href={`/nemerology-anck/${number}`}
              className="bg-[#fff7e2] rounded-full w-20 h-20 md:w-32 md:h-32 p-3 md:p-6 shadow-[2px_2px_6px_rgba(194,141,72,0.3)] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform mb-3"
            >
              <div className="text-2xl md:text-4xl mb-2 md:mb-3">{data.symbol}</div>
              <h2 className="font-semibold text-sm md:text-lg">{data.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumbersPage;