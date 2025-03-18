import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Tech from './components/Tech'
import { LoadingScreen } from './components/LoadingScreen'  // Changed to named import
import "./index.css"

function App() {
  const [isLoading, setIsLoading] = useState(false)  // Moved outside JSX
  
  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
