import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App