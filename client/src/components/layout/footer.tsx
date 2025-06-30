import { Link } from "wouter";
import { Crown, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Dominion",
    "Mobile Sovereignty", 
    "Cloud Citadel",
    "API Nexus",
    "AI Oracle"
  ];

  const resources = [
    "Documentation",
    "API Reference",
    "Tutorials",
    "Community",
    "Support"
  ];

  return (
    <footer className="relative py-16">
      <div className="absolute inset-0 star-field opacity-20 animate-rotate-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-imperial-midnight to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-imperial-gold rounded-lg flex items-center justify-center">
                <Crown className="text-imperial-midnight" size={24} />
              </div>
              <span className="text-2xl font-monument font-bold text-imperial-platinum">
                DevEmpire
              </span>
            </Link>
            <p className="text-imperial-platinum/70 mb-6 max-w-md">
              We forge code that conquers complexity. Building digital empires that stand the test of time and scale.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/devempire" 
                className="w-10 h-10 bg-imperial-gold/20 rounded-lg flex items-center justify-center hover:bg-imperial-gold/40 transition-colors duration-300 imperial-cursor"
                aria-label="GitHub"
              >
                <Github className="text-imperial-gold" size={20} />
              </a>
              <a 
                href="https://twitter.com/devempire" 
                className="w-10 h-10 bg-imperial-cyan/20 rounded-lg flex items-center justify-center hover:bg-imperial-cyan/40 transition-colors duration-300 imperial-cursor"
                aria-label="Twitter"
              >
                <Twitter className="text-imperial-cyan" size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/devempire" 
                className="w-10 h-10 bg-imperial-platinum/20 rounded-lg flex items-center justify-center hover:bg-imperial-platinum/40 transition-colors duration-300 imperial-cursor"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-imperial-platinum" size={20} />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-monument font-bold text-imperial-platinum mb-4">
              Imperial Services
            </h4>
            <ul className="space-y-2 text-imperial-platinum/70">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="hover:text-imperial-gold transition-colors duration-300 imperial-cursor"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-monument font-bold text-imperial-platinum mb-4">
              Imperial Resources
            </h4>
            <ul className="space-y-2 text-imperial-platinum/70">
              {resources.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="hover:text-imperial-cyan transition-colors duration-300 imperial-cursor"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-imperial-platinum/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-imperial-platinum/60 text-sm">
              © {currentYear} DevEmpire. All rights reserved. Forged with ⚡ and imperial gold.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-imperial-platinum/60 hover:text-imperial-platinum text-sm transition-colors duration-300 imperial-cursor"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-imperial-platinum/60 hover:text-imperial-platinum text-sm transition-colors duration-300 imperial-cursor"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-imperial-platinum/60 hover:text-imperial-platinum text-sm transition-colors duration-300 imperial-cursor"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
