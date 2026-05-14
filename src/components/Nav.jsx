import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 max(24px, 5vw)',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(29,29,31,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: '-0.02em',
          textDecoration: 'none',
        }}
      >
        <span className="gradient-text">TP</span>
      </a>

      {/* Links */}
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(link => (
          <li key={link.href} style={{ position: 'relative' }}>
            <motion.a
              href={link.href}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                color: active === link.href ? '#f5f5f7' : '#a1a1a6',
                transition: 'color 0.2s',
                display: 'block',
                paddingBottom: 4,
              }}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    borderRadius: 1,
                    background: 'linear-gradient(90deg, #2997ff, #bf5af2)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
