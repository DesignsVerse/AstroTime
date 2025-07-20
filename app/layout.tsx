import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather, Open_Sans } from 'next/font/google';
import Header from '@/components/Home/header';
import Footer from '@/components/Home/footer';

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: {
    default: 'Astroank | Best Astrologer in Ujjain - Astrology & Numerology',
    template: '%s | Astroank',
  },
  description:
    'Consult Astrologer Deepak Goutam at Astroank in Ujjain for expert astrology and numerology services, including Kundali analysis, horoscope readings, and personalized remedies.',
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
  ],
  authors: [{ name: 'Astroank', url: 'http://astroank.com' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Astroank | Best Astrologer in Ujjain - Astrology & Numerology',
    description:
      'Discover Astroank’s expert astrology and numerology services in Ujjain by Astrologer Deepak Goutam, offering Kundali, horoscope, and personalized insights.',
    url: 'http://astroank.com',
    type: 'website',
    images: [
      {
        url: 'http://astroank.com/images/astroank-home.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Astroank Astrology & Numerology Services',
      },
    ],
    siteName: 'Astroank',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astroank | Best Astrologer in Ujjain - Astrology & Numerology',
    description:
      'Consult Astrologer Deepak Goutam at Astroank in Ujjain for expert astrology and numerology services, including Kundali and horoscope readings.',
    images: ['http://astroank.com/images/astroank-home.jpg'], // Replace with actual image URL
  },
  alternates: {
    canonical: 'http://astroank.com',
    languages: {
      'en-US': 'http://astroank.com',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <body className={`${openSans.className}`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}