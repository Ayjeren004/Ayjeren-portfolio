import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  { category: 'AI & Automation', items: 'Claude, OpenAI (GPT-4), Ollama, Whisper, RAG, Prompt Engineering, NLP, OCR' },
  { category: 'Programming', items: 'TypeScript, JavaScript, Python, SQL, PHP, Java, Kotlin, C#' },
  { category: 'Web & Backend', items: 'Node.js, React, Flask, Laravel, HTML5, CSS3, REST APIs, WordPress' },
  { category: 'Tools & Systems', items: 'Linux (Ubuntu/Debian), PM2, Git, Odoo XML-RPC, 3CX Call Flow Designer' },
  { category: 'Databases', items: 'MySQL, SQL Server, Oracle' },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-item', 
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15,
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
    <section id="about" className="py-24 px-4 min-h-screen flex items-center bg-slate-900/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="about-item text-4xl md:text-5xl font-bold mb-8 text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="about-item bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am a Software Engineer with a BS in Mathematics (Data Science) and hands-on experience building AI-powered automation systems and user-centric web applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in architecting production-grade workflows using OpenAI, Claude, and Llama, and translating complex technical data into intuitive dashboards for non-technical teams. I thrive in fast-paced environments delivering high-impact, maintainable software.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="about-item text-2xl font-semibold text-white mb-4">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="about-item bg-slate-800/40 p-4 rounded-xl border border-slate-700/30 transition-transform hover:scale-[1.02]">
                <h4 className="text-indigo-400 font-medium mb-2">{skill.category}</h4>
                <p className="text-slate-300 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
