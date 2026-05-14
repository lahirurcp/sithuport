import { motion } from 'framer-motion'
import { useMagnet } from '../../hooks/useMagnet'

export default function MagneticButton({ children, className = '', href, onClick }) {
  const { ref, x, y, handlers } = useMagnet(0.4)

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      {...handlers}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
