import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

const featuredPost = {
  id: 1,
  title: "Conquering Complexity: The Art of Scalable Architecture",
  excerpt: "Deep dive into the architectural patterns that power empire-scale applications. Learn how we design systems that grow from startup to enterprise.",
  content: "Building digital empires requires more than just code—it demands strategic thinking, architectural excellence, and a deep understanding of scalability patterns...",
  author: "Alexandra Steele",
  date: "2024-12-15",
  readTime: "12 min read",
  category: "Architecture",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
  tags: ["Architecture", "Scalability", "Best Practices"]
};

const blogPosts = [
  {
    id: 2,
    title: "The Future of 3D Web Development",
    excerpt: "Exploring how WebGL and Three.js are transforming user experiences across the digital realm.",
    author: "Marcus Chen",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["3D", "WebGL", "Three.js"]
  },
  {
    id: 3,
    title: "AI-Powered Development Workflows",
    excerpt: "How artificial intelligence is revolutionizing the way we write, test, and deploy code.",
    author: "Dr. Sarah Rodriguez",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["AI", "Automation", "Productivity"]
  },
  {
    id: 4,
    title: "Building Secure Cloud Citadels",
    excerpt: "Essential security practices for protecting your digital empire in the cloud era.",
    author: "Marcus Chen",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Security", "Cloud", "DevOps"]
  },
  {
    id: 5,
    title: "Performance Optimization: Empire Edition",
    excerpt: "Advanced techniques for achieving sub-second load times and lightning-fast user experiences.",
    author: "Alexandra Steele",
    date: "2024-11-20",
    readTime: "12 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Performance", "Optimization", "Web Vitals"]
  },
  {
    id: 6,
    title: "The DevEmpire Tech Stack Deep Dive",
    excerpt: "Inside look at the technologies and tools that power our digital sovereignty solutions.",
    author: "Dr. Sarah Rodriguez",
    date: "2024-11-15",
    readTime: "18 min read",
    category: "Tech Stack",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Technology", "Architecture", "Tools"]
  }
];

const categories = [
  "All",
  "Architecture", 
  "Frontend",
  "Backend",
  "AI/ML",
  "Security",
  "Performance",
  "DevOps"
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight via-slate-900 to-imperial-midnight"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-monument font-bold gradient-text mb-6">
            Imperial Chronicles
          </h1>
          <p className="text-xl md:text-2xl text-imperial-platinum/80 mb-8 max-w-3xl mx-auto">
            Insights, strategies, and battle-tested wisdom from the frontlines of digital conquest.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Card className="glassmorphism overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-imperial-midnight/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-imperial-gold text-imperial-midnight px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-imperial-cyan/20 text-imperial-cyan px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </div>
                  <div className="flex items-center text-imperial-platinum/60 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-imperial-platinum/60 text-sm">
                    <Clock size={14} className="mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h2 className="text-3xl font-monument font-bold text-imperial-platinum mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-imperial-platinum/70 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-imperial-gold/20 rounded-full flex items-center justify-center">
                      <User className="text-imperial-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-imperial-platinum text-sm">
                        {featuredPost.author}
                      </div>
                      <div className="text-imperial-platinum/60 text-xs">
                        Emperor & Chief Architect
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold">
                    Read Article
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 relative">
        <div className="absolute inset-0 bg-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-imperial-gold text-imperial-midnight hover:bg-yellow-400"
                  : "border-imperial-platinum/20 text-imperial-platinum/70 hover:bg-imperial-platinum/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-midnight to-blue-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="glassmorphism card-tilt hover:bg-imperial-gold/5 transition-all duration-500">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-imperial-cyan/20 backdrop-blur-sm text-imperial-cyan px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-xs text-imperial-platinum/60">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-monument font-bold text-imperial-platinum mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-imperial-platinum/70 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <div key={tag} className="flex items-center bg-imperial-platinum/10 text-imperial-platinum/60 px-2 py-1 rounded text-xs">
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-imperial-gold/20 rounded-full flex items-center justify-center">
                        <User className="text-imperial-gold" size={12} />
                      </div>
                      <span className="text-imperial-platinum/80 text-sm">
                        {post.author}
                      </span>
                    </div>
                    
                    <Button size="sm" variant="outline" className="border-imperial-cyan text-imperial-cyan hover:bg-imperial-cyan hover:text-imperial-midnight">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-imperial-midnight"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Card className="glassmorphism">
            <CardContent className="p-12">
              <h2 className="text-4xl font-monument font-bold gradient-text mb-6">
                Join the Imperial Newsletter
              </h2>
              <p className="text-xl text-imperial-platinum/80 mb-8">
                Receive exclusive insights, battle strategies, and early access to our latest conquests.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@empire.io"
                  className="flex-1 bg-imperial-midnight/50 border border-imperial-platinum/20 rounded-lg px-4 py-3 text-imperial-platinum focus:border-imperial-gold focus:outline-none"
                />
                <Button className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold px-8">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-imperial-platinum/60 text-sm mt-4">
                No spam, just imperial wisdom. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
