import Head from 'next/head';
import Image from 'next/image';
import { FaPhoneAlt, FaStar, FaHandHoldingHeart, FaClock, FaTimes } from 'react-icons/fa';

interface CallConsultationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CallConsultation({ isOpen = false, onClose }: CallConsultationProps) {
  if (!isOpen) return null;

  return (
    <>
      <Head>
        <title>Direct Astrologer Call | Instant Guidance</title>
        <meta name="description" content="Talk directly to expert astrologers for instant solutions to your problems. Available 24/7." />
      </Head>

      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        {/* Modal Content */}
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="text-gray-600 text-xl" />
          </button>

          <div className="relative min-h-screen py-12 sm:py-16 overflow-hidden bg-gray-50">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/call-consultation/astrology-pattern.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main Banner Section */}
              <div className="bg-gradient-to-r from-[#f8e1e1] to-[#faf5f5] rounded-2xl overflow-hidden shadow-xl mb-12 sm:mb-16">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Content */}
                  <div className="p-8 sm:p-10 lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
                      Need Guidance? <span className="text-[#8b1e1e]">Talk to Astrologer Now</span>
                    </h1>
                    <div className="w-20 sm:w-24 h-1 bg-[#8b1e1e] mb-6"></div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Our expert astrologers can help you select the perfect service based on your current life situation and needs.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <FaStar className="text-[#8b1e1e] mr-3" />
                        <span>Instant Connection with Verified Astrologers</span>
                      </div>
                      <div className="flex items-center">
                        <FaHandHoldingHeart className="text-[#8b1e1e] mr-3" />
                        <span>Personalized Solutions for Your Problems</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="text-[#8b1e1e] mr-3" />
                        <span>24/7 Availability</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+919876543210"
                        className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                      >
                        <FaPhoneAlt className="mr-2" />
                        Call Now
                      </a>
                      <button
                        onClick={onClose}
                        className="bg-white text-[#5a0808] border border-[#5a0808] hover:bg-[#f8e1e1] font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center"
                      >
                        View Services
                      </button>
                    </div>
                  </div>
                  
                  {/* Right Image */}
                  <div className="lg:w-1/2 flex items-center justify-center p-4">
                    <div className="relative w-full h-64 sm:h-80 md:h-96">
                      <Image 
                        src="/call-consultation/astrologer-call.jpg" 
                        alt="Astrologer on Call"
                        fill
                        className="object-contain object-center rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works Section */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-12 sm:mb-16 border border-[#f8e1e1]">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] mb-6 text-center">
                  How Our Direct Call Service Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="bg-[#f8e1e1] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl text-[#5a0808] font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-[#5a0808] mb-2">Make a Call</h3>
                    <p className="text-gray-600">Call our dedicated number to connect instantly</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-[#f8e1e1] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl text-[#5a0808] font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-[#5a0808] mb-2">Describe Your Concern</h3>
                    <p className="text-gray-600">Share your questions with our astrologer</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-[#f8e1e1] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl text-[#5a0808] font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-[#5a0808] mb-2">Get Guidance</h3>
                    <p className="text-gray-600">Receive personalized advice and solutions</p>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div id="services" className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] mb-4">
                  Our <span className="text-[#8b1e1e]">Specialized Services</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  We provide expert guidance on all aspects of life through astrology
                </p>
              </div>

              {/* Pricing Section */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-[#f8e1e1]">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] mb-6 text-center">
                  Simple & Transparent Pricing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-[#f8e1e1] rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-[#5a0808] mb-2">Basic Call</h3>
                    <p className="text-3xl font-bold text-[#8b1e1e] mb-4">₹299</p>
                    <p className="text-gray-600 mb-4">5 minutes consultation</p>
                    <a
                      href="tel:+919876543210"
                      className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 inline-block w-full"
                    >
                      Call Now
                    </a>
                  </div>
                  <div className="border border-[#f8e1e1] rounded-lg p-6 text-center bg-[#fff9f9]">
                    <h3 className="text-xl font-bold text-[#5a0808] mb-2">Standard Call</h3>
                    <p className="text-3xl font-bold text-[#8b1e1e] mb-4">₹499</p>
                    <p className="text-gray-600 mb-4">10 minutes detailed consultation</p>
                    <a
                      href="tel:+919876543210"
                      className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 inline-block w-full"
                    >
                      Call Now
                    </a>
                  </div>
                  <div className="border border-[#f8e1e1] rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-[#5a0808] mb-2">Premium Call</h3>
                    <p className="text-3xl font-bold text-[#8b1e1e] mb-4">₹999</p>
                    <p className="text-gray-600 mb-4">20 minutes in-depth analysis</p>
                    <a
                      href="tel:+919876543210"
                      className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 inline-block w-full"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-[#faf5f5] rounded-xl p-8 mb-12">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] mb-6 text-center">
                  What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <span className="ml-2 text-gray-600">5/5</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "The astrologer gave me practical solutions for my career problems. The call was very helpful and gave me clarity."
                    </p>
                    <p className="font-semibold text-[#5a0808]">- Ramesh Kumar</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <span className="ml-2 text-gray-600">5/5</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "I called for marriage advice and got immediate answers to my questions. The remedies suggested worked wonders!"
                    </p>
                    <p className="font-semibold text-[#5a0808]">- Priya Sharma</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] text-white rounded-xl shadow-xl p-8 sm:p-10 max-w-4xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-serif mb-4">
                    Ready to Transform Your Life?
                  </h3>
                  <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                    Call now and get instant guidance from our expert astrologers. Available 24/7.
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="bg-white text-[#5a0808] hover:bg-[#f8e1e1] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Call +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}