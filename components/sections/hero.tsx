"use client";
import { FC, useState, useEffect, useRef } from "react";

const Hero: FC = () => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const frames = [
    {
      type: "background-gradient",
      title: "Accurate Predictions About Your Future",
      description: "Unlock the secrets of your destiny with our ancient astrological wisdom combined with modern celestial analysis.",
    },
    {
      type: "background-gradient",
      title: "Cosmic Guidance For Your Life Path",
      description: "Align your journey with the stars through personalized horoscopes and planetary transit readings.",
    },
    {
      type: "background-gradient",
      title: "Ancient Wisdom, Modern Insights",
      description: "Our astrologers blend Vedic traditions with contemporary astrology for profound revelations.",
    }
  ];

  // Handle mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Frame rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [frames.length]);

  // Calculate parallax effects
  const calculateParallax = (speed: number) => {
    if (!sectionRef.current) return { transform: 'translate(0, 0)' };
    
    const centerX = sectionRef.current.clientWidth / 2;
    const centerY = sectionRef.current.clientHeight / 2;
    const moveX = (mousePosition.x - centerX) / (centerX / speed);
    const moveY = (mousePosition.y - centerY) / (centerY / speed);
    
    return { 
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.3s ease-out'
    };
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative overflow-hidden min-h-screen w-full bg-gradient-to-r from-[#f8f9fb] to-[#f0f2f5] pt-24 pb-16"
      >
        {/* Main content with left-right layout */}
        <div className="relative z-10 h-full pt-10 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#1a1f3d] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side content */}
              <div className="text-left">
                <div className="relative inline-block">
                  <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight relative z-10">
                    {frames[activeFrame].title.split(' ').map((word, i) => (
                      <span 
                        key={i} 
                        className="inline-block opacity-0 animate-fadeInUp"
                        style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                      >
                        {word}&nbsp;
                      </span>
                    ))}
                  </h1>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#e88a6e] opacity-20 rounded-full animate-scaleX origin-left" 
                    style={{ animationDelay: '0.3s' }} 
                  />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="border-b border-[#e88a6e] w-10 sm:w-14 mr-2 animate-grow origin-left" />
                  <span className="text-[#e88a6e] text-lg sm:text-xl animate-spin-slow">✧</span>
                  <div className="border-b border-[#e88a6e] w-10 sm:w-14 ml-2 animate-grow origin-right" />
                </div>
                
                <p className="text-base sm:text-lg md:text-xl max-w-md text-[#1a1f3d]/80 opacity-0 animate-fadeIn mb-8"
                  style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
                >
                  {frames[activeFrame].description}
                </p>
                
                {/* CTA button with glow effect */}
                <button 
                  className="px-8 py-4 bg-[#e88a6e] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group text-lg"
                >
                  <span className="relative z-10">Discover Your Destiny</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-pulse-slow" 
                    style={{ boxShadow: '0 0 20px 10px rgba(232, 138, 110, 0.5)' }} 
                  />
                </button>
              </div>

              {/* Right side image with 360 rotation */}
              <div className="relative h-[500px] w-full mt-8 lg:mt-0">
                <div className="absolute inset-0 rounded-2xl overflow-hidden animate-rotate-360">
                  <img 
                    src="/hero/hero.png" 
                    alt="Astrology Reading" 
                    className="w-full h-full object-contain object-center mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling section */}
      <section className="w-full bg-white py-16 overflow-hidden">
        <div className="relative">
          {/* Auto-scrolling container */}
          <div className="flex animate-scroll-x">
            {[...frames, ...frames].map((frame, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[400px] mx-4 bg-gradient-to-br from-[#f8f9fb] to-[#f0f2f5] rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-playfair text-2xl mb-4 text-[#1a1f3d]">{frame.title}</h3>
                <p className="text-[#1a1f3d]/80">{frame.description}</p>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Tailwind CSS for animations - add to your globals.css */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-scaleX {
          animation: scaleX 0.8s ease-out;
        }
        .animate-grow {
          animation: grow 0.6s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-rotate-360 {
          animation: rotate-360 20s linear infinite;
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;