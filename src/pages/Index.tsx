
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import SkillsShowcase from "../components/SkillsShowcase";
import Navbar from "../components/Navbar";
import ImagePortionSlider from "../components/ImagePortionSlider";
import HiddenContactForm from "../components/HiddenContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <SkillsShowcase />
      <ImagePortionSlider />
      <HiddenContactForm />
      <Footer />
    </div>
  );
};

export default Index;
