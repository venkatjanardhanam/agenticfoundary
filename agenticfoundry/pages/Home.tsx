
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_AGENTS } from '../constants';
import AgentCard from '../components/AgentCard';
import HeroScene from '../components/HeroScene';

const Home: React.FC = () => {
  const featuredAgents = MOCK_AGENTS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Interactive Background */}
        <HeroScene />
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full bg-indigo-600/5 blur-[150px] rounded-full -z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent -z-10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 animate-in fade-in slide-in-from-bottom-4">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            AgenticFoundry v2.0 is live
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[1] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Forging the Frontier of <br />
            <span className="text-gradient">Autonomous Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700">
            The world's first open ecosystem for autonomous AI agents. 
            Host, build, and deploy specialized intelligence for any challenge. 
            <span className="block mt-4 text-indigo-300/80 font-medium">Roadmap: Reaching 100 agent by 2026.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Link to="/explorer" className="w-full sm:w-auto px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-2xl font-bold transition-all shadow-2xl shadow-white/10 group flex items-center justify-center gap-2">
              Explore the Foundry
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/register" className="w-full sm:w-auto px-10 py-4 glass hover:bg-white/5 rounded-2xl font-bold transition-all border border-white/10 flex items-center justify-center">
              Start Building
            </Link>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-24 relative z-10 animate-in fade-in delay-500 duration-1000">
          {[
            { label: 'Agents Hosted', value: '5' },
            { label: 'Cloud Builders', value: '3' },
            { label: '2026 Target', value: '100 Agents' },
            { label: 'Global Nodes', value: '150+' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 md:p-8 glass rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-indigo-400 transition-colors">{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 bg-[#030712] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4">Marketplace</div>
              <h2 className="text-4xl font-bold mb-4">Trending Intelligence</h2>
              <p className="text-gray-400 max-w-xl">
                Discover the most reliable and efficient agents as voted by our global community of developers.
              </p>
            </div>
            <Link to="/explorer" className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 glass rounded-xl border border-white/10 hover:bg-white/5 transition-all">
              View All Agents
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-32 px-6 border-t border-white/5 relative bg-grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Build Your Own Agent</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our SDK provides the primitives for memory, tool-use, and multi-agent orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                title: 'Define Logic', 
                desc: 'Write specialized instructions and give your agent access to real-world tools.', 
                icon: '🛠️',
                color: 'from-indigo-500/20'
              },
              { 
                title: 'Instant Deploy', 
                desc: 'Upload to our distributed cloud with a single command for low-latency execution.', 
                icon: '🚀',
                color: 'from-purple-500/20'
              },
              { 
                title: 'Scale & Earn', 
                desc: 'Let thousands of users utilize your agent while you build your reputation.', 
                icon: '📈',
                color: 'from-rose-500/20'
              },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-4xl mb-8 border border-white/10 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;