import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from './ui/Button';

const Hero = () => {
  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] bg-gray-100 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply" />
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` 
          }}
        ></div>
      </div>
      
      {/* Content Overlay */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block text-white/90 text-lg uppercase tracking-wider border-b-2 border-accent pb-1 mb-4">
              Experienced Legal Counsel
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Protecting Your Legacy <br/>
            <span className="text-accent">With Strategic</span> Planning
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-xl mb-10 max-w-xl"
          >
            Expert guidance in probate, estate planning, and trust administration 
            to secure your family's future for generations to come.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              href="/contact" 
              size="lg"
              variant="accent"
            >
              Schedule a Consultation
            </Button>
            <Button 
              href="/services" 
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        onClick={scrollToContent}
      >
        <ChevronDownIcon className="h-8 w-8" />
      </motion.div>
    </div>
  );
};

export default Hero; 