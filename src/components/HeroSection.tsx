import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Trusted Since 1985</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We Buy Your
            <span className="block text-gradient">Scrap Metal</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Top dollar for your ferrous and non-ferrous metals. Fast pickup, fair scales, and same-day payment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Prices
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">$50M+</p>
                <p className="text-muted-foreground text-sm">Paid Out</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">500+</p>
                <p className="text-muted-foreground text-sm">Daily Pickups</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">40+</p>
                <p className="text-muted-foreground text-sm">Years Trusted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
