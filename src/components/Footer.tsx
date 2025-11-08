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
    <footer className="bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white/95 p-4 rounded-xl inline-block" style={{width:"100px",margin:"auto",display:"block",}}>
              <img src={logo} alt="Somnath Auto Service" className="h-16 w-auto"/>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for complete automotive care in Mendarda, Junagadh. Professional
              service with guaranteed satisfaction.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com/somnath_auto_service_station"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-secondary rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://facebook.com/somnath_auto_service_station"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-secondary rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-secondary transition-all duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-gray-400 hover:text-secondary transition-all duration-300 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s", marginLeft:"-10px" }}>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6355731725"
                  className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-all duration-300 group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">6355731725</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:somnathautoservicestation@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  <span className="break-all group-hover:translate-x-1 transition-transform duration-300">somnathautoservicestation@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Mendarda,Junagadh,Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-all duration-300 group"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Shop No. 8, Shivdarshan Complex, Visavadar Road, Gopal Nagar, Mendarda, Junagadh, Gujarat 362260</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Somnath Auto Service Station. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
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
