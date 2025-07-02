"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#800000] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Top social icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-end pt-8 space-x-4"
        >
          {[
            { icon: faTwitter, label: "twitter" },
            { icon: faFacebookF, label: "facebook" },
            { icon: faInstagram, label: "instagram" }
          ].map((social, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#800000] transition-all duration-300"
            >
              <FontAwesomeIcon icon={social.icon} className="text-[16px]" />
            </motion.button>
          ))}
        </motion.div>
        
        <hr className="border-t border-white/30 my-8" />
        
        {/* Main top section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6"
        >
          {/* Logo and text */}
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="border border-white rounded-full w-16 h-16 flex items-center justify-center bg-[#800000] hover:bg-white transition-colors duration-300"
            >
              <Image
                alt="Sun icon with coral color representing Astro Time logo"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                height={32}
                src="/ruby.png"
                width={32}
              />
            </motion.div>
            <div>
              <h1 className="font-sans text-white text-3xl font-bold tracking-wide">
                Astro Time
              </h1>
              <p className="text-white/70 text-sm mt-1">Your cosmic guide to destiny</p>
            </div>
          </div>
          
          {/* Contact Info */}
          {[
            { 
              icon: faPhoneAlt, 
              label: "Phone", 
              value: "000 - 123456789", 
              href: "tel:000123456789" 
            },
            { 
              icon: faEnvelope, 
              label: "Email id", 
              value: "info@example.com", 
              href: "mailto:info@example.com" 
            }
          ].map((contact, index) => (
            <div key={index} className="flex items-center space-x-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="border border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-white group transition-colors duration-300"
              >
                <FontAwesomeIcon icon={contact.icon} className="text-white text-2xl group-hover:text-[#800000]" />
              </motion.div>
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">{contact.label}</p>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="font-sans text-white text-2xl font-bold hover:text-white/80 transition-colors duration-300"
                >
                  <a href={contact.href}>{contact.value}</a>
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
        
        <hr className="border-t border-white/30 my-8" />
        
        {/* Middle section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto py-8"
        >
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">About Astro Time</h3>
            <p className="text-white/70 leading-relaxed">
              We provide accurate astrological predictions and guidance to help you navigate life's challenges and opportunities with cosmic wisdom.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">Horoscope</h3>
            <ul className="space-y-2 text-white/70">
              {['Daily', 'Weekly', 'Monthly', 'Yearly', 'Love', 'Career'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2" />
                  <a href="#">{item} Horoscope</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Gemstones */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">Gemstones</h3>
            <ul className="space-y-2 text-white/70">
              {['Ruby', 'Emerald', 'Sapphire', 'Diamond', 'Pearl', 'Topaz'].map((gem, index) => (
                <motion.li 
                  key={gem}
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2" />
                  <a href="#">{gem} Benefits</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">Subscribe</h3>
            <p className="text-white/70">Get daily cosmic updates straight to your inbox</p>
            <div className="space-y-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="Your Email"
                type="email"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-sans w-full bg-white hover:bg-white/90 rounded-lg py-3 text-[#800000] font-bold transition-colors duration-300 shadow-md hover:shadow-lg"
                type="button"
              >
                Subscribe Now
              </motion.button>
            </div>
            <p className="text-white/50 text-xs">*We'll never share your email with anyone</p>
          </div>
        </motion.div>
        
        <hr className="border-t border-white/30 my-8" />
        
        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center py-6"
        >
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} Astro Time. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-white/70 text-sm mr-2">Secure payments:</span>
            {['visa', 'mastercard', 'amex', 'paypal', 'discover'].map((card, index) => (
              <motion.div 
                key={card}
                whileHover={{ y: -5 }}
                className="bg-white/10 p-1 rounded-md hover:bg-white/20 transition-all duration-300"
              >
                <Image
                  alt={`${card} card logo`}
                  className="h-6 w-auto"
                  height={24}
                  src={`/ruby.png`}
                  width={40}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}