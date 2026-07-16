import Hero from "@/components/hero/Hero";
import TrustedLogos from "@/components/sections/TrustedLogos";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StrategySession from "@/components/sections/StrategySession";
import Process from "@/components/sections/Process";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import NewbrookPromise from "@/components/sections/NewbrookPromise";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      <Hero />

      <TrustedLogos />

      <Services />

      <WhyChooseUs />

      <Process />

      <FeaturedProjects />

      {/* New Section */}
      <NewbrookPromise />

      <StrategySession />

      <FAQ />

      <FinalCTA />

    </main>
  );
}