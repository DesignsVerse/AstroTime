"use client"
import { Merriweather, Montserrat } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Configure fonts
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Blog() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Astrology Blog & Articles</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <meta name="description" content="Explore our collection of in-depth astrology articles, spiritual insights, and cosmic wisdom from our expert astrologers" />
      </Head>

      <div className="bg-[#FAFAFA]">
        {/* Premium Contact Bar */}
       

        {/* Premium News Section */}
        <section className={`${merriweather.className} relative bg-white text-[#1a2238] max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24`}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
          </div>

          {/* Section Header */}
          <div className="flex flex-col items-center mb-20">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-16 h-[2px] bg-[#800000]"></div>
              <div className="text-[#800000] text-3xl select-none">✻</div>
              <div className="w-16 h-[2px] bg-[#800000]"></div>
            </div>
            <h2 className={`${montserrat.className} text-center text-4xl md:text-5xl font-bold mb-6 tracking-tight`}>
              Astrology <span className="text-[#800000]">Blog & Articles</span>
            </h2>
            <p className={`${montserrat.className} text-[#6b6b7b] max-w-2xl text-center text-lg leading-relaxed`}>
              Dive into our collection of insightful articles and cosmic wisdom from our master astrologers
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Blog Item 1 */}
            <article className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                  alt="Person meditating with crystals"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  src="/ruby.png"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#FFD700] font-semibold mb-2">Jul 27, 2023</p>
                    <h3 className="text-white text-xl font-bold mb-3">Understanding Your Birth Chart</h3>
                    <button className="text-white border border-white/50 hover:border-[#FFD700] hover:text-[#FFD700] px-4 py-2 rounded-full text-sm transition-all duration-300">
                      Read Article
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#800000] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Birth Chart
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${montserrat.className} text-xl font-bold mb-3 group-hover:text-[#800000] transition-colors duration-300`}>
                  Understanding Your Birth Chart
                </h3>
                <p className="text-[#6b6b7b] mb-6 leading-relaxed">
                  A comprehensive guide to interpreting your natal chart and understanding how planetary positions influence your life path.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="#" className="text-[#800000] font-semibold hover:underline flex items-center gap-2">
                    Read More <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1 duration-300"></i>
                  </Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="far fa-clock mr-1"></i> 8 min read
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Item 2 */}
            <article className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                  alt="Crystals and tarot cards"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  src="/ruby.png"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#FFD700] font-semibold mb-2">Jul 25, 2023</p>
                    <h3 className="text-white text-xl font-bold mb-3">The Power of Crystals in Astrology</h3>
                    <button className="text-white border border-white/50 hover:border-[#FFD700] hover:text-[#FFD700] px-4 py-2 rounded-full text-sm transition-all duration-300">
                      Read Article
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#4169E1] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Crystals
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${montserrat.className} text-xl font-bold mb-3 group-hover:text-[#800000] transition-colors duration-300`}>
                  The Power of Crystals in Astrology
                </h3>
                <p className="text-[#6b6b7b] mb-6 leading-relaxed">
                  Discover how different crystals can enhance your astrological practice and amplify your spiritual energy.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="#" className="text-[#800000] font-semibold hover:underline flex items-center gap-2">
                    Read More <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1 duration-300"></i>
                  </Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="far fa-clock mr-1"></i> 10 min read
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Item 3 */}
            <article className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                  alt="Moon phases chart"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  src="/ruby.png"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#FFD700] font-semibold mb-2">Jul 22, 2023</p>
                    <h3 className="text-white text-xl font-bold mb-3">Moon Phases and Their Meanings</h3>
                    <button className="text-white border border-white/50 hover:border-[#FFD700] hover:text-[#FFD700] px-4 py-2 rounded-full text-sm transition-all duration-300">
                      Read Article
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#32CD32] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Moon
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${montserrat.className} text-xl font-bold mb-3 group-hover:text-[#800000] transition-colors duration-300`}>
                  Moon Phases and Their Meanings
                </h3>
                <p className="text-[#6b6b7b] mb-6 leading-relaxed">
                  A detailed exploration of how different moon phases affect your energy, emotions, and spiritual practice.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="#" className="text-[#800000] font-semibold hover:underline flex items-center gap-2">
                    Read More <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1 duration-300"></i>
                  </Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="far fa-clock mr-1"></i> 12 min read
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-20">
            <button className={`${montserrat.className} bg-gradient-to-r from-[#800000] to-[#A53838] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:from-[#A53838] hover:to-[#800000] group`}>
              Explore All Articles
              <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1 duration-300"></i>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}