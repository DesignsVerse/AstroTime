import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { numberData } from '@/data/numberData';

export async function generateStaticParams() {
  return Object.keys(numberData).map((number) => ({
    number: number.toString(),
  }));
}

type NumberKey = keyof typeof numberData;

const NumberDetailPage = ({ params }: { params: { number: string } }) => {
  if (!(params.number in numberData)) {
    return <div className="min-h-screen flex items-center justify-center">Number not found</div>;
  }
  
  const currentNumberData = numberData[Number(params.number) as NumberKey];
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <Head>
        <title>{currentNumberData.name} Meaning | Sacred Number Interpretation</title>
        <meta name="description" content={currentNumberData.meaning} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#fff8f0] font-serif text-[#7a2e09] pt-24 pb-12 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              {currentNumberData.name} - {currentNumberData.meaning}
            </h1>
            <p className="text-lg text-center mt-2 text-[#9a4b1d]">
              Number interpretation for {currentDate}
            </p>
            <hr className="border-[#e2b76a] border-t-2 my-6 max-w-2xl mx-auto" />
          </header>

          <div className="flex  flex-col lg:flex-row gap-8 items-start">
            <article 
              className="bg-[#fff7e2] rounded-xl p-8 shadow-[2px_2px_6px_rgba(194,141,72,0.3)] flex-1"
              aria-labelledby="number-title"
            >
              <div className="mb-8 text-center">
                <div className="text-6xl mb-4">{currentNumberData.symbol}</div>
                <h2 id="number-title" className="font-semibold text-2xl mb-2">
                  {currentNumberData.name} Energy Today
                </h2>
                <p className="text-[#9a4b1d] mb-6">{currentDate}</p>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="font-semibold text-xl mb-3">Description</h3>
                  <p className="text-[#7a2e09]">{currentNumberData.description}</p>
                </section>
                
                <section>
                  <h3 className="font-semibold text-xl mb-3">Finance</h3>
                  <p className="text-[#7a2e09]">{currentNumberData.finance}</p>
                </section>
                
                <section>
                  <h3 className="font-semibold text-xl mb-3">Career</h3>
                  <p className="text-[#7a2e09]">{currentNumberData.career}</p>
                </section>
                
                <section>
                  <h3 className="font-semibold text-xl mb-3">Health</h3>
                  <p className="text-[#7a2e09]">{currentNumberData.health}</p>
                </section>
                
                <section>
                  <h3 className="font-semibold text-xl mb-3">Love</h3>
                  <p className="text-[#7a2e09]">{currentNumberData.love}</p>
                </section>
                
                <section>
                  <h3 className="font-semibold text-xl mb-3">Spiritual Meaning</h3>
                  <p className="text-[#7a2e09]">
                    The number {currentNumberData.name} represents {currentNumberData.meaning.toLowerCase()}. 
                    In spiritual traditions, this number carries the vibration of {currentNumberData.description.split('.')[0].toLowerCase()}.
                  </p>
                </section>
              </div>
            </article>

            <aside className="lg:w-80 bg-[#fff7e2] rounded-xl p-6 shadow-[2px_2px_6px_rgba(194,141,72,0.3)]">
              <h3 className="font-semibold text-xl mb-4">Numerology Insights</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg">Element</h4>
                  <p className="text-[#7a2e09]">
                    {params.number === '1' || params.number === '5' ? 'Fire' : 
                     params.number === '2' || params.number === '7' ? 'Water' :
                     params.number === '3' || params.number === '6' ? 'Air' : 'Earth'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Best Days</h4>
                  <p className="text-[#7a2e09]">
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
                <div>
                  <h4 className="font-medium text-lg">Lucky Colors</h4>
                  <p className="text-[#7a2e09]">
                    {params.number === '1' ? 'Gold, Yellow' :
                     params.number === '2' ? 'Silver, White' :
                     params.number === '3' ? 'Purple, Violet' :
                     params.number === '4' ? 'Green, Brown' :
                     params.number === '5' ? 'Red, Orange' :
                     params.number === '6' ? 'Pink, Blue' :
                     params.number === '7' ? 'Indigo, Violet' :
                     params.number === '8' ? 'Black, Gold' : 'Green, White'}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-12 text-center">
            <Link 
              href="/numerology-ank" 
              className="bg-[#f97316] text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 hover:bg-[#c75105] transition-colors"
            >
              Back to All Numbers
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default NumberDetailPage;