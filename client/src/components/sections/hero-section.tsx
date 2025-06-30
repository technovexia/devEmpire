import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Compass, ChevronDown } from "lucide-react";

// Lazy load 3D component for performance
const HeroCitadel = lazy(() => import("@/components/3d/hero-citadel"));

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-3d overflow-hidden">
      {/* Star Field Background */}
      <div className="absolute inset-0 star-field opacity-30 animate-rotate-slow"></div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* 3D Citadel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Suspense fallback={
          <div className="w-96 h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-imperial-gold"></div>
          </div>
        }>
          <HeroCitadel />
        </Suspense>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-6xl md:text-8xl font-monument font-black mb-6 gradient-text animate-slide-up">
          Welcome to<br />DevEmpire
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-imperial-platinum/80 max-w-2xl mx-auto animate-slide-up" 
           style={{ animationDelay: '0.2s' }}>
          Where businesses ascend to digital sovereignty.
        </p>
        
        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" 
             style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold text-lg px-8 py-4 animate-pulse-glow imperial-cursor">
            <Calendar className="mr-2" size={20} />
            Book a Strategy Call
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight font-semibold text-lg px-8 py-4 imperial-cursor">
            <Compass className="mr-2" size={20} />
            Explore Empire
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-imperial-platinum/60" size={32} />
      </div>
    </section>
  );
}
