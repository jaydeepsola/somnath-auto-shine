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
      <div className="group p-8 rounded-3xl hover:bg-primary/5 transition-all duration-500 cursor-default border-2 border-transparent hover:border-secondary/20">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-secondary/30 group-hover:to-primary/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <feature.icon className="h-10 w-10 text-secondary" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-3 group-hover:text-secondary transition-colors">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
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
      description: "Years of proven service excellence with hundreds of satisfied customers across near Mendarda",
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
    <section id="why-us" className="py-40 md:py-8 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-75" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-75" />

     
      
      <div className="container mx-auto px-4 relative z-10">
  {/* Image Section */}
  <div
    ref={imageRef}
    className={`relative transform transition-all duration-1000 ${
      imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
    } mb-16 flex justify-center`}
  >
    <div className="relative max-w-[700px] w-full">
      <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-[2rem] blur-3xl animate-pulse" />
      <img
        src={repairImage}
        alt="Professional service"
        className="relative rounded-[2rem] shadow-2xl w-full h-[450px] object-cover border-4 border-background"
      />

      {/* Floating Stats Badge */}
      <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-8 rounded-3xl shadow-2xl animate-float border-8 border-background">
        <div className="text-5xl font-black mb-2">6+</div>
        <div className="text-base font-bold uppercase tracking-wide">Years Trust</div>
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div
    ref={headerRef}
    className={`transform transition-all duration-1000 ${
      headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
    } mb-12 text-center`}
  >
    <div className="inline-flex items-center space-x-3 bg-secondary/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-secondary/30 mb-8">
      <span className="text-secondary font-bold text-lg tracking-widest uppercase">Why Choose Us</span>
    </div>
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
      Your Trusted{" "}
      <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/50 bg-clip-text text-transparent">
        Auto Partner
      </span>
    </h2>
    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
      Located at Shop No. 8, Shivdarshan Complex, Visavadar Road, Mendarda — We provide complete automotive
      solutions with dedication and professionalism.
    </p>
  </div>

  {/* Features Section */}
  <div className="grid sm:grid-cols-2 gap-8">
    {features.map((feature, index) => (
      <FeatureCard key={index} feature={feature} index={index} />
    ))}
  </div>
</div>

    </section>
  );
};

export default WhyChooseUs;
