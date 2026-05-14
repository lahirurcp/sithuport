import Nav from './components/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div style={{ background: '#1d1d1f', minHeight: '100vh', color: '#f5f5f7' }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
