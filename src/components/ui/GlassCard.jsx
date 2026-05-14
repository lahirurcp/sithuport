import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = false, onClick, style }) {
  return (
    <motion.div
      className={`glass-card p-7 ${className}`}
      style={style}
      onClick={onClick}
      whileHover={hover ? {
        scale: 1.02,
        borderColor: 'rgba(41,151,255,0.3)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  )
}
