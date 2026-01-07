import alteosLogo from "@/assets/projects/alteos_logo.svg";
import askSchmidtLogo from "@/assets/projects/askSchmidt.jpeg";
import docDoliteLogo from "@/assets/projects/DocDolite_logo.png";
import dolittleAiLogo from "@/assets/projects/dolittle-ai.png";
import empionLogo from "@/assets/projects/empion.svg";
import suitePadLogo from "@/assets/projects/SuitePad_logo.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  logo: string;
  title: string;
  company: string;
  url: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    logo: alteosLogo,
    title: "AI Solutions",
    company: "alteos",
    url: "https://www.alteos.com/",
    period: "2023 - 2024",
    description: "Enterprise AI solutions and consulting services.",
    highlights: [
      "Custom AI implementations",
      "Enterprise integrations",
      "AI strategy consulting",
    ],
    tech: ["AI/ML", "Python", "Cloud Services"],
  },
  {
    logo: suitePadLogo,
    title: "AI Concierge for Hotels",
    company: "SuitePad",
    url: "https://www.suitepad.de/",
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
    logo: docDoliteLogo,
    title: "Multi-Modal AI Agents",
    company: "DocDolittle",
    url: "https://doc.dolittle-ai.de/",
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
    logo: dolittleAiLogo,
    title: "AI Platform",
    company: "Dolittle AI",
    url: "https://dolittle-ai.de/",
    period: "2024 - Present",
    description: "AI-powered platform and solutions.",
    highlights: [
      "AI platform development",
      "Advanced AI features",
      "Enterprise solutions",
    ],
    tech: ["AI/ML", "Python", "TypeScript"],
  },
  {
    logo: askSchmidtLogo,
    title: "AI Bot for Refugees",
    company: "Ukraine Refugee Support",
    url: "https://www.askschmidt.de/",
    period: "Oct 2023 - Present",
    description: "GenAI bot helping Ukrainian refugees navigate German bureaucracy and documentation.",
    highlights: [
      "Bureaucracy navigation assistant",
      "Document guidance",
      "Multi-language support",
    ],
    tech: ["RAG", "LLM", "React", "TypeScript", "Node.js", "AWS"],
  },
  {
    logo: empionLogo,
    title: "AI Solutions",
    company: "empion",
    url: "https://www.empion.io/",
    period: "2023 - 2024",
    description: "Enterprise AI solutions and implementations.",
    highlights: [
      "Custom AI development",
      "Machine learning models",
      "Production deployment",
    ],
    tech: ["AI/ML", "Python", "TensorFlow"],
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
            During the last 3+ years I've built 6+ production-grade genAI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-border select-text">
              <CardHeader>
                <div className="h-10 flex items-center justify-start mb-4">
                  <img src={project.logo} alt={`${project.company} logo`} className="max-h-full max-w-full object-contain" draggable="false" />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary/90 hover:text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
                    {project.company}
                  </a> · {project.period}
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
                    <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-0 cursor-default hover:bg-primary/10">
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
