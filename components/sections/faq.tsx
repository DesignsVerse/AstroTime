'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How does Novoflow prioritize urgent patient calls?",
    answer: "Our AI is designed to detect urgent situations and instantly escalate them to the appropriate staff or emergency services, ensuring rapid response while keeping callers informed."
  },
  {
    question: "Is Novoflow compliant with healthcare regulations?",
    answer: "Absolutely, Novoflow is fully HIPAA compliant, using end-to-end encryption and strict access controls to protect patient data and meet healthcare regulations."
  },
  {
    question: "Can Novoflow automate appointment scheduling?",
    answer: "Yes, our AI automates patient scheduling over the phone, handles complex booking needs, and sends text/email reminders to reduce no-shows by up to 40%."
  },
  {
    question: "What languages does the AI support?",
    answer: "Novoflow’s AI supports over 14 languages, including English, Spanish, Mandarin, French, and Arabic, with new languages added regularly to serve diverse patients."
  },
  {
    question: "How does Novoflow integrate with EHR systems?",
    answer: "Novoflow seamlessly integrates with major EHR systems like Epic, Cerner, and Allscripts, enabling real-time updates to patient records with minimal setup."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: index === 0 ? 0 : 30,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for accordion content
  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center mb-24"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-blue-600 ">
            Your Questions About Novoflow, Answered
          </h2>
          <p className="mt-6 text-xl leading-9 text-gray-700">
            Learn how Novoflow’s AI receptionist streamlines clinic operations
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-6"
            onValueChange={(value) => setActiveIndex(value ? parseInt(value.split('-')[1]) : null)}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
                >
                  <AccordionTrigger
                    className={`
                      px-8 py-6 text-left text-xl font-semibold text-gray-900
                      hover:bg-blue-50 hover:text-blue-700 transition-all duration-300
                      ${activeIndex === index ? 'bg-blue-50 text-blue-700' : ''}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="mr-4 text-blue-600 font-bold text-lg">
                        {index + 1}.
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <AccordionContent className="px-8 pb-6 pt-3 text-gray-600 text-lg leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}