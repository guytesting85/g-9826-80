
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import ProblemStatement from "../components/ProblemStatement";
import ProductShowcase from "../components/ProductShowcase";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import SkillsShowcase from "../components/SkillsShowcase";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <ProblemStatement />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <SkillsShowcase />
      <Pricing />
    </div>
  );
};

export default Index;
