"use client";
import { FC, useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<number>();

  const slides = [
    { 
      image: "/hero/banner1.webp"
    },
    { 
      image: "/hero/banner2.webp"
    },
    { 
      image: "/hero/banner3.webp"
    },
  ];

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    
    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setCurrentSlide(index);
    resetInterval();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetInterval();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isHovered) {
      intervalRef.current = setInterval(goToNextSlide, 6000);
    }
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  // Add fade-in effect for slide content
  const [isContentVisible, setIsContentVisible] = useState(true);
  useEffect(() => {
    setIsContentVisible(false);
    const timer = setTimeout(() => setIsContentVisible(true), 50);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section 
      className="relative w-full h-[calc(100vh-80px)] mt-[80px] overflow-hidden bg-[#1C1C1C]"
      onMouseEnter={() => {
        setIsHovered(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        resetInterval();
      }}
    >
      {/* Slider container with smooth transition */}
      <div
        ref={sliderRef}
        className="relative w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Background image with parallax effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-10000 ease-linear"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>

            {/* Slide content */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="max-w-4xl mx-auto px-4 transform transition-all duration-700 ease-out">
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows with hover effects */}
      <button
        onClick={goToPrevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-[#800000]/90 text-white p-3 rounded-full hover:bg-[#800000] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100'
        } group`}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl group-hover:scale-125 transition-transform" />
      </button>
      <button
        onClick={goToNextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-[#800000]/90 text-white p-3 rounded-full hover:bg-[#800000] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100'
        } group`}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl group-hover:scale-125 transition-transform" />
      </button>

      {/* Slide indicators with improved design */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-[#800000]" : "bg-white/30 hover:bg-white/50"
            } group overflow-hidden`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <div 
                className="absolute top-0 left-0 h-full bg-[#800000]"
                style={{ 
                  animation: 'progress 5.5s linear forwards',
                  animationPlayState: isHovered ? 'paused' : 'running'
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </section>
  );
};

export default Hero;