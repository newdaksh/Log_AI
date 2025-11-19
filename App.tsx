import React, { useState } from 'react';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import ChatPrototype from './components/ChatPrototype';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import CostChart from './components/CostChart';
import SchemaViewer from './components/SchemaViewer';
import { Menu, X, Github } from 'lucide-react';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Architecture', id: 'architecture' },
    { name: 'Tech Stack', id: 'tech-stack' },
    { name: 'Prototype', id: 'chat-prototype' },
    { name: 'Roadmap', id: 'roadmap' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-cyan selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="w-6 h-6 bg-gradient-to-br from-brand-cyan to-brand-blue rounded flex items-center justify-center text-[10px] text-white font-mono">L</div>
             <span>LogAI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-400 hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Github size={16} />
              <span>Repo</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-brand-dark border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl">
             {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-left text-base font-medium text-slate-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero />
        
        {/* Executive Summary / Verdict */}
        <div className="bg-brand-dark py-16 px-6 border-b border-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-bold mb-4 border border-brand-green/20">
                    ✅ Feasibility Verdict: Achievable
                </div>
                <p className="text-xl text-slate-300">
                    Retrieving "most recent logs" in <span className="text-white font-bold">~0.5s</span> is possible using a <span className="text-brand-cyan">Hot In-Memory Tier</span> strategy, bypassing standard disk-based indexing for immediate retrieval.
                </p>
            </div>
        </div>

        <Architecture />
        <TechStack />
        <ChatPrototype />
        <SchemaViewer />
        <Roadmap />
        <CostChart />
      </main>

      <footer className="bg-black py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">
                © 2024 Internal Systems Engineering. Confidential Proposal.
            </div>
            <div className="flex space-x-6">
                <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">Documentation</span>
                <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">API Spec</span>
                <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">SLA Agreement</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
