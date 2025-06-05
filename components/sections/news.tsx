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

export default function News() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Recently Updated News</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <section className={`${merriweather.className} bg-white text-[#1a2238] max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16`}>
        <div className="flex justify-center items-center space-x-3 mb-8">
          <div className="w-14 h-[1.5px] bg-[#f0e6db]"></div>
          <div className="text-[#f28a79] text-2xl select-none cursor-default">×</div>
          <div className="w-14 h-[1.5px] bg-[#f0e6db]"></div>
        </div>
        <h2 className="text-center text-3xl font-semibold mb-14">Recently Updated News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {/* News Item 1 */}
          <article>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                alt="Person holding a phone showing horoscope app icons on screen, wearing red plaid pants and black shoes, blurred background"
                className="w-full h-auto rounded-lg object-cover"
                height={350}
                src="/ruby.png"
                width={600}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-[#f28a79]/60 rounded-lg cursor-pointer">
                <i className="fas fa-arrow-up-right text-white text-xl"></i>
              </div>
            </div>
            <p className="text-[#f28a79] font-semibold mt-6 mb-2 select-none cursor-default">Jul 27</p>
            <h3 className="text-xl font-semibold mb-3 leading-snug">What&apos;s your horoscope..?</h3>
            <p className="text-[#6b6b7b] mb-6 leading-relaxed">
              Orci porta non pulvinar neque laoreet suspendisse interdum. Neque viverra justo nec ultrices dui sapien. Aliquam nulla facilisi cras fermentum...
            </p>
            <a className="text-[#f28a79] font-semibold select-none cursor-pointer" href="#">
              Read More
            </a>
          </article>
          {/* News Item 2 */}
          <article>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                alt="Person with braided hair writing on a paper with numbers, candle and crystals on white wooden table"
                className="w-full h-auto rounded-lg object-cover"
                height={350}
                src="/ruby.png"
                width={600}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-[#f28a79]/60 rounded-lg cursor-pointer">
                <i className="fas fa-arrow-up-right text-white text-xl"></i>
              </div>
            </div>
            <p className="text-[#f28a79] font-semibold mt-6 mb-2 select-none cursor-default">Jul 27</p>
            <h3 className="text-xl font-semibold mb-3 leading-snug">Numbers are chosen from your destiny</h3>
            <p className="text-[#6b6b7b] mb-6 leading-relaxed">
              At lectus urna duis convallis convallis tellus id. Tortor aliquam nulla facilisi cras fermentum odio. Phasellus egestas tellus rutrum tellus...
            </p>
            <a className="text-[#f28a79] font-semibold select-none cursor-pointer" href="#">
              Read More
            </a>
          </article>
          {/* News Item 3 */}
          <article>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                alt="Person standing on wooden deck with arms raised facing sunset with zodiac signs arch overlay"
                className="w-full h-auto rounded-lg object-cover"
                height={350}
                src="/ruby.png"
                width={600}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-[#f28a79]/60 rounded-lg cursor-pointer">
                <i className="fas fa-arrow-up-right text-white text-xl"></i>
              </div>
            </div>
            <p className="text-[#f28a79] font-semibold mt-6 mb-2 select-none cursor-default">Jul 27</p>
            <h3 className="text-xl font-semibold mb-3 leading-snug">Let&apos;s make the future more interesting</h3>
            <p className="text-[#6b6b7b] mb-6 leading-relaxed">
              Tortor aliquam nulla facilisi cras fermentum odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Tempor id eu nisl nunc...
            </p>
            <a className="text-[#f28a79] font-semibold select-none cursor-pointer" href="#">
              Read More
            </a>
          </article>
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
