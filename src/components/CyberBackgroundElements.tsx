
import React, { useEffect, useRef } from 'react';
import { Shield, Lock, Cpu, Database, Server } from 'lucide-react';

type BackgroundElement = {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  icon: React.ReactNode;
  speed: number;
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
        <Shield className="text-breach-600/30" />,
        <Lock className="text-breach-500/30" />,
        <Cpu className="text-breach-400/30" />,
        <Database className="text-breach-700/30" />,
        <Server className="text-breach-800/30" />
      ];
      
      for (let i = 0; i < 15; i++) {
        elements.push({
          id: i,
          x: Math.random() * 100, // percentage of screen width
          y: Math.random() * 100, // percentage of screen height
          scale: 0.5 + Math.random() * 2.5,
          rotation: Math.random() * 360,
          opacity: 0.1 + Math.random() * 0.3,
          icon: icons[i % icons.length],
          speed: 0.2 + Math.random() * 0.5
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
        
        // Reset position if element goes off screen
        if (newY < -10) {
          newY = 110; // start from bottom
          element.x = Math.random() * 100;
          element.rotation = Math.random() * 360;
        }
        
        // Slowly rotate the element
        const newRotation = (element.rotation + 0.05) % 360;
        
        return {
          ...element,
          y: newY,
          rotation: newRotation
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
          }}
        >
          <div className="w-12 h-12">
            {element.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CyberBackgroundElements;
