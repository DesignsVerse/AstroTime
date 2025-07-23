"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaCloudMoon, FaCloudSun, FaStar, FaPrayingHands, FaCalendarAlt } from "react-icons/fa";
import { GiMoonBats, GiSunrise } from "react-icons/gi";

interface Lord {
  id: number;
  name: string;
  vedic_name: string;
}

interface PanchangItem {
  id?: number;
  name: string;
  start: string;
  end: string;
  lord?: Lord;
  paksha?: string;
  index?: number;
}

interface PanchangData {
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

const formatTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
};

const getCurrentActive = (items: PanchangItem[]): PanchangItem | undefined => {
  const now = new Date();
  return items.find(
    (item) => new Date(item.start) <= now && new Date(item.end) >= now
  );
};

const getLordColor = (lordName: string): string => {
  const colors: Record<string, string> = {
    Sun: "text-amber-500",
    Moon: "text-blue-300",
    Mars: "text-red-500",
    Mercury: "text-emerald-500",
    Jupiter: "text-orange-400",
    Venus: "text-purple-400",
    Saturn: "text-gray-500",
    Rahu: "text-rose-900",
    Ketu: "text-rose-900",
    Guru: "text-rose-900",
  };
  return colors[lordName] || "text-gray-700";
};

const Panchang: React.FC = () => {
  const [panchangData, setPanchangData] = useState<PanchangData | null>(null);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API fetch (replace with actual API call in production)
      const mockData: { data: PanchangData } = {
        data: {
          vaara: "Wednesday",
          nakshatra: [
            {
              id: 5,
              name: "Ardra",
              lord: { id: 101, name: "Rahu", vedic_name: "Rahu" },
              start: "2025-07-22T13:54:54+00:00",
              end: "2025-07-23T12:24:27+00:00",
            },
            {
              id: 6,
              name: "Punarvasu",
              lord: { id: 5, name: "Jupiter", vedic_name: "Guru" },
              start: "2025-07-23T12:24:28+00:00",
              end: "2025-07-24T11:13:47+00:00",
            },
          ],
          tithi: [
            {
              id: 45,
              index: 0,
              name: "Chaturdashi",
              paksha: "Krishna Paksha",
              start: "2025-07-22T23:10:10+00:00",
              end: "2025-07-23T20:59:15+00:00",
            },
            {
              id: 46,
              index: 0,
              name: "Amavasya",
              paksha: "Krishna Paksha",
              start: "2025-07-23T20:59:16+00:00",
              end: "2025-07-24T19:11:12+00:00",
            },
          ],
          karana: [
            {
              index: 0,
              id: 6,
              name: "Vishti / Bhadra",
              start: "2025-07-22T23:10:10+00:00",
              end: "2025-07-23T10:02:20+00:00",
            },
            {
              index: 0,
              id: 7,
              name: "Shakuni",
              start: "2025-07-23T10:02:21+00:00",
              end: "2025-07-23T20:59:15+00:00",
            },
            {
              index: 0,
              id: 8,
              name: "Chatushpada",
              start: "2025-07-23T20:59:16+00:00",
              end: "2025-07-24T08:01:53+00:00",
            },
          ],
          yoga: [
            {
              id: 12,
              name: "Vyaghata",
              start: "2025-07-22T10:02:00+00:00",
              end: "2025-07-23T07:03:55+00:00",
            },
            {
              id: 13,
              name: "Harshana",
              start: "2025-07-23T07:03:56+00:00",
              end: "2025-07-24T04:20:31+00:00",
            },
          ],
          sunrise: "2025-07-23T00:11:43+00:00",
          sunset: "2025-07-23T13:43:22+00:00",
          moonrise: "2025-07-23T23:13:33+00:00",
          moonset: "2025-07-23T12:55:07+00:00",
        },
      };
      setPanchangData(mockData.data);
    };

    fetchData();

    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  if (!panchangData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-amber-50 to-rose-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-rose-900"></div>
      </div>
    );
  }

  const activeNakshatra = getCurrentActive(panchangData.nakshatra);
  const activeTithi = getCurrentActive(panchangData.tithi);
  const activeKarana = getCurrentActive(panchangData.karana);
  const activeYoga = getCurrentActive(panchangData.yoga);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-100">
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-rose-900 tracking-tight">
            Vedic Panchang
          </h1>
          <p className="text-lg text-gray-600 font-serif">
            {currentTime.toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Current Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* Current Nakshatra */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100">
            <div className="flex items-center mb-4">
              <FaStar className="text-rose-900 mr-3 text-2xl" />
              <h3 className="font-semibold text-lg text-gray-800">Current Nakshatra</h3>
            </div>
            {activeNakshatra && (
              <div>
                <p className="text-2xl font-bold text-rose-900">{activeNakshatra.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(activeNakshatra.start)} - {formatTime(activeNakshatra.end)}
                </p>
                {activeNakshatra.lord && (
                  <p className="mt-2 text-sm">
                    Lord:{" "}
                    <span className={`font-medium ${getLordColor(activeNakshatra.lord.name)}`}>
                      {activeNakshatra.lord.vedic_name} ({activeNakshatra.lord.name})
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Current Tithi */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-rose-900 mr-3 text-2xl" />
              <h3 className="font-semibold text-lg text-gray-800">Current Tithi</h3>
            </div>
            {activeTithi && (
              <div>
                <p className="text-2xl font-bold text-rose-900">{activeTithi.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(activeTithi.start)} - {formatTime(activeTithi.end)}
                </p>
                {activeTithi.paksha && (
                  <p className="mt-2 text-sm">
                    Paksha: <span className="font-medium text-gray-700">{activeTithi.paksha}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Current Karana */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100">
            <div className="flex items-center mb-4">
              <FaPrayingHands className="text-rose-900 mr-3 text-2xl" />
              <h3 className="font-semibold text-lg text-gray-800">Current Karana</h3>
            </div>
            {activeKarana && (
              <div>
                <p className="text-2xl font-bold text-rose-900">{activeKarana.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(activeKarana.start)} - {formatTime(activeKarana.end)}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {activeKarana.name.includes("Bhadra") && (
                    <span className="text-red-500">(Inauspicious time)</span>
                  )}
                  {activeKarana.name.includes("Punarvasu") && (
                    <span className="text-emerald-600">(Auspicious time)</span>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Current Yoga */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100">
            <div className="flex items-center mb-4">
              <GiMoonBats className="text-rose-900 mr-3 text-2xl" />
              <h3 className="font-semibold text-lg text-gray-800">Current Yoga</h3>
            </div>
            {activeYoga && (
              <div>
                <p className="text-2xl font-bold text-rose-900">{activeYoga.name}</p>
                <p className="text-sm text-gray-600">
                  {formatTime(activeYoga.start)} - {formatTime(activeYoga.end)}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {activeYoga.name.includes("Harshana") && (
                    <span className="text-emerald-600">(Favorable for joy)</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Sunrise/Sunset */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-rose-900">
              <GiSunrise className="mr-3 text-3xl" />
              Sun & Moon Timings
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg">
                <div className="flex items-center">
                  <FaSun className="text-rose-900 mr-3" />
                  <span className="font-medium text-gray-800">Sunrise</span>
                </div>
                <span className="font-mono text-gray-700">{formatTime(panchangData.sunrise)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg">
                <div className="flex items-center">
                  <FaSun className="text-rose-900 mr-3" />
                  <span className="font-medium text-gray-800">Sunset</span>
                </div>
                <span className="font-mono text-gray-700">{formatTime(panchangData.sunset)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg">
                <div className="flex items-center">
                  <FaCloudMoon className="text-rose-900 mr-3" />
                  <span className="font-medium text-gray-800">Moonrise</span>
                </div>
                <span className="font-mono text-gray-700">{formatTime(panchangData.moonrise)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg">
                <div className="flex items-center">
                  <FaMoon className="text-rose-900 mr-3" />
                  <span className="font-medium text-gray-800">Moonset</span>
                </div>
                <span className="font-mono text-gray-700">{formatTime(panchangData.moonset)}</span>
              </div>
            </div>
          </motion.div>

          {/* Nakshatra */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-rose-900">
              <FaStar className="mr-3 text-3xl" />
              Nakshatras
            </h2>
            <div className="space-y-4">
              {panchangData.nakshatra.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-colors duration-200 ${
                    activeNakshatra?.name === item.name
                      ? "bg-rose-50 border-l-4 border-rose-900"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-rose-900 text-lg">{item.name}</p>
                      {item.lord && (
                        <p className="text-sm">
                          Lord: <span className={`font-medium ${getLordColor(item.lord.name)}`}>{item.lord.vedic_name}</span>
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-gray-600">
                        {formatTime(item.start)} - {formatTime(item.end)}
                      </p>
                      {activeNakshatra?.name === item.name && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs bg-rose-900 text-white rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tithi */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-rose-900">
              <FaCalendarAlt className="mr-3 text-3xl" />
              Tithi & Paksha
            </h2>
            <div className="space-y-4">
              {panchangData.tithi.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-colors duration-200 ${
                    activeTithi?.name === item.name
                      ? "bg-rose-50 border-l-4 border-rose-900"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-rose-900 text-lg">{item.name}</p>
                      {item.paksha && (
                        <p className="text-sm text-gray-700">{item.paksha}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-gray-600">
                        {formatTime(item.start)} - {formatTime(item.end)}
                      </p>
                      {activeTithi?.name === item.name && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs bg-rose-900 text-white rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Yoga & Karana */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100"
          >
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center text-rose-900">
                  <GiMoonBats className="mr-3 text-3xl" />
                  Yogas
                </h2>
                <div className="space-y-4">
                  {panchangData.yoga.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg transition-colors duration-200 ${
                        activeYoga?.name === item.name
                          ? "bg-rose-50 border-l-4 border-rose-900"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-rose-900 text-lg">{item.name}</p>
                        <div className="text-right">
                          <p className="text-sm font-mono text-gray-600">
                            {formatTime(item.start)} - {formatTime(item.end)}
                          </p>
                          {activeYoga?.name === item.name && (
                            <span className="inline-block mt-2 px-3 py-1 text-xs bg-rose-900 text-white rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center text-rose-900">
                  <FaPrayingHands className="mr-3 text-3xl" />
                  Karanas
                </h2>
                <div className="space-y-4">
                  {panchangData.karana.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg transition-colors duration-200 ${
                        activeKarana?.name === item.name
                          ? "bg-rose-50 border-l-4 border-rose-900"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-rose-900 text-lg">{item.name}</p>
                        <div className="text-right">
                          <p className="text-sm font-mono text-gray-600">
                            {formatTime(item.start)} - {formatTime(item.end)}
                          </p>
                          {activeKarana?.name === item.name && (
                            <span className="inline-block mt-2 px-3 py-1 text-xs bg-rose-900 text-white rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Astrological Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-rose-900">Astrological Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-rose-50 rounded-lg shadow-md border border-rose-100">
              <h3 className="font-semibold text-lg mb-3 text-rose-900">Nakshatra Guidance</h3>
              {activeNakshatra?.name === "Ardra" && (
                <p className="text-gray-700">
                  <span className="font-bold">Ardra (Rahu):</span> A time of transformation but can bring turbulence. Avoid important decisions. Good for research and deep thinking.
                </p>
              )}
              {activeNakshatra?.name === "Punarvasu" && (
                <p className="text-gray-700">
                  <span className="font-bold">Punarvasu (Jupiter):</span> Highly auspicious for new beginnings. Excellent for spiritual practices, education, and growth-oriented activities.
                </p>
              )}
            </div>
            <div className="p-6 bg-rose-50 rounded-lg shadow-md border border-rose-100">
              <h3 className="font-semibold text-lg mb-3 text-rose-900">Tithi Guidance</h3>
              {activeTithi?.name === "Chaturdashi" && (
                <p className="text-gray-700">
                  <span className="font-bold">Krishna Chaturdashi:</span> Good for completing tasks and removing obstacles. Avoid starting new ventures. Ideal for detox practices.
                </p>
              )}
              {activeTithi?.name === "Amavasya" && (
                <p className="text-gray-700">
                  <span className="font-bold">Amavasya:</span> Powerful for new beginnings after sunset. Excellent for meditation, ancestor worship, and setting intentions.
                </p>
              )}
            </div>
            <div className="p-6 bg-rose-50 rounded-lg shadow-md border border-rose-100">
              <h3 className="font-semibold text-lg mb-3 text-rose-900">Karana Guidance</h3>
              {activeKarana?.name.includes("Bhadra") && (
                <p className="text-gray-700">
                  <span className="font-bold">Vishti/Bhadra:</span> Traditionally inauspicious. Avoid weddings, investments, or important ceremonies during this period.
                </p>
              )}
              {activeKarana?.name === "Shakuni" && (
                <p className="text-gray-700">
                  <span className="font-bold">Shakuni:</span> Be cautious of deception. Verify information before acting. Good for strategic planning.
                </p>
              )}
              {activeKarana?.name === "Chatushpada" && (
                <p className="text-gray-700">
                  <span className="font-bold">Chatushpada:</span> Stable energy. Good for teamwork, animal-related activities, and building foundations.
                </p>
              )}
            </div>
            <div className="p-6 bg-rose-50 rounded-lg shadow-md border border-rose-100">
              <h3 className="font-semibold text-lg mb-3 text-rose-900">Yoga Guidance</h3>
              {activeYoga?.name === "Vyaghata" && (
                <p className="text-gray-700">
                  <span className="font-bold">Vyaghata:</span> May bring obstacles. Practice patience and avoid confrontations. Good for physical activities.
                </p>
              )}
              {activeYoga?.name === "Harshana" && (
                <p className="text-gray-700">
                  <span className="font-bold">Harshana:</span> Brings joy and enthusiasm. Excellent for social gatherings, creative work, and celebrations.
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center py-12 bg-gradient-to-r from-rose-900 to-amber-600 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Explore Your Vedic Journey</h2>
          <p className="text-lg text-amber-100 mb-6 max-w-2xl mx-auto">
            Discover personalized astrological insights and guidance tailored to your life’s unique path with our premium Vedic astrology services.
          </p>
          <a
            href="https://x.ai/api"
            className="inline-block px-8 py-4 bg-white text-rose-900 font-semibold rounded-full shadow-lg hover:bg-amber-100 transition-all duration-300"
          >
            Get Personalized Insights
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Panchang;
