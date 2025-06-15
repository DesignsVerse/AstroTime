"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "What is AstroTime?",
      answer: "AstroTime is a comprehensive platform that provides accurate astronomical calculations, celestial event predictions, and detailed information about celestial bodies. It helps both amateur astronomers and professionals track and understand various astronomical phenomena."
    },
    {
      question: "How accurate are the astronomical calculations?",
      answer: "Our calculations are based on precise astronomical algorithms and NASA's JPL ephemeris data. We maintain high accuracy standards, typically within seconds for planetary positions and minutes for celestial events. Regular updates ensure our data remains current and reliable."
    },
    {
      question: "Can I use AstroTime for astrophotography planning?",
      answer: "Yes! AstroTime is an excellent tool for astrophotography planning. It provides information about moon phases, dark sky periods, and optimal viewing conditions for various celestial objects. You can plan your photography sessions based on precise astronomical data."
    },
    {
      question: "Does AstroTime provide real-time celestial data?",
      answer: "Absolutely! AstroTime offers real-time tracking of celestial bodies including planets, stars, and satellites. Our live data feed updates every minute to give you the most current astronomical information."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, AstroTime is available as a web application optimized for mobile browsers. We're developing native iOS and Android apps which will be released later this year with additional features like AR sky mapping."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Close FAQ when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openIndex !== null) {
        const ref = contentRefs.current[openIndex];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenIndex(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openIndex]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about AstroTime and its features
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              ref={el => contentRefs.current[index] = el}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-200"
            >
              <button
                className={`w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none transition-colors duration-200 ${openIndex === index ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-xl font-semibold text-gray-800">
                  {item.question}
                </span>
                <motion.span 
                  className="text-purple-600 text-2xl font-light ml-4"
                  initial={false}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1,
                      height: 'auto',
                      transition: { 
                        opacity: { duration: 0.3 },
                        height: { duration: 0.4 } 
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      height: 0,
                      transition: { 
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3 } 
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-gray-600">
                      <p className="leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;