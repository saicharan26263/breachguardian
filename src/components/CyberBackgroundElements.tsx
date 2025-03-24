
import React, { useEffect, useRef } from 'react';
import { Shield, Lock, Cpu, Database, Server, Network, Wifi, Cloud, WifiHigh } from 'lucide-react';

type BackgroundElement = {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  icon: React.ReactNode;
  speed: number;
  direction: number;
  blinkSpeed: number;
  color: string;
};

const colors = [
  'text-breach-400',
  'text-breach-500',
  'text-breach-600',
  'text-breach-700',
  'text-breach-300',
];

const CyberBackgroundElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const elementsRef = useRef<BackgroundElement[]>([]);
  
  useEffect(() => {
    // Create the initial elements
    const generateElements = () => {
      const elements: BackgroundElement[] = [];
      const icons = [
        <Shield />,
        <Lock />,
        <Cpu />,
        <Database />,
        <Server />,
        <Network />,
        <Wifi />,
        <Cloud />,
        <WifiHigh />
      ];
      
      for (let i = 0; i < 25; i++) {
        elements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0.8 + Math.random() * 1.8,
          rotation: Math.random() * 360,
          opacity: 0.4 + Math.random() * 0.6,
          icon: icons[i % icons.length],
          speed: 0.3 + Math.random() * 0.7,
          direction: Math.random() > 0.5 ? 1 : -1,
          blinkSpeed: 1 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      return elements;
    };
    
    elementsRef.current = generateElements();
    
    // Animation function
    const animate = () => {
      if (!containerRef.current) return;
      
      elementsRef.current = elementsRef.current.map(element => {
        // Move element - more dynamic movement
        let newY = element.y - element.speed * 0.1;
        let newX = element.x + (Math.sin(newY / 15) * 0.3 * element.direction);
        
        // Reset position if element goes off screen
        if (newY < -10) {
          newY = 110; // start from bottom
          newX = Math.random() * 100;
          element.rotation = Math.random() * 360;
        }
        
        // Slowly rotate the element
        const newRotation = (element.rotation + 0.15) % 360;
        
        // Pulsate opacity - more pronounced
        const opacityBase = 0.4 + Math.random() * 0.5;
        const opacityPulse = Math.sin(Date.now() / (900 * element.blinkSpeed)) * 0.2;
        
        return {
          ...element,
          y: newY,
          x: newX,
          rotation: newRotation,
          opacity: opacityBase + opacityPulse
        };
      });
      
      // Force re-render
      forceUpdate();
      
      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  // Force re-render function
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden -z-20 pointer-events-none"
      aria-hidden="true"
    >
      {elementsRef.current.map((element) => (
        <div
          key={element.id}
          className={`absolute transition-transform ${element.color}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `scale(${element.scale}) rotate(${element.rotation}deg)`,
            opacity: element.opacity,
            willChange: 'transform, opacity',
            filter: 'drop-shadow(0 0 10px rgba(84, 132, 255, 0.6))',
            transition: 'filter 0.8s ease-in-out'
          }}
        >
          <div className="w-12 h-12">
            {element.icon}
          </div>
        </div>
      ))}
      
      {/* Network connection lines - brighter and more visible */}
      <svg className="absolute inset-0 w-full h-full z-10 opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cfdafd" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#789df5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4158e3" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {elementsRef.current.slice(0, 15).map((element, index) => {
          // Connect to next 2-3 elements for more network connections
          const connections = [1, 2, 3];
          return connections.map(offset => {
            const nextElement = elementsRef.current[(index + offset) % elementsRef.current.length];
            // Only draw some connections to avoid overcrowding
            if (Math.random() > 0.3) {
              return (
                <line 
                  key={`line-${element.id}-${offset}`}
                  x1={`${element.x}%`} 
                  y1={`${element.y}%`} 
                  x2={`${nextElement.x}%`} 
                  y2={`${nextElement.y}%`} 
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  filter="url(#glow)"
                />
              );
            }
            return null;
          });
        })}
      </svg>
      
      {/* Digital packets moving along paths */}
      {elementsRef.current.slice(0, 10).map((element, index) => {
        const nextElement = elementsRef.current[(index + 1) % elementsRef.current.length];
        if (Math.random() > 0.5) {
          return (
            <div 
              key={`packet-${element.id}`}
              className="absolute w-2 h-2 rounded-full bg-breach-500"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                boxShadow: '0 0 8px 2px rgba(84, 132, 255, 0.8)',
                animation: `packet-move-${element.id} ${5 + Math.random() * 8}s linear infinite`
              }}
            >
              <style>
                {`
                @keyframes packet-move-${element.id} {
                  0% { transform: translate(0, 0); }
                  100% { transform: translate(${nextElement.x - element.x}vw, ${nextElement.y - element.y}vh); }
                }
                `}
              </style>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CyberBackgroundElements;
