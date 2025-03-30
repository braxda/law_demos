import { useInView } from 'react-intersection-observer';
import { useAnimation, Variant } from 'framer-motion';
import { useEffect } from 'react';

interface AnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useAnimateInView({
  threshold = 0.1,
  triggerOnce = true
}: AnimationProps = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}

export const fadeIn = (delay: number = 0): Record<string, Variant> => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }
  }
});

export const slideUp = (delay: number = 0): Record<string, Variant> => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }
  }
});

export const slideInLeft = (delay: number = 0): Record<string, Variant> => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }
  }
});

export const slideInRight = (delay: number = 0): Record<string, Variant> => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }
  }
});

export const staggerChildren = (staggerTime: number = 0.1): Record<string, Variant> => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime
    }
  }
}); 