import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Building2, Users } from "lucide-react";

interface Project {
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Multi-Modal AI Agents",
    company: "Dolittle-AI.de",
    period: "Aug 2025 - Present",
    description: "Building production-grade multi-step AI agents with RAG, voice, and text chat capabilities.",
    highlights: [
      "Multi-modal AI agents (voice + text)",
      "LLM evaluation frameworks (Evals)",
      "Production monitoring for hallucinations",
    ],
    tech: ["RAG", "LLM", "Langchain", "Langsmith", "Python", "TypeScript", "AWS"],
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "AI Concierge for Hotels",
    company: "SuitePad",
    period: "Aug 2024 - Present",
    description: "GenAI features transforming hotel guest experiences with intelligent concierge services.",
    highlights: [
      "RAG-powered guest assistance",
      "Real-time recommendations",
      "Multi-language support",
    ],
    tech: ["RAG", "LLM", "Langchain", "Mastra", "Ruby on Rails", "AWS Fargate"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "AI Bot for Refugees",
    company: "Ukraine Refugee Support",
    period: "Oct 2023 - Present",
    description: "GenAI bot helping Ukrainian refugees navigate German bureaucracy and documentation.",
    highlights: [
      "Bureaucracy navigation assistant",
      "Document guidance",
      "Multi-language support",
    ],
    tech: ["RAG", "LLM", "React", "TypeScript", "Node.js", "AWS"],
  },
];

const AIProjects = () => {
  return (
    <section id="projects" className="py-12 bg-accent/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent AI Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            During the last 3+ years I've built 5 production-grade genAI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {project.icon}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  {project.company} · {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span className="text-foreground/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-0 hover:bg-sky-500/20 hover:text-sky-700 transition-colors cursor-default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
