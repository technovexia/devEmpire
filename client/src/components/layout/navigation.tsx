import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Crown, Menu, Calendar, Compass } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-imperial-midnight/95 backdrop-blur-lg border-b border-imperial-platinum/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 imperial-cursor">
            <div className="w-10 h-10 bg-imperial-gold rounded-lg flex items-center justify-center">
              <Crown className="text-imperial-midnight" size={20} />
            </div>
            <span className="text-xl font-monument font-bold text-imperial-platinum">
              DevEmpire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`imperial-cursor transition-colors duration-300 ${
                  location === item.href 
                    ? 'text-imperial-gold' 
                    : 'text-imperial-platinum hover:text-imperial-cyan'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold animate-pulse-glow imperial-cursor">
              <Calendar className="mr-2" size={16} />
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-imperial-platinum">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-imperial-midnight border-imperial-platinum/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className={`text-lg imperial-cursor transition-colors duration-300 ${
                      location === item.href 
                        ? 'text-imperial-gold' 
                        : 'text-imperial-platinum hover:text-imperial-cyan'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-imperial-platinum/20">
                  <Button className="w-full bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold">
                    <Calendar className="mr-2" size={16} />
                    Book Strategy Call
                  </Button>
                  <Button variant="outline" className="w-full mt-3 border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight">
                    <Compass className="mr-2" size={16} />
                    Explore Empire
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
