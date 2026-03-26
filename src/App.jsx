import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import TechArsenalSection from './components/sections/TechArsenalSection'
import SelectedWorksSection from './components/sections/SelectedWorksSection'
import MilestonesSection from './components/sections/MilestonesSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#arsenal' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#milestones' },
  { label: 'Contact', href: '#contact' },
]

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // ignore localStorage errors
  }
  return 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeHref, setActiveHref] = useState('#top')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore localStorage errors
    }
  }, [theme])

  useEffect(() => {
    const applyFromHash = () => {
      setActiveHref(window.location.hash || '#top')
    }
    applyFromHash()
    window.addEventListener('hashchange', applyFromHash)
    return () => window.removeEventListener('hashchange', applyFromHash)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-surface text-on-surface-variant">
      <div className="pointer-events-none fixed inset-0 bg-surface-fade" />

      <Navbar
        links={links}
        activeHref={activeHref}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      <main className="relative pb-28 pt-24">
        <HeroSection />
        <AboutSection />
        <TechArsenalSection />
        <SelectedWorksSection />
        <MilestonesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
