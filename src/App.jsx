import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="stopwatch" element={<StopWatch />} />
        <Route path="timer" element={<Timer />} />
      </Routes>
    </>
  );
}

export default App;
