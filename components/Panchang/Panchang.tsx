// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { FaCalendarAlt, FaMoon, FaSun, FaStar, FaLocationArrow } from 'react-icons/fa';
// import { MdOutlineTimer, MdOutlineDateRange } from 'react-icons/md';
// import { GiSunrise, GiSunset, GiMoonBats } from 'react-icons/gi';
// import { BsWind } from 'react-icons/bs';

// const PanchangPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [city, setCity] = useState('Delhi');
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState('today');
//   const [panchangTab, setPanchangTab] = useState('nakshatra');

//   // Format time to 12-hour format with AM/PM
//   const formatTime = (dateString: string) => {
//     if (!dateString) return 'N/A';
//     const date = new Date(dateString);
//     // Round to the nearest minute
//     const roundedDate = new Date(Math.round(date.getTime() / 60000) * 60000);
//     return roundedDate.toLocaleTimeString('en-IN', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     }).toUpperCase();
//   };

//   // Format date to readable format
//   const formatDate = (date: Date) => {
//     return date.toLocaleDateString('en-IN', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   // Mock API call with loading state
//   const fetchPanchangData = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 800));
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchPanchangData();
//   }, [selectedDate, city]);

//   // Panchang data from JSON
//   const panchangData = {
//     date: formatDate(selectedDate),
//     vaara: "Tuesday",
//     nakshatra: [
//       {
//         id: 25,
//         name: "Uttara Bhadrapada",
//         lord: { id: 6, name: "Saturn", vedic_name: "Shani" },
//         start: "1970-11-09T19:00:00+05:30",
//         end: "1970-11-10T17:12:00+05:30",
//         qualities: "Spiritual, healing, transformative",
//         favorable: ["Meditation", "Charity", "Spiritual practices"],
//         unfavorable: ["New ventures", "Marriage"],
//       },
//       {
//         id: 26,
//         name: "Revati",
//         lord: { id: 2, name: "Mercury", vedic_name: "Budha" },
//         start: "1970-11-10T17:12:00+05:30",
//         end: "1970-11-11T15:23:00+05:30",
//         qualities: "Nourishing, protective, completing",
//         favorable: ["Travel", "Education", "Arts"],
//         unfavorable: ["Aggressive actions"],
//       },
//     ],
//     tithi: [
//       {
//         id: 27,
//         index: 0,
//         name: "Dwadashi",
//         paksha: "Shukla Paksha",
//         start: "1970-11-09T22:30:00+05:30",
//         end: "1970-11-10T19:58:00+05:30",
//         significance: "Ideal for spiritual practices and charity",
//       },
//       {
//         id: 28,
//         index: 0,
//         name: "Trayodashi",
//         paksha: "Shukla Paksha",
//         start: "1970-11-10T19:58:00+05:30",
//         end: "1970-11-11T17:27:00+05:30",
//         significance: "Good for starting new ventures",
//       },
//     ],
//     karana: [
//       {
//         index: 0,
//         id: 0,
//         name: "Bava",
//         start: "1970-11-09T22:30:00+05:30",
//         end: "1970-11-10T09:14:00+05:30",
//         nature: "Movable - good for travel",
//       },
//       {
//         index: 0,
//         id: 1,
//         name: "Balava",
//         start: "1970-11-10T09:14:00+05:30",
//         end: "1970-11-10T19:58:00+05:30",
//         nature: "Fixed - good for stable activities",
//       },
//       {
//         index: 0,
//         id: 2,
//         name: "Kaulava",
//         start: "1970-11-10T19:58:00+05:30",
//         end: "1970-11-11T06:42:00+05:30",
//         nature: "Soft - good for creative works",
//       },
//     ],
//     yoga: [
//       {
//         id: 13,
//         name: "Harshana",
//         start: "1970-11-09T13:52:00+05:30",
//         end: "1970-11-10T10:38:00+05:30",
//         meaning: "Joyful, brings happiness",
//       },
//       {
//         id: 14,
//         name: "Vajra",
//         start: "1970-11-10T10:38:00+05:30",
//         end: "1970-11-11T07:22:00+05:30",
//         meaning: "Diamond-like, provides strength",
//       },
//     ],
//     sunrise: "1970-11-10T06:14:00+05:30",
//     sunset: "1970-11-10T17:49:00+05:30",
//     moonrise: "1970-11-10T15:25:00+05:30",
//     moonset: "1970-11-11T04:01:00+05:30",
//     auspicious_period: [
//         {
//             id: 1,
//             name: "Abhijit Muhurat",
//             type: "Auspicious",
//             period: [
//               {
//                 start: "1970-11-10T11:38:00+05:30",
//                 end: "1970-11-10T12:25:00+05:30",
//               },
//             ],
//             significance: "Victorious period, good for all important work",
//           },
//           {
//             id: 2,
//             name: "Amrit Kaal",
//             type: "Auspicious",
//             period: [
//               {
//                 start: "1970-11-10T12:44:00+05:30",
//                 end: "1970-11-10T14:13:00+05:30",
//               },
//             ],
//             significance: "Nectar period, highly auspicious",
//           },
//           {
//             id: 3,
//             name: "Brahma Muhurta",
//             type: "Auspicious",
//             period: [
//               {
//                 start: "1970-11-10T04:38:00+05:30",
//                 end: "1970-11-10T05:26:00+05:30",
//               },
//             ],
//             significance: "Best for meditation and spiritual practices",
//           },
//     ],
//     inauspicious_period: [
//         {
//             id: 4,
//             name: "Rahu",
//             type: "Inauspicious",
//             period: [
//               {
//                 start: "1970-11-10T14:55:00+05:30",
//                 end: "1970-11-10T16:22:00+05:30",
//               },
//             ],
//             significance: "Inauspicious for important work",
//           },
//           {
//             id: 5,
//             name: "Yamaganda",
//             type: "Inauspicious",
//             period: [
//               {
//                 start: "1970-11-10T09:08:00+05:30",
//                 end: "1970-11-10T10:35:00+05:30",
//               },
//             ],
//             significance: "Avoid new ventures",
//           },
//           {
//             id: 6,
//             name: "Gulika",
//             type: "Inauspicious",
//             period: [
//               {
//                 start: "1970-11-10T12:01:00+05:30",
//                 end: "1970-11-10T13:28:00+05:30",
//               },
//             ],
//             significance: "Avoid important activities",
//           },
//           {
//             id: 7,
//             name: "Dur Muhurat",
//             type: "Inauspicious",
//             period: [
//               {
//                 start: "1970-11-10T08:33:00+05:30",
//                 end: "1970-11-10T09:19:00+05:30",
//               },
//               {
//                 start: "1970-11-10T22:47:00+05:30",
//                 end: "1970-11-10T23:37:00+05:30",
//               },
//             ],
//             significance: "Avoid starting new tasks",
//           },
//           {
//             id: 8,
//             name: "Varjyam",
//             type: "Inauspicious",
//             period: [
//               {
//                 start: "1970-11-11T04:18:00+05:30",
//                 end: "1970-11-11T05:47:00+05:30",
//               },
//             ],
//             significance: "Avoid significant undertakings",
//           },
//     ],
//     planetary_positions: {
//       sun: "Libra",
//       moon: "Pisces",
//       mars: "Capricorn",
//       mercury: "Libra",
//       jupiter: "Sagittarius",
//       venus: "Scorpio",
//       saturn: "Taurus",
//       rahu: "Pisces",
//       ketu: "Virgo",
//     },
//     ritu: "Sharad (Autumn)",
//     day_duration: "11h 34m 41s",
//     night_duration: "12h 25m 19s",
//   };

//   // Animation variants
//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const tabContentVariants: Variants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   };

//   const heroVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   return (
//     <div className="min-h-screen bg-[#FFFAF5] text-[#2C1A0D] p-6 md:p-8 font-sans">
//       {/* Hero Section */}
//       <motion.header 
//         variants={heroVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative bg-gradient-to-r from-[#8B1E1E] via-[#A63333] to-[#5A0808] text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-10 overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
//         <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffffff15] rounded-full filter blur-3xl"></div>
//         <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">Vedic Panchang</h1>
//             <p className="text-lg md:text-xl text-yellow-100 opacity-90 mt-2">Your Cosmic Guide to Auspicious Timings</p>
//             <div className="mt-4 flex items-center gap-3 text-sm md:text-base">
//               <MdOutlineDateRange className="text-yellow-200" />
//               <span>{panchangData.date}</span>
//             </div>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 md:mt-0 bg-yellow-400 text-[#2C1A0D] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition-all"
//           >
//             Get Personalized Insights
//           </motion.button>
//         </div>
//       </motion.header>

//       {/* Controls Section */}
//       {/* <motion.div
//         variants={cardVariants}
//         initial="hidden"
//         animate="visible"
//         className="bg-white rounded-2xl shadow-xl p-6 mb-10 flex flex-col md:flex-row gap-6 items-center justify-between"
//       >
//         <div className="flex items-center gap-4 w-full md:w-auto">
//           <div className="flex items-center gap-3 flex-1 bg-[#FFF8F0] p-3 rounded-lg shadow-sm">
//             <FaCalendarAlt className="text-[#8B1E1E]" />
//             <input
//               type="date"
//               value={selectedDate.toISOString().split('T')[0]}
//               onChange={(e) => setSelectedDate(new Date(e.target.value))}
//               className="bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/50 rounded-lg"
//             />
//           </div>
          
//           <select
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="bg-[#FFF8F0] p-3 rounded-lg shadow-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/50"
//           >
//             <option value="Delhi">Delhi</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Chennai">Chennai</option>
//             <option value="Kolkata">Kolkata</option>
//             <option value="Bangalore">Bangalore</option>
//           </select>
//         </div>

//         <div className="flex bg-[#FFF8F0] rounded-lg p-1.5 w-full md:w-auto shadow-sm">
//           {['today', 'month', 'festivals'].map(tab => (
//             <motion.button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               whileHover={{ scale: 1.05 }}
//               className={`px-5 py-2 rounded-md transition-all ${activeTab === tab ? 'bg-[#8B1E1E] text-white font-semibold' : 'text-[#5A0808] hover:bg-[#FFE4B5]'}`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1).replace('month', 'Month View')}
//             </motion.button>
//           ))}
//         </div>
//       </motion.div> */}

//       {isLoading ? (
//         <div className="flex justify-center items-center h-64">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="h-12 w-12 border-t-4 border-b-4 border-[#8B1E1E] rounded-full"
//           ></motion.div>
//         </div>
//       ) : (
//         <>
//           {/* Main Panchang Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
//             {/* Today's Panchang */}
//             <motion.div
//               variants={cardVariants}
//               className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold font-serif text-[#2C1A0D]">Today's Panchang</h2>
//                 <div className="flex items-center gap-3 text-sm bg-amber-100 text-amber-800 px-4 py-2 rounded-full shadow-sm">
//                   <span>Ritu:</span>
//                   <span className="font-semibold">{panchangData.ritu}</span>
//                 </div>
//               </div>

//               {/* Panchang Tabs */}
//               <div className="flex border-b border-[#FFE4B5] mb-6">
//                 {['nakshatra', 'tithi', 'karana', 'yoga', 'planets'].map(tab => (
//                   <motion.button
//                     key={tab}
//                     onClick={() => setPanchangTab(tab)}
//                     whileHover={{ scale: 1.05 }}
//                     className={`px-4 py-2 text-sm font-semibold transition-all ${panchangTab === tab ? 'border-b-2 border-[#8B1E1E] text-[#8B1E1E]' : 'text-[#5A0808] hover:text-[#8B1E1E]'}`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </motion.button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={panchangTab}
//                   variants={tabContentVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                   className="bg-[#FFF8F0] rounded-lg p-6 shadow-sm"
//                 >
//                   {panchangTab === 'nakshatra' && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-[#8B1E1E]">Nakshatras</h3>
//                       {panchangData.nakshatra.map((item, index) => (
//                         <motion.div
//                           key={item.id}
//                           whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//                           className="p-4 bg-white rounded-lg border border-[#FFE4B5] shadow-sm"
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <p className="text-lg font-medium">{item.name}</p>
//                               <p className="text-sm text-gray-600">Lord: {item.lord.vedic_name}</p>
//                             </div>
//                             <p className="text-xs text-gray-500">
//                               <MdOutlineTimer className="inline mr-1" />
//                               {formatTime(item.start)} - {formatTime(item.end)}
//                             </p>
//                           </div>
//                           <div className="mt-2 text-sm">
//                             <p><span className="font-semibold">Qualities:</span> {item.qualities}</p>
//                             <p><span className="font-semibold">Favorable:</span> {item.favorable.join(', ')}</p>
//                             <p><span className="font-semibold">Unfavorable:</span> {item.unfavorable.join(', ')}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}

//                   {panchangTab === 'tithi' && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-[#8B1E1E]">Tithis</h3>
//                       {panchangData.tithi.map((item, index) => (
//                         <motion.div
//                           key={item.id}
//                           whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//                           className="p-4 bg-white rounded-lg border border-[#FFE4B5] shadow-sm"
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <p className="text-lg font-medium">{item.name}</p>
//                               <p className="text-sm text-gray-600">{item.paksha}</p>
//                             </div>
//                             <p className="text-xs text-gray-500">
//                               <MdOutlineTimer className="inline mr-1" />
//                               {formatTime(item.start)} - {formatTime(item.end)}
//                             </p>
//                           </div>
//                           <div className="mt-2 text-sm">
//                             <p><span className="font-semibold">Significance:</span> {item.significance}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}

//                   {panchangTab === 'karana' && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-[#8B1E1E]">Karanas</h3>
//                       {panchangData.karana.map((item, index) => (
//                         <motion.div
//                           key={item.id}
//                           whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//                           className="p-4 bg-white rounded-lg border border-[#FFE4B5] shadow-sm"
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <p className="text-lg font-medium">{item.name}</p>
//                             </div>
//                             <p className="text-xs text-gray-500">
//                               <MdOutlineTimer className="inline mr-1" />
//                               {formatTime(item.start)} - {formatTime(item.end)}
//                             </p>
//                           </div>
//                           <div className="mt-2 text-sm">
//                             <p><span className="font-semibold">Nature:</span> {item.nature}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}

//                   {panchangTab === 'yoga' && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-[#8B1E1E]">Yogas</h3>
//                       {panchangData.yoga.map((item, index) => (
//                         <motion.div
//                           key={item.id}
//                           whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//                           className="p-4 bg-white rounded-lg border border-[#FFE4B5] shadow-sm"
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <p className="text-lg font-medium">{item.name}</p>
//                             </div>
//                             <p className="text-xs text-gray-500">
//                               <MdOutlineTimer className="inline mr-1" />
//                               {formatTime(item.start)} - {formatTime(item.end)}
//                             </p>
//                           </div>
//                           <div className="mt-2 text-sm">
//                             <p><span className="font-semibold">Meaning:</span> {item.meaning}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}

//                   {panchangTab === 'planets' && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-[#8B1E1E]">Planetary Positions</h3>
//                       <div className="grid grid-cols-2 gap-4">
//                         {Object.entries(panchangData.planetary_positions).map(([planet, sign], index) => (
//                           <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//                             className="p-4 bg-white rounded-lg border border-[#FFE4B5] shadow-sm"
//                           >
//                             <div className="flex justify-between">
//                               <span className="capitalize font-semibold">{planet}:</span>
//                               <span className="font-medium">{sign}</span>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* Sun & Moon Times */}
//             <motion.div
//               variants={cardVariants}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <h2 className="text-2xl font-bold font-serif text-[#2C1A0D] mb-6">Sun & Moon</h2>
//               <div className="space-y-5">
//                 {[
//                   { icon: GiSunrise, title: "Sunrise", time: panchangData.sunrise, extra: `Day: ${panchangData.day_duration}`, bg: "from-amber-50 to-white", iconBg: "amber-100", iconColor: "amber-600" },
//                   { icon: GiSunset, title: "Sunset", time: panchangData.sunset, extra: `Night: ${panchangData.night_duration}`, bg: "from-orange-50 to-white", iconBg: "orange-100", iconColor: "orange-600" },
//                   { icon: GiMoonBats, title: "Moonrise", time: panchangData.moonrise, extra: "Phase: Waxing", bg: "from-blue-50 to-white", iconBg: "blue-100", iconColor: "blue-600" },
//                   { icon: FaMoon, title: "Moonset", time: panchangData.moonset, extra: "Next: Tomorrow 04:01 AM", bg: "from-indigo-50 to-white", iconBg: "indigo-100", iconColor: "indigo-600" },
//                 ].map((item, index) => (
//                   <motion.div 
//                     key={index}
//                     whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
//                     className={`flex items-center gap-4 p-4 bg-gradient-to-r ${item.bg} rounded-lg border border-[#FFE4B5] shadow-sm`}
//                   >
//                     <div className={`p-3 rounded-full bg-${item.iconBg}`}>
//                       <item.icon className={`text-2xl text-${item.iconColor}`} />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#2C1A0D]">{item.title}</h3>
//                       <p className="text-lg font-medium">{formatTime(item.time)}</p>
//                       <p className="text-xs text-gray-500 mt-1">{item.extra}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Muhurats Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
//             {/* Auspicious Periods */}
//             <motion.div
//               variants={cardVariants}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="bg-green-100 p-3 rounded-full">
//                   <FaStar className="text-green-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold font-serif text-[#2C1A0D]">Auspicious Timings</h2>
//               </div>
//               <div className="space-y-5">
//                 {panchangData.auspicious_period.map((period, index) => (
//                   <motion.div 
//                     key={period.id}
//                     whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
//                     className="p-5 bg-green-50 rounded-lg border border-green-100 shadow-sm"
//                   >
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="font-semibold text-green-800 text-lg">{period.name}</h3>
//                         <p className="text-sm text-green-600 mt-1">{period.significance}</p>
//                       </div>
//                       <span className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-full font-semibold">
//                         Recommended
//                       </span>
//                     </div>
//                     {period.period.map((p, i) => (
//                       <div key={i} className="flex items-center gap-3 mt-3">
//                         <div className="bg-white p-3 rounded-lg shadow-inner">
//                           <span className="font-medium text-green-800">
//                             {formatTime(p.start)} - {formatTime(p.end)}
//                           </span>
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           Duration: {Math.round((new Date(p.end).getTime() - new Date(p.start).getTime()) / (1000 * 60))} mins
//                         </div>
//                       </div>
//                     ))}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Inauspicious Periods */}
//             <motion.div
//               variants={cardVariants}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="bg-red-100 p-3 rounded-full">
//                   <BsWind className="text-red-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold font-serif text-[#2C1A0D]">Inauspicious Timings</h2>
//               </div>
//               <div className="space-y-5">
//                 {panchangData.inauspicious_period.map((period, index) => (
//                   <motion.div 
//                     key={period.id}
//                     whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
//                     className="p-5 bg-red-50 rounded-lg border border-red-100 shadow-sm"
//                   >
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="font-semibold text-red-800 text-lg">{period.name}</h3>
//                         <p className="text-sm text-red-600 mt-1">{period.significance}</p>
//                       </div>
//                       <span className="bg-red-100 text-red-800 text-xs px-3 py-1.5 rounded-full font-semibold">
//                         Avoid
//                       </span>
//                     </div>
//                     {period.period.map((p, i) => (
//                       <div key={i} className="flex items-center gap-3 mt-3">
//                         <div className="bg-white p-3 rounded-lg shadow-inner">
//                           <span className="font-medium text-red-800">
//                             {formatTime(p.start)} - {formatTime(p.end)}
//                           </span>
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           Duration: {Math.round((new Date(p.end).getTime() - new Date(p.start).getTime()) / (1000 * 60))} mins
//                         </div>
//                       </div>
//                     ))}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Daily Guidance */}
//           <motion.div
//             variants={cardVariants}
//             className="bg-white rounded-2xl shadow-xl p-8 mb-10"
//           >
//             <h2 className="text-2xl font-bold font-serif text-[#2C1A0D] mb-6">Daily Guidance</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 { title: "Best Activities", items: ["Spiritual practices", "Charity & donations", "Creative works"], bg: "blue-50", text: "blue-800", icon: "✓" },
//                 { title: "Avoid", items: ["New ventures", "Important meetings", "Travel during Rahu Kaal"], bg: "amber-50", text: "amber-800", icon: "✗" },
//                 { title: "Remedies", items: ["Chant Vishnu Sahasranama", "Donate black sesame seeds", "Light ghee lamp to Lord Shiva"], bg: "purple-50", text: "purple-800", icon: "•" },
//               ].map((section, index) => (
//                 <div key={index} className={`bg-${section.bg} p-5 rounded-lg border border-${section.bg.replace('50', '100')} shadow-sm`}>
//                   <h3 className={`font-semibold text-${section.text} mb-3 text-lg`}>{section.title}</h3>
//                   <ul className="text-sm space-y-2">
//                     {section.items.map((item, i) => (
//                       <li key={i} className="flex items-center gap-3">
//                         <span className={`bg-${section.bg.replace('50', '100')} p-1.5 rounded-full w-6 h-6 flex items-center justify-center text-${section.text}`}>{section.icon}</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* CTA Section */}
//           <motion.div
//             variants={cardVariants}
//             className="bg-gradient-to-r from-[#8B1E1E] to-[#5A0808] text-white rounded-2xl shadow-2xl p-8 mb-10 text-center"
//           >
//             <h2 className="text-3xl font-bold font-serif mb-4">Unlock Personalized Vedic Insights</h2>
//             <p className="text-lg text-yellow-100 mb-6">Get tailored astrological guidance and premium features with our subscription plan.</p>
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-400 text-[#2C1A0D] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition-all"
//             >
//               Subscribe Now
//             </motion.button>
//           </motion.div>
//         </>
//       )}

//       {/* Footer */}
//       <motion.footer 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="text-center text-sm text-gray-600 mt-10 mb-6"
//       >
//         <p>Data calculated for {city} based on Vedic Astrology principles</p>
//         <p className="mt-2">© {new Date().getFullYear()} Vedic Panchang - All rights reserved</p>
//       </motion.footer>
//     </div>
//   );
// };

// export default PanchangPage;


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

const getAccessToken = async () => {
  const res = await fetch('/api/');
  const data = await res.json();
  return data.access_token;
};

const PanchangPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [city] = useState('Delhi');
  const [isLoading, setIsLoading] = useState(false);
  const [panchangData, setPanchangData] = useState<PanchangData | null>(null);

  const fetchPanchangData = async () => {
    setIsLoading(true);
    try {
      const token = await getAccessToken();
      const formattedDate = selectedDate.toISOString().split("T")[0];

      const response = await fetch(
        `https://api.prokerala.com/v2/astrology/panchang?date=${formattedDate}&timezone=Asia/Kolkata&ayanamsa=1&coordinates=28.6139,77.2090`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
