import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";
import TrustedLogos from "@/components/sections/TrustedLogos";
import Problem from "@/components/sections/Problem";
import GrowthFramework from "@/components/sections/GrowthFramework";
import Services from "@/components/sections/Services";
import OurProcess from "@/components/sections/OurProcess";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Commitment from "@/components/sections/Commitment";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import NewbrookMethod from "@/components/sections/NewbrookMethod";
import GrowthJourney from "@/components/sections/GrowthJourney";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <OurProcess />
      <NewbrookMethod />
      <GrowthJourney />
      <TrustedLogos />
      <Problem />
      <GrowthFramework />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Commitment />
<FAQ />
<FinalCTA />
<Footer />
<Process />
    </>
  );
}