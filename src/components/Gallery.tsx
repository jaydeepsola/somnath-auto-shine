import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter from "@/assets/before-after.jpg";
import heroImage from "@/assets/hero-wash.jpg";
import bikeWash from "@/assets/bike-wash.jpg";
import repairService from "@/assets/repair-service.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: beforeAfter,
      title: "Before & After Transformation",
      description: "See the dramatic difference our professional washing service makes",
    },
    {
      src: heroImage,
      title: "Premium Car Wash",
      description: "High-quality foam wash with attention to every detail",
    },
    {
      src: bikeWash,
      title: "Bike Detailing",
      description: "Expert motorcycle cleaning and polishing services",
    },
    {
      src: repairService,
      title: "Professional Repairs",
      description: "Skilled mechanical work by experienced technicians",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Work Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of satisfied customers and quality service results
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover animate-fade-in"
              key={currentIndex}
            />
            
            {/* Overlay with Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(var(--dark-surface))] to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-primary-foreground/80">
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background w-12 h-12 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background w-12 h-12 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-secondary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
