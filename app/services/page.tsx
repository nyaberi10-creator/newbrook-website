import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import WhyNewbrook from "@/components/services/WhyNewbrook";
import Industries from "@/components/services/Industries";
import TechnologyStack from "@/components/services/TechnologyStack";
import { generateSEO } from "@/lib/seo";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = generateSEO({
  title: "Digital Marketing Services",

  description:
    "Explore our services including website development, SEO, paid advertising, email marketing, automation and growth consulting.",

  path: "/services",
});

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