import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import SituationsSection from "@/components/SituationsSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BiographySection />
      <SituationsSection />
      <ProcessSection />
      <TrustSection />
      <TeamSection />
      <TestimonialsSection />
      <PartnersSection />
      <PreFooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
