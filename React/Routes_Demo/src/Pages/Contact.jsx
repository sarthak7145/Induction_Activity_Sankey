import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate();

    function handleClick1()
    {
        navigate('/contact/developer');
    }

    function handleClick2()
    {
        navigate('/contact/designer')
    }

    function handleClick3() {
        navigate('/contact/tester');
    }
  return (
    <div>
      {/* <NavLink to="/contact/developer"> */}
        <button onClick={handleClick1}>Developers Contact</button>
      {/* </NavLink> */}

      {/* <NavLink to="/contact/designer"> */}
        <button onClick={handleClick2}>Designers Contact</button>
      {/* </NavLink> */}

      {/* <NavLink to="/contact/tester"> */}
        <button onClick={handleClick3}>Testers Contact</button>
      {/* </NavLink> */}
    </div>
  )
}

export default Contact
