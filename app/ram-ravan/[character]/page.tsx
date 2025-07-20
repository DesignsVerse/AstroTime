
import { ramRavanData } from '@/data/kundliData';
import { notFound } from 'next/navigation';
import { FaBirthdayCake, FaMapMarkerAlt, FaStar, FaShieldAlt, FaHeart, FaExclamationTriangle, FaBrain } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { Metadata } from 'next';

// Generate static params for static export
export async function generateStaticParams() {
  return Object.keys(ramRavanData).map((character) => ({
    character,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { character: string } }): Promise<Metadata> {
  const characterData = ramRavanData[params.character as keyof typeof ramRavanData];
  const isRam = params.character === 'ram';
  
  if (!characterData) {
    return {
      title: 'Page Not Found - Astroank',
      description: 'The requested astrological profile was not found.',
    };
  }

  const title = `${characterData.title} Kundali Analysis - Astroank | Best Astrologer in Ujjain`;
  const description = isRam
    ? `Explore Lord Ram's kundali analysis with Astroank, led by Astrologer Deepak Goutam in Ujjain. Discover Vedic astrology insights, zodiac signs, and personality traits.`
    : `Discover Ravan's astrological profile with Astroank, led by Astrologer Deepak Goutam in Ujjain. Uncover Vedic astrology insights, planetary positions, and strengths.`;

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
      isRam ? 'Lord Ram Kundali' : 'Ravan Kundali',
      isRam ? 'Ram Astrology Analysis' : 'Ravan Astrology Analysis',
      'Vedic Kundali Ujjain',
      'Planetary Positions Astrology',
      'Zodiac Sign Analysis Ujjain',
      'Astrological Personality Analysis',
      'Ram Ravan Astrology Comparison',
    ],
    authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
      title,
      description,
      url: `http://astroank.com/ram-ravan/${params.character}`,
      type: 'website',
      images: [
        {
          url: characterData.image, // Use character-specific image
          width: 1200,
          height: 630,
          alt: `${characterData.title} Kundali - Astroank`,
        },
      ],
      siteName: 'Astroank',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [characterData.image], // Use character-specific image
    },
    alternates: {
      canonical: `http://astroank.com/ram-ravan/${params.character}`,
      languages: {
        'en-US': `http://astroank.com/ram-ravan/${params.character}`,
      },
    },
  };
}

export default function KundaliPage({ params }: { params: { character: string } }) {
  const characterData = ramRavanData[params.character as keyof typeof ramRavanData];
  
  if (!characterData) {
    return notFound();
  }

  const isRam = params.character === 'ram';

  return (
    <div className="min-h-screen py-12 pt-20 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5a0808] to-[#8b1e1e]">
              {characterData.title}
            </span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#8b1e1e] to-[#5a0808] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRam ? "The Divine King's Astrological Chart" : "The Demon King's Astrological Analysis"}
          </p>
        </div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
          {/* Kundali Image with decorative elements */}
          <div className="lg:w-1/2 w-full">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#8b1e1e]/20 via-[#5a0808]/10 to-[#8b1e1e]/20">
              <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200">
                <img 
                  src={characterData.image} 
                  alt={characterData.title} 
                  className="w-full h-auto object-contain rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-[#8b1e1e]/20 opacity-70"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-[#5a0808]/20 opacity-70"></div>
            </div>

            {/* Additional Astrological Charts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-center mb-2 text-[#5a0808]">Planetary Dasha</h3>
                <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Chart Visualization</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-center mb-2 text-[#5a0808]">Navamsa Chart</h3>
                <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Chart Visualization</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Details Section */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5a0808] opacity-10 -mr-16 -mt-16 rounded-full"></div>
              
              <h2 className="text-3xl font-bold mb-8 font-serif relative">
                <span className="relative z-10 text-[#5a0808]">
                  Astrological Deep Dive
                </span>
                <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-[#8b1e1e] rounded-full"></span>
              </h2>
              
              <div className="space-y-8">
                {/* Birth Details with icon */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 p-2 rounded-full bg-[#8b1e1e]/10 text-[#5a0808]">
                    <FaBirthdayCake className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Birth Details</h3>
                  <div className="space-y-2">
                    <p className="flex items-start">
                      <span className="inline-block w-24 font-medium text-gray-600">Date:</span>
                      <span className="text-gray-800">{characterData.details.birthDate}</span>
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block w-24 font-medium text-gray-600">Time:</span>
                      <span className="text-gray-800">{characterData.details.birthTime || "Noon (12:00 PM)"}</span>
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block w-24 font-medium text-gray-600">Place:</span>
                      <span className="text-gray-800">{characterData.details.birthPlace}</span>
                    </p>
                  </div>
                </div>
                
                {/* Planetary Positions */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 p-2 rounded-full bg-[#8b1e1e]/10 text-[#5a0808]">
                    <FaStar className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Planetary Positions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-600">Zodiac Sign</p>
                      <p className="text-lg font-semibold text-[#5a0808]">{characterData.details.zodiacSign}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-600">Nakshatra</p>
                      <p className="text-lg font-semibold text-[#5a0808]">{characterData.details.nakshatra}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-600">Guna</p>
                      <p className="text-lg font-semibold text-[#5a0808]">{characterData.details.guna}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-600">Ascendant</p>
                      <p className="text-lg font-semibold text-[#5a0808]">{characterData.details.ascendant || "Leo"}</p>
                    </div>
                  </div>
                </div>
                
                {/* Strengths with icon */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 p-2 rounded-full bg-[#8b1e1e]/10 text-[#5a0808]">
                    <FaShieldAlt className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Strengths</h3>
                  <ul className="space-y-2">
                    {characterData.details.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block mt-1 mr-2 text-[#8b1e1e]">✓</span>
                        <span className="text-gray-800">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Weaknesses with icon */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 p-2 rounded-full bg-[#8b1e1e]/10 text-[#5a0808]">
                    <FaExclamationTriangle className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Weaknesses</h3>
                  <ul className="space-y-2">
                    {characterData.details.weaknesses.map((weakness: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block mt-1 mr-2 text-[#5a0808]">✗</span>
                        <span className="text-gray-800">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Personality Analysis */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 p-2 rounded-full bg-[#8b1e1e]/10 text-[#5a0808]">
                    <FaBrain className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Personality Analysis</h3>
                  <p className="text-gray-800 leading-relaxed">{characterData.details.personality}</p>
                </div>
                
                {/* Additional Analysis */}
                {characterData.details.additionalAnalysis && (
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 p-2 rounded-full bg-[#8b1e1e]/10 text-[#5a0808]">
                      <GiMeditation className="text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Spiritual Analysis</h3>
                    <p className="text-gray-800 leading-relaxed">{characterData.details.additionalAnalysis}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Back button with animation */}
        <div className="text-center mt-16 animate-bounce-horizontal">
          <a 
            href="/ram-ravan" 
            className="inline-flex items-center px-8 py-4 rounded-full font-medium shadow-lg transition-all bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Comparison
          </a>
        </div>
      </div>
    </div>
  );
}
