import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateInView, slideUp } from '../../hooks/useAnimation';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Section({
  children,
  title,
  subtitle,
  id,
  className = '',
  background = 'white',
  fullWidth = false,
}: SectionProps) {
  const { ref, controls } = useAnimateInView();
  
  const bgColors = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    dark: 'bg-primary text-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
  };
  
  return (
    <section 
      id={id} 
      className={`section ${bgColors[background]} ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container">
          {(title || subtitle) && (
            <div className="mb-16 text-center" ref={ref}>
              {title && (
                <motion.h2 
                  className={`section-title ${background !== 'white' && background !== 'light' ? 'text-white' : ''}`}
                  initial="hidden"
                  animate={controls}
                  variants={slideUp(0)}
                >
                  {title}
                </motion.h2>
              )}
              
              {subtitle && (
                <motion.p 
                  className={`section-subtitle ${background !== 'white' && background !== 'light' ? 'text-white/80' : ''}`}
                  initial="hidden"
                  animate={controls}
                  variants={slideUp(0.1)}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          )}
          
          {children}
        </div>
      )}
    </section>
  );
} 