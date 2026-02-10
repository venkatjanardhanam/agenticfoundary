
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">The Future is Agentic</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            AgenticFoundry is the world's first open-source infrastructure layer specifically built for autonomous AI agents. 
            We are redefining how humans interact with technology by enabling a collaborative ecosystem of intelligence.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded in 2024, AgenticFoundry started with a simple observation: large language models are powerful, but they are static. To truly unlock their potential, they need agency—the ability to plan, use tools, and interact with the world.
              </p>
              <p>
                What began as a small research project in a dorm in Bloomington Indiana has evolved into a global movement. We realized that no single company can build all the agents the world needs. The solution had to be open, decentralized, and community-driven.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="relative rounded-3xl border border-white/10 shadow-2xl" alt="Collaborative team" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="glass p-8 rounded-3xl border border-white/10">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3">Global Ecosystem</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our platform connects builders from over 150 countries, fostering a diverse pool of intelligence and localized solutions.
            </p>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/10">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Safety First</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We implement rigorous automated safety checks and community auditing to ensure every agent on our platform is secure.
            </p>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/10">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">High Performance</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our infrastructure is optimized for low-latency agentic reasoning, enabling real-time autonomous decision making.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <section className="mb-32">
          <div className="glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-600/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our 2030 Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                By 2030, we envision a world where every individual and business has a "Foundry" of personal agents handling 80% of their operational tasks. This isn't just about efficiency; it's about freeing human creativity from the chains of repetitive digital labor.
              </p>
              <div className="flex gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1B+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Task Automations</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100M+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Active Agents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Pioneers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Alex Rivera', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=alex' },
              { name: 'Sarah Chen', role: 'Chief AI Architect', img: 'https://i.pravatar.cc/150?u=sarah' },
              { name: 'Marcus Thorne', role: 'Head of Ecosystem', img: 'https://i.pravatar.cc/150?u=marcus' },
              { name: 'Elena Vance', role: 'Security Lead', img: 'https://i.pravatar.cc/150?u=elena' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-block mb-4">
                   <img src={member.img} className="w-24 h-24 rounded-full border-2 border-indigo-500/30 p-1" alt={member.name} />
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;