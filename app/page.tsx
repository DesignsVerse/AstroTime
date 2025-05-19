import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Integrations } from "@/components/sections/integrations";
import  Solutions  from "@/components/sections/solutions";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import  Card  from "@/components/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Integrations />
      <Card/>
      <Solutions />
      <Features />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}