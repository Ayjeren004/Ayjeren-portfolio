import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Database, Cpu, Award, BookOpen, Mail, 
  FileText, Play, RefreshCw, Send, ChevronRight, Activity, Zap, CheckCircle, ExternalLink, Code, Briefcase,
  Phone, PhoneCall, PhoneOff, UserPlus
} from 'lucide-react';
import gsap from 'gsap';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function BentoGrid() {
  const [consoleInput, setConsoleInput] = useState('');
  const [consoleHistory, setConsoleHistory] = useState([
    { type: 'system', text: 'Niko OS v1.2.0 (Offline speech-to-text LLM runtime) active.' },
    { type: 'system', text: 'Type "help" to view custom agent prompts or "diagnostics" to check system health.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [rainDensity, setRainDensity] = useState(40);
  const [gpsFrequency, setGpsFrequency] = useState(1.5);
  const [precipitationMode, setPrecipitationMode] = useState('Light Rain');
  const [telemetryCount, setTelemetryCount] = useState(412850);
  const [callState, setCallState] = useState('idle'); // 'idle', 'ringing', 'connected'
  const [callerType, setCallerType] = useState('existing'); // 'existing', 'new', 'internal'
  const [newContactCreated, setNewContactCreated] = useState(false);
  
  // Wrap Up States
  const [wrapUpStep, setWrapUpStep] = useState('details'); // 'details', 'wrapup', 'logged'
  const [selectedContext, setSelectedContext] = useState('Order #4812');
  const [callNotes, setCallNotes] = useState('');
  const [isAiRewriting, setIsAiRewriting] = useState(false);
  const [sendEmailChecked, setSendEmailChecked] = useState(true);
  const [scheduleFollowUp, setScheduleFollowUp] = useState(false);
  const [followUpDate, setFollowUpDate] = useState('');
  const [selectedDisposition, setSelectedDisposition] = useState('Resolved');
  const [newCustomerTempProfile, setNewCustomerTempProfile] = useState(true);
  const [logs, setLogs] = useState([
    { time: '11:40:02', msg: 'INGEST: Received VoIP event payload' },
    { time: '11:40:05', msg: 'VALIDATE: Log verified & mapped to schema' },
    { time: '11:40:08', msg: 'STORE: Appended record to MySQL DB' }
  ]);

  const canvasRef = useRef(null);
  const logsContainerRef = useRef(null);
  const gridContainerRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: 'Niko OS',
      tagline: 'Offline AI Voice Assistant',
      desc: 'Built a local voice intelligence system featuring offline speech recognition, semantic vector retrieval (SQLite), and a desktop agent dashboard using Next.js and ONNX runtimes.',
      tech: ['Next.js', 'ONNX Runtime', 'SQLite', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Ayjeren004/niko-os',
      demo: 'https://niko-os.vercel.app',
      type: 'AI & Speech Recognition'
    },
    {
      title: 'VoIP Ingestion Inbound Flow',
      tagline: 'High-Throughput VoIP Pipeline',
      desc: 'Designed and implemented a database ingestion pipeline validating 400,000+ operational records daily. Integrated Whisper AI models to automatically catalog metadata from 10,000+ customer call logs.',
      tech: ['Node.js', 'TypeScript', 'MySQL', 'Python', 'Whisper API'],
      github: 'https://github.com/Ayjeren004/3cx-crm-simulator',
      demo: 'https://ayjeren-crm-simulator.web.app',
      type: 'Data Engineering'
    },
    {
      title: 'GPS Signal Attenuation Research',
      tagline: 'Atmospheric Attenuation Studies',
      desc: 'Co-authored statistical modeling research analyzing precipitation-induced satellite signal degradation. Developed regression curves and exploratory datasets evaluating GBR and local meteorological logs.',
      tech: ['Python', 'R Language', 'Data Modeling', 'LaTeX'],
      github: '#',
      type: 'Quantitative Research'
    },
    {
      title: 'GreenConnect 2.0',
      tagline: 'Eco-Friendly Social Network',
      desc: 'Built an interactive social platform for eco-conscious advocates to share sustainability ideas, log posts, follow green initiatives, and exchange digital gifts. Integrated Laravel Sanctum for secure API management.',
      tech: ['PHP', 'Laravel', 'Sanctum', 'SQLite', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Ayjeren004/GreenConnect2',
      demo: 'http://127.0.0.1:8001',
      type: 'Full Stack & API Design'
    }
  ];

  const experiences = [
    {
      role: 'Software Engineer & Data Analyst',
      company: 'Operations & Logistics Management Firm',
      location: 'Brooklyn, NY',
      period: 'Jan 2026 – Jul 2026',
      bullets: [
        'Designed and tested a Node.js/TypeScript pipeline to clean and ingest 400,000+ daily operational records into a MySQL database, optimizing query performance and database indexing.',
        'Deployed Python/Flask REST APIs to connect telephony event logging to an Odoo ERP database system, ensuring secure authentication and real-time UI tracking.',
        'Programmed a custom interactive voice response (IVR) utility using C# and 3CX Call Flow Designer, automating database lookups and routing calls dynamically based on real-time queries.',
        'Developed an automated Python transcription and summarization pipeline using OpenAI Whisper to compile unstructured call data from 10,000+ logs into searchable database records.'
      ]
    },
    {
      role: 'Advanced AI-Powered Insights Extern',
      company: 'Outamation (via Extern)',
      location: 'Remote',
      period: 'Dec 2025 – Present',
      bullets: [
        'Designed and optimized Retrieval-Augmented Generation (RAG) pipelines and metadata query systems in Python to analyze unstructured text document datasets.',
        'Programmed text parsing and OCR validation scripts in Python, debugging anomalies in high-throughput document processing pipelines.'
      ]
    },
    {
      role: 'Information Security Intern',
      company: 'Billings Clinic',
      location: 'Billings, MT',
      period: 'May 2025 – Nov 2025',
      bullets: [
        'Audited user databases, managing system permissions and security compliance for 400+ users across Oracle IAM and Active Directory.',
        'Reviewed enterprise IAM directory security controls in Oracle and Active Directory to align with HIPAA regulations.'
      ]
    },
    {
      role: 'IT Intern',
      company: 'Billings Clinic',
      location: 'Billings, MT',
      period: 'Jun 2024 – Oct 2024',
      bullets: [
        'Resolved 150+ IT support tickets, troubleshooting hardware, clinical software applications, and network connectivity issues for hospital medical and administrative staff.',
        'Assisted in configuring, deploying, and inventory tracking of hospital workstations and communication devices, ensuring zero disruption to critical patient-care networks.'
      ]
    },
    {
      role: 'Resident Assistant',
      company: 'Housing & Residence Life, MSU Billings',
      location: 'Billings, MT',
      period: 'Aug 2023 – Dec 2025',
      bullets: [
        'Managed log records, incident reporting, and safety protocols for a community of 400+ residents, partnering with university administration and housing directors.',
        'Led community engagement initiatives, resolved student disputes under pressure, and managed local housing budgets.',
        'Awarded the university\'s Outstanding Resident Assistant (RA) Award for exceptional community leadership.'
      ]
    },
    {
      role: 'Web Engineer (Volunteer)',
      company: 'Mommy\'s Heart',
      location: 'New York, NY (Hybrid)',
      period: 'Dec 2025 – Jan 2026',
      bullets: [
        'Collaborated on updating and maintaining public e-commerce web presence using HTML5 and CSS, ensuring cross-browser responsiveness.',
        'Optimized site SEO performance and metadata structures, enhancing organic traffic metrics.'
      ]
    },
    {
      role: 'Information Technology Student',
      company: 'IT Department, MSU Billings',
      location: 'Billings, MT',
      period: 'May 2023 – Aug 2023',
      bullets: [
        'Diagnosed workstation issues on Linux environments and assisted in troubleshooting local SQL Server database queries.'
      ]
    }
  ];

  // Mouse Spotlight Effect Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridContainerRef.current) return;
      const cards = cardsRef.current;
      
      cards.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    gsap.fromTo('.bento-card', 
      { y: 60, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' }
    );
  }, []);

  // Ingestion logs simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryCount(prev => prev + Math.floor(Math.random() * 5) + 1);
      
      const logTypes = [
        'INGEST: Telephony call record received',
        'VALIDATE: Sanitized UTF-8 payload metadata',
        'STORE: Updated event indexing in MySQL (0.02ms)',
        'WHISPER: Queueing transcription job #TR-' + Math.floor(Math.random() * 9000 + 1000),
        'AI_NLP: Extracted operational sentiment classification',
        'DOCKER: Container cluster node health check OK'
      ];
      
      const newLog = {
        time: new Date().toTimeString().split(' ')[0],
        msg: logTypes[Math.floor(Math.random() * logTypes.length)]
      };
      
      setLogs(prev => [...prev.slice(-3), newLog]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Update rain density based on dropdown mode
  useEffect(() => {
    if (precipitationMode === 'Clear Sky') setRainDensity(0);
    else if (precipitationMode === 'Light Rain') setRainDensity(35);
    else if (precipitationMode === 'Heavy Thunderstorm') setRainDensity(90);
  }, [precipitationMode]);

  // Scroll logs to bottom
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Canvas Drawing (GPS Carrier Signal Wave vs Atmosphere interference)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid lines
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1;
      const gridSpacing = 20;
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Attenuated Wave
      ctx.strokeStyle = '#059669'; // Emerald
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      
      const dampening = Math.exp(-rainDensity * 0.015);
      const amplitude = 30 * dampening;
      
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * 0.04 * gpsFrequency + phase) * amplitude;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      if (rainDensity > 10) {
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)'; // Multipath noise
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + Math.sin(x * 0.08 * gpsFrequency - phase) * (amplitude * 0.4);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Rain particles
      ctx.fillStyle = '#06b6d4'; // Cyan
      const rainCount = Math.floor(rainDensity / 3);
      for (let i = 0; i < rainCount; i++) {
        const rx = (Math.sin(phase + i * 200) * 0.5 + 0.5) * canvas.width;
        const ry = ((phase * 180 + i * 40) % canvas.height);
        ctx.fillRect(rx, ry, 1, 5);
      }

      phase += 0.04;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [rainDensity, gpsFrequency]);

  // Niko OS Simulated response
  const triggerNikoResponse = (replyLines) => {
    setIsTyping(true);
    let index = 0;
    
    const printNextLine = () => {
      if (index < replyLines.length) {
        setConsoleHistory(prev => [...prev, { type: 'reply', text: replyLines[index] }]);
        index++;
        setTimeout(printNextLine, 300);
      } else {
        setIsTyping(false);
      }
    };
    
    setTimeout(printNextLine, 400);
  };

  const handleAiRewrite = () => {
    if (!callNotes.trim()) return;
    setIsAiRewriting(true);
    setTimeout(() => {
      setCallNotes(prev => {
        const text = prev.toLowerCase();
        if (text.includes('latency') || text.includes('delay') || text.includes('lag')) {
          return "Customer reported latency issues on incoming VoIP channels. Checked database ingestion logs and optimized indexing parameters. Performance fully restored.";
        }
        if (text.includes('order') || text.includes('shipping') || text.includes('status')) {
          return "Inquiry regarding order tracking status. Verified Odoo invoice payment ledger. Dispatched tracking info to customer email.";
        }
        return "Customer call received regarding active query. Resolved issue and documented notes directly in the CRM communication feed.";
      });
      setIsAiRewriting(false);
    }, 800);
  };

  const handleConsoleSubmit = (e) => {
    e.preventDefault();
    if (isTyping) return;
    const cmd = consoleInput.trim().toLowerCase();
    if (!cmd) return;

    setConsoleHistory(prev => [...prev, { type: 'user', text: consoleInput }]);
    setConsoleInput('');

    let responses = [];
    if (cmd === 'help') {
      responses = [
        'Niko Command Core:',
        '  about        - Short professional overview',
        '  skills       - Query tech stack competency',
        '  projects     - View active production repositories',
        '  diagnostics  - Run simulated system boot sequence',
        '  clear        - Clear console output history'
      ];
      triggerNikoResponse(responses);
    } else if (cmd === 'about') {
      responses = [
        'Query: Profile metadata...',
        '• Name: Ayjeren Kossekova',
        '• Focus: Software Engineering & Data Analytics',
        '• Highlights: Graduated B.S. Math (Outstanding Scholar) & AAS Computer Programming.',
        '• Specialty: Node.js, Python, Flask, React, and local AI pipelines.'
      ];
      triggerNikoResponse(responses);
    } else if (cmd === 'skills') {
      responses = [
        'Query: Technical competency index...',
        '• Core: TypeScript, JavaScript, Python, SQL, C#, Java, R',
        '• Backend: Express, Node.js, Flask, Prisma ORM, MySQL, PostgreSQL',
        '• AI/Data: Local model runtimes (Ollama/Whisper), RAG pipelines, R-Studio'
      ];
      triggerNikoResponse(responses);
    } else if (cmd === 'projects') {
      responses = [
        'Query: Repository catalog...',
        '• Niko OS: Privacy-first desktop assistant using ONNX Whisper & SQLite local vector storage.',
        '• Ingestion Pipeline: High-velocity Node/TypeScript pipeline processing 400,000+ logs daily.',
        '• Satellite Attenuation: Atmospheric study modeling data transmissivity under weather events.'
      ];
      triggerNikoResponse(responses);
    } else if (cmd === 'diagnostics') {
      setConsoleHistory(prev => [
        ...prev,
        { type: 'reply', text: '>>> INITIALIZING FULL DIAGNOSTIC BOOT...' }
      ]);
      responses = [
        '  [SYSTEM] Loading Llama-8B weights... [OK]',
        '  [GPU] Allocating VRAM caches... [OK]',
        '  [DB] SQLite vector index checked... [OK]',
        '  [PIPELINE] Current operational queue: ' + telemetryCount.toLocaleString() + ' processed.',
        '>>> Niko OS System Status: 100% HEALTHY'
      ];
      triggerNikoResponse(responses);
    } else if (cmd === 'clear') {
      setConsoleHistory([]);
    } else {
      responses = [
        'Analyzing query...',
        `Unable to identify "${cmd}".`,
        'Type "help" to view custom agent prompts.'
      ];
      triggerNikoResponse(responses);
    }
  };

  const handleMouseEnterCard = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, { scale: 1.012, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeaveCard = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseMoveCard = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 6;
    const rotateY = (x / rect.width) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div className="relative w-full min-h-screen bg-pink-100 text-slate-800 font-sans overflow-hidden">
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-45 pointer-events-none" />

      {/* Background color highlight blur */}
      <div className="absolute top-[-5%] left-[10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={gridContainerRef}>
        
        {/* SECTION 1: ELEGANT HERO INTRO (Premium Glassmorphic Banner) */}
        <header 
          ref={el => cardsRef.current[7] = el}
          className="bento-card py-12 px-8 md:py-16 md:px-16 flex flex-col md:flex-row gap-10 justify-between items-center bg-white/60 backdrop-blur-xl border border-pink-200/80 rounded-[40px] shadow-2xl relative overflow-hidden mb-16 mt-8 cursor-default"
          style={{
            backgroundImage: 'radial-gradient(circle 500px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.05), transparent 80%)'
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex-1 space-y-6 text-center md:text-left relative z-10">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Roles
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50/80 border border-pink-200 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                MSU Billings Honors Graduate
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-pink-600 leading-none">
              Ayjeren <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">Kossekova</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-slate-800">
              Software Engineer & Data Scientist
            </h2>
            
            <p className="text-slate-800 leading-relaxed max-w-xl text-sm sm:text-base">
              I specialize in engineering high-throughput backend data pipelines, deploying local AI speech runtimes, and structuring complex scientific databases. Leveraging a B.S. in Mathematics and Computer Programming, I bridge the gap between analytical algorithms and performant web applications.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a href="https://github.com/Ayjeren004" target="_blank" rel="noreferrer" className="p-3 bg-pink-50/80 hover:bg-pink-100 text-slate-800 hover:text-pink-600 rounded-2xl border border-pink-200 hover:border-pink-200 transition-all hover:-translate-y-0.5 duration-200">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ayjeren-kossekova" target="_blank" rel="noreferrer" className="p-3 bg-pink-50/80 hover:bg-pink-100 text-slate-800 hover:text-pink-600 rounded-2xl border border-pink-200 hover:border-pink-200 transition-all hover:-translate-y-0.5 duration-200">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="mailto:ayjeren.k.dev@gmail.com" className="p-3 bg-pink-50/80 hover:bg-pink-100 text-slate-800 hover:text-pink-600 rounded-2xl border border-pink-200 hover:border-pink-200 transition-all hover:-translate-y-0.5 duration-200">
                <Mail className="w-5 h-5" />
              </a>
              
              <div className="h-6 w-px bg-white mx-2 hidden sm:block" />
              
              <a href="/Resume_General.pdf" target="_blank" className="flex items-center gap-2 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 hover:brightness-110 text-white font-extrabold py-3 px-6 rounded-2xl transition-all shadow-xl shadow-pink-100 shadow-emerald-500/10 hover:-translate-y-0.5 duration-200">
                <FileText className="w-4 h-4" />
                Resume (CV)
              </a>
            </div>
          </div>
          
          {/* Expensive Asymmetric Avatar Glow Frame */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex-shrink-0 flex items-center justify-center p-1 rounded-[38px] group transition-all duration-300">
            {/* Glowing background halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-pink-300 via-rose-400 to-pink-500 rounded-[40px] blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
            
            {/* Rotating boundary vector */}
            <div className="absolute inset-0 rounded-[38px] border border-cyan-500/30 group-hover:scale-105 group-hover:border-pink-500/40 transition-all duration-500" />
            <div className="absolute inset-1 rounded-[34px] border border-dashed border-pink-200 group-hover:rotate-6 transition-all duration-1000" />
            
            {/* Image Canvas wrapper */}
            <div className="w-full h-full rounded-[34px] overflow-hidden bg-pink-50 border border-pink-200/60 flex items-center justify-center relative z-10">
              <img 
                src="/avatar-light.jpg" 
                alt="Developer Avatar" 
                className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.08] group-hover:rotate-1 transition-all duration-500" 
              />
            </div>
          </div>
        </header>

        {/* SECTION 2: INTERACTIVE PROJECTS LAB (Bento Showcase) */}
        <div className="mb-24">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-pink-600 tracking-tight mb-2">Interactive Projects Lab</h2>
            <p className="text-slate-800 text-sm max-w-xl">
              Explore functional simulations of my software systems, data pipelines, and research projects directly inside your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card A: Niko OS Live Console */}
            <div 
              ref={el => cardsRef.current[0] = el}
              onMouseEnter={e => handleMouseEnterCard(e, 0)}
              onMouseMove={e => handleMouseMoveCard(e, 0)}
              onMouseLeave={e => handleMouseLeaveCard(e, 0)}
              className="bento-card bg-white/60 backdrop-blur-xl border border-pink-200 rounded-[32px] overflow-hidden flex flex-col justify-between shadow-2xl relative transition-all duration-200 cursor-default"
              style={{
                backgroundImage: 'radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(6, 182, 212, 0.06), transparent 80%)'
              }}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-pink-50/60 border-b border-pink-200">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-pink-600" />
                  <span className="text-xs font-mono font-bold text-slate-800 tracking-wider">niko-os-terminal ~ guest</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
              </div>
              
              <div className="p-6 flex-grow font-mono text-xs overflow-y-auto space-y-3 min-h-[250px]">
                {consoleHistory.map((item, index) => {
                  if (item.type === 'system') {
                    return <div key={index} className="text-slate-800">{item.text}</div>;
                  }
                  if (item.type === 'user') {
                    return <div key={index} className="text-pink-600"><span className="text-pink-600">guest$</span> {item.text}</div>;
                  }
                  if (item.type === 'reply') {
                    return <div key={index} className="text-rose-600 pl-4">{item.text}</div>;
                  }
                  return <div key={index} className="text-red-400 pl-4">{item.text}</div>;
                })}
                {isTyping && (
                  <div className="text-slate-800 animate-pulse pl-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Niko OS running query...
                  </div>
                )}
              </div>
              
              <form onSubmit={handleConsoleSubmit} className="flex border-t border-pink-200 bg-pink-50/40">
                <span className="flex items-center pl-6 text-pink-600 font-mono text-xs">$</span>
                <input 
                  type="text"
                  value={consoleInput}
                  onChange={e => setConsoleInput(e.target.value)}
                  disabled={isTyping}
                  placeholder="Type 'about', 'skills', 'projects', 'diagnostics'..."
                  className="w-full bg-transparent border-0 outline-none focus:ring-0 text-pink-600 font-mono text-xs py-4.5 px-3 disabled:text-slate-800"
                />
                <button type="submit" className="px-6 hover:bg-pink-50 text-pink-600 transition-colors" disabled={isTyping}>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right stacked cards */}
            <div className="space-y-8 flex flex-col justify-between">
              
              {/* Card B: 3CX Odoo CRM Call Pop-up Simulator */}
              <div 
                ref={el => cardsRef.current[1] = el}
                onMouseEnter={e => handleMouseEnterCard(e, 1)}
                onMouseMove={e => handleMouseMoveCard(e, 1)}
                onMouseLeave={e => handleMouseLeaveCard(e, 1)}
                className="bento-card bg-white/60 backdrop-blur-xl border border-pink-200 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-200 cursor-default min-h-[340px]"
                style={{
                  backgroundImage: 'radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.06), transparent 80%)'
                }}
              >
                {callState === 'idle' && (
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-purple-100 border border-purple-200 text-purple-700 rounded-xl">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-pink-600 text-sm">3CX Odoo CRM Call Pop-up</h3>
                          <span className="text-[10px] text-slate-800 font-mono uppercase tracking-widest font-bold">VoIP Client Simulator</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-slate-800 font-mono text-[9px]">
                        READY
                      </span>
                    </div>

                    <p className="text-slate-800 text-xs leading-relaxed mb-4">
                      I built a live 3CX VoIP integration that queries the Odoo API on call-answer, popping up customer histories, orders, and tickets immediately.
                    </p>

                    <div className="space-y-2">
                      <div className="text-[8px] uppercase font-bold tracking-wider text-slate-800 mb-1">Simulate incoming call scenario:</div>
                      
                      <button 
                        onClick={() => { setCallerType('existing'); setCallState('ringing'); setNewContactCreated(false); }}
                        className="w-full text-left bg-pink-50/60 hover:bg-pink-100 border border-pink-200 hover:border-pink-200 rounded-xl p-2.5 flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[11px] font-bold text-pink-600">Alexis Daniel <font className="text-slate-800 font-normal">(Existing Client)</font></span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-800 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
                      </button>

                      <button 
                        onClick={() => { setCallerType('new'); setCallState('ringing'); setNewContactCreated(false); }}
                        className="w-full text-left bg-pink-50/60 hover:bg-pink-100 border border-pink-200 hover:border-pink-200 rounded-xl p-2.5 flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          <span className="text-[11px] font-bold text-pink-600">+1 (201) 555-0143 <font className="text-slate-800 font-normal">(New Lead)</font></span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-800 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
                      </button>

                      <button 
                        onClick={() => { setCallerType('internal'); setCallState('ringing'); setNewContactCreated(false); }}
                        className="w-full text-left bg-pink-50/60 hover:bg-pink-100 border border-pink-200 hover:border-pink-200 rounded-xl p-2.5 flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-500" />
                          <span className="text-[11px] font-bold text-pink-600">Ext. 104 <font className="text-slate-800 font-normal">(IT Support Desk)</font></span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-800 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    </div>
                  </div>
                )}

                {callState === 'ringing' && (
                  <div className="flex flex-col h-full justify-between py-2 text-center items-center">
                    <div className="p-4 bg-purple-100 border border-purple-300 text-purple-700 rounded-full animate-bounce mb-2">
                      <PhoneCall className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-mono text-purple-700 font-extrabold animate-pulse block mb-1">Incoming VoIP Call via 3CX</span>
                      <h4 className="text-pink-600 text-base font-extrabold mb-1">
                        {callerType === 'existing' && 'Alexis Daniel'}
                        {callerType === 'new' && '+1 (201) 555-0143'}
                        {callerType === 'internal' && 'IT Support Desk'}
                      </h4>
                      <p className="text-[11px] text-slate-800 font-mono">
                        {callerType === 'existing' && '+1 (406) 591-2190'}
                        {callerType === 'new' && 'Odoo database lookup initiated...'}
                        {callerType === 'internal' && 'Extension 104'}
                      </p>
                    </div>

                    <div className="flex gap-4 w-full mt-4">
                      <button 
                        onClick={() => setCallState('connected')}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                      >
                        Answer Call
                      </button>
                      <button 
                        onClick={() => setCallState('idle')}
                        className="flex-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold py-2.5 rounded-xl text-xs transition-colors"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                )}

                {callState === 'connected' && (
                  <div className="flex flex-col h-full justify-between">
                    {/* CRM Header Bar */}
                    <div className="flex items-center justify-between border-b border-pink-200 pb-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] text-slate-800 font-mono font-bold uppercase tracking-wider">3CX CRM Live Inbound popup</span>
                      </div>
                      <button 
                        onClick={() => setCallState('idle')}
                        className="p-1 hover:bg-red-500/10 text-slate-800 hover:text-red-400 rounded-lg transition-colors"
                        title="Hang up call"
                      >
                        <PhoneOff className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Step 1: Call Details Screen */}
                    {wrapUpStep === 'details' && (
                      <div className="flex-grow flex flex-col justify-between">
                        {callerType === 'existing' && (
                          <div className="space-y-2 flex-grow overflow-y-auto max-h-[220px] pr-1">
                            <div className="bg-pink-50/40 rounded-xl p-2.5 border border-pink-200 text-center">
                              <span className="text-[9px] text-slate-800 uppercase tracking-widest block font-bold">Odoo Customer Found</span>
                              <h4 className="text-purple-700 text-sm font-extrabold">Alexis Daniel</h4>
                              <span className="text-[9px] text-slate-800">Operations Management Firm | +1 (406) 591-2190</span>
                            </div>

                            {/* Recent Orders segment */}
                            <div className="bg-pink-50/60 rounded-xl p-2 border border-pink-200 font-mono text-[9px]">
                              <div className="text-[8px] uppercase tracking-wider text-slate-800 font-extrabold border-b border-pink-200 pb-1 mb-1">Recent Orders</div>
                              <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-800">Order #4812</span>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-pink-100 border border-pink-200 text-rose-600 font-bold">PAID</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-800">Order #4790</span>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-pink-100 border border-pink-200 text-rose-600 font-bold">PAID</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-800">Order #4755</span>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-pink-100 border border-pink-200 text-rose-500 font-bold">SHIPPED</span>
                                </div>
                              </div>
                            </div>

                            {/* Recent Tickets segment */}
                            <div className="bg-pink-50/60 rounded-xl p-2 border border-pink-200 font-mono text-[9px]">
                              <div className="text-[8px] uppercase tracking-wider text-slate-800 font-extrabold border-b border-pink-200 pb-1 mb-1">Related Tickets</div>
                              <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-800 truncate max-w-[120px]">VoIP Ingest lag issue</span>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-pink-100 border border-pink-200 text-rose-500 font-bold">OPEN</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-800 truncate max-w-[120px]">Phone line 3CX disconnect</span>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-pink-100 border border-pink-200 text-slate-800">CLOSED</span>
                                </div>
                              </div>
                            </div>

                            {/* Interactive triggers */}
                            <div className="flex gap-2 pt-1">
                              <button 
                                onClick={() => setWrapUpStep('wrapup')}
                                className="flex-grow bg-[#714B67] hover:bg-[#5b3d53] text-pink-600 font-bold py-2.5 rounded-xl text-[10px] text-center transition-colors font-sans"
                              >
                                Proceed to Call Wrap-Up
                              </button>
                            </div>
                            <div className="text-center mt-1">
                              <span className="text-[8px] text-slate-800 hover:text-slate-800 hover:underline cursor-pointer">Open Service Portal</span>
                            </div>
                          </div>
                        )}

                        {callerType === 'new' && (
                          <div className="space-y-3 flex-grow flex flex-col justify-center">
                            <div className="bg-pink-50/40 rounded-xl p-3 border border-pink-200 text-center">
                              <span className="text-[9px] text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono font-bold inline-block mb-2">Unknown Caller</span>
                              <h4 className="text-pink-600 text-base font-extrabold mb-1">+1 (201) 555-0143</h4>
                              <p className="text-[11px] text-slate-800 max-w-xs mx-auto leading-relaxed">
                                No matching customer profile exists for this number in Odoo CRM records.
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <button 
                                onClick={() => setWrapUpStep('wrapup')}
                                className="flex-1 bg-[#714B67] hover:bg-[#5b3d53] text-pink-600 font-bold py-2.5 rounded-xl text-[10px] flex items-center justify-center gap-1.5 transition-colors"
                              >
                                <UserPlus className="w-3.5 h-3.5" />
                                Wrap Up & Create Profile
                              </button>
                            </div>
                          </div>
                        )}

                        {callerType === 'internal' && (
                          <div className="space-y-4 flex-grow flex flex-col justify-center">
                            <div className="bg-pink-50/40 rounded-xl p-3 border border-pink-200 text-center">
                              <span className="text-[9px] text-pink-600 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono font-bold inline-block mb-2">Internal extension</span>
                              <h4 className="text-pink-600 text-base font-extrabold mb-1">IT Helpdesk Desk</h4>
                              <span className="text-[10px] text-slate-800 font-mono">Extension 104</span>
                            </div>

                            <button 
                              onClick={() => setWrapUpStep('wrapup')}
                              className="w-full bg-[#714B67] hover:bg-[#5b3d53] text-pink-600 font-bold py-2.5 rounded-xl text-[10px] transition-colors"
                            >
                              Proceed to Wrap-Up
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step 2: Wrap Up Form */}
                    {wrapUpStep === 'wrapup' && (
                      <div className="flex-grow flex flex-col justify-between overflow-y-auto max-h-[260px] pr-1 space-y-2.5">
                        {callerType === 'existing' && (
                          <div className="bg-pink-50/30 rounded-xl p-2 border border-pink-200/60 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-pink-600">Target: Alexis Daniel</span>
                            <span className="text-[8.5px] font-mono text-purple-700 font-bold bg-purple-100 border border-purple-300 px-1.5 py-0.5 rounded">Odoo Connected</span>
                          </div>
                        )}

                        {callerType === 'new' && (
                          <div className="bg-pink-50/30 rounded-xl p-2 border border-pink-200/60 flex flex-col gap-2">
                            <div className="flex items-center justify-between text-[10px] text-slate-800">
                              <span>Target: New Customer (+1 201-555-0143)</span>
                              <span className="text-[8px] font-bold text-amber-500 bg-amber-950/30 border border-amber-900 px-1.5 py-0.5 rounded">Lead</span>
                            </div>
                            <div className="flex items-center gap-2 bg-pink-50/70 p-2 rounded-lg border border-pink-200">
                              <input 
                                type="checkbox"
                                id="createTempProfile"
                                checked={newCustomerTempProfile}
                                onChange={e => setNewCustomerTempProfile(e.target.checked)}
                                className="rounded bg-pink-100 border-pink-200 text-purple-700 focus:ring-purple-400"
                              />
                              <label htmlFor="createTempProfile" className="text-[9.5px] text-slate-800 font-medium cursor-pointer">
                                Auto-create Odoo Temp Customer Profile
                              </label>
                            </div>
                          </div>
                        )}

                        {callerType === 'existing' && (
                          <div>
                            <label className="text-[8px] uppercase tracking-wider text-slate-800 font-bold block mb-1">Related Context</label>
                            <select 
                              value={selectedContext}
                              onChange={e => setSelectedContext(e.target.value)}
                              className="w-full bg-pink-50 border border-pink-200 text-[10.5px] text-slate-800 font-mono rounded-lg p-2 outline-none focus:ring-1 focus:ring-purple-400"
                            >
                              <option value="Order #4812">Order #4812 (Paid)</option>
                              <option value="Order #4755">Order #4755 (Shipped)</option>
                              <option value="Ticket: VoIP Ingest lag issue">Ticket: VoIP Ingest lag issue (Open)</option>
                              <option value="General Inquiry">General Inquiry / No ticket</option>
                            </select>
                          </div>
                        )}

                        {/* Call Notes Area & Auto-Refinement */}
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-[8px] uppercase tracking-wider text-slate-800 font-bold">Call Summary Notes</label>
                            <button 
                              onClick={handleAiRewrite}
                              disabled={isAiRewriting || !callNotes}
                              className="text-[9px] text-purple-700 font-bold hover:text-purple-800 flex items-center gap-1 disabled:text-slate-800 disabled:no-underline"
                            >
                              <span>🪄</span>
                              {isAiRewriting ? 'Refining...' : 'Refine Notes (Odoo AI)'}
                            </button>
                          </div>
                          <textarea 
                            value={callNotes}
                            onChange={e => setCallNotes(e.target.value)}
                            placeholder={callerType === 'existing' ? "Type 'customer complained about delay...' then click Refine Notes" : "Enter summary of call details..."}
                            className="w-full h-14 bg-pink-50 border border-pink-200 text-[11px] text-slate-700 rounded-lg p-2 outline-none focus:ring-1 focus:ring-purple-400 resize-none"
                          />
                        </div>

                        {/* Disposition and Scheduler options */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[8px] uppercase tracking-wider text-slate-800 font-bold block mb-1">Call Disposition</label>
                            <select 
                              value={selectedDisposition}
                              onChange={e => setSelectedDisposition(e.target.value)}
                              className="w-full bg-pink-50 border border-pink-200 text-[10.5px] text-slate-800 font-mono rounded-lg p-1.5 outline-none focus:ring-1 focus:ring-purple-400"
                            >
                              <option value="Resolved">Resolved</option>
                              <option value="Escalated">Escalated</option>
                              <option value="Callback Scheduled">Callback Scheduled</option>
                              <option value="Spam / Hangup">Spam / Hangup</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[8px] uppercase tracking-wider text-slate-800 font-bold block mb-1">Follow-Up Action</label>
                            <div className="flex items-center gap-1.5 h-8 bg-pink-50/60 border border-pink-200 rounded-lg px-2">
                              <input 
                                type="checkbox"
                                id="scheduleFollow"
                                checked={scheduleFollowUp}
                                onChange={e => setScheduleFollowUp(e.target.checked)}
                                className="rounded bg-pink-100 border-pink-200 text-purple-700 focus:ring-purple-400"
                              />
                              <label htmlFor="scheduleFollow" className="text-[9.5px] text-slate-800 cursor-pointer">Schedule call</label>
                            </div>
                          </div>
                        </div>

                        {scheduleFollowUp && (
                          <div className="animate-fadeIn">
                            <label className="text-[8px] uppercase tracking-wider text-slate-800 font-bold block mb-1">Follow-up Date/Time</label>
                            <input 
                              type="text" 
                              value={followUpDate} 
                              onChange={e => setFollowUpDate(e.target.value)}
                              placeholder="e.g. Monday, 2:00 PM"
                              className="w-full bg-pink-50 border border-pink-200 text-[10.5px] text-slate-800 rounded-lg p-2 outline-none focus:ring-1 focus:ring-purple-400 font-mono"
                            />
                          </div>
                        )}

                        {/* Customer Email Checkbox */}
                        {callerType === 'existing' && (
                          <div className="flex items-center gap-2 bg-pink-50/60 p-2 rounded-lg border border-pink-200">
                            <input 
                              type="checkbox"
                              id="sendSummaryEmail"
                              checked={sendEmailChecked}
                              onChange={e => setSendEmailChecked(e.target.checked)}
                              className="rounded bg-pink-100 border-pink-200 text-purple-700 focus:ring-purple-400"
                            />
                            <label htmlFor="sendSummaryEmail" className="text-[9.5px] text-slate-800 font-medium cursor-pointer">
                              Send call summary email using company template
                            </label>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-1.5">
                          <button 
                            onClick={() => setWrapUpStep('logged')}
                            className="flex-1 bg-[#714B67] hover:bg-[#5b3d53] text-pink-600 font-bold py-2 rounded-lg text-[10.5px] transition-colors"
                          >
                            Submit & Log to Odoo
                          </button>
                          <button 
                            onClick={() => setWrapUpStep('details')}
                            className="px-3 bg-pink-50 hover:bg-pink-100 border border-pink-200 text-slate-800 rounded-lg text-[10px] transition-colors"
                          >
                            Back
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Success Logs (Odoo Database Integration Status) */}
                    {wrapUpStep === 'logged' && (
                      <div className="flex-grow flex flex-col justify-between py-2">
                        <div className="text-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500 text-rose-600 flex items-center justify-center mx-auto mb-1 animate-scaleUp">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <h4 className="text-pink-600 text-xs font-bold font-sans">Call Wrapped Up Successfully</h4>
                          <span className="text-[9px] text-slate-800 font-mono">Operations Pipeline Logs</span>
                        </div>

                        {/* Simulation Success logs terminal */}
                        <div className="bg-pink-50/80 rounded-xl p-3 border border-pink-200 font-mono text-[9.5px] text-slate-800 space-y-1.5 max-h-[140px] overflow-y-auto">
                          <div className="flex gap-2 text-rose-600">
                            <span>✔</span>
                            <span>Call log synced to 3CX History.</span>
                          </div>
                          
                          {callerType === 'new' && newCustomerTempProfile && (
                            <div className="flex gap-2 text-rose-600">
                              <span>✔</span>
                              <span>Created Odoo profile for +1 (201) 555-0143.</span>
                            </div>
                          )}

                          <div className="flex gap-2 text-rose-600">
                            <span>✔</span>
                            <span>Logged to Odoo Chatter: Ext 104 to {callerType === 'existing' ? 'Alexis Daniel' : 'New Contact'}.</span>
                          </div>

                          {callerType === 'existing' && sendEmailChecked && (
                            <div className="flex flex-col pl-4 text-slate-800 border-l border-pink-200 py-0.5 my-1">
                              <span className="font-bold text-pink-600 text-[8px] uppercase tracking-wider text-purple-700 mb-0.5">Email Dispatched</span>
                              <span><b>To:</b> alexis@company.com</span>
                              <span><b>Subject:</b> Call summary regarding {selectedContext}</span>
                              <span className="truncate"><b>Body:</b> "{callNotes || 'No notes added'}"</span>
                              <span className="text-[8px] text-slate-800 italic mt-0.5">Signed: Agent Ext 104 | Operations Firm</span>
                            </div>
                          )}

                          {scheduleFollowUp && (
                            <div className="flex gap-2 text-purple-700">
                              <span>✔</span>
                              <span>Callback scheduled for {followUpDate || 'Monday morning'}.</span>
                            </div>
                          )}

                          <div className="flex gap-2 text-slate-800 text-[8px]">
                            <span>[INFO]</span>
                            <span>Session finalized. SQLite/Odoo buffers flushed.</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => setCallState('idle')}
                          className="w-full bg-pink-50 hover:bg-pink-100 border border-pink-200 text-slate-800 font-bold py-2 rounded-lg text-[10px] transition-colors mt-3"
                        >
                          Simulate New Call
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card C: GPS wave canvas */}
              <div 
                ref={el => cardsRef.current[2] = el}
                onMouseEnter={e => handleMouseEnterCard(e, 2)}
                onMouseMove={e => handleMouseMoveCard(e, 2)}
                onMouseLeave={e => handleMouseLeaveCard(e, 2)}
                className="bento-card bg-white/60 backdrop-blur-xl border border-pink-200 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-200 cursor-default"
                style={{
                  backgroundImage: 'radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(6, 182, 212, 0.06), transparent 80%)'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-pink-100 border border-pink-200 text-pink-600 rounded-xl">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-pink-600 text-sm">GPS Attenuation Visualizer</h3>
                      <span className="text-[10px] text-slate-800 font-mono uppercase tracking-widest">Co-Authored Precipitation Research</span>
                    </div>
                  </div>
                  
                  <select 
                    value={precipitationMode}
                    onChange={e => setPrecipitationMode(e.target.value)}
                    className="bg-pink-50 border border-pink-200 text-[10px] text-slate-800 font-mono rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Clear Sky">☀️ Clear Sky</option>
                    <option value="Light Rain">🌧️ Light Rain</option>
                    <option value="Heavy Thunderstorm">⛈️ Heavy Storm</option>
                  </select>
                </div>

                <div className="relative w-full h-[90px] bg-pink-50/80 border border-pink-200 rounded-xl overflow-hidden mb-3">
                  <canvas ref={canvasRef} width="400" height="90" className="w-full h-full block" />
                </div>

                <div className="flex gap-6 mt-1">
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-800 mb-1">
                      <span>Dampening Density</span>
                      <span className="font-mono text-pink-600">{rainDensity}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={rainDensity} 
                      disabled={precipitationMode !== 'Custom' && (precipitationMode && true)}
                      onChange={e => setRainDensity(parseInt(e.target.value))}
                      className="w-full accent-cyan-500 h-1 bg-pink-100 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-800 mb-1">
                      <span>Frequency</span>
                      <span className="font-mono text-rose-600">{gpsFrequency} GHz</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="3.0" 
                      step="0.1"
                      value={gpsFrequency} 
                      onChange={e => setGpsFrequency(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 h-1 bg-pink-100 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 3: DETAILED PROJECTS CATALOG */}
        <div className="mb-24">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-pink-600 tracking-tight mb-2">Featured Projects</h2>
            <p className="text-slate-800 text-sm max-w-xl">
              Detailed breakdown of my production software systems, data pipelines, and research catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-white/60 border border-pink-200 hover:border-pink-200/80 rounded-[28px] p-8 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-rose-600 uppercase bg-pink-100 border border-pink-200/30 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-pink-600 mb-1 group-hover:text-rose-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-800 font-mono mb-4">{project.tagline}</p>
                  
                  <p className="text-slate-800 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] text-slate-800 bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-pink-200/60">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-slate-800 hover:text-pink-600 transition-colors">
                        <Code className="w-3.5 h-3.5" /> Source Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-emerald-300 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: PROFESSIONAL WORK EXPERIENCE (NEW) */}
        <div className="mb-24">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-pink-600 tracking-tight mb-2">Work History</h2>
            <p className="text-slate-800 text-sm max-w-xl">
              Professional software engineering, quantitative research, and systems administration timeline.
            </p>
          </div>

          <div className="relative border-l border-pink-200 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-pink-50 border-2 border-pink-200 group-hover:border-pink-500 group-hover:bg-pink-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-pink-500 transition-colors" />
                </div>

                <div className="bg-white/60 border border-pink-200 hover:border-pink-300 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-pink-600 group-hover:text-rose-600 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-800">{exp.company}</p>
                    </div>
                    <div className="text-right md:text-right text-xs font-mono">
                      <span className="text-rose-700 bg-pink-200/50 border border-pink-300 px-3 py-1 rounded-full inline-block mb-1">
                        {exp.period}
                      </span>
                      <p className="text-slate-800 mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-slate-800 text-sm list-none pl-0">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start">
                        <span className="text-rose-600 mt-1 flex-shrink-0 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: CREDENTIALS & SKILLS */}
        <div className="mb-24">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-pink-600 tracking-tight mb-2">Qualifications & Skills</h2>
            <p className="text-slate-800 text-sm max-w-xl">
              Academic credentials, mathematics research achievements, and technical skill matrices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card D: Skills Matrix */}
            <div 
              ref={el => cardsRef.current[3] = el}
              onMouseEnter={e => handleMouseEnterCard(e, 3)}
              onMouseMove={e => handleMouseMoveCard(e, 3)}
              onMouseLeave={e => handleMouseLeaveCard(e, 3)}
              className="bento-card md:col-span-2 bg-white/60 backdrop-blur-xl border border-pink-200 rounded-[32px] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-200 cursor-default"
              style={{
                backgroundImage: 'radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.06), transparent 80%)'
              }}
            >
              <div>
                <h3 className="text-xl font-extrabold text-pink-600 mb-6 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-pink-600" />
                  Technical Matrix
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-200 hover:border-pink-200 transition-colors">
                    <h4 className="text-xs font-extrabold text-pink-600 uppercase tracking-widest mb-1.5">Languages</h4>
                    <p className="text-slate-800 text-sm leading-relaxed">TypeScript, JavaScript, Python, SQL, C#, Java, R, HTML5/CSS3</p>
                  </div>
                  <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-200 hover:border-pink-200 transition-colors">
                    <h4 className="text-xs font-extrabold text-rose-600 uppercase tracking-widest mb-1.5">AI Integrations</h4>
                    <p className="text-slate-800 text-sm leading-relaxed">OpenAI API, local model orchestration (Ollama), Whisper runtimes, RAG pipelines, Vector databases</p>
                  </div>
                  <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-200 hover:border-pink-200 transition-colors">
                    <h4 className="text-xs font-extrabold text-pink-600 uppercase tracking-widest mb-1.5">Frameworks & ORMs</h4>
                    <p className="text-slate-800 text-sm leading-relaxed">React, Next.js, Node.js, Express, Flask APIs, WebSockets, Prisma ORM</p>
                  </div>
                  <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-200 hover:border-pink-200 transition-colors">
                    <h4 className="text-xs font-extrabold text-rose-600 uppercase tracking-widest mb-1.5">System & Infrastructure</h4>
                    <p className="text-slate-800 text-sm leading-relaxed">Docker, Docker Compose, Git version control, Linux CLI, Bash scripting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card E: Honors & Awards */}
            <div 
              ref={el => cardsRef.current[4] = el}
              onMouseEnter={e => handleMouseEnterCard(e, 4)}
              onMouseMove={e => handleMouseMoveCard(e, 4)}
              onMouseLeave={e => handleMouseLeaveCard(e, 4)}
              className="bento-card bg-gradient-to-br from-slate-950/95 to-[#0b0e17]/95 border border-pink-200 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-200 cursor-default"
              style={{
                backgroundImage: 'radial-gradient(circle 200px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(245, 158, 11, 0.08), transparent 80%)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
              <div>
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl inline-flex mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-pink-600 mb-4">Honors & Awards</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] text-amber-500 font-mono font-bold uppercase tracking-wider block">MSU Billings Math Department</span>
                    <h4 className="text-sm font-extrabold text-pink-600">Outstanding Scholar Award</h4>
                    <p className="text-slate-800 text-xs mt-0.5 leading-relaxed">Top academic honors in Mathematics & Data Science concentrations.</p>
                  </div>
                  <div className="h-px bg-pink-100" />
                  <div>
                    <span className="text-[9px] text-pink-600 font-mono font-bold uppercase tracking-wider block">MSU Billings Housing</span>
                    <h4 className="text-sm font-extrabold text-pink-600">Outstanding RA Award</h4>
                    <p className="text-slate-800 text-xs mt-0.5 leading-relaxed">Recognized for excellence in community mentorship and logistics coordination.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-[10px] text-slate-800 font-mono mt-6 uppercase">
                Academic Honors
              </div>
            </div>

            {/* Card F: Degrees */}
            <div 
              ref={el => cardsRef.current[5] = el}
              onMouseEnter={e => handleMouseEnterCard(e, 5)}
              onMouseMove={e => handleMouseMoveCard(e, 5)}
              onMouseLeave={e => handleMouseLeaveCard(e, 5)}
              className="bento-card md:col-span-2 bg-white/60 backdrop-blur-xl border border-pink-200 rounded-[32px] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-200 cursor-default"
              style={{
                backgroundImage: 'radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(6, 182, 212, 0.06), transparent 80%)'
              }}
            >
              <div>
                <h3 className="text-xl font-extrabold text-pink-600 mb-6 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-rose-600" />
                  Education Credentials
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-pink-50 rounded-xl border border-pink-200 text-slate-800 text-xs font-mono mt-0.5">B.S.</div>
                    <div>
                      <h4 className="font-bold text-pink-600 text-base">Bachelor of Science in Mathematics</h4>
                      <p className="text-xs text-rose-600 font-medium">Data Science Concentration • Montana State University Billings</p>
                      <p className="text-slate-800 text-xs mt-1">Graduated December 2025 | GPA: 3.25</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-pink-100" />

                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-pink-50 rounded-xl border border-pink-200 text-slate-800 text-xs font-mono mt-0.5">A.A.S.</div>
                    <div>
                      <h4 className="font-bold text-pink-600 text-base">Associate of Applied Science in Computer Programming</h4>
                      <p className="text-xs text-pink-600 font-medium">Application Development Focus • Montana State University Billings</p>
                      <p className="text-slate-800 text-xs mt-1">Graduated May 2024 | GPA: 3.20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card G: Certifications & Publications */}
            <div 
              ref={el => cardsRef.current[6] = el}
              onMouseEnter={e => handleMouseEnterCard(e, 6)}
              onMouseMove={e => handleMouseMoveCard(e, 6)}
              onMouseLeave={e => handleMouseLeaveCard(e, 6)}
              className="bento-card bg-white/60 backdrop-blur-xl border border-pink-200 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-200 cursor-default"
              style={{
                backgroundImage: 'radial-gradient(circle 200px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.06), transparent 80%)'
              }}
            >
              <div>
                <h3 className="text-lg font-bold text-pink-600 mb-4">Certifications & Research</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] text-pink-600 font-mono font-bold uppercase tracking-wider block">HackerRank Certifications</span>
                    <h4 className="text-xs font-bold text-slate-700 mt-1">SQL (Intermediate) • Aug 2024</h4>
                    <h4 className="text-xs font-bold text-slate-700">Python (Basic) • Dec 2025</h4>
                  </div>
                  
                  <div className="h-px bg-pink-100" />
                  
                  <div>
                    <span className="text-[9px] text-rose-600 font-mono font-bold uppercase tracking-wider block">Academic Research Paper</span>
                    <h4 className="text-xs font-bold text-slate-700 mt-1">GPS Signal Attenuation Study</h4>
                    <p className="text-slate-800 text-[10px] mt-0.5 leading-relaxed">
                      Co-authored statistical models mapping satellite signal degradation against precipitation records.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-[10px] text-slate-800 font-mono mt-6 uppercase">
                Credentials List
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
