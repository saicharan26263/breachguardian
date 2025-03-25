
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl md:text-2xl font-bold text-breach-950"
        >
          <img 
            src="/lovable-uploads/5e99844c-35e3-4e2f-90f4-559c17b2d6f3.png" 
            alt="BreachHunters Logo"
            className="h-10 w-auto"
          />
          <span>BreachHunters</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-breach-700 transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-breach-700 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-breach-700 transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-breach-600 hover:bg-breach-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            Get Pricing
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 pt-20 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      >
        <div className="container flex flex-col items-center gap-8 py-10">
          <button
            onClick={() => scrollToSection("services")}
            className="text-xl font-medium py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-xl font-medium py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xl font-medium py-2"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-breach-600 hover:bg-breach-700 text-white w-full mt-4"
          >
            Get Pricing
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
