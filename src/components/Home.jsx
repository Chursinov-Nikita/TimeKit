import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-6">
      <div className="mb-4 text-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-2">
          Select Mode
        </p>
        <h1 className="text-white font-mono text-4xl font-bold tracking-tight">
          ⏱ TimeKit
        </h1>
      </div>
      <nav className="flex flex-col gap-3 w-56">
        <NavLink
          to="stopwatch"
          className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 text-center text-white font-mono text-sm tracking-widest uppercase py-4 px-8 rounded-xl transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <span className="relative z-10">Stopwatch</span>
        </NavLink>
        <NavLink
          to="timer"
          className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 text-center text-white font-mono text-sm tracking-widest uppercase py-4 px-8 rounded-xl transition-all duration-300 hover:border-violet-500 hover:text-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          <span className="relative z-10">Timer</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
