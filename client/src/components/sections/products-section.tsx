import { Suspense, lazy } from "react";
import ProductCard from "@/components/ui/product-card";

// Lazy load 3D component
const ProductPlatform = lazy(() => import("@/components/3d/product-platform"));

const products = [
  {
    id: 1,
    name: "Analytics Throne",
    description: "Real-time insights into your empire's performance with advanced metrics and predictive modeling.",
    price: 99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "gold"
  },
  {
    id: 2,
    name: "Commerce Crown",
    description: "Complete e-commerce solution with inventory management, payment processing, and customer analytics.",
    price: 199,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "cyan"
  },
  {
    id: 3,
    name: "Loyalty Scepter",
    description: "Advanced CRM system to manage your subjects and build lasting relationships with automated workflows.",
    price: 149,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "platinum"
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-imperial-midnight via-blue-950 to-imperial-midnight"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-monument font-bold gradient-text mb-6">
            EmpireKit Products
          </h2>
          <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
            EmpireKit — the modular SaaS core powering 400+ ventures.
          </p>
        </div>
        
        {/* Featured Product Platform */}
        <div className="relative mb-16">
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
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
