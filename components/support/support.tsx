"use client";
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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astrology Consultation & Support - Astroank | Best Astrologer in Ujjain',
  description:
    'Connect with Astrologer Deepak Goutam at Astroank in Ujjain for premium astrology and numerology consultations. Book live sessions, get 24/7 support, or schedule personalized guidance.',
  keywords: [
    'Best Astrologer in Ujjain',
    'Top Rated Astrologer in Ujjain',
    'Best Astrologer in India',
    'Astroank',
    'AstroTime',
    'Astrologer Deepak Goutam',
    'Ujjain Numerology',
    'Future Prediction Astrologer Ujjain',
    'Accurate Kundli Analysis Ujjain',
    'Ujjain Astrologer for Love and Relationships',
    'Fortune Telling Astrologer Ujjain',
    'Best Numerologist in Ujjain',
    'Top Astrologer in Ujjain',
    'Online Astrology Services',
    'Astroank Astrology Services',
    'AstroTime Astrology Services',
    'Vedic Astrology Ujjain',
    'Horoscope Reading Ujjain',
    'Astrology Consultation India',
    'Marriage Compatibility Ujjain',
    'Vastu Consultation Ujjain',
    'Career Astrology Ujjain',
    'Jyotish Services Ujjain',
    'Online Kundli Ujjain',
    'Astrology Experts Ujjain',
    'Astrology Consultation Ujjain',
    'Numerology Consultation Ujjain',
    'Premium Astrology Support Ujjain',
    'Book Astrology Consultation Ujjain',
    '24/7 Astrology Support',
    'Personalized Astrology Guidance',
  ],
  authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Astrology Consultation & Support - Astroank | Best Astrologer in Ujjain',
    description:
      'Book premium astrology and numerology consultations with Astrologer Deepak Goutam at Astroank in Ujjain. Live sessions, 24/7 support, and personalized guidance available.',
    url: 'http://astroank.com/call-consultation',
    type: 'website',
    images: [
      {
        url: 'http://astroank.com/images/astroank-consultation.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Astroank Astrology Consultation & Support',
      },
    ],
    siteName: 'Astroank',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrology Consultation & Support - Astroank | Best Astrologer in Ujjain',
    description:
      'Connect with Astrologer Deepak Goutam at Astroank in Ujjain for expert astrology and numerology consultations, live sessions, and 24/7 support.',
    images: ['http://astroank.com/images/astroank-consultation.jpg'], // Replace with actual image URL
  },
  alternates: {
    canonical: 'http://astroank.com/call-consultation',
    languages: {
      'en-US': 'http://astroank.com/call-consultation',
    },
  },
};

const supportOptions = [
  {
    title: 'Premium Live Consultation',
    description: 'Connect instantly with Astro Deepak Goutam’s expert team for personalized astrology insights.',
    icon: faHeadset,
    details: 'Mon-Sun: 8AM - 10PM IST',
    cta: '+91 9153164444',
    ctaLink: 'tel:+919153164444',
  },
  {
    title: 'Priority Appointment Booking',
    description: 'Schedule exclusive 1-on-1 sessions with Astro Deepak Goutam for in-depth guidance.',
    icon: faCalendarCheck,
    details: '30/60/90 mins sessions available',
    cta: 'Book Now',
    ctaLink: '/book-now',
  },
  {
    title: '24/7 Digital Support',
    description: 'Reach us anytime via WhatsApp or Email for quick astrology-related queries.',
    icon: faComments,
    details: 'Response within 2-4 hours',
    cta: 'Contact Now',
    ctaLink: '#',
  },
];

const rates = [
  { service: 'Basic Consultation', price: '₹2999', duration: '30 mins' },
  { service: 'Premium Life Path Reading', price: '₹5999', duration: '1 hour' },
  { service: 'Yearly Destiny Forecast', price: '₹9999', duration: '1.5 hours' },
  { service: 'Name Correction Analysis', price: '₹4999', duration: '45 mins' },
];

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
            <span className="text-[#800000] font-medium uppercase text-sm tracking-wider">PREMIUM SUPPORT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            Astro Time <span className="text-black">Support Center</span>
          </h1>
          <div className="w-24 h-1 bg-[#800000] mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Experience world-class astrological support with Astro Deepak Goutam. Our dedicated team is here to guide you through your cosmic journey with personalized care and expertise.
          </p>
        </motion.div>

        {/* 3-Column Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#800000] text-center"
            >
              <div className="bg-[#800000] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={option.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{option.title}</h3>
              <p className="text-black/80 mb-6">{option.description}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center text-black">
                  <FontAwesomeIcon icon={faClock} className="text-[#800000] mr-2" />
                  <span>{option.details}</span>
                </div>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href={option.ctaLink}
                  className="inline-block bg-[#800000] text-white font-medium py-2 px-6 rounded-lg mt-4 hover:bg-black transition-colors"
                >
                  {option.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
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
                question: "How can Astro Deepak Goutam’s consultations benefit me?",
                answer: "Our premium consultations provide deep insights into your life path, relationships, and career, tailored to your unique birth chart and numerology profile."
              },
              {
                question: "What information do I need for a consultation?",
                answer: "Please provide your exact birth date, time, and place, along with any specific questions about your life, career, or relationships."
              },
              {
                question: "Are the sessions confidential?",
                answer: "Absolutely. Astro Deepak Goutam ensures 100% confidentiality for all client consultations and personal details."
              },
              {
                question: "How often should I book a consultation?",
                answer: "We recommend annual consultations for yearly forecasts or during major life transitions like career changes or marriage."
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
            <h2 className="text-3xl font-bold mb-8">Astro Deepak Goutam Office</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p>69/1, Near Harsiddhi Mandir, Yogipura, Jaisinghpura,<br />
                  Ujjain, Madhya Pradesh 456006</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p>+91-9153164444</p>
                  <p>+91-7067771773</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p>astrodeepakgoutam@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">WhatsApp</h3>
                  <p>+91-9153164444</p>
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
            <h2 className="text-3xl font-bold text-[#800000] mb-8">Connect with Astro Deepak Goutam</h2>
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
                  <option value="consultation">Premium Consultation</option>
                  <option value="numerology">Numerology Query</option>
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