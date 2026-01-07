import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const Timer = () => {

  const [inputValue, setInputValue] = useState();
  const [isRunning, setIsRunning] = useState(false);


  function dataInput (event) {
    setInputValue(event.target.value)
  }
  let interval = null;
  useEffect(() => {
    if (inputValue > 0 && isRunning) {
          interval = setInterval(() => {
      setInputValue(inputValue - 1)
    }, 1000) 
    }
    return () => clearInterval(interval);
  }, [isRunning, inputValue]);

  function go () {
    setIsRunning(true)
  }

  function reset () {
    setInputValue(0)
    setIsRunning(false)
  }

  return (
    <>
        <input placeholder='Enter time in seconds' onChange={dataInput} type="number" value={inputValue}/>
        <button onClick={go}>Go</button>
        <button onClick={reset}>Reset</button>
        <br />
        <NavLink to='/stopwatch'>Stopwatch</NavLink>
    </>
  )
}

export default Timer