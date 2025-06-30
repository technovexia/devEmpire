import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ui/tool-card";
import { Play, Download, Star, GitBranch } from "lucide-react";

const tools = [
  {
    name: "Empire Components",
    description: "React component library with imperial design system",
    icon: "react",
    stars: "2.5k",
    downloads: "15k/mo",
    color: "gold" as const,
    category: "Frontend"
  },
  {
    name: "DataForge CLI",
    description: "Database scaffolding and migration tool",
    icon: "database",
    stars: "1.8k",
    downloads: "8k/mo",
    color: "cyan" as const,
    category: "Backend"
  },
  {
    name: "CloudCitadel",
    description: "Infrastructure deployment and management",
    icon: "cloud",
    stars: "3.2k",
    downloads: "12k/mo",
    color: "platinum" as const,
    category: "DevOps"
  },
  {
    name: "API Guardian",
    description: "Authentication and authorization middleware",
    icon: "shield",
    stars: "1.9k",
    downloads: "6k/mo",
    color: "gold" as const,
    category: "Security"
  },
  {
    name: "MetricSpire",
    description: "Analytics and monitoring dashboard",
    icon: "chart",
    stars: "2.1k",
    downloads: "9k/mo",
    color: "cyan" as const,
    category: "Analytics"
  },
  {
    name: "EmpireTest",
    description: "End-to-end testing framework",
    icon: "test",
    stars: "1.6k",
    downloads: "7k/mo",
    color: "platinum" as const,
    category: "Testing"
  }
];

const codeExamples = {
  setup: `npm install @devempire/core
# or
yarn add @devempire/core`,
  
  basic: `import { DevEmpire } from '@devempire/core';

const empire = new DevEmpire({
  theme: 'imperial',
  power: 9000,
  sovereignty: true
});

// Conquer complexity with elegant code
empire.conquer('complexity')
  .then(result => {
    console.log('Empire established:', result);
  })
  .catch(err => {
    empire.adapt(err);
  });`,

  advanced: `// Scale your digital dominion
empire.scale({
  regions: ['web', 'mobile', 'cloud'],
  subjects: 10000,
  automated: true
});

// Deploy imperial forces
await empire.deploy({
  environment: 'production',
  replicas: 3,
  strategy: 'rolling-update'
});`
};

export default function Tools() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-monument font-bold gradient-text mb-6">
            Imperial Arsenal
          </h1>
          <p className="text-xl md:text-2xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            Arm your squad with precision-crafted utilities—open-sourced, battle-tested, and forged in the fires of production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold">
              <Download className="mr-2" size={20} />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight">
              <GitBranch className="mr-2" size={20} />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Live Code Demo */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Code Editor */}
            <Card className="glassmorphism">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-monument font-bold text-imperial-platinum">
                    Live Code Forge
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex space-x-4 mb-4">
                  {['Setup', 'Basic', 'Advanced'].map((tab, index) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        index === 1 
                          ? 'bg-imperial-gold text-imperial-midnight' 
                          : 'bg-imperial-platinum/10 text-imperial-platinum/70 hover:bg-imperial-platinum/20'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                {/* Code Display */}
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4 h-80">
                  <pre className="text-gray-300 whitespace-pre-wrap">
                    <code dangerouslySetInnerHTML={{ __html: 
                      codeExamples.basic
                        .replace(/\/\/ .*/g, '<span class="text-gray-500">$&</span>')
                        .replace(/import|export|const|let|var|function|class|from|new|await/g, '<span class="text-blue-400">$&</span>')
                        .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
                        .replace(/\b\d+\b/g, '<span class="text-orange-400">$&</span>')
                        .replace(/DevEmpire|empire/g, '<span class="text-yellow-400">$&</span>')
                    }} />
                  </pre>
                </div>
                
                <div className="flex space-x-3">
                  <Button className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold">
                    <Play className="mr-2" size={16} />
                    Execute
                  </Button>
                  <Button variant="outline" className="border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight">
                    Copy Code
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Output/Documentation */}
            <Card className="glassmorphism">
              <CardContent className="p-8">
                <h3 className="text-2xl font-monument font-bold text-imperial-platinum mb-6">
                  Console Output
                </h3>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6 h-80 overflow-y-auto">
                  <div className="text-green-400 mb-2">$ Empire established successfully</div>
                  <div className="text-blue-400 mb-2">🏰 Digital citadel initialized</div>
                  <div className="text-yellow-400 mb-2">⚡ Power level: 9000</div>
                  <div className="text-cyan-400 mb-2">🌐 Sovereignty claimed</div>
                  <div className="text-gray-400 mb-4">...</div>
                  <div className="text-green-400 mb-2">✅ All systems operational</div>
                  <div className="text-imperial-gold">👑 Your empire awaits your command</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-imperial-gold/10 rounded-lg">
                    <span className="text-imperial-platinum/80">Performance</span>
                    <span className="text-imperial-gold font-semibold">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-imperial-cyan/10 rounded-lg">
                    <span className="text-imperial-platinum/80">Memory Usage</span>
                    <span className="text-imperial-cyan font-semibold">42 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-imperial-platinum/10 rounded-lg">
                    <span className="text-imperial-platinum/80">Load Time</span>
                    <span className="text-imperial-platinum font-semibold">1.2s</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight to-blue-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Battle-Tested Arsenal
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Each tool forged in the fires of production, tested by thousands of developers across the empire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={tool.name} className="glassmorphism card-tilt hover:bg-imperial-gold/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${
                        tool.color === 'gold' ? 'bg-imperial-gold/20' :
                        tool.color === 'cyan' ? 'bg-imperial-cyan/20' :
                        'bg-imperial-platinum/20'
                      } rounded-lg flex items-center justify-center text-lg`}>
                        {tool.icon === 'react' ? '⚛️' :
                         tool.icon === 'database' ? '🗃️' :
                         tool.icon === 'cloud' ? '☁️' :
                         tool.icon === 'shield' ? '🛡️' :
                         tool.icon === 'chart' ? '📊' :
                         tool.icon === 'test' ? '🧪' : '🔧'}
                      </div>
                      <div>
                        <h4 className="font-monument font-semibold text-imperial-platinum">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-imperial-platinum/60">
                          {tool.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-imperial-platinum/60">
                      v2.1.0
                    </div>
                  </div>
                  
                  <p className="text-imperial-platinum/70 text-sm mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-imperial-platinum/60 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="text-imperial-gold" size={12} fill="currentColor" />
                      <span>{tool.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download size={12} />
                      <span>{tool.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-imperial-cyan text-imperial-midnight hover:bg-blue-400 text-xs">
                      Install
                    </Button>
                    <Button size="sm" variant="outline" className="border-imperial-platinum/20 text-imperial-platinum/70 hover:bg-imperial-platinum/10 text-xs">
                      Docs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
            Join the Empire
          </h2>
          <p className="text-xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            Become part of a thriving community of developers building the future. Contribute to our tools and help expand the empire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glassmorphism">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold text-imperial-gold mb-2">
                  50K+
                </div>
                <div className="text-imperial-platinum/70">
                  Active Developers
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold text-imperial-cyan mb-2">
                  200+
                </div>
                <div className="text-imperial-platinum/70">
                  Contributors
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold text-imperial-platinum mb-2">
                  1M+
                </div>
                <div className="text-imperial-platinum/70">
                  Downloads/Month
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold">
              Contribute on GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight">
              Join Discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
