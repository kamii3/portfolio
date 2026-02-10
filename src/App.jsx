import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Shield, 
  Briefcase, 
  Send, 
  ChevronRight,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Lock,
  Globe,
  Award,
  Zap,
  CheckCircle2,
  Terminal,
  Cpu,
  Monitor,
  Phone,
  Video,
  FileText,
  ExternalLink,
  Target,
  Fingerprint,
  Activity,
  MapPin,
  Code,
  Layers,
  Search,
  Database,
  Eye,
  ShieldAlert,
  Binary,
  Compass
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const profile = {
    name: "Ikram Ulhaq",
    title: "Cyber Security Specialist & Founder",
    organization: "Global Crest Solutions",
    email: "kamiicomrade@gmail.com",
    phone: "03175518336",
    location: "Shah Faisal Town, Karachi",
    fullAddress: "House No C-607 Falaknaz Tower, Wireless Gate, Shah Faisal Town, Karachi",
    linkedin: "https://www.linkedin.com/in/ikram-ulhaq-b58611250",
    objective: "To secure a challenging position in Cybersecurity where I can apply my technical expertise, problem-solving abilities, and strong communication skills to identify and mitigate security threats, protect sensitive data, and contribute meaningfully to the organization's security objectives and overall success.",
    summary: "A high-performing Cybersecurity student at ILMA University (3.4 CGPA) with a proactive approach to ethical hacking and digital safety. Founder of Global Crest Solutions, bridging the gap between small business innovation and enterprise-grade security. Current GPA: 3.4 at ILMA University. I am driven by learning-by-doing, always exploring new tools to stay ahead of cyber threats."
  };

  const experiences = [
    {
      role: "Founder & Digital Lead",
      company: "Global Crest Solutions",
      period: "Jan 2026 - Present",
      desc: "Leading a digital solutions startup focused on helping businesses build a strong and secure online presence. Providing comprehensive services in web development, graphic design, and AI-driven workflows with a core focus on cybersecurity.",
      tags: ["Leadership", "Business Strategy", "Secure Development"]
    },
    {
      role: "Backend Ops / CSR",
      company: "Techmile Solutions",
      period: "July 2024 - Dec 2025",
      desc: "Managed data entry, account updates, and chat-based support. Specialized in resolving technical queries while maintaining high service standards and record accuracy.",
      tags: ["Operations", "CRM", "Data Security"]
    },
    {
      role: "Cyber Security Intern",
      company: "Prodigy InfoTech",
      period: "Oct 2025 - Nov 2025",
      desc: "Deep dive into ethical hacking methodologies. Executed vulnerability scans and practiced penetration testing protocols in controlled environments.",
      tags: ["Penetration Testing", "Vulnerability Labs", "Security Auditing"]
    }
  ];

  const skillSets = [
    { name: "Cybersecurity & Risk Assessment", val: 95 },
    { name: "Ethical Hacking (Kali Linux / Metasploit)", val: 92 },
    { name: "Web Development (Full-Stack / AI)", val: 88 },
    { name: "Video Editing (Premiere Pro)", val: 90 },
    { name: "Data Analytics (Cisco Essentials)", val: 85 },
    { name: "Network Defense & Forensics", val: 93 }
  ];

  const certifications = [
    { title: "Google Cybersecurity Specialization", issuer: "Google" },
    { title: "Certified in Cybersecurity (CC)", issuer: "ISC2" },
    { title: "Data Analytics Essentials", issuer: "Cisco" },
    { title: "Microsoft Security Foundations", issuer: "Microsoft" },
    { title: "MITRE ATT&CK Framework", issuer: "Cybrary" },
    { title: "IoT Fundamentals", issuer: "LinkedIn Learning" }
  ];

  const tools = [
    { name: "Kali Linux", icon: <Terminal size={20}/>, level: "Advanced" },
    { name: "Wireshark", icon: <Activity size={20}/>, level: "Advanced" },
    { name: "Metasploit", icon: <Zap size={20}/>, level: "Intermediate" },
    { name: "Nmap", icon: <Search size={20}/>, level: "Advanced" },
    { name: "Burp Suite", icon: <Lock size={20}/>, level: "Competent" },
    { name: "Adobe Premiere Pro", icon: <Video size={20}/>, level: "Skilled" }
  ];

  const methodology = [
    { step: "01", title: "Asset Mapping", desc: "Identifying and cataloging digital assets and their potential threat surfaces." },
    { step: "02", title: "Threat Detection", desc: "Simulating adversarial tactics to find hidden vulnerabilities in the system." },
    { step: "03", title: "Remediation", desc: "Deploying secure patches and architecting resilient digital solutions." },
    { step: "04", title: "Compliance", desc: "Ensuring all systems meet ethical and industry-standard security protocols." }
  ];

  const services = [
    {
      title: "Security Auditing",
      icon: <ShieldAlert className="w-10 h-10 text-emerald-500" />,
      desc: "Rigorous testing of your digital infrastructure using the latest ethical hacking tools to ensure your data remains your data."
    },
    {
      title: "Digital Ecosystems",
      icon: <Globe className="w-10 h-10 text-emerald-500" />,
      desc: "Crafting modern, secure websites and AI solutions that provide a competitive edge for startups and small businesses."
    },
    {
      title: "Vulnerability Management",
      icon: <Search className="w-10 h-10 text-emerald-500" />,
      desc: "Proactive monitoring and risk assessment strategies designed to neutralize threats before they impact your operations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050807] text-slate-300 font-sans selection:bg-emerald-500/40">
      
      {/* Top Progress Indicator */}
      <div className="fixed top-0 left-0 h-[2px] bg-emerald-500 z-[200] transition-all" style={{ width: `${scrollProgress}%` }}></div>

      {/* Background Decor (Grid Lines Removed) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050807]/20 via-transparent to-[#050807]"></div>
      </div>

      {/* Floating Glow Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[160px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-[#050807]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollTo('home')}>
             <div className="w-11 h-11 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <Shield className="text-emerald-500 w-6 h-6" />
             </div>
             <div className="flex flex-col">
                <span className="font-black text-2xl leading-none tracking-tighter uppercase text-white">Ikram<span className="text-emerald-500"> </span>Ulhaq</span>
                <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-[0.4em] leading-none mt-1">Cyber Specialist</span>
             </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['home', 'about', 'services', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-emerald-400 ${activeSection === item ? 'text-emerald-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="px-7 py-2.5 bg-emerald-500 text-black rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
            >
              Contact
            </button>
          </div>

          <button className="md:hidden text-emerald-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 text-emerald-500 font-black tracking-[0.4em] uppercase text-[10px] bg-emerald-500/5 px-5 py-2.5 rounded-full border border-emerald-500/20 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Consultations // Karachi</span>
            </div>
            <h1 className="text-6xl md:text-[6.5rem] font-black leading-[0.85] uppercase tracking-tighter text-white">
              SECURING <br />
              <span className="text-emerald-500">DIGITAL</span> <br />
              FUTURES.
            </h1>
            <p className="text-slate-400 max-w-xl leading-relaxed text-xl font-medium mx-auto lg:mx-0">
              Founder of <span className="text-white font-bold">{profile.organization}</span>. I bridge the gap between business innovation and hardened security protocols.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4">
              <button onClick={() => scrollTo('services')} className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest text-[11px] rounded-2xl transition-all shadow-[0_15px_45px_rgba(16,185,129,0.25)] active:scale-95 group">
                <span className="flex items-center gap-3">Get Security Audit <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              </button>
              <a href={profile.linkedin} target="_blank" className="px-10 py-5 border border-emerald-500/30 text-emerald-500 font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-emerald-500/5 transition-all flex items-center gap-3">
                <Linkedin size={18}/> Profile
              </a>
            </div>
          </div>

          {/* CIRCULAR HERO ELEMENT RESTORED */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
               {/* Spinning Rings */}
               <div className="absolute inset-0 border-[1.5px] border-emerald-500/20 rounded-full animate-spin-slow"></div>
               <div className="absolute inset-8 border border-dashed border-emerald-500/10 rounded-full animate-spin-slower"></div>
               
               {/* Inner Circle Content */}
               <div className="absolute inset-16 bg-[#0a100f] rounded-full overflow-hidden border-[1px] border-emerald-500/20 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
                  <Lock className="w-24 h-24 text-emerald-500 opacity-20" />
                  <div className="absolute bottom-[20%] text-center">
                     <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.5em] animate-pulse italic">Scanning...</span>
                     <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest">{profile.location}</div>
                  </div>
               </div>

               {/* Floating Badges */}
               <div className="absolute -top-4 right-10 p-6 bg-[#0a100f]/80 backdrop-blur-2xl rounded-3xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-bounce-slow">
                  <Fingerprint className="text-emerald-500 w-10 h-10" />
               </div>
               <div className="absolute bottom-12 -left-6 p-6 bg-[#0a100f]/80 backdrop-blur-2xl rounded-3xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-pulse">
                  <Activity className="text-emerald-500 w-10 h-10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="py-32 px-6 bg-[#080c0b]/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">The <span className="text-emerald-500 italic">Vision.</span></h2>
              <div className="w-24 h-1.5 bg-emerald-500 rounded-full"></div>
            </div>
            {/* RESTORED PARAGRAPH */}
            <p className="text-slate-200 text-2xl leading-relaxed font-semibold tracking-tight italic border-l-4 border-emerald-500/50 pl-8">
              "{profile.summary}"
            </p>
            <div className="flex flex-wrap gap-12 pt-4">
               <div className="group">
                  <div className="text-5xl font-black text-white group-hover:text-emerald-500 transition-colors">3.4</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Current GPA</div>
               </div>
               <div className="group">
                  <div className="text-5xl font-black text-white group-hover:text-emerald-500 transition-colors">06+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Core Credentials</div>
               </div>
               <div className="group">
                  <div className="text-5xl font-black text-white group-hover:text-emerald-500 transition-colors">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Project Integrity</div>
               </div>
            </div>
          </div>
          
          <div className="space-y-8">
             <div className="p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6">
                <h4 className="text-emerald-500 font-bold uppercase text-[10px] tracking-[0.3em]">Professional Mission</h4>
                <p className="text-white text-lg font-medium leading-relaxed">
                  "{profile.objective}"
                </p>
             </div>
             <div className="grid grid-cols-2 gap-6">
               <div className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                  <div className="text-white font-black text-xl mb-1 uppercase tracking-tighter italic">English</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Working Proficient</div>
               </div>
               <div className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                  <div className="text-white font-black text-xl mb-1 uppercase tracking-tighter italic">Urdu</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Native Language</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">Core <span className="text-emerald-500">Expertise</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto font-bold uppercase tracking-[0.4em] text-[10px] bg-white/5 py-3 rounded-full text-center">Secure. Innovate. Deploy.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div key={i} className="group p-12 bg-[#080c0b] border border-white/5 rounded-[3.5rem] hover:border-emerald-500/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 opacity-0 group-hover:opacity-[0.02] transition-all duration-700 scale-[2]">
                   {service.icon}
                </div>
                <div className="mb-10 w-20 h-20 bg-emerald-500/5 rounded-[2rem] flex items-center justify-center border border-emerald-500/10 group-hover:scale-110 transition-transform shadow-inner">
                   {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-white italic">{service.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">{service.desc}</p>
                <button className="flex items-center space-x-3 text-emerald-500 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                   <span>Inquire Details</span>
                   <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Hub */}
      <section className="py-32 px-6 bg-[#080c0b]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-24">
             <div className="h-[1px] flex-1 bg-white/10"></div>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white text-center">Standard <span className="text-emerald-500">Procedures</span></h2>
             <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {methodology.map((m, i) => (
              <div key={i} className="group p-10 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-emerald-500/5 transition-all duration-300">
                <div className="text-emerald-500 font-black text-4xl mb-8 opacity-40 group-hover:opacity-100 transition-opacity">/{m.step}</div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-white italic">{m.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience History */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter text-white leading-[0.85]">Career <br /><span className="text-emerald-500">Path.</span></h2>
              <p className="text-slate-500 max-w-sm text-lg font-medium">From technical internship to pioneering as an independent agency founder.</p>
            </div>
            
            <div className="p-10 bg-emerald-500/5 rounded-[2.5rem] border border-emerald-500/10 flex items-center gap-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Monitor size={100}/>
               </div>
               <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 shadow-inner">
                  <Compass size={40} />
               </div>
               <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-[0.3em] mb-2">Current Venture</h4>
                  <p className="text-white font-black text-2xl uppercase tracking-tighter italic">Global Crest Sols.</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="p-12 bg-[#080c0b] border border-white/5 rounded-[3rem] hover:border-emerald-500/20 transition-all duration-500 group shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-emerald-500 transition-colors leading-none">{exp.role}</h3>
                  <span className="text-[10px] font-black bg-emerald-500/5 text-emerald-500 px-5 py-2 rounded-full uppercase tracking-widest border border-emerald-500/20">{exp.period}</span>
                </div>
                <div className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4 inline-block">{exp.company}</div>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">{exp.desc}</p>
                <div className="flex flex-wrap gap-3">
                   {exp.tags.map(tag => (
                     <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/5">#{tag}</span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Vault */}
      <section id="skills" className="py-32 px-6 bg-[#080c0b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">Arsenal <br /> <span className="text-emerald-500">Suite.</span></h2>
              <p className="text-slate-500 max-w-lg font-bold uppercase text-[10px] tracking-widest">Industry Standard Proficiency</p>
            </div>
            <div className="flex flex-wrap gap-3">
               {['CyberSecurity', 'Infrastructure', 'Media'].map(tab => (
                 <button key={tab} className="px-8 py-3.5 bg-[#060a09] border border-white/5 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:border-emerald-500/40 transition-all shadow-2xl active:scale-95">{tab}</button>
               ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-start">
             <div className="space-y-12">
                {skillSets.map((skill, i) => (
                  <div key={i} className="space-y-5">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-white italic">{skill.name}</span>
                      <span className="text-emerald-500 font-black text-sm tracking-tighter">{skill.val}%</span>
                    </div>
                    <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981]" 
                        style={{ width: `${skill.val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, i) => (
                  <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center gap-6 hover:border-emerald-500/30 group transition-all duration-500 shadow-sm">
                     <div className="text-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity scale-125">{tool.icon}</div>
                     <div className="space-y-2">
                        <span className="font-black text-white text-base uppercase tracking-tight">{tool.name}</span>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-500/50 transition-colors">{tool.level}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education Hub */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
           <div>
              <div className="flex items-center space-x-6 mb-20">
                 <div className="w-16 h-16 bg-emerald-500/5 rounded-3xl flex items-center justify-center text-emerald-500 shadow-2xl border border-emerald-500/10"><Award size={36}/></div>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">Verified <br /> Credentials</h2>
              </div>
              <div className="grid gap-5">
                 {certifications.map((cert, i) => (
                   <div key={i} className="p-8 bg-[#080c0b] border border-white/5 rounded-[2.5rem] flex justify-between items-center group hover:bg-emerald-500/5 transition-all shadow-xl">
                      <div>
                        <h3 className="font-black text-white uppercase text-base group-hover:text-emerald-400 transition-colors italic tracking-tight">{cert.title}</h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">Authenticated By {cert.issuer}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        <ExternalLink size={18} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div>
              <div className="flex items-center space-x-6 mb-20">
                 <div className="w-16 h-16 bg-emerald-500/5 rounded-3xl flex items-center justify-center text-emerald-500 shadow-2xl border border-emerald-500/10"><Monitor size={36}/></div>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">Academic <br /> Foundation</h2>
              </div>
              <div className="space-y-8">
                 {[
                   { year: "2022 - ONWARD", degree: "Bachelor In Cyber Security", school: "ILMA University Karachi Pakistan", grade: "3.4 CGPA (Current)" },
                   { year: "2021", degree: "Intermediate With Computer Science", school: "Kashmir Public Science College Abbaspur AJK", grade: "60%" },
                   { year: "2019", degree: "Matriculation (Science)", school: "Kashmir Public Science College Abbaspur AJK", grade: "74%" }
                 ].map((edu, i) => (
                   <div key={i} className="p-10 bg-[#080c0b] border border-white/5 rounded-[3rem] relative overflow-hidden group shadow-2xl">
                      <div className="absolute top-0 right-0 p-10 text-[10px] font-mono text-emerald-500/20 font-black">{edu.year}</div>
                      <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-emerald-500 transition-colors leading-none mb-3">{edu.degree}</h4>
                      <p className="text-slate-400 text-lg mt-2 font-semibold">{edu.school}</p>
                      <div className="mt-6 inline-block px-5 py-2 bg-emerald-500/10 text-emerald-500 font-black text-[10px] uppercase tracking-widest rounded-xl border border-emerald-500/20">{edu.grade}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Contact Hub */}
      <section id="contact" className="py-32 px-6 bg-[#060a09]">
        <div className="max-w-6xl mx-auto bg-[#080c0b] p-10 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
           <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
           
           <div className="grid lg:grid-cols-2 gap-24 relative z-10">
              <div className="space-y-16 text-center lg:text-left">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.85] text-white">Let's <span className="text-emerald-500">Secure</span> <br /> Your Next <br /> Move.</h2>
                  <p className="text-slate-500 text-xl max-w-sm mx-auto lg:mx-0 font-semibold italic">Open for audits, partnerships, and AI integration at Global Crest Solutions.</p>
                </div>
                
                <div className="space-y-8 pt-4">
                  <div className="flex items-center space-x-8 justify-center lg:justify-start group">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-emerald-500 border border-white/5 group-hover:border-emerald-500 transition-all duration-300 shadow-2xl"><MapPin size={32}/></div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">HQ Location</div>
                      <div className="text-xl font-black text-white uppercase italic">{profile.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8 justify-center lg:justify-start group">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-emerald-500 border border-white/5 group-hover:border-emerald-500 transition-all duration-300 shadow-2xl"><Phone size={32}/></div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">Signal Line</div>
                      <div className="text-xl font-black text-white uppercase italic">{profile.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8 justify-center lg:justify-start group">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-emerald-500 border border-white/5 group-hover:border-emerald-500 transition-all duration-300 shadow-2xl"><Mail size={32}/></div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">Encrypted Mail</div>
                      <div className="text-xl font-black text-white uppercase italic">{profile.email}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#060a09] p-10 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl relative">
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-8">
                    <div className="group">
                       <input className="w-full bg-transparent border-b-2 border-white/5 p-5 outline-none focus:border-emerald-500 transition-all text-xl font-black text-white placeholder:text-slate-800 tracking-tighter uppercase italic" placeholder="Your Identity" />
                    </div>
                    <div className="group">
                       <input className="w-full bg-transparent border-b-2 border-white/5 p-5 outline-none focus:border-emerald-500 transition-all text-xl font-black text-white placeholder:text-slate-800 tracking-tighter uppercase italic" placeholder="Contact Signal" />
                    </div>
                    <div className="group">
                       <textarea className="w-full bg-transparent border-b-2 border-white/5 p-5 outline-none focus:border-emerald-500 transition-all text-xl font-black text-white placeholder:text-slate-800 min-h-[160px] tracking-tighter uppercase italic resize-none" placeholder="Intel / Project Summary"></textarea>
                    </div>
                  </div>
                  <button className="w-full py-8 bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-[0.4em] text-[11px] rounded-[2rem] transition-all shadow-[0_25px_60px_rgba(16,185,129,0.3)] active:scale-95 flex items-center justify-center gap-4 text-center">
                    <Send size={22} />
                    <span>Transmit Message</span>
                  </button>
                </form>
              </div>
           </div>
        </div>
      </section>

      {/* Final Footer Hub */}
      <footer className="py-24 px-6 border-t border-white/5 bg-[#050807]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center space-x-6">
             <div className="w-16 h-16 bg-emerald-500/10 rounded-[1.5rem] flex items-center justify-center border border-emerald-500/20 shadow-2xl">
                <Shield className="text-emerald-500 w-10 h-10" />
             </div>
             <div className="flex flex-col">
                <span className="font-black text-4xl leading-none tracking-tighter uppercase text-white">Ikram Ulhaq</span>
                <span className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mt-3">Cyber Defense Specialist</span>
             </div>
          </div>

          <div className="text-center md:text-left space-y-3">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
              © {new Date().getFullYear()} {profile.name}. System Secured.
            </div>
            <div className="text-[9px] font-mono text-slate-800 uppercase tracking-widest italic flex items-center gap-2 justify-center md:justify-start">
               <MapPin size={10} /> {profile.location} // Wireless Gate, Shah Faisal
            </div>
          </div>

          <div className="flex space-x-5">
             {[
               { icon: <Linkedin size={24}/>, link: profile.linkedin },
               { icon: <Github size={24}/>, link: "#" },
               { icon: <Mail size={24}/>, link: `mailto:${profile.email}` }
             ].map((social, i) => (
               <a key={i} href={social.link} target="_blank" className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/5 text-emerald-500 rounded-3xl hover:bg-emerald-500 hover:text-black transition-all hover:-translate-y-3 shadow-2xl">
                  {social.icon}
               </a>
             ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(-10%); } 50% { transform: translateY(0); } }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050807; }
        ::-webkit-scrollbar-thumb { background: #10b98133; border-radius: 20px; }
        ::-webkit-scrollbar-thumb:hover { background: #10b98166; }

        input, textarea { caret-color: #10b981; }
      `}</style>
    </div>
  );
};

export default App;