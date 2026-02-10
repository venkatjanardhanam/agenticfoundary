
import React from 'react';
import Logo, { LogoVariant } from '../components/Logo';

const BrandIdentity: React.FC = () => {
  const variants: { id: LogoVariant; title: string; description: string }[] = [
    { 
      id: 'default', 
      title: 'The Monolith', 
      description: 'The standard hexagonal mark representing structure, stability, and the "foundry" core.' 
    },
    { 
      id: 'orbital', 
      title: 'The Orchestrator', 
      description: 'Emphasizes agent orchestration and the interconnected nodes of a decentralized ecosystem.' 
    },
    { 
      id: 'spark', 
      title: 'The Catalyst', 
      description: 'Focuses on action, speed, and the "agentic" power to trigger real-world changes.' 
    },
    { 
      id: 'neural', 
      title: 'The Synapse', 
      description: 'Highlights the collective intelligence and neural connectivity of multiple agents working together.' 
    },
    { 
      id: 'forge', 
      title: 'The Ironworks', 
      description: 'A literal interpretation of the foundry theme, representing the creation of heavy-duty tools.' 
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Brand <span className="text-gradient">Exploration</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reviewing alternate visual identities for AgenticFoundry. Each concept focuses on a different pillar of our technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {variants.map((v) => (
            <div key={v.id} className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="flex justify-center mb-8 bg-white/5 py-12 rounded-3xl border border-white/5 group-hover:bg-indigo-500/5 transition-colors">
                <Logo size={120} variant={v.id} showText={false} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {v.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
                <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                <span className="w-3 h-3 rounded-full bg-white"></span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-auto">Concept {v.id.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 glass rounded-[3rem] border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">Core Typography</h2>
          <p className="text-gray-400 mb-8">Using Inter Variable with tight tracking for a modern, industrial startup feel.</p>
          <div className="flex flex-col gap-4 items-center">
            <div className="text-6xl font-black tracking-tighter italic">AgenticFoundry</div>
            <div className="text-4xl font-bold tracking-tight">AgenticFoundry</div>
            <div className="text-2xl font-medium tracking-normal text-gray-400 uppercase tracking-[0.3em]">AgenticFoundry</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;