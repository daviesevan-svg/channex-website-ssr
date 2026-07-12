import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
            Ready to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Get Started?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">Join hundreds of PMS providers already using Channex to connect their properties worldwide.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground font-inter">
                Get in Touch
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Our technical team is ready to help you integrate Channex with your PMS. 
                We provide comprehensive support throughout the integration process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground font-inter">Email Us</h4>
                  <p className="text-muted-foreground font-inter">hello@channex.io</p>
                  <p className="text-sm text-muted-foreground font-inter">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground font-inter">Live Chat</h4>
                  <p className="text-muted-foreground font-inter">Available 24/7</p>
                  <p className="text-sm text-muted-foreground font-inter">Fast technical support</p>
                </div>
              </div>

              
            </div>

            <div className="bg-gradient-subtle border border-border/50 rounded-lg p-6 space-y-4">
              <h4 className="font-semibold text-foreground font-inter">
                Self-Service Integration
              </h4>
              <p className="text-sm text-muted-foreground font-inter">
                Ready to start immediately? Access our staging environment and begin testing your integration today.
              </p>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/40 font-inter transition-all duration-300" onClick={() => window.open('https://staging.channex.io/', '_blank')}>
                Access Staging Environment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;