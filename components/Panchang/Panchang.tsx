"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PanchangData {
  date: string;
  vaara: string;
  nakshatra: any[];
  tithi: any[];
  karana: any[];
  yoga: any[];
  sunrise: string;
  sunset: string;
  moonrise: string | null;
  moonset: string | null;
  planetary_positions: {
    sun: string;
    moon: string;
    mars: string;
    mercury: string;
    jupiter: string;
    venus: string;
    saturn: string;
    rahu: string;
    ketu: string;
  };
  auspicious_period: any[];
  inauspicious_period: any[];
  ritu: string;
  day_duration: string;
  night_duration: string;
}

const formatTime = (dateString: string) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  const roundedDate = new Date(Math.round(date.getTime() / 60000) * 60000);
  return roundedDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).toUpperCase();
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const mapProkeralaToLocalFormat = (data: any) => {
  return {
    date: formatDate(new Date(data.date)),
    vaara: data.weekday,
    nakshatra: data.nakshatra.details ? [data.nakshatra.details] : [],
    tithi: data.tithi.details ? [data.tithi.details] : [],
    karana: data.karana.details || [],
    yoga: data.yoga.details ? [data.yoga.details] : [],
    sunrise: data.sunrise.time,
    sunset: data.sunset.time,
    moonrise: data.moonrise?.time || null,
    moonset: data.moonset?.time || null,
    planetary_positions: {
      sun: data.planet_positions?.sun?.sign,
      moon: data.planet_positions?.moon?.sign,
      mars: data.planet_positions?.mars?.sign,
      mercury: data.planet_positions?.mercury?.sign,
      jupiter: data.planet_positions?.jupiter?.sign,
      venus: data.planet_positions?.venus?.sign,
      saturn: data.planet_positions?.saturn?.sign,
      rahu: data.planet_positions?.rahu?.sign,
      ketu: data.planet_positions?.ketu?.sign,
    },
    auspicious_period: data.auspicious_period || [],
    inauspicious_period: data.inauspicious_period || [],
    ritu: data.ritu,
    day_duration: data.day_duration,
    night_duration: data.night_duration,
  };
};



const PanchangPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [city] = useState('Delhi');
  const [isLoading, setIsLoading] = useState(false);
  const [panchangData, setPanchangData] = useState<PanchangData | null>(null);
  const fetchPanchangData = async () => {
    setIsLoading(true);
    try {
      const datetime = selectedDate.toISOString(); // includes full timestamp
      const response = await fetch(`/api/panchang?datetime=${encodeURIComponent(datetime)}&coordinates=28.6139,77.2090`);
      const raw = await response.json();
      const formatted = mapProkeralaToLocalFormat(raw);
      setPanchangData(formatted);
    } catch (err) {
      console.error("Failed to fetch Panchang data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // const fetchPanchangData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const token = await getAccessToken();
  //     const formattedDate = selectedDate.toISOString().split("T")[0];

  //     const response = await fetch(
  //       `https://api.prokerala.com/v2/astrology/panchang?date=${formattedDate}&timezone=Asia/Kolkata&ayanamsa=1&coordinates=28.6139,77.2090`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

      const raw = await response.json();
      const formatted = mapProkeralaToLocalFormat(raw.data);
      setPanchangData(formatted);
    } catch (err) {
      console.error("Failed to fetch Panchang data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPanchangData();
  }, [selectedDate, city]);

  if (isLoading || !panchangData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="h-12 w-12 border-t-4 border-b-4 border-red-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Panchang for {panchangData.date}</h1>
      <p>Ritu: {panchangData.ritu}</p>
      <p>Sunrise: {formatTime(panchangData.sunrise)}</p>
      <p>Sunset: {formatTime(panchangData.sunset)}</p>
      {/* <p>Moonrise: {formatTime(panchangData.moonrise)}</p>
      <p>Moonset: {formatTime(panchangData.moonset)}</p> */}

      <h2 className="text-xl mt-6 font-semibold">Nakshatra</h2>
      {panchangData.nakshatra.map((item, index) => (
        <div key={index} className="mb-2">
          <p>Name: {item.name}</p>
          <p>Lord: {item.lord?.vedic_name}</p>
          <p>Time: {formatTime(item.start)} - {formatTime(item.end)}</p>
        </div>
      ))}

      <h2 className="text-xl mt-6 font-semibold">Tithi</h2>
      {panchangData.tithi.map((item, index) => (
        <div key={index} className="mb-2">
          <p>Name: {item.name}</p>
          <p>Paksha: {item.paksha}</p>
          <p>Time: {formatTime(item.start)} - {formatTime(item.end)}</p>
        </div>
      ))}
    </div>
  );
};

export default PanchangPage;
