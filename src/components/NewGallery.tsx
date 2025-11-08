import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import beforeAfter from "@/assets/beforeafter.png";
import heroImage from "@/assets/hero-wash.jpg";
import bikeWash from "@/assets/bike-wash.jpg";
import repairService from "@/assets/repair-service.jpg";

const NewGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  const images = [
    {
      src: beforeAfter,
      title: "Before & After Magic",
      description: "Witness the incredible transformation our detailing service delivers",
    },
    {
      src: heroImage,
      title: "Premium Washing",
      description: "Professional foam wash with meticulous attention to every detail",
    },
    {
      src: bikeWash,
      title: "Bike Excellence",
      description: "Expert motorcycle detailing and shine restoration",
    },
    {
      src: repairService,
      title: "Expert Repairs",
      description: "Skilled mechanical work by certified professionals",
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, hsl(var(--secondary)) 0, hsl(var(--secondary)) 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <span className="text-secondary font-bold text-lg tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Our <span className="text-secondary">Work Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio showcasing quality craftsmanship and satisfied customers
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-3xl shadow-2xl border-4 border-border/50">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover animate-fade-in"
              key={currentIndex}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-surface))] via-transparent to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4 animate-slide-in-left">
                  {images[currentIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-primary-foreground/90 animate-slide-in-right">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Maximize Icon */}
            <div className="absolute top-6 right-6">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/20 backdrop-blur-md hover:bg-background/40 border-primary-foreground/20"
              >
                <Maximize2 className="h-5 w-5 text-primary-foreground" />
              </Button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md hover:bg-background w-16 h-16 rounded-full border-2 hover:border-secondary transition-all hover:scale-110 shadow-xl"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md hover:bg-background w-16 h-16 rounded-full border-2 hover:border-secondary transition-all hover:scale-110 shadow-xl"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all hover:scale-110 ${
                  index === currentIndex
                    ? "border-secondary shadow-lg scale-110"
                    : "border-border/50 opacity-50 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGallery;
