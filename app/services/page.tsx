import { 
  FaBook, 
  FaPhoneAlt, 
  FaHeart, 
  FaUserAlt, 
  FaVideo, 
  FaStar, 
  FaBalanceScale,
  FaGem,
  FaBaby,
  FaGraduationCap,
  FaPrayingHands,
  FaChartLine,
  FaHome,
  FaQuestionCircle,
  FaClock,
  FaFire,
  FaGlobeAsia,
  FaHashtag,
  FaMoon,
  FaHandHoldingHeart
} from 'react-icons/fa';
import Image from 'next/image';
import { services } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astrology & Numerology Services - Astroank | Best Astrologer in Ujjain',
  description:
    'Discover Astroank’s premium astrology and numerology services by Astrologer Deepak Goutam in Ujjain. Explore Kundali analysis, numerology, Vastu, and personalized remedies.',
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
    'Personalized Astrology Remedies',
    'Kundali Milan Ujjain',
    'Numerology Consultation Ujjain',
    'Vedic Chart Analysis Ujjain',
    'Astrology for Success Ujjain',
  ],
  authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Astrology & Numerology Services - Astroank | Best Astrologer in Ujjain',
    description:
      'Explore Astroank’s premium astrology and numerology services in Ujjain by Astrologer Deepak Goutam, including Kundali analysis, Vastu, and personalized remedies.',
    url: 'http://astroank.com/services',
    type: 'website',
    images: [
      {
        url: 'http://astroank.com/images/astroank-services.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Astroank Astrology & Numerology Services',
      },
    ],
    siteName: 'Astroank',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrology & Numerology Services - Astroank | Best Astrologer in Ujjain',
    description:
      'Discover Astroank’s astrology and numerology services in Ujjain by Astrologer Deepak Goutam, offering Kundali analysis, Vastu, and more.',
    images: ['http://astroank.com/images/astroank-services.jpg'], // Replace with actual image URL
  },
  alternates: {
    canonical: 'http://astroank.com/services',
    languages: {
      'en-US': 'http://astroank.com/services',
    },
  },
};

const iconComponents: Record<string, JSX.Element> = {
  FaBook: <FaBook className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaPhoneAlt: <FaPhoneAlt className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaHeart: <FaHeart className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaUserAlt: <FaUserAlt className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaVideo: <FaVideo className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaStar: <FaStar className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaBalanceScale: <FaBalanceScale className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaGem: <FaGem className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaBaby: <FaBaby className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaGraduationCap: <FaGraduationCap className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaPrayingHands: <FaPrayingHands className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaChartLine: <FaChartLine className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaHome: <FaHome className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaQuestionCircle: <FaQuestionCircle className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaClock: <FaClock className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaFire: <FaFire className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaGlobeAsia: <FaGlobeAsia className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaHashtag: <FaHashtag className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaMoon: <FaMoon className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaHandHoldingHeart: <FaHandHoldingHeart className="text-2xl sm:text-3xl text-[#5a0808]" />
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen py-12 sm:py-16 overflow-hidden">
      {/* Background and decorative elements */}
      <div className="absolute inset-0 bg-[url('/service/service-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5a0808]/10 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#5a0808]/10 to-transparent -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-[#f8e1e1] to-[#faf5f5] rounded-2xl overflow-hidden shadow-lg mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="p-8 sm:p-10 lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
                Premium <span className="text-[#8b1e1e]">Astrology Services</span>
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-[#8b1e1e] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience transformative astrology and numerology services by Astro Deepak Goutam at Astroank, designed to bring clarity, success, and balance to your life.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-[#8b1e1e] mr-3" />
                  <span>Expert Vedic & Numerology Insights</span>
                </div>
                <div className="flex items-center">
                  <FaHandHoldingHeart className="text-[#8b1e1e] mr-3" />
                  <span>Tailored Remedies by Astro Deepak Goutam</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-[#8b1e1e] mr-3" />
                  <span>Trusted Guidance Since 2010</span>
                </div>
              </div>
              <a
                href="#services"
                className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block w-fit"
              >
                Explore Astroank Services
              </a>
            </div>
            
            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden w-[24rem] h-[20rem] sm:w-[28rem] sm:h-[26rem] md:w-[36rem] md:h-[30rem] relative mx-auto">
              <Image 
                src="/service/service-banner.png" 
                alt="Astroank Astrology Services"
                fill
                className="object-contain object-center rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div id="services" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
            Astroank’s <span className="text-[#8b1e1e]">Premium</span> Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#8b1e1e] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-sans leading-relaxed">
            Guided by Astro Deepak Goutam, Astroank offers expertly crafted astrology and numerology services to illuminate your path to success and harmony.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative p-2 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8 relative">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 min-h-[220px] sm:min-h-[260px] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8e1e1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-3 sm:p-5 flex flex-col items-center text-center h-full">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="absolute inset-0 rounded-full bg-[#8b1e1e] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-[#f8e1e1] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {iconComponents[service.icon]}
                    </div>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#5a0808] font-serif mb-1 sm:mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-auto w-full pt-2">
                    <a
                      href={`/services/${service.slug}`}
                      className="block bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-medium py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-base text-center"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 bg-[#f8e1e1]/30 p-8 rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] text-center mb-8">
            What Our Clients Say About Astro Deepak Goutam
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Astro Deepak Goutam’s numerology reading gave me clarity on my life’s purpose. His insights are truly transformative!",
                name: "Ankit Verma",
                location: "Indore"
              },
              {
                quote: "The Kundli Milan by Astroank helped me find my perfect match. Astro Deepak Goutam’s guidance was spot-on!",
                name: "Sneha Jain",
                location: "Bhopal"
              },
              {
                quote: "The yearly forecast by Astro Deepak Goutam changed my approach to career decisions. Highly recommend Astroank!",
                name: "Rohit Malhotra",
                location: "Delhi"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#f8e1e1]">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="font-semibold text-[#5a0808]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] text-center mb-8">
            How Astroank’s Services Work
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <FaUserAlt className="text-2xl text-[#5a0808]" />,
                title: "1. Share Your Details",
                description: "Provide your birth details and specific concerns to Astro Deepak Goutam"
              },
              {
                icon: <FaBook className="text-2xl text-[#5a0808]" />,
                title: "2. Expert Analysis",
                description: "In-depth numerology and Vedic chart analysis by Astroank’s team"
              },
              {
                icon: <FaHeart className="text-2xl text-[#5a0808]" />,
                title: "3. Personalized Guidance",
                description: "Receive tailored remedies and solutions for your unique journey"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#f8e1e1] text-center">
                <div className="bg-[#f8e1e1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#5a0808] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-[#f8e1e1]">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How does Astro Deepak Goutam’s numerology consultation work?",
                answer: "Astro Deepak Goutam analyzes your birth date and name to provide insights into your life path, challenges, and opportunities."
              },
              {
                question: "What details are needed for a Kundli reading?",
                answer: "Provide your accurate birth date, time, and place for a precise Vedic chart analysis by Astroank."
              },
              {
                question: "Are Astroank’s remedies easy to follow?",
                answer: "Yes, Astro Deepak Goutam offers simple, practical remedies like mantras and gemstones tailored to your lifestyle."
              },
              {
                question: "Can Astroank help with family horoscope readings?",
                answer: "Absolutely, Astroank provides family compatibility analysis and collective remedies for harmony."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#f8e1e1] pb-4">
                <h3 className="font-semibold text-[#5a0808] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] text-white p-8 rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">
            Ready to Begin with Astro Deepak Goutam?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Transform your life with Astroank’s expert astrology and numerology guidance by Astro Deepak Goutam.
          </p>
          <a
            href="/book-now"
            className="inline-block bg-white text-[#5a0808] font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#f8e1e1] hover:shadow-lg"
          >
            Book with Astroank Now
          </a>
        </div>
      </div>
    </div>
  );
}