import { Shield, Users, Clock, Award, Wrench, ThumbsUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import repairImage from "@/assets/repair-service.jpg";

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const directions = ["translate-x-20", "-translate-x-20", "translate-y-20", "-translate-y-20"];
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directions[index % 4]}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 cursor-default">
        <div className="flex gap-5">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-secondary/30 group-hover:to-primary/30 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6">
              <feature.icon className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.3);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  const features = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Years of proven service excellence with hundreds of satisfied customers across Mendarda and Junagadh",
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Highly skilled team trained in modern auto care techniques and latest repair methodologies",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick and efficient service without compromising quality. We respect your valuable time",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all services with premium products and attention to detail",
    },
    {
      icon: Wrench,
      title: "Modern Equipment",
      description: "State-of-the-art tools and eco-friendly products for the best care of your vehicle",
    },
    {
      icon: ThumbsUp,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing. Great value for premium quality service",
    },
  ];

  return (
    <section id="why-us" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Animations */}
          <div
            ref={imageRef}
            className={`relative transform transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl animate-pulse" />
            <img
              src={repairImage}
              alt="Professional service"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover border-4 border-border/50"
            />
            
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-8 rounded-3xl shadow-2xl animate-float border-4 border-background">
              <div className="text-5xl font-black mb-2">10+</div>
              <div className="text-base font-bold uppercase tracking-wide">Years Trust</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div
              ref={headerRef}
              className={`mb-12 transform transition-all duration-1000 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <span className="text-secondary font-bold text-lg tracking-widest uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Your Trusted <span className="text-secondary">Auto Partner</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Located at Shop No. 8, Shivdarshan Complex, Visavadar Road, Mendarda — We provide complete automotive solutions with dedication and professionalism.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
