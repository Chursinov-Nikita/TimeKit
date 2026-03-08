import React from "react";
import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const IntervalRef = useRef(0);

  const formatTime = (ms) => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const mss = Math.floor((ms % 1000) / 10);
    return [
      mins.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
      mss.toString().padStart(2, "0"),
    ];
  };

  useEffect(() => {
    if (isRunning) {
      IntervalRef.current = setInterval(() => setTime((t) => t + 10), 10);
    } else {
      clearInterval(IntervalRef.current);
    }
    return () => clearInterval(IntervalRef.current);
  }, [isRunning]);

  const [mins, secs, ms] = formatTime(time);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-10">
      <NavLink
        to="/"
        className="text-zinc-600 hover:text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase transition-colors"
      >
        ← Back
      </NavLink>

      <div className="text-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
          Stopwatch
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-10 py-8 shadow-[0_0_60px_rgba(6,182,212,0.08)] mb-8">
          <div className="flex items-center gap-2 font-mono">
            <span
              className={`text-7xl font-bold tabular-nums transition-colors duration-200 ${isRunning ? "text-cyan-400" : "text-white"}`}
            >
              {mins}
            </span>
            <span className="text-4xl text-zinc-600 mb-2">:</span>
            <span
              className={`text-7xl font-bold tabular-nums transition-colors duration-200 ${isRunning ? "text-cyan-400" : "text-white"}`}
            >
              {secs}
            </span>
            <span className="text-4xl text-zinc-600 mb-2">.</span>
            <span
              className={`text-5xl font-bold tabular-nums transition-colors duration-200 self-end mb-2 ${isRunning ? "text-cyan-300 opacity-80" : "text-zinc-400"}`}
            >
              {ms}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
            className="flex-1 py-3 px-6 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-950 font-mono font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Go
          </button>
          <button
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
            className="flex-1 py-3 px-6 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-200 border border-zinc-700"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
            className="flex-1 py-3 px-6 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-200 border border-zinc-800"
          >
            Reset
          </button>
        </div>
      </div>

      <NavLink
        to="/timer"
        className="text-zinc-600 hover:text-violet-400 font-mono text-xs tracking-[0.3em] uppercase transition-colors"
      >
        Switch to Timer →
      </NavLink>
    </div>
  );
};

export default StopWatch;
