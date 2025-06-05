"use client"
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';

const Hero: FC = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      type: "background-image",
      title: "Vedic Astrology Consultation",
      highlight: "Free Janam Kundli Analysis",
      description: "Get your complete birth chart analysis with planetary positions and life predictions from our expert astrologers.",
      image: "/ruby.png",
      buttonText: "Get Free Analysis"
    },
    {
      type: "left-image",
      title: "Love & Marriage Compatibility",
      highlight: "Special Couple Discount",
      description: "Understand your relationship dynamics and marriage compatibility through detailed horoscope matching.",
      image: "/ruby.png",
      buttonText: "Check Compatibility"
    },
    {
      type: "circular",
      title: "Planetary Transit Report",
      highlight: "30% Off This Month",
      description: "Discover how planetary movements affect your life and get remedies for challenges.",
      image: "/ruby.png",
      buttonText: "Get Transit Report"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] h-[600px] md:h-[700px]">
      {/* Full-width sliding frames */}
      <div className="flex h-full transition-transform duration-1000"
           style={{ transform: `translateX(-${activeFrame * 100}%)` }}>
        
        {/* Frame 1: Background Image Style */}
        <div className="min-w-full relative">
          <Image 
            src={frames[0].image}
            alt="Vedic astrology background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="max-w-7xl mx-auto px-8 text-white">
              <h1 className="font-playfair text-4xl md:text-6xl mb-4">
                {frames[0].title}
              </h1>
              <div className="flex items-center mb-6">
                <div className="border-b border-[#fca58d] w-14 mr-2"></div>
                <span className="text-[#fca58d] text-xl">✧</span>
              </div>
              <p className="text-xl max-w-2xl mb-8">{frames[0].description}</p>
              <button className="bg-[#fca58d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e88a6e] transition">
                {frames[0].buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Frame 2: Left Image Style */}
        <div className="min-w-full bg-[#f8f9fb] flex items-center">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src={frames[1].image}
                alt="Couple astrology"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 text-[#1a1f3d]">
              <h1 className="font-playfair text-3xl md:text-5xl mb-4">
                {frames[1].title}
              </h1>
              <div className="flex items-center mb-6">
                <div className="border-b border-[#fca58d] w-14 mr-2"></div>
                <span className="text-[#fca58d] text-xl">✧</span>
              </div>
              <p className="text-[#6b6b7b] mb-8">{frames[1].description}</p>
              <button className="bg-[#1a1f3d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d3658] transition">
                {frames[1].buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Frame 3: Circular Elements Style */}
        <div className="min-w-full bg-[#1a1f3d] relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#fca58d] opacity-20"></div>
          <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full bg-[#fca58d] opacity-10"></div>
          
          <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
            <div className="relative z-10 text-center text-white">
              <div className="mx-auto w-64 h-64 rounded-full border-4 border-[#fca58d] flex items-center justify-center mb-8 overflow-hidden">
                <Image
                  src={frames[2].image}
                  alt="Planetary positions"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              <h1 className="font-playfair text-3xl md:text-5xl mb-4">
                {frames[2].title}
              </h1>
              <div className="flex items-center justify-center mb-6">
                <div className="border-b border-[#fca58d] w-14 mr-2"></div>
                <span className="text-[#fca58d] text-xl">✧</span>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">{frames[2].description}</p>
              <button className="bg-[#fca58d] text-[#1a1f3d] px-8 py-3 rounded-full font-semibold hover:bg-[#e88a6e] transition">
                {frames[2].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {frames.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveFrame(index)}
            className={`w-3 h-3 rounded-full transition-all ${activeFrame === index ? 'bg-[#fca58d] w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;