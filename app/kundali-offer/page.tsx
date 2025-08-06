"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRef } from "react";

const ExpertKundaliPage = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const problemSolutions = [
    {
      title: "Love & Marriage",
      description: "Get insights about your life partner, marriage timing, and relationship compatibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Career Growth",
      description: "Discover your ideal career path and timing for job changes or promotions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Financial Prosperity",
      description: "Understand money flow patterns and remedies for financial stability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Health Analysis",
      description: "Identify potential health concerns and preventive measures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Education & Studies",
      description: "Get guidance for academic success and competitive exams.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: "Family Harmony",
      description: "Solutions for family disputes and improving domestic peace.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: "What information do I need to provide?",
      answer: "We need your full name, date of birth, exact time of birth, and birth place for accurate analysis."
    },
    {
      question: "How does the consultation work?",
      answer: "After you share your details, Astro Deepak Goutam will analyze your kundali and provide a detailed phone consultation within 24 hours."
    },
    {
      question: "Is this offer really only ₹99?",
      answer: "Yes! Normally priced at ₹999, we're offering this premium consultation at just ₹99 for a limited time."
    },
    {
      question: "What will I get in the consultation?",
      answer: "You'll receive detailed analysis of all life aspects, personalized predictions, and specific remedies during your phone call with our expert."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma, Mumbai",
      quote: "Deepak ji's phone consultation predicted my job change to the exact month! The career guidance transformed my professional life.",
      rating: 5,
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2 .9-2 2 .9 2 2 2m0-8V4m0 16v-4m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      )
    },
    {
      name: "Priya Patel, Delhi",
      quote: "The marriage compatibility analysis during the call saved me from a wrong alliance. Now I'm happily married as per the guidance.",
      rating: 5,
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2 .9-2 2 .9 2 2 2m0-8V4m0 16v-4m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      )
    },
    {
      name: "Vikram Jain, Bangalore",
      quote: "Financial remedies suggested during my consultation helped me double my income within 6 months. Worth every penny!",
      rating: 5,
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2 .9-2 2 .9 2 2 2m0-8V4m0 16v-4m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      )
    }
  ];

  const whatsappMessage = `Hi Astro Deepak Goutam, I want to book your ₹99 Kundali Consultation. My details are:\n\nName: \nDate of Birth: \nTime of Birth: \nBirth Place: \n\nPlease schedule my call.`;

  return (
    <>
      <Head>
        <title>Premium Kundali Consultation @ ₹99 | Astro Deepak Goutam</title>
        <meta name="description" content="Limited offer - Get 25+ years expert kundali analysis and phone consultation for just ₹99" />
      </Head>

      {/* Floating WhatsApp Button */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <a 
            href={`https://wa.me/+919153164444?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-full shadow-xl flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.429l-.01.01c-.01-.01 0-.01.01-.01" fillRule="evenodd" clipRule="evenodd"/>
              <path d="M11.977 4C7.055 4 3 8.055 3 12.977c0 1.64.425 3.26 1.237 4.69L3 21l3.334-.914a8.25 8.25 0 005.643 2.163c4.922 0 8.977-4.055 8.977-8.977 0-4.923-4.055-8.978-8.977-8.978m0 16.227a7.22 7.22 0 01-3.662-.99l-.267-.16-2.772.729.74-2.707-.174-.278a7.248 7.248 0 01-1.104-3.86 7.26 7.26 0 017.26-7.26c1.993 0 3.86.776 5.266 2.186a7.396 7.396 0 012.186 5.266 7.26 7.26 0 01-7.260 7.260"/>
            </svg>
            BOOK CALL NOW
          </a>
        </div>
      )}

      <div className="min-h-screen bg-[#FFFAF5] text-black">
        {/* Luxury Hero Banner */}
        <section className="bg-gradient-to-b from-[#800000] to-[#600000] text-[#FFFAF5] py-16 md:py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/astrology-pattern.png')] bg-repeat opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#FFFAF5]/20 inline-block mb-6">
                <p className="text-yellow-300 font-medium">Limited Time Offer</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">Premium Kundali</span><br />
                Phone Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-lg">
                Get <span className="font-bold">25+ years expert analysis</span> and personalized guidance in a <span className="text-yellow-300 font-bold">private call</span> for just ₹99
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 px-6 py-3 rounded-full border border-[#FFFAF5]/30 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-xl font-bold">24 Hours</p>
                    <p className="text-sm">Response Time</p>
                  </div>
                </div>
                <div className="bg-black/30 px-6 py-3 rounded-full border border-[#FFFAF5]/30 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-xl font-bold">25-30 Min</p>
                    <p className="text-sm">Detailed Call</p>
                  </div>
                </div>
              </div>
              
              <a 
                href={`https://wa.me/+919153164444?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FFFAF5] to-[#FFF5E0] hover:from-white hover:to-[#FFFAF5] text-[#800000] font-bold py-4 px-10 rounded-full text-lg shadow-2xl inline-flex items-center transform hover:scale-105 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                BOOK MY PHONE CONSULTATION
              </a>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#FFFAF5] w-full max-w-lg   duration-300">
                <img 
                  src="/kundali.jpg"
                  alt="Astro Deepak Goutam"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-2xl font-bold text-[#FFFAF5]">Astro Deepak Goutam</p>
                  <p className="text-yellow-300">Vedic Astrology Expert • 25+ Years Experience</p>
                </div>
               
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Luxury Video Process Section */}
        <section className="py-16 bg-white relative">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#FFFAF5] z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800000]">
                Your <span className="text-yellow-600">Personalized</span> Consultation Journey
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-xl border border-[#FFFAF5]">
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-[#800000] to-black transform hover:scale-[1.02] transition-transform">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video/kundali.mp4"
                    poster="/hero/5.jpg"
                    loop
                    controls={isPlaying}
                    onClick={(e) => e.stopPropagation()}
                  />
                  {!isPlaying && (
                    <div
                    className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 cursor-pointer transition duration-300"
                    onClick={handlePlay}
                    >
                      <div className="bg-white/10 border border-white/20 p-5 rounded-full mb-4 hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Watch Consultation Process</h3>
                      <p className="text-white/80">See how our premium analysis works</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#800000] text-[#FFFAF5] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1 font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#800000] mb-2">Share Your Birth Details</h3>
                      <p className="text-gray-700">Send your name, date of birth, exact time, and birth place via WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#800000] text-[#FFFAF5] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1 font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#800000] mb-2">Expert Kundali Analysis</h3>
                      <p className="text-gray-700">Astro Deepak will personally analyze your birth chart and planetary positions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#800000] text-[#FFFAF5] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1 font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#800000] mb-2">Private Phone Consultation</h3>
                      <p className="text-gray-700">Receive detailed predictions and remedies in a 25-30 minute personalized call</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href={`https://wa.me/+919153164444?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 bg-gradient-to-r from-[#800000] to-[#600000] hover:from-[#600000] hover:to-[#800000] text-[#FFFAF5] font-bold py-4 px-10 rounded-full text-lg shadow-lg inline-flex items-center transform hover:scale-105 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                  WATCH FULL PROCESS
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* 3 Simple Steps Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#800000]">
        Get Your Consultation in <span className="text-yellow-600">3 Simple Steps</span>
      </h2>
      <p className="text-xl mt-4 max-w-2xl mx-auto">Easy process to get your personalized astrological guidance</p>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-[#800000] flex items-center justify-center text-[#FFFAF5] text-3xl font-bold border-4 border-[#FFFAF5] shadow-lg">
            1
          </div>
          <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
            Start Here
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#800000] mb-2">Message Your Details</h3>
        <p className="text-gray-700">Share your name, birth date, time and place via WhatsApp</p>
      </div>

      {/* Arrow */}
      <div className="hidden md:block mx-4 lg:mx-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>
      <div className="md:hidden my-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#800000] rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="w-24 h-24 rounded-full bg-[#800000] flex items-center justify-center text-[#FFFAF5] text-3xl font-bold border-4 border-[#FFFAF5] shadow-lg mb-6">
          2
        </div>
        <h3 className="text-xl font-bold text-[#800000] mb-2">Complete Payment</h3>
        <p className="text-gray-700">Secure ₹99 payment through UPI or other methods</p>
      </div>

      {/* Arrow */}
      <div className="hidden md:block mx-4 lg:mx-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>
      <div className="md:hidden my-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#800000] rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-[#800000] flex items-center justify-center text-[#FFFAF5] text-3xl font-bold border-4 border-[#FFFAF5] shadow-lg">
            3
          </div>
          <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            Done!
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#800000] mb-2">Receive Your Call</h3>
        <p className="text-gray-700">Get your detailed consultation call within 24 hours</p>
      </div>
    </div>

    <div className="text-center mt-16">
      <a 
        href={`https://wa.me/+919153164444?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#800000] hover:bg-[#600000] text-[#FFFAF5] font-bold py-4 px-10 rounded-full text-lg shadow-lg inline-flex items-center transform hover:scale-105 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        START NOW - MESSAGE YOUR DETAILS
      </a>
    </div>
  </div>
</section>

        {/* Luxury Problems Solution Section */}
        <section className="py-20 bg-[#FFFAF5] relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#800000] text-[#FFFAF5] px-6 py-2 rounded-full mb-4">
                <p className="font-medium">Karmic Solutions</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800000]">
                Transform Your <span className="text-yellow-600">Life Challenges</span>
              </h2>
              <p className="text-xl mt-4 max-w-3xl mx-auto">During your consultation, we'll address these critical life aspects:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problemSolutions.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-[#800000] transform hover:-translate-y-2">
                  <div className="bg-[#800000]/10 p-4 rounded-lg inline-block mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#800000] mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Testimonials */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800000]">
                Client <span className="text-yellow-600">Success Stories</span>
              </h2>
              <p className="text-xl mt-4 max-w-3xl mx-auto">Hear from those who transformed their lives through our consultations</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#FFFAF5] p-8 rounded-xl shadow-lg border border-[#FFFAF5] hover:border-[#800000]/30 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center border-2 border-[#800000] mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-[#800000]">{testimonial.name.split(',')[0]}</p>
                      <p className="text-gray-600">{testimonial.name.split(',')[1]}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-6 text-lg">"{testimonial.quote}"</p>
                  <div className="border-t border-[#800000]/20 pt-4">
                    <p className="text-sm text-gray-500">Phone Consultation Experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury FAQ Section */}
        <section className="py-20 bg-[#FFFAF5] relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800000]">
                Your <span className="text-yellow-600">Questions</span> Answered
              </h2>
              <p className="text-xl mt-4 max-w-3xl mx-auto">Everything you need to know about our premium consultation</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#800000] mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Final CTA */}
        <section className="py-20 bg-gradient-to-b from-[#800000] to-[#600000] text-[#FFFAF5] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/astrology-pattern-light.png')] bg-repeat opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Ready to <span className="text-yellow-300">Transform Your Life</span> with Cosmic Guidance?
              </h2>
              <p className="text-xl mb-10">
                Normally <span className="line-through">₹999</span>, get your <span className="font-bold">premium kundali consultation</span> for just <span className="text-yellow-300 font-bold">₹99</span> today!
              </p>
              
              <div className="bg-white/10 p-10 rounded-xl backdrop-blur-sm border border-[#FFFAF5]/20 mb-10 text-left">
                <h3 className="text-2xl font-bold mb-8 text-center">In Your Consultation You'll Receive:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-[#800000] text-[#FFFAF5] p-2 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg">Detailed analysis of 12+ life aspects including love, career, health, and finances</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#800000] text-[#FFFAF5] p-2 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg">Personalized predictions and timing of important life events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#800000] text-[#FFFAF5] p-2 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg">Specific remedies and solutions for your challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#800000] text-[#FFFAF5] p-2 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg">25-30 minute private call with Astro Deepak Goutam</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/+919153164444?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FFFAF5] to-[#FFF5E0] hover:from-white hover:to-[#FFFAF5] text-[#800000] font-bold py-5 px-14 rounded-full text-xl shadow-2xl inline-flex items-center transform hover:scale-105 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                BOOK MY PHONE CONSULTATION NOW
              </a>
              
              <p className="mt-6 text-[#FFFAF5]/80">Limited slots available. Offer valid for first 50 bookings only.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExpertKundaliPage;