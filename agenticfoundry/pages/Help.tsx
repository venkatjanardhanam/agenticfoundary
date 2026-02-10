
import React from 'react';

const Help: React.FC = () => {
  const faqs = [
    { q: "Is AgenticFoundry really free?", a: "Yes! All agents listed on our main ecosystem are free to download and use locally. We believe in the democratized future of AI." },
    { q: "How do I start building?", a: "Check out our SDK documentation. You can build agents in Python or TypeScript using our standardized interfaces." },
    { q: "What is an Agentic AI?", a: "Unlike static chat bots, agentic AI can take actions, use tools, and follow multi-step reasoning to achieve specific goals autonomously." },
    { q: "Can I monetize my agents?", a: "Currently, our platform is focused on open-source contributions. A marketplace for premium enterprise agents is coming in 2025." }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Help Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">Documentation</h3>
            <p className="text-gray-400 text-sm">Everything you need to know about building and deploying agents.</p>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">Community Forum</h3>
            <p className="text-gray-400 text-sm">Ask questions and share your creations with fellow builders.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;