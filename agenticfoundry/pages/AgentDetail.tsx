
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_AGENTS } from '../constants';

const AgentDetail: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const agent = MOCK_AGENTS.find(a => a.id === agentId);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);

  if (!agent) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Agent not found</h2>
        <Link to="/" className="text-indigo-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const handlePlaygroundClick = () => {
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
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-indigo-400 font-medium mb-8">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link to={`/category/${agent.category.toLowerCase()}`} className="hover:underline">
            {agent.category}
          </Link>
          <span>/</span>
          <span className="text-gray-500">{agent.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-3xl bg-indigo-500/20 flex items-center justify-center text-5xl border border-indigo-500/30 shrink-0">
                {agent.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{agent.name}</h1>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/20 tracking-wider uppercase">
                    v{agent.version}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">Released on {new Date(agent.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">About this Agent</h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                {agent.description}
              </p>
              <div className="space-y-4">
                <h3 className="font-bold text-white">Capabilities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Autonomous Reasoning', 'Tool Integration', 'Context Memory', 'Multi-step Planning'].map((cap, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">How to Use</h2>
              <div className="bg-black/50 p-4 rounded-xl font-mono text-sm text-indigo-300 border border-white/5 mb-6 overflow-x-auto">
                <code>agenticfoundry install {agent.name.toLowerCase().replace(/\s+/g, '-')}</code>
              </div>
              <p className="text-gray-400 text-sm">
                Make sure you have the AgenticFoundry SDK installed globally before running the command. 
                Visit the <Link to="/help" className="text-indigo-400 hover:underline">Help Center</Link> for detailed setup guides.
              </p>
            </div>
          </div>

          {/* Sidebar Stats & Author */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/10 sticky top-32">
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Downloads</span>
                  <span className="text-white font-bold">{agent.downloads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Rating</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-bold">{agent.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Category</span>
                  <span className="text-indigo-300 font-bold uppercase text-xs tracking-widest">{agent.category}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 group">
                  <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Agent
                </button>
                <button 
                  onClick={handlePlaygroundClick}
                  className="w-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 py-4 rounded-2xl font-bold transition-all border border-indigo-500/20 flex items-center justify-center gap-2 group"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                  Open Playground
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Built By</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/${agent.author}/100/100`} className="w-12 h-12 rounded-full border border-white/10" alt={agent.author} />
                  <div>
                    <div className="font-bold text-white">{agent.author}</div>
                    <div className="text-xs text-gray-500">Certified Founder</div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default AgentDetail;