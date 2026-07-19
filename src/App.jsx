import React from 'react';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="relative w-full min-h-screen text-slate-800 bg-pink-100 font-sans selection:bg-rose-500/30 selection:text-white">
      
      {/* Top subtle visual accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 opacity-80" />

      {/* Main layout wrapper */}
      <main className="relative z-10">
        <BentoGrid />
      </main>

      {/* Subtle modern footer */}
      <footer className="w-full py-8 text-center border-t border-pink-200 bg-pink-100 text-slate-800 text-xs font-mono">
        &copy; 2026 AYJEREN KOSSEKOVA. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default App;
