import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='list'>
      <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active-link" : ""} id='home'>
              Home</NavLink>
            </li>

            <li >
              <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active-link" : ""} id='about'>About</NavLink>
            </li>


            <li >
                <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active-link" : ""} id='contact'>
                 Contact
                </NavLink>
            </li>
          </ul>
      </nav>
      </div>
  )
}

export default Navbar
