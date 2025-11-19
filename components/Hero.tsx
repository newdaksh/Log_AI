import React from 'react';
import { Terminal, Cpu, Activity, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
            backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-brand-blue rounded-full blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-cyan rounded-full blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-brand-card border border-white/10 rounded-full px-4 py-2 mb-8 animate-bounce">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
            </span>
            <span className="text-sm font-mono text-brand-green">System Proposal v1.0</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Log Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">Chatbot</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          A comprehensive architecture for real-time ingestion, 
          <span className="text-brand-cyan font-semibold"> 0.5s latency</span> retrieval, 
          and LLM-powered analytics at multi-TB scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center hover:border-brand-cyan/50 transition-colors">
                <Zap className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="font-semibold text-white mb-2">Ultra-Low Latency</h3>
                <p className="text-sm text-slate-400">~0.5s retrieval for recent logs via in-memory ring buffers.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center hover:border-brand-blue/50 transition-colors">
                <Activity className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-semibold text-white mb-2">Massive Scale</h3>
                <p className="text-sm text-slate-400">Multi-TB/day ingestion with reliable streaming pipelines.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center hover:border-purple-500/50 transition-colors">
                <Cpu className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-sm text-slate-400">Natural language to SQL translation with provenance.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
