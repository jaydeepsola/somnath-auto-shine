import { Shield, Users, Clock, Award } from "lucide-react";
import repairImage from "@/assets/repair-service.jpg";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Years of reliable service with hundreds of satisfied customers across Mendarda and Junagadh",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technicians trained in modern auto care techniques and repair methods",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast turnaround time without compromising on quality. We value your time",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all our services with premium products",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={repairImage}
              alt="Professional auto service"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl shadow-lg animate-float">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-secondary">Somnath Auto Service</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Located at Shop No. 8, Shivdarshan Complex, Visavadar Road, Gopal Nagar, Mendarda, we
              are your trusted partner for complete automotive care in Junagadh district.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From daily commuter cars to heavy commercial vehicles, we provide professional
              washing, repair, and maintenance services that keep your vehicles running smoothly and
              looking their best.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
