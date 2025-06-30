import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Marcus Chen",
    title: "CEO, TechNova",
    content: "DevEmpire transformed our digital presence completely. Their 3D interfaces and performance optimization increased our conversion rate by 340%.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    color: "gold"
  },
  {
    name: "Sarah Rodriguez",
    title: "Founder, EcoVenture",
    content: "The EmpireKit platform scaled with us from startup to 100K users. Their cloud architecture is absolutely bulletproof.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b417?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    color: "cyan"
  },
  {
    name: "David Park",
    title: "CTO, FinanceFlow",
    content: "Their API architecture is a work of art. Clean, performant, and incredibly well-documented. Worth every gold coin.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    color: "platinum"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-monument font-bold gradient-text mb-6">
            Royal Testimonials
          </h2>
          <p className="text-xl text-imperial-platinum/80">
            Hear from the rulers whose empires we've helped forge.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
