
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Category, Agent } from '../types';
import { MOCK_AGENTS } from '../constants';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const categories = Object.values(Category);

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : MOCK_AGENTS.filter(agent => 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        agent.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        if (!isMenuOpen) setShowSearchResults(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleResultClick = (agent: Agent) => {
    setSearchQuery('');
    setShowSearchResults(false);
    setIsMenuOpen(false);
    navigate(`/agent/${agent.id}`);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const SearchResultsDropdown = ({ results, onSelect }: { results: Agent[], onSelect: (agent: Agent) => void }) => (
    <div className="absolute top-full left-0 right-0 mt-2 glass border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[100]">
      {results.length > 0 ? (
        <div className="py-2">
          <div className="px-4 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Agents Found</div>
          {results.map(agent => (
            <button
              key={agent.id}
              onClick={() => onSelect(agent)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 text-left transition-colors group"
            >
              <span className="text-xl bg-indigo-500/10 w-8 h-8 flex items-center justify-center rounded-lg border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                {agent.icon}
              </span>
              <div className="overflow-hidden">
                <div className="text-sm font-bold text-white truncate group-hover:text-indigo-400 transition-colors">{agent.name}</div>
                <div className="text-xs text-gray-500 truncate">{agent.description}</div>
              </div>
            </button>
          ))}
          <div className="px-4 py-2 border-t border-white/5 mt-1 bg-white/[0.02]">
             <Link to="/explorer" onClick={() => setShowSearchResults(false)} className="text-xs text-indigo-400 font-medium hover:underline">
               View all agents
             </Link>
          </div>
        </div>
      ) : (
        <div className="px-4 py-8 text-center text-sm text-gray-500">
          No agents matching "<span className="text-gray-300">{searchQuery}</span>"
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0" onClick={() => setIsMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Search */}
        <div className="hidden lg:flex flex-1 max-w-sm mx-8 relative" ref={searchRef}>
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Search agents..."
              value={searchQuery}
              onFocus={() => setShowSearchResults(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
            />
          </div>

          {showSearchResults && searchQuery.trim() !== '' && (
            <SearchResultsDropdown results={filteredResults} onSelect={handleResultClick} />
          )}
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link>
          <Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
          
          <div className="relative group">
            <button 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="flex items-center hover:text-indigo-400 transition-colors"
            >
              Use Cases
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute top-full -left-4 w-48 py-2 mt-2 glass border border-white/10 rounded-lg shadow-xl"
              >
                {categories.map((cat) => (
                  <Link 
                    key={cat} 
                    to={`/category/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-white/5 hover:text-indigo-400 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/leaderboard" className="hover:text-indigo-400 transition-colors">Leaderboard</Link>
          <Link to="/help" className="hover:text-indigo-400 transition-colors">Help</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 shrink-0">
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1 pl-3 bg-white/5 border border-white/10 rounded-full hover:border-indigo-500/50 transition-all"
              >
                <span className="text-xs font-bold text-gray-300">@{user.username}</span>
                <img src={user.avatar} className="w-8 h-8 rounded-full border border-indigo-500/20" alt={user.username} />
              </button>
              {isUserMenuOpen && (
                <div className="absolute top-full right-0 w-48 py-2 mt-2 glass border border-white/10 rounded-xl shadow-xl animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-white/5 mb-1">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest truncate">{user.email}</p>
                  </div>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors rounded-b-xl">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-sm font-medium hover:text-white transition-colors text-gray-400">
                Sign In
              </Link>
              <Link to="/register" className="px-5 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all shadow-lg shadow-indigo-500/20">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 flex flex-col p-6 space-y-6 animate-in slide-in-from-top duration-300 max-h-[90vh] overflow-y-auto">
          {/* Mobile Search Input */}
          <div className="relative" ref={mobileSearchRef}>
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Search agents..."
                value={searchQuery}
                onFocus={() => setShowSearchResults(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
              />
            </div>
            {showSearchResults && searchQuery.trim() !== '' && (
              <SearchResultsDropdown results={filteredResults} onSelect={handleResultClick} />
            )}
          </div>

          <div className="flex flex-col space-y-4 font-medium">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">About</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Services</Link>
            <div className="pl-4 space-y-2 border-l border-white/10">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Categories</p>
              {categories.map(cat => (
                <Link key={cat} to={`/category/${cat.toLowerCase()}`} className="block text-gray-300 hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>{cat}</Link>
              ))}
            </div>
            <Link to="/leaderboard" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Leaderboard</Link>
            <Link to="/help" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Help</Link>
          </div>

          {!user ? (
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-4 glass border border-white/10 rounded-xl text-center font-bold">Sign In</Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)} className="w-full py-4 bg-indigo-600 rounded-xl text-center font-bold shadow-lg shadow-indigo-600/20">Sign Up</Link>
            </div>
          ) : (
            <div className="pt-4 border-t border-white/5 space-y-4">
               <div className="flex items-center gap-3 px-2">
                 <img src={user.avatar} className="w-10 h-10 rounded-full border border-indigo-500/20" alt={user.username} />
                 <div>
                   <p className="font-bold text-white text-sm">@{user.username}</p>
                   <p className="text-xs text-gray-500">{user.email}</p>
                 </div>
               </div>
               <button onClick={handleLogout} className="w-full py-4 text-red-400 border border-red-500/20 rounded-xl font-bold hover:bg-red-500/5 transition-colors">Sign Out</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
