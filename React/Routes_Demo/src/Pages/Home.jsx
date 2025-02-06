import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Home.css';

const Home = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/about');
    }
  return (
    <div className='container'>
      <button onClick={handleClick}>Go to About</button>
      <button>Go to Contact</button>
    </div>
  )
}

export default Home
