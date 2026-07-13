import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import OurProcess from "@/components/portfolio/OurProcess";
import Results from "@/components/portfolio/Results";
import Industries from "@/components/portfolio/Industries";
import Testimonials from "@/components/portfolio/Testimonials";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
  <PortfolioHero />
  <FeaturedProjects />
  <OurProcess />
  <Results />
  <Industries />
  <Testimonials />
  <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}