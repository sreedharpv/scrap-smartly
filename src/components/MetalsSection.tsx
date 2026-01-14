import { Layers, Zap, CircleDollarSign, Pickaxe, Settings, Droplets } from "lucide-react";

const metals = [
  {
    name: "Steel & Iron",
    description: "Structural steel, rebar, sheet metal, cast iron, and all ferrous metals.",
    icon: Layers,
    price: "Up to $250/ton",
  },
  {
    name: "Copper",
    description: "Wire, tubing, pipes, transformers, motors, and all copper grades.",
    icon: Zap,
    price: "Up to $3.50/lb",
  },
  {
    name: "Aluminum",
    description: "Cans, siding, wheels, extrusions, and all aluminum alloys.",
    icon: Droplets,
    price: "Up to $0.85/lb",
  },
  {
    name: "Brass",
    description: "Fittings, valves, plumbing fixtures, and decorative items.",
    icon: CircleDollarSign,
    price: "Up to $1.80/lb",
  },
  {
    name: "Stainless Steel",
    description: "Food grade, industrial equipment, and surgical steel.",
    icon: Settings,
    price: "Up to $0.65/lb",
  },
  {
    name: "Mixed Metals",
    description: "Lead, zinc, nickel, and other specialty metals.",
    icon: Pickaxe,
    price: "Competitive Rates",
  },
];

const MetalsSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Buy</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-4">
            We Accept All Metals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From small loads to industrial quantities, we offer competitive pricing for all types of scrap metal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metals.map((metal, index) => (
            <div
              key={metal.name}
              className="group relative bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(35_92%_50%/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <metal.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{metal.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{metal.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-semibold">{metal.price}</span>
                <span className="text-muted-foreground text-sm">Updated Daily</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetalsSection;
