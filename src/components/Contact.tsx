import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "6355731725",
      href: "tel:6355731725",
    },
    {
      icon: Mail,
      title: "Email",
      content: "somnathautoservicestation@gmail.com",
      href: "mailto:somnathautoservicestation@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Shop No. 8, Shivdarshan Complex, Visavadar Road, Gopal Nagar, Mendarda, Junagadh, Gujarat",
      href: "https://maps.google.com/?q=Mendarda,Junagadh,Gujarat",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/somnath_auto_service_station",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/somnath_auto_service_station",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us today or call to book your service appointment. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 group-hover:bg-secondary/10 rounded-2xl flex items-center justify-center transition-colors">
                      <info.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
              asChild
            >
              <a href="tel:6355731725">
                <Phone className="mr-2 h-5 w-5" />
                Call Now to Book Service
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <Card className="h-full overflow-hidden border-border/50">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59286.42536916952!2d70.30!3d21.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c7f78f5e8c87%3A0x1e3e8c8e7f5e8c87!2sMendarda%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
