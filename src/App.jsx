import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingSpinner } from './components/LoadingSpinner'
import { CustomScrollbar } from './components/CustomScrollbar'
import './styles/performance.css'

const Hero = lazy(() => import('./pages/Hero'))
const About = lazy(() => import('./pages/About'))
const Works = lazy(() => import('./pages/Works'))
const Blogs = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/blog" element={<Blogs/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Suspense>
      </AnimatePresence>
      <CustomScrollbar/>
    </div>
  )
}

export default App