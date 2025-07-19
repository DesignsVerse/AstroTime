"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMoon, FaSun, FaStar, FaBookOpen, FaCalculator } from 'react-icons/fa';
import { GiCrystalBall, GiThreeKeys } from 'react-icons/gi';
import { TbZodiacAries, TbZodiacTaurus } from 'react-icons/tb';

const PanchangNumerologyPage = () => {
  const [activeTab, setActiveTab] = useState('panchang');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [city, setCity] = useState('Delhi');
  
  // Panchang Data
  const panchangData = {
    tithi: "Shukla Paksha Dwitiya",
    nakshatra: "Rohini",
    yoga: "Siddha",
    karana: "Bava",
    sunrise: "6:12 AM",
    sunset: "6:45 PM",
    moonPhase: "Waxing Crescent"
  };

  // Numerology Data
  const numerologyData = {
    lifePath: 7,
    destiny: 3,
    dailyNumber: 5,
    prediction: "Today's number 5 brings a day of change and adventurous activities for you."
  };

  // Zodiac Signs
  const zodiacSigns = [
    { name: "मेष", icon: <TbZodiacAries />, date: "Mar 21 - Apr 19" },
    { name: "वृषभ", icon: <TbZodiacTaurus />, date: "Apr 20 - May 20" },
    // Add all 12 signs...
  ];

  return (
    <div className="min-h-screen pt-14 bg-gradient-to-b from-[#F9F5F0] to-[#F0E6D9] text-[#5a0808] font-serif">
      {/* Header */}
      <header className="bg-[#8b1e1e] text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <GiThreeKeys className="text-yellow-400" /> 
            The Game of Numbers - Panchang & Numerology
          </h1>
          <p className="mt-2 text-yellow-100">A blend of daily astrology and numerology</p>
        </div>
      </header>

      {/* Date Picker */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-2xl text-[#8b1e1e]" />
            <input 
              type="date" 
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="border border-[#8b1e1e]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b1e1e]/50"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <select 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-[#8b1e1e]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b1e1e]/50"
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('panchang')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'panchang' ? 'bg-[#8b1e1e] text-white' : 'bg-[#F0E6D9] text-[#5a0808]'}`}
            >
              <FaSun /> Panchang
            </button>
            <button 
              onClick={() => setActiveTab('numerology')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'numerology' ? 'bg-[#8b1e1e] text-white' : 'bg-[#F0E6D9] text-[#5a0808]'}`}
            >
              <GiCrystalBall /> Numerology
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {activeTab === 'panchang' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Panchang Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden col-span-2">
              <div className="bg-[#5a0808] text-white p-4 flex items-center gap-3">
                <FaCalendarAlt className="text-xl" />
                <h2 className="text-xl font-bold">Today's Panchang - {selectedDate.toLocaleDateString('en-IN')}</h2>
              </div>
              
              <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl text-[#8b1e1e] mb-2">🌓</div>
                  <h3 className="font-bold mb-1">Tithi</h3>
                  <p>{panchangData.tithi}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl text-[#8b1e1e] mb-2">⭐</div>
                  <h3 className="font-bold mb-1">Nakshatra</h3>
                  <p>{panchangData.nakshatra}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl text-[#8b1e1e] mb-2">🧘</div>
                  <h3 className="font-bold mb-1">Yoga</h3>
                  <p>{panchangData.yoga}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl text-[#8b1e1e] mb-2">⏳</div>
                  <h3 className="font-bold mb-1">Karana</h3>
                  <p>{panchangData.karana}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl text-[#8b1e1e] mb-2">🌅</div>
                  <h3 className="font-bold mb-1">Sunrise</h3>
                  <p>{panchangData.sunrise}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl text-[#8b1e1e] mb-2">🌇</div>
                  <h3 className="font-bold mb-1">Sunset</h3>
                  <p>{panchangData.sunset}</p>
                </div>
              </div>
            </div>

            {/* Zodiac/Rashi Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#5a0808] text-white p-4 flex items-center gap-3">
                <FaStar className="text-xl" />
                <h2 className="text-xl font-bold">Zodiac</h2>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-3 gap-3">
                  {zodiacSigns.slice(0, 6).map((sign, index) => (
                    <div key={index} className="text-center p-2 hover:bg-[#F0E6D9] rounded-lg cursor-pointer transition">
                      <div className="text-3xl text-[#8b1e1e] mb-1">{sign.icon}</div>
                      <h3 className="font-medium">{sign.name === "मेष" ? "Aries" : sign.name === "वृषभ" ? "Taurus" : sign.name}</h3>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-[#8b1e1e] text-white py-2 rounded-lg hover:bg-[#5a0808] transition">
                  Read Full Horoscope
                </button>
              </div>
            </div>

            {/* Auspicious Timings */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden col-span-2">
              <div className="bg-[#5a0808] text-white p-4">
                <h2 className="text-xl font-bold">Auspicious Timings</h2>
              </div>
              
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Abhijit Muhurat", time: "12:00 - 12:45 PM" },
                  { name: "Brahma Muhurat", time: "4:30 - 5:15 AM" },
                  { name: "Godhuli Muhurat", time: "6:30 - 7:00 PM" },
                  { name: "Vijay Muhurat", time: "2:30 - 3:15 PM" }
                ].map((item, index) => (
                  <div key={index} className="border border-[#8b1e1e]/20 rounded-lg p-3 hover:shadow-md transition">
                    <h3 className="font-bold text-[#5a0808]">{item.name}</h3>
                    <p className="text-sm">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Moon Phase */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#5a0808] text-white p-4 flex items-center gap-3">
                <FaMoon className="text-xl" />
                <h2 className="text-xl font-bold">Moon</h2>
              </div>
              
              <div className="p-6 text-center">
                <div className="text-8xl mb-4">🌖</div>
                <h3 className="font-bold text-lg">{panchangData.moonPhase}</h3>
                <p className="mt-2">Moon in Taurus</p>
              </div>
            </div>

          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Daily Numerology */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden col-span-2">
              <div className="bg-[#5a0808] text-white p-4 flex items-center gap-3">
                <GiCrystalBall className="text-xl" />
                <h2 className="text-xl font-bold">Today's Numerology</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#8b1e1e]">{numerologyData.dailyNumber}</div>
                    <p>Daily Number</p>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-lg">Today's number 5 brings a day of change and adventurous activities for you.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <div className="border border-[#8b1e1e]/20 rounded-lg p-4 text-center hover:shadow-md transition">
                    <div className="text-3xl font-bold text-[#8b1e1e] mb-2">{numerologyData.lifePath}</div>
                    <h3 className="font-bold">Life Path</h3>
                    <p className="text-sm">From Date of Birth</p>
                  </div>
                  
                  <div className="border border-[#8b1e1e]/20 rounded-lg p-4 text-center hover:shadow-md transition">
                    <div className="text-3xl font-bold text-[#8b1e1e] mb-2">{numerologyData.destiny}</div>
                    <h3 className="font-bold">Destiny Number</h3>
                    <p className="text-sm">From Name</p>
                  </div>
                  
                  <div className="border border-[#8b1e1e]/20 rounded-lg p-4 text-center hover:shadow-md transition">
                    <div className="text-3xl font-bold text-[#8b1e1e] mb-2">9</div>
                    <h3 className="font-bold">Soul Number</h3>
                    <p className="text-sm">Soul's Number</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Numerology Calculator */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#5a0808] text-white p-4 flex items-center gap-3">
                <FaCalculator className="text-xl" />
                <h2 className="text-xl font-bold">Numerology Calculator</h2>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Date of Birth</label>
                  <input 
                    type="date" 
                    className="w-full border border-[#8b1e1e]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b1e1e]/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Full Name (Hindi/English)</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full border border-[#8b1e1e]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b1e1e]/50"
                  />
                </div>
                
                <button className="w-full bg-[#8b1e1e] text-white py-2 rounded-lg hover:bg-[#5a0808] transition flex items-center justify-center gap-2">
                  <GiCrystalBall /> Know Your Number
                </button>
              </div>
            </div>

            {/* Numerology Guide */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden col-span-2">
              <div className="bg-[#5a0808] text-white p-4 flex items-center gap-3">
                <FaBookOpen className="text-xl" />
                <h2 className="text-xl font-bold">Numerology Guide</h2>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Life Path Number", desc: "Obtained from date of birth, shows the purpose of life" },
                  { title: "Destiny Number", desc: "Numbers from name, show fate and talent" },
                  { title: "Soul Urge Number", desc: "Reveals your deep desires and aspirations" },
                  { title: "Karmic Number", desc: "Shows past life's karma and lessons" }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-[#8b1e1e] pl-4 py-1">
                    <h3 className="font-bold text-lg text-[#5a0808]">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lucky Numbers */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#5a0808] text-white p-4">
                <h2 className="text-xl font-bold">Today's Lucky Numbers</h2>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {[3, 7, 11, 22, 5].map((num, index) => (
                    <div key={index} className="w-12 h-12 rounded-full bg-[#8b1e1e] text-white flex items-center justify-center text-xl font-bold shadow-md">
                      {num}
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 text-center text-sm">
                  These numbers are especially lucky for you today. Give them priority in lottery, investment, or important decisions.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#5a0808] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} The Game of Numbers - All Rights Reserved</p>
          <p className="mt-2 text-sm text-white/80">Suggestions based on astrology and numerology</p>
        </div>
      </footer>
    </div>
  );
};

export default PanchangNumerologyPage;