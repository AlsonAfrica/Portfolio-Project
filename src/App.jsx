import './App.css'
import Navbar from './Components/navbar'
import HomePage from './Components/homepage'
import SkillsMatrix from './Components/skillsmatrix'
import ProjectGrid from './Components/Projects'
import AssessmentTable from './Components/Assessments'
import FeedbackReflections from './Components/Reflections'
import ContactPage from './Components/contacts'
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
        <Route path="/assessments" element={<AssessmentTable/>}/>
        <Route path="/reflections" element={<FeedbackReflections/>}/>
        <Route path="/contacts" element={<ContactPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
