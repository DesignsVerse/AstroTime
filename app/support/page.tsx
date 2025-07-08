"use client"
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeadset, 
  faClock, 
  faEnvelope, 
  faMapMarkerAlt,
  faPhoneAlt,
  faComments,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function SupportPage() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#800000]/10 rounded-full mb-4">
            <FontAwesomeIcon icon={faHeadset} className="text-[#800000] mr-2" />
            <span className="text-[#800000] font-medium uppercase text-sm tracking-wider">24/7 Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            Astro Time <span className="text-black">Support Center</span>
          </h1>
          <div className="w-24 h-1 bg-[#800000] mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Dedicated assistance for your astrological journey. Our team is here to help you navigate any cosmic queries.
          </p>
        </motion.div>

        {/* 3-Column Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Live Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#800000] text-center"
          >
            <div className="bg-[#800000] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faHeadset} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Live Support</h3>
            <p className="text-black/80 mb-6">Instant assistance from our astrology experts</p>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-black">
                <FontAwesomeIcon icon={faClock} className="text-[#800000] mr-2" />
                <span>Mon-Sun: 6AM - 11PM IST</span>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="tel:+911234567890"
                className="inline-block bg-[#800000] text-white font-medium py-2 px-6 rounded-lg mt-4"
              >
                +91 12345 67890
              </motion.a>
            </div>
          </motion.div>

          {/* Appointment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-black text-center"
          >
            <div className="bg-black w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Schedule Appointment</h3>
            <p className="text-black/80 mb-6">Book 1-on-1 sessions with our astrologers</p>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-black">
                <FontAwesomeIcon icon={faClock} className="text-[#800000] mr-2" />
                <span>30/60 mins sessions available</span>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="/book-now"
                className="inline-block bg-black text-white font-medium py-2 px-6 rounded-lg mt-4"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>

          {/* Digital Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#800000] text-center"
          >
            <div className="bg-[#800000] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faComments} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Digital Support</h3>
            <p className="text-black/80 mb-6">Connect via digital channels</p>
            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                <a href="#" className="flex items-center justify-center text-black hover:text-[#800000]">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] mr-2 text-xl" />
                  <span>WhatsApp Chat</span>
                </a>
                <a href="#" className="flex items-center justify-center text-black hover:text-[#800000]">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#800000] mr-2" />
                  <span>Email Support</span>
                </a>
              </div>
              <p className="text-sm text-black/60 mt-4">Response within 4 business hours</p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-[#800000] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I prepare for my first astrology consultation?",
                answer: "Have your exact birth time, date, and location ready. For career questions, prepare details about your education and work history."
              },
              {
                question: "What's the difference between Vedic and Western astrology?",
                answer: "Vedic astrology uses sidereal zodiac and focuses on karma/destiny, while Western uses tropical zodiac with psychological emphasis."
              },
              {
                question: "Can astrology predict exact future events?",
                answer: "Astrology indicates probabilities and tendencies based on planetary positions, not absolute certainties. Free will always plays a role."
              },
              {
                question: "How often should I get my horoscope checked?",
                answer: "For major life events or annually for general guidance. During planetary transitions (Saturn return, etc.), more frequent checks help."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-[#800000]/20 pb-6">
                <h3 className="text-xl font-semibold text-black mb-2">{item.question}</h3>
                <p className="text-black/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#800000] rounded-xl p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-8">Corporate Office</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p>Astro Time Center<br />
                  123 Cosmic Plaza, 5th Floor<br />
                  New Delhi - 110001, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p>+91 11 2345 6789 (Office)<br />
                  +91 98765 43210 (Manager)</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p>support@astrotime.com<br />
                  corporate@astrotime.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h2 className="text-3xl font-bold text-[#800000] mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-[#800000]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]/50" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-[#800000]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]/50" 
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-black font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 border border-[#800000]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]/50 text-black"
                >
                  <option value="">Select an option</option>
                  <option value="consultation">Consultation Query</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback/Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-black font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-[#800000]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]/50" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#800000] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-black transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}