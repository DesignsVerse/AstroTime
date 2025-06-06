import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import AstrologerProfile from '@/components/sections/about';
import RashiProductPage from '@/components/sections/Rashistone';
import ComponentStore from '@/components/sections/stone';
import Services from '@/components/sections/services';
import Footer from '@/components/sections/footer';
import News from '@/components/sections/news';
import Review from '@/components/sections/review';
import Experts from '@/components/sections/astro';
import Gems from '@/components/sections/gemstone';
import Magic from '@/components/sections/magic';
import AboutAstrologer from '@/components/sections/about';

export default function Home() {
  return (
      <>
      <Header/>
      <Hero />
      <AboutAstrologer/>
      <RashiProductPage/>
      <ComponentStore/>
      <Services/>
      <Gems/>
      <Magic/>
      <Experts/>
      <Review/>
      <News/>
      <Footer/>
    </>
  );
}