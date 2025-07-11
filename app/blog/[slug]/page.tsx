import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '@/data/blogData';
import { FiClock, FiArrowLeft } from 'react-icons/fi';

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

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Vedic Astrology Blog',
    };
  }

  return {
    title: `${post.title} | Vedic Astrology Blog`,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug);
  const relatedPosts = blogData.filter(p => p.id !== post?.id).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FCFAF8]">
        <div className="text-center">
          <h1 className={`${montserrat.className} text-2xl md:text-4xl font-bold text-[#800000] mb-4`}>
            Post Not Found
          </h1>
          <Link 
            href="/blog" 
            className={`${montserrat.className} text-[#800000] hover:underline flex items-center justify-center gap-2`}
          >
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section className={`${merriweather.className} relative text-[#1a2238]`}>
              {/* Article Header */}
              <div className="mb-8 md:mb-12">
                <div className="flex justify-center items-center space-x-4 mb-6 md:mb-8">
                  <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
                  <div className="text-[#800000] text-2xl md:text-3xl select-none">✻</div>
                  <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
                </div>
                
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <div>
                    <span className="text-white px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: post.categoryColor }}>
                      {post.category}
                    </span>
                    <span className="text-[#6b6b7b] text-sm ml-3">{post.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" /> {post.readTime}
                  </div>
                </div>
                
                <h1 className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight`}>
                  {post.title}
                </h1>
                
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden mb-8 md:mb-10 group">
                  <Image
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.image}
                    fill
                    quality={90}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                  />
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#800000] prose-p:text-[#1a2238] prose-ul:text-[#1a2238] prose-li:marker:text-[#800000] prose-a:text-[#800000] prose-a:underline hover:prose-a:no-underline mb-16">
                {post.content.sections.map((section, index) => (
                  <section key={index} className="mb-12 last:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      {section.heading}
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                      {section.description}
                    </p>
                  </section>
                ))}

                {post.content.lists.map((list, listIndex) => (
                  <div key={listIndex} className="bg-[#f8e1e1] p-6 rounded-lg mb-8 border-l-4 border-[#800000]">
                    <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${montserrat.className}`}>
                      {list.title}
                    </h3>
                    <ul className="space-y-3 pl-5">
                      {list.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>

              {/* CTA Section */}
              <div className="bg-[#800000] text-white rounded-xl p-8 md:p-10 mb-12 text-center">
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold mb-4`}>
                  Ready for Your Personal Astrology Reading?
                </h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Unlock the secrets of your birth chart with a personalized consultation from our expert astrologers.
                </p>
                <Link
                  href="/call-consultation"
                  className={`${montserrat.className} inline-block bg-white text-[#800000] font-bold px-8 py-3 rounded-full hover:bg-[#f8e1e1] transition-colors`}
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-12">
                  <h3 className={`${montserrat.className} text-lg font-semibold text-[#800000] mb-4`}>
                    Related Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog?search=${tag}`}
                        className="bg-[#f8e1e1] text-[#800000] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#800000] hover:text-white transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Section */}
              <div className="mt-12 md:mt-16 bg-white rounded-xl shadow-md p-6 md:p-8 border border-[#f8e1e1]">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#f8e1e1]">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className={`${montserrat.className} text-xl font-bold text-[#800000]`}>
                      {post.author.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.author.bio}</p>
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <div className="mt-12 md:mt-16 text-center">
                <Link 
                  href="/blog" 
                  className={`${montserrat.className} inline-flex items-center text-[#800000] font-semibold hover:underline gap-2 text-lg`}
                >
                  <FiArrowLeft /> Back to All Articles
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar - Related Posts */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-[#f8e1e1]">
                <h3 className={`${montserrat.className} text-xl font-bold text-[#800000] mb-6 pb-2 border-b border-[#f8e1e1]`}>
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map(post => (
                    <Link 
                      key={post.id} 
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-4"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h4 className={`${montserrat.className} font-semibold group-hover:text-[#800000] transition-colors`}>
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8e1e1] p-6 rounded-xl">
                <h3 className={`${montserrat.className} text-xl font-bold text-[#800000] mb-4`}>
                  Newsletter
                </h3>
                <p className="mb-4">
                  Get weekly astrology insights and cosmic guidance delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-lg border border-[#800000]/30 focus:outline-none focus:ring-2 focus:ring-[#800000]"
                    required
                  />
                  <button 
                    type="submit"
                    className={`${montserrat.className} w-full bg-[#800000] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#600000] transition-colors`}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}