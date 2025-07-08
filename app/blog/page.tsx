"use client"
import { Merriweather, Montserrat } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '@/data/blogData';
import { FiClock, FiArrowRight, FiSearch, FiStar } from 'react-icons/fi';
import { useState } from 'react';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogData.map(post => post.category)))]

  // Filter posts based on search and category
  const filteredPosts = blogData.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Astrology Blog & Articles</title>
        <meta name="description" content="Explore our collection of in-depth astrology articles, spiritual insights, and cosmic wisdom from our expert astrologers" />
      </Head>

      <div className="bg-[#FCFAF8]">
        <section className={`${merriweather.className} relative text-[#1a2238] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24`}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
          </div>

          {/* Section Header */}
          <div className="flex flex-col items-center mb-12 md:mb-20">
            <div className="flex justify-center items-center space-x-4 mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
              <div className="text-[#800000] text-2xl md:text-3xl select-none">✻</div>
              <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
            </div>
            <h2 className={`${montserrat.className} text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight`}>
              Astrology <span className="text-[#800000]">Blog & Articles</span>
            </h2>
            <p className={`${montserrat.className} text-[#6b6b7b] max-w-2xl text-center text-base md:text-lg leading-relaxed`}>
              Dive into our collection of insightful articles and cosmic wisdom from our master astrologers
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className={`${montserrat.className} block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent`}
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${montserrat.className} px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-[#800000] text-white' : 'bg-white text-[#800000] border border-[#800000] hover:bg-[#800000]/10'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {blogData.some(post => post.featured) && (
            <div className="mb-16">
              <h3 className={`${montserrat.className} flex items-center text-xl font-bold mb-6 text-[#800000]`}>
                <FiStar className="mr-2" /> Featured Article
              </h3>
              {blogData.filter(post => post.featured).map(featuredPost => (
                <div key={featuredPost.id} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <Image
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        fill
                        src={featuredPost.image}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 flex items-center">
                        <span className="text-white px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: featuredPost.categoryColor }}>
                          {featuredPost.category}
                        </span>
                        <span className="ml-2 text-white text-sm bg-black/30 px-2 py-1 rounded">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 mr-3">
                          <Image
                            className="h-10 w-10 rounded-full object-cover"
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <p className={`${montserrat.className} text-sm font-medium text-gray-900`}>{featuredPost.author.name}</p>
                          <p className="text-xs text-gray-500">{featuredPost.date}</p>
                        </div>
                      </div>
                      <h3 className={`${montserrat.className} text-2xl font-bold mb-3`}>{featuredPost.title}</h3>
                      <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags?.map(tag => (
                          <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-[#800000] border border-[#800000] hover:bg-[#800000] hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-300"
                      >
                        Read Featured Article
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="relative h-60 sm:h-72 overflow-hidden">
                  <Image
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    src={post.image}
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#FFD700] font-semibold text-sm sm:text-base mb-2">{post.date}</p>
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-3">{post.title}</h3>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-white border border-white/50 hover:border-[#FFD700] hover:text-[#FFD700] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300"
                        aria-label={`Read more about ${post.title}`}
                      >
                        Read Article
                        <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold" style={{ backgroundColor: post.categoryColor }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 mr-2">
                      <Image
                        className="h-8 w-8 rounded-full object-cover"
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <p className={`${montserrat.className} text-xs font-medium text-gray-900`}>{post.author.name}</p>
                    </div>
                  </div>
                  <h3 className={`${montserrat.className} text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#800000] transition-colors duration-300`}>
                    {post.title}
                  </h3>
                  <p className="text-[#6b6b7b] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-[#800000] text-sm sm:text-base font-semibold hover:underline flex items-center gap-1 sm:gap-2 group"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More 
                      <FiArrowRight className="text-xs sm:text-sm transition-transform group-hover:translate-x-1 duration-300" />
                    </Link>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <FiClock className="mr-1" /> {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className={`${montserrat.className} text-xl font-bold text-[#800000] mb-4`}>No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#600000] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}