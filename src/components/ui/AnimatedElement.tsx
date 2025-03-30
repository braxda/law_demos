import React from 'react';
import { motion, Variant } from 'framer-motion';
import { useAnimateInView, fadeIn, slideUp, slideInLeft, slideInRight } from '../../hooks/useAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedElement({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, controls } = useAnimateInView({ threshold });
  
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fadeIn':
        return fadeIn(delay);
      case 'slideUp':
        return slideUp(delay);
      case 'slideInLeft':
        return slideInLeft(delay);
      case 'slideInRight':
        return slideInRight(delay);
      default:
        return fadeIn(delay);
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariant()}
      className={className}
    >
      {children}
    </motion.div>
  );
} 