import Hero from '@/components/Home/hero';
import Services from '@/components/Home/services';
import Review from '@/components/Home/testimonial';
import AboutAstrologer from '@/components/Home/about';
import Rashi from '@/components/Home/rashi';
import Achievements from '@/components/Home/achivment';
import Blog from '@/components/Home/blog';
import FAQ from '@/components/Home/FAQ';
import NemurologySection from '@/components/Home/nemurology';
import NumberSelector from '@/components/Home/NumerologyNo';
import RamayanaBanner from '@/components/Home/ram-ravan';
import PhysicalKundaliBanner from '@/components/Home/physicalkundali';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astroank | Best Astrologer in Ujjain - Astrology & Numerology Services',
  description:
    'Discover expert astrology and numerology services by Astrologer Deepak Goutam at Astroank in Ujjain. Get personalized Kundali, horoscope, and numerology insights.',
  keywords: [
    'Best Astrologer in Ujjain',
    'Top Rated Astrologer in Ujjain',
    'Best Astrologer in India',
    'Astroank',
    'AstroTime',
    'Astrologer Deepak Goutam',
    'Ujjain Numerology',
    'Future Prediction Astrologer Ujjain',
    'Accurate Kundli Analysis Ujjain',
    'Ujjain Astrologer for Love and Relationships',
    'Fortune Telling Astrologer Ujjain',
    'Best Numerologist in Ujjain',
    'Top Astrologer in Ujjain',
    'Online Astrology Services',
    'Astroank Astrology Services',
    'AstroTime Astrology Services',
    'Vedic Astrology Ujjain',
    'Horoscope Reading Ujjain',
    'Astrology Consultation India',
    'Marriage Compatibility Ujjain',
    'Vastu Consultation Ujjain',
    'Career Astrology Ujjain',
    'Jyotish Services Ujjain',
    'Online Kundli Ujjain',
    'Astrology Experts Ujjain',
    'Personalized Astrology Remedies',
    'Kundali Milan Ujjain',
    'Numerology Consultation Ujjain',
    'Vedic Chart Analysis Ujjain',
    'Astrology for Success Ujjain',
    'Ramayana Astrology Insights',
    'Physical Kundali Ujjain',
  ],
  authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Astroank | Best Astrologer in Ujjain - Astrology & Numerology Services',
    description:
      'Consult Astrologer Deepak Goutam at Astroank in Ujjain for expert astrology and numerology services, including Kundali analysis, horoscope readings, and personalized remedies.',
    url: 'http://astroank.com',
    type: 'website',
    images: [
      {
        url: 'http://astroank.com/images/astroank-home.jpg', // Replace with actual homepage image URL
        width: 1200,
        height: 630,
        alt: 'Astroank Astrology & Numerology Services',
      },
    ],
    siteName: 'Astroank',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astroank | Best Astrologer in Ujjain - Astrology & Numerology Services',
    description:
      'Discover Astroank’s expert astrology and numerology services in Ujjain by Astrologer Deepak Goutam, offering Kundali, horoscope, and personalized insights.',
    images: ['http://astroank.com/images/astroank-home.jpg'], // Replace with actual homepage image URL
  },
  alternates: {
    canonical: 'http://astroank.com',
    languages: {
      'en-US': 'http://astroank.com',
    },
  },
};

export default function Home() {
  return (
    <div className="bg-[#FCFAF8]">
      <Hero />
      <Services />
      <PhysicalKundaliBanner />
      <RamayanaBanner />
      <AboutAstrologer />
      <Achievements />
      <Rashi />
      <NemurologySection />
      <NumberSelector />
      <Review />
      <Blog />
      <FAQ />
    </div>
  );
}