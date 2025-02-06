import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

function App() {
  

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleClick1() {
    dispatch(increment());
  }

  function handleClick2() {
    dispatch(decrement());
  }

  return (
    <>
     <div className='container'>
        <button onClick={handleClick1}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleClick2}> - </button>
     </div>
    </>
  )
}

export default App
