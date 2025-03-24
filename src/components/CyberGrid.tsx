
import React from 'react';

const CyberGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-30 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-breach-100/50 to-transparent"></div>
      
      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute h-px bg-breach-300/20 w-full"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>
      
      {/* Vertical lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute w-px bg-breach-300/20 h-full"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>
      
      {/* Glowing nodes at intersections */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => 
          Array.from({ length: 15 }).map((_, j) => (
            <div 
              key={`node-${i}-${j}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-breach-500/50 animate-pulse-slow"
              style={{ 
                left: `${(j + 1) * 7}%`, 
                top: `${(i + 1) * 7}%`,
                animationDelay: `${(i * 15 + j) * 0.1}s`
              }}
            />
          ))
        )}
      </div>
      
      {/* Digital circuit paths */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,50 Q25,25 50,50 T100,50" 
            stroke="currentColor" 
            className="text-breach-500"
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M0,70 Q40,20 80,80 T100,60" 
            stroke="currentColor"
            className="text-breach-400" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M50,0 Q70,30 30,60 T50,100" 
            stroke="currentColor" 
            className="text-breach-600"
            strokeWidth="1" 
            fill="none"
          />
          
          {/* Additional network paths */}
          <path 
            d="M20,0 Q40,40 60,20 T100,30" 
            stroke="currentColor" 
            className="text-breach-300"
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M0,30 Q30,60 60,40 T100,80" 
            stroke="currentColor" 
            className="text-breach-700"
            strokeWidth="1" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Network data pulse effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`pulse-h-${i}`}
            className="absolute h-0.5 bg-breach-400/40 left-0 w-full animate-pulse-slow"
            style={{ 
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.6}s`,
              boxShadow: '0 0 10px 2px rgba(120, 157, 245, 0.3)'
            }}
          />
        ))}
        
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`pulse-v-${i}`}
            className="absolute w-0.5 bg-breach-500/40 top-0 h-full animate-pulse-slow"
            style={{ 
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.8}s`,
              boxShadow: '0 0 10px 2px rgba(120, 157, 245, 0.3)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberGrid;
