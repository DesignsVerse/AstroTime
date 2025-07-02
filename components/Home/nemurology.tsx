import { FaChartLine, FaStar, FaHandsHelping, FaGlobe } from 'react-icons/fa';
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { GiSpellBook } from 'react-icons/gi';

const features = [
  { text: 'Numerology Reports', icon: <FaChartLine className="text-xl" /> },
  { text: 'Personalized Guidance', icon: <MdOutlineSelfImprovement className="text-xl" /> },
  { text: 'Life Path Analysis', icon: <GiSpellBook className="text-xl" /> },
  { text: 'Name Correction', icon: <FaStar className="text-xl" /> },
  { text: 'Compatibility Reading', icon: <FaHandsHelping className="text-xl" /> },
  { text: 'Global Consultations', icon: <FaGlobe className="text-xl" /> },
];

export default function NumerologySection() {
  return (
    <section className="w-full min-h-screen md:min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-[#FCFAF8] py-12 md:py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#8b1e1e] mix-blend-multiply filter blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#5a0808] mix-blend-multiply filter blur-xl md:blur-3xl"></div>
      </div>

      {/* Left Side - Content */}
      <div className="flex-1 max-w-2xl relative z-10 order-2 md:order-1 mt-8 md:mt-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] mb-4 md:mb-6 font-serif text-center md:text-left">
          Unlock Your <span className="text-[#8b1e1e]">Cosmic Blueprint</span>
          <br className="hidden sm:block" /> Through Numerology
        </h2>
        <p className="text-base md:text-lg text-[#5a0808]/90 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
          Discover the hidden meanings in your numbers and align with your true life path. Our numerology services reveal insights about your personality, future, and relationships based on ancient wisdom.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center space-x-2 md:space-x-3 group">
              <div className="p-1.5 md:p-2 rounded-full bg-[#8b1e1e]/10 text-[#8b1e1e] group-hover:bg-[#5a0808] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <span className="text-sm md:text-base lg:text-lg text-[#5a0808] font-medium group-hover:text-[#8b1e1e] transition-colors duration-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="mt-6 md:mt-8 bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Discover Your Numbers
          </button>
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="flex-1 flex items-center justify-center w-full md:w-auto order-1 md:order-2 md:ml-8 lg:ml-12 relative z-10">
        <div className="w-full max-w-md md:max-w-lg h-[250px] sm:h-[300px] md:h-[380px] bg-gradient-to-br from-[#5a0808] to-[#8b1e1e] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border-2 border-[#f0e6d9] flex items-center justify-center overflow-hidden relative">
          {/* Video placeholder with mystical overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000')] bg-cover bg-center opacity-40"></div>
          
          {/* Play button */}
          <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#8b1e1e] flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 text-white font-serif text-xs md:text-sm">Numerology Revealed</div>
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 text-white/80 text-xs">Watch Testimonial</div>
        </div>
      </div>
    </section>
  );
}