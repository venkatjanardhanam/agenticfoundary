
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_AGENTS } from '../constants';
import { Category } from '../types';
import AgentCard from '../components/AgentCard';

const Explorer: React.FC = () => {
  const categories = Object.values(Category);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Explore <span className="text-gradient">Agent Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Browse through thousands of specialized agents categorized by industry and use case.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((cat) => {
            const agentsInCategory = MOCK_AGENTS.filter(a => a.category === cat);
            if (agentsInCategory.length === 0) return null;

            return (
              <section key={cat} id={cat.toLowerCase()}>
                <div className="flex items-end justify-between mb-8 pb-4 border-b border-white/10">
                  <div>
                    <h2 className="text-3xl font-bold text-white">{cat}</h2>
                    <p className="text-gray-500 mt-1">Found {agentsInCategory.length} active agents</p>
                  </div>
                  <Link 
                    to={`/category/${cat.toLowerCase()}`} 
                    className="text-indigo-400 font-bold text-sm hover:underline flex items-center gap-1"
                  >
                    Browse all {cat} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {agentsInCategory.slice(0, 3).map(agent => (
                    <AgentCard key={agent.id} agent={agent} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
