import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'One Stop Management',
    location: 'Brooklyn, NY',
    date: 'Jan 2026 – Present',
    details: [
      'Architected a real-time communication platform integrating 3CX VoIP and Odoo ERP; processed 400,000+ telephony records.',
      'Designed and deployed custom analytics dashboards using Python and Flask for HR and management teams.',
      'Built modular pipelines using OpenAI Whisper and Ollama to process 13,000+ recordings; integrated Claude API for sentiment analysis.',
      'Engineered a "screen-pop" system to provide instant customer context from Odoo APIs.',
    ]
  },
  {
    role: 'Advanced AI-Powered Document Insights Extern',
    company: 'Outamation',
    location: 'Remote',
    date: 'Dec 2025 – Present',
    details: [
      'Processed large unstructured documents using OCR and NLP workflows to extract and structure key business data.',
      'Developed searchable document insight systems using Retrieval-Augmented Generation (RAG) and metadata filtering.'
    ]
  },
  {
    role: 'Web Engineer',
    company: "Mommy's Heart Inc.",
    location: 'New York, NY',
    date: 'Dec 2025 – Jan 2026',
    details: [
      'Developed responsive web features and improved accessibility/SEO performance for a high-traffic WordPress site.'
    ]
  },
  {
    role: 'Information Security & IT Intern',
    company: 'Billings Clinic',
    location: 'Billings, MT',
    date: 'Jun 2024 – Nov 2025',
    details: [
      'Provisioned and audited user access across Oracle IAM and Cerner systems to ensure healthcare compliance.'
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-card', 
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.2,
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
    <section id="experience" className="py-24 px-4 min-h-screen bg-pink-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-pink-600 exp-card">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card relative pl-8 border-l-2 border-indigo-500/50 pb-8 last:pb-0">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1 ring-4 ring-slate-900"></div>
              <div className="bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-pink-200/50 hover:bg-white/60 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-pink-600">{exp.role}</h3>
                    <p className="text-rose-500 font-medium text-lg">{exp.company} <span className="text-slate-800 text-sm ml-2">| {exp.location}</span></p>
                  </div>
                  <span className="text-slate-800 text-sm bg-pink-100/50 px-3 py-1 rounded-full mt-2 sm:mt-0">{exp.date}</span>
                </div>
                <ul className="list-disc list-inside text-slate-800 space-y-2 text-sm md:text-base">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
