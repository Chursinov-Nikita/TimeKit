import React from "react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

const Timer = () => {
  const [inputValue, setInputValue] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const totalTimeRef = useRef("");

  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const progress =
    totalTimeRef.current > 0 ? inputValue / totalTimeRef.current : 1;
  const strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    if (!isRunning || inputValue <= 0) return;
    const interval = setInterval(() => {
      setInputValue((v) => {
        if (v - 1 <= 0) {
          setIsRunning(false);
          setFinished(true);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  function go() {
    totalTimeRef.current = inputValue;
    setIsRunning(true);
    setFinished(false);
  }

  function reset() {
    setInputValue("");
    setIsRunning(false);
    setFinished(false);
    totalTimeRef.current = "";
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-10">
      <NavLink
        to="/"
        className="text-zinc-600 hover:text-violet-500 font-mono text-xs tracking-[0.3em] uppercase transition-colors"
      >
        ← Back
      </NavLink>

      <div className="text-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
          Timer
        </p>

        {/* Ring Display */}
        <div className="relative flex items-center justify-center mb-8">
          <svg width="200" height="200" className="-rotate-90">
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#27272a"
              strokeWidth="8"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={finished ? "#a78bfa" : isRunning ? "#8b5cf6" : "#3f3f46"}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            {isRunning || inputValue > 0 ? (
              <span
                className={`font-mono text-5xl font-bold tabular-nums ${
                  finished
                    ? "text-violet-400"
                    : isRunning
                      ? "text-violet-300"
                      : "text-white"
                }`}
              >
                {String(Math.floor(inputValue / 60)).padStart(2, "0")}:
                {String(inputValue % 60).padStart(2, "0")}
              </span>
            ) : (
              <span className="text-zinc-600 font-mono text-sm">--:--</span>
            )}
            {finished && (
              <span className="text-violet-400 text-xs font-mono tracking-widest mt-1 animate-pulse">
                DONE
              </span>
            )}
          </div>
        </div>

        <input
          placeholder="Seconds..."
          onChange={(e) => {
            setInputValue(Number(e.target.value));
            setFinished(false);
            totalTimeRef.current = "";
          }}
          type="number"
          value={inputValue}
          disabled={isRunning}
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 text-white font-mono text-center text-lg py-3 px-4 rounded-xl outline-none transition-colors mb-4 disabled:opacity-40 placeholder-zinc-600"
        />

        <div className="flex gap-3">
          <button
            onClick={go}
            disabled={isRunning || !inputValue}
            className="flex-1 py-3 px-6 bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:cursor-not-allowed text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            Go
          </button>
          <button
            onClick={reset}
            className="flex-1 py-3 px-6 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-200 border border-zinc-800"
          >
            Reset
          </button>
        </div>
      </div>

      <NavLink
        to="/stopwatch"
        className="text-zinc-600 hover:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase transition-colors"
      >
        Switch to Stopwatch →
      </NavLink>
    </div>
  );
};

export default Timer;
