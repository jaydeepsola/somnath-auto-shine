import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { processLogoRemoveBg } from "@/utils/removeLogoBg";

const NewNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [processedLogo, setProcessedLogo] = useState<string>(logo);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Process logo to remove background
    processLogoRemoveBg(logo)
      .then(url => setProcessedLogo(url))
      .catch(err => console.error('Failed to process logo:', err));
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
            ? "bg-white shadow-2xl border-b border-border/50"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Much Bigger */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <img 
                src={processedLogo} 
                alt="Somnath Auto Service Station" 
                className="h-24 w-auto drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer" 
                onClick={() => scrollToSection("#home")}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-base font-semibold text-black/80 transition-all duration-500 relative group hover:text-secondary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full group-hover:left-0" />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-1 h-1 rounded-full bg-secondary scale-0 transition-transform duration-500 group-hover:scale-100" />
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
              className="lg:hidden transition-colors text-black/80 hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            <img src={processedLogo} alt="Logo" className="h-28 w-auto mb-8" />
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl text-black/80 hover:text-secondary transition-all duration-500 font-bold animate-slide-in-right relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-secondary/50 transition-all duration-500 group-hover:w-full rounded-full" />
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
