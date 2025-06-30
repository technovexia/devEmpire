import { Suspense, lazy } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ContactWizard from "@/components/forms/contact-wizard";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const ContactMap = lazy(() => import("@/components/3d/contact-map"));

const contactInfo = [
  {
    icon: Mail,
    title: "Imperial Correspondence",
    value: "contact@devempire.io",
    description: "Send us your digital conquest plans",
    color: "gold"
  },
  {
    icon: Phone,
    title: "Royal Hotline",
    value: "+1 (555) EMPIRE-1",
    description: "Speak directly with our council",
    color: "cyan"
  },
  {
    icon: MapPin,
    title: "Imperial Citadel",
    value: "Silicon Valley, Digital Realm",
    description: "Visit our fortress of innovation",
    color: "platinum"
  },
  {
    icon: Clock,
    title: "Council Hours",
    value: "24/7 Imperial Time",
    description: "We never sleep, empires don't wait",
    color: "gold"
  }
];

const offices = [
  {
    location: "San Francisco HQ",
    address: "1 Hacker Way, San Francisco, CA 94301",
    hours: "Mon-Fri: 9AM-6PM PST",
    phone: "+1 (555) 123-4567"
  },
  {
    location: "New York Outpost",
    address: "Empire State Building, New York, NY 10001",
    hours: "Mon-Fri: 9AM-6PM EST",
    phone: "+1 (555) 234-5678"
  },
  {
    location: "London Embassy",
    address: "1 London Bridge, London, UK SE1 9GF",
    hours: "Mon-Fri: 9AM-6PM GMT",
    phone: "+44 20 7946 0958"
  }
];

const faqs = [
  {
    question: "How long does it take to establish digital sovereignty?",
    answer: "Most empires see initial results within 30-60 days, with full sovereignty achieved in 3-6 months depending on complexity and scope."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We master the full spectrum: React/Next.js, Node.js, Python, AWS/Azure, AI/ML, and cutting-edge 3D web technologies."
  },
  {
    question: "Do you work with existing development teams?",
    answer: "Absolutely. We can augment your forces, lead your armies, or train your developers in the ways of digital conquest."
  },
  {
    question: "What's included in your imperial support?",
    answer: "24/7 monitoring, security updates, performance optimization, and strategic guidance to ensure your empire thrives."
  }
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight via-blue-950 to-imperial-midnight"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-monument font-bold gradient-text mb-6">
            Establish Contact
          </h1>
          <p className="text-xl md:text-2xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            Begin your ascension. Our imperial council awaits your summons to discuss your digital conquest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form"
              className="inline-flex items-center justify-center bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 animate-pulse-glow"
            >
              <MessageSquare className="mr-2" size={20} />
              Send Message
            </a>
            <a 
              href="tel:+15553674731"
              className="inline-flex items-center justify-center border-2 border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Calendar className="mr-2" size={20} />
              Book Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactWizard />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-monument font-bold text-imperial-platinum mb-6">
                  Imperial Channels
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="glassmorphism hover:bg-imperial-gold/5 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${
                            info.color === 'gold' ? 'bg-imperial-gold/20' :
                            info.color === 'cyan' ? 'bg-imperial-cyan/20' :
                            'bg-imperial-platinum/20'
                          } rounded-lg flex items-center justify-center`}>
                            <info.icon className={`${
                              info.color === 'gold' ? 'text-imperial-gold' :
                              info.color === 'cyan' ? 'text-imperial-cyan' :
                              'text-imperial-platinum'
                            }`} size={24} />
                          </div>
                          <div>
                            <h4 className="text-lg font-monument font-semibold text-imperial-platinum">
                              {info.title}
                            </h4>
                            <p className={`font-semibold ${
                              info.color === 'gold' ? 'text-imperial-gold' :
                              info.color === 'cyan' ? 'text-imperial-cyan' :
                              'text-imperial-platinum'
                            }`}>
                              {info.value}
                            </p>
                            <p className="text-imperial-platinum/60 text-sm">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Map Placeholder */}
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <h4 className="text-lg font-monument font-bold text-imperial-platinum mb-4">
                    Empire Territories
                  </h4>
                  <div className="h-64 rounded-xl overflow-hidden">
                    <Suspense fallback={
                      <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-xl">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-imperial-gold"></div>
                      </div>
                    }>
                      <ContactMap />
                    </Suspense>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight to-blue-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Global Empire
            </h2>
            <p className="text-xl text-imperial-platinum/80 max-w-3xl mx-auto">
              Our influence spans continents. Visit any of our imperial outposts for face-to-face strategy sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={office.location} className="glassmorphism card-tilt hover:bg-imperial-cyan/5 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-monument font-bold text-imperial-platinum mb-4">
                    {office.location}
                  </h3>
                  <div className="space-y-3 text-imperial-platinum/70">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-imperial-cyan mt-1" size={16} />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-imperial-gold" size={16} />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-imperial-platinum" size={16} />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-monument font-bold gradient-text mb-6">
              Imperial FAQ
            </h2>
            <p className="text-xl text-imperial-platinum/80">
              Answers to the most common questions from aspiring digital sovereigns.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glassmorphism">
                <CardContent className="p-8">
                  <h3 className="text-lg font-monument font-semibold text-imperial-platinum mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-imperial-platinum/70">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
