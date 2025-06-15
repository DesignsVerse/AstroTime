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

export default function Magic() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Let&apos;s Make Some Magic</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className={`${merriweather.className} bg-[#f5f7f8] text-[#2a2e4a] max-w-7xl mx-auto px-6 py-16 flex flex-col items-center relative`}>
        <button
          aria-label="Previous"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-[#f7b59e] text-2xl"
          type="button"
        >
          <i className="fas fa-long-arrow-alt-left"></i>
        </button>
        <button
          aria-label="Next"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#f7b59e] text-2xl"
          type="button"
        >
          <i className="fas fa-long-arrow-alt-right"></i>
        </button>
        <h2 className="text-3xl font-semibold mb-2">Let&apos;s Make Some Magic</h2>
        <p className="text-center text-sm max-w-xl mb-12 text-[#5a5f7d]">
          Sed Blandit Libero Volutpat Sed Cras Ornare. A Erat Nam At Lectus Urna Duis Convallis Convallis.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-20">
          <div className="flex flex-col items-center max-w-[280px]">
            <Image
              alt="Close-up of a hand holding a gold pen drawing lines on an astrology chart with zodiac signs and degrees"
              className="rounded-full w-72 h-72 object-cover"
              height={280}
              src="/ruby.png"
              width={280}
            />
            <h3 className="mt-6 text-lg font-semibold">Astrology</h3>
          </div>
          <div className="flex flex-col items-center max-w-[280px]">
            <Image
              alt="Two hands with red nail polish, one hand pointing at the palm of the other, with wooden table and scrabble tiles in background"
              className="rounded-full w-72 h-72 object-cover"
              height={280}
              src="/ruby.png"
              width={280}
            />
            <h3 className="mt-6 text-lg font-semibold">Palmistry</h3>
          </div>
          <div className="flex flex-col items-center max-w-[280px]">
            <Image
              alt="Person writing numerology calculations on a yellow paper with crystals and dried flowers on a white wooden table"
              className="rounded-full w-72 h-72 object-cover"
              height={280}
              src="/ruby.png"
              width={280}
            />
            <h3 className="mt-6 text-lg font-semibold">Numerology</h3>
          </div>
        </div>
      </div>
      <style jsx>{`
        body {
          font-family: ${merriweather.style.fontFamily}, serif;
        }
      `}</style>
    </>
  );
}
