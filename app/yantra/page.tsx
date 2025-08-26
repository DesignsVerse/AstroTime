import React from 'react';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const ShreeYantraPage = () => {
  return (
    <>
     

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#ffe6e6]">
        {/* Enhanced Hero Section with Animation */}
        <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 xl:px-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/10 to-transparent opacity-50 animate-pulse"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Larger Product Image with Hover Effect */}
            <div className="flex-1 flex justify-center lg:justify-start transform hover:scale-105 transition-transform duration-500">
              <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border-2 border-[#800000]/50">
                <Image
                  src="/shree-yantra.png"
                  alt="Premium Authentic Shree Yantra for Prosperity and Wealth"
                  fill
                  className="object-contain transition-transform duration-300 hover:rotate-3"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Enhanced Product Details with Advanced Styling */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#800000] mb-6 font-serif leading-tight animate-fade-in">
                Premium Shree Yantra<br />Ultimate Tool for Prosperity & Harmony
              </h1>
              <p className="text-gray-800 text-lg md:text-xl mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Elevate your spiritual journey with our premium Shree Yantra, meticulously crafted from high-grade crystal or Panchdhatu. This sacred geometric masterpiece channels cosmic energies to attract immense wealth, remove obstacles, foster harmonious relationships, and promote inner peace. Dedicated to Goddess Lakshmi, it is energized through ancient Vedic rituals for immediate and powerful results.
              </p>
              <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
                <p className="text-3xl font-bold text-[#800000] mb-2">₹1500</p>
                <p className="text-gray-600 text-sm bg-[#800000]/10 px-3 py-1 rounded-full">Free delivery in India | Lab-certified & Energized</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#800000] focus:ring-opacity-50">
                  Add to Cart
                </button>
                <Link href="/checkout">
                  <button className="bg-gradient-to-r from-[#800000] to-[#a52a2a] hover:from-[#600000] hover:to-[#800000] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#800000] focus:ring-opacity-50">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section with Cards */}
        <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32 bg-white border-t border-[#800000]/20">
          <h2 className="text-3xl font-bold text-[#800000] mb-10 text-center animate-fade-in">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-[#ffe6e6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#800000] mb-3">Vedic Authenticity</h3>
              <p className="text-gray-700">Designed per ancient scriptures for maximum spiritual potency.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#ffe6e6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#800000] mb-3">High-Quality Materials</h3>
              <p className="text-gray-700">Crafted from crystal, brass, or Panchdhatu for durability and energy conduction.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#ffe6e6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#800000] mb-3">Energized Rituals</h3>
              <p className="text-gray-700">Pre-energized by expert astrologers for instant benefits.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#ffe6e6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#800000] mb-3">Vastu Compatibility</h3>
              <p className="text-gray-700">Perfect for home, office, or altar to enhance positive energies.</p>
            </div>
          </div>
        </section>

        {/* Expanded Benefits Section with Larger Content */}
        <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gradient-to-b from-[#ffe6e6] to-white">
          <h2 className="text-3xl font-bold text-[#800000] mb-10 text-center animate-fade-in">Transformative Benefits</h2>
          <p className="text-gray-800 text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-center">
            The Shree Yantra is more than a product—it's a gateway to abundance. Experience amplified prosperity, career advancements, and emotional balance through its divine vibrations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#800000] mb-4">Wealth & Success</h3>
              <p className="text-gray-700 mb-4">Attracts financial growth and removes monetary blockages for lasting prosperity.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Boosts business opportunities</li>
                <li>Enhances savings and investments</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#800000] mb-4">Spiritual Elevation</h3>
              <p className="text-gray-700 mb-4">Balances chakras and fosters inner peace for holistic well-being.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Deepens meditation practices</li>
                <li>Promotes emotional harmony</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#800000] mb-4">Protection & Harmony</h3>
              <p className="text-gray-700 mb-4">Shields against negative energies and strengthens relationships.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Improves family bonds</li>
                <li>Deflects evil influences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32 bg-white border-t border-[#800000]/20">
          <h2 className="text-3xl font-bold text-[#800000] mb-10 text-center animate-fade-in">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#ffe6e6] to-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic mb-4">"This Shree Yantra transformed my financial luck overnight! Highly recommended."</p>
              <p className="text-[#800000] font-semibold">- Priya S., Mumbai</p>
            </div>
            <div className="bg-gradient-to-br from-[#ffe6e6] to-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic mb-4">"The energy is palpable. It brought peace and prosperity to my home."</p>
              <p className="text-[#800000] font-semibold">- Raj K., Delhi</p>
            </div>
            <div className="bg-gradient-to-br from-[#ffe6e6] to-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic mb-4">"Premium quality and fast delivery. Worth every rupee!"</p>
              <p className="text-[#800000] font-semibold">- Anita R., Ujjain</p>
            </div>
          </div>
        </section>

        {/* Expanded FAQ Section */}
        <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gradient-to-b from-white to-[#ffe6e6]">
          <h2 className="text-3xl font-bold text-[#800000] mb-10 text-center animate-fade-in">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How to use Shree Yantra?</h3>
              <p className="text-gray-600">Place it in a sacred space, perform daily puja, and meditate to activate its energies.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Is it pre-energized?</h3>
              <p className="text-gray-600">Yes, energized by Vedic experts for optimal results.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What materials are used?</h3>
              <p className="text-gray-600">High-quality crystal, brass, or Panchdhatu – choose your preference at checkout.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How long for delivery?</h3>
              <p className="text-gray-600">3-5 business days within India, with tracking provided.</p>
            </div>
          </div>
        </section>

        {/* Footer CTA with Animation */}
        <section className="py-12 bg-[#800000] text-white text-center animate-fade-in">
          <p className="text-2xl mb-6">Unlock Prosperity Today with Premium Shree Yantra</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#800000] font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105">
              Add to Cart
            </button>
            <Link href="/checkout">
              <button className="bg-gradient-to-r from-white to-[#ffe6e6] text-[#800000] font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105">
                Buy Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShreeYantraPage;
