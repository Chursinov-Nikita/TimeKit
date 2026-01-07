import { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router';

const StopWatch = () => {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const IntervalRef = useRef(0)
  
  const formatTime = (ms) => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const mss = Math.floor((ms % 1000) / 10);
    
    return [
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
      mss.toString().padStart(2, '0'),
    ].join(' : ')
  }

  useEffect(() => {
    if (isRunning) {
      IntervalRef.current = setInterval(() => {
        setTime(time => time + 10)
      }, 10)
    }

    else {
      clearInterval(IntervalRef.current)
    }

    return () => clearInterval(IntervalRef.current);
  }, [isRunning])

  function go () {
    setIsRunning(true)
  }

  function stop () {
    setIsRunning(false)
  }

  function reset () {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <>
        <div>
            <p>{formatTime(time)}</p>
        <button onClick={go}>Go</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </div>
        <NavLink to='/timer'>Timer</NavLink>
    </>
  )
}

export default StopWatch