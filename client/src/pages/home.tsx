import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import ProductsSection from "@/components/sections/products-section";
import MetricsSection from "@/components/sections/metrics-section";
import ToolsSection from "@/components/sections/tools-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <MetricsSection />
      <ToolsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
