import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import { Code, Smartphone, Cloud, Network, Brain, ServerCog, Calendar } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Dominion",
    description: "Forge responsive, lightning-fast websites that command attention and convert visitors into loyal subjects. Our web development services create digital territories that expand your empire's reach.",
    features: ["React & Next.js Mastery", "Performance Optimization", "SEO & Analytics", "Progressive Web Apps", "E-commerce Integration"],
    color: "gold" as const,
    pricing: "Starting at $5,000"
  },
  {
    icon: Smartphone,
    title: "Mobile Sovereignty",
    description: "Native and cross-platform applications that extend your empire to every device in the realm. Dominate mobile markets with apps that subjects can't resist.",
    features: ["React Native & Flutter", "App Store Optimization", "Push Notifications", "Offline Capabilities", "Analytics Integration"],
    color: "cyan" as const,
    pricing: "Starting at $8,000"
  },
  {
    icon: Cloud,
    title: "Cloud Citadel",
    description: "Scalable, secure cloud infrastructure that grows with your empire and withstands any siege. Your digital fortress built for the ages.",
    features: ["AWS & Azure Deployment", "Auto-scaling Solutions", "Security & Monitoring", "Disaster Recovery", "Performance Optimization"],
    color: "platinum" as const,
    pricing: "Starting at $3,000"
  },
  {
    icon: Network,
    title: "API Nexus",
    description: "Robust APIs that serve as the nervous system of your digital empire, connecting all territories with seamless data flow and communication.",
    features: ["GraphQL & REST", "Real-time Subscriptions", "Documentation & Testing", "Rate Limiting", "Authentication Systems"],
    color: "gold" as const,
    pricing: "Starting at $4,000"
  },
  {
    icon: Brain,
    title: "AI Oracle",
    description: "Harness the power of artificial intelligence to give your empire unparalleled insights and automation that predicts the future.",
    features: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics", "Computer Vision", "Automated Decision Making"],
    color: "cyan" as const,
    pricing: "Starting at $10,000"
  },
  {
    icon: ServerCog,
    title: "Imperial Pipeline",
    description: "Streamlined deployment pipelines that ensure your empire operates with clockwork precision and delivers updates at the speed of thought.",
    features: ["CI/CD Automation", "Container Orchestration", "Infrastructure as Code", "Monitoring & Alerting", "Security Scanning"],
    color: "platinum" as const,
    pricing: "Starting at $2,500"
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-monument font-bold gradient-text mb-6">
            Imperial Services
          </h1>
          <p className="text-xl md:text-2xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            We architect, engineer, and scale digital fortresses that endure. Each service designed to strengthen your empire's dominion over the digital realm.
          </p>
          <Button size="lg" className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold text-lg px-8 py-4 animate-pulse-glow">
            <Calendar className="mr-2" size={20} />
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.title} className="glassmorphism card-tilt hover:bg-imperial-gold/5 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${
                      service.color === 'gold' ? 'bg-imperial-gold/20' :
                      service.color === 'cyan' ? 'bg-imperial-cyan/20' :
                      'bg-imperial-platinum/20'
                    } rounded-full flex items-center justify-center mr-4`}>
                      <service.icon className={`${
                        service.color === 'gold' ? 'text-imperial-gold' :
                        service.color === 'cyan' ? 'text-imperial-cyan' :
                        'text-imperial-platinum'
                      } text-2xl`} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-monument font-bold text-imperial-platinum">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-semibold ${
                        service.color === 'gold' ? 'text-imperial-gold' :
                        service.color === 'cyan' ? 'text-imperial-cyan' :
                        'text-imperial-platinum'
                      }`}>
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-imperial-platinum/70 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-imperial-platinum/60">
                        <div className="w-2 h-2 bg-imperial-cyan rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-imperial-cyan text-imperial-midnight hover:bg-blue-400 font-semibold">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight to-blue-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              The Imperial Process
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Our battle-tested methodology ensures your empire rises efficiently and conquers completely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your realm and identify conquest opportunities" },
              { step: "02", title: "Strategy", desc: "Forge the perfect battle plan for digital domination" },
              { step: "03", title: "Execute", desc: "Deploy our imperial forces with precision and speed" },
              { step: "04", title: "Conquer", desc: "Establish your sovereignty and expand your empire" }
            ].map((phase, index) => (
              <Card key={phase.step} className="glassmorphism text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-orbitron font-bold text-imperial-gold mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-monument font-bold text-imperial-platinum mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-imperial-platinum/70">
                    {phase.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
