import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    metalType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours with a competitive quote.",
    });
    setFormData({ name: "", email: "", phone: "", metalType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Ready to Sell Your Scrap?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get a free quote today. Whether you have a truckload or a small amount, we're here to help you turn that scrap into cash.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Visit Our Yard</h4>
                  <p className="text-muted-foreground">1234 Industrial Blvd, Steel City, SC 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">info@ironcladscrap.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri: 7AM-6PM | Sat: 8AM-2PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <h3 className="font-display text-2xl text-foreground mb-6">Get a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Your Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Phone Number *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-card border-border"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Type of Metal</label>
                <Input
                  name="metalType"
                  value={formData.metalType}
                  onChange={handleChange}
                  placeholder="e.g., Copper wire, Steel beams, Mixed metals"
                  className="bg-card border-border"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Additional Details</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your scrap metal, estimated quantity, and if you need pickup service..."
                  rows={4}
                  className="bg-card border-border"
                />
              </div>

              <Button variant="hero" size="xl" className="w-full" type="submit">
                Request Quote
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
