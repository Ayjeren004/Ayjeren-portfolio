import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Server, Database, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'GreenConnect2: Eco-Social Network',
    type: 'Featured Showcase Project',
    description: 'A premium, gamified social platform for eco-conscious advocates. Built with a robust Laravel MVC architecture and a stunning Glassmorphism UI. Features an interactive Eco-Impact Dashboard and Eco-Gift Marketplace.',
    tech: ['Laravel', 'PHP 8.5', 'SQLite', 'Bootstrap', 'Glassmorphism', 'Blade'],
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    featured: true,
    link: 'https://greenconnect2.onrender.com',
    repo: 'https://github.com/Ayjeren004/GreenConnect2'
  },
  {
    title: 'Enterprise Document AI (RAG Engine)',
    type: 'Featured Showcase Project',
    description: 'A production-grade Retrieval-Augmented Generation (RAG) system built to extract, index, and query unstructured business documents. Features a FastAPI backend, vector database integration, and a React dashboard.',
    tech: ['Python', 'FastAPI', 'React', 'ChromaDB', 'LLMs', 'Tailwind'],
    icon: <Database className="w-8 h-8 text-indigo-400" />,
    featured: true,
    link: 'http://localhost:8000',
    repo: '#'
  },
  {
    title: 'AI Telephony & Sentiment Pipeline',
    type: 'Architecture Case Study',
    description: 'Designed an asynchronous pipeline processing 400,000+ VoIP records. Utilized local Whisper models for transcription and Claude API for NLP-based sentiment analysis, feeding into a custom Flask analytics dashboard.',
    tech: ['Python', 'Whisper', 'Ollama', 'Claude API', 'Flask', 'MySQL'],
    icon: <Server className="w-8 h-8 text-blue-400" />,
    featured: true,
    link: 'http://localhost:5001',
    repo: '#'
  },
  {
    title: 'GPS Satellite Data Visualization',
    type: 'Academic Research',
    description: 'Co-authored scientific research modeling environmental data. Developed high-fidelity 3D animations and visual dashboards to track GPS satellite transmission loss and transmissivity.',
    tech: ['Data Modeling', '3D Visualization', 'Data Science', 'Mathematics'],
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    featured: false,
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 min-h-screen bg-slate-950" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
        <p className="text-slate-400 mb-12 max-w-2xl text-lg">
          A selection of production-grade systems and AI pipelines I've built, focusing on scalability, clean architecture, and real-world utility.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`project-card group relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 flex flex-col h-full
                ${project.featured 
                  ? 'bg-indigo-900/20 border-indigo-500/50 hover:bg-indigo-900/30 lg:col-span-2 lg:flex-row gap-8 shadow-lg shadow-indigo-900/20' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60'
                }`}
            >
              <div className="mb-6 lg:mb-0 flex-shrink-0">
                <div className="p-4 bg-slate-900/50 rounded-2xl inline-block border border-slate-700/50">
                  {project.icon}
                </div>
              </div>
              
              <div className="flex-col flex flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-800/50">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-2">{project.title}</h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-slate-400 bg-slate-900/50 px-3 py-1 rounded-md border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>

                {project.featured && (
                  <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                    <a href={project.repo} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" /> Source Code
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
