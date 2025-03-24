
import React from 'react';

const CyberGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-30 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-breach-50/20 to-transparent"></div>
      
      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute h-px bg-breach-200/10 w-full"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>
      
      {/* Vertical lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute w-px bg-breach-200/10 h-full"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>
      
      {/* Glowing nodes at intersections */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => 
          Array.from({ length: 10 }).map((_, j) => (
            <div 
              key={`node-${i}-${j}`}
              className="absolute w-1 h-1 rounded-full bg-breach-400/20 animate-pulse-slow"
              style={{ 
                left: `${(j + 1) * 10}%`, 
                top: `${(i + 1) * 10}%`,
                animationDelay: `${(i * 10 + j) * 0.1}s`
              }}
            />
          ))
        )}
      </div>
      
      {/* Digital circuit paths */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,50 Q25,25 50,50 T100,50" 
            stroke="currentColor" 
            className="text-breach-400"
            strokeWidth="0.5" 
            fill="none"
          />
          <path 
            d="M0,70 Q40,20 80,80 T100,60" 
            stroke="currentColor"
            className="text-breach-600" 
            strokeWidth="0.5" 
            fill="none"
          />
          <path 
            d="M50,0 Q70,30 30,60 T50,100" 
            stroke="currentColor" 
            className="text-breach-500"
            strokeWidth="0.5" 
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default CyberGrid;
