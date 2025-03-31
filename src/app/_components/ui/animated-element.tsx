"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { cn } from "@/app/_lib/utils"

export interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideRight" | "scale"
  delay?: number
  className?: string
  threshold?: number
}

function AnimatedElement({
  children,
  animation = "fadeIn",
  delay = 0,
  className,
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export { AnimatedElement } 