import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GradientText from '../ui/GradientText'
import ScrollReveal from '../ui/ScrollReveal'

const education = [
  {
    degree: 'BSc (Hons) Software Engineering',
    institution: 'SLTC Research University',
    period: '2021 – 2025',
    detail: 'Final year project: Next.js & Nest.js',
    current: true,
    color: '#2997ff',
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'Sri Lanka',
    period: '2020',
    detail: 'Combined Mathematics · Physics · Information Technology',
    current: false,
    color: '#bf5af2',
  },
  {
    degree: 'GCE Ordinary Level',
    institution: 'Sri Lanka',
    period: '2017',
    detail: "8A's 1C — ICT · Business & Accounting · English Literature",
    current: false,
    color: '#30d158',
  },
]

function TimelineEntry({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-80px', once: true })

  return (
    <div ref={ref} style={{ display: 'flex', gap: 28, position: 'relative' }}>
      {/* Node */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2, type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: item.color,
            border: `2px solid ${item.color}`,
            boxShadow: `0 0 12px ${item.color}60`,
            zIndex: 1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          paddingBottom: index < education.length - 1 ? 44 : 0,
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
          <h3 className="text-title" style={{ color: '#f5f5f7', fontSize: 'clamp(18px, 2.5vw, 24px)' }}>
            {item.degree}
          </h3>
          {item.current && (
            <span
              className="current-badge-pulse"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: item.color,
                padding: '3px 10px',
                borderRadius: 100,
                background: item.color + '18',
                border: `1px solid ${item.color}40`,
              }}
            >
              Current
            </span>
          )}
        </div>
        <p style={{ fontSize: 14, fontWeight: 500, color: item.color, marginBottom: 4 }}>
          {item.institution} · {item.period}
        </p>
        <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.6 }}>
          {item.detail}
        </p>
      </motion.div>
    </div>
  )
}

export default function Education() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { margin: '-100px', once: true })

  return (
    <section id="education" style={{ padding: 'max(80px, 10vh) max(24px, 8vw)', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal direction="up">
          <p className="section-label" style={{ marginBottom: 12 }}>Education</p>
          <h2 className="text-display" style={{ marginBottom: 56 }}>
            My <GradientText>academic</GradientText> journey
          </h2>
        </ScrollReveal>

        <div style={{ position: 'relative', paddingLeft: 7 }}>
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              left: 6,
              top: 14,
              bottom: 14,
              width: 2,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ height: '0%' }}
              animate={lineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                width: '100%',
                background: 'linear-gradient(180deg, #2997ff, #bf5af2, #30d158)',
                borderRadius: 1,
              }}
            />
          </div>

          {/* Entries */}
          <div style={{ paddingLeft: 28 }}>
            {education.map((item, i) => (
              <TimelineEntry key={item.degree} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
