import { services } from '@/data/services';
import { notFound } from 'next/navigation';
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
  FaCheck,
  FaRupeeSign,
  FaClock,
  FaShippingFast,
  FaQuestionCircle,
  FaHome,
  FaHandHoldingHeart,
  FaMoon,
  FaFire,
  FaGlobeAsia,
  FaHashtag
} from 'react-icons/fa';
import { Metadata } from 'next';

const iconComponents: Record<string, JSX.Element> = {
  FaBook: <FaBook className="text-4xl" />,
  FaPhoneAlt: <FaPhoneAlt className="text-4xl" />,
  FaHeart: <FaHeart className="text-4xl" />,
  FaUserAlt: <FaUserAlt className="text-4xl" />,
  FaVideo: <FaVideo className="text-4xl" />,
  FaStar: <FaStar className="text-4xl" />,
  FaBalanceScale: <FaBalanceScale className="text-4xl" />,
  FaGem: <FaGem className="text-4xl" />,
  FaBaby: <FaBaby className="text-4xl" />,
  FaGraduationCap: <FaGraduationCap className="text-4xl" />,
  FaPrayingHands: <FaPrayingHands className="text-4xl" />,
  FaChartLine: <FaChartLine className="text-4xl" />,
  FaHome: <FaHome className="text-4xl" />,
  FaHandHoldingHeart: <FaHandHoldingHeart className="text-4xl" />,
  FaMoon: <FaMoon className="text-4xl" />,
  FaFire: <FaFire className="text-4xl" />,
  FaGlobeAsia: <FaGlobeAsia className="text-4xl" />,
  FaHashtag: <FaHashtag className="text-4xl" />
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - Astroank',
      description: 'The requested astrology or numerology service does not exist.',
    };
  }

  const title = `${service.title} - Astroank | Best Astrologer in Ujjain`;
  const description = `${service.description} Consult Astrologer Deepak Goutam at Astroank in Ujjain for personalized Vedic astrology and numerology insights.`;

  return {
    title,
    description,
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
      `${service.title} Ujjain`,
      `${service.title} Astrology`,
      `${service.title} Numerology`,
      'Personalized Astrology Remedies Ujjain',
      'Kundali Milan Ujjain',
      'Numerology Consultation Ujjain',
      'Vedic Chart Analysis Ujjain',
      'Astrology for Success Ujjain',
    ],
    authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
      title,
      description,
      url: `http://astroank.com/services/${params.slug}`,
      type: 'website',
      images: [
        {
          url: service.image || 'http://astroank.com/images/astroank-services.jpg', // Use service-specific image if available, else fallback
          width: 1200,
          height: 630,
          alt: `${service.title} - Astroank`,
        },
      ],
      siteName: 'Astroank',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.image || 'http://astroank.com/images/astroank-services.jpg'], // Use service-specific image if available, else fallback
    },
    alternates: {
      canonical: `http://astroank.com/services/${params.slug}`,
      languages: {
        'en-US': `http://astroank.com/services/${params.slug}`,
      },
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  // Get 3 random related services excluding current one
  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r mt-10 from-[#5a0808] to-[#8b1e1e] text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8">
            <div className="bg-white/20 rounded-full p-5 backdrop-blur-sm">
              <div className="text-white">
                {iconComponents[service.icon]}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-3">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto md:mx-0">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Service Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#5a0808] font-serif mb-4">
                Service Overview
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {service.longDescription}
              </p>
              
              {service.process && (
                <>
                  <h3 className="text-xl font-semibold text-[#5a0808] mt-8 mb-4">
                    How It Works
                  </h3>
                  <ol className="space-y-3 pl-5 list-decimal">
                    {service.process.map((step, index) => (
                      <li key={index} className="text-gray-7
System: 00">
                        {step}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#5a0808] font-serif mb-6">
                Key Benefits
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-[#8b1e1e] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            {service.features && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#5a0808] font-serif mb-6">
                  What's Included
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[#f8e1e1] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-[#5a0808] text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#5a0808] font-serif mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="flex items-start text-lg font-semibold text-[#5a0808] mb-2">
                        <FaQuestionCircle className="text-[#8b1e1e] mr-2 mt-1 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md sticky top-24 overflow-hidden border border-[#f8e1e1]">
              {/* Pricing Box */}
              <div className="p-6 border-b border-[#f8e1e1]">
                <h3 className="text-xl font-bold text-[#5a0808] font-serif mb-4">
                  Service Details
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaRupeeSign className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Price</h4>
                      <p className="text-xl font-bold text-[#8b1e1e]">
                        ₹{service.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaClock className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Duration</h4>
                      <p className="text-lg text-gray-700">{service.duration}</p>
                    </div>
                  </div>
                  
                  {service.deliveryTime && (
                    <div className="flex items-center">
                      <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                        <FaShippingFast className="text-[#5a0808]" />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-500">Delivery Time</h4>
                        <p className="text-lg text-gray-700">{service.deliveryTime}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="p-6">
                <button className="w-full bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-semibold py-3 px-4 rounded-lg mb-4 transition-all duration-300 shadow-md hover:shadow-lg">
                  Book This Service
                </button>
                
                <button className="w-full bg-white text-[#5a0808] border border-[#5a0808] hover:bg-[#f8e1e1] font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                  Contact Astrologer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#5a0808] font-serif mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <div key={relatedService.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="p-5">
                    <div className="bg-[#f8e1e1] rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                      {iconComponents[relatedService.icon]}
                    </div>
                    <h3 className="text-center text-lg font-bold text-[#5a0808] mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-center text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedService.description}
                    </p>
                    <a
                      href={`/services/${relatedService.slug}`}
                      className="block text-center text-sm text-[#8b1e1e] hover:underline font-medium mt-2"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}