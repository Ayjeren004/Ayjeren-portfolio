import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Server, Database, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'GreenConnect2: Eco-Social Network',
    type: 'Featured Showcase Project',
    description: 'Full-stack social platform built with Laravel 11. Implemented a gamified points system using SQLite and designed a custom glassmorphism UI from scratch using vanilla CSS.',
    tech: ['Laravel', 'PHP 8.5', 'SQLite', 'Bootstrap', 'Glassmorphism', 'Blade'],
    icon: <Database className="w-8 h-8 text-rose-600" />,
    featured: true,
    link: 'https://greenconnect2.onrender.com',
    repo: 'https://github.com/Ayjeren004/GreenConnect2'
  },
  {
    title: 'Enterprise Document AI (RAG Engine)',
    type: 'Featured Showcase Project',
    description: 'A Retrieval-Augmented Generation (RAG) system that extracts and indexes unstructured business documents. Built with a FastAPI backend connected to ChromaDB, serving a React-based search interface.',
    tech: ['Python', 'FastAPI', 'React', 'ChromaDB', 'LLMs', 'Tailwind'],
    icon: <Database className="w-8 h-8 text-rose-500" />,
    featured: true,
    link: 'http://localhost:8000',
    repo: '#'
  },
  {
    title: 'Callara: AI Telephony & QA Pipeline',
    type: 'Featured Showcase Project',
    description: 'Developer dashboard and call intelligence simulator. Transcribes voice calls with Whisper, runs sentiment parsing, and evaluates custom QA criteria checks using LLM rules. Provides secret key generation and SDK snippets.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Whisper', 'LLMs'],
    icon: <Server className="w-8 h-8 text-rose-500" />,
    featured: true,
    link: 'https://callara.vercel.app',
    repo: 'https://github.com/Ayjeren004/callara'
  },
  {
    title: 'GPS Satellite Data Visualization',
    type: 'Academic Research',
    description: 'Accepted for publication in POS Journal (Aug 2026). Co-authored scientific research modeling environmental data. Built 3D visual dashboards to track and analyze GPS satellite transmission loss and transmissivity.',
    tech: ['Data Modeling', '3D Visualization', 'Data Science', 'Mathematics'],
    icon: <Code2 className="w-8 h-8 text-rose-600" />,
    featured: false,
    links: [
      { label: 'Watch TL Animation', url: 'https://www.youtube.com/watch?v=FqIQtUu4WA8' },
      { label: 'Watch TR Animation', url: 'https://www.youtube.com/watch?v=5HvX5tV4g90' }
    ]
  },
  {
    title: 'Niko OS',
    type: 'Interactive Web OS',
    description: 'A web-based operating system UI built with React. Demonstrates complex frontend state management, windowing systems, and component architecture.',
    tech: ['React', 'Frontend', 'Vercel'],
    icon: <Server className="w-8 h-8 text-pink-600" />,
    featured: true,
    link: 'https://niko-os.vercel.app',
    repo: '#'
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
    <section id="projects" className="py-24 px-4 min-h-screen bg-pink-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-600">Featured Projects</h2>
        <p className="text-slate-800 mb-12 max-w-2xl text-lg">
          A selection of production-grade systems and AI pipelines I've built, focusing on scalability, clean architecture, and real-world utility.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`project-card group relative p-8 rounded-3xl  border transition-all duration-300 flex flex-col h-full
                ${project.featured 
                  ? 'bg-rose-50 border-indigo-500/50 hover:bg-rose-100/30 lg:col-span-2 lg:flex-row gap-8 shadow-xl shadow-pink-100 shadow-rose-200/20' 
                  : 'bg-white border-pink-200/50 hover:bg-white/60'
                }`}
            >
              <div className="mb-6 lg:mb-0 flex-shrink-0">
                <div className="p-4 bg-pink-100/50 rounded-2xl inline-block border border-pink-200/50">
                  {project.icon}
                </div>
              </div>
              
              <div className="flex-col flex flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold tracking-wider text-rose-500 uppercase bg-rose-100/50 px-3 py-1 rounded-full border border-rose-300/50">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-pink-600 mb-3 mt-2">{project.title}</h3>
                <p className="text-slate-800 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-slate-800 bg-pink-100/50 px-3 py-1 rounded-md border border-pink-200/50">
                      {t}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="flex gap-4 pt-4 border-t border-pink-200/50 flex-wrap">
                    {project.links.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-rose-500 hover:text-indigo-300 transition-colors">
                        <ExternalLink className="w-4 h-4" /> {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {project.featured && !project.links && (
                  <div className="flex gap-4 pt-4 border-t border-pink-200/50 flex-wrap">
                    <a href={project.repo} className="flex items-center gap-2 text-sm text-slate-800 hover:text-pink-600 transition-colors">
                      <Code2 className="w-4 h-4" /> Source Code
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-sm text-rose-500 hover:text-indigo-300 transition-colors">
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
