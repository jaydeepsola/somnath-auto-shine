import { Droplets, Wrench, Wind, Sparkles, Truck, Bike } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const animationClasses = [
    "opacity-0 -translate-y-20",
    "opacity-0 translate-x-20",
    "opacity-0 -translate-x-20",
    "opacity-0 translate-y-20",
    "opacity-0 -translate-y-20 translate-x-20",
    "opacity-0 translate-y-20 -translate-x-20",
  ];

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : animationClasses[index % 6]
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-border/50 hover:border-secondary/50 overflow-hidden bg-card/50 backdrop-blur-sm h-full">
        <CardContent className="p-8">
          {/* Animated Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-secondary/30 group-hover:to-primary/30 w-20 h-20 rounded-3xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6">
              <service.icon className="h-10 w-10 text-secondary group-hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:animate-pulse" />
                <span className="group-hover:text-secondary transition-colors">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Hover Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </CardContent>
      </Card>
    </div>
  );
};

const NewServices = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  const services = [
    {
      icon: Droplets,
      title: "Premium Car Wash",
      description: "Professional exterior & interior detailing with eco-friendly products and advanced foam technology.",
      features: ["Foam Wash", "High-Pressure Jet", "Wax Polish", "Undercarriage Clean"],
    },
    {
      icon: Bike,
      title: "Bike Detailing",
      description: "Expert motorcycle washing and detailing service. Chain cleaning, body polish, and engine care.",
      features: ["Chain Cleaning", "Body Polish", "Engine Wash", "Chrome Shine"],
    },
    {
      icon: Wrench,
      title: "Mechanical Repair",
      description: "Complete mechanical services with experienced technicians. Engine, transmission, brakes, and diagnostics.",
      features: ["Engine Repair", "Brake Service", "Oil Change", "Full Diagnostics"],
    },
    {
      icon: Wind,
      title: "AC Service",
      description: "Complete AC repair and maintenance. Gas refilling, filter cleaning, and cooling system optimization.",
      features: ["Gas Refilling", "Filter Cleaning", "Compressor Fix", "Duct Service"],
    },
    {
      icon: Sparkles,
      title: "Interior Detailing",
      description: "Deep interior cleaning with seat shampooing, dashboard polish, carpet cleaning, and odor elimination.",
      features: ["Seat Shampoo", "Dashboard Polish", "Carpet Deep Clean", "Odor Removal"],
    },
    {
      icon: Truck,
      title: "Heavy Vehicle Service",
      description: "Specialized washing and maintenance for trucks, tractors, harvesters, and commercial vehicles.",
      features: ["Heavy Duty Wash", "Engine Service", "Tire Maintenance", "Body Polish"],
    },
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-secondary font-bold text-lg tracking-widest uppercase">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Premium <span className="text-secondary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive automotive care solutions delivered by skilled professionals with state-of-the-art equipment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
