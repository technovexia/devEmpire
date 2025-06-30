import { Suspense, lazy } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { Crown, Zap, Shield, Rocket } from "lucide-react";

const ProductPlatform = lazy(() => import("@/components/3d/product-platform"));

const products = [
  {
    id: 1,
    name: "Analytics Throne",
    description: "Real-time insights into your empire's performance with advanced metrics, predictive modeling, and comprehensive business intelligence that reveals the true power of your domain.",
    price: 99,
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "gold" as const
  },
  {
    id: 2,
    name: "Commerce Crown",
    description: "Complete e-commerce solution with inventory management, payment processing, customer analytics, and automated workflows that transform visitors into loyal subjects.",
    price: 199,
    features: ["E-commerce Platform", "Payment Processing", "Inventory Management", "Customer Analytics"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "cyan" as const
  },
  {
    id: 3,
    name: "Loyalty Scepter",
    description: "Advanced CRM system to manage your subjects and build lasting relationships with automated workflows, personalized campaigns, and empire-wide communication tools.",
    price: 149,
    features: ["CRM System", "Automated Workflows", "Email Campaigns", "Customer Segmentation"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "platinum" as const
  }
];

const tiers = [
  {
    name: "Citizen",
    price: 49,
    description: "Perfect for emerging empires",
    features: ["Basic Analytics", "Up to 1,000 users", "Email Support", "Core Integrations"],
    icon: Shield,
    popular: false
  },
  {
    name: "Noble",
    price: 149,
    description: "Ideal for growing dominions",
    features: ["Advanced Analytics", "Up to 10,000 users", "Priority Support", "All Integrations", "Custom Workflows"],
    icon: Crown,
    popular: true
  },
  {
    name: "Emperor",
    price: 399,
    description: "For vast digital empires",
    features: ["Enterprise Analytics", "Unlimited users", "24/7 Support", "Custom Development", "Dedicated Account Manager"],
    icon: Rocket,
    popular: false
  }
];

export default function Products() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-imperial-midnight via-blue-950 to-imperial-midnight"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-monument font-bold gradient-text mb-6">
            EmpireKit Products
          </h1>
          <p className="text-xl md:text-2xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            EmpireKit — the modular SaaS core powering 400+ ventures. Build your digital sovereignty with battle-tested tools.
          </p>
        </div>
      </section>

      {/* Featured Product Platform */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-96 h-96 mx-auto relative">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-imperial-gold"></div>
              </div>
            }>
              <ProductPlatform />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Imperial Arsenal
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Specialized tools forged for digital conquest. Each product designed to strengthen a different aspect of your empire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={product.id} className="glassmorphism card-tilt hover:bg-imperial-gold/5 transition-all duration-500">
                <CardContent className="p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="rounded-xl w-full h-48 object-cover mb-6"
                    loading="lazy"
                  />
                  <h4 className="text-xl font-monument font-bold text-imperial-platinum mb-3">
                    {product.name}
                  </h4>
                  <p className="text-imperial-platinum/70 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-imperial-platinum/60">
                        <Zap className="mr-2 text-imperial-cyan" size={12} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-orbitron font-bold text-imperial-gold">
                      ${product.price}/mo
                    </span>
                    <Button className="bg-imperial-cyan text-imperial-midnight hover:bg-blue-400 font-semibold">
                      Start Trial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight to-blue-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Choose Your Throne
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Select the tier that matches your empire's ambitions. All plans include core features and imperial support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card key={tier.name} className={`relative glassmorphism card-tilt transition-all duration-500 ${
                tier.popular ? 'ring-2 ring-imperial-gold animate-pulse-glow' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-imperial-gold text-imperial-midnight px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-imperial-gold/20 rounded-full flex items-center justify-center mb-4">
                    <tier.icon className="text-imperial-gold" size={32} />
                  </div>
                  <h3 className="text-2xl font-monument font-bold text-imperial-platinum mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-imperial-platinum/70 mb-6">
                    {tier.description}
                  </p>
                  <div className="text-4xl font-orbitron font-bold text-imperial-gold mb-6">
                    ${tier.price}<span className="text-lg text-imperial-platinum/60">/mo</span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-imperial-platinum/70">
                        <Zap className="mr-2 text-imperial-cyan" size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full font-semibold ${
                    tier.popular 
                      ? 'bg-imperial-gold text-imperial-midnight hover:bg-yellow-400' 
                      : 'bg-imperial-cyan text-imperial-midnight hover:bg-blue-400'
                  }`}>
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
