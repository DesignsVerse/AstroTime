"use client"
import { Merriweather, Open_Sans } from 'next/font/google';
import Image from 'next/image';

// Configure fonts
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  return (
    <>
      <div className={`${openSans.className} bg-[#272b4a] text-white`}>
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20">
          {/* Top social icons */}
          <div className="flex justify-end pt-6 space-x-6">
            <button
              aria-label="Twitter"
              className="w-8 h-8 border border-[#f68a6a] rounded-full flex items-center justify-center text-[#f68a6a] hover:bg-[#f68a6a] hover:text-[#272b4a] transition"
            >
              <i className="fab fa-twitter text-[14px]"></i>
            </button>
            <button
              aria-label="Facebook"
              className="w-8 h-8 border border-[#f68a6a] rounded-full flex items-center justify-center text-[#f68a6a] hover:bg-[#f68a6a] hover:text-[#272b4a] transition"
            >
              <i className="fab fa-facebook-f text-[14px]"></i>
            </button>
            <button
              aria-label="Instagram"
              className="w-8 h-8 border border-[#f68a6a] rounded-full flex items-center justify-center text-[#f68a6a] hover:bg-[#f68a6a] hover:text-[#272b4a] transition"
            >
              <i className="fab fa-instagram text-[14px]"></i>
            </button>
          </div>
          <hr className="border-t border-[#3f4163] my-6" />
          {/* Main top section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
            {/* Logo and text */}
            <div className="flex items-center space-x-4">
              <Image
                alt="Sun icon with coral color representing Suriya logo"
                className="w-10 h-10"
                height={40}
                src="/ruby.png"
                width={40}
              />
              <h1 className={`${merriweather.className} text-white text-[28px] leading-[34px] tracking-wide select-none`}>
                Suriya
              </h1>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="border border-[#f68a6a] rounded-full w-16 h-16 flex items-center justify-center">
                <i className="fas fa-phone-alt text-[#f68a6a] text-[24px]"></i>
              </div>
              <div>
                <p className="text-[#f68a6a] text-[14px] font-normal mb-1">Phone</p>
                <p className={`${merriweather.className} text-white text-[24px] leading-[28px]`}>
                  000 - 123456789
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="border border-[#f68a6a] rounded-full w-16 h-16 flex items-center justify-center">
                <i className="fas fa-envelope text-[#f68a6a] text-[24px]"></i>
              </div>
              <div>
                <p className="text-[#f68a6a] text-[14px] font-normal mb-1">Email id</p>
                <p className={`${merriweather.className} text-white text-[24px] leading-[28px] font-bold`}>
                  info@example.com
                </p>
              </div>
            </div>
          </div>
          <hr className="border-t border-[#3f4163] my-6" />
          {/* Middle section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-[1100px] mx-auto text-white">
            {/* Left text block */}
            <div className="text-[15px] leading-6 font-normal max-w-[300px]">
              Dui accumsan sit amet nulla facilisi morbi tempus. Fames ac turpis egestas sed. Tortor consequat id porta nibh venenatis cras sed. Nam libero justo laoreet sit amet cursus sit amet habitasse.
            </div>
            {/* Horoscopes */}
            <div className={`${merriweather.className} text-[#f68a6a] text-[20px] leading-[28px] font-semibold select-none`}>
              Horoscope
            </div>
            {/* Gemstones */}
            <div className={`${merriweather.className} text-[#f68a6a] text-[20px] leading-[28px] font-semibold select-none`}>
              Gemstones
            </div>
            {/* Subscribe */}
            <div>
              <h3 className={`${merriweather.className} text-[#f68a6a] text-[20px] leading-[28px] font-semibold mb-3 select-none`}>
                Subscribe
              </h3>
              <div className="space-y-3 max-w-[320px]">
                <input
                  className="w-full bg-[#4a4f6e] rounded-lg py-3 px-4 placeholder:text-white placeholder:font-semibold placeholder:text-[16px] focus:outline-none"
                  placeholder="Your Email"
                  type="email"
                />
                <button
                  className={`${merriweather.className} w-full bg-[#f68a6a] rounded-lg py-3 text-white text-[18px] leading-[28px] font-semibold hover:bg-[#e77a5a] transition`}
                  type="button"
                >
                  Send Message
                </button>
              </div>
              <p className="text-[13px] mt-2 max-w-[320px]">*Get your horoscope every day.</p>
            </div>
          </div>
          <hr className="border-t border-[#3f4163] my-6" />
          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[14px] font-normal text-white pb-6">
            <div className="mb-4 sm:mb-0 select-none">All Right Reserved © 2024 WeDesignTech.</div>
            <div className="flex items-center space-x-4 select-none">
              <span>Payment methods</span>
              <Image
                alt="Visa card logo"
                className="h-7"
                height={28}
                src="ruby.png"
                width={48}
              />
              <Image
                alt="Mastercard logo"
                className="h-7"
                height={28}
                src="ruby.png"
                width={48}
              />
              <Image
                alt="American Express card logo"
                className="h-7"
                height={28}
                src="/ruby.png"
                width={48}
              />
              <Image
                alt="PayPal logo"
                className="h-7"
                height={28}
                src="/ruby.png"
                width={48}
              />
              <Image
                alt="Discover card logo"
                className="h-7"
                height={28}
                src="/ruby.png"
                width={48}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        body {
          font-family: ${openSans.style.fontFamily}, sans-serif;
        }
        .font-serif {
          font-family: ${merriweather.style.fontFamily}, serif;
        }
      `}</style>
    </>
  );
}
