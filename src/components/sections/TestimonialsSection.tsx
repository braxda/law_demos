import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    content: "Barrington Legal made the complex probate process so much easier for our family during a difficult time. Their expertise and compassion guided us through every step.",
    author: "Rebecca T.",
    position: "Estate Client"
  },
  {
    id: 2,
    content: "Our family business's succession planning seemed overwhelming until we worked with the team at Barrington Legal. They created a comprehensive plan that protected our legacy and set up the next generation for success.",
    author: "Michael D.",
    position: "Business Owner"
  },
  {
    id: 3,
    content: "I've worked with many law firms over my career, and Barrington Legal stands out for their attention to detail and client-focused approach. Their estate planning services are unmatched.",
    author: "Sarah M.",
    position: "Financial Advisor"
  },
  {
    id: 4,
    content: "The trust administration services provided by Barrington Legal simplified what could have been an overwhelming process. Their knowledge and professionalism exceeded our expectations.",
    author: "James L.",
    position: "Trust Beneficiary"
  },
  {
    id: 5,
    content: "When my father passed away, Barrington Legal handled the probate with such care and efficiency. They were always available to answer questions and guide us through difficult decisions.",
    author: "David R.",
    position: "Probate Client"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    resetTimeout();
    
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    
    return () => {
      resetTimeout();
    };
  }, [activeIndex, autoplay]);
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <Section 
      background="light"
      className="overflow-hidden"
    >
      <div 
        className="relative" 
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 p-8 sm:p-10 md:p-12 testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  pointerEvents: activeIndex === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <svg 
                  className="absolute top-6 left-6 h-12 w-12 text-accent/20" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <div className="relative">
                  <p className="text-xl md:text-2xl font-serif text-neutral-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium text-primary">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-8">
            <div className="flex items-center gap-2">
              <button 
                onClick={goToPrev} 
                className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/5"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-primary w-5' : 'bg-primary/30'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={goToNext} 
                className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/5"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 