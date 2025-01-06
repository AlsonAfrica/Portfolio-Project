import './App.css'
import Navbar from './Components/navbar'
import HomePage from './Components/homepage'
import SkillsMatrix from './Components/skillsmatrix'
import ProjectGrid from './Components/Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      {/* Navbar consistent across the pages */}
      <Navbar/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skills" element={<SkillsMatrix/>}/>
        <Route path="/projects" element={<ProjectGrid/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
