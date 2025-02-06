import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';
import './About.css';
const About = () => {
  return (
    <div className='btn-container'>
        
      <NavLink to="company" >
        <button id='comp'>About Company</button>
      </NavLink>
      
      <NavLink to="industry" >
        <button id='indus'>About Industry</button>
      </NavLink>

      <Outlet />
    </div>
  );
}

export default About;
