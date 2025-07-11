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
  title: 'Astro Time',
  description: 'Your trusted source for astrological insights',
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
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}