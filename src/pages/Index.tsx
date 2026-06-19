import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import GrainBackground from "@/components/GrainBackground";

const Index = () => {
  return (
    <main className="relative">
      <GrainBackground />
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </main>
  );
};

export default Index;
