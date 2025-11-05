import { Handshake, Percent, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CommercialContracts = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  const partners = [
    "Gir Tours",
    "Somnath Rental Cars",
    "Girnar Taxi",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <span className="text-secondary font-bold text-lg tracking-widest uppercase mb-4 block">
            Business Solutions
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Commercial <span className="text-secondary">Contracts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Special discounts for commercial partnerships. Contract with us and get exclusive rates for your fleet!
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Special Discounts */}
          <Card 
            className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-2 border-border/50 hover:border-secondary/50 bg-card/50 backdrop-blur-sm transform ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 group-hover:from-secondary/30 group-hover:to-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all group-hover:scale-110 group-hover:rotate-6">
                <Percent className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-bold text-2xl mb-4 group-hover:text-secondary transition-colors">
                Special Discounts
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get exclusive pricing for bulk services and long-term partnerships
              </p>
            </CardContent>
          </Card>

          {/* Ongoing Contracts */}
          <Card 
            className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-2 border-border/50 hover:border-secondary/50 bg-card/50 backdrop-blur-sm transform ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all group-hover:scale-110 group-hover:rotate-6">
                <FileCheck className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-bold text-2xl mb-4 group-hover:text-secondary transition-colors">
                Trusted Partners
              </h3>
              <div className="space-y-2">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="text-muted-foreground text-base font-medium py-2 px-4 bg-muted/50 rounded-lg"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Easy Contract */}
          <Card 
            className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-2 border-border/50 hover:border-secondary/50 bg-card/50 backdrop-blur-sm transform ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 group-hover:from-secondary/30 group-hover:to-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all group-hover:scale-110 group-hover:rotate-6">
                <Handshake className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-bold text-2xl mb-4 group-hover:text-secondary transition-colors">
                Contract With Us
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Join our growing list of commercial partners and enjoy premium service at special rates
              </p>
              <a
                href="tel:6355731725"
                className="inline-block text-secondary font-bold hover:underline"
              >
                Call to Discuss →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommercialContracts;
