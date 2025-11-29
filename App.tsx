import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Users, Phone, ChevronRight, Code, Brain, Zap, BookOpen, GraduationCap, BarChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Bootcamps', href: '#bootcamps' },
    { name: 'Courses', href: '#courses' },
    { name: 'Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-white">HYPERCODE</span>
              <span className="text-[10px] text-cyan-400 uppercase tracking-[0.2em] leading-none">AI Community</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium border-l-2 border-transparent hover:border-cyan-400 bg-white/5 hover:bg-white/10 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#05050a] to-[#05050a] z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              HyperCode AI
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Create</span> Conquer
            </h1>
            <h2 className="text-xl md:text-2xl text-white font-light mb-4">
              <span className="text-cyan-400 font-semibold">The Engineers Community</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              <span className="text-cyan-400 font-semibold">100% Online Classes</span> — Learn at your comfortable timings. Not only for Engineers—this is for non-technical professionals, high school students, degree holders, and dropouts. 
              <br/><br/>
              Your background doesn't matter. Your willingness to learn does.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chat.whatsapp.com/IFUI6padUsDDqR2OJ0ItyS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all text-center flex items-center justify-center gap-2 group border border-cyan-500/20"
              >
                Join Community <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#courses"
                className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all text-center backdrop-blur-sm"
              >
                Explore Classes
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-2 md:p-6 relative overflow-hidden group border border-cyan-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/banner.png" 
                alt="AI Bootcamp" 
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-4 opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">Upcoming Free Bootcamp</h3>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-mono animate-pulse">LIVE SOON</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-cyan-300">Python</span>
                  <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-cyan-300">OpenCV</span>
                  <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-cyan-300">Zero-to-Hero</span>
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-cyan-300 font-semibold">Online Bootcamp</span> - 7-14 Days Intensive Training at your comfortable timings. We are teaching OpenCV simple projects which uses AI Camera and Autopilot systems concepts from absolute basics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Hypercode</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border-l-4 border-cyan-500">
              <Users className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Online Community First</h3>
              <p className="text-gray-400 leading-relaxed">
                We teach <span className="text-white font-semibold">100% Online</span> Classes in Artificial Intelligence & Coding either free or at an affordable cost. Learn at your comfortable timings. Our mission is to make Kerala students & professionals knowledgeable in AI, coding, robotics, and automation.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl border-l-4 border-purple-500">
              <GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Mentorship</h3>
              <p className="text-gray-400 leading-relaxed">
                Trained by one of Kerala’s <span className="text-white font-bold">FIRST AI Trainers</span>. Mentored by experienced AI & Robotics Engineers who have trained 100+ students. All mentors hold qualified degrees in Computer Science & Engineering.
              </p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10"
          >
            <img 
              src="/hypercodeai.png" 
              alt="Hypercode AI" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
              <h4 className="text-2xl font-bold text-white mb-2">Real Skills. Real Future.</h4>
              <p className="text-gray-300">Whether you are a student, professional, or dropout, we help you build a career in technology.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FreeBootcamp = () => {
  const syllabus = [
    { day: "Day 1", title: "Python Intro", desc: "Variables, Datatypes, Input/Output" },
    { day: "Day 2", title: "Data Structures", desc: "List, Tuple, Set, Dictionary mastery" },
    { day: "Day 3", title: "Logic & Control", desc: "Conditions (If-Else), Flow control" },
    { day: "Day 4", title: "Loops", desc: "For loops, While loops, Iterations" },
    { day: "Day 5", title: "Functions", desc: "Modular coding, Reusable blocks" },
    { day: "Day 6", title: "Intro to AI", desc: "What is AI/ML? Real world examples" },
    { day: "Day 7", title: "OpenCV Project", desc: "Computer Vision Mini Project" },
  ];

  return (
    <section id="bootcamps" className="py-20 bg-[#05050a] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-widest">FREE ACCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">7-14 Days AI Bootcamp</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            One-to-One Live Classes. No coding knowledge required. We start from absolute zero.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabus.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors border-l-4 border-l-cyan-500/20 hover:border-l-cyan-400"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded">{item.day}</span>
                </div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-b from-blue-900/20 to-black p-8 rounded-2xl border border-blue-500/30 flex flex-col justify-center text-center">
            <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Why Join?</h3>
            <ul className="text-left space-y-4 mb-8 text-gray-300">
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400" /> Learn Real AI Tools</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400" /> Build Auto-pilot Logic</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400" /> Career Guidance included</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400" /> Perfect for Beginners</li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">
              After the bootcamp, you will know exactly where to start your AI career.
            </p>
            <a 
              href="https://chat.whatsapp.com/IQBXYI2oJNHKupIOMKpa5s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-colors shadow-lg shadow-green-900/20"
            >
              Join Bootcamp Group
            </a>
          </div>
        </div>

        {/* Upcoming Bootcamps */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Upcoming Bootcamps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Java Bootcamp", icon: <Code />, status: "Coming Soon" },
              { title: "SDET Automation", icon: <Terminal />, status: "Coming Soon" },
              { title: "Power BI", icon: <BarChart />, status: "Coming Soon" },
              { title: "Robotics", icon: <Cpu />, status: "Coming Soon" }
            ].map((camp, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl relative group overflow-hidden border border-white/5 hover:border-purple-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  {camp.icon && React.cloneElement(camp.icon as React.ReactElement<any>, { className: "w-16 h-16 text-purple-500 transform rotate-12 translate-x-4 -translate-y-4" })}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 mb-4 text-cyan-400">
                    {camp.icon && React.cloneElement(camp.icon as React.ReactElement<any>)}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{camp.title}</h4>
                  <span className="inline-block px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-mono border border-purple-500/30">
                    {camp.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MainCourse = () => {
  const topics = [
    "Python Mastery", "NumPy & Math", "Pandas Data Analysis", "Machine Learning", "Neural Networks", "OpenCV Projects"
  ];

  return (
    <section id="courses" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-mono mb-6">
                🚧 COMING SOON
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Complete Python-AI Classes</h2>
              <p className="text-gray-400 mb-6 text-lg">
                <span className="text-cyan-400 font-semibold">100% Online</span> — Learn at your comfortable timings. Kerala's rarest syllabus covering everything from basic Python to building Neural Networks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {topics.map((t, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic border-l-2 border-gray-700 pl-4">
                "All classes are 100% Online and affordable — much lower than any AI classes in Kerala. Learn at your comfortable timings. Perfect for Engineers, BTech, BCA, MCA, Working professionals, or anyone from any background — even high school kids."
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-white/10 group">
                <img src="/masterclass.png" alt="Code Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Stay Tuned</h3>
                    <p className="text-cyan-400">Launching Very Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-[#05050a] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
           <Users className="w-12 h-12 text-cyan-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
        
        <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light shadow-2xl shadow-cyan-900/10 border border-white/10">
          <p>
            We are here to educate Kerala's youth in AI and coding with <span className="text-white font-semibold">100% Online Classes</span> at <span className="text-cyan-400 font-semibold">your comfortable timings</span>, either <span className="text-cyan-400 font-semibold">free</span> or at an <span className="text-cyan-400 font-semibold">affordable cost</span>.
          </p>
          <p>
            We strongly believe that <span className="text-white font-semibold">education should not be a luxury</span>. We guide students who cannot afford huge fees (₹30,000 to ₹4,00,000) charged by corporate institutes.
          </p>
          <hr className="border-white/10 w-1/2 mx-auto" />
          <p className="text-2xl font-semibold text-white">
            This is a community — not a company.
          </p>
          <p>
            We hold your hands from scratch <span className="text-white font-semibold">100% Online</span>. Whether you are a High School Student, a Degree Holder, a Dropout, or a Working Professional — <span className="text-cyan-400">learn at your comfortable timings and upskill with us</span>.
          </p>
          <p>
            Our goal is to help financially struggling learners build a bright future in tech.
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Revolution</h2>
          <p className="text-gray-400">Reach out to us or join our WhatsApp groups instantly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Actions */}
          <a 
            href="https://chat.whatsapp.com/IQBXYI2oJNHKupIOMKpa5s"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-[#25D366] p-8 transition-all hover:bg-[#20bd5a] hover:scale-[1.02] duration-300"
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <Phone className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Join Bootcamp Group</h3>
              <p className="text-green-50">Get updates on the next free batch</p>
            </div>
          </a>

          <a 
             href="https://chat.whatsapp.com/IFUI6padUsDDqR2OJ0ItyS"
             target="_blank"
             rel="noopener noreferrer"
             className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 transition-all hover:bg-slate-700 border border-white/10 hover:scale-[1.02] duration-300"
          >
             <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <Users className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Join Main Community</h3>
              <p className="text-gray-400">Connect with other learners</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone size={20} className="text-cyan-500" />
            <span>+91 89214 89372</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone size={20} className="text-cyan-500" />
            <span>+91 70345 03520</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <span className="text-blue-500 font-bold">✉</span>
            <a href="mailto:HypercodeAi1@gmail.com" className="hover:text-white transition-colors underline decoration-blue-500/50">HypercodeAi1@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-500 font-bold">IG</span>
            <a href="https://instagram.com/_hypercode_ai" className="hover:text-white transition-colors underline decoration-pink-500/50">@_hypercode_ai</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-8 border-t border-white/5 text-center">
    <p className="text-gray-600 text-sm">
      © {new Date().getFullYear()} Hypercode AI Community. Code • Create • Conquer.
    </p>
  </footer>
);

// --- Main App ---

const App = () => {
  return (
    <div className="bg-[#05050a] min-h-screen text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <About />
      <FreeBootcamp />
      <MainCourse />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;