"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5A0808] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        
        
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
                AstroAnk
              </h1>
              <p className="text-white/70 text-sm mt-1">Your trusted guide to cosmic wisdom</p>
            </div>
          </div>
          
          {/* Contact Info */}
          {[
            { 
              icon: faPhoneAlt, 
              label: "Phone", 
              value: "+919153164444, +918546822456", 
              href: "tel:+919153164444" 
            },
            { 
              icon: faEnvelope, 
              label: "Email", 
              value: "astrodeepakgoutam@gmail.com", 
              href: "mailto:astrodeepakgoutam@gmail.com" 
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
            <h3 className="font-sans text-white text-xl font-bold">About AstroAnk</h3>
            <p className="text-white/70 leading-relaxed">
              We provide authentic Vedic astrology services including Janm Patrika analysis, gemstone recommendations, dosha remedies, and personalized consultations to guide your life's journey.
            </p>
          </div>
          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">Our Services</h3>
            <ul className="space-y-2 text-white/70">
              {services.map((service, index) => (
                <motion.li 
                  key={service.slug}
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2" />
                  <a href={`/services/${service.slug}`}>{service.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* Header Section Column */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              {[
                { name: "Call Consultation", href: "/call-consultation" },
                { name: "Gemstone", href: "https://www.bestrudraksha.com/shop-filter/gemstones" },
                { name: "Services", href: "/services" },
                { name: "Pancahng", href: "/panchnag" },
                { name: "Rudraksha", href: "https://www.bestrudraksha.com/shop" },
                { name: "Online Puja", href: "https://www.ujjainkalsarp.com/" },
                { name: "Blog", href: "/blog" },
                { name: "About", href: "/about" },
                { name: "Support", href: "/support" }
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2" />
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{item.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="font-sans text-white text-xl font-bold">Daily Updates</h3>
            <p className="text-white/70">Get daily horoscope and cosmic insights delivered to your inbox</p>
            <div className="space-y-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="Your Email Address"
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
            <p className="text-white/50 text-xs">*Get free daily horoscope and cosmic insights</p>
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
            © {currentYear} Astro Time. All rights reserved. | Vedic Astrology Services
          </div>
          
          <div className="flex items-center space-x-4">
            {[
              { icon: faFacebookF, label: "facebook", href: "https://www.facebook.com/astrodeepakgoutamm/" },
              { icon: faInstagram, label: "instagram", href: "https://www.instagram.com/astrodeepakgoutam/" },
              { icon: faYoutube, label: "youtube", href: "https://www.youtube.com/@Astrodeepakgoutam" },
              { icon: faWhatsapp, label: "whatsapp", href: "https://wa.me/919153164444?text=namaste%20pandit%20ji" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#800000] transition-all duration-300"
              >
                <FontAwesomeIcon icon={social.icon} className="text-[16px]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}