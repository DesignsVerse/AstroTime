import Link from 'next/link';
import { numberData } from '@/data/numberData';

export default function NumbersPage() {
  return (
    <div className="bg-[#fff8f0] font-serif text-[#7a2e09] pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">
          Sacred Numbers Interpretation
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(numberData).map(([number, data]) => (
            <Link 
              key={number} 
              href={`/numerology-ank/${number}`}
              className="bg-[#fff7e2] rounded-xl p-6 shadow-[2px_2px_6px_rgba(194,141,72,0.3)] flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-3">{data.symbol}</div>
              <h2 className="font-semibold text-lg">{data.name}</h2>
              <p className="text-sm text-[#9a4b1d] mt-1">{data.meaning}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}