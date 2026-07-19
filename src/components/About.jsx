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
    <section id="about" className="py-24 px-4 min-h-screen flex items-center bg-pink-100/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="about-item text-4xl md:text-5xl font-bold mb-8 text-pink-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="about-item bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-pink-200/50">
            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              I originally got into coding to automate data analysis for my university math and data science research. Today, I'm a Software Engineer specializing in building full-stack applications and AI pipelines.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed">
              I focus on practical problem solving—whether that means using local LLMs to process hundreds of thousands of telephony records, or integrating FastAPI with vector databases to search enterprise documents. I enjoy writing clean code and bridging the gap between complex backend systems and usable, intuitive interfaces.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="about-item text-2xl font-semibold text-pink-600 mb-4">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="about-item bg-white/40 p-4 rounded-xl border border-pink-200/30 transition-transform hover:scale-[1.02]">
                <h4 className="text-rose-500 font-medium mb-2">{skill.category}</h4>
                <p className="text-slate-800 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
