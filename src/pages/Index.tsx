
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CyberBackgroundElements from "../components/CyberBackgroundElements";
import CyberGrid from "../components/CyberGrid";

const Index = () => {
  return (
    <div className="relative">
      <CyberGrid />
      <CyberBackgroundElements />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
