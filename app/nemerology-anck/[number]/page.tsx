
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { numberData } from '@/data/numberData';
import { FaArrowLeft, FaStar, FaHeart, FaMoneyBillWave, FaBriefcase, FaHeartbeat } from 'react-icons/fa';

export async function generateStaticParams() {
  return Object.keys(numberData).map((number) => ({
    number: number.toString(),
  }));
}

type NumberKey = keyof typeof numberData;

const NumberDetailPage = ({ params }: { params: { number: string } }) => {
  if (!(params.number in numberData)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-red-100 text-rose-900">
        <div
          className="text-2xl font-semibold"
        >
          Number not found
        </div>
      </div>
    );
  }
  
  const currentNumberData = numberData[Number(params.number) as NumberKey];
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Define element colors based on number
  const elementColors = {
    '1': 'bg-red-100 text-red-800 ring-red-200',
    '2': 'bg-blue-100 text-blue-800 ring-blue-200',
    '3': 'bg-purple-100 text-purple-800 ring-purple-200',
    '4': 'bg-green-100 text-green-800 ring-green-200',
    '5': 'bg-orange-100 text-orange-800 ring-orange-200',
    '6': 'bg-pink-100 text-pink-800 ring-pink-200',
    '7': 'bg-indigo-100 text-indigo-800 ring-indigo-200',
    '8': 'bg-yellow-100 text-yellow-800 ring-yellow-200',
    '9': 'bg-teal-100 text-teal-800 ring-teal-200'
  };

  return (
    <>
      <Head>
        <title>{currentNumberData.name} Meaning | Sacred Number Interpretation</title>
        <meta name="description" content={currentNumberData.meaning} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative min-h-screen bg-[#FCFAF8] text-[#1C1C1C] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/service/service-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#800000]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#800000]/10 to-transparent -z-10"></div>

        <div 
          className="relative max-w-5xl mx-auto"
        >
          <header className="mb-12 text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold font-serif mb-3 tracking-tight"
            >
              The Number <span className="text-[#800000]">{currentNumberData.name}</span> - {currentNumberData.meaning}
            </h1>
            <p 
              className="text-lg md:text-xl text-[#800000]"
            >
              Numerology insights for {currentDate}
            </p>
            <div 
              className="w-32 h-1 bg-[#800000] mx-auto my-6 rounded-full"
            ></div>
          </header>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <article 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#f5f5f5] flex-1"
              aria-labelledby="number-title"
            >
              <div className="mb-10 text-center">
                <div 
                  className="text-7xl mb-4 font-bold text-[#800000]"
                >
                  {currentNumberData.symbol}
                </div>
                <h2 id="number-title" className="font-serif font-bold text-3xl mb-3 text-[#1C1C1C]">
                  {currentNumberData.name} Energy Today
                </h2>
                <p className="text-[#800000] mb-6">{currentDate}</p>
              </div>

              <div className="space-y-10">
                <section 
                  className="bg-[#FCFAF8] p-6 rounded-xl transition-all hover:shadow-md"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3 flex items-center gap-3">
                    <FaStar className="text-[#800000]" /> Description
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed">{currentNumberData.description}</p>
                </section>
                
                <section 
                  className="bg-[#FCFAF8] p-6 rounded-xl transition-all hover:shadow-md"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3 flex items-center gap-3">
                    <FaMoneyBillWave className="text-[#800000]" /> Finance
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed">{currentNumberData.finance}</p>
                </section>
                
                <section 
                  className="bg-[#FCFAF8] p-6 rounded-xl transition-all hover:shadow-md"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3 flex items-center gap-3">
                    <FaBriefcase className="text-[#800000]" /> Career
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed">{currentNumberData.career}</p>
                </section>
                
                <section 
                  className="bg-[#FCFAF8] p-6 rounded-xl transition-all hover:shadow-md"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3 flex items-center gap-3">
                    <FaHeartbeat className="text-[#800000]" /> Health
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed">{currentNumberData.health}</p>
                </section>
                
                <section 
                  className="bg-[#FCFAF8] p-6 rounded-xl transition-all hover:shadow-md"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3 flex items-center gap-3">
                    <FaHeart className="text-[#800000]" /> Love
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed">{currentNumberData.love}</p>
                </section>
                
                <section 
                  className="bg-[#FCFAF8] p-6 rounded-xl transition-all hover:shadow-md"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3">Spiritual Meaning</h3>
                  <p className="text-[#1C1C1C] leading-relaxed">
                    The number {currentNumberData.name} represents {currentNumberData.meaning.toLowerCase()}. 
                    In spiritual traditions, this number carries the vibration of {currentNumberData.description.split('.')[0].toLowerCase()}.
                  </p>
                </section>
              </div>
            </article>

            <aside 
              className="w-full lg:w-96 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#f5f5f5]"
            >
              <h3 className="font-serif font-bold text-2xl mb-6 text-[#1C1C1C]">Numerology Insights</h3>
              <div className="space-y-8">
                <div className="bg-[#FCFAF8] p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-3">Element</h4>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ring-1 ${elementColors[params.number as keyof typeof elementColors]}`}> 
                    {params.number === '1' || params.number === '5' ? 'Fire' : 
                     params.number === '2' || params.number === '7' ? 'Water' :
                     params.number === '3' || params.number === '6' ? 'Air' : 'Earth'}
                  </span>
                </div>
                
                <div className="bg-[#FCFAF8] p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-3">Best Days</h4>
                  <p className="text-[#1C1C1C] leading-relaxed">
                    {params.number === '1' ? 'Sunday, Monday' :
                     params.number === '2' ? 'Monday, Friday' :
                     params.number === '3' ? 'Thursday, Sunday' :
                     params.number === '4' ? 'Wednesday, Saturday' :
                     params.number === '5' ? 'Wednesday, Friday' :
                     params.number === '6' ? 'Friday, Monday' :
                     params.number === '7' ? 'Sunday, Monday' :
                     params.number === '8' ? 'Saturday, Sunday' : 'Tuesday, Thursday'}
                  </p>
                </div>
                
                <div className="bg-[#FCFAF8] p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-3">Lucky Colors</h4>
                  <div className="flex flex-wrap gap-3">
                    {params.number === '1' ? ['Gold', 'Yellow'].map(color => (
                      <span key={color} className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm ring-1 ring-yellow-200">
                        {color}
                      </span>
                    )) :
                     params.number === '2' ? ['Silver', 'White'].map(color => (
                      <span key={color} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm ring-1 ring-gray-200">
                        {color}
                      </span>
                     )) :
                     params.number === '3' ? ['Purple', 'Violet'].map(color => (
                      <span key={color} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm ring-1 ring-purple-200">
                        {color}
                      </span>
                     )) :
                     params.number === '4' ? ['Green', 'Brown'].map(color => (
                      <span key={color} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm ring-1 ring-green-200">
                        {color}
                      </span>
                     )) :
                     params.number === '5' ? ['Red', 'Orange'].map(color => (
                      <span key={color} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm ring-1 ring-orange-200">
                        {color}
                      </span>
                     )) :
                     params.number === '6' ? ['Pink', 'Blue'].map(color => (
                      <span key={color} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm ring-1 ring-blue-200">
                        {color}
                      </span>
                     )) :
                     params.number === '7' ? ['Indigo', 'Violet'].map(color => (
                      <span key={color} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm ring-1 ring-indigo-200">
                        {color}
                      </span>
                     )) :
                     params.number === '8' ? ['Black', 'Gold'].map(color => (
                      <span key={color} className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm ring-1 ring-yellow-200">
                        {color}
                      </span>
                     )) : ['Green', 'White'].map(color => (
                      <span key={color} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm ring-1 ring-green-200">
                        {color}
                      </span>
                     ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <section 
            className="mt-16 text-center"
          >
            <Link 
              href="/numerology-ank" 
              className="bg-gradient-to-r from-[#800000] to-[#a83232] hover:from-[#a83232] hover:to-[#800000] text-white font-semibold py-4 px-10 rounded-lg inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaArrowLeft /> Back to All Numbers
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default NumberDetailPage;