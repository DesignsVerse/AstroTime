"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaCalendarCheck,
  FaPhone,
  FaLanguage,
  FaShieldAlt,
} from "react-icons/fa";
import { GiSpaceship, GiSatelliteCommunication, GiProcessor } from "react-icons/gi";
import { BsStars, BsCpu, BsLightningCharge } from "react-icons/bs";

// Debounce utility function
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const solutions = [
  {
    title: "Appointment Scheduling & Patient Intake",
    description: "Automate new patient intake and bookings over the phone with AI that understands complex scheduling requirements.",
    videoSrc: "/Appointment.mp4",
  },
  {
    title: "Outbound Waitlist System",
    description: "Automatically call patients to fill last-minute cancellations and maintain a full schedule.",
    videoSrc: "/Waitlist.mp4",
  },
  {
    title: "Custom Workflow Automation",
    description: "Discover how our AI can be tailored to handle your clinic's unique processes and requirements.",
    videoSrc: "/Automation.mp4",
  },
];

export default function PremiumProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const isSolutionsInView = useInView(solutionsRef, { once: false, margin: "-100px" });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      ScrollTrigger.refresh();
    };
    
    const debouncedResize = debounce(checkMobile, 200);
    checkMobile();
    window.addEventListener("resize", debouncedResize);
    
    return () => {
      window.removeEventListener("resize", debouncedResize);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    const createParticles = () => {
      if (!particlesRef.current) return;

      particlesRef.current.innerHTML = "";
      const particleCount = isMobile ? 20 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full bg-[#1E3A8A]";

        gsap.set(particle, {
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.4 + 0.2,
          scale: 1,
        });

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    if (!isMobile) {
      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          end: () => `+=${containerRef.current?.offsetWidth || window.innerWidth * panels.length}`,
          markers: false,
        },
      });

      gsap.fromTo(".cascade-text", 
        { opacity: 1, y: 0 }, // Start visible
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".cascade-section",
            containerAnimation: scrollTween,
            start: "left 60%",
            toggleActions: "play none none none",
          }
        }
      );

      gsap.to(".rf-box, .test-box, .design-box", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".rf-box, .test-box, .design-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none none",
        },
      });
    } else {
      gsap.fromTo(".cascade-text", 
        { opacity: 1, y: 0 }, // Start visible
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".cascade-section",
            start: "top 60%",
            toggleActions: "play COLORSnone none none",
          }
        }
      );

      gsap.to(".rf-box, .test-box, .design-box", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".rf-box, .test-box, .design-box",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      gsap.globalTimeline.getChildren().forEach(animation => animation.kill());
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [isMobile, isLoaded]);

  const solutionsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const solutionsItem = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", damping: 15 } },
  };

  if (!isLoaded) return null;

  return (
    <div className="relative bg-white overflow-hidden">
      <div ref={particlesRef} className="fixed inset-0 z-0 pointer-events-none" />

      {isMobile ? (
        <div className="relative z-10 box-border">
          {/* Mobile Sections with reduced spacing */}
          <section className="min-h-[60vh] w-full py-8 px-4 sm:px-8 bg-white cascade-section">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <video className="w-full max-w-[80%] h-auto mx-auto rounded-xl shadow-lg" autoPlay loop muted playsInline>
                  <source src="/solution.mp4" type="video/mp4" />
                </video>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#111827]">
                <span className="text-[#1E3A8A]">AI-Powered</span> Clinic Solution
              </h1>
              <p className="text-sm sm:text-base text-[#111827] mb-6 leading-relaxed max-w-3xl mx-auto">
                Transform patient communication with Novoflow’s 24/7 AI receptionist, handling calls, scheduling, and waitlists in 14+ languages with EHR integration.
              </p>
              <div className="flex justify-center space-x-6 mt-6 opacity-80">
                <FaCalendarCheck className="text-xl text-[#1E3A8A]" />
                <FaPhone className="text-xl text-[#1E3A8A]" />
                <FaLanguage className="text-xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>

          <section className="min-h-[60vh] w-full py-8 px-4 sm:px-8 bg-white cascade-section rf-box">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <video className="w-full max-w-[80%] h-auto mx-auto rounded-xl shadow-lg" autoPlay loop muted playsInline>
                  <source src="/Appointment.mp4" type="video/mp4" />
                </video>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#111827]">
                <span className="text-[#1E3A8A]">Appointment</span> Scheduling
              </h1>
              <p className="text-sm sm:text-base text-[#111827] mb-6 leading-relaxed max-w-3xl mx-auto">
                Automate new patient intake and bookings over the phone with AI that understands complex scheduling requirements.
              </p>
              <div className="flex justify-center space-x-6 mt-6 opacity-80">
                <FaCalendarCheck className="text-xl text-[#1E3A8A]" />
                <FaPhone className="text-xl text-[#1E3A8A]" />
                <FaLanguage className="text-xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>

          <section className="min-h-[60vh] w-full py-8 px-4 sm:px-8 bg-white cascade-section test-box">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <video className="w-full max-w-[80%] h-auto mx-auto rounded-xl shadow-lg" autoPlay loop muted playsInline>
                  <source src="/Waitlist.mp4" type="video/mp4" />
                </video>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#111827]">
                <span className="text-[#1E3A8A]">Waitlist</span> Management
              </h1>
              <p className="text-sm sm:text-base text-[#111827] mb-6 leading-relaxed max-w-3xl mx-auto">
                Automatically call patients to fill last-minute cancellations and maintain a full schedule.
              </p>
              <div className="flex justify-center space-x-6 mt-6 opacity-80">
                <FaCalendarCheck className="text-xl text-[#1E3A8A]" />
                <FaPhone className="text-xl text-[#1E3A8A]" />
                <FaLanguage className="text-xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>

          <section className="min-h-[60vh] w-full py-8 px-4 sm:px-8 bg-white cascade-section design-box">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <video className="w-full max-w-[80%] h-auto mx-auto rounded-xl shadow-lg" autoPlay loop muted playsInline>
                  <source src="/Automation.mp4" type="video/mp4" />
                </video>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#111827]">
                <span className="text-[#1E3A8A]">Workflow</span> Automation
              </h1>
              <p className="text-sm sm:text-base text-[#111827] mb-6 leading-relaxed max-w-3xl mx-auto">
                Discover how our AI can be tailored to handle your clinic's unique processes and requirements.
              </p>
              <div className="flex justify-center space-x-6 mt-6 opacity-80">
                <FaCalendarCheck className="text-xl text-[#1E3A8A]" />
                <FaPhone className="text-xl text-[#1E3A8A]" />
                <FaLanguage className="text-xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div ref={containerRef} className="relative h-screen w-[400%] flex z-10 box-border">
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8 bg-white">
            <div className="w-full max-w-3xl mx-auto text-center bg-white backdrop-blur-md p-6 sm:p-12 rounded-2xl border border-[#1E3A8A]/30 shadow-xl hover:shadow-[#1E3A8A]/20 transition-shadow">
              <div className="mb-8">
                <video
                  className="w-full max-w-[30%] h-auto mx-auto rounded-xl shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/solution.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#111827]">
                <span className="text-[#1E3A8A]">AI-Powered</span> Clinic Solution
              </h1>
              <p className="cascade-text text-base sm:text-lg md:text-xl text-[#111827] mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                Transform patient communication with Novoflow’s 24/7 AI receptionist, handling calls, scheduling, and waitlists in 14+ languages with EHR integration.
              </p>
              <div className="flex justify-center space-x-8 mt-8 opacity-80">
                <FaCalendarCheck className="text-2xl text-[#1E3A8A]" />
                <FaPhone className="text-2xl text-[#1E3A8A]" />
                <FaLanguage className="text-2xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-2xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>

          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8 bg-white">
            <div className="w-full max-w-3xl mx-auto text-center bg-white backdrop-blur-md p-6 sm:p-12 rounded-2xl border border-[#1E3A8A]/30 shadow-xl hover:shadow-[#1E3A8A]/20 transition-shadow">
              <div className="mb-8">
                <video
                  className="w-full max-w-[30%] h-auto mx-auto rounded-xl shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/Appointment.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#111827]">
                <span className="text-[#1E3A8A]">Appointment</span> Scheduling
              </h1>
              <p className="cascade-text text-base sm:text-lg md:text-xl text-[#111827] mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                Automate new patient intake and bookings over the phone with AI that understands complex scheduling requirements.
              </p>
              <div className="flex justify-center space-x-8 mt-8 opacity-80">
                <FaCalendarCheck className="text-2xl text-[#1E3A8A]" />
                <FaPhone className="text-2xl text-[#1E3A8A]" />
                <FaLanguage className="text-2xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-2xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>

          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8 bg-white">
            <div className="w-full max-w-3xl mx-auto text-center bg-white backdrop-blur-md p-6 sm:p-12 rounded-2xl border border-[#1E3A8A]/30 shadow-xl hover:shadow-[#1E3A8A]/20 transition-shadow">
              <div className="mb-8">
                <video
                  className="w-full max-w-[30%] h-auto mx-auto rounded-xl shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/Waitlist.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#111827]">
                <span className="text-[#1E3A8A]">Waitlist</span> Management
              </h1>
              <p className="cascade-text text-base sm:text-lg md:text-xl text-[#111827] mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                Automatically call patients to fill last-minute cancellations and maintain a full schedule.
              </p>
              <div className="flex justify-center space-x-8 mt-8 opacity-80">
                <FaCalendarCheck className="text-2xl text-[#1E3A8A]" />
                <FaPhone className="text-2xl text-[#1E3A8A]" />
                <FaLanguage className="text-2xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-2xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>

          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8 bg-white">
            <div className="w-full max-w-3xl mx-auto text-center bg-white backdrop-blur-md p-6 sm:p-12 rounded-2xl border border-[#1E3A8A]/30 shadow-xl hover:shadow-[#1E3A8A]/20 transition-shadow">
              <div className="mb-8">
                <video
                  className="w-full max-w-[30%] h-auto mx-auto rounded-xl shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/Automation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#111827]">
                <span className="text-[#1E3A8A]">Workflow</span> Automation
              </h1>
              <p className="cascade-text text-base sm:text-lg md:text-xl text-[#111827] mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                Discover how our AI can be tailored to handle your clinic's unique processes and requirements.
              </p>
              <div className="flex justify-center space-x-8 mt-8 opacity-80">
                <FaCalendarCheck className="text-2xl text-[#1E3A8A]" />
                <FaPhone className="text-2xl text-[#1E3A8A]" />
                <FaLanguage className="text-2xl text-[#1E3A8A]" />
                <FaShieldAlt className="text-2xl text-[#1E3A8A]" />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}