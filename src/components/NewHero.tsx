import { ArrowRight, Droplets, Sparkles, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wash.jpg";

const NewHero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional car washing"
          className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--dark-surface))]/95 via-[hsl(var(--dark-surface))]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-surface))] via-transparent to-transparent" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary/20 blur-xl animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-secondary/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-secondary/30 mb-8 animate-slide-in-left">
            <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
            <span className="text-primary-foreground text-base font-bold tracking-wide">
              ★ Premium Auto Care Service ★
            </span>
          </div>

          {/* Main Heading with Staggered Animation */}
          <h1 className="text-6xl md:text-8xl font-black text-primary-foreground mb-6 leading-none">
            <span className="block animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              Your Vehicle
            </span>
            <span className="block text-secondary animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              Our Pride
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-10 leading-relaxed font-medium animate-fade-in-up max-w-3xl" style={{ animationDelay: "0.6s" }}>
            Complete Auto Service Solutions — Professional Washing, Expert Repairs & Maintenance in Mendarda
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-10 py-7 group shadow-2xl hover:shadow-secondary/50 hover:scale-105 transition-all font-bold"
              onClick={() => scrollToSection("#contact")}
            >
              <Phone className="mr-3 h-6 w-6" />
              Book Service Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-xl px-10 py-7 backdrop-blur-sm font-bold"
              onClick={() => scrollToSection("#services")}
            >
              <Car className="mr-3 h-6 w-6" />
              Our Services
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t-2 border-primary-foreground/20">
            {[
              { number: "10+", label: "Years", icon: "⭐" },
              { number: "5000+", label: "Vehicles", icon: "🚗" },
              { number: "100%", label: "Satisfaction", icon: "✓" },
              { number: "24/7", label: "Support", icon: "📞" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-110 transition-transform cursor-default animate-scale-in"
                style={{ animationDelay: `${1 + index * 0.15}s` }}
              >
                <div className="text-5xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-secondary mb-2 group-hover:text-primary-foreground transition-colors">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg text-primary-foreground/80 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Car Icon */}
      <div className="absolute bottom-20 right-10 animate-slide-in-right hidden xl:block" style={{ animationDelay: "1.2s" }}>
        <Car className="h-32 w-32 text-secondary/30" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <Droplets className="h-8 w-8 text-secondary animate-pulse" />
          <div className="text-primary-foreground/60 text-sm font-semibold tracking-widest">SCROLL</div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
