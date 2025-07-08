import { zodiacData } from '@/data/rashi';
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
  FaQuestionCircle
} from 'react-icons/fa';

// TypeScript type for a ZodiacSign, inferred from data/rashi.js
export type ZodiacSign = {
  name: string;
  src: string;
  month: string;
  color: string;
  element: string;
  ruler: string;
  traits: string[];
  description: string;
  luckyNumbers: number[];
  luckyColors: string[];
  compatibility: string[];
  dailyHoroscope: {
    finance: string;
    career: string;
    family: string;
    health: string;
    loveLife: string;
    marriedLife: string;
  };
  positiveTraits: string[];
  negativeTraits: string[];
  famousPeople: string[];
  bestProfessions: string[];
};

export async function generateStaticParams() {
  return Object.keys(zodiacData).map((sign) => ({
    sign: sign.toLowerCase(),
  }));
}

const ZodiacSignPage = ({ params }: { params: { sign: string } }) => {
  const sign = params.sign.charAt(0).toUpperCase() + params.sign.slice(1);
  const signData = zodiacData[sign as keyof typeof zodiacData] as ZodiacSign;

  if (!signData) {
    notFound();
  }

  // Get current date in format "Weekday, Month Day, Year"
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get 3 random related signs excluding current one
  const relatedSigns = Object.keys(zodiacData)
    .filter(s => s !== sign)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Horoscope sections with icons
  const horoscopeSections = [
    { 
      key: 'finance',
      title: 'Finance',
      icon: <FaRupeeSign className="text-[#5a0808] mr-2" />,
      content: signData.dailyHoroscope.finance
    },
    { 
      key: 'career',
      title: 'Career',
      icon: <FaChartLine className="text-[#5a0808] mr-2" />,
      content: signData.dailyHoroscope.career
    },
    { 
      key: 'family',
      title: 'Family',
      icon: <FaUserAlt className="text-[#5a0808] mr-2" />,
      content: signData.dailyHoroscope.family
    },
    { 
      key: 'health',
      title: 'Health',
      icon: <FaHeart className="text-[#5a0808] mr-2" />,
      content: signData.dailyHoroscope.health
    },
    { 
      key: 'loveLife',
      title: 'Love Life',
      icon: <FaHeart className="text-[#5a0808] mr-2" />,
      content: signData.dailyHoroscope.loveLife
    },
    { 
      key: 'marriedLife',
      title: 'Married Life',
      icon: <FaBalanceScale className="text-[#5a0808] mr-2" />,
      content: signData.dailyHoroscope.marriedLife
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r md:mt-0 mt-10 from-[#5a0808] to-[#8b1e1e] text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="bg-white rounded-full p-5 backdrop-blur-sm">
              <div className="text-white">
                <img 
                  src={signData.src} 
                  alt={signData.name} 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-3">
                {signData.name} Daily Horoscope
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
                Horoscope for {currentDate}
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
            {/* Horoscope Content */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="space-y-6">
                {horoscopeSections.map((section) => (
                  <div key={section.key}>
                    <h3 className="font-semibold text-lg text-[#5a0808] mb-2 flex items-center">
                      {section.icon}
                      {section.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Traits Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-[#5a0808] mb-4">About {signData.name}</h3>
              <p className="text-gray-700 mb-4">{signData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#5a0808] mb-2">Positive Traits</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {signData.positiveTraits.map((trait: string, index: number) => (
                      <li key={`positive-${index}`}>{trait}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5a0808] mb-2">Negative Traits</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {signData.negativeTraits.map((trait: string, index: number) => (
                      <li key={`negative-${index}`}>{trait}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Famous People Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-[#5a0808] mb-4">Famous {signData.name} People</h3>
              <div className="flex flex-wrap gap-3">
                {signData.famousPeople.map((person: string, index: number) => (
                  <span 
                    key={`person-${index}`}
                    className="bg-[#f8e1e1] text-[#5a0808] px-3 py-1 rounded-full text-sm"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>

            {/* Promotion Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#5a0808] mb-3">
                    Dear {signData.name}, Next 3 Months Hold Life-Changing Opportunities Most Will Miss!
                  </h3>
                  <p className="text-gray-700">
                    Don't be blindsided! Crucial relationship turning points, career-defining moments, and wealth windows are coming. Prepare with 3 months of guidance - just ₹249 (75% OFF today only!)
                  </p>
                </div>
                <button 
                  className="bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get 3 Month @ ₹249
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md sticky top-8 overflow-hidden border border-[#f8e1e1]">
              {/* Zodiac Sign Info */}
              <div className="p-6 border-b border-[#f8e1e1]">
                <h3 className="text-xl font-bold text-[#5a0808] font-serif mb-4">
                  {signData.name} Traits
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaStar className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Element</h4>
                      <p className="text-lg text-gray-700">{signData.element}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaGem className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Ruling Planet</h4>
                      <p className="text-lg text-gray-700">{signData.ruler}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaHeart className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Compatibility</h4>
                      <p className="text-lg text-gray-700">{signData.compatibility.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaGraduationCap className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Best Professions</h4>
                      <p className="text-lg text-gray-700">{signData.bestProfessions.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaCheck className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Lucky Numbers</h4>
                      <p className="text-lg text-gray-700">{signData.luckyNumbers.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#f8e1e1] rounded-full p-2 mr-3">
                      <FaBook className="text-[#5a0808]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Lucky Colors</h4>
                      <p className="text-lg text-gray-700">{signData.luckyColors.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="p-6 border-b border-[#f8e1e1]">
                <button className="w-full bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-semibold py-3 px-4 rounded-lg mb-4 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Personal Horoscope
                </button>
                
                <button className="w-full bg-white text-[#5a0808] border border-[#5a0808] hover:bg-[#f8e1e1] font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                  Talk to Astrologer
                </button>
              </div>

              {/* Related Signs */}
              <div className="p-6 border-b border-[#f8e1e1]">
                <h3 className="text-lg font-bold text-[#5a0808] mb-4">Related Signs</h3>
                <div className="flex flex-col gap-3">
                  {relatedSigns.map((relatedSign) => (
                    <a
                      key={relatedSign}
                      href={`/rashi/${relatedSign.toLowerCase()}`}
                      className="flex items-center gap-3 p-2 hover:bg-[#f8e1e1] rounded-lg transition-colors"
                    >
                      <img
                        src={zodiacData[relatedSign as keyof typeof zodiacData].src}
                        alt={zodiacData[relatedSign as keyof typeof zodiacData].name}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium text-gray-700">
                        {zodiacData[relatedSign as keyof typeof zodiacData].name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Zodiac Signs Navigation */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#5a0808] mb-4 text-center">All Zodiac Signs</h3>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                  {Object.keys(zodiacData).map((zodiacSign) => {
                    const current = zodiacSign === sign;
                    return (
                      <a
                        key={zodiacSign}
                        href={`/rashi/${zodiacSign.toLowerCase()}`}
                        className={`flex flex-col items-center font-bold text-sm w-20 select-none text-[#5a0808] gap-2 transition-all duration-200 ${current ? 'cursor-default scale-110 text-[#8b1e1e]' : 'cursor-pointer hover:scale-105 hover:text-[#c75105]'}`}
                      >
                        <div className={`w-16 h-16 flex items-center justify-center mb-1 ${current ? 'bg-[#f8e1e1] rounded-full p-2 shadow-md' : ''}`}>
                          <img
                            src={zodiacData[zodiacSign as keyof typeof zodiacData].src}
                            alt={zodiacData[zodiacSign as keyof typeof zodiacData].name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <span className="tracking-wide font-semibold">{zodiacSign}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({ params }: { params: { sign: string } }) {
  const sign = params.sign.charAt(0).toUpperCase() + params.sign.slice(1);
  const signData = zodiacData[sign as keyof typeof zodiacData] as ZodiacSign;
  
  if (!signData) {
    return {
      title: 'Zodiac Sign Not Found',
      description: 'The requested zodiac sign does not exist.',
    };
  }

  return {
    title: `${signData.name} Daily Horoscope | AstroTime`,
    description: `Get today's horoscope for ${signData.name} zodiac sign. Discover what the stars have in store for your love, career, health and more.`,
    openGraph: {
      title: `${signData.name} Daily Horoscope | AstroTime`,
      description: `Get today's horoscope for ${signData.name} zodiac sign.`,
      url: `https://yourdomain.com/rashi/${params.sign}`,
      images: [
        {
          url: signData.src,
          width: 1200,
          height: 630,
          alt: `${signData.name} Horoscope`,
        },
      ],
    },
  };
}

export default ZodiacSignPage;