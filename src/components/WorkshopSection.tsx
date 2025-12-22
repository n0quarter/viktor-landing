import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Code2, Terminal, Users, ArrowRight } from "lucide-react";
import jensPhoto from "@/assets/jens.png";
import timPhoto from "@/assets/tim.png";
import julioPhoto from "@/assets/julio.jpeg";

const features = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Advanced Prompting Techniques",
    description: "Learn the difference between vibe coding (bad) and AI-assisted coding (good). Master Chain-of-Thought, Tree-of-Thought, and reflection-based prompting.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Context Engineering",
    description: "Master techniques for steering coding agents and thinking models. Deep dive into Claude Code, Cursor, GPT-5.1, Gemini, Sonnet 4.5, and cutting-edge agentic AI tools.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "IDE Mastery",
    description: "Master advanced Cursor Rules and Claude.md files, plus AI-assisted development in Claude Code/Cursor/JetBrains IDEs.",
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Best Practices & Anti-patterns",
    description: "Understand context engineering, guardrails for coding agents, and how to avoid common AI development pitfalls.",
  },
];

const testimonials = [
  {
    name: "Jens Naie",
    role: "CTO, Doodle AG",
    quote: "Viktor's generative AI workshop was a resounding success! He skillfully brought our team, with varying levels of experience, to a shared understanding, addressing common AI anxieties with clarity and practical advice...",
    image: jensPhoto,
  },
  {
    name: "Tim Yevgrashyn",
    role: "CTO, Stepico",
    quote: "The practical focus of this workshop was a game-changer for our development team. Instead of just discussing AI tools, our engineers actually learned how to implement them effectively in their day-to-day coding...",
    image: timPhoto,
  },
  {
    name: "Julio",
    role: "Head of Engineering, Empion",
    quote: "The workshop was very insightful and gave us valuable hands-on experience. While the first day covered some familiar ground, we found the deep dive into Cursor, prompt techniques, and best practices especially useful...",
    image: julioPhoto,
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
              <span className="text-sm font-medium text-primary">80+ developers trained across 4 workshops</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Author of Gen AI Workshop<br />for Developers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Master AI-assisted development with coding agents, advanced Cursor Rules, and Claude Code skills.
              Learn enterprise-grade setup, advanced prompting, and best practices for AI-powered workflows.
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
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
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
