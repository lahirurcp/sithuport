import { motion } from 'framer-motion'
import GradientText from '../ui/GradientText'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

const contacts = [
  {
    icon: '✉',
    label: 'Email',
    value: 'ayaanperera101@gmail.com',
    href: 'mailto:ayaanperera101@gmail.com',
    color: '#2997ff',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+94 760 358 561',
    href: 'tel:+94760358561',
    color: '#30d158',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Mulleriyawa New Town, Sri Lanka',
    href: null,
    color: '#ff9f0a',
  },
  {
    icon: '🎓',
    label: 'Reference',
    value: 'Dr. Mohamed Azmeer · SLTC',
    href: 'mailto:azmeerm@sltc.ac.lk',
    color: '#bf5af2',
  },
]

function ContactCard({ item, index }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-60px', once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.04, y: -4 }}
      style={{
        padding: '28px 28px',
        borderRadius: 18,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        cursor: item.href ? 'pointer' : 'default',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        textDecoration: 'none',
        willChange: 'transform',
      }}
      onHoverStart={e => {
        if (e.target) {
          e.target.style.borderColor = item.color + '50'
          e.target.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px ${item.color}20`
        }
      }}
      onHoverEnd={e => {
        if (e.target) {
          e.target.style.borderColor = 'rgba(255,255,255,0.08)'
          e.target.style.boxShadow = 'none'
        }
      }}
    >
      <span style={{ fontSize: 28 }}>{item.icon}</span>
      <span style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: item.color,
      }}>
        {item.label}
      </span>
      <span style={{ fontSize: 14, color: '#a1a1a6', lineHeight: 1.5, wordBreak: 'break-word' }}>
        {item.value}
      </span>
    </motion.div>
  )

  if (item.href) {
    return (
      <a href={item.href} style={{ textDecoration: 'none' }}>
        {inner}
      </a>
    )
  }
  return inner
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'max(80px, 10vh) max(24px, 8vw) max(60px, 8vh)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal direction="up">
          <p className="section-label" style={{ marginBottom: 12 }}>Contact</p>
          <h2 className="text-display" style={{ marginBottom: 16 }}>
            Let's <GradientText>work together</GradientText>
          </h2>
          <p className="text-body-lg" style={{ color: '#a1a1a6', marginBottom: 52, maxWidth: 520 }}>
            I'm currently open to internship and junior developer opportunities. Reach out and let's build something great.
          </p>
        </ScrollReveal>

        {/* Contact grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
          marginBottom: 52,
        }}>
          {contacts.map((item, i) => (
            <ContactCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MagneticButton
              href="mailto:ayaanperera101@gmail.com"
              className=""
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '16px 40px',
                  borderRadius: 100,
                  fontSize: 16,
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #2997ff, #bf5af2)',
                  color: '#fff',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: 'inherit',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                <span>✉</span>
                Send me an email
              </span>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 80, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 13, color: '#6e6e73' }}>
            © 2025 Trevin Perera · Designed & built with React
          </p>
        </div>
      </div>
    </section>
  )
}
