import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GradientText from '../ui/GradientText'

const lines = [
  "I'm an enthusiastic Software Engineering undergraduate with a passion for building impactful digital experiences.",
  "With hands-on experience in the MERN stack and Django, I enjoy bridging the gap between complex back-end logic and intuitive front-end design.",
  "Currently completing my final-year project using Next.js and Nest.js at SLTC Research University, I'm eager to collaborate on real-world challenges and grow as a developer.",
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px', once: true })
  const borderRef = useRef(null)
  const borderInView = useInView(borderRef, { margin: '-100px', once: true })

  return (
    <section id="about" style={{ padding: 'max(80px, 10vh) max(24px, 8vw)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
        {/* Left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            ref={ref}
            className="section-label"
            style={{ marginBottom: 16 }}
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display"
            style={{ color: '#f5f5f7' }}
          >
            Building{' '}
            <GradientText>digital experiences</GradientText>
            {' '}that matter.
          </motion.h2>
        </div>

        {/* Right column — text + border */}
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          {/* Animated left border */}
          <div ref={borderRef} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, overflow: 'hidden', borderRadius: 1 }}>
            <motion.div
              initial={{ height: '0%' }}
              animate={borderInView ? { height: '100%' } : {}}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                width: '100%',
                background: 'linear-gradient(180deg, #2997ff, #bf5af2)',
                borderRadius: 1,
              }}
            />
          </div>

          {/* Paragraph lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-body-lg"
                style={{ color: '#a1a1a6' }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
