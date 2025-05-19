"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { MobilePhoneDemo } from "../mobile";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 opacity-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 sm:opacity-30"
          style={{ zIndex: -20 }}
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ zIndex: -15 }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" style={{ zIndex: -15 }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-20  pb-16 sm:pt-32 sm:pb-24 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side content */}
          <div className="max-w-2xl text-left relative md:pl-6 lg:pl-10" style={{ zIndex: 10 }}>
            {/* Custom Badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6600]/10 to-[#FF8800]/10 border border-[#FF6600]/20 shadow-sm">
                <div className="w-4 h-4 mr-2 rounded bg-[#FF6600] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <span className="text-[#FF6600] text-sm sm:text-base font-medium">Backed by Y Combinator</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#0066AA]/10 to-[#00AAAA]/10 border border-[#0088AA]/20 shadow-sm">
                <div className="w-4 h-4 mr-2 rounded bg-[#0088AA] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 1L2 4.5V8.5C2 12.75 5.25 16.6 10 18C14.75 16.6 18 12.75 18 8.5V4.5L10 1ZM8.5 13.5L5 10L6.5 8.5L8.5 10.5L13.5 5.5L15 7L8.5 13.5Z" />
                  </svg>
                </div>
                <span className="text-[#0088AA] text-sm sm:text-base font-medium">HIPAA Compliant</span>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
            >
              The
              {" "}
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Receptionist
              </span>{" "}
              for Modern Medical Clinics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg leading-7 text-gray-600"
            >
              Transform patient communication with our HIPAA-compliant AI that handles calls, scheduling, and inquiries 24/7.
              Reduce no-shows by 40% and improve patient satisfaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6"
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link href="/demo" className="group flex items-center justify-center">
                  Book a Demo
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="text-gray-900 hover:text-blue-600 border-gray-300 hover:border-blue-300 bg-white/50 text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link href="/contact" className="group flex items-center justify-center">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Watch Video
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <p className="text-sm sm:text-base text-gray-500">Developed by researchers at</p>
              <div className="flex flex-wrap items-center gap-4 pt-2 ">
                <Image
                  src="/CMU.webp"
                  alt="Carnegie Mellon University"
                  width={100}
                  height={32}
                  className="w-20 sm:w-40 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/Emory.avif"
                  alt="Emory University"
                  width={160}
                  height={32}
                  className="w-24 sm:w-40 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/GeorgiaTech.avif"
                  alt="Georgia Tech"
                  width={160}
                  height={32}
                  className="w-25 sm:w-40 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Mobile Phone Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center md:justify-end relative md:mt-0 md:pr-6 lg:pr-10"
            style={{ zIndex: 10, transform: 'translateY(40px)' }}
          >
            <MobilePhoneDemo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}