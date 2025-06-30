import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Scroll } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-imperial-midnight via-blue-950 to-imperial-midnight"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Card className="glassmorphism">
          <CardContent className="p-12">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Ready to Ascend with DevEmpire?
            </h2>
            <p className="text-xl text-imperial-platinum/80 mb-8">
              Join the ranks of digital sovereigns. Let us forge your path to technological supremacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold text-lg px-8 py-4 animate-pulse-glow imperial-cursor">
                <Crown className="mr-2" size={20} />
                Claim Your Throne
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight font-semibold text-lg px-8 py-4 imperial-cursor">
                <Scroll className="mr-2" size={20} />
                View Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
