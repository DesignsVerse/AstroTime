"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <div className="bg-[#800000] text-white">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20">
          {/* Top social icons */}
          <div className="flex justify-end pt-8 space-x-4">
            <button
              aria-label="twitter"
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#800000] transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-[16px]" />
            </button>
            <button
              aria-label="facebook"
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#800000] transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-[16px]" />
            </button>
            <button
              aria-label="instagram"
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#800000] transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[16px]" />
            </button>
          </div>
          
          <hr className="border-t border-white/30 my-8" />
          
          {/* Main top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
            {/* Logo and text */}
            <div className="flex items-center space-x-4">
              <div className="border border-white rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  alt="Sun icon with coral color representing Suriya logo"
                  className="w-8 h-8"
                  height={32}
                  src="/ruby.png"
                  width={32}
                />
              </div>
              <div>
                <h1 className="font-sans text-white text-3xl font-bold tracking-wide">
                  Astro Time
                </h1>
                <p className="text-white/70 text-sm mt-1">Your cosmic guide to destiny</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="border border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-white group transition-colors duration-300">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-2xl group-hover:text-[#800000]" />
              </div>
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Phone</p>
                <p className="font-sans text-white text-2xl font-bold hover:text-white/80 transition-colors duration-300">
                  <a href="tel:000123456789">000 - 123456789</a>
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="border border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-white group transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl group-hover:text-[#800000]" />
              </div>
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Email id</p>
                <p className="font-sans text-white text-2xl font-bold hover:text-white/80 transition-colors duration-300">
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <hr className="border-t border-white/30 my-8" />
          
          {/* Middle section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto py-8">
            {/* Left text block */}
            <div className="space-y-4">
              <h3 className="font-sans text-white text-xl font-bold">About Suriya</h3>
              <p className="text-white/70 leading-relaxed">
                Dui accumsan sit amet nulla facilisi morbi tempus. Fames ac turpis egestas sed. Tortor consequat id porta nibh venenatis cras sed.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-sans text-white text-xl font-bold">Horoscope</h3>
              <ul className="space-y-2 text-white/70">
                {['Daily', 'Weekly', 'Monthly', 'Yearly', 'Love', 'Career'].map((item) => (
                  <li key={item} className="hover:text-white transition-colors duration-300">
                    <a href="#">{item} Horoscope</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gemstones */}
            <div className="space-y-4">
              <h3 className="font-sans text-white text-xl font-bold">Gemstones</h3>
              <ul className="space-y-2 text-white/70">
                {['Ruby', 'Emerald', 'Sapphire', 'Diamond', 'Pearl', 'Topaz'].map((gem) => (
                  <li key={gem} className="hover:text-white transition-colors duration-300">
                    <a href="#">{gem} Benefits</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Subscribe */}
            <div className="space-y-4">
              <h3 className="font-sans text-white text-xl font-bold">Subscribe</h3>
              <p className="text-white/70">Get daily cosmic updates straight to your inbox</p>
              <div className="space-y-3">
                <input
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                  placeholder="Your Email"
                  type="email"
                />
                <button
                  className="font-sans w-full bg-white hover:bg-white/90 rounded-lg py-3 text-[#800000] font-bold transition-colors duration-300 shadow-md hover:shadow-lg"
                  type="button"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-white/50 text-xs">*We'll never share your email with anyone</p>
            </div>
          </div>
          
          <hr className="border-t border-white/30 my-8" />
          
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Suriya. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-white/70 text-sm mr-2">Secure payments:</span>
              {['visa', 'mastercard', 'amex', 'paypal', 'discover'].map((card) => (
                <div 
                  key={card} 
                  className="bg-white/10 p-1 rounded-md hover:scale-110 transition-transform duration-300"
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
    </>
  );
}