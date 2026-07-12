import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const subject = `Contact Form Submission from ${data.company}`;
    const body = `
Hello,

I would like to get in touch regarding Channex integration.

Name: ${data.firstName} ${data.lastName}
Company: ${data.company}
Email: ${data.email}

Message:
${data.message}

Best regards,
${data.firstName} ${data.lastName}
    `.trim();
    
    const mailtoLink = `mailto:hello@channex.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_self');
    
    toast({
      title: "Opening email client...",
      description: "Your default email application should open with the message pre-filled.",
    });
    
    reset();
  };

  return (
    <Card className="border-border/50 shadow-elegant">
      <CardContent className="p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-foreground font-inter">
            Start Your Integration
          </h3>
          <p className="text-muted-foreground font-inter">
            Get in touch with our team to begin your channel manager integration.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground font-inter">
                First Name *
              </label>
              <Input
                {...register("firstName", { required: "First name is required" })}
                placeholder="John"
                className="border-border/50 focus:border-primary/50 font-inter"
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground font-inter">
                Last Name *
              </label>
              <Input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Doe"
                className="border-border/50 focus:border-primary/50 font-inter"
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground font-inter">
              Company Email *
            </label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              placeholder="john@company.com"
              className="border-border/50 focus:border-primary/50 font-inter"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground font-inter">
              Company Name *
            </label>
            <Input
              {...register("company", { required: "Company name is required" })}
              placeholder="Your PMS Company"
              className="border-border/50 focus:border-primary/50 font-inter"
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground font-inter">
              Message *
            </label>
            <Textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Tell us about your integration needs..."
              rows={4}
              className="border-border/50 focus:border-primary/50 font-inter resize-none"
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;