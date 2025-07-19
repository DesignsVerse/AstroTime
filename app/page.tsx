import Hero from '@/components/Home/hero';
import ComponentStore from '@/components/Home/stone';
import Services from '@/components/Home/services';
import News from '@/components/Home/blog';
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

export default function Home() {
  return (
    <div className="bg-[#FCFAF8]">
      <Hero />
      <Services/>
      <PhysicalKundaliBanner/>
      <RamayanaBanner/>
      <AboutAstrologer/>
      <Achievements/> 
      <Rashi/>
      <NemurologySection/>
      <NumberSelector/>
      <Review/>
      <Blog/>
      <FAQ/>
    </div>
  );
}