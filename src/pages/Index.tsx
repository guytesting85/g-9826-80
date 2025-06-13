
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import ProblemStatement from "../components/ProblemStatement";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import SkillsShowcase from "../components/SkillsShowcase";
import Navbar from "../components/Navbar";
import ImagePortionSlider from "../components/ImagePortionSlider";
import HiddenContactForm from "../components/HiddenContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <ProblemStatement />
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
