import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Works from './pages/Works'
import Blogs from './pages/Blog'
import Contact from './pages/Contact'
import { CustomScrollbar } from './components/CustomScrollbar'
function App() {
 
  return (
    <>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    <CustomScrollbar/>
    </>
  )
}

export default App
