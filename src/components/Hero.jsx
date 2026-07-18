import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4" ref={textRef}>
      <div className="z-10 bg-slate-900/40 p-8 rounded-3xl backdrop-blur-sm border border-slate-800/50 shadow-2xl">
        <h1 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Ayjeren</span>
        </h1>
        <h2 className="hero-text text-xl md:text-3xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
          Software Engineer & Data Scientist specializing in AI-powered automation and user-centric web applications.
        </h2>
        <a href="#about" className="hero-text inline-block bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-indigo-500/30">
          Discover My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
