
import consultations from '@/data/call-consultation';
import { 
  FaHeart, 
  FaUserAlt,
  FaGraduationCap,
  FaChartLine,
  FaGem,
  FaStar,
  FaHandHoldingHeart,
  FaClock,
  FaHeartbeat,
  FaBaby,
  FaRing,
  FaBriefcase,
  FaBuilding,
  FaPlane,
  FaRupeeSign,
  FaCrown,
  FaHome
} from 'react-icons/fa';
import Image from 'next/image';
import { Metadata } from 'next';

const iconComponents: Record<string, JSX.Element> = {
  FaHeart: <FaHeart className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaUserAlt: <FaUserAlt className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaGraduationCap: <FaGraduationCap className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaChartLine: <FaChartLine className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaGem: <FaGem className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaHeartbeat: <FaHeartbeat className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaBaby: <FaBaby className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaRing: <FaRing className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaBriefcase: <FaBriefcase className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaBuilding: <FaBuilding className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaPlane: <FaPlane className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaRupeeSign: <FaRupeeSign className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaCrown: <FaCrown className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaHome: <FaHome className="text-2xl sm:text-3xl text-[#5a0808]" />
};

export const metadata: Metadata = {
  title: 'Premium Astrology Consultations - Astroank | Best Astrologer in Ujjain',
  description:
    'Book personalized astrology consultations with Astroank, led by Astrologer Deepak Goutam. Expert in Vedic astrology, numerology, kundli analysis, and love predictions.',
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
    'Personalized Astrology Services',
    'Love Astrology Consultation',
    'Career Prediction Ujjain',
  ],
  authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Premium Astrology Consultations - Astroank | Best Astrologer in Ujjain',
    description:
      'Consult Astroank’s Astrologer Deepak Goutam for expert Vedic astrology, numerology, and kundli analysis in Ujjain. Book personalized sessions for love, career, and more.',
    url: 'http://astroank.com/call-consultation',
    type: 'website',
    images: [
      {
        url: 'http://astroank.com/images/astroank-logo.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Astroank Astrology Consultations',
      },
    ],
    siteName: 'Astroank',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Astrology Consultations - Astroank | Best Astrologer in Ujjain',
    description:
      'Book expert astrology consultations with Astroank in Ujjain. Vedic astrology, numerology, and kundli analysis by Astrologer Deepak Goutam.',
    images: ['http://astroank.com/images/astroank-logo.jpg'], // Replace with actual image URL
  },
  alternates: {
    canonical: 'http://astroank.com/call-consultation',
    languages: {
      'en-US': 'http://astroank.com/call-consultation',
    },
  },
};

export default function Consultations() {
  return (
    <div className="relative min-h-screen py-12 sm:py-16 overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/call-consultation/consult-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-[#f8e1e1] to-[#faf5f5] rounded-2xl overflow-hidden shadow-lg mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="p-8 sm:p-10 lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
                Personalized <span className="text-[#8b1e1e]">Astrology Guidance</span>
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-[#8b1e1e] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Get accurate predictions and practical solutions from our expert astrologers with decades of experience.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-[#8b1e1e] mr-3" />
                  <span>100% Confidential Consultations</span>
                </div>
                <div className="flex items-center">
                  <FaHandHoldingHeart className="text-[#8b1e1e] mr-3" />
                  <span>Personalized Remedies & Solutions</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-[#8b1e1e] mr-3" />
                  <span>Flexible Timing Available</span>
                </div>
              </div>
              <a
                href="#consultations"
                className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block w-fit"
              >
                Explore Consultations
              </a>
            </div>
            
            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden w-[24rem] h-[20rem] sm:w-[28rem] sm:h-[26rem] md:w-[36rem] md:h-[30rem] relative mx-auto">
              <Image 
                src="/call-consultation/call.png" 
                alt="Astrology Consultation"
                fill
                className="object-contain object-center rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12 sm:mb-16 border border-[#f8e1e1]">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] mb-6 text-center">
            Why Choose Our Astrology Consultations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-[#f8e1e1] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaUserAlt className="text-2xl text-[#5a0808]" />
              </div>
              <h3 className="text-xl font-bold text-[#5a0808] mb-2">Expert Astrologers</h3>
              <p className="text-gray-600">Our astrologers have 20+ years of experience in Vedic astrology</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#f8e1e1] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#5a0808]" />
              </div>
              <h3 className="text-xl font-bold text-[#5a0808] mb-2">Personalized Approach</h3>
              <p className="text-gray-600">Customized solutions based on your unique birth chart</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#f8e1e1] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaGem className="text-2xl text-[#5a0808]" />
              </div>
              <h3 className="text-xl font-bold text-[#5a0808] mb-2">Practical Remedies</h3>
              <p className="text-gray-600">Effective solutions that fit your lifestyle and budget</p>
            </div>
          </div>
        </div>

        {/* Consultations Grid */}
        <div id="consultations" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] mb-4">
            Our <span className="text-[#8b1e1e]">Consultation Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Select from our range of specialized astrology consultations tailored to your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {consultations.map((consultation: any) => (
            <div
              key={consultation.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
            >
              {/* Card Header */}
              <div className="bg-[#f8e1e1] p-6 flex items-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm mr-6">
                  {iconComponents[consultation.icon]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#5a0808] font-serif">
                    {consultation.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {consultation.duration} consultation
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {consultation.shortDescription}
                </p>
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#8b1e1e] font-bold text-xl">₹{consultation.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-500 text-sm">{consultation.duration}</span>
                  </div>
                </div>
                <a
                  href={`/call-consultation/${consultation.slug}`}
                  className="block w-full bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white text-center font-medium py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto border border-[#f8e1e1]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5a0808] mb-4">
              Not Sure Which Consultation You Need?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you choose the right consultation based on your current situation and needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white text-[#5a0808] border border-[#5a0808] hover:bg-[#f8e1e1] font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}