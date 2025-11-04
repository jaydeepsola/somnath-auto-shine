import { Droplets, Wrench, Wind, Sparkles, Truck, Bike } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Car & Bike Washing",
      description: "Premium exterior & interior washing with eco-friendly products. Foam wash, water jet cleaning, and full body detailing.",
      features: ["Foam Wash", "High-Pressure Cleaning", "Wax Polish", "Undercarriage Wash"],
    },
    {
      icon: Wrench,
      title: "Mechanical Repair",
      description: "Expert mechanical services for all vehicle types. Engine repair, transmission, brake service, and complete diagnostics.",
      features: ["Engine Repair", "Brake Service", "Oil Change", "Diagnostics"],
    },
    {
      icon: Wind,
      title: "AC Service & Repair",
      description: "Complete AC system service, gas refilling, filter cleaning, and cooling system maintenance for comfortable drives.",
      features: ["Gas Refilling", "Filter Cleaning", "Compressor Repair", "Duct Cleaning"],
    },
    {
      icon: Sparkles,
      title: "Interior Cleaning",
      description: "Deep interior cleaning including seat shampooing, dashboard polishing, carpet cleaning, and odor removal.",
      features: ["Seat Shampooing", "Dashboard Polish", "Carpet Cleaning", "Odor Removal"],
    },
    {
      icon: Truck,
      title: "Truck & Tractor Service",
      description: "Heavy vehicle washing and maintenance. Specialized service for trucks, tractors, and commercial vehicles.",
      features: ["Heavy Wash", "Engine Service", "Tire Care", "Body Polish"],
    },
    {
      icon: Bike,
      title: "Full Body Polish",
      description: "Premium polishing services to restore your vehicle's shine. Paint correction, ceramic coating, and protection.",
      features: ["Paint Correction", "Ceramic Coating", "Scratch Removal", "Wax Protection"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive auto care solutions for all your vehicle needs. Professional service with
            guaranteed satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon with Glow Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-secondary/20 transition-colors" />
                  <div className="relative bg-primary/10 group-hover:bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
