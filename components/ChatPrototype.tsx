import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Code, Database } from 'lucide-react';
import { generateDslFromPrompt } from '../services/geminiService';

const ChatPrototype: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{role: 'user' | 'bot', text: string, dsl?: string}>>([
    { role: 'bot', text: 'Hello! I am the Log Analytics assistant. Ask me about system logs, error rates, or downtime.' }
  ]);
  const [loading, setLoading] = useState(false);
  
  // Ref for the scrollable container instead of a dummy div at the end
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(scrollToBottom, [history]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const result = await generateDslFromPrompt(userMsg);

    setLoading(false);
    setHistory(prev => [...prev, { 
      role: 'bot', 
      text: result.explanation,
      dsl: result.dsl
    }]);
  };

  return (
    <div className="bg-slate-900/50 py-24 px-6" id="chat-prototype">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Bot className="w-8 h-8 text-brand-cyan" />
                Interactive Prototype
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Experience the Natural Language to DSL translation layer. 
                This demo uses the <span className="text-white font-semibold">Gemini 2.5 Flash</span> model to interpret your intent and generate the appropriate optimized SQL query.
            </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="bg-slate-900/80 p-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-slate-500">preview_env :: v1.0.2</span>
            </div>

            {/* Messages Area */}
            <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 font-sans"
            >
                {history.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-brand-blue' : 'bg-brand-cyan'}`}>
                            {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div className={`flex flex-col max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                            <div className={`p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-brand-blue text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'}`}>
                                {msg.text}
                            </div>
                            {msg.dsl && (
                                <div className="mt-2 w-full max-w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-950 p-3 animate-fadeIn">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 border-b border-slate-800 pb-1">
                                        <Code size={12} />
                                        <span>GENERATED DSL</span>
                                    </div>
                                    <pre className="text-xs font-mono text-brand-green whitespace-pre-wrap break-all">
                                        {msg.dsl}
                                    </pre>
                                    <div className="mt-2 flex items-center gap-1 text-[10px] text-brand-cyan/70">
                                        <Database size={10} />
                                        <span>Routing to: {msg.dsl.includes('rollups') ? 'Warm Tier (ClickHouse)' : 'Hot Tier (Redis)'}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center shrink-0">
                             <Bot size={16} />
                        </div>
                        <div className="flex items-center gap-1 h-10 bg-slate-800 rounded-2xl rounded-tl-none px-4">
                            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="relative flex items-center">
                    <input 
                        type="text" 
                        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-brand-cyan transition-colors font-mono text-sm"
                        placeholder="Try asking: 'Count ERROR logs in auth service for the last 6 hours'..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button 
                        onClick={handleSend}
                        className="absolute right-2 p-2 bg-brand-cyan/20 hover:bg-brand-cyan/40 text-brand-cyan rounded-lg transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPrototype;