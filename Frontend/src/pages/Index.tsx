import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { B2CSolutions } from "@/components/B2CSolutions";
import { D2CServices } from "@/components/D2CServices";
import { Marketplace } from "@/components/Marketplace";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <B2CSolutions />
      <D2CServices />
      <Marketplace />
      <Footer />
    </div>
  );
};

export default Index;
