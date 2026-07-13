import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import WhyNewbrook from "@/components/services/WhyNewbrook";
import Industries from "@/components/services/Industries";
import TechnologyStack from "@/components/services/TechnologyStack";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServiceCategories />
        <WhyNewbrook />
        <Industries />
        <TechnologyStack />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}