import React from 'react';
import { Server, Database, Box, ArrowRight, Cloud, Layers, Zap } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="bg-brand-dark py-24 px-6 border-t border-slate-800" id="architecture">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
            <span className="text-brand-cyan font-mono text-sm uppercase tracking-wider">Architecture</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-6">Streaming-First Hybrid Model</h2>
            <p className="text-slate-400 max-w-3xl text-lg">
                To achieve sub-second latency for recent logs while maintaining months of searchable history, 
                we propose a split architecture: a hot in-memory tier for speed and a columnar OLAP tier for analytics.
            </p>
        </div>

        {/* Diagram Container */}
        <div className="relative p-8 md:p-12 glass-panel rounded-3xl border border-slate-700 overflow-hidden">
            
            {/* Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                
                {/* 1. Ingest */}
                <div className="md:col-span-2 flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-600 text-center w-full">
                        <div className="flex justify-center mb-2 text-brand-blue"><Cloud size={32} /></div>
                        <div className="font-bold text-white">Collectors</div>
                        <div className="text-xs text-slate-400 mt-1">FluentBit / Vector</div>
                    </div>
                    <ArrowRight className="transform rotate-90 md:rotate-0 text-slate-500" />
                </div>

                {/* 2. Streaming Core */}
                <div className="md:col-span-3 flex flex-col justify-center space-y-4">
                    <div className="p-6 bg-slate-800/50 rounded-xl border border-brand-blue/30 text-center w-full relative overflow-hidden group">
                        <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-colors"></div>
                        <div className="flex justify-center mb-3 text-brand-blue"><Layers size={40} /></div>
                        <div className="font-bold text-white text-lg">Streaming Core</div>
                        <div className="text-sm text-slate-400 mt-1 font-mono">Kafka / Redpanda</div>
                        <div className="mt-4 text-xs bg-slate-900 py-1 px-2 rounded inline-block text-brand-green">Buffered & Ordered</div>
                    </div>
                </div>

                {/* Splitter Arrows */}
                <div className="md:col-span-1 flex md:flex-col items-center justify-center space-y-12 md:space-y-24 relative">
                     {/* Top Path Arrow */}
                     <div className="absolute top-1/4 left-1/2 w-16 h-[2px] bg-slate-500 -translate-x-1/2 hidden md:block"></div>
                     <div className="absolute top-1/4 right-0 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-slate-500 border-b-[6px] border-b-transparent hidden md:block"></div>
                     
                     {/* Bottom Path Arrow */}
                     <div className="absolute bottom-1/4 left-1/2 w-16 h-[2px] bg-slate-500 -translate-x-1/2 hidden md:block"></div>
                     <div className="absolute bottom-1/4 right-0 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-slate-500 border-b-[6px] border-b-transparent hidden md:block"></div>
                </div>

                {/* 3. Storage Tiers */}
                <div className="md:col-span-4 flex flex-col space-y-8">
                    {/* Hot Tier */}
                    <div className="p-5 bg-brand-cyan/10 rounded-xl border border-brand-cyan/30 relative">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-cyan rounded-full"></div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg text-brand-cyan"><Zap size={24} /></div>
                            <div>
                                <h4 className="font-bold text-white">Hot Tier (RAM)</h4>
                                <p className="text-xs text-slate-400">Redis Streams / Aerospike</p>
                                <div className="mt-2 text-xs font-mono text-brand-cyan">Latency: &lt; 50ms</div>
                            </div>
                        </div>
                    </div>

                    {/* Warm/Cold Tier */}
                    <div className="p-5 bg-purple-500/10 rounded-xl border border-purple-500/30 relative">
                         <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
                         <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg text-purple-400"><Database size={24} /></div>
                            <div>
                                <h4 className="font-bold text-white">Warm Tier (OLAP)</h4>
                                <p className="text-xs text-slate-400">ClickHouse / Druid + S3</p>
                                <div className="mt-2 text-xs font-mono text-purple-400">Analytics & History</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Query Layer */}
                <div className="md:col-span-2 flex flex-col justify-center items-center border-l border-dashed border-slate-600 pl-8">
                     <div className="p-4 bg-slate-800 rounded-xl border border-white/20 text-center w-full shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <div className="flex justify-center mb-2 text-white"><Server size={32} /></div>
                        <div className="font-bold text-white">Query Gateway</div>
                        <div className="text-xs text-slate-400 mt-1">API / LLM Orchestrator</div>
                    </div>
                    <div className="h-8 w-[2px] bg-slate-500 my-2"></div>
                    <div className="text-sm font-mono text-slate-500">Smart Routing</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;