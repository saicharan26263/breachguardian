
import { 
  ShieldCheck, 
  Eye, 
  ActivitySquare, 
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-breach-100 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-breach-100 filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Expert Services</h2>
          <p className="section-subtitle">
            Comprehensive security solutions designed to protect your business from evolving cyber threats
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* SOC Service */}
          <div className="service-card group">
            <div className="icon-wrapper group-hover:bg-breach-600 group-hover:text-white transition-colors">
              <ActivitySquare size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Security Operations Center</h3>
            <p className="text-muted-foreground mb-6">
              Our 24/7 Security Operations Center (SOC) provides continuous monitoring and threat detection to protect your digital assets.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Real-time threat monitoring and analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Incident response and management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Compliance reporting and management</span>
              </li>
            </ul>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="w-full border-breach-200 hover:bg-breach-50 text-breach-800"
            >
              Get Pricing
            </Button>
          </div>
          
          {/* Breach Simulation */}
          <div className="service-card group md:transform md:translate-y-4">
            <div className="icon-wrapper group-hover:bg-breach-600 group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Breach Simulation</h3>
            <p className="text-muted-foreground mb-6">
              We simulate real-world cyber attacks to identify vulnerabilities in your security posture before malicious actors do.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Advanced threat modeling and simulation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Custom attack scenarios tailored to your business</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Comprehensive reporting and remediation guidance</span>
              </li>
            </ul>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="w-full border-breach-200 hover:bg-breach-50 text-breach-800"
            >
              Get Pricing
            </Button>
          </div>
          
          {/* PenTesting */}
          <div className="service-card group">
            <div className="icon-wrapper group-hover:bg-breach-600 group-hover:text-white transition-colors">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Penetration Testing</h3>
            <p className="text-muted-foreground mb-6">
              Our ethical hackers find and exploit security weaknesses in your systems, providing actionable remediation steps.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Web application and network penetration testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Mobile application security assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-breach-600 shrink-0 mt-0.5" />
                <span>Cloud infrastructure security evaluation</span>
              </li>
            </ul>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="w-full border-breach-200 hover:bg-breach-50 text-breach-800"
            >
              Get Pricing
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Need a customized security solution for your business? Contact us for a personalized security assessment.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-breach-600 hover:bg-breach-700 text-white px-8 py-6 text-lg"
          >
            Contact For Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
