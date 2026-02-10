
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#020617] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Logo />
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            The world's first decentralized platform for building and sharing agentic AI. 
            Empowering everyone to automate the future.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-white">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/explorer" className="hover:text-indigo-400 cursor-pointer">Agent Explorer</Link></li>
            <li className="hover:text-indigo-400 cursor-pointer">SDK Documentation</li>
            <li><Link to="/leaderboard" className="hover:text-indigo-400 cursor-pointer">Leaderboard</Link></li>
            <li className="hover:text-indigo-400 cursor-pointer">Security</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-indigo-400 cursor-pointer">About Us</Link></li>
            <li><Link to="/brand" className="hover:text-indigo-400 cursor-pointer font-medium text-indigo-300">Brand Kit</Link></li>
            <li className="hover:text-indigo-400 cursor-pointer">Careers</li>
            <li className="hover:text-indigo-400 cursor-pointer">Legal</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Get the latest agents delivered to your inbox.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-r-lg text-sm font-bold">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-gray-500">
        <p>© 2024 AgenticFoundry Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;