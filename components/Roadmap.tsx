import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { RoadmapPhase } from '../types';

const phases: RoadmapPhase[] = [
  {
    phase: 'Phase 0',
    title: 'Preparation & Infra',
    duration: '1-2 Weeks',
    items: ['Provision Kafka (Managed)', 'Setup Redis Cluster', 'IAM & VPC Configuration', 'Deploy Ingest Gateway']
  },
  {
    phase: 'MVP (v0)',
    title: 'Core Pipeline & Hot Tier',
    duration: '4-6 Weeks',
    items: ['Collectors → Kafka → Redis', 'Recent Logs API (<0.5s)', 'Basic Aggregations', 'Simple NL Templates']
  },
  {
    phase: 'v1',
    title: 'Streaming Analytics',
    duration: '8-12 Weeks',
    items: ['Flink Stream Processing', 'ClickHouse Ingestion', 'Vectorization Pipeline', 'RBAC & Audit Logs']
  },
  {
    phase: 'v2',
    title: 'Full AI & Scale',
    duration: '12+ Weeks',
    items: ['Full LLM Grounding UI', 'Multi-tenant Isolation', 'Cross-region DR', 'Advanced Query Optimizer']
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="bg-brand-dark py-24 px-6" id="roadmap">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
             <h2 className="text-3xl font-bold text-white">Implementation Roadmap</h2>
             <p className="text-slate-400 mt-2">Phased rollout strategy to validate the 0.5s latency target early.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
                <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent rounded-2xl -z-10 group-hover:from-brand-blue/20 transition-colors"></div>
                    <div className="p-6 border border-slate-700 rounded-2xl h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-brand-cyan uppercase bg-brand-cyan/10 px-2 py-1 rounded">{phase.phase}</span>
                            <span className="text-xs text-slate-500 font-mono">{phase.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                        <ul className="space-y-3 flex-1">
                            {phase.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                    {idx < 2 ? <CheckCircle2 size={16} className="text-brand-green mt-0.5 shrink-0" /> : <Circle size={16} className="text-slate-600 mt-0.5 shrink-0" />}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
