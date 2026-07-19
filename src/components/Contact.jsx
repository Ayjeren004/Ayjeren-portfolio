import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Link, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-item', 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-24 px-4 bg-pink-100/80 min-h-[70vh] flex flex-col justify-center" ref={sectionRef}>
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="contact-item text-4xl md:text-5xl font-bold mb-6 text-pink-600">Let's Connect</h2>
        <p className="contact-item text-lg text-slate-800 mb-12 max-w-2xl mx-auto">
          Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you. 
          Currently open to new opportunities!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <a href="mailto:ayjerenkossekova005@gmail.com" className="contact-item flex items-center gap-3 bg-white/80 hover:bg-rose-400 transition-colors px-6 py-4 rounded-xl border border-pink-200/50 w-full sm:w-auto">
            <Mail className="text-rose-500 group-hover:text-pink-600" />
            <span className="text-slate-700">Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/ayjeren-kossekova" target="_blank" rel="noreferrer" className="contact-item flex items-center gap-3 bg-white/80 hover:bg-blue-600 transition-colors px-6 py-4 rounded-xl border border-pink-200/50 w-full sm:w-auto">
            <Link className="text-rose-500" />
            <span className="text-slate-700">LinkedIn</span>
          </a>
          <a href="tel:4065912190" className="contact-item flex items-center gap-3 bg-white/80 hover:bg-emerald-600 transition-colors px-6 py-4 rounded-xl border border-pink-200/50 w-full sm:w-auto">
            <Phone className="text-rose-600" />
            <span className="text-slate-700">(406) 591-2190</span>
          </a>
        </div>

        <p className="contact-item text-slate-800 text-sm">
          &copy; {new Date().getFullYear()} Ayjeren Kossekova. Built with React & Three.js.
        </p>
      </div>
    </section>
  );
};

export default Contact;
