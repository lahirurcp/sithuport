import { useRef } from 'react'
import { useSpring } from 'framer-motion'

export function useMagnet(strength = 0.4) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })

  function onMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const radius = Math.max(rect.width, rect.height) * 1.5
    if (dist < radius) {
      x.set(dx * strength)
      y.set(dy * strength)
    }
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, x, y, handlers: { onMouseMove, onMouseLeave } }
}
