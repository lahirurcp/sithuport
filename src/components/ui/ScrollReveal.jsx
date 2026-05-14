import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const directionMap = {
  up:    { y: 30, x: 0 },
  down:  { y: -30, x: 0 },
  left:  { y: 0, x: -30 },
  right: { y: 0, x: 30 },
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-80px', once })
  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
