"use client";
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';
import { testimonials, numerologyFacts } from '@/data/testimonialData';

const Testimonial: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    swiperRef.current = new Swiper('#testimonial-slider', {
      modules: [Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      speed: 1000,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },
      centeredSlides: true, // This helps with card alignment
      slideActiveClass: 'active-slide', // For styling the active slide
      on: {
        slideChange: (swiper) => {
          setActiveIndex(swiper.realIndex);
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#FFD700] fill-current' : 'text-gray-300 fill-current'}`}
      />
    ));
  };

  return (
    <section className="w-full bg-[#FCFAF8] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="absolute rounded-full bg-[#8b1e1e] mix-blend-multiply filter blur-xl"
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
              <span className="text-[#8b1e1e] font-semibold text-sm tracking-wider">CLIENT TESTIMONIALS</span>
              <img src="/designe.png" alt="" className="h-6 w-auto mx-2" />
            </div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#5a0808] mb-4 tracking-tight font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Premium Client Experiences
          </motion.h2>
          
          <motion.p 
            className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            See What Our Clients Say About Their Sacred Number & Zodiac Journeys
          </motion.p>
          
    
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative px-8"> {/* Added padding to container */}
          <div className="swiper !overflow-visible" id="testimonial-slider">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="swiper-slide"
                  style={{
                    height: 'auto', // Let content determine height
                  }}
                >
                  <motion.div 
                    className={`relative bg-white rounded-xl border border-[#e8e0d7] p-8 flex flex-col h-full min-h-[320px] shadow-sm transition-all duration-300 hover:shadow-lg ${
                      activeIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 20px 25px -5px rgba(139, 30, 30, 0.1), 0 10px 10px -5px rgba(139, 30, 30, 0.04)'
                    }}
                  >
                    <FaQuoteLeft className="text-[#8b1e1e] opacity-20 text-3xl mb-4" />
                    <div className="flex-grow">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-5">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center mt-auto">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-md"
                        style={{ backgroundColor: testimonial.avatarColor }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="flex mb-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                          {testimonial.company && <span className="text-gray-500"> • {testimonial.company}</span>}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;