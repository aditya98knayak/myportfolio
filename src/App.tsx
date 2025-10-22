import { useState, useEffect } from 'react'
import { Navigation, Hero, About, Skills, Projects, Experience, Contact, Footer } from './components'
import "@styles/main.scss";

function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  useEffect(() => {
    const handleScroll = (): void => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className="scroll-indicator"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
