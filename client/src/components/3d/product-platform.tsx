import { useRef, useEffect } from 'react';

export default function ProductPlatform() {
  const containerRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: "EmpireKit Pro", color: "imperial-gold", position: 0 },
    { name: "EmpireKit Business", color: "imperial-cyan", position: 120 },
    { name: "EmpireKit Enterprise", color: "imperial-platinum", position: 240 },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const platforms = container.querySelectorAll('.product-platform');
    platforms.forEach((platform, index) => {
      const element = platform as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-96 relative overflow-hidden flex items-center justify-center">
      {/* Central Rotating Platform */}
      <div className="relative w-80 h-80">
        {/* Platform Base */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-imperial-gold/20 via-imperial-cyan/20 to-imperial-platinum/20 animate-spin-slow">
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-imperial-midnight/50 to-imperial-midnight/30 backdrop-blur-sm"></div>
        </div>

        {/* Product Platforms */}
        {products.map((product, index) => (
          <div
            key={product.name}
            className="product-platform absolute"
            style={{
              transform: `rotate(${product.position}deg) translateX(120px) rotate(-${product.position}deg)`,
              left: '50%',
              top: '50%',
              marginLeft: '-40px',
              marginTop: '-40px',
            }}
          >
            {/* Product Pedestal */}
            <div className={`w-20 h-20 rounded-full bg-gradient-to-t from-${product.color}/60 to-${product.color}/30 animate-float relative`}>
              {/* Product Icon */}
              <div className={`absolute inset-4 rounded-full bg-${product.color} animate-glow flex items-center justify-center`}>
                <div className={`w-6 h-6 rounded bg-${product.color}/80 animate-pulse`}></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full bg-${product.color} animate-float opacity-60`}
                    style={{
                      left: `${20 + (i * 20)}%`,
                      top: `${10 + (i * 25)}%`,
                      animationDelay: `${(index + i) * 0.3}s`,
                      animationDuration: `${2 + (i % 2)}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Product Label */}
            <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-${product.color} font-medium whitespace-nowrap animate-glow`}>
              {product.name}
            </div>
          </div>
        ))}

        {/* Central Core */}
        <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-imperial-gold to-imperial-cyan animate-pulse-glow">
          <div className="absolute inset-2 rounded-full bg-imperial-midnight/80 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-imperial-gold animate-glow"></div>
          </div>
        </div>

        {/* Orbital Rings */}
        <div className="absolute inset-8 rounded-full border border-imperial-gold/20 animate-spin-slow"></div>
        <div className="absolute inset-12 rounded-full border border-imperial-cyan/20 animate-spin-reverse"></div>
        <div className="absolute inset-16 rounded-full border border-imperial-platinum/20 animate-spin-slow"></div>
      </div>

      {/* Background Energy Field */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float opacity-30 ${
              i % 3 === 0 ? 'bg-imperial-gold' : i % 3 === 1 ? 'bg-imperial-cyan' : 'bg-imperial-platinum'
            }`}
            style={{
              left: `${15 + (i * 6)}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-imperial-gold/10 via-imperial-cyan/5 to-transparent opacity-70 animate-pulse"></div>
    </div>
  );
}