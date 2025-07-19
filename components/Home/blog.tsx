"use client";
import { Merriweather, Montserrat } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect, useCallback } from 'react';
import { blogData } from '@/data/blogData';
import { FiChevronLeft, FiChevronRight, FiClock, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  // Removed intervalRef and isAutoScrolling

  // Responsive slides per view
  const getSlidesPerView = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Handle resize for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSlidesPerView]);

  // Removed useEffect for auto-scroll functionality

  // Clamp currentIndex to valid range
  const clampIndex = useCallback((index: number) => {
    const maxIndex = Math.max(0, blogData.length - slidesPerView);
    if (index < 0) return maxIndex;
    if (index > maxIndex) return 0;
    return index;
  }, [slidesPerView]);

  // Removed stopAutoScroll and its usage from handlePrev, handleNext, handleTouchStart, and pagination dots
  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => clampIndex(prev - 1));
  }, [clampIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => clampIndex(prev + 1));
  }, [clampIndex]);

  // Enhanced touch handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartX === 0 || touchEndX === 0) return;
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(0);
    setTouchEndX(0);
  }, [touchStartX, touchEndX, handleNext, handlePrev]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Astrology Blog & Articles</title>
        <meta name="description" content="Explore our collection of in-depth astrology articles, spiritual insights, and cosmic wisdom from our expert astrologers" />
      </Head>

      <div className="bg-[#FCFAF8]">
        <section className={`${merriweather.className} relative text-[#1a2238] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24`}>
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
                <span className="text-[#8b1e1e] font-semibold text-sm tracking-wider">ASTRO BLOG</span>
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
              Premium Astrology Articles & Insights
            </motion.h2>
            <motion.p 
              className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Explore exclusive articles and cosmic wisdom from our master astrologers
            </motion.p>
          </motion.div>

          {/* Carousel Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={carouselRef}
          >
            {/* Navigation Arrows - Always Visible */}
            <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-10 px-2">
              <button 
                onClick={handlePrev}
                aria-label="Previous articles"
                className="bg-white/90 hover:bg-white text-[#800000] w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <FiChevronLeft className="text-base" />
              </button>
              <button 
                onClick={handleNext}
                aria-label="Next articles"
                className="bg-white/90 hover:bg-white text-[#800000] w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <FiChevronRight className="text-base" />
              </button>
            </div>

            {/* Blog Grid */}
            <div className="overflow-hidden relative w-full px-2 sm:px-8 lg:px-12">
              <div
                className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] lg:auto-cols-[33.333%] gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                }}
              >
                {blogData.map((post, idx) => (
                  <div
                    key={`${post.id}-${idx}`} // Use idx for uniqueness
                    className="col-span-1 min-w-0"
                  >
                    <article 
                      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col"
                    >
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <Image
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                          src={post.image}
                          quality={90}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL="/placeholder-image.jpg"
                        />
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4" style={{ backgroundColor: post.categoryColor }}>
                          <span className="text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 flex-grow flex flex-col">
                        <h3 className={`${montserrat.className} text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#800000] transition-colors duration-300`}>
                          {post.title}
                        </h3>
                        <p className="text-[#6b6b7b] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                          <Link 
                            href={`/blog/${post.slug}`} 
                            className="text-[#800000] text-sm sm:text-base font-semibold hover:underline flex items-center gap-1 sm:gap-2 group"
                            aria-label={`Read more about ${post.title}`}
                          >
                            Read More 
                            <FiArrowRight className="text-xs sm:text-sm transition-transform group-hover:translate-x-1 duration-300" />
                          </Link>
                          <div className="flex items-center text-xs sm:text-sm text-gray-500">
                            <FiClock className="mr-1" /> {post.readTime}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots - Mobile */}
            <div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
              <div className="flex space-x-2 md:space-x-3">
                {Array.from({ length: Math.ceil(blogData.length / slidesPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(clampIndex(index * slidesPerView));
                    }}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / slidesPerView) === index
                        ? 'bg-[#800000] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to blog ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12 md:mt-20">
            <Link 
              href="/blog" 
              className={`${montserrat.className} bg-gradient-to-r from-[#800000] to-[#A53838] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:from-[#A53838] hover:to-[#800000] group inline-flex items-center text-sm sm:text-base`}
              aria-label="Explore all articles"
            >
              Explore All Articles
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}