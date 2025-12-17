import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  bullets: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Aug 2025 - Present",
    title: "AI Developer & Architect",
    company: "Dolittle-AI.de",
    bullets: [
      "Building multi-step multi-modal AI Agents (RAG, voice/text chat)",
      "Implemented LLM evaluation frameworks (Evals) to monitor latency, accuracy, and hallucinations in production",
    ],
    tech: ["RAG", "LLM", "Langchain", "Langsmith/Langfuse", "Evals", "Python", "TypeScript", "Supabase", "AWS", "Terraform"],
  },
  {
    period: "Feb 2025 - Present",
    title: "Gen AI Workshops for Developers",
    company: "Independent",
    bullets: [
      "Conducted 4 workshops for developers (~80 students in total)",
      "Hands-on training for dev teams to boost AI-assisted coding adoption in organizations",
    ],
    tech: ["LLM", "AI Training", "Developer Education"],
  },
  {
    period: "Aug 2024 - Present",
    title: "AI Developer",
    company: "SuitePad",
    bullets: [
      "Building Gen AI (RAG, AI Concierge) features for hotels",
    ],
    tech: ["RAG", "LLM", "Langchain", "Mastra", "Evals", "Python", "Ruby on Rails", "TypeScript", "AWS Fargate"],
  },
  {
    period: "Oct 2023 - Present",
    title: "AI Developer & Architect",
    company: "Ukraine Refugee Support",
    bullets: [
      "Building a Gen AI bot to help Ukrainian Refugees navigate German bureaucracy",
    ],
    tech: ["RAG", "LLM", "React", "TypeScript", "Tailwind", "Vercel", "Node.js", "AWS", "Terraform"],
  },
];

const AIExperience = () => {
  return (
    <section className="py-12">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-primary rounded-full"></span>
          AI & GenAI Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-6 hover:border-primary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-foreground/80 mb-3 space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperience;
