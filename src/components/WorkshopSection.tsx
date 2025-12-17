import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Code2, Terminal, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Advanced Prompting",
    description: "Master Chain-of-Thought, Tree-of-Thought, and reflection-based prompting techniques.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Context Engineering",
    description: "Deep dive into coding agents, thinking models, and agentic AI development tools.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "IDE Mastery",
    description: "Master Cursor Rules, Claude Code skills, and AI-assisted development workflows.",
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Best Practices",
    description: "Learn patterns, anti-patterns, and real-world implementation strategies.",
  },
];

const testimonials = [
  {
    name: "Testimonial 1",
    role: "CTO, Company",
    quote: "Placeholder for testimonial from workshop attendee. Add real feedback here.",
  },
  {
    name: "Testimonial 2", 
    role: "Head of Engineering, Company",
    quote: "Placeholder for testimonial from workshop attendee. Add real feedback here.",
  },
  {
    name: "Testimonial 3",
    role: "Senior Developer, Company",
    quote: "Placeholder for testimonial from workshop attendee. Add real feedback here.",
  },
];

const WorkshopSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Workshop Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">80+ developers trained</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gen AI Workshops<br />for Developers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hands-on training for dev teams to boost AI-assisted coding adoption. 
              Learn enterprise-grade coding agents, advanced prompting, and modern AI workflows.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="gap-2" asChild>
              <a href="https://ai.asdcode.com/" target="_blank" rel="noopener noreferrer">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          {/* Right: Testimonials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">What People Say</h3>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
