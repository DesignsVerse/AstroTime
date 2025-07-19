"use client";
import { FC, useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    { 
      image: "/hero/1.png",
    },
    { 
      image: "/hero/2.png",
    },
    { 
      image: "/hero/3.png",
    },
    { 
      image: "/hero/4.png",
    },
    { 
      image: "/hero/5.png",
    },
    { 
      image: "/hero/6.png",
    },
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#FCFAF8] py-8 px-4">
      <section 
        className="relative pt-5 w-full mx-auto overflow-hidden bg-[#FCFAF8] rounded-2xl"
        style={{ 
          height: '88vh',
          maxWidth: '95%'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slider container with centered content */}
        <div
          ref={sliderRef}
          className="relative w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="w-full h-full flex-shrink-0 flex items-center justify-center p-4" // Added padding
            >
              <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden bg-[#FCFAF8]"> {/* Container for image with bg */}
                <img
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                  className="max-w-full max-h-full object-contain rounded-xl" // Changed to contain
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Text overlay */}
                {/* <div className="absolute bottom-8 left-8 right-8 bg-black/50 text-white p-6 rounded-xl backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg italic">{slide.quote}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - enhanced */}
        <button
          onClick={goToPrevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-[#800000]/90 text-white p-3 rounded-full hover:bg-[#800000] transition-all duration-300 z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100'
          } group shadow-lg`}
        >
          <FaChevronLeft className="text-xl group-hover:scale-125 transition-transform" />
        </button>
        <button
          onClick={goToNextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-[#800000]/90 text-white p-3 rounded-full hover:bg-[#800000] transition-all duration-300 z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100'
          } group shadow-lg`}
        >
          <FaChevronRight className="text-xl group-hover:scale-125 transition-transform" />
        </button>

        {/* Slide indicators - enhanced */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-16 h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === index ? "bg-[#800000]" : "bg-white hover:bg-white/70"
              } shadow-md`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;