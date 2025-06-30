import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: "gold" | "cyan" | "platinum";
  index: number;
}

export default function ProductCard({ 
  name, 
  description, 
  price, 
  image, 
  color, 
  index 
}: ProductCardProps) {
  const colorClasses = {
    gold: "hover:bg-imperial-gold/10",
    cyan: "hover:bg-imperial-cyan/10",
    platinum: "hover:bg-imperial-platinum/10"
  };

  return (
    <Card className={`group glassmorphism card-tilt ${colorClasses[color]} transition-all duration-500`}>
      <CardContent className="p-6">
        <img 
          src={image} 
          alt={name}
          className="rounded-xl w-full h-48 object-cover mb-6"
          loading="lazy"
        />
        <h4 className="text-xl font-monument font-bold text-imperial-platinum mb-3">
          {name}
        </h4>
        <p className="text-imperial-platinum/70 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-orbitron font-bold text-imperial-gold">
            ${price}
          </span>
          <Button className="bg-imperial-cyan text-imperial-midnight hover:bg-blue-400 font-semibold imperial-cursor">
            View Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
