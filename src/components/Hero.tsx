import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              AI Architect &<br />
              <span className="text-primary">Full-Stack Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              18 years of experience building software. Expert in designing Agentic systems, 
              RAG pipelines, and scalable architecture. Taking complex AI products from concept 
              to production (0→1). Former CTO with deep experience mentoring teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:megaletterbox@gmail.com">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-accent rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Currently based in</span>
                  <span className="text-foreground font-medium">Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <span className="text-foreground font-medium">18+ years</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Focus</span>
                  <span className="text-foreground font-medium">AI & GenAI Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <span className="text-foreground font-medium">Open to projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
