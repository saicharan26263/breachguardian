
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-breach-200 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-breach-300 filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-breach-50 border border-breach-200 text-breach-800 mb-6">
              <ShieldCheck size={16} />
              <span className="text-sm font-medium">Advanced Cybersecurity Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Safeguarding Your Digital <br className="hidden md:block" />
              <span className="text-breach-700">Assets and Future</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
              BreachHunters provides enterprise-grade security solutions tailored for businesses of all sizes.
              Stay ahead of threats with our proactive security approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-breach-600 hover:bg-breach-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Protected Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="border-breach-200 hover:bg-breach-50 text-breach-800 px-8 py-6 text-lg"
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-breach-700 mb-2">100%</div>
              <p className="text-muted-foreground">Satisfaction Guarantee</p>
            </div>
            <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold text-breach-700 mb-2">24/7</div>
              <p className="text-muted-foreground">Security Monitoring</p>
            </div>
            <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-bold text-breach-700 mb-2">500+</div>
              <p className="text-muted-foreground">Threats Detected Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
