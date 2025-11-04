import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      location: "Mendarda",
      rating: 5,
      text: "Excellent service! My Mahindra XUV looks brand new after their full wash and polish. Very professional team and reasonable prices.",
    },
    {
      name: "Priya Shah",
      location: "Junagadh",
      rating: 5,
      text: "Best auto service in the area. They fixed my car's AC perfectly and the interior cleaning was outstanding. Highly recommended!",
    },
    {
      name: "Kiran Solanki",
      location: "Visavadar",
      rating: 5,
      text: "I bring both my car and bike here regularly. The team is very trustworthy and does quality work every time. Great value for money.",
    },
    {
      name: "Dinesh Kumar",
      location: "Mendarda",
      rating: 5,
      text: "Professional tractor service and washing. They handle heavy vehicles with care. Very satisfied with their work and quick service.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer <span className="text-secondary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-secondary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-muted-foreground">• Based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
