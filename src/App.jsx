import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Blog from './components/Blog'
import Contact from './components/Contact'

// Layout component that handles the navigation buttons and theme
function Layout({ toggleTheme, theme }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === ''

  return (
    <div className="min-h-screen p-4 flex items-center justify-center transition-colors duration-300 dark:bg-zinc-900/50 bg-zinc-100">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl p-4 relative"
      >
        {/* Navigation Controls */}
        {!isHome && (
          <div className="fixed top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 flex justify-between items-center z-50">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate('/')}
              className="rounded-full p-3 dark:bg-zinc-800/30 bg-zinc-200/70 backdrop-blur-sm
                        border border-zinc-700/20 
                        dark:text-zinc-100 text-zinc-800
                        transition-all duration-200 hover:scale-105"
              aria-label="Go back to home"
            >
              <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleTheme}
              className="rounded-full p-3 dark:bg-zinc-800/30 bg-zinc-200/70 backdrop-blur-sm
                        border border-zinc-700/20  
                        dark:text-zinc-100 text-zinc-800
                        transition-all duration-200 hover:scale-105"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? 
                <FaSun className="w-4 h-4 sm:w-5 sm:h-5" /> : 
                <FaMoon className="w-4 h-4 sm:w-5 sm:h-5" />
              }
            </motion.button>
          </div>
        )}

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Home navigateTo={(path) => navigate(path)} theme={theme} toggleTheme={toggleTheme} />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <About navigateTo={(path) => navigate(path)} />
              </motion.div>
            } />
            <Route path="/works" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Works navigateTo={(path) => navigate(path)} />
              </motion.div>
            } />
            <Route path="/blog" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Blog navigateTo={(path) => navigate(path)} />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Contact navigateTo={(path) => navigate(path)} />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

function App() {
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

  return (
    <Router>
      <Layout toggleTheme={toggleTheme} theme={theme} />
    </Router>
  )
}

export default App