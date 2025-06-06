'use client'; // This component uses client-side features like animations

import React, { useEffect } from 'react';
import Head from 'next/head';

const AboutAstrologer = () => {
  // This effect is to ensure animations work properly in Next.js
  useEffect(() => {
    // You can add any client-side initialization here if needed
  }, []);

  return (
    <>
      <Head>
        <title>Astrologer Section</title>
      </Head>
      
      <div className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        {/* Background Stars */}
        <div className="star" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="star" style={{ top: '20%', right: '10%', animationDelay: '1s' }}></div>
        <div className="star" style={{ bottom: '15%', left: '25%', animationDelay: '0.5s' }}></div>
        <div className="star" style={{ top: '30%', left: '80%', animationDelay: '1.5s' }}></div>
        <div className="star" style={{ bottom: '25%', right: '20%', animationDelay: '2s' }}></div>

        <section className="max-w-6xl mx-auto p-8 md:p-16 relative">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-[#120B41] tracking-wide">
              Meet & Talk With Our <br />
              <span className="text-5xl md:text-6xl font-bold text-[#F88D72] inline-block typewriter">Astrologer</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="relative scale-in">
              <div className="absolute -inset-6 border-2 border-dashed border-[#F88D72] rounded-full orbit-path"></div>
              <img 
                src="/astrologer-image.jpg" 
                alt="Astrologer" 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-xl border-4 border-[#F88D72]/20"
              />
            </div>
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-[#120B41] mb-8 leading-tight fade-in" style={{ animationDelay: '0.3s' }}>
                Every Problem Have A Solution Coco
              </h2>
              <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed fade-in" style={{ animationDelay: '0.6s' }}>
                Lectus magna fringilla urna porttitor rhoncus dolor purus non. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Tincidunt nunc pulvinar sapien et ligula ullamcorper.
              </p>
              <div className="mb-8 fade-in" style={{ animationDelay: '0.9s' }}>
                <h3 className="text-3xl font-semibold text-[#120B41]">Holiya Zaikai</h3>
                <p className="text-gray-500 text-lg">Writer, Numerologist, Palmist</p>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-6 mb-10 fade-in" style={{ animationDelay: '1.2s' }}>
                <span className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#F88D72] text-[#F88D72] font-bold text-2xl pulse bg-[#F88D72]/10">25</span>
                <span className="text-gray-600 text-lg">Years Experience</span>
              </div>
              <div className="flex justify-center md:justify-start gap-6 fade-in" style={{ animationDelay: '1.5s' }}>
                <button className="bg-gradient-to-r from-[#F88D72] to-[#FF5733] text-white px-10 py-5 rounded-full font-medium text-xl hover:bg-gradient-to-r hover:from-[#F88D72]/90 hover:to-[#FF5733]/90 transition-all duration-300 glow-hover transform">Contact Us</button>
                <button className="bg-gradient-to-r from-[#F88D72] to-[#FF5733] text-white px-10 py-5 rounded-full font-medium text-xl hover:bg-gradient-to-r hover:from-[#F88D72]/90 hover:to-[#FF5733]/90 transition-all duration-300 glow-hover transform">Let's Chat</button>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#F88D72]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F88D72]/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* CSS styles */}
        <style jsx global>{`
          .orbit-path {
            animation: rotate 20s linear infinite;
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .star {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #F88D72;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            opacity: 0.7;
            animation: particle 5s infinite ease-in-out;
          }
          @keyframes particle {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.7; }
          }
          .fade-in {
            animation: fadeIn 1.5s ease-in-out forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .scale-in {
            animation: scaleIn 1s ease-out forwards;
          }
          @keyframes scaleIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .pulse {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .glow-hover:hover {
            box-shadow: 0 0 20px rgba(248, 141, 114, 0.5);
            transform: translateY(-2px);
          }
          .typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3s steps(40, end) forwards;
          }
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </>
  );
};

export default AboutAstrologer;