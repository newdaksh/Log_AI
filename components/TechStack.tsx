import React from 'react';
import { Container, Database, Cpu, Network, Shield, BarChart3 } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <div className="bg-slate-900/50 py-24 px-6 border-t border-slate-800" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Ingestion */}
            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 mb-4">
                    <Network className="text-blue-500" />
                    <h3 className="text-xl font-bold text-white">Ingest & Stream</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Broker</span>
                        <span className="font-mono text-brand-cyan">Kafka / Redpanda</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Collectors</span>
                        <span className="font-mono text-brand-cyan">FluentBit / Vector</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Protocol</span>
                        <span className="font-mono text-brand-cyan">gRPC / HTTP2</span>
                    </li>
                </ul>
            </div>

            {/* Storage */}
            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-green-500">
                <div className="flex items-center gap-3 mb-4">
                    <Database className="text-green-500" />
                    <h3 className="text-xl font-bold text-white">Storage Tiers</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Hot (Memory)</span>
                        <span className="font-mono text-brand-cyan">Redis Streams</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Warm (OLAP)</span>
                        <span className="font-mono text-brand-cyan">ClickHouse</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Cold (Archive)</span>
                        <span className="font-mono text-brand-cyan">S3 Parquet</span>
                    </li>
                </ul>
            </div>

            {/* AI & Query */}
            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-purple-500">
                <div className="flex items-center gap-3 mb-4">
                    <Cpu className="text-purple-500" />
                    <h3 className="text-xl font-bold text-white">AI & Query</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>LLM</span>
                        <span className="font-mono text-brand-cyan">Gemini 2.5 / OpenAI</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Vector DB</span>
                        <span className="font-mono text-brand-cyan">Milvus / Weaviate</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Backend</span>
                        <span className="font-mono text-brand-cyan">Go / TypeScript</span>
                    </li>
                </ul>
            </div>

             {/* Infra */}
             <div className="glass-panel p-6 rounded-xl border-l-4 border-l-orange-500">
                <div className="flex items-center gap-3 mb-4">
                    <Container className="text-orange-500" />
                    <h3 className="text-xl font-bold text-white">Infrastructure</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Orchestration</span>
                        <span className="font-mono text-brand-cyan">Kubernetes (EKS)</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>IaC</span>
                        <span className="font-mono text-brand-cyan">Terraform</span>
                    </li>
                     <li className="flex justify-between">
                        <span>CD</span>
                        <span className="font-mono text-brand-cyan">ArgoCD</span>
                    </li>
                </ul>
            </div>

             {/* Security */}
             <div className="glass-panel p-6 rounded-xl border-l-4 border-l-red-500">
                <div className="flex items-center gap-3 mb-4">
                    <Shield className="text-red-500" />
                    <h3 className="text-xl font-bold text-white">Security</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Auth</span>
                        <span className="font-mono text-brand-cyan">Keycloak / OIDC</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Secrets</span>
                        <span className="font-mono text-brand-cyan">Vault</span>
                    </li>
                </ul>
            </div>

             {/* Observability */}
             <div className="glass-panel p-6 rounded-xl border-l-4 border-l-yellow-500">
                <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="text-yellow-500" />
                    <h3 className="text-xl font-bold text-white">Observability</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Metrics</span>
                        <span className="font-mono text-brand-cyan">Prometheus</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Dashboards</span>
                        <span className="font-mono text-brand-cyan">Grafana</span>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;
