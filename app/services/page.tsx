import { services } from '@/data/services';
import { 
  FaBook, 
  FaPhoneAlt, 
  FaHeart, 
  FaUserAlt, 
  FaVideo, 
  FaStar, 
  FaBalanceScale,
  FaGem,
  FaBaby,
  FaGraduationCap,
  FaPrayingHands,
  FaChartLine
} from 'react-icons/fa';
import Head from 'next/head';

const iconComponents: Record<string, JSX.Element> = {
  FaBook: <FaBook className="text-2xl sm:text-3xl text-[#5a0808]" />,
  FaPhoneAlt: <FaPhoneAlt className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaHeart: <FaHeart className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaUserAlt: <FaUserAlt className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaVideo: <FaVideo className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaStar: <FaStar className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaBalanceScale: <FaBalanceScale className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaGem: <FaGem className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaBaby: <FaBaby className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaGraduationCap: <FaGraduationCap className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaPrayingHands: <FaPrayingHands className="text-2xl sm:text-3xl text-[#5a0808]" />, 
  FaChartLine: <FaChartLine className="text-2xl sm:text-3xl text-[#5a0808]" />
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Premium Astrology Solutions</title>
        <meta name="description" content="Explore our premium astrology services including Kundali, Lal Kitab, Numerology, and more for personal growth and success." />
      </Head>

      <div className="relative min-h-screen py-12 sm:py-16 overflow-hidden">
        {/* Background and decorative elements */}
        <div className="absolute inset-0 bg-[url('/service/service-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5a0808]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#5a0808]/10 to-transparent -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a0808] font-serif mb-4">
              Our <span className="text-[#8b1e1e]">Premium</span> Services
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-[#8b1e1e] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-sans leading-relaxed">
              Discover our expertly crafted astrology services, designed to bring clarity, balance, and transformation to your life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="relative p-2 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8 relative">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 min-h-[220px] sm:min-h-[260px] flex flex-col"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8e1e1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card content */}
                  <div className="relative p-3 sm:p-5 flex flex-col items-center text-center h-full">
                    {/* Icon with glow effect */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className="absolute inset-0 rounded-full bg-[#8b1e1e] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-[#f8e1e1] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        {iconComponents[service.icon]}
                      </div>
                    </div>

                    {/* Title and description */}
                    <h2 className="text-base sm:text-lg font-bold text-[#5a0808] font-serif mb-1 sm:mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Action button */}
                    <div className="mt-auto w-full pt-2">
                      <a
                        href={`/services/${service.slug}`}
                        className="block bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-medium py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-base text-center"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto border border-[#f8e1e1]">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5a0808] mb-4">
                Need Guidance Choosing the Right Service?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our expert astrologers can help you select the perfect service based on your current life situation and needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/consultation-call"
                  className="bg-[#5a0808] hover:bg-[#8b1e1e] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book a Consultation
                </a>
                <a
                  href="/contact"
                  className="bg-white text-[#5a0808] border border-[#5a0808] hover:bg-[#f8e1e1] font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* New Additional Sections Below CTA */}

          {/* Testimonials Section */}
          <div className="mt-16 bg-[#f8e1e1]/30 p-8 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "The Kundali analysis was incredibly accurate and helped me make important life decisions with confidence.",
                  name: "Rahul Sharma",
                  location: "Delhi"
                },
                {
                  quote: "The numerologist gave me insights about my career path that no one else had ever pointed out. Highly recommended!",
                  name: "Priya Patel",
                  location: "Mumbai"
                },
                {
                  quote: "The remedies suggested by the Lal Kitab expert transformed my financial situation within months.",
                  name: "Vikram Singh",
                  location: "Bangalore"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#f8e1e1]">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-right">
                    <p className="font-semibold text-[#5a0808]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] text-center mb-8">
              How Our Services Work
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaUserAlt className="text-2xl text-[#5a0808]" />,
                  title: "1. Consultation",
                  description: "Share your details and concerns with our astrologers"
                },
                {
                  icon: <FaBook className="text-2xl text-[#5a0808]" />,
                  title: "2. Analysis",
                  description: "In-depth examination of your charts and planetary positions"
                },
                {
                  icon: <FaHeart className="text-2xl text-[#5a0808]" />,
                  title: "3. Solution",
                  description: "Personalized remedies and guidance for your situation"
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#f8e1e1] text-center">
                  <div className="bg-[#f8e1e1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#5a0808] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-[#f8e1e1]">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#5a0808] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How long does it take to get results after a consultation?",
                  answer: "Most clients report noticing positive changes within 2-3 weeks of implementing the suggested remedies, though this can vary based on individual circumstances."
                },
                {
                  question: "Do I need to provide any specific information for my reading?",
                  answer: "For most services, we need your accurate birth date, time, and place. The more precise this information, the more accurate your reading will be."
                },
                {
                  question: "Are the remedies difficult to perform?",
                  answer: "We provide simple, practical remedies tailored to your lifestyle. Most can be easily incorporated into your daily routine."
                },
                {
                  question: "Can I get a combined reading for my family?",
                  answer: "Yes, we offer family packages that analyze compatibility and provide collective remedies for harmonious relationships."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-[#f8e1e1] pb-4">
                  <h3 className="font-semibold text-[#5a0808] mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] text-white p-8 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-serif mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Begin your journey to clarity and fulfillment with our expert astrological guidance.
            </p>
            <a
              href="/book-now"
              className="inline-block bg-white text-[#5a0808] font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#f8e1e1] hover:shadow-lg"
            >
              Book Your Service Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}