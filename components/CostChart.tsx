import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'POC (Small)',
    min: 1000,
    max: 5000,
    desc: 'Managed Kafka, Small Redis'
  },
  {
    name: 'Production',
    min: 10000,
    max: 50000,
    desc: 'Clusters, Vector DB, TBs Storage'
  },
  {
    name: 'Enterprise',
    min: 50000,
    max: 200000,
    desc: 'Multi-region, High Concurrency'
  },
];

const CostChart: React.FC = () => {
  return (
    <div className="bg-slate-900 py-16 px-6" id="costs">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Monthly Cost Estimates (USD)</h2>
        <div className="glass-panel p-6 rounded-xl h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" tickFormatter={(value) => `$${value/1000}k`} />
              <YAxis dataKey="name" type="category" stroke="#e2e8f0" width={100} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#fff' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Legend />
              <Bar dataKey="min" name="Min Estimate" fill="#06b6d4" radius={[0, 4, 4, 0]} barSize={20} />
              <Bar dataKey="max" name="Max Estimate" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                    <h4 className="text-white font-semibold">{item.name}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CostChart;
