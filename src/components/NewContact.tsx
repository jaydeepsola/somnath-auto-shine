import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactCard = ({ info, index }: { info: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const directions = ["translate-y-20", "-translate-y-20", "translate-x-20"];
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directions[index % 3]}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-secondary/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-secondary/30 group-hover:to-primary/30 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6">
              <info.icon className="h-8 w-8 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-3 group-hover:text-secondary transition-colors">{info.title}</h3>
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors text-base leading-relaxed block"
              >
                {info.content}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const NewContact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation(0.3);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "6355731725",
      href: "tel:6355731725",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "somnathautoservicestation@gmail.com",
      href: "mailto:somnathautoservicestation@gmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Shop No. 8, Shivdarshan Complex, Visavadar Road, Gopal Nagar, Mendarda, Junagadh, Gujarat 362260",
      href: "https://maps.google.com/?q=21.3488,70.3036",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/somnath_auto_service_station",
      color: "hover:bg-pink-500",
    },
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/somnath_auto_service_station",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <span className="text-secondary font-bold text-lg tracking-widest uppercase mb-4 block">Contact Us</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit us today or reach out to book your service appointment. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} info={info} index={index} />
            ))}

            {/* Working Hours */}
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Working Hours</h3>
                    <p className="text-muted-foreground mb-2">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-foreground ${social.color} hover:text-white`}
                    >
                      <social.icon className="h-7 w-7" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl py-8 font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              asChild
            >
              <a href="tel:6355731725">
                <Phone className="mr-3 h-6 w-6" />
                Call Now to Book
              </a>
            </Button>
          </div>

          {/* Map - Right Side */}
          <div
            ref={mapRef}
            className={`lg:col-span-3 transform transition-all duration-1000 ${
              mapVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <Card className="h-full overflow-hidden border-4 border-border/50 shadow-2xl">
              <CardContent className="p-0 h-full min-h-[700px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14822.5!2d70.3036!3d21.3488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c7f5e8c8c87%3A0x1e3e8c8e7f5e8c87!2sMendarda%2C%20Gujarat%20362260!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Somnath Auto Service Station Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContact;
