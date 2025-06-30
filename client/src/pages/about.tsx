import { Suspense, lazy } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Crown, Zap, Shield, Globe, Users } from "lucide-react";

const AboutTimeline = lazy(() => import("@/components/3d/about-timeline"));

const milestones = [
  {
    year: "2018",
    title: "Empire Founded",
    description: "DevEmpire was born from a vision to conquer digital complexity and establish technological sovereignty.",
    achievement: "First digital citadel established"
  },
  {
    year: "2019",
    title: "First Conquest",
    description: "Successfully deployed our first enterprise-scale application, serving 10,000+ users with zero downtime.",
    achievement: "10K+ users conquered"
  },
  {
    year: "2020",
    title: "Arsenal Expansion",
    description: "Launched EmpireKit toolkit and open-sourced our battle-tested development utilities.",
    achievement: "50+ tools forged"
  },
  {
    year: "2021",
    title: "Cloud Dominion",
    description: "Established cloud infrastructure mastery with multi-region deployments and auto-scaling capabilities.",
    achievement: "99.9% uptime achieved"
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Integrated artificial intelligence and machine learning into our imperial arsenal for predictive analytics.",
    achievement: "AI Oracle activated"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Extended our empire across continents, serving clients from Silicon Valley to Singapore.",
    achievement: "5 continents conquered"
  },
  {
    year: "2024",
    title: "Sovereignty Achieved",
    description: "Reached 400+ successful projects and established ourselves as digital sovereignty specialists.",
    achievement: "400+ empires forged"
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Pioneering the next generation of digital experiences with advanced 3D interfaces and quantum computing.",
    achievement: "Future being written..."
  }
];

const founders = [
  {
    name: "Alexandra Steele",
    title: "Emperor & Chief Architect",
    bio: "Visionary leader with 15+ years conquering complex technical challenges. Former Principal Engineer at Meta, architect of systems serving billions.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b417?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    specialties: ["System Architecture", "Leadership", "Strategy"],
    color: "gold"
  },
  {
    name: "Marcus Chen",
    title: "Chief Technology Officer",
    bio: "Full-stack virtuoso and performance optimization specialist. Ex-Google engineer with expertise in scalable cloud infrastructure.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    specialties: ["Cloud Architecture", "Performance", "DevOps"],
    color: "cyan"
  },
  {
    name: "Dr. Sarah Rodriguez",
    title: "Chief Innovation Officer",
    bio: "AI/ML pioneer and research scientist. PhD in Computer Science from Stanford, leading our charge into the future of intelligent systems.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    specialties: ["AI/ML", "Research", "Innovation"],
    color: "platinum"
  }
];

const values = [
  {
    icon: Crown,
    title: "Excellence",
    description: "We demand perfection in every line of code, every system design, and every client interaction."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Your digital empire's security is our sacred duty. We build fortresses, not glass houses."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed is sovereignty. Every microsecond matters in the battle for digital dominance."
  },
  {
    icon: Globe,
    title: "Scalability",
    description: "Build once, scale infinitely. Our systems grow with your empire's ambitions."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our victory. We fight alongside you in every digital conquest."
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-monument font-bold gradient-text mb-6">
            The Empire's Legacy
          </h1>
          <p className="text-xl md:text-2xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            From humble beginnings to digital sovereignty. Discover the story of how DevEmpire rose to conquer complexity and forge the future.
          </p>
          <Button size="lg" className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold text-lg px-8 py-4 animate-pulse-glow">
            <Calendar className="mr-2" size={20} />
            Schedule Audience
          </Button>
        </div>
      </section>

      {/* 3D Timeline Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Chronicle of Conquest
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Journey through time and witness the milestones that shaped our digital empire.
            </p>
          </div>
          
          {/* 3D Timeline Visualization */}
          <div className="h-96 mb-16">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-imperial-gold"></div>
              </div>
            }>
              <AboutTimeline />
            </Suspense>
          </div>
          
          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="glassmorphism card-tilt hover:bg-imperial-gold/5 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="text-3xl font-orbitron font-bold text-imperial-gold mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-monument font-bold text-imperial-platinum mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-imperial-platinum/70 text-sm mb-4">
                    {milestone.description}
                  </p>
                  <div className="text-xs text-imperial-cyan font-semibold">
                    {milestone.achievement}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight to-blue-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Imperial Council
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Meet the visionaries who lead our empire's conquest of digital complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={founder.name} className="glassmorphism card-tilt hover:bg-imperial-platinum/5 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={founder.avatar}
                      alt={`${founder.name} - ${founder.title}`}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-imperial-gold/20"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-imperial-gold/20 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-xl font-monument font-bold text-imperial-platinum mb-2">
                    {founder.name}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 ${
                    founder.color === 'gold' ? 'text-imperial-gold' :
                    founder.color === 'cyan' ? 'text-imperial-cyan' :
                    'text-imperial-platinum'
                  }`}>
                    {founder.title}
                  </p>
                  
                  <p className="text-imperial-platinum/70 text-sm mb-6">
                    {founder.bio}
                  </p>
                  
                  <div className="space-y-2">
                    {founder.specialties.map((specialty, idx) => (
                      <div key={idx} className="inline-block bg-imperial-cyan/10 text-imperial-cyan px-3 py-1 rounded-full text-xs mr-2">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Imperial Code of Conduct
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              The principles that guide every decision, every line of code, and every client relationship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.slice(0, 3).map((value, index) => (
              <Card key={value.title} className="glassmorphism card-tilt hover:bg-imperial-gold/5 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-imperial-gold/20 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="text-imperial-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-monument font-bold text-imperial-platinum mb-4">
                    {value.title}
                  </h3>
                  <p className="text-imperial-platinum/70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {values.slice(3, 5).map((value, index) => (
              <Card key={value.title} className="glassmorphism card-tilt hover:bg-imperial-cyan/5 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-imperial-cyan/20 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="text-imperial-cyan" size={32} />
                  </div>
                  <h3 className="text-xl font-monument font-bold text-imperial-platinum mb-4">
                    {value.title}
                  </h3>
                  <p className="text-imperial-platinum/70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "7", label: "Years of Conquest", suffix: "" },
              { value: "400", label: "Empires Forged", suffix: "+" },
              { value: "50", label: "Team Members", suffix: "+" },
              { value: "99.9", label: "Uptime Achieved", suffix: "%" }
            ].map((stat, index) => (
              <div key={stat.label} className="glassmorphism rounded-xl p-6">
                <div className="text-4xl font-orbitron font-bold text-imperial-gold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-imperial-platinum/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
