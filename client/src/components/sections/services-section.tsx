import { useEffect, useRef } from "react";
import ServiceCard from "@/components/ui/service-card";
import { Code, Smartphone, Cloud, Network, Brain, ServerCog } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Dominion",
    description: "Forge responsive, lightning-fast websites that command attention and convert visitors into loyal subjects.",
    features: ["React & Next.js Mastery", "Performance Optimization", "SEO & Analytics"],
    color: "gold"
  },
  {
    icon: Smartphone,
    title: "Mobile Sovereignty",
    description: "Native and cross-platform applications that extend your empire to every device in the realm.",
    features: ["React Native & Flutter", "App Store Optimization", "Push Notifications"],
    color: "cyan"
  },
  {
    icon: Cloud,
    title: "Cloud Citadel",
    description: "Scalable, secure cloud infrastructure that grows with your empire and withstands any siege.",
    features: ["AWS & Azure Deployment", "Auto-scaling Solutions", "Security & Monitoring"],
    color: "platinum"
  },
  {
    icon: Network,
    title: "API Nexus",
    description: "Robust APIs that serve as the nervous system of your digital empire, connecting all territories.",
    features: ["GraphQL & REST", "Real-time Subscriptions", "Documentation & Testing"],
    color: "gold"
  },
  {
    icon: Brain,
    title: "AI Oracle",
    description: "Harness the power of artificial intelligence to give your empire unparalleled insights and automation.",
    features: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics"],
    color: "cyan"
  },
  {
    icon: ServerCog,
    title: "Imperial Pipeline",
    description: "Streamlined deployment pipelines that ensure your empire operates with clockwork precision.",
    features: ["CI/CD Automation", "Container Orchestration", "Infrastructure as Code"],
    color: "platinum"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-monument font-bold gradient-text mb-6">
            Imperial Services
          </h2>
          <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
            We architect, engineer, and scale digital fortresses that endure.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              className="service-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
