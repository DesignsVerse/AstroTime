"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { FiPhone, FiGlobe, FiCalendar, FiDatabase, FiShield } from "react-icons/fi";
import Link from "next/link";

export default function Cards() {
  // Animation variants
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative z-10">
      {/* Main Card Container */}
      <div className="w-full bg-background/80 backdrop-blur-sm rounded-t-[7vw] md:rounded-t-[4vw] pt-3 pb-20 md:pb-[230px] relative border-b">
        <div className="w-[133px] h-[5px] bg-primary/15 rounded-lg mb-10 md:mb-[100px] mx-auto"></div>

        <div className="max-w-[1206px] px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          {/* Flex container - column on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 relative">
            {/* Advantages Content - full width on mobile */}
            <motion.div
              className="w-full lg:max-w-[606px] flex flex-col gap-10 lg:sticky lg:top-[80px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col gap-6 text-foreground bg-card/90 backdrop-blur-md p-6 rounded-xl border">
                <h2 className="text-xl font-bold text-primary">
                  Why Choose Novoflow?
                </h2>
                <p className="text-sm md:text-base">
                  Novoflow is transforming patient communication with AI-driven solutions for medical clinics. Founded in 2024 and backed by Y Combinator, we streamline operations with our 24/7 AI receptionist.
                </p>
                <Button variant="default" asChild className="w-full md:w-auto">
                  <Link href="mailto:founders@novoflow.io">Join Founding Partners</Link>
                </Button>
              </div>
            </motion.div>
            {/* Cards Wrapper - grid layout on mobile */}
            <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 lg:gap-[78px]">
              {/* First Column */}
              <div className="flex flex-col gap-6 md:gap-20">
                <motion.div
                  className="bg-card/90 backdrop-blur-md text-card-foreground rounded-xl flex flex-col gap-5 p-5 border h-full"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.div variants={iconVariants} className="rounded-xl">
                    <FiPhone size={40} className="text-primary" />
                  </motion.div>
                  <p className="text-sm md:text-base">
                    24/7 AI-powered call handling ensures no patient call goes unanswered, day or night.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-card/90 backdrop-blur-md text-card-foreground rounded-xl flex flex-col gap-5 p-5 border h-full"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.div variants={iconVariants} className="rounded-xl">
                    <FiGlobe size={40} className="text-primary" />
                  </motion.div>
                  <p className="text-sm md:text-base">
                    Supports 14+ languages for seamless communication with diverse patient communities.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-card/90 backdrop-blur-md text-card-foreground rounded-xl flex flex-col gap-5 p-5 border h-full"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.div variants={iconVariants} className="rounded-xl">
                    <FiCalendar size={40} className="text-primary" />
                  </motion.div>
                  <p className="text-sm md:text-base">
                    Automated scheduling and reminders reduce no-shows by 40% and streamline bookings.
                  </p>
                </motion.div>
              </div>

              {/* Second Column */}
              <div className="flex flex-col gap-6 md:gap-20">
                <motion.div
                  className="bg-card/90 backdrop-blur-md text-card-foreground rounded-xl flex flex-col gap-5 p-5 border h-full"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.div variants={iconVariants} className="rounded-xl">
                    <FiDatabase size={40} className="text-primary" />
                  </motion.div>
                  <p className="text-sm md:text-base">
                    Seamless integration with EHR systems like Epic, Cerner, and Allscripts for real-time updates.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-card/90 backdrop-blur-md text-card-foreground rounded-xl flex flex-col gap-5 p-5 border h-full"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.div variants={iconVariants} className="rounded-xl">
                    <FiShield size={40} className="text-primary" />
                  </motion.div>
                  <p className="text-sm md:text-base">
                    HIPAA-compliant security with analytics to optimize clinic communication strategies.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Video */}
        <div className="absolute inset-0 z-[-10] pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/dr.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}