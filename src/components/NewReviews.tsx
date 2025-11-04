import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ReviewCard = ({ review, index }: { review: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const directions = [
    "translate-y-20 rotate-3",
    "-translate-y-20 -rotate-3",
    "translate-x-20 rotate-2",
    "-translate-x-20 -rotate-2",
  ];

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0 rotate-0" : `opacity-0 ${directions[index % 4]}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-secondary/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm h-full">
        <CardContent className="p-8">
          {/* Quote Icon */}
          <div className="mb-6 relative">
            <Quote className="h-12 w-12 text-secondary/20 absolute -top-2 -left-2" />
            <Quote className="h-12 w-12 text-secondary/30 group-hover:text-secondary/50 transition-colors" />
          </div>

          {/* Rating Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(review.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="h-5 w-5 fill-secondary text-secondary group-hover:scale-110 transition-transform" 
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-muted-foreground mb-8 leading-relaxed text-base italic">
            "{review.text}"
          </p>

          {/* Customer Info */}
          <div className="pt-6 border-t-2 border-border/50 group-hover:border-secondary/50 transition-colors">
            <div className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">
              {review.name}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{review.location}</div>
          </div>

          {/* Hover Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </CardContent>
      </Card>
    </div>
  );
};

const NewReviews = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  const reviews = [
    {
      name: "Rajesh Patel",
      location: "Mendarda",
      rating: 5,
      text: "Outstanding service! My Mahindra XUV looks absolutely brand new after their complete detailing. The team is highly professional and prices are very reasonable. Highly recommend!",
    },
    {
      name: "Priya Shah",
      location: "Junagadh",
      rating: 5,
      text: "Best auto service center in the entire area! They fixed my car's AC issue perfectly and the interior cleaning was exceptional. The staff is very friendly and knowledgeable.",
    },
    {
      name: "Kiran Solanki",
      location: "Visavadar",
      rating: 5,
      text: "I regularly bring both my car and motorcycle here. The team is extremely trustworthy and delivers consistent quality work every single time. Excellent value for money!",
    },
    {
      name: "Dinesh Kumar",
      location: "Mendarda",
      rating: 5,
      text: "Professional tractor washing and maintenance service. They handle heavy vehicles with great care and expertise. Very satisfied with their prompt service and attention to detail.",
    },
  ];

  return (
    <section id="reviews" className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--secondary)) 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <span className="text-secondary font-bold text-lg tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Customer <span className="text-secondary">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from our valued customers who trust us with their vehicles
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 px-10 py-5 rounded-full border-2 border-secondary/30 shadow-xl hover:scale-105 transition-transform">
            <Star className="h-8 w-8 fill-secondary text-secondary animate-pulse" />
            <span className="text-4xl font-black">5.0</span>
            <span className="text-muted-foreground font-semibold text-lg">• 200+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReviews;
