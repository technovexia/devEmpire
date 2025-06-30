import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  icon: string;
  stars: string;
  color: "gold" | "cyan" | "platinum";
  index: number;
}

export default function ToolCard({ 
  name, 
  description, 
  icon, 
  stars, 
  color, 
  index 
}: ToolCardProps) {
  const colorClasses = {
    gold: {
      bg: "hover:bg-imperial-gold/5",
      iconBg: "bg-imperial-gold/20",
      iconColor: "text-imperial-gold"
    },
    cyan: {
      bg: "hover:bg-imperial-cyan/5",
      iconBg: "bg-imperial-cyan/20",
      iconColor: "text-imperial-cyan"
    },
    platinum: {
      bg: "hover:bg-imperial-platinum/5",
      iconBg: "bg-imperial-platinum/20",
      iconColor: "text-imperial-platinum"
    }
  };

  const colors = colorClasses[color];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'react':
        return '⚛️';
      case 'database':
        return '🗃️';
      case 'cloud':
        return '☁️';
      default:
        return '🔧';
    }
  };

  return (
    <Card className={`glassmorphism card-tilt ${colors.bg} transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center text-xl`}>
              {getIconComponent(icon)}
            </div>
            <div>
              <h4 className="text-lg font-monument font-semibold text-imperial-platinum">
                {name}
              </h4>
              <p className="text-imperial-platinum/60 text-sm">
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Github className="text-imperial-platinum/60" size={16} />
            <span className="text-imperial-platinum/60 text-sm">
              {stars} ⭐
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
