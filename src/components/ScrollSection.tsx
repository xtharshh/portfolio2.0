"use client"

import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

interface ScrollSectionProps {
  children: ReactNode
  className?: string
}

export default function ScrollSection({ children, className = "" }: ScrollSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    once: false
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  )
} 