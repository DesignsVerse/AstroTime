'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe, Phone } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    title: "24/7 Availability",
    description: "Never miss a call with round-the-clock automated reception",
    icon: Clock,
    metric: "24/7",
    color: "#146EF5",
    bgColor: "#E6F0FF",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "Multiple Languages",
    description: "Communicate with patients in their preferred language",
    icon: Globe,
    metric: "14+",
    color: "#10B981",
    bgColor: "#D1FAE5",
    gradient: "from-emerald-400 to-emerald-600"
  },
  {
    title: "Zero Voicemails",
    description: "Every call is answered and handled professionally",
    icon: Phone,
    metric: "0",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    gradient: "from-amber-400 to-amber-600"
  }
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();

  // Floating background animation
  useEffect(() => {
    const animateBackground = async () => {
      while (true) {
        await controls.start({
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 0, -50, 0],
          transition: { duration: 30, ease: "linear" }
        });
      }
    };
    animateBackground();
  }, [controls]);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated floating gradient bubbles */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={controls}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-10 blur-3xl filter ${
              features[i % features.length].gradient.split(" ")[0]
            }`}
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundImage: `linear-gradient(to right, ${
                features[i % features.length].gradient
              })`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Glowing grid pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* Hover highlight effect */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20`}
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              <Card className="relative h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden group">
                {/* Animated border */}
                <div className="absolute inset-0 p-[1px] rounded-[inherit]">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                  />
                </div>

                <CardContent className="relative bg-white/95 p-6 rounded-[calc(0.5rem-1px)] h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-xl ${feature.bgColor} transition-all duration-300 group-hover:scale-110`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <feature.icon
                        className="h-6 w-6"
                        style={{ color: feature.color }}
                      />
                    </motion.div>
                    <div>
                      <motion.div
                        className="text-4xl font-bold mb-2"
                        style={{ color: feature.color }}
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.metric}
                      </motion.div>
                      <CardTitle className="text-xl text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                  <motion.p
                    className="mt-4 text-gray-600 flex-1"
                    initial={{ opacity: 0.9 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.9
                    }}
                  >
                    {feature.description}
                  </motion.p>
                  
                  {/* Animated button */}
                  <motion.div 
                    className="mt-6 self-start"
                    whileHover={{ x: 5 }}
                  >
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${feature.bgColor} text-${feature.color.replace('#', '')} transition-colors`}
                    >
                      Learn more →
                    </button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}