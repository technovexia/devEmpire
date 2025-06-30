import { useRef, useEffect } from 'react';

export default function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const locations = [
    { name: "Silicon Valley", position: { x: 20, y: 30 }, color: "imperial-gold" },
    { name: "New York", position: { x: 70, y: 25 }, color: "imperial-cyan" },
    { name: "London", position: { x: 50, y: 20 }, color: "imperial-platinum" },
    { name: "Tokyo", position: { x: 85, y: 35 }, color: "imperial-gold" },
    { name: "Berlin", position: { x: 52, y: 22 }, color: "imperial-cyan" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const markers = container.querySelectorAll('.location-marker');
    markers.forEach((marker, index) => {
      const element = marker as HTMLElement;
      element.style.animationDelay = `${index * 0.4}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-96 relative overflow-hidden bg-gradient-to-b from-imperial-midnight/50 to-transparent rounded-lg">
      {/* World Map Grid */}
      <div className="absolute inset-0">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-imperial-cyan/30"
              style={{ left: `${(i + 1) * 12.5}%` }}
            ></div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-imperial-cyan/30"
              style={{ top: `${(i + 1) * 16.67}%` }}
            ></div>
          ))}
        </div>
        
        {/* Continents Outline */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 60">
            {/* Simplified world map paths */}
            <path
              d="M15,25 Q20,20 25,25 Q30,30 35,25 Q40,20 45,25"
              stroke="currentColor"
              fill="none"
              strokeWidth="0.5"
              className="text-imperial-platinum/50"
            />
            <path
              d="M50,20 Q55,15 60,20 Q65,25 70,20 Q75,15 80,20"
              stroke="currentColor"
              fill="none"
              strokeWidth="0.5"
              className="text-imperial-platinum/50"
            />
          </svg>
        </div>
      </div>

      {/* Location Markers */}
      {locations.map((location, index) => (
        <div key={location.name} className="absolute">
          <div
            className="location-marker relative animate-float"
            style={{
              left: `${location.position.x}%`,
              top: `${location.position.y}%`,
              animationDelay: `${index * 0.4}s`,
              animationDuration: `${3 + (index % 2)}s`
            }}
          >
            {/* Marker Pin */}
            <div className={`w-6 h-6 rounded-full bg-${location.color} animate-glow relative z-10 flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2`}>
              <div className={`w-3 h-3 rounded-full bg-${location.color} opacity-80 animate-pulse`}></div>
            </div>
            
            {/* Location Label */}
            <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 text-xs text-${location.color} font-medium whitespace-nowrap animate-glow`}>
              {location.name}
            </div>
            
            {/* Radiating Circles */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-${location.color}/30 rounded-full animate-ping`}></div>
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-${location.color}/50 rounded-full animate-ping`}
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>
        </div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {locations.map((location, index) => {
          if (index === locations.length - 1) return null;
          const nextLocation = locations[index + 1];
          return (
            <line
              key={`connection-${index}`}
              x1={`${location.position.x}%`}
              y1={`${location.position.y}%`}
              x2={`${nextLocation.position.x}%`}
              y2={`${nextLocation.position.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          );
        })}
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5b400" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#1dc2ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e6e6e6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data Flow Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-50 ${
              i % 3 === 0 ? 'bg-imperial-gold' : i % 3 === 1 ? 'bg-imperial-cyan' : 'bg-imperial-platinum'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-imperial-gold/5 via-transparent to-imperial-cyan/5 opacity-60"></div>
    </div>
  );
}