import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const sections = {
    home: <Home setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />,
    about: <About setActiveSection={setActiveSection} />,
    works: <Works setActiveSection={setActiveSection} />,
    blog: <Blog setActiveSection={setActiveSection} />,
    contact: <Contact setActiveSection={setActiveSection} />
  }

  return (
    <div className="min-h-screen p-4 flex items-center justify-center transition-colors duration-300 dark:bg-zinc-950 bg-zinc-100">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl p-4 relative"
      >
        {activeSection !== 'home' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="back-button"
            onClick={() => setActiveSection('home')}
          >
            <FaArrowLeft size={14} />
          </motion.button>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default App