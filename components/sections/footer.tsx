"use client"
import { Merriweather, Open_Sans } from 'next/font/google';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Configure fonts
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  return (
    <>
      <div className={`${openSans.className} bg-[#272b4a] text-white`}>
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20">
          {/* Top social icons */}
          <div className="flex justify-end pt-8 space-x-4">
            <button
              aria-label="twitter"
              className="w-10 h-10 border border-[#800000] rounded-full flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-[#272b4a] transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-[16px]" />
            </button>
            <button
              aria-label="facebook"
              className="w-10 h-10 border border-[#800000] rounded-full flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-[#272b4a] transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-[16px]" />
            </button>
            <button
              aria-label="instagram"
              className="w-10 h-10 border border-[#800000] rounded-full flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-[#272b4a] transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[16px]" />
            </button>
          </div>
          
          <hr className="border-t border-[#3f4163] my-8" />
          
          {/* Main top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
            {/* Logo and text */}
            <div className="flex items-center space-x-4">
              <div className="border border-[#800000] rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  alt="Sun icon with coral color representing Suriya logo"
                  className="w-8 h-8"
                  height={32}
                  src="/ruby.png"
                  width={32}
                />
              </div>
              <div>
                <h1 className={`${merriweather.className} text-white text-3xl font-bold tracking-wide`}>
                  Suriya
                </h1>
                <p className="text-[#a1a3b8] text-sm mt-1">Your cosmic guide to destiny</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="border border-[#800000] rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#800000] group transition-colors duration-300">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-[#800000] text-2xl group-hover:text-white" />
              </div>
              <div>
                <p className="text-[#800000] text-sm uppercase tracking-wider mb-1">Phone</p>
                <p className={`${merriweather.className} text-white text-2xl font-bold hover:text-[#800000] transition-colors duration-300`}>
                  <a href="tel:000123456789">000 - 123456789</a>
                </p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="border border-[#800000] rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#800000] group transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#800000] text-2xl group-hover:text-white" />
              </div>
              <div>
                <p className="text-[#800000] text-sm uppercase tracking-wider mb-1">Email id</p>
                <p className={`${merriweather.className} text-white text-2xl font-bold hover:text-[#800000] transition-colors duration-300`}>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <hr className="border-t border-[#3f4163] my-8" />
          
          {/* Middle section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto py-8">
            {/* Left text block */}
            <div className="space-y-4">
              <h3 className={`${merriweather.className} text-[#800000] text-xl font-bold`}>About Suriya</h3>
              <p className="text-[#a1a3b8] leading-relaxed">
                Dui accumsan sit amet nulla facilisi morbi tempus. Fames ac turpis egestas sed. Tortor consequat id porta nibh venenatis cras sed.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className={`${merriweather.className} text-[#800000] text-xl font-bold`}>Horoscope</h3>
              <ul className="space-y-2 text-[#a1a3b8]">
                {['Daily', 'Weekly', 'Monthly', 'Yearly', 'Love', 'Career'].map((item) => (
                  <li key={item} className="hover:text-[#800000] transition-colors duration-300">
                    <a href="#">{item} Horoscope</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gemstones */}
            <div className="space-y-4">
              <h3 className={`${merriweather.className} text-[#800000] text-xl font-bold`}>Gemstones</h3>
              <ul className="space-y-2 text-[#a1a3b8]">
                {['Ruby', 'Emerald', 'Sapphire', 'Diamond', 'Pearl', 'Topaz'].map((gem) => (
                  <li key={gem} className="hover:text-[#800000] transition-colors duration-300">
                    <a href="#">{gem} Benefits</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Subscribe */}
            <div className="space-y-4">
              <h3 className={`${merriweather.className} text-[#800000] text-xl font-bold`}>Subscribe</h3>
              <p className="text-[#a1a3b8]">Get daily cosmic updates straight to your inbox</p>
              <div className="space-y-3">
                <input
                  className="w-full bg-[#3f4163] border border-[#4a4f6e] rounded-lg py-3 px-4 placeholder:text-[#a1a3b8] focus:outline-none focus:ring-2 focus:ring-[#800000] transition"
                  placeholder="Your Email"
                  type="email"
                />
                <button
                  className={`${merriweather.className} w-full bg-[#800000] hover:bg-[#e07a5a] rounded-lg py-3 text-white font-bold transition-colors duration-300 shadow-md hover:shadow-lg`}
                  type="button"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-[#a1a3b8] text-xs">*We'll never share your email with anyone</p>
            </div>
          </div>
          
          <hr className="border-t border-[#3f4163] my-8" />
          
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <div className="text-[#a1a3b8] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Suriya. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-[#a1a3b8] text-sm mr-2">Secure payments:</span>
              {['visa', 'mastercard', 'amex', 'paypal', 'discover'].map((card) => (
                <div 
                  key={card} 
                  className="bg-white p-1 rounded-md hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    alt={`${card} card logo`}
                    className="h-6 w-auto"
                    height={24}
                    src={`/ruby.png`}
                    width={40}
                  />
                </div>
              ))}
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