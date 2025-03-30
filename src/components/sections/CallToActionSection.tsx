import { motion } from 'framer-motion';
import { useAnimateInView, slideUp } from '../../hooks/useAnimation';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface CallToActionSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  background?: 'primary' | 'secondary' | 'dark';
}

export function CallToActionSection({
  title = "Ready to Secure Your Legacy?",
  subtitle = "Schedule a consultation with our experienced attorneys today.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  background = 'primary'
}: CallToActionSectionProps) {
  const { ref, controls } = useAnimateInView({ threshold: 0.1 });
  
  return (
    <Section
      background={background}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial="hidden"
          animate={controls}
          variants={slideUp(0)}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/80 mb-10"
          initial="hidden"
          animate={controls}
          variants={slideUp(0.1)}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideUp(0.2)}
        >
          <Button 
            href={buttonLink} 
            variant="accent" 
            size="lg"
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
} 