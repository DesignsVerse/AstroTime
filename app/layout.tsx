// app/layout.tsx
import './globals.css';
import { Merriweather, Open_Sans } from 'next/font/google';
import ClientLayout from './clientlayout';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <body className={`${openSans.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
