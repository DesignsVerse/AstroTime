import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import ComponentStore from '@/components/sections/stone';
import Services from '@/components/sections/services';
import Footer from '@/components/sections/footer';
import News from '@/components/sections/news';
import Review from '@/components/sections/review';
import Experts from '@/components/sections/astro';
import Gems from '@/components/sections/gemstone';
import Magic from '@/components/sections/magic';
import AboutAstrologer from '@/components/sections/about';
import Rashi from '@/components/sections/Rashistone';
import Achievements from '@/components/sections/achivment';

export default function Home() {
  return (
      <>
      <Header/>
      <Hero />
      <Services/>
      <AboutAstrologer/>
      <Rashi/>
      {/* <ComponentStore/> */}
      <Achievements/>
      <Gems/>
      <Magic/>
      <Experts/>
      <Review/>
      <News/>
      <Footer/>
    </>
  );
}