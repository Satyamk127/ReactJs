import { Navigate, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Experience from './components/Experience'
import Home from './components/Home'
import Service from './components/Service'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
