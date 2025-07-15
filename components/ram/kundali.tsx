'use client';

import { kundliData, KundliDetails } from '@/data/kundliData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

interface KundliPageProps {
  params: { character: string };
}

export default function KundliPage({ params }: KundliPageProps) {
  const { character } = params;
  const data = kundliData[character.toLowerCase()];

  if (!data) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#56130D] to-[#800000] py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/95 rounded-xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center relative overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#FFD700]/20"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={data.image}
            alt={`${data.name} Kundli`}
            width={250}
            height={250}
            className="rounded-lg border-2 border-[#FFD700]/50 mb-6 shadow-md"
          />
        </motion.div>

        <h1 className="text-3xl font-bold text-[#800000] mb-3 font-serif">
          {data.name} Kundli
        </h1>
        <p className="text-gray-600 mb-6 text-center leading-relaxed italic">
          {data.description}
        </p>

        <div className="w-full mb-6 bg-[#FFD700]/10 rounded-lg p-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between mb-2"
          >
            <span className="font-semibold text-[#56130D]">Birth Place:</span>
            <span className="text-gray-700">{data.birthPlace}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-between mb-2"
          >
            <span className="font-semibold text-[#56130D]">Birth Time:</span>
            <span className="text-gray-700">{data.birthTime}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-between mb-2"
          >
            <span className="font-semibold text-[#56130D]">Birth Date:</span>
            <span className="text-gray-700">{data.birthDate}</span>
          </motion.div>
        </div>

        <div className="w-full">
          <span className="font-semibold text-[#56130D] block mb-3 text-lg">
            Special Traits:
          </span>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.specialTraits.map((trait: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              >
                {trait}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#FFD700] hover:bg-[#FFC000] text-[#800000] px-6 py-2 rounded-full font-bold text-sm shadow-md transition-all"
          onClick={() => window.history.back()}
        >
          Back to Ramayana
        </motion.button>
      </motion.div>
    </div>
  );
}