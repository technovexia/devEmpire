import { useRef, useEffect } from 'react';

export default function HeroCitadel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Simple CSS animation for now - can be enhanced with Three.js later
    const towers = container.querySelectorAll('.tower');
    towers.forEach((tower, index) => {
      const element = tower as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-96 relative overflow-hidden flex items-center justify-center">
      {/* Animated CSS Citadel - Placeholder for Three.js */}
      <div className="relative z-10">
        {/* Central Tower */}
        <div className="tower absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-32 bg-gradient-to-t from-imperial-gold/60 to-imperial-gold/30 rounded-t-lg animate-float">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-8 bg-imperial-gold rounded-full animate-glow"></div>
        </div>
        
        {/* Side Towers */}
        <div className="tower absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-24 bg-gradient-to-t from-imperial-cyan/60 to-imperial-cyan/30 rounded-t-lg animate-float">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-6 bg-imperial-cyan rounded-full animate-glow"></div>
        </div>
        
        <div className="tower absolute right-1/3 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-24 bg-gradient-to-t from-imperial-platinum/60 to-imperial-platinum/30 rounded-t-lg animate-float">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-6 bg-imperial-platinum rounded-full animate-glow"></div>
        </div>
        
        {/* Background Towers */}
        <div className="tower absolute left-1/4 top-3/4 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-t from-imperial-gold/40 to-imperial-gold/20 rounded-t-lg animate-float opacity-70"></div>
        <div className="tower absolute right-1/4 top-3/4 transform translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-t from-imperial-cyan/40 to-imperial-cyan/20 rounded-t-lg animate-float opacity-70"></div>
        
        {/* Base Platform */}
        <div className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 w-24 h-4 bg-gradient-to-r from-imperial-gold/30 via-imperial-cyan/30 to-imperial-platinum/30 rounded-full animate-pulse-glow"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-imperial-gold rounded-full animate-float opacity-60"
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-imperial-gold/10 via-transparent to-transparent opacity-50"></div>
    </div>
  );
}
