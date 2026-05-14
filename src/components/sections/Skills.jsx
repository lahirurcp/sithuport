import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GradientText from '../ui/GradientText'
import ScrollReveal from '../ui/ScrollReveal'

const categories = [
  {
    label: 'Frontend',
    color: '#2997ff',
    skills: ['React', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Django Templates'],
  },
  {
    label: 'Backend',
    color: '#30d158',
    skills: ['Django', 'Nest.js', 'Node.js', 'RESTful APIs', 'Express.js'],
  },
  {
    label: 'Database',
    color: '#bf5af2',
    skills: ['MongoDB', 'SQLite', 'RBAC'],
  },
  {
    label: 'Tools',
    color: '#ff9f0a',
    skills: ['GitHub', 'Git', 'Vite', 'Postman'],
  },
  {
    label: 'Soft Skills',
    color: '#ff375f',
    skills: ['Communication', 'Problem-solving', 'Organization', 'Time Management'],
  },
]

function SkillChip({ skill, delay, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-50px', once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, type: 'spring', stiffness: 400, damping: 30 }}
      whileHover={{ scale: 1.08, y: -3 }}
      style={{
        display: 'inline-block',
        padding: '8px 18px',
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 500,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#f5f5f7',
        cursor: 'default',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        willChange: 'transform',
      }}
      onHoverStart={e => {
        if (e.target) {
          e.target.style.boxShadow = `0 0 0 1.5px ${color}`
          e.target.style.borderColor = color + '60'
        }
      }}
      onHoverEnd={e => {
        if (e.target) {
          e.target.style.boxShadow = 'none'
          e.target.style.borderColor = 'rgba(255,255,255,0.08)'
        }
      }}
    >
      {skill}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: 'max(80px, 10vh) max(24px, 8vw)', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal direction="up">
          <p className="section-label" style={{ marginBottom: 12 }}>Skills</p>
          <h2 className="text-display" style={{ marginBottom: 56 }}>
            <GradientText>Technologies</GradientText> I work with
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              <ScrollReveal delay={ci * 0.05}>
                <p style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: cat.color,
                  marginBottom: 16,
                }}>
                  {cat.label}
                </p>
              </ScrollReveal>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {cat.skills.map((skill, si) => (
                  <SkillChip
                    key={skill}
                    skill={skill}
                    delay={ci * 0.05 + si * 0.06}
                    color={cat.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
