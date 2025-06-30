import ToolCard from "@/components/ui/tool-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const tools = [
  {
    name: "Empire Components",
    description: "React component library",
    icon: "react",
    stars: "2.5k",
    color: "gold"
  },
  {
    name: "DataForge CLI",
    description: "Database scaffolding tool",
    icon: "database",
    stars: "1.8k",
    color: "cyan"
  },
  {
    name: "CloudCitadel",
    description: "Infrastructure deployment",
    icon: "cloud",
    stars: "3.2k",
    color: "platinum"
  }
];

export default function ToolsSection() {
  const codeExample = `// DevEmpire Core Implementation
import { DevEmpire } from '@devempire/core';

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
  });

// Scale your digital dominion
empire.scale({
  regions: ['web', 'mobile', 'cloud'],
  subjects: 10000,
  automated: true
});`;

  return (
    <section id="tools" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-monument font-bold gradient-text mb-6">
            Imperial Arsenal
          </h2>
          <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
            Arm your squad with precision-crafted utilities—open-sourced, battle-tested.
          </p>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Code Playground */}
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
              
              {/* Code Editor */}
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  <code dangerouslySetInnerHTML={{ __html: 
                    codeExample
                      .replace(/\/\/ .*/g, '<span class="text-gray-500">$&</span>')
                      .replace(/import|export|const|let|var|function|class|from|new/g, '<span class="text-blue-400">$&</span>')
                      .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
                      .replace(/\b\d+\b/g, '<span class="text-orange-400">$&</span>')
                      .replace(/DevEmpire|empire/g, '<span class="text-yellow-400">$&</span>')
                  }} />
                </pre>
              </div>
              
              <Button className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold imperial-cursor">
                <Play className="mr-2" size={16} />
                Execute
              </Button>
            </CardContent>
          </Card>
          
          {/* Tools List */}
          <div className="space-y-6">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} {...tool} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
