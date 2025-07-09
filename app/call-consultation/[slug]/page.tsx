import consultations  from '@/data/call-consultation';
import { 
  FaHeart, 
  FaUserAlt,
  FaGraduationCap,
  FaChartLine,
  FaGem,
  FaCheck,
  FaPhoneAlt
} from 'react-icons/fa';
import Head from 'next/head';

const iconComponents: Record<string, JSX.Element> = {
  FaHeart: <FaHeart className="text-2xl text-[#5a0808]" />,
  FaUserAlt: <FaUserAlt className="text-2xl text-[#5a0808]" />,
  FaGraduationCap: <FaGraduationCap className="text-2xl text-[#5a0808]" />,
  FaChartLine: <FaChartLine className="text-2xl text-[#5a0808]" />,
  FaGem: <FaGem className="text-2xl text-[#5a0808]" />
};

export default function ConsultationDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const consultation = consultations.find(c => c.slug === slug);
  
  if (!consultation) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#5a0808]">Consultation not found</h1>
        <a href="/consultations" className="mt-4 inline-block text-[#8b1e1e] hover:underline">
          Browse all consultations
        </a>
      </div>
    </div>;
  }

  return (
    <>
      <Head>
        <title>{consultation.title} | Premium Astrology Consultation</title>
        <meta name="description" content={consultation.shortDescription} />
      </Head>

      <div className="relative min-h-screen py-12 bg-gray-50">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/consultation/consult-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#5a0808]">
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <a href="/consultations" className="text-sm font-medium text-gray-700 hover:text-[#5a0808]">
                    Consultations
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-[#5a0808]">
                    {consultation.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            {/* Header Section */}
            <div className="bg-[#f8e1e1] p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-4 md:mb-0 md:mr-8">
                {iconComponents[consultation.icon]}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#5a0808] font-serif mb-2">
                  {consultation.title}
                </h1>
                <p className="text-lg text-gray-700">
                  {consultation.shortDescription}
                </p>
              </div>
            </div>

            {/* Body Section */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#5a0808] font-serif mb-4">
                      About This Consultation
                    </h2>
                    <p className="text-gray-700 mb-4">
                      {consultation.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#5a0808] font-serif mb-4">
                      What You'll Learn
                    </h2>
                    <ul className="space-y-3">
                      {consultation.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#5a0808] font-serif mb-4">
                      Consultation Process
                    </h2>
                    <ol className="space-y-3 list-decimal list-inside">
                      {consultation.process?.map((step, index) => (
                        <li key={index} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-[#f8f8f8] border border-[#f0e0e0] rounded-lg p-6 sticky top-4">
                    <h3 className="text-lg font-bold text-[#5a0808] mb-4">
                      Consultation Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{consultation.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-[#8b1e1e]">
                          ₹{consultation.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <a
                        href={`tel:+919876543210`}
                        className="w-full bg-gradient-to-r from-[#5a0808] to-[#8b1e1e] hover:from-[#8b1e1e] hover:to-[#5a0808] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <FaPhoneAlt className="mr-2" />
                        Call to Book Now
                      </a>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium text-[#5a0808] mb-2">
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {consultation.whatYouGet.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0 text-sm" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              {consultation.faqs && consultation.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-[#5a0808] font-serif mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {consultation.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-[#f0e0e0] pb-4">
                        <h3 className="font-medium text-[#5a0808] mb-1">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return consultations.map((consultation) => ({
    slug: consultation.slug,
  }));
}