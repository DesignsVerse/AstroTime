// app/ClientLayout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Home/header';
import Footer from '@/components/Home/footer';


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCallNowPage = pathname === '/kundali-offer';

  return (
    <>
      {!isCallNowPage && <Header />}
      <main>
        {children}
      </main>
     
      {!isCallNowPage && <Footer />}
  
    </>
  );
}
