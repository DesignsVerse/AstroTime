import { FaCheckCircle, FaStar, FaChartLine, FaHandsHelping, FaGlobe, FaLock } from 'react-icons/fa';
import { MdOutlineSelfImprovement, MdOutlinePsychology } from 'react-icons/md';
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
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-[#FCFAF8] py-16 px-4 md:px-16 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8b1e1e] mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#5a0808] mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Left Side - Content */}
      <div className="flex-1 max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5a0808] mb-6 font-serif">
          Unlock Your <span className="text-[#8b1e1e]">Cosmic Blueprint</span><br />
          Through Numerology
        </h2>
        <p className="text-lg text-[#5a0808]/90 mb-8 leading-relaxed">
          Discover the hidden meanings in your numbers and align with your true life path. Our numerology services reveal insights about your personality, future, and relationships based on ancient wisdom.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center space-x-3 group">
              <div className="p-2 rounded-full bg-[#8b1e1e]/10 text-[#8b1e1e] group-hover:bg-[#5a0808] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <span className="text-lg text-[#5a0808] font-medium group-hover:text-[#8b1e1e] transition-colors duration-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
          Discover Your Numbers
        </button>
      </div>

      {/* Right Side - Video */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 md:ml-12 relative z-10">
        <div className="w-full max-w-lg h-[380px] bg-gradient-to-br from-[#5a0808] to-[#8b1e1e] rounded-2xl shadow-2xl border-2 border-[#f0e6d9] flex items-center justify-center overflow-hidden relative">
          {/* Video placeholder with mystical overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000')] bg-cover bg-center opacity-40"></div>
          
          {/* Play button */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#8b1e1e] flex items-center justify-center">
              <svg className="w-8 h-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-white font-serif text-sm">Numerology Revealed</div>
          <div className="absolute bottom-4 right-4 text-white/80 text-xs">Watch Testimonial</div>
        </div>
      </div>
    </section>
  );
}