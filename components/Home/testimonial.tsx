"use client";
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  avatarColor?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Saara Williams",
    role: "Marketing Manager",
    company: "Global Brands Inc.",
    rating: 5,
    text: "The numerology readings provided deep insights that helped realign our brand strategy. The accuracy was uncanny and the guidance proved invaluable for our campaigns.",
    avatarColor: "#9C27B0"
  },
  {
    id: "2",
    name: "Raj Patel",
    role: "CTO",
    company: "TechStart",
    rating: 5,
    text: "As a tech professional, I was skeptical at first. But the numerological analysis of our launch dates and product names matched perfectly with our actual outcomes.",
    avatarColor: "#3F51B5"
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Product Director",
    company: "InnovateCorp",
    rating: 5,
    text: "The life path number analysis helped me understand my career direction better. The guidance was so precise it felt like the reader knew me personally.",
    avatarColor: "#E91E63"
  },
  {
    id: "4",
    name: "Michael Johnson",
    role: "Founder & CEO",
    company: "NextGen Solutions",
    rating: 5,
    text: "We consulted for our company name numerology and the results were transformative. Our rebranding led to a 40% increase in customer engagement.",
    avatarColor: "#00BCD4"
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Efficiency Partners",
    rating: 5,
    text: "The compatibility reading for our leadership team helped resolve long-standing conflicts. The insights were practical and immediately applicable.",
    avatarColor: "#FF9800"
  },
  {
    id: "6",
    name: "David Kim",
    role: "Financial Advisor",
    company: "Wealth Management LLC",
    rating: 5,
    text: "The destiny number analysis provided clarity during a career crossroads. I've since made decisions with much more confidence and purpose.",
    avatarColor: "#4CAF50"
  }
];

const Review: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    swiperRef.current = new Swiper('#testimonial-slider', {
      modules: [Autoplay, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} bg-[#8b1e1e] opacity-30 w-2 h-2 mx-1 rounded-full transition-all duration-300 hover:opacity-100"></span>`;
        },
      },
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
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#FFD700]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full bg-[#FAFAFB] py-12 px-4 sm:px-6 lg:py-16 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main box container with chamfered corners and cream color */}
        <div className="bg-white p-6 lg:p-8" style={{
          clipPath: 'polygon(2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%, 0% 2%)'
        }}>
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-3 py-1 text-xs font-semibold text-[#8b1e1e] bg-[#FFEBEE] rounded-full mb-3"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Client Experiences
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#5a0808] mb-3 tracking-tight font-serif"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transformations Through Numbers
            </motion.h2>
            <motion.p 
              className="text-lg text-[#5a0808]/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover how numerology has guided our clients to clarity and success
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#8b1e1e] via-[#A00000] to-[#8b1e1e] mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="relative">
            <div className="swiper !pb-10" id="testimonial-slider">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="swiper-slide"
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                    }}
                  >
                    <motion.div 
                      className={`bg-white rounded-lg border border-[#e8e0d7] p-6 h-full flex flex-col shadow-sm transition-all duration-300 ${activeIndex === index ? 'scale-100' : 'scale-95'}`}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 15px 20px -5px rgba(139, 30, 30, 0.1)'
                      }}
                      style={{
                        clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)'
                      }}
                    >
                      <FaQuoteLeft className="text-[#8b1e1e] opacity-30 text-2xl mb-3" />
                      <div className="flex-grow">
                        <p className="text-gray-700 text-base leading-relaxed mb-4 italic">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div 
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm"
                          style={{ backgroundColor: testimonial.avatarColor }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="flex mb-0.5">
                            {renderStars(testimonial.rating)}
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-xs">
                            {testimonial.role}
                            {testimonial.company && ` • ${testimonial.company}`}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="swiper-pagination !bottom-0"></div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center mt-6 space-x-3">
            <button 
              className="testimonial-prev p-1.5 rounded-full bg-white border border-[#e8e0d7] text-[#8b1e1e] hover:bg-[#8b1e1e] hover:text-white transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button 
              className="testimonial-next p-1.5 rounded-full bg-white border border-[#e8e0d7] text-[#8b1e1e] hover:bg-[#8b1e1e] hover:text-white transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;