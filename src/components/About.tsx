
import { ShieldCheck, Zap, Users, Lock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-breach-50/50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-breach-200 filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company Description */}
          <div className="animate-fade-in-right">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-breach-100 text-breach-800">
              <ShieldCheck size={16} />
              <span className="text-sm font-medium">About BreachHunters</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Cutting-Edge Cybersecurity For Businesses Of All Sizes
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                BreachHunters is a cutting-edge cybersecurity company dedicated to protecting businesses from ever-evolving cyber threats. We specialize in Security Operations Center (SOC) services, penetration testing (PenTesting), and breach simulation, ensuring that your company's websites, networks, and systems are resilient against attacks.
              </p>
              <p>
                Our experts conduct real-world attack simulations to identify vulnerabilities before malicious actors can exploit them. In addition to testing security defenses, we provide threat advisory services, keeping businesses informed about the latest cyber threats and best practices.
              </p>
              <p>
                Understanding that many organizations lack the technical expertise or budget to implement robust security measures, we strive to offer cost-effective cybersecurity solutions tailored to companies of all sizes.
              </p>
              <p>
                At BreachHunters, our mission is to empower businesses with proactive security strategies, helping them stay ahead of cybercriminals. Whether you're a startup or an established enterprise, our team ensures that your digital assets remain protected with top-tier security solutions at an affordable price.
              </p>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-left">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-breach-100 text-breach-700 mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proactive Protection</h3>
              <p className="text-muted-foreground">
                We identify and address vulnerabilities before they can be exploited by malicious actors.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-breach-100 text-breach-700 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our security professionals have extensive experience in cybersecurity and threat intelligence.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-breach-100 text-breach-700 mb-4">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                We develop custom security strategies that address your specific business needs and risks.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-breach-100 text-breach-700 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Security</h3>
              <p className="text-muted-foreground">
                Enterprise-grade protection at price points accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
