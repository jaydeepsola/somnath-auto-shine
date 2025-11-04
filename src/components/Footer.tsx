import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Car Washing",
    "Bike Washing",
    "Mechanical Repair",
    "AC Service",
    "Interior Cleaning",
    "Body Polish",
  ];

  return (
    <footer className="bg-[hsl(var(--dark-surface))] text-[hsl(var(--dark-surface-foreground))] relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <img src={logo} alt="Somnath Auto Service" className="h-16 w-auto mb-4" />
            <p className="text-[hsl(var(--dark-surface-foreground))]/80 leading-relaxed">
              Your trusted partner for complete automotive care in Mendarda, Junagadh. Professional
              service with guaranteed satisfaction.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com/somnath_auto_service_station"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[hsl(var(--dark-surface-foreground))]/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://facebook.com/somnath_auto_service_station"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[hsl(var(--dark-surface-foreground))]/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Facebook className="h-5 w-5 group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--dark-surface-foreground))]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[hsl(var(--dark-surface-foreground))]/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--dark-surface-foreground))]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-[hsl(var(--dark-surface-foreground))]/70 flex items-center"
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--dark-surface-foreground))]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6355731725"
                  className="flex items-start gap-3 text-[hsl(var(--dark-surface-foreground))]/70 hover:text-secondary transition-colors group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors" />
                  <span>6355731725</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:somnathautoservicestation@gmail.com"
                  className="flex items-start gap-3 text-[hsl(var(--dark-surface-foreground))]/70 hover:text-secondary transition-colors group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors" />
                  <span className="break-all">somnathautoservicestation@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Mendarda,Junagadh,Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[hsl(var(--dark-surface-foreground))]/70 hover:text-secondary transition-colors group"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors" />
                  <span>Shop No. 8, Shivdarshan Complex, Mendarda, Junagadh</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--dark-surface-foreground))]/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(var(--dark-surface-foreground))]/60 text-sm text-center md:text-left">
              © 2025 Somnath Auto Service Station. All rights reserved.
            </p>
            <p className="text-[hsl(var(--dark-surface-foreground))]/60 text-sm">
              Car Wash • Bike Service • Auto Repair • Mendarda, Junagadh
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-12 h-12 shadow-lg animate-float z-40"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </footer>
  );
};

export default Footer;
