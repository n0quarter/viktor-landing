import { Mail, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="py-12 border-b border-border">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Viktor Shcherban
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Hands-on AI Architect & Developer
        </p>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
          18 years of experience. Expert in designing Agentic systems, RAG pipelines, and scalable architecture. 
          Proven track record of taking complex AI products from concept to production (0 to 1). 
          Former CTO with deep experience mentoring engineering teams and driving technical strategy.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-foreground">
          <a href="mailto:megaletterbox@gmail.com" className="flex items-center gap-2 hover:text-primary">
            <Mail className="w-4 h-4" />
            megaletterbox@gmail.com
          </a>
          <a href="tel:+4915754278950" className="flex items-center gap-2 hover:text-primary">
            <Phone className="w-4 h-4" />
            +49 15754278950
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Berlin, Germany
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
