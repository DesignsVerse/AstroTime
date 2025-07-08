import { Merriweather, Montserrat } from 'next/font/google';
import Head from 'next/head';
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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug);

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
    <>
      <Head>
        <title>{`${post.title} | Astrology Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Head>

      <div className="bg-[#FCFAF8]">
        <section className={`${merriweather.className} relative text-[#1a2238] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24`}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#800000]/5 rounded-full filter blur-3xl"></div>
          </div>

          {/* Article Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex justify-center items-center space-x-4 mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
              <div className="text-[#800000] text-2xl md:text-3xl select-none">✻</div>
              <div className="w-12 md:w-16 h-[2px] bg-[#800000]"></div>
            </div>
            <div className="mb-4 md:mb-6">
              <span 
                className="text-white px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: post.categoryColor }}
              >
                {post.category}
              </span>
              <span className="text-[#6b6b7b] text-sm ml-3">{post.date}</span>
            </div>
            <h1 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6`}>
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-6 md:mb-8">
              <FiClock className="mr-1" /> {post.readTime}
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden mb-8 md:mb-10">
              <Image
                alt={post.title}
                className="w-full h-full object-cover"
                src={post.image}
                fill
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
              />
            </div>
          </div>

          {/* Article Content */}
          <article className="prose max-w-none prose-lg text-[#1a2238] prose-headings:font-serif prose-headings:text-[#800000] prose-a:text-[#800000] prose-a:hover:underline prose-img:rounded-xl prose-img:shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Back Button */}
          <div className="mt-12 md:mt-16">
            <Link 
              href="/blog" 
              className={`${montserrat.className} text-[#800000] font-semibold hover:underline flex items-center gap-2 text-sm md:text-base`}
            >
              <FiArrowLeft className="text-sm" /> Back to All Articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}