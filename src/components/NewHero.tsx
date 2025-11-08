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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional car washing"
          className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80" />
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
      <div className="container mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10 flex justify-center items-center">
        <div className="max-w-5xl text-center">
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white animate-slide-in-left relative" style={{ animationDelay: "0.2s" }}>
              <span className="relative inline-block">
                Your Vehicle
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </span>
            <span className="block text-secondary animate-slide-in-right mt-3" style={{ animationDelay: "0.4s" }}>
              Our Pride
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-medium animate-fade-in-up mx-auto max-w-3xl" style={{ animationDelay: "0.6s" }}>
            Complete Auto Service Solutions — Professional Washing, Expert Repairs & Maintenance in Mendarda
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-fade-in-up justify-center" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-10 py-7 group shadow-lg hover:shadow-secondary/50 hover:scale-105 transition-all font-semibold rounded-xl"
              onClick={() => scrollToSection("#contact")}
            >
              <Phone className="mr-3 h-6 w-6" />
              Book Service Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-white/10 hover:bg-secondary text-white text-xl px-10 py-7 group shadow-lg hover:shadow-secondary/50 hover:scale-105 transition-all font-semibold backdrop-blur-sm border border-white/20 rounded-xl"
              onClick={() => scrollToSection("#services")}
            >
              <Car className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Our Services
              <ArrowRight className="ml-3 h-6 w-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-2 border-t border-white/10">
            {[
              { number: "6+", label: "Years", icon: "⭐" },
              { number: "1267+", label: "Vehicles", icon: "🚗" },
              { number: "100%", label: "Satisfaction", icon: "✓" },
              { number: "24/7", label: "Support", icon: "📞" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-all duration-500 cursor-default animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-secondary/10"
                style={{ animationDelay: `${1 + index * 0.15}s` }}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce bg-gradient-to-br from-white/10 to-white/5 w-14 h-14 rounded-xl flex items-center justify-center mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 group-hover:text-white transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wide">
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
