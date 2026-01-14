import { Truck, Scale, Banknote, Leaf, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Certified Scales",
    description: "State-certified scales ensure you get accurate weights and fair payment for every load.",
  },
  {
    icon: Banknote,
    title: "Same-Day Payment",
    description: "Get paid on the spot with cash or check. No waiting, no hassle.",
  },
  {
    icon: Truck,
    title: "Free Pickup",
    description: "Large loads? We'll come to you with our fleet of trucks and containers.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Responsible recycling practices that help protect our environment.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "In and out in minutes. We respect your time with efficient processing.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed metal recycler with comprehensive insurance coverage.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              The Scrap Yard You Can Trust
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              For over 40 years, Ironclad has been the region's most trusted name in metal recycling. 
              We combine old-fashioned integrity with modern efficiency to give you the best experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-10 glow-amber">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-background rounded-xl">
                  <p className="font-display text-5xl text-primary mb-2">40+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Years in Business</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <p className="font-display text-5xl text-primary mb-2">15K+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <p className="font-display text-5xl text-primary mb-2">100K</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Tons Recycled</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <p className="font-display text-5xl text-primary mb-2">A+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">BBB Rating</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 inset-4 bg-primary/5 rounded-2xl transform rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
