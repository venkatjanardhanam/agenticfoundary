
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);

  const handlePlaygroundClick = () => {
    // Only IDs 2 (Globetrotter) and 3 (CollegeCompass) have playgrounds
    if (agent.id === '2' || agent.id === '3') {
      setIsPlaygroundOpen(true);
    } else {
      alert(`${agent.name} Playground is coming soon!`);
    }
  };

  const getLangflowSnippet = () => {
    if (agent.id === '3') {
      return `
        <langflow-chat
          window_title="College Compass agent"
          flow_id="177590f3-cc78-4862-bcb7-1c96c377fdce"
          host_url="https://langflow-642200243.kloudbeansite.com"
          api_key="sk-AXDJj5dnyKvNKicHHK5Gi8OOulF7tQyKsrPrbMioJ5U">
        </langflow-chat>
      `;
    }
    // Default/Globetrotter
    return `
      <langflow-chat
        window_title="Travel Planning Agents"
        flow_id="ac2c8ed7-65fd-43f6-9e44-a2e6d18aead8"
        host_url="https://langflow-642200243.kloudbeansite.com"
        api_key="sk-AXDJj5dnyKvNKicHHK5Gi8OOulF7tQyKsrPrbMioJ5U">
      </langflow-chat>
    `;
  };

  return (
    <>
      <div className="glass group hover:border-indigo-500/50 transition-all duration-300 rounded-2xl p-6 flex flex-col h-full overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="text-6xl">{agent.icon}</span>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl border border-indigo-500/30">
            {agent.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors">{agent.name}</h3>
            <p className="text-xs text-indigo-300 uppercase tracking-widest">{agent.category}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {agent.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {agent.downloads.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {agent.rating}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-400">
              <span className="mr-1">by</span>
              <span className="text-gray-200 font-medium">{agent.author}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Link 
              to={`/agent/${agent.id}`}
              className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-all border border-white/5 text-center"
            >
              Details
            </Link>
            <button 
              onClick={handlePlaygroundClick}
              className="flex-1 px-4 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-xl text-xs font-bold transition-all border border-indigo-500/20 flex items-center justify-center gap-2 group/play"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Playground
            </button>
          </div>
        </div>
      </div>

      {/* PLAYGROUND MODAL */}
      {isPlaygroundOpen && (
        <div className="fixed inset-0 z-[100] p-4 md:p-8 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full h-full max-w-6xl glass rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            {/* Header - Fixed Height */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-white/5 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{agent.icon}</span>
                <div>
                  <h2 className="font-bold text-lg leading-none">{agent.name} Playground</h2>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Foundry Interface Node #402</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPlaygroundOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Body - Fill Remaining Height */}
            <div className="flex-1 min-h-0 bg-[#030712] relative overflow-hidden">
              <div 
                className="w-full h-full overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: getLangflowSnippet() }} 
              />
            </div>

            {/* Footer - Fixed Height */}
            <div className="px-8 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Online</span>
              </div>
              <p className="text-[10px] text-gray-500 italic">Langflow Embedded v1.0.7</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentCard;
