import React from 'react';
import { LogField } from '../types';

const fields: LogField[] = [
  { field: 'event_id', type: 'UUID', requirement: 'Required', notes: 'Unique dedup key' },
  { field: 'timestamp', type: 'ISO8601', requirement: 'Required', notes: 'Primary sort key (UTC)' },
  { field: 'service', type: 'String', requirement: 'Required', notes: 'Partition Key' },
  { field: 'env', type: 'String', requirement: 'Required', notes: 'prod / staging' },
  { field: 'severity', type: 'String', requirement: 'Required', notes: 'INFO / ERROR / FATAL' },
  { field: 'message', type: 'String', requirement: 'Required', notes: 'Indexed for Full Text Search' },
  { field: 'metrics', type: 'JSON', requirement: 'Optional', notes: 'Structured numerical data' },
  { field: 'embedding', type: 'Vector[]', requirement: 'Optional', notes: 'For semantic search (Warm Tier)' },
];

const SchemaViewer: React.FC = () => {
  return (
    <div className="bg-brand-dark py-24 px-6" id="schema">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Canonical Log Schema</h2>
            <span className="text-xs font-mono bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">JSON / Avro</span>
        </div>
        
        <div className="glass-panel rounded-xl overflow-hidden border border-slate-700">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-900/80 border-b border-slate-700">
                            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Field Name</th>
                            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Type</th>
                            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Requirement</th>
                            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {fields.map((f, idx) => (
                            <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-4 font-mono text-brand-cyan text-sm">{f.field}</td>
                                <td className="p-4 text-slate-300 text-sm">{f.type}</td>
                                <td className="p-4">
                                    <span className={`text-xs px-2 py-1 rounded-full ${f.requirement === 'Required' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-700/50 text-slate-400'}`}>
                                        {f.requirement}
                                    </span>
                                </td>
                                <td className="p-4 text-slate-400 text-sm italic">{f.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-slate-900/80 border-t border-slate-700 text-xs font-mono text-slate-500">
                * Schema validated by Confluent Schema Registry at Ingest Gateway
            </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaViewer;
