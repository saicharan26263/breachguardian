
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    serviceInterest: "soc" // Default selection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY");
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service_interest: formData.serviceInterest,
        message: formData.message,
        // Note: Do not include to_email here as it should be configured in the EmailJS template
      };
      
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Update with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Update with your EmailJS template ID
        templateParams
      );
      
      console.log("Email sent successfully:", result);
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out! We'll get back to you shortly.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        serviceInterest: "soc"
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-breach-100 filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Contact us for pricing information or to discuss your security needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-8 animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-breach-100 text-breach-700">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-breach-700 hover:text-breach-800 transition-colors">
                      <a href="mailto:contact@breachhunters.com">contact@breachhunters.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-breach-100 text-breach-700">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-breach-700 hover:text-breach-800 transition-colors">
                      <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-breach-50 rounded-xl p-6 border border-breach-100">
                <h4 className="font-medium mb-2">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-breach-200 focus:border-breach-500 focus:ring-2 focus:ring-breach-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-breach-200 focus:border-breach-500 focus:ring-2 focus:ring-breach-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-breach-200 focus:border-breach-500 focus:ring-2 focus:ring-breach-200 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium mb-2">Interested In</label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-breach-200 focus:border-breach-500 focus:ring-2 focus:ring-breach-200 outline-none transition-all"
                  >
                    <option value="soc">Security Operations Center</option>
                    <option value="breach">Breach Simulation</option>
                    <option value="pentest">Penetration Testing</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-breach-200 focus:border-breach-500 focus:ring-2 focus:ring-breach-200 outline-none transition-all"
                  placeholder="Tell us about your security needs or request pricing information..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-breach-600 hover:bg-breach-700 text-white px-8 py-6 text-lg w-full md:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
