import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  role: string;
  content: string;
  rating: number;
  category: 'athlete' | 'sleep' | 'mixed';
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rohit Sharma",
      location: "Mumbai",
      role: "Professional Cricketer",
      content: "As a professional athlete, breathing right is crucial. FlowFix has significantly improved my performance during intense matches. The magnetic technology really works!",
      rating: 5,
      category: 'athlete'
    },
    {
      id: 2,
      name: "Neha Kapoor",
      location: "Delhi",
      role: "Yoga Instructor",
      content: "Teaching yoga requires perfect breathing technique. FlowFix helps me demonstrate proper breathing to my students while keeping me energized through long sessions.",
      rating: 5,
      category: 'mixed'
    },
    {
      id: 3,
      name: "Amanpreet Singh",
      location: "Chandigarh",
      role: "Marathon Runner",
      content: "Training for marathons requires peak breathing efficiency. FlowFix has become an essential part of my gear. Better breathing, better performance!",
      rating: 5,
      category: 'athlete'
    },
    {
      id: 4,
      name: "Priya Desai",
      location: "Bangalore",
      role: "IT Professional",
      content: "Working long hours in tech, good sleep is essential. FlowFix has completely eliminated my snoring issues. My sleep quality has improved tremendously.",
      rating: 5,
      category: 'sleep'
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      location: "Pune",
      role: "Business Executive",
      content: "As someone who travels frequently, jet lag used to affect my sleep badly. FlowFix helps me breathe better and adjust to new time zones more easily.",
      rating: 5,
      category: 'sleep'
    },
    {
      id: 6,
      name: "Meera Reddy",
      location: "Hyderabad",
      role: "CrossFit Trainer",
      content: "The difference in my workout intensity with FlowFix is remarkable. Better breathing means better performance. My clients have noticed the difference too!",
      rating: 5,
      category: 'athlete'
    },
    {
      id: 7,
      name: "Arjun Nair",
      location: "Kochi",
      role: "Doctor",
      content: "As a medical professional, I appreciate the science behind FlowFix. The magnetic technology is innovative and the results are impressive.",
      rating: 5,
      category: 'mixed'
    },
    {
      id: 8,
      name: "Zara Khan",
      location: "Lucknow",
      role: "Dance Instructor",
      content: "Teaching dance requires stamina and proper breathing. FlowFix helps me maintain energy through long choreography sessions.",
      rating: 5,
      category: 'athlete'
    },
    {
      id: 9,
      name: "Vikram Mehta",
      location: "Ahmedabad",
      role: "Entrepreneur",
      content: "My wife suggested FlowFix for my snoring. Not only has it helped with that, but I also feel more refreshed in the morning. Great investment!",
      rating: 5,
      category: 'sleep'
    },
    {
      id: 10,
      name: "Ananya Chatterjee",
      location: "Kolkata",
      role: "Fitness Enthusiast",
      content: "From yoga to HIIT workouts, FlowFix enhances my breathing in every activity. It's become an essential part of my fitness routine.",
      rating: 5,
      category: 'mixed'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="bg-gradient-to-b from-matte-black to-royal-blue-900/30 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-royal-blue-900/50 text-royal-blue-400 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Real Results, Real <span className="text-royal-blue-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300">
            Discover how FlowFix has transformed lives through better breathing.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-royal-blue-600/20">
                <Quote size={120} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star 
                      key={i}
                      size={24} 
                      className="text-gold-500 fill-gold-500 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-8">
                  <p className="text-2xl text-white leading-relaxed italic">
                    "{testimonials[activeIndex].content}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-royal-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-bold text-white">
                        {testimonials[activeIndex].name}
                        <span className="text-royal-blue-400 ml-2 text-sm">
                          ({testimonials[activeIndex].location})
                        </span>
                      </p>
                      <p className="text-royal-blue-400">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-royal-blue-900/50 text-royal-blue-400 rounded-full text-sm">
                    {testimonials[activeIndex].category.charAt(0).toUpperCase() + testimonials[activeIndex].category.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button 
                onClick={prevTestimonial}
                className="pointer-events-auto transform -translate-x-1/2 w-12 h-12 rounded-full bg-royal-blue-900/80 border border-royal-blue-700 flex items-center justify-center text-white hover:bg-royal-blue-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="pointer-events-auto transform translate-x-1/2 w-12 h-12 rounded-full bg-royal-blue-900/80 border border-royal-blue-700 flex items-center justify-center text-white hover:bg-royal-blue-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-royal-blue-400 scale-125' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;