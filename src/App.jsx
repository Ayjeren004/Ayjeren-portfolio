import React from 'react';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="relative w-full min-h-screen text-slate-100 bg-[#030712] font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* Top subtle visual accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-80" />

      {/* Main layout wrapper */}
      <main className="relative z-10">
        <BentoGrid />
      </main>

      {/* Subtle modern footer */}
      <footer className="w-full py-8 text-center border-t border-slate-900 bg-[#030712] text-slate-600 text-xs font-mono">
        &copy; 2026 AYJEREN KOSSEKOVA. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default App;
