import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const education = [
  {
    degree: 'Bachelor of Science in Mathematics (Data Science)',
    school: 'Montana State University Billings',
    date: 'Dec 2025'
  },
  {
    degree: 'Associate of Applied Science (Computer Programming & App Development)',
    school: 'Montana State University Billings',
    date: 'May 2024'
  }
];

const certifications = [
  { name: 'Python (Basic)', issuer: 'HackerRank', date: 'Dec 2025' },
  { name: 'SQL (Intermediate)', issuer: 'HackerRank', date: 'Aug 2024' }
];

const awards = [
  { name: '2026 Outstanding Mathematics Scholar Award', issuer: 'Montana State University Billings' },
  { name: 'GPS Satellite Visualization Research', issuer: 'Co-author on a scientific animation project' }
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.edu-card', 
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
    <section id="education" className="py-24 px-4 bg-pink-100/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="edu-card text-3xl font-bold mb-8 text-pink-600">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card bg-white/40 p-6 rounded-2xl border border-pink-200/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-pink-600">{edu.degree}</h3>
                <p className="text-rose-500 mt-1">{edu.school}</p>
                <p className="text-slate-800 text-sm mt-2">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="edu-card text-3xl font-bold mb-8 text-pink-600">Awards & Certifications</h2>
          <div className="space-y-6">
            <div className="edu-card bg-white/40 p-6 rounded-2xl border border-pink-200/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-pink-600 mb-4">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="text-slate-800">
                    <span className="font-medium">{cert.name}</span> <span className="text-slate-800 text-sm">— {cert.issuer} ({cert.date})</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="edu-card bg-white/40 p-6 rounded-2xl border border-pink-200/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-pink-600 mb-4">Awards & Research</h3>
              <ul className="space-y-3">
                {awards.map((award, idx) => (
                  <li key={idx} className="text-slate-800">
                    <span className="font-medium text-indigo-300">{award.name}</span>
                    <p className="text-sm text-slate-800 mt-1">{award.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
