import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  color: "gold" | "cyan" | "platinum";
  index: number;
}

export default function MetricCard({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  color, 
  index 
}: MetricCardProps) {
  const colorClasses = {
    gold: {
      iconBg: "bg-imperial-gold/20",
      iconColor: "text-imperial-gold",
      textColor: "text-imperial-gold"
    },
    cyan: {
      iconBg: "bg-imperial-cyan/20",
      iconColor: "text-imperial-cyan",
      textColor: "text-imperial-cyan"
    },
    platinum: {
      iconBg: "bg-imperial-platinum/20",
      iconColor: "text-imperial-platinum",
      textColor: "text-imperial-platinum"
    }
  };

  const colors = colorClasses[color];
  const formattedValue = value >= 10000 ? `${Math.floor(value / 1000)}K` : value.toString();

  return (
    <Card className="glassmorphism animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-8">
        <div className={`w-16 h-16 mx-auto ${colors.iconBg} rounded-full flex items-center justify-center mb-4`}>
          <Icon className={`${colors.iconColor} text-2xl`} size={24} />
        </div>
        <div className={`text-4xl font-orbitron font-bold ${colors.textColor} mb-2`}>
          {formattedValue}{suffix}
        </div>
        <div className="text-imperial-platinum/70">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}
