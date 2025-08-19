import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Web Developer",
      course: "Frontend Development",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "CODERA TECH transformed my career! The frontend development course was incredibly comprehensive and the instructors were always available to help. I landed my dream job within 2 months of completion."
    },
    {
      name: "Fatma Ali",
      role: "AI Specialist",
      course: "AI Pro (Advanced)",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c441?w=150&h=150&fit=crop&crop=face",
      text: "The AI Pro course exceeded my expectations. The practical approach and real-world projects helped me understand complex concepts easily. Now I'm working as an AI specialist at a leading tech company."
    },
    {
      name: "Omar Mohamed",
      role: "Software Engineer",
      course: "C++ Programming",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Starting from zero programming knowledge, CODERA TECH helped me become a confident C++ developer. The step-by-step approach and mentor support made all the difference."
    },
    {
      name: "Nour Ibrahim",
      role: "Full Stack Developer",
      course: "Web Development Track",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "I completed both frontend and backend courses. The curriculum is well-structured and up-to-date with industry standards. The hands-on projects were invaluable for my portfolio."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers with CODERA TECH.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-card border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <Quote className="absolute -top-2 -right-2 h-8 w-8 text-primary bg-background rounded-full p-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonials[currentSlide].text}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentSlide].role} • {testimonials[currentSlide].course}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;