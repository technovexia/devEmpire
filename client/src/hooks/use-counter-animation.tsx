import { useState, useCallback } from "react";

export function useCounterAnimation(targetValues: number[], duration = 2000) {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    new Array(targetValues.length).fill(0)
  );

  const startAnimation = useCallback(() => {
    const startTime = Date.now();
    const startValues = [...animatedValues];

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const newValues = targetValues.map((target, index) => {
        const start = startValues[index];
        return Math.floor(start + (target - start) * easeOut);
      });
      
      setAnimatedValues(newValues);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [targetValues, animatedValues, duration]);

  return { startAnimation, animatedValues };
}
