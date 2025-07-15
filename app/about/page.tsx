"use client"
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faGem, 
  faChartPie, 
  faHandsHelping,
  faAward,
  faBookOpen,
  faGlobe,
  faUserTie,
  faCalendarAlt,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#f9f9f9] py-16 md:py-24"> {/* Lighter background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Breadcrumb */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <nav className="flex items-center text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-[#800000] hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-black md:ml-2">About Us</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center space-x-2 bg-[#800000]/10 px-4 py-2 rounded-full">
            <FontAwesomeIcon icon={faStar} className="text-[#800000] text-sm"/>
            <span className="text-black text-sm font-medium">Trusted Since 2010</span>
          </div>
        </div>

        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-[#800000]">Astro Time</span>
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#800000] to-black mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your trusted celestial guides blending <span className="text-[#800000] font-semibold">ancient wisdom</span> with <span className="text-[#800000] font-semibold">modern precision</span> to illuminate your life's path.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "15+", label: "Certified Astrologers", icon: faUserTie },
            { number: "50K+", label: "Consultations", icon: faHandsHelping },
            { number: "35+", label: "Countries Served", icon: faGlobe },
            { number: "24/7", label: "Availability", icon: faCalendarAlt }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="bg-[#800000]/10 w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={stat.icon} className="text-[#800000] text-lg" />
              </div>
              <p className="text-3xl font-bold text-[#800000] mb-1">{stat.number}</p>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#800000] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-[#800000] text-white px-4 py-1 text-xs font-medium rounded-br-lg">
                Founder's Message
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#800000] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md">
                    RS
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-1">Pt. Ravi Shankar</h4>
                  <p className="text-[#800000] text-sm font-medium mb-4">Jyotish Ratna, Founder</p>
                  <div className="relative">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-[#800000]/20 text-4xl absolute -top-2 -left-2" />
                    <p className="text-gray-700 relative z-10 italic pl-6">
                      "At Astro Time, we don't just predict futures - we empower souls to navigate their karmic journey with celestial precision and practical wisdom for modern life."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <FontAwesomeIcon icon={faBookOpen} className="text-[#800000] mr-3 text-xl" />
                Our Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Marriage Compatibility",
                  "Career Astrology",
                  "Muhurta Selection",
                  "Gemstone Advice",
                  "Remedial Solutions",
                  "Horoscope Analysis",
                  "Vastu Consultation",
                  "Numerology"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#800000]/10 p-1 rounded-full mr-3 mt-0.5">
                      <FontAwesomeIcon icon={faGem} className="text-[#800000] text-xs" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <FontAwesomeIcon icon={faChartPie} className="text-[#800000] mr-3 text-xl" />
                Our Methodology
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "Birth Chart Analysis",
                    desc: "Detailed Janam Kundali preparation with 16 divisional charts for precise insights"
                  },
                  {
                    step: "Dasha Prediction",
                    desc: "Accurate planetary period analysis using Vimshottari Dasha system"
                  },
                  {
                    step: "Transit Effects",
                    desc: "Comprehensive Gochar analysis with current planetary positions"
                  },
                  {
                    step: "Solution Framework",
                    desc: "Personalized remedies including gems, mantras and rituals tailored for you"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-[#800000] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#800000]">{item.step}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#800000] to-[#600000] p-8 rounded-xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FontAwesomeIcon icon={faAward} className="text-white mr-3 text-xl" />
                Our Credentials
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "12+", label: "Years Experience" },
                  { value: "200+", label: "Corporate Clients" },
                  { value: "7", label: "Languages" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">
                    <p className="font-bold text-2xl mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-white/90">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonial & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">
                  Client Experiences
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#800000] pl-5">
                    <p className="text-gray-700 italic mb-3 relative">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-[#800000]/30 text-xl absolute -left-1 -top-2" />
                      <span className="relative pl-4">Astro Time's prediction about my career shift was remarkably accurate. Their gemstone recommendation made a noticeable difference in my life.</span>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#800000] rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-black">Rahul Sharma</p>
                        <p className="text-[#800000] text-xs font-medium">Mumbai, Client since 2015</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-2 border-[#800000] pl-5">
                    <p className="text-gray-700 italic mb-3 relative">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-[#800000]/30 text-xl absolute -left-1 -top-2" />
                      <span className="relative pl-4">The marriage compatibility analysis saved me from a wrong alliance. Their detailed report was eye-opening.</span>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#800000] rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-black">Priya Patel</p>
                        <p className="text-[#800000] text-xs font-medium">Delhi, Client since 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#800000]/5 p-8 rounded-xl border border-[#800000]/10">
                <h4 className="text-2xl font-bold text-black mb-4">Begin Your Astrological Journey</h4>
                <p className="text-gray-700 mb-6">
                  Discover how celestial insights can guide your decisions and transform your life's path.
                </p>
                <button className="w-full bg-[#800000] hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg mb-4">
                  Book Consultation
                </button>
                <div className="text-center text-sm text-gray-600">
                  <p>Available via:</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Phone</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">WhatsApp</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">In-Person</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}