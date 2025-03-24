
import React, { useEffect, useRef } from 'react';

const CyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Call once to initialize
    resizeCanvas();
    
    // Update on resize
    window.addEventListener('resize', resizeCanvas);
    
    // Create binary nodes
    const binaryNodes: {x: number, y: number, value: string, opacity: number, size: number}[] = [];
    for (let i = 0; i < 100; i++) {
      binaryNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        value: Math.random() > 0.5 ? '1' : '0',
        opacity: 0.1 + Math.random() * 0.5,
        size: 8 + Math.random() * 12
      });
    }
    
    // Create circuit paths
    const circuitPaths: {startX: number, startY: number, endX: number, endY: number, progress: number, speed: number}[] = [];
    for (let i = 0; i < 15; i++) {
      circuitPaths.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        endX: Math.random() * canvas.width,
        endY: Math.random() * canvas.height,
        progress: 0,
        speed: 0.002 + Math.random() * 0.004
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(240, 245, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(120, 157, 245, 0.15)';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      const gridSize = 50;
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw circuit paths
      circuitPaths.forEach(path => {
        // Update progress
        path.progress += path.speed;
        if (path.progress >= 1) {
          path.progress = 0;
          path.startX = path.endX;
          path.startY = path.endY;
          path.endX = Math.random() * canvas.width;
          path.endY = Math.random() * canvas.height;
        }
        
        // Calculate current point
        const currentX = path.startX + (path.endX - path.startX) * path.progress;
        const currentY = path.startY + (path.endY - path.startY) * path.progress;
        
        // Draw line from start to current point
        ctx.beginPath();
        ctx.moveTo(path.startX, path.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = 'rgba(65, 88, 227, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw pulsing endpoint
        ctx.beginPath();
        const pulseSize = 6 + Math.sin(Date.now() * 0.005) * 2;
        ctx.arc(currentX, currentY, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(65, 88, 227, 0.8)';
        ctx.fill();
      });
      
      // Draw binary nodes
      binaryNodes.forEach(node => {
        // Slowly move nodes
        node.y -= 0.2;
        if (node.y < -20) {
          node.y = canvas.height + 20;
          node.x = Math.random() * canvas.width;
        }
        
        ctx.font = `${node.size}px monospace`;
        ctx.fillStyle = `rgba(65, 88, 227, ${node.opacity * (0.5 + Math.sin(Date.now() * 0.002) * 0.2)})`;
        ctx.fillText(node.value, node.x, node.y);
      });
      
      // Draw radar sweep effect
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);
      const radarAngle = (Date.now() * 0.0001) % (Math.PI * 2);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, radarAngle - 0.1, radarAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fillStyle = 'rgba(120, 157, 245, 0.15)';
      ctx.fill();
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 -z-30 pointer-events-none overflow-hidden" aria-hidden="true">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 0 10px rgba(120, 157, 245, 0.2))' }}
      />
    </div>
  );
};

export default CyberGrid;
