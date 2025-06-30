import { useEffect, useRef } from "react";
import MetricCard from "@/components/ui/metric-card";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { Layers, GitBranch, Users, Star } from "lucide-react";

const metrics = [
  {
    icon: Layers,
    value: 400,
    suffix: "+",
    label: "Projects Conquered",
    color: "gold"
  },
  {
    icon: GitBranch,
    value: 50,
    suffix: "+",
    label: "APIs Forged",
    color: "cyan"
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Empire Citizens",
    color: "platinum"
  },
  {
    icon: Star,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    color: "gold"
  }
];

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { startAnimation, animatedValues } = useCounterAnimation(
    metrics.map(m => m.value)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-imperial-midnight"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              value={animatedValues[index] || 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
