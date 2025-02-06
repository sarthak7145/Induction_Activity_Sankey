import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Company from './Company'
import Industry from './Industry';
import Navbar from './Navbar'
import Contact from './Contact';
import Developer from './Developer';
import Designer from './Designer';
import Tester from './Tester';
const Layout = () => {
  return (
    <div>
      <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="company" element={<Company />}/>
                <Route path="industry" element={<Industry />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/developer" element={<Developer />} />
            <Route path="/contact/designer" element={<Designer />} />
            <Route path="contact/tester" element={<Tester /> } />
        </Routes>

    </div>
  )
}

export default Layout
