
import React from 'react';

export type LogoVariant = 'default' | 'orbital' | 'spark' | 'neural' | 'forge';

interface LogoProps {
  size?: number;
  variant?: LogoVariant;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 32, variant = 'default', showText = true }) => {
  const renderIcon = () => {
    switch (variant) {
      case 'orbital':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="group-hover:rotate-180 transition-transform duration-700">
            <circle cx="50" cy="50" r="40" stroke="url(#logo-grad)" strokeWidth="4" strokeDasharray="10 5" />
            <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="10" r="8" fill="#fb7185" className="animate-bounce" />
            <circle cx="50" cy="50" r="10" fill="white" />
          </svg>
        );
      case 'spark':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path d="M50 5L20 50H45L35 95L80 40H55L65 5H50Z" fill="url(#logo-grad)" className="group-hover:scale-110 transition-transform" />
            <path d="M50 20L40 40H55L45 70" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
      case 'neural':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="25" cy="25" r="8" fill="url(#logo-grad)" />
            <circle cx="75" cy="25" r="8" fill="url(#logo-grad)" />
            <circle cx="50" cy="75" r="8" fill="url(#logo-grad)" />
            <path d="M25 25L75 25L50 75L25 25" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="42" r="12" fill="white" className="animate-pulse" />
          </svg>
        );
      case 'forge':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path d="M10 80H90L80 30H20L10 80Z" fill="url(#logo-grad)" />
            <path d="M50 20V50" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <path d="M30 40C30 40 40 10 50 10C60 10 70 40 70 40" stroke="#fb7185" strokeWidth="4" />
          </svg>
        );
      default:
        return (
          <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            className="transform transition-transform group-hover:rotate-12"
          >
            <path d="M50 5L90 25V75L50 95L10 75V25L50 5Z" stroke="url(#logo-grad)" strokeWidth="8" />
            <path d="M50 30V70M30 50H70" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="50" r="10" fill="white" className="animate-pulse" />
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative">
        {renderIcon()}
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-white">
          Agentic<span className="text-indigo-400">Foundry</span>
        </span>
      )}
    </div>
  );
};

export default Logo;