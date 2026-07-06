import jensPhoto from "@/assets/jens.png";
import julioPhoto from "@/assets/julio.jpeg";
import lucaPhoto from "@/assets/luca.jpeg";
import timPhoto from "@/assets/tim.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  ChevronUp,
  Code2,
  Linkedin,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Coding Agents/IDE",
    description:
      "Hands-on coding with Claude Code, Codex CLI, Cursor Agent. AI-assisted coding in JetBrains IDEs. TDD and Spec-driven development workflows",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI Landscape & Advanced Prompting",
    description:
      "Vibe coding (bad) vs AI-assisted coding (good). Understanding LLM architecture -> Advanced Prompting",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Context Engineering",
    description:
      "Techniques for steering coding agents and reasoning models. Creating custom AI tools for coding (hands-on)",
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Best Practices & Anti-patterns",
    description:
      "Understand LLM limitations, hallucinations, and how to avoid common AI development pitfalls.",
  },
];

const testimonials = [
  {
    name: "Luca Criscuolo",
    linkedin: "https://www.linkedin.com/in/lucacriscuolo/",
    role: "CPO, Bettermile",
    quote:
      "Viktor ran an AI workshop for technical and non-technical people at Bettermile, guiding our large and diverse group through building their first prototypes with Claude. He stayed calm and adaptable when things didn't go as planned, maintained positive energy, and received very good participant feedback. Deep expertise and a great person, Viktor is a highly recommended coach.",
    image: lucaPhoto,
  },
  {
    name: "Jens Naie",
    linkedin: "https://www.linkedin.com/in/jens-naie/",
    role: "CTO, Doodle AG",
    quote:
      "Viktor's generative AI workshop was a resounding success! He skillfully brought our team, with varying levels of experience, to a shared understanding, addressing common AI anxieties with clarity and practical advice...",
    image: jensPhoto,
  },
  {
    name: "Tim Yevgrashyn",
    linkedin: "https://www.linkedin.com/in/yevgrashyn/",
    role: "CTO, Stepico",
    quote:
      "The practical focus of this workshop was a game-changer for our development team. Instead of just discussing AI tools, our engineers actually learned how to implement them effectively in their day-to-day coding...",
    image: timPhoto,
  },
  {
    name: "Julio",
    linkedin: "https://www.linkedin.com/in/jcfausto/",
    role: "Head of Engineering, Empion",
    quote:
      "The workshop was very insightful and gave us valuable hands-on experience. While the first day covered some familiar ground, we found the deep dive into Cursor, prompt techniques, and best practices especially useful...",
    image: julioPhoto,
  },
];

const WorkshopSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section id="workshops" className="py-20 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Workshop Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                100+ developers trained across 6 workshops
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Author of Gen AI Workshop
              <br />
              for Developers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Teaching developers AI-assisted coding with agents (Cursor, Claude Code) and IDEs.
              Hands-on practice: Enterprise-grade setup, custom tools, context engineering, and best
              practices.
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
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                    <div>
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                        aria-label={`${testimonial.name} on LinkedIn`}
                      >
                        {testimonial.name}
                        <Linkedin className="h-3.5 w-3.5 text-primary/70" />
                      </a>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {showAll ? (
                <><ChevronUp className="w-4 h-4" /> Show less</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Show {testimonials.length - 2} more</>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
