import { useRef, useEffect } from 'react';

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    { year: "2020", color: "imperial-gold", description: "Founded DevEmpire" },
    { year: "2021", color: "imperial-cyan", description: "First Major Client" },
    { year: "2022", color: "imperial-platinum", description: "Team Expansion" },
    { year: "2023", color: "imperial-gold", description: "Global Reach" },
    { year: "2024", color: "imperial-cyan", description: "Innovation Awards" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.timeline-node');
    nodes.forEach((node, index) => {
      const element = node as HTMLElement;
      element.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-96 relative overflow-hidden flex items-center justify-center">
      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        {/* Timeline Path */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-imperial-gold/50 via-imperial-cyan/50 to-imperial-platinum/50 transform -translate-y-1/2 animate-pulse-glow"></div>
        
        {/* Timeline Nodes */}
        <div className="relative flex justify-between items-center">
          {timelineData.map((node, index) => (
            <div
              key={node.year}
              className="timeline-node relative flex flex-col items-center animate-float"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${3 + (index % 2)}s`
              }}
            >
              {/* Node Circle */}
              <div className={`w-12 h-12 rounded-full bg-${node.color} animate-glow relative z-10 flex items-center justify-center shadow-lg`}>
                <div className={`w-6 h-6 rounded-full bg-${node.color} opacity-80 animate-pulse`}></div>
              </div>
              
              {/* Year Label */}
              <div className={`mt-4 text-${node.color} font-bold text-lg animate-glow`}>
                {node.year}
              </div>
              
              {/* Description */}
              <div className="mt-2 text-xs text-imperial-platinum/80 text-center max-w-20">
                {node.description}
              </div>
              
              {/* Connecting Particles */}
              {index < timelineData.length - 1 && (
                <div className="absolute top-6 left-12 w-16 h-1 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-1 bg-${node.color} rounded-full animate-float opacity-60`}
                      style={{
                        left: `${i * 20}%`,
                        animationDelay: `${(index + i) * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-imperial-gold/10 via-imperial-cyan/5 to-transparent opacity-50 animate-pulse"></div>
      </div>
      
      {/* Floating Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-40 ${
              i % 3 === 0 ? 'bg-imperial-gold' : i % 3 === 1 ? 'bg-imperial-cyan' : 'bg-imperial-platinum'
            }`}
            style={{
              left: `${10 + (i * 5)}%`,
              top: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}