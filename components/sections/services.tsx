import React from 'react';
import Head from 'next/head';

const Service = () => {
  const services = [
    {
      title: 'Lal Kitab Report',
      description: 'Unlock success, prosperity, and positivity with tailored Lal Kitab remedies.',
      icon: 'https://storage.googleapis.com/a1aa/image/d381bd19-4717-46df-3b07-2fa45ecba3c2.jpg',
    },
    {
      title: 'Book Consultation Call',
      description: 'Receive personalized guidance on life, love, career, business, and finances.',
      icon: 'https://storage.googleapis.com/a1aa/image/d5a6a90d-5fe4-4789-277f-cb4324ad6115.jpg',
    },
    {
      title: 'Couple Kundali',
      description: 'Ensure marital harmony with precise Kundali Milan horoscope matching.',
      icon: 'https://storage.googleapis.com/a1aa/image/2f9b05b5-ae7d-4fe4-6572-c1f82cd1aa60.jpg',
    },
    {
      title: 'Personalized Kundali',
      description: 'Comprehensive 10+ year predictions for career, health, love, and marriage.',
      icon: 'https://storage.googleapis.com/a1aa/image/cea2cb3e-5330-4158-7de2-52f2a15b0584.jpg',
    },
    {
      title: 'Mega Numerology Webinar',
      description: 'Join our 2-day live numerology webinar on Zoom for deep insights.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Lal Kitab Webinar',
      description: 'Explore Lal Kitab astrology in our live Zoom webinar.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Kaal Sarp & Manglik Dosh Report',
      description: 'Balance your life with remedies for Kaal Sarp and Manglik Dosh.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Fortune Report',
      description: 'Align with cosmic energies to attract success, wealth, and positivity.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Baby Name Report',
      description: 'Discover numerologically aligned name suggestions for your child.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Buy Gemstones',
      description: 'Browse our curated collection of astrological gemstones.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Our Courses',
      description: 'Master Astrology, Numerology, and Vastu with our online courses.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
    {
      title: 'Buy Rudraksha',
      description: 'Explore our authentic Rudraksha collection for spiritual growth.',
      icon: 'https://storage.googleapis.com/a1aa/image/placeholder-icon.jpg',
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Our Services - Premium Astrology Solutions</title>
        <meta
          name="description"
          content="Explore our premium astrology services including Kundali, Lal Kitab, Numerology, and more for personal growth and success."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="relative min-h-screen bg-gradient-to-b from-[#fdf6f0] to-[#f8e1e1] py-16 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5a0808] font-merriweather mb-4 tracking-tight">
              Our Premium Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
              Discover our expertly crafted astrology services, designed to bring clarity, balance, and transformation to your life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-6 flex flex-col items-center text-center h-full">
                  <div className="bg-[#f8e1e1] rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md">
                    {service.icon ? (
                      <img
                        alt={`Icon for ${service.title}`}
                        className="w-12 h-12 object-contain"
                        src={service.icon}
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-[#5a0808] text-2xl">
                        <i className="fas fa-star"></i>
                      </div>
                    )}
                  </div>
                  <h3 className="text-[#5a0808] font-bold text-xl font-merriweather mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-montserrat leading-relaxed flex-grow px-4">
                    {service.description}
                  </p>
                  <button className="mt-4 bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#3a0505] hover:to-[#6b1515] text-white font-semibold rounded-lg px-6 py-2 transition-all duration-300 transform hover:scale-105 w-full max-w-[180px] shadow-md">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;