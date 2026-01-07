import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <nav>
        <NavLink to="stopwatch">StopWatch</NavLink>
        <br />
        <NavLink to="timer">Timer</NavLink>
    </nav>
  )
}

export default Home