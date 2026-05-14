import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const name = 'Trevin Perera'
const pills = ['MERN Stack', 'Django', 'Next.js', 'Nest.js', 'React']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } },
  }
  const charVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ambient gradient background — always visible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(41,151,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(191,90,242,0.10) 0%, transparent 55%), #1d1d1f',
      }} />

      {/* Parallax photo */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10% 0',
          y: photoY,
          scale: photoScale,
          willChange: 'transform',
        }}
      >
        <img
          src="/hero.jpg"
          alt="Trevin Perera"
          onError={e => { e.target.style.display = 'none' }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
        {/* Gradient overlays */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(29,29,31,0.3) 0%, rgba(29,29,31,0.15) 40%, rgba(29,29,31,0.75) 80%, rgba(29,29,31,1) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(29,29,31,0.5) 100%)',
        }} />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          y: textY,
          opacity: textOpacity,
          willChange: 'transform',
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-label"
          style={{ marginBottom: 20 }}
        >
          Full-Stack Developer
        </motion.p>

        {/* Animated name */}
        <motion.h1
          className="text-hero"
          style={{ marginBottom: 16, overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 0.12em' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split(' ').map((word, wi) => (
            <span key={wi} style={{ display: 'flex', overflow: 'hidden' }}>
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  variants={charVariants}
                  style={{ display: 'inline-block' }}
                  className="gradient-text"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 300,
            color: '#a1a1a6',
            letterSpacing: '-0.01em',
            marginBottom: 32,
          }}
        >
          Software Engineering Undergraduate · SLTC Research University
        </motion.p>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}
        >
          {pills.map((pill, i) => (
            <span
              key={i}
              style={{
                padding: '6px 16px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 500,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f5f5f7',
                letterSpacing: '0.01em',
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center' }}
        >
          <a
            href="#projects"
            style={{
              padding: '14px 32px',
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #2997ff, #bf5af2)',
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)' }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: '14px 32px',
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#f5f5f7',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.14)'; e.target.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.transform = 'scale(1)' }}
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span style={{ fontSize: 11, color: '#6e6e73', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0v20M1 13l7 8 7-8" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}
