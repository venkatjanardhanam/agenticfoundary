
import React from 'react';

const Services: React.FC = () => {
  const offerings = [
    {
      title: "Agent Hosting",
      description: "Low-latency, scalable infrastructure optimized for long-running autonomous AI agents. We handle the compute and orchestration so you can focus on the core logic.",
      icon: "☁️",
      features: ["Auto-scaling", "99.9% Uptime", "Distributed Runtime"]
    },
    {
      title: "Consulting to build agent",
      description: "Customized agent development services. We architect specialized systems using top-tier toolkits like LangChain, CrewAI, and AutoGen to solve your unique business logic requirements.",
      icon: "🧠",
      features: ["Architecture Design", "Multi-Toolkit Expertise", "Custom Tool Integration"]
    },
    {
      title: "Community Portal",
      description: "A global marketplace for sharing open-source agents. Gain visibility, receive contributions, and collaborate with thousands of other builders in the ecosystem.",
      icon: "🤝",
      features: ["Peer Reviews", "Collaborative Forking", "Builder Analytics"]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We provide the infrastructure and expertise needed to build, scale, and manage the next generation of autonomous intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {offerings.map((service, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="text-5xl mb-6 bg-white/5 w-20 h-20 flex items-center justify-center rounded-2xl border border-white/5 group-hover:bg-indigo-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/5">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-indigo-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              Our professional consulting team can help you design and deploy specialized agentic systems tailored to your specific industry needs, leveraging expertise in LangChain, CrewAI, and beyond.
            </p>
            <button className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
