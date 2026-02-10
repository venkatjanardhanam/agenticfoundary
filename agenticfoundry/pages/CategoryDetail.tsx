
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_AGENTS } from '../constants';
import { Category, Agent } from '../types';
import AgentCard from '../components/AgentCard';

type SortOption = 'popular' | 'newest' | 'rated';

const CategoryDetail: React.FC = () => {
  const { catName } = useParams<{ catName: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [minRating, setMinRating] = useState<number>(0);
  const [minDownloads, setMinDownloads] = useState<number>(0);
  
  const formattedCategory = Object.values(Category).find(
    c => c.toLowerCase() === catName?.toLowerCase()
  ) || Category.PRODUCTIVITY;

  const processedAgents = useMemo(() => {
    // 1. Filter by category
    let filtered = MOCK_AGENTS.filter(
      a => a.category.toLowerCase() === catName?.toLowerCase()
    );

    // 2. Apply property filters
    filtered = filtered.filter(a => a.rating >= minRating);
    filtered = filtered.filter(a => a.downloads >= minDownloads);

    // 3. Apply sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'popular') return b.downloads - a.downloads;
      if (sortBy === 'rated') return b.rating - a.rating;
      if (sortBy === 'newest') return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      return 0;
    });
  }, [catName, sortBy, minRating, minDownloads]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-medium mb-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Categories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{formattedCategory} Agents</h1>
            <p className="text-gray-400 max-w-2xl">
              Specialized autonomous agents designed to solve complex challenges in the {formattedCategory.toLowerCase()} sector.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="glass p-6 rounded-2xl border border-white/10 mb-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="glass bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-sm focus:outline-none focus:border-indigo-500 w-full md:w-48 appearance-none"
            >
              <option value="popular">Most Downloads</option>
              <option value="newest">Release Date</option>
              <option value="rated">Highest Rated</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Min Rating</label>
            <div className="flex items-center gap-3">
              {[0, 3, 4, 4.5].map((val) => (
                <button
                  key={val}
                  onClick={() => setMinRating(val)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    minRating === val 
                      ? 'bg-indigo-600 border-indigo-500 text-white' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  {val === 0 ? 'Any' : `${val}+ ★`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Min Downloads</label>
            <select 
              value={minDownloads}
              onChange={(e) => setMinDownloads(Number(e.target.value))}
              className="glass bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-sm focus:outline-none focus:border-indigo-500 w-full md:w-40 appearance-none"
            >
              <option value={0}>Any amount</option>
              <option value={1000}>1k+</option>
              <option value={5000}>5k+</option>
              <option value={10000}>10k+</option>
              <option value={20000}>20k+</option>
            </select>
          </div>

          <div className="md:ml-auto self-end">
            <p className="text-sm text-gray-500">
              Showing <span className="text-white font-bold">{processedAgents.length}</span> agents
            </p>
          </div>
        </div>

        {processedAgents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedAgents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-3xl border border-white/10">
            <div className="text-5xl mb-6 text-gray-600">📭</div>
            <h3 className="text-2xl font-bold mb-2">No agents match your filters</h3>
            <p className="text-gray-500 mb-8">Try adjusting your filters or search criteria.</p>
            <button 
              onClick={() => { setMinRating(0); setMinDownloads(0); setSortBy('popular'); }}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
