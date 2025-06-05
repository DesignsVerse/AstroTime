"use client";
import Image from "next/image";
import { FC, useState, useEffect } from "react";

const Hero: FC = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      type: "background-image",
      title: "Vedic Astrology Consultation",
      highlight: "Free Janam Kundli Analysis",
      description: "Get your complete birth chart analysis with planetary positions and life predictions from our expert astrologers.",
      image: "/ruby.png",
      buttonText: "Get Free Analysis",
    },
    {
      type: "left-image",
      title: "Love & Marriage Compatibility",
      highlight: "Special Couple Discount",
      description: "Understand your relationship dynamics and marriage compatibility through detailed horoscope matching.",
      image: "/ruby.png",
      buttonText: "Check Compatibility",
    },
    {
      type: "circular",
      title: "Planetary Transit Report",
      highlight: "30% Off This Month",
      description: "Discover how planetary movements affect your life and get remedies for challenges.",
      image: "/ruby.png",
      buttonText: "Get Transit Report",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <section className="relative overflow-hidden h-[100vh] w-[100vw] bg-black">
      {/* Full-width sliding frames */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeFrame * 100}%)` }}
      >
        {/* Frame 1: Background Image Style */}
        <div className="min-w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <Image
            src={frames[0].image}
            alt="Vedic astrology background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                {frames[0].title}
              </h1>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="border-b border-[#fca58d] w-10 sm:w-14 mr-2"></div>
                <span className="text-[#fca58d] text-lg sm:text-xl">✧</span>
                <span className="ml-4 text-lg sm:text-xl font-medium text-[#fca58d]">
                  {frames[0].highlight}
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8">
                {frames[0].description}
              </p>
              <button className="bg-[#fca58d] hover:bg-[#e88a6e] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                {frames[0].buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Frame 2: Left Image Style */}
        <div className="min-w-full bg-[#f8f9fb] flex items-center py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                <Image
                  src={frames[1].image}
                  alt="Couple astrology"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 text-[#1a1f3d] text-center md:text-left">
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                {frames[1].title}
              </h1>
              <div className="flex items-center mb-4 sm:mb-6 justify-center md:justify-start">
                <div className="border-b border-[#fca58d] w-10 sm:w-14 mr-2"></div>
                <span className="text-[#fca58d] text-lg sm:text-xl">✧</span>
                <span className="ml-4 text-base sm:text-lg font-medium text-[#fca58d]">
                  {frames[1].highlight}
                </span>
              </div>
              <p className="text-[#6b6b7b] text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                {frames[1].description}
              </p>
              <button className="bg-[#1a1f3d] hover:bg-[#2d3658] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                {frames[1].buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Frame 3: Circular Elements Style */}
        <div className="min-w-full bg-[#1a1f3d] relative overflow-hidden flex items-center py-12">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-[#fca58d] opacity-20"></div>
          <div className="absolute -bottom-60 -left-60 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#fca58d] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="relative z-10 text-center text-white">
              <div className="mx-auto w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-[#fca58d] flex items-center justify-center mb-6 sm:mb-8 overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src={frames[2].image}
                    alt="Planetary positions"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                {frames[2].title}
              </h1>
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="border-b border-[#fca58d] w-10 sm:w-14 mr-2"></div>
                <span className="text-[#fca58d] text-lg sm:text-xl">✧</span>
                <span className="ml-4 text-base sm:text-lg font-medium text-[#fca58d]">
                  {frames[2].highlight}
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base max-w-md sm:max-w-xl mx-auto mb-6 sm:mb-8">
                {frames[2].description}
              </p>
              <button className="bg-[#fca58d] hover:bg-[#e88a6e] text-[#1a1f3d] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                {frames[2].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-20">
        {frames.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveFrame(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              activeFrame === index ? "bg-[#fca58d] w-4 sm:w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;