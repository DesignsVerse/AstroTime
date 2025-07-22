"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PanchangItem {
  name: string;
  start: string;
  end: string;
}

interface PanchangData {
  date: string;
  vaara: string;
  nakshatra: PanchangItem[];
  tithi: PanchangItem[];
  karana: PanchangItem[];
  yoga: PanchangItem[];
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Panchang = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [city] = useState("Delhi");
  const [panchangData, setPanchangData] = useState<PanchangData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPanchangData = async () => {
    setIsLoading(true);

    const cacheKey = `${city}-${selectedDate.toDateString()}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      setPanchangData(JSON.parse(cachedData));
      setIsLoading(false);
      return;
    }

    try {
      const datetime = selectedDate.toISOString(); // full ISO format with time
      const response = await fetch(
        `/api/panchang?datetime=${encodeURIComponent(datetime)}&coordinates=28.6139,77.2090`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Panchang data");
      }

      const data = await response.json();
      setPanchangData(data);
      localStorage.setItem(cacheKey, JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching Panchang:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPanchangData();
  }, [selectedDate]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">📅 Daily Panchang</h1>

      {isLoading && <p className="text-center text-gray-600">Loading...</p>}

      {!isLoading && panchangData && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Basic Info */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">📌 Date: {panchangData.date}</h2>
            <p className="text-gray-700">🕉️ Vaara (Weekday): {panchangData.vaara}</p>
            <p className="text-gray-700">🌄 Sunrise: {formatTime(panchangData.sunrise)}</p>
            <p className="text-gray-700">🌇 Sunset: {formatTime(panchangData.sunset)}</p>
            <p className="text-gray-700">🌙 Moonrise: {formatTime(panchangData.moonrise)}</p>
            <p className="text-gray-700">🌘 Moonset: {formatTime(panchangData.moonset)}</p>
          </div>

          {/* Tithi */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">📿 Tithi</h2>
            {panchangData.tithi?.map((item, index) => (
              <div key={index} className="mb-1">
                <p className="text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(item.start)} ➡ {formatTime(item.end)}
                </p>
              </div>
            ))}
          </div>

          {/* Nakshatra */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">🌌 Nakshatra</h2>
            {panchangData.nakshatra?.map((item, index) => (
              <div key={index} className="mb-1">
                <p className="text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(item.start)} ➡ {formatTime(item.end)}
                </p>
              </div>
            ))}
          </div>

          {/* Yoga */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">🧘 Yoga</h2>
            {panchangData.yoga?.map((item, index) => (
              <div key={index} className="mb-1">
                <p className="text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(item.start)} ➡ {formatTime(item.end)}
                </p>
              </div>
            ))}
          </div>

          {/* Karana */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">📍 Karana</h2>
            {panchangData.karana?.map((item, index) => (
              <div key={index} className="mb-1">
                <p className="text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(item.start)} ➡ {formatTime(item.end)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Panchang;
