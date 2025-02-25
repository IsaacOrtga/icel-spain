import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './pages/login/LoginPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
