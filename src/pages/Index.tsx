
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import ProductShowcase from "../components/ProductShowcase";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import SkillsShowcase from "../components/SkillsShowcase";
import Navbar from "../components/Navbar";
import ImagePortionSlider from "../components/ImagePortionSlider";
import HiddenContactForm from "../components/HiddenContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <SkillsShowcase />
      <ImagePortionSlider />
      <HiddenContactForm />
    </div>
  );
};

export default Index;
