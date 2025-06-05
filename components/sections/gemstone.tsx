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

export default function Gems() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gems & Crystal Stones</title>
      </Head>
      <div className={`${merriweather.className} bg-[#faf8f5] relative min-h-screen`}>
        <Image
          alt="Light beige constellation pattern with stars and dots on a very light beige background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          height={1080}
          src="/ruby.png"
          width={1920}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <h1 className="text-center text-[#2a2c4a] text-3xl sm:text-4xl font-normal mb-12">
            Gems & Crystal Stones
          </h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 max-w-7xl mx-auto">
            <li className="flex flex-col items-center text-center text-[#2a2c4a]">
              <div
                className="w-40 h-40 rounded-lg bg-white bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://placehold.co/160x160/ffffff/eeeeee?text=Astrology+Circle+Pattern')`,
                }}
              >
                <Image
                  alt="Pale Emerald Gem, white stone with green veins, centered on a white card with subtle astrology circle pattern"
                  className="max-w-[96px] max-h-[96px]"
                  height={96}
                  src="/ruby.png"
                  width={96}
                />
              </div>
              <p className="mt-4 text-sm">Pale Emerald Gem</p>
              <p className="mt-1 text-xl font-normal">$5.00</p>
            </li>
            <li className="flex flex-col items-center text-center text-[#2a2c4a]">
              <div
                className="w-40 h-40 rounded-lg bg-white bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://placehold.co/160x160/ffffff/eeeeee?text=Astrology+Circle+Pattern')`,
                }}
              >
                <Image
                  alt="Agate Palm Stone, green translucent stone, centered on a white card with subtle astrology circle pattern"
                  className="max-w-[96px] max-h-[96px]"
                  height={96}
                  src="/ruby.png"
                  width={96}
                />
              </div>
              <p className="mt-4 text-sm">Agate Palm Stone</p>
              <p className="mt-1 text-xl font-normal">$9.00</p>
            </li>
            <li className="flex flex-col items-center text-center text-[#2a2c4a]">
              <div
                className="w-40 h-40 rounded-lg bg-white bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://placehold.co/160x160/ffffff/eeeeee?text=Astrology+Circle+Pattern')`,
                }}
              >
                <Image
                  alt="Blue Mineral Rock, bright blue rough stone, centered on a white card with subtle astrology circle pattern"
                  className="max-w-[96px] max-h-[96px]"
                  height={96}
                  src="/ruby.png"
                  width={96}
                />
              </div>
              <p className="mt-4 text-sm">Blue Mineral Rock</p>
              <p className="mt-1 text-xl font-normal">$6.00</p>
            </li>
            <li className="flex flex-col items-center text-center text-[#2a2c4a]">
              <div
                className="w-40 h-40 rounded-lg bg-white bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://placehold.co/160x160/ffffff/eeeeee?text=Astrology+Circle+Pattern')`,
                }}
              >
                <Image
                  alt="Mineral Crystal Fluorapatite, green crystal on orange mineral base, centered on a white card with subtle astrology circle pattern"
                  className="max-w-[96px] max-h-[96px]"
                  height={96}
                  src="/ruby.png"
                  width={96}
                />
              </div>
              <p className="mt-4 text-sm">Mineral Crystal Fluorapatite</p>
              <p className="mt-1 text-xl font-normal">$10.00</p>
            </li>
            <li className="flex flex-col items-center text-center text-[#2a2c4a]">
              <div
                className="w-40 h-40 rounded-lg bg-white bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://placehold.co/160x160/ffffff/eeeeee?text=Astrology+Circle+Pattern')`,
                }}
              >
                <Image
                  alt="Greenish-Yellow Beryl, yellow translucent crystal, centered on a white card with subtle astrology circle pattern"
                  className="max-w-[96px] max-h-[96px]"
                  height={96}
                  src="/ruby.png"
                  width={96}
                />
              </div>
              <p className="mt-4 text-sm">Greenish-Yellow Beryl</p>
              <p className="mt-1 text-xl font-normal">$9.00</p>
            </li>
            <li className="flex flex-col items-center text-center text-[#2a2c4a]">
              <div
                className="w-40 h-40 rounded-lg bg-white bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://placehold.co/160x160/ffffff/eeeeee?text=Astrology+Circle+Pattern')`,
                }}
              >
                <Image
                  alt="Green Emerald Stone, rough green crystal, centered on a white card with subtle astrology circle pattern"
                  className="max-w-[96px] max-h-[96px]"
                  height={96}
                  src="/ruby.png"
                  width={96}
                />
              </div>
              <p className="mt-4 text-sm">Green Emerald Stone</p>
              <p className="mt-1 text-xl font-normal">$12.00</p>
            </li>
          </ul>
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
