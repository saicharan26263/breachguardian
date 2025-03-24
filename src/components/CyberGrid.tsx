
import React from 'react';

const CyberGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-30 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-breach-50/80 via-background to-background"></div>
      
      {/* Horizontal lines with brighter colors */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute h-px bg-breach-400/30 w-full"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>
      
      {/* Vertical lines with brighter colors */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute w-px bg-breach-400/30 h-full"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>
      
      {/* Larger, brighter nodes at major intersections */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => 
          Array.from({ length: 8 }).map((_, j) => (
            <div 
              key={`node-${i}-${j}`}
              className="absolute rounded-full bg-breach-400 cyber-glow animate-pulse-slow"
              style={{ 
                left: `${(j + 1) * 12.5}%`, 
                top: `${(i + 1) * 12.5}%`,
                width: Math.random() > 0.7 ? '8px' : '4px',
                height: Math.random() > 0.7 ? '8px' : '4px',
                animationDelay: `${(i * 8 + j) * 0.2}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))
        )}
      </div>
      
      {/* Digital circuit paths - more dynamic and brighter */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,50 Q25,25 50,50 T100,50" 
            stroke="currentColor" 
            className="text-breach-400 data-path"
            strokeWidth="1.5" 
            fill="none"
          />
          <path 
            d="M0,30 Q40,80 80,40 T100,70" 
            stroke="currentColor"
            className="text-breach-500 data-path" 
            strokeWidth="1.5" 
            fill="none"
          />
          <path 
            d="M50,0 Q80,30 30,70 T40,100" 
            stroke="currentColor" 
            className="text-breach-600 data-path"
            strokeWidth="1.5" 
            fill="none"
          />
          <path 
            d="M20,0 Q40,40 60,20 T100,30" 
            stroke="currentColor" 
            className="text-breach-500 data-path"
            strokeWidth="1.5" 
            fill="none"
          />
          <path 
            d="M0,80 Q30,60 70,70 T100,40" 
            stroke="currentColor" 
            className="text-breach-400 data-path"
            strokeWidth="1.5" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Hexagonal pattern - cybersecurity-themed */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="50" height="87" patternUnits="userSpaceOnUse">
            <polygon 
              fill="none" 
              stroke="currentColor" 
              className="text-breach-500"
              strokeWidth="0.8" 
              points="25,0 50,15 50,45 25,60 0,45 0,15 25,0"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      {/* Network data flow pulses - brighter and more noticeable */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`pulse-h-${i}`}
            className="absolute h-0.5 bg-breach-400/60 left-0 w-full"
            style={{ 
              top: `${15 + i * 17}%`,
              animation: `data-flow ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.8}s`,
              boxShadow: '0 0 10px 3px rgba(120, 157, 245, 0.4)'
            }}
          />
        ))}
        
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`pulse-v-${i}`}
            className="absolute w-0.5 bg-breach-500/60 top-0 h-full"
            style={{ 
              left: `${15 + i * 17}%`,
              animation: `data-flow ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.2}s`,
              boxShadow: '0 0 10px 3px rgba(120, 157, 245, 0.4)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberGrid;
