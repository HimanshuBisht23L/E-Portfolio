import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/App.css'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import LearningPage from './pages/LearningPage.jsx'
import SelfLearningPage from './pages/SelfLearningPage.jsx'
import SelfQuestionsPage from './pages/SelfQuestionsPage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learning/self-learning" element={<SelfLearningPage />} />
          <Route path="/learning/self-questions" element={<SelfQuestionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
