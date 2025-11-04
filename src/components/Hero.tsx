import { ArrowRight, Droplets, Wrench, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wash.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional car washing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark-surface))]/95 via-[hsl(var(--dark-surface))]/80 to-[hsl(var(--dark-surface))]/60" />
      </div>

      {/* Animated Water Droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-water-splash opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Droplets className="text-primary-foreground h-8 w-8" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20 mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">
              Premium Auto Care Since Years
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Vehicle,
            <br />
            <span className="text-secondary">Our Care</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Complete Auto Service Under One Roof — Professional washing, repair, and maintenance
            for cars, bikes, trucks, tractors & more in Mendarda, Junagadh
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 group"
              onClick={() => scrollToSection("#contact")}
            >
              Book Service Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              onClick={() => scrollToSection("#services")}
            >
              <Wrench className="mr-2 h-5 w-5" />
              View Services
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
            {[
              { number: "5000+", label: "Vehicles Serviced" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-count-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
