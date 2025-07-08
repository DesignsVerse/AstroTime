"use client"
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faGem, 
  faChartPie, 
  faHistory, 
  faHandsHelping,
  faAward,
  faBookOpen,
  faGlobe,
  faUserTie,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-20"> {/* Cream background */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header with Breadcrumb */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-[#800000] flex items-center">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="font-semibold">About Us</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <FontAwesomeIcon icon={faStar} className="text-[#800000]"/>
            <span className="text-black">Trusted Since 2010</span>
          </div>
        </div>

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            About <span className="text-black">Astro Time</span>
          </h1>
          <div className="w-24 h-1 bg-[#800000] mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Your trusted celestial guides blending <span className="text-[#800000] font-medium">ancient wisdom</span> with <span className="text-[#800000] font-medium">modern precision</span> since 2010.
          </p>
        </motion.div>

        {/* 3-Column Intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: faUserTie,
              title: "15+ Certified Astrologers",
              description: "Jyotish Visharad and KP specialists"
            },
            {
              icon: faGlobe,
              title: "Global Consultations",
              description: "Serving in 7 languages worldwide"
            },
            {
              icon: faCalendarAlt,
              title: "24/7 Availability",
              description: "Online and in-person sessions"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-[#800000]"
            >
              <div className="bg-[#800000] w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-black/80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Founder's Note */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 bg-[#800000] text-white px-4 py-2 rounded">
                Founder's Note
              </div>
              <div className="flex items-start mt-6">
                <div className="min-w-[80px]">
                  <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    RS
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-black">Pt. Ravi Shankar</h4>
                  <p className="text-[#800000] text-sm mb-3">Jyotish Ratna, Founder</p>
                  <p className="text-black border-l-2 border-[#800000] pl-4 italic">
                    "At Astro Time, we don't just predict futures - we empower souls to navigate their karmic journey with celestial precision."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                <FontAwesomeIcon icon={faBookOpen} className="text-[#800000] mr-3" />
                Our Specializations
              </h3>
              <div className="space-y-4">
                {[
                  "Marriage Compatibility (Kundli Milan)",
                  "Career Astrology (10th House Analysis)",
                  "Muhurta (Auspicious Timing)",
                  "Gemstone Recommendation (Ratan Shastra)",
                  "Remedial Solutions (Vedic Mantras, Yantras)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faGem} className="text-[#800000] mt-1 mr-3 text-sm" />
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Methodology Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                <FontAwesomeIcon icon={faChartPie} className="text-[#800000] mr-3" />
                Our 5-Step Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1. Birth Chart Analysis",
                    desc: "Detailed Janam Kundali preparation with 16 divisional charts"
                  },
                  {
                    step: "2. Dasha Prediction",
                    desc: "Planetary period analysis using Vimshottari Dasha system"
                  },
                  {
                    step: "3. Transit Effects",
                    desc: "Gochar analysis with current planetary positions"
                  },
                  {
                    step: "4. Problem Identification",
                    desc: "Identifying malefic planetary combinations (Doshas)"
                  },
                  {
                    step: "5. Solution Framework",
                    desc: "Personalized remedies including gems, mantras and rituals"
                  }
                ].map((item, index) => (
                  <div key={index} className="pb-4 border-b border-[#800000]/10 last:border-0">
                    <h4 className="text-lg font-semibold text-[#800000]">{item.step}</h4>
                    <p className="text-black/90">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#800000] p-6 rounded-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faAward} className="text-white mr-3" />
                Milestones
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50,000+", label: "Consultations" },
                  { value: "200+", label: "Corporate Clients" },
                  { value: "35+", label: "Countries Served" },
                  { value: "98%", label: "Accuracy Rate" },
                  { value: "12", label: "Awards Won" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded text-center">
                    <p className="font-bold text-xl">{stat.value}</p>
                    <p className="text-sm">{stat.label}</p>
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
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#800000]">
            <h3 className="text-2xl font-bold text-center text-black mb-8">
              Why Clients Trust Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#800000] pl-6">
                <p className="text-black italic mb-4">
                  "Astro Time's prediction about my career shift was 100% accurate. Their gemstone recommendation changed my life."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#800000] rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-black">Rahul Sharma</p>
                    <p className="text-[#800000] text-sm">Mumbai, Since 2015</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-black mb-4">Ready for Your Cosmic Reading?</h4>
                <button className="bg-[#800000] hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Book Consultation
                </button>
                <p className="text-black/80 mt-4 text-sm">
                  Available: Phone, WhatsApp, In-Person
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}