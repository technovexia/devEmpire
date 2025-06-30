import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  avatar: string;
  color: "gold" | "cyan" | "platinum";
  index: number;
}

export default function TestimonialCard({ 
  name, 
  title, 
  content, 
  avatar, 
  color, 
  index 
}: TestimonialCardProps) {
  const colorClasses = {
    gold: "text-imperial-gold",
    cyan: "text-imperial-cyan",
    platinum: "text-imperial-platinum"
  };

  return (
    <Card className="glassmorphism card-tilt hover:animate-glow transition-all duration-500">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <img 
            src={avatar} 
            alt={`${name} avatar`}
            className="w-16 h-16 rounded-full object-cover mr-4"
            loading="lazy"
          />
          <div>
            <h4 className="text-lg font-monument font-semibold text-imperial-platinum">
              {name}
            </h4>
            <p className={`text-sm ${colorClasses[color]}`}>
              {title}
            </p>
          </div>
        </div>
        
        <p className="text-imperial-platinum/80 mb-4">
          "{content}"
        </p>
        
        <div className="flex text-imperial-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
