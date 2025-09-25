
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/47452578-6438-4522-b411-e7d1c974c232.png",
      title: "Professional Event Medical Services",
      subtitle: "Trusted by thousands of events across the UK",
      description: "From small gatherings to major festivals, we provide comprehensive medical coverage with qualified paramedics and state-of-the-art equipment.",
      cta: "Learn More"
    },
    {
      id: 2,
      image: "/lovable-uploads/c880de3d-8b52-426b-84fd-e19dad143d50.png",
      title: "24/7 Ambulance Transport",
      subtitle: "Rapid response when every second counts",
      description: "Our fleet of fully equipped ambulances and trained paramedics ensure immediate medical response for any emergency situation.",
      cta: "Learn More"
    },
    {
      id: 3,
      image: "/lovable-uploads/5aec5317-f2df-445b-8153-aa574e548767.png",
      title: "Festival & Event Coverage",
      subtitle: "Keeping your events safe and secure",
      description: "Specialised medical coverage for festivals, concerts, and large public events with dedicated response teams and equipment.",
      cta: "Learn More"
    },
    {
      id: 4,
      image: "/lovable-uploads/508219bd-11a0-4f7b-b330-37d1090713ed.png",
      title: "Temporary Treatment Centres",
      subtitle: "Professional medical facilities on-site",
      description: "Fully equipped treatment centres with hospital-grade facilities for comprehensive medical care at your event location.",
      cta: "Learn More"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl mb-6 text-yellow-100 animate-fade-in">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 text-gray-200 max-w-2xl animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
                  {slide.title === "24/7 Ambulance Transport" ? (
                    <a href="https://ambulance.excelems.co.uk" target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="lg" 
                        style={{ backgroundColor: '#d2f406' }}
                        className="text-black hover:opacity-90"
                      >
                        {slide.cta}
                      </Button>
                    </a>
                  ) : (
                    <Link to="/services">
                      <Button 
                        size="lg" 
                        style={{ backgroundColor: '#d2f406' }}
                        className="text-black hover:opacity-90"
                      >
                        {slide.cta}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
