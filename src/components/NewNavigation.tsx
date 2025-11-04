import { useState, useEffect } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const NewNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/50"
            : "bg-gradient-to-b from-[hsl(var(--dark-surface))]/90 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Much Bigger */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <img 
                src={logo} 
                alt="Somnath Auto Service Station" 
                className="h-20 w-auto drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer" 
                onClick={() => scrollToSection("#home")}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-base font-semibold transition-all duration-300 hover:text-secondary relative group ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                onClick={() => scrollToSection("#contact")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            <img src={logo} alt="Logo" className="h-24 w-auto mb-8" />
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl text-foreground hover:text-secondary transition-all font-bold animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </button>
            ))}
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-8 text-xl px-12 py-6"
              onClick={() => scrollToSection("#contact")}
            >
              <Phone className="mr-2 h-6 w-6" />
              Book Service
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNavigation;
