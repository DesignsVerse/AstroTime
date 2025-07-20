"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden  lg:pb-12.5 xl:pb-15 pt-20 sm:pt-45 lg:pt-30 xl:pt-30 bg-[#FFFAF5]">
      <div className="max-w-[1170px] w-full mx-auto px-0 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee flex items-center">
          <span className="mr-3" aria-label="announcement" role="img">��</span>
          <div className="marquee-track">
            <span className="marquee-text">
              Get exclusive early access! Sign up now for launch updates. &nbsp;|&nbsp; Special offers await our first Indian customers!
              &emsp;&emsp;
              Get exclusive early access! Sign up now for launch updates. &nbsp;|&nbsp; Special offers await our first Indian customers!
              &emsp;&emsp;
            </span>
            <span className="marquee-text">
              Get exclusive early access! Sign up now for launch updates. &nbsp;|&nbsp; Special offers await our first Indian customers!
              &emsp;&emsp;
              Get exclusive early access! Sign up now for launch updates. &nbsp;|&nbsp; Special offers await our first Indian customers!
              &emsp;&emsp;
            </span>
          </div>
        </div>
        <style jsx>{`
          .marquee-container {
            width: 100%;
            background: #800000;
            overflow: hidden;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 20;
            margin: 0;
            padding: 0;
          }
          .marquee {
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 15s linear infinite;
          }
          .marquee-text {
            white-space: nowrap;
            color: #fff;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            padding: 10px 0 8px 0;
          }
          .marquee span[role="img"] {
            font-size: 0.7rem;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          section {
            position: relative;
            padding-bottom: 0 !important;
          }
          @media (max-width: 767px) {
            .marquee-container {
              /* display: none;  Remove this line to show marquee on mobile */
              position: relative;
              left: 0;
              bottom: auto;
              z-index: 20;
              width: 100%;
              margin-top: 36px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

const HeroCarousel = () => {
  // Image sources for desktop and mobile
  const desktopSlides = [
    { src: "/hero/1.jpg", link: "/nemerology-anck" },
    { src: "/hero/2.jpg", link: "/services" },
    { src: "/hero/3.jpg", link: "/services" },
    { src: "/hero/4.jpg", link: "/services" },
    { src: "/hero/5.jpg", link: "/services" },
  ];
  const mobileSlides = [
    { src: "/hero/mobile/2.png", link: "/services" },
    { src: "/hero/mobile/3.png", link: "/services" },
    { src: "/hero/mobile/4.png", link: "/services" },
    { src: "/hero/mobile/5.png", link: "/services" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % desktopSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [desktopSlides.length]);

  // Scroll to active slide
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
    }
  }, [activeIndex, isMobile]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Select slides based on device
  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <div
      className={`hero-carousel w-full ${
        isMobile ? "h-[700px]" : "h-[500px]"
      } relative overflow-hidden`}
    >
      <style jsx>{`
        .carousel-inner {
          display: flex;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .carousel-slide {
          flex: 0 0 100%;
          height: 100%;
        }
        .banner-image-container {
          /* Remove all margin and padding for mobile */
          margin: 0;
          padding: 0;
          /* #ccc; More visible border, adjust color as needed */
          overflow: visible;
          position: relative;
        }
        .pagination {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          opacity: 0.7;
          cursor: pointer;
        }
        .dot.active {
          opacity: 1;
          background: #800000;
        }
        @media (max-width: 767px) {
          .banner-image-container {
            margin: 0 !important;
            padding: 0 !important;
          }
          .carousel-slide img {
            object-fit: cover;
          }
        }
      `}</style>
      <div className="carousel-inner" ref={carouselRef}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="relative w-full h-full banner-image-container">
              {isMobile ? (
                <Image
                  src={slide.src}
                  alt={`headphone-${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes={isMobile ? "100vw" : "100vw"}
                  onError={() => console.error(`Failed to load image ${slide.src}`)}
                />
              ) : (
                <Link href={slide.link} legacyBehavior>
                  <a>
                    <Image
                      src={slide.src}
                      alt={`headphone-${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes={isMobile ? "100vw" : "100vw"}
                      onError={() => console.error(`Failed to load image ${slide.src}`)}
                    />
                  </a>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;