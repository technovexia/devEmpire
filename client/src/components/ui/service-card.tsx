import { LucideIcon, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "gold" | "cyan" | "platinum";
  index: number;
  className?: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color, 
  index,
  className 
}: ServiceCardProps) {
  const colorClasses = {
    gold: {
      bg: "group-hover:bg-imperial-gold/10",
      iconBg: "bg-imperial-gold/20",
      iconColor: "text-imperial-gold",
      glow: "group-hover:animate-pulse-glow"
    },
    cyan: {
      bg: "group-hover:bg-imperial-cyan/10",
      iconBg: "bg-imperial-cyan/20",
      iconColor: "text-imperial-cyan",
      glow: "group-hover:animate-glow"
    },
    platinum: {
      bg: "group-hover:bg-imperial-platinum/10",
      iconBg: "bg-imperial-platinum/20",
      iconColor: "text-imperial-platinum",
      glow: "group-hover:animate-float"
    }
  };

  const colors = colorClasses[color];

  return (
    <Card className={`group glassmorphism card-tilt hover:${colors.bg} transition-all duration-500 ${className}`}>
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className={`w-20 h-20 mx-auto ${colors.iconBg} rounded-full flex items-center justify-center mb-4 ${colors.glow}`}>
            <Icon className={`${colors.iconColor} text-3xl`} size={32} />
          </div>
          <h3 className="text-2xl font-monument font-bold text-imperial-platinum mb-4">
            {title}
          </h3>
          <p className="text-imperial-platinum/70">
            {description}
          </p>
        </div>
        
        <div className="space-y-2 text-sm text-imperial-platinum/60">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <CheckCircle 
                className={`mr-2 ${color === 'gold' ? 'text-imperial-cyan' : 'text-imperial-gold'}`} 
                size={16} 
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
