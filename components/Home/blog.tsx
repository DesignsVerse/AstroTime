"use client";
import { Merriweather, Montserrat } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect, useCallback } from 'react';
import { blogData } from '@/data/blogData';
import { FiChevronLeft, FiChevronRight, FiClock, FiArrowRight } from 'react-icons/fi';

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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive slides per view
  const getSlidesPerView = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  // Handle resize for responsive layout
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      setSlidesPerView(newSlidesPerView);
      setSlidesToScroll(1);
      setCurrentIndex(prev => Math.min(prev, Math.ceil(blogData.length / newSlidesPerView) - 1));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSlidesPerView]);

  // Auto-scroll functionality with proper cleanup
  useEffect(() => {
    if (isAutoScrolling && !isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const maxIndex = Math.ceil(blogData.length / slidesPerView) - 1;
          return prev >= maxIndex ? 0 : prev + slidesToScroll;
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoScrolling, isHovering, slidesPerView, slidesToScroll]);

  const stopAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeout(() => setIsAutoScrolling(true), 10000);
  }, []);

  const handlePrev = useCallback(() => {
    stopAutoScroll();
    setCurrentIndex(prev => {
      const maxIndex = Math.ceil(blogData.length / slidesPerView) - 1;
      return prev <= 0 ? maxIndex : prev - slidesToScroll;
    });
  }, [slidesPerView, slidesToScroll, stopAutoScroll]);

  const handleNext = useCallback(() => {
    stopAutoScroll();
    setCurrentIndex(prev => {
      const maxIndex = Math.ceil(blogData.length / slidesPerView) - 1;
      return prev >= maxIndex ? 0 : prev + slidesToScroll;
    });
  }, [slidesPerView, slidesToScroll, stopAutoScroll]);

  // Enhanced touch handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    stopAutoScroll();
    setTouchStartX(e.touches[0].clientX);
  }, [stopAutoScroll]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
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

  // Calculate visible items
  const startIndex = currentIndex * slidesToScroll;
  const visibleItems = blogData.slice(startIndex, startIndex + slidesPerView);
  if (visibleItems.length < slidesPerView) {
    visibleItems.push(...blogData.slice(0, slidesPerView - visibleItems.length));
  }

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
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
          </div>

          {/* Section Header */}
          <div className="flex flex-col items-center mb-12 md:mb-20">
            <div className="flex justify-center items-center space-x-4 mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
              <div className="text-[#800000] text-2xl md:text-3xl select-none">✻</div>
              <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
            </div>
            <h2 className={`${montserrat.className} text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight`}>
              Astrology <span className="text-[#800000]">Blog & Articles</span>
            </h2>
            <p className={`${montserrat.className} text-[#6b6b7b] max-w-2xl text-center text-base md:text-lg leading-relaxed`}>
              Dive into our collection of insightful articles and cosmic wisdom from our master astrologers
            </p>
          </div>

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
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              aria-label="Previous articles"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 z-10 bg-white/90 hover:bg-white text-[#800000] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hidden sm:flex"
            >
              <FiChevronLeft className="text-base sm:text-lg lg:text-xl" />
            </button>
            
            <button 
              onClick={handleNext}
              aria-label="Next articles"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-6 z-10 bg-white/90 hover:bg-white text-[#800000] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hidden sm:flex"
            >
              <FiChevronRight className="text-base sm:text-lg lg:text-xl" />
            </button>

            {/* Blog Grid */}
            <div className="overflow-hidden relative w-full px-4 sm:px-8 lg:px-12">
              <div
                className="grid grid-flow-col auto-cols-[minmax(0,100%)] sm:auto-cols-[minmax(0,calc(50%-12px))] lg:auto-cols-[minmax(0,calc(33.333%-16px))] gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
                }}
              >
                {visibleItems.map((post) => (
                  <div
                    key={post.id}
                    className="col-span-1"
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

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 md:mt-12">
              <div className="flex space-x-2 md:space-x-3">
                {blogData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoScroll();
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
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