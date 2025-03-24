
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
};

const CyberBackgroundElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const elementsRef = useRef<BackgroundElement[]>([]);
  
  useEffect(() => {
    // Create the initial elements
    const generateElements = () => {
      const elements: BackgroundElement[] = [];
      const icons = [
        <Shield className="text-breach-500/70" />,
        <Lock className="text-breach-400/70" />,
        <Cpu className="text-breach-600/70" />,
        <Database className="text-breach-500/70" />,
        <Server className="text-breach-400/70" />,
        <Network className="text-breach-700/70" />,
        <Wifi className="text-breach-500/70" />,
        <Cloud className="text-breach-600/70" />,
        <WifiHigh className="text-breach-400/70" />
      ];
      
      for (let i = 0; i < 25; i++) {
        elements.push({
          id: i,
          x: Math.random() * 100, // percentage of screen width
          y: Math.random() * 100, // percentage of screen height
          scale: 0.6 + Math.random() * 2.2,
          rotation: Math.random() * 360,
          opacity: 0.2 + Math.random() * 0.6,
          icon: icons[i % icons.length],
          speed: 0.3 + Math.random() * 0.5,
          direction: Math.random() > 0.5 ? 1 : -1,
          blinkSpeed: 1 + Math.random() * 3
        });
      }
      
      return elements;
    };
    
    elementsRef.current = generateElements();
    
    // Animation function
    const animate = () => {
      if (!containerRef.current) return;
      
      elementsRef.current = elementsRef.current.map(element => {
        // Move element
        let newY = element.y - element.speed * 0.1;
        let newX = element.x + (Math.sin(newY / 20) * 0.2 * element.direction);
        
        // Reset position if element goes off screen
        if (newY < -10) {
          newY = 110; // start from bottom
          newX = Math.random() * 100;
          element.rotation = Math.random() * 360;
        }
        
        // Slowly rotate the element
        const newRotation = (element.rotation + 0.1) % 360;
        
        // Pulsate opacity
        const opacityBase = 0.2 + Math.random() * 0.6;
        const opacityPulse = Math.sin(Date.now() / (1000 * element.blinkSpeed)) * 0.1;
        
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
          className="absolute transition-transform"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `scale(${element.scale}) rotate(${element.rotation}deg)`,
            opacity: element.opacity,
            willChange: 'transform, opacity',
            filter: 'drop-shadow(0 0 8px rgba(120, 157, 245, 0.5))',
            transition: 'filter 0.5s ease-in-out'
          }}
        >
          <div className="w-12 h-12">
            {element.icon}
          </div>
        </div>
      ))}
      
      {/* Network connection lines */}
      <svg className="absolute inset-0 w-full h-full z-10 opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cfdafd" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#789df5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4158e3" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {elementsRef.current.slice(0, 10).map((element, index) => {
          const nextElement = elementsRef.current[(index + 1) % elementsRef.current.length];
          return (
            <line 
              key={`line-${element.id}`}
              x1={`${element.x}%`} 
              y1={`${element.y}%`} 
              x2={`${nextElement.x}%`} 
              y2={`${nextElement.y}%`} 
              stroke="url(#lineGradient)"
              strokeWidth="1"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CyberBackgroundElements;
