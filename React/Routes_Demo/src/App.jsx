import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Pages/Layout'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="*" element={<Layout />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
