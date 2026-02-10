
import React from 'react';
import { MOCK_CONTRIBUTORS } from '../constants';

const Leaderboard: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Hall of <span className="text-gradient">Founders</span></h1>
          <p className="text-gray-400">Celebrating the pioneers building the most impactful agents in the ecosystem.</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 font-bold text-gray-300">Rank</th>
                  <th className="px-6 py-4 font-bold text-gray-300">Contributor</th>
                  <th className="px-6 py-4 font-bold text-gray-300">Agents Built</th>
                  <th className="px-6 py-4 font-bold text-gray-300">Total Downloads</th>
                  <th className="px-6 py-4 font-bold text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_CONTRIBUTORS.sort((a, b) => b.totalDownloads - a.totalDownloads).map((user, idx) => (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-6">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        idx === 0 ? 'bg-yellow-500 text-black' : 
                        idx === 1 ? 'bg-gray-300 text-black' : 
                        idx === 2 ? 'bg-orange-400 text-black' : 
                        'text-gray-500'
                      }`}>
                        {idx + 1}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <img src={user.avatar} className="w-10 h-10 rounded-full border border-white/10" alt={user.username} />
                        <span className="font-bold group-hover:text-indigo-400 transition-colors">{user.username}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 font-medium">{user.agentsBuilt}</td>
                    <td className="px-6 py-6 font-medium">{user.totalDownloads.toLocaleString()}</td>
                    <td className="px-6 py-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        idx === 0 ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-gray-400'
                      }`}>
                        {idx === 0 ? 'Grandmaster' : 'Builder'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all">
            Join the Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
