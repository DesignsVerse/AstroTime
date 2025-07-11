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
      <div className="min-h-screen flex items-center justify-center bg-[#f8e1e1] text-[#5a0808]">
        Number not found
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
    '1': 'bg-red-100 text-red-800',
    '2': 'bg-blue-100 text-blue-800',
    '3': 'bg-purple-100 text-purple-800',
    '4': 'bg-green-100 text-green-800',
    '5': 'bg-orange-100 text-orange-800',
    '6': 'bg-pink-100 text-pink-800',
    '7': 'bg-indigo-100 text-indigo-800',
    '8': 'bg-yellow-100 text-yellow-800',
    '9': 'bg-teal-100 text-teal-800'
  };

  return (
    <>
      <Head>
        <title>{currentNumberData.name} Meaning | Sacred Number Interpretation</title>
        <meta name="description" content={currentNumberData.meaning} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative min-h-screen bg-[#f8e1e1] text-[#5a0808] pt-24 pb-12 px-4">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/service/service-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5a0808]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#5a0808]/10 to-transparent -z-10"></div>

        <div className="relative max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">
              The Number <span className="text-[#8b1e1e]">{currentNumberData.name}</span> - {currentNumberData.meaning}
            </h1>
            <p className="text-lg text-[#8b1e1e]">
              Numerology insights for {currentDate}
            </p>
            <div className="w-24 h-1 bg-[#8b1e1e] mx-auto my-4"></div>
          </header>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <article 
              className="bg-white rounded-xl p-6 shadow-md border border-[#f8e1e1] flex-1"
              aria-labelledby="number-title"
            >
              <div className="mb-8 text-center">
                <div className="text-6xl mb-4 font-bold text-[#8b1e1e]">{currentNumberData.symbol}</div>
                <h2 id="number-title" className="font-serif font-bold text-2xl mb-2">
                  {currentNumberData.name} Energy Today
                </h2>
                <p className="text-[#8b1e1e] mb-6">{currentDate}</p>
              </div>

              <div className="space-y-8">
                <section className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                    <FaStar className="text-[#8b1e1e]" /> Description
                  </h3>
                  <p className="text-[#5a0808]">{currentNumberData.description}</p>
                </section>
                
                <section className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                    <FaMoneyBillWave className="text-[#8b1e1e]" /> Finance
                  </h3>
                  <p className="text-[#5a0808]">{currentNumberData.finance}</p>
                </section>
                
                <section className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                    <FaBriefcase className="text-[#8b1e1e]" /> Career
                  </h3>
                  <p className="text-[#5a0808]">{currentNumberData.career}</p>
                </section>
                
                <section className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                    <FaHeartbeat className="text-[#8b1e1e]" /> Health
                  </h3>
                  <p className="text-[#5a0808]">{currentNumberData.health}</p>
                </section>
                
                <section className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                    <FaHeart className="text-[#8b1e1e]" /> Love
                  </h3>
                  <p className="text-[#5a0808]">{currentNumberData.love}</p>
                </section>
                
                <section className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-xl mb-3">Spiritual Meaning</h3>
                  <p className="text-[#5a0808]">
                    The number {currentNumberData.name} represents {currentNumberData.meaning.toLowerCase()}. 
                    In spiritual traditions, this number carries the vibration of {currentNumberData.description.split('.')[0].toLowerCase()}.
                  </p>
                </section>
              </div>
            </article>

            <aside className="w-full lg:w-80 bg-white rounded-xl p-6 shadow-md border border-[#f8e1e1]">
              <h3 className="font-serif font-bold text-xl mb-4 text-[#8b1e1e]">Numerology Insights</h3>
              <div className="space-y-6">
                <div className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Element</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${elementColors[params.number as keyof typeof elementColors]}`}>
                    {params.number === '1' || params.number === '5' ? 'Fire' : 
                     params.number === '2' || params.number === '7' ? 'Water' :
                     params.number === '3' || params.number === '6' ? 'Air' : 'Earth'}
                  </span>
                </div>
                
                <div className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Best Days</h4>
                  <p className="text-[#5a0808]">
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
                
                <div className="bg-[#f8e1e1]/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Lucky Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {params.number === '1' ? ['Gold', 'Yellow'].map(color => (
                      <span key={color} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {color}
                      </span>
                    )) :
                     params.number === '2' ? ['Silver', 'White'].map(color => (
                      <span key={color} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) :
                     params.number === '3' ? ['Purple', 'Violet'].map(color => (
                      <span key={color} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) :
                     params.number === '4' ? ['Green', 'Brown'].map(color => (
                      <span key={color} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) :
                     params.number === '5' ? ['Red', 'Orange'].map(color => (
                      <span key={color} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) :
                     params.number === '6' ? ['Pink', 'Blue'].map(color => (
                      <span key={color} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) :
                     params.number === '7' ? ['Indigo', 'Violet'].map(color => (
                      <span key={color} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) :
                     params.number === '8' ? ['Black', 'Gold'].map(color => (
                      <span key={color} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {color}
                      </span>
                     )) : ['Green', 'White'].map(color => (
                      <span key={color} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {color}
                      </span>
                     ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-12 text-center">
            <Link 
              href="/numerology-ank" 
              className="bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
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