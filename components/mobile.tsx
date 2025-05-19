"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Play, Pause, Volume2, ChevronUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function MobilePhoneDemo() {
  const [callState, setCallState] = useState<"incoming" | "connected" | "playing" | "ended">("incoming");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const totalDuration = 12; // seconds
  const progressInterval = useRef<NodeJS.Timeout>();
  const constraintsRef = useRef(null);

  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [1, 0.8]);
  const scale = useTransform(y, [0, 100], [1, 0.95]);

  const handleAnswerCall = () => {
    setCallState("connected");
  };

  const handlePlayDemo = () => {
    setCallState("playing");
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= totalDuration) {
            clearInterval(progressInterval.current);
            setIsPlaying(false);
            setCallState("ended");
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(progressInterval.current);
    }

    return () => clearInterval(progressInterval.current);
  }, [isPlaying]);

  return (
    <div className="relative mt-10 flex items-center justify-center">
      {/* Phone reflection effect */}
      <div className="absolute inset-0 rounded-[60px] opacity-20 pointer-events-none" 
           style={{
             background: "radial-gradient(circle at 50% 0%, rgba(20, 110, 245, 0.4), transparent 70%)",
             filter: "blur(20px)",
             transform: "scale(1.1) translateY(20px)"
           }} />

      {/* Phone container */}
      <div
        ref={constraintsRef}
        className="relative mx-auto w-[360px] h-[700px] rounded-[46px] border-[14px] border-gray-900 bg-gray-950 p-4 shadow-2xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0a0a0a 0%, #111 100%)",
          boxShadow: `
            inset 0 0 0 1px rgba(255, 255, 255, 0.03),
            0 30px 60px -20px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        {/* Screen reflection effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%),
              radial-gradient(circle at 70% 20%, rgba(20, 110, 245, 0.08), transparent 70%)
            `,
          }}
        />

        {/* Dynamic notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-7 bg-black rounded-b-xl z-10 flex justify-center">
          <div className="w-20 h-5 bg-gray-900 rounded-b-md flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-800 rounded-full" />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex justify-between px-6 pt-3 text-xs text-white/90 font-medium">
          <span>10:30</span>
          {callState === "playing" && (
            <span className="font-mono tracking-tight text-blue-400">{formatTime(progress)}</span>
          )}
        </div>

        {/* Screen content */}
        <div className="mt-3 flex h-[86%] flex-col items-center justify-center text-white relative overflow-hidden">
          <AnimatePresence mode="wait">
            {callState === "incoming" && (
              <motion.div
                key="incoming"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-between h-full w-full px-4"
                style={{
                  background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(20,20,25,1) 100%)"
                }}
              >
                <div className="flex flex-col items-center mt-12">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0px rgba(20, 110, 245, 0)",
                        "0 0 0 15px rgba(20, 110, 245, 0.15)",
                        "0 0 0 0px rgba(20, 110, 245, 0)",
                      ],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 border border-gray-800 shadow-xl"
                  >
                    <div className="h-24 w-24 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-blue-400">
                        <path
                          d="M12 4L4 8V16L12 20L20 16V8L12 4Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12L9.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 10L14 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                    Novoflow
                  </h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-xl text-blue-300 font-medium"
                  >
                    Incoming call...
                  </motion.p>
                </div>

                <motion.div
                  className="relative h-full w-full flex items-end justify-center pb-14"
                  drag="y"
                  dragConstraints={{ top: -20, bottom: 0 }}
                  dragElastic={0.2}
                  dragPropagation={false}
                  onDrag={(_, info) => {
                    const progress = Math.min(Math.max(info.offset.y / -100, 0), 1);
                    setSwipeProgress(progress);
                  }}
                  onDragEnd={(_, info) => {
                    if (info.offset.y < -80) {
                      handleAnswerCall();
                    }
                    setSwipeProgress(0);
                  }}
                  style={{ y, opacity, scale }}
                >
                  <motion.button
                    style={{
                      backgroundColor: `rgba(34, 197, 94, ${0.8 + swipeProgress * 0.2})`,
                      scale: 1 + swipeProgress * 0.15,
                      boxShadow: `0 ${swipeProgress * 15}px ${swipeProgress * 30}px -10px rgba(34, 197, 94, ${
                        swipeProgress * 0.6
                      })`,
                    }}
                    className={cn(
                      "flex items-center justify-center rounded-full p-6 text-white shadow-2xl border border-green-400/30",
                      swipeProgress > 0.7 ? "bg-green-500" : "bg-green-600",
                      "transition-all duration-300"
                    )}
                  >
                    <Phone className="h-10 w-10 text-white" />
                  </motion.button>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 text-lg text-white/90 font-medium"
                  >
                    Swipe up to answer
                  </motion.p>
                </motion.div>
              </motion.div>
            )}

            {callState === "connected" && (
              <motion.div
                key="connected"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full w-full px-4"
                style={{
                  background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(20,20,25,1) 100%)"
                }}
              >
                <div className="mb-10 text-center">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mx-auto mb-2 text-sm text-blue-400 tracking-wider font-semibold"
                  >
                    CONNECTED
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 120, delay: 0.4 }}
                    className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 border border-gray-800 shadow-xl"
                  >
                    <div className="h-24 w-24 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-blue-400">
                        <path
                          d="M12 4L4 8V16L12 20L20 16V8L12 4Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12L9.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 10L14 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
                  >
                    Novoflow
                  </motion.h2>
                </div>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handlePlayDemo}
                  className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-12 py-6 text-white shadow-xl hover:shadow-blue-500/40 transition-all text-xl border border-blue-500/30"
                >
                  <Play className="h-7 w-7" fill="white" />
                </motion.button>
              </motion.div>
            )}

            {callState === "playing" && (
              <motion.div
                key="playing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full w-full px-6"
                style={{
                  background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(20,20,25,1) 100%)"
                }}
              >
                <div className="mb-10 text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 border border-gray-800 shadow-xl"
                  >
                    <div className="h-24 w-24 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-blue-400">
                        <path
                          d="M12 4L4 8V16L12 20L20 16V8L12 4Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12L9.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 10L14 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                    Novoflow
                  </h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-xl text-blue-300 font-medium"
                  >
                    Playing demo message
                  </motion.p>
                </div>

                <div className="w-full max-w-[300px]">
                  <div className="relative mb-8">
                    <div className="absolute -top-6 left-0 right-0 flex justify-between text-sm text-blue-300 font-mono">
                      <span>0:00</span>
                      <span>{formatTime(totalDuration)}</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-800 overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 relative"
                        style={{ width: `${(progress / totalDuration) * 100}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white shadow-md border border-blue-200"></div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.88 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white shadow-xl hover:shadow-blue-500/50 transition-all border border-blue-500/30"
                    >
                      {isPlaying ? (
                        <Pause className="h-9 w-9" fill="white" />
                      ) : (
                        <Play className="h-9 w-9 pl-0.5" fill="white" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {callState === "ended" && (
              <motion.div
                key="ended"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full w-full px-6"
                style={{
                  background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(20,20,25,1) 100%)"
                }}
              >
                <div className="mb-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 120 }}
                    className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 border border-gray-800 shadow-xl"
                  >
                    <div className="h-24 w-24 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-blue-400">
                        <path
                          d="M12 4L4 8V16L12 20L20 16V8L12 4Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12L9.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 10L14 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                    Novoflow
                  </h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-xl text-blue-300 font-medium"
                  >
                    Ready to transform your clinic?
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full max-w-[300px]"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600/90 hover:to-blue-700/90 text-white py-8 text-xl shadow-xl hover:shadow-blue-500/40 transition-all border border-blue-500/30"
                  >
                    <Link href="/demo">Book a Demo</Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/4 h-1 rounded-full bg-white/50" />
      </div>
    </div>
  );
}