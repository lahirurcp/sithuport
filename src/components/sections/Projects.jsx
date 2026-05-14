import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import GradientText from '../ui/GradientText'
import ScrollReveal from '../ui/ScrollReveal'

const projects = [
  {
    year: '2024',
    title: 'Timetable Scheduling Application',
    summary: 'Intelligent academic scheduler powered by Genetic Algorithm optimization',
    color: '#2997ff',
    tags: ['Django', 'Python', 'Genetic Algorithm', 'SQLite', 'HTML/CSS'],
    bullets: [
      'Developed a full-stack web application for automated timetable scheduling in educational institutions',
      'Implemented Genetic Algorithm to generate conflict-free schedules with minimized class gaps',
      'Managed user input validation for constraints like teacher availability, room capacity, and course overlap',
      'Designed and integrated a relational database (SQLite) to manage courses, lecturers, rooms, and schedules',
      'Created intuitive front-end interfaces using Django templates for timetable viewing and generation',
    ],
  },
  {
    year: '2023',
    title: 'Learning Management System (LMS)',
    summary: 'Full-stack LMS with role-based access control — Group Project',
    color: '#bf5af2',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RBAC', 'RESTful APIs'],
    bullets: [
      'Built a full-stack Learning Management System using the MERN stack as a collaborative group project',
      'Developed RESTful APIs for user authentication, course management, assignments, and grading',
      'Utilized MongoDB to store user profiles, courses, assignments, and exam data',
      'Designed responsive front-end interfaces with React for students and teachers',
      'Implemented role-based access control (RBAC) for differentiated user functionalities',
    ],
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-80px', once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100, damping: 20 }}
      layout
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        willChange: 'transform',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      whileHover={{
        scale: expanded ? 1 : 1.01,
        boxShadow: `0 20px 60px rgba(0,0,0,0.35)`,
        borderColor: project.color + '50',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top accent line */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div style={{ padding: '28px 32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: project.color,
            padding: '4px 12px',
            borderRadius: 100,
            background: project.color + '18',
            border: `1px solid ${project.color}30`,
          }}>
            {project.year}
          </span>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ fontSize: 22, color: '#6e6e73', lineHeight: 1, userSelect: 'none' }}
          >
            +
          </motion.span>
        </div>

        <h3 className="text-title" style={{ color: '#f5f5f7', marginBottom: 8 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 15, color: '#a1a1a6', lineHeight: 1.6, marginBottom: 20 }}>
          {project.summary}
        </p>

        {/* Tags row — always visible */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: '4px 12px',
                borderRadius: 100,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#a1a1a6',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable bullets */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              <ul style={{ marginTop: 24, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {project.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
                    style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
                  >
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: project.color,
                      marginTop: 8,
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 14, color: '#a1a1a6', lineHeight: 1.65 }}>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'max(80px, 10vh) max(24px, 8vw)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal direction="up">
          <p className="section-label" style={{ marginBottom: 12 }}>Projects</p>
          <h2 className="text-display" style={{ marginBottom: 16 }}>
            Things I've <GradientText>built</GradientText>
          </h2>
          <p style={{ fontSize: 15, color: '#a1a1a6', marginBottom: 52 }}>
            Click any card to explore the details.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
