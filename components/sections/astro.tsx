"use client"
import { Merriweather } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

// Configure Merriweather font
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Experts() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Talk With Our Experts</title>
      </Head>
      <section className={`${merriweather.className} bg-[#f7f7f7] relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-[180px] bg-[#f7f7f7] -skew-y-[3deg] origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#1a254f] text-3xl font-normal leading-[1.3]">
              Talk With Our Experts
            </h2>
            <button
              className="text-[#f28a6c] border border-[#f28a6c] rounded-full px-6 py-2 text-sm font-normal leading-6 hover:bg-[#f28a6c] hover:text-white transition"
              type="button"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
            <div className="bg-white border border-[#fff0e9] rounded-lg p-8 flex items-center space-x-8">
              <Image
                alt="Portrait of Jhonny Lekris, a numerologist, wearing a purple head wrap and holding a crystal ball"
                className="w-[120px] h-[120px] rounded-full object-cover flex-shrink-0"
                height={120}
                src="https://storage.googleapis.com/a1aa/image/237213a1-7d5a-47b4-733c-0b227ede9666.jpg"
                width={120}
              />
              <div>
                <h3 className="text-[#f28a6c] text-xl font-normal leading-[1.3] mb-1">
                  Jhonny Lekris
                </h3>
                <p className="text-[#4a4a4a] text-sm font-normal leading-5 mb-6">
                  Numerologist
                </p>
                <button
                  className="bg-[#f28a6c] text-white rounded-full px-6 py-2 text-sm font-normal leading-6 hover:bg-[#e06f4a] transition"
                  type="button"
                >
                  Let&apos;s Chat
                </button>
              </div>
            </div>
            <div className="bg-white border border-[#fff0e9] rounded-lg p-8 flex items-center space-x-8">
              <Image
                alt="Portrait of Nisha Jenifer, a writter, smiling and pointing upwards with one finger"
                className="w-[120px] h-[120px] rounded-full object-cover flex-shrink-0"
                height={120}
                src="https://storage.googleapis.com/a1aa/image/25d1b9db-eecd-4f9d-7a0b-17c35ab2dcfe.jpg"
                width={120}
              />
              <div>
                <h3 className="text-[#f28a6c] text-xl font-normal leading-[1.3] mb-1">
                  Nisha Jenifer
                </h3>
                <p className="text-[#4a4a4a] text-sm font-normal leading-5 mb-6">
                  Writter
                </p>
                <button
                  className="bg-[#f28a6c] text-white rounded-full px-6 py-2 text-sm font-normal leading-6 hover:bg-[#e06f4a] transition"
                  type="button"
                >
                  Let&apos;s Chat
                </button>
              </div>
            </div>
            <div className="bg-white border border-[#fff0e9] rounded-lg p-8 flex items-center space-x-8">
              <Image
                alt="Portrait of Dev Martin, a palmist, sitting at a table with cards in hand"
                className="w-[120px] h-[120px] rounded-full object-cover flex-shrink-0"
                height={120}
                src="https://storage.googleapis.com/a1aa/image/7a9ed816-906e-4869-d0d9-d17a2375a4ce.jpg"
                width={120}
              />
              <div>
                <h3 className="text-[#f28a6c] text-xl font-normal leading-[1.3] mb-1">
                  Dev Martin
                </h3>
                <p className="text-[#4a4a4a] text-sm font-normal leading-5 mb-6">
                  Palmist
                </p>
                <button
                  className="bg-[#f28a6c] text-white rounded-full px-6 py-2 text-sm font-normal leading-6 hover:bg-[#e06f4a] transition"
                  type="button"
                >
                  Let&apos;s Chat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 pb-8">
          <div className="w-24 h-[1px] bg-[#fff0e9]"></div>
          <div className="text-[#f28a6c] text-2xl leading-none select-none">×</div>
          <div className="w-24 h-[1px] bg-[#fff0e9]"></div>
        </div>
      </section>
      <style jsx>{`
        body {
          font-family: ${merriweather.style.fontFamily}, serif;
        }
      `}</style>
    </>
  );
}
