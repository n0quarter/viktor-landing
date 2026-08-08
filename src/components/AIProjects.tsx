import alteosLogo from "@/assets/projects/alteos_logo.svg";
import askSchmidtLogo from "@/assets/projects/askSchmidt.jpeg";
import docDoliteLogo from "@/assets/projects/DocDolite_logo.png";
import dolittleAiLogo from "@/assets/projects/dolittle-ai.png";
import empionLogo from "@/assets/projects/empion.svg";
import suitePadLogo from "@/assets/projects/SuitePad_logo.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  logo?: string;
  logoText?: string;
  title: string;
  company: string;
  url?: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  moreTech?: string[];
}

const projects: Project[] = [
  {
    logoText: "SIXT",
    title: "Customer Support Chatbot & RAG",
    company: "Sixt",
    url: "https://www.sixt.com/",
    period: "2026 - Present",
    description: "Customer support chatbot and RAG for car rentals",
    highlights: ["Agentic workflows", "Multi-agent orchestration"],
    tech: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "MCP",
      "AWS Bedrock",
      "AWS Bedrock AgentCore",
      "Bedrock Guardrails",
      "Azure OpenAI",
      "OpenSearch",
      "Arize",
      "OpenTelemetry",
      "PromptFoo",
    ],
    moreTech: [
      "FastAPI",
      "PostgreSQL",
      "DynamoDB",
      "AWS S3",
      "AWS SQS",
      "AWS Athena",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "React",
      "TypeScript",
      "AWS CloudWatch",
    ],
  },
  {
    logo: suitePadLogo,
    title: "AI Concierge for Hotels",
    company: "SuitePad",
    url: "https://www.suitepad.de/",
    period: "Aug 2024 - May 2026",
    description: "Text & Voice AI chatbot grounded in hotel-specific knowledge",
    highlights: [
      "RAG pipelines, MCP servers",
      "Personalized recommendations",
      "AI Voice from different vendors",
    ],
    tech: [
      "AWS Bedrock",
      "LangChain",
      "LangSmith",
      "LangGraph",
      "Vercel AI SDK",
      "RAG",
      "MCP",
      "LLM Evals",
      "OpenAI Realtime API",
      "Python",
      "Ruby on Rails",
      "LLM",
      "pgvector",
    ],
    moreTech: [
      "Node.js",
      "AWS Fargate",
      "AWS Cloudwatch",
      "AWS Lambda",
      "AWS Elasticache",
      "AWS Nova Sonic 2",
      "OpenSearch",
      "Google Vertex AI",
      "AWS S3",
      "AWS Cloudfront",
      "Azure OpenAI",
      "Docker",
      "Redis",
      "Terraform",
      "Document AI",
      "PostgreSQL",
      "Sidekiq",
      "WebSockets",
      "GitHub Actions",
    ],
  },
  {
    logo: alteosLogo,
    title: "AI Solutions for Insurance",
    company: "Alteos",
    url: "https://www.alteos.com/",
    period: "2025",
    description: "Enterprise AI solutions for insurance industry",
    highlights: ["AI strategy consulting", "Agentic workflows"],
    tech: ["Vercel AI SDK", "RAG", "LLM", "MCP", "Evals", "LangChain", "Mastra", "Langfuse"],
    moreTech: [
      "LangSmith",
      "React",
      "Supabase",
      "TypeScript",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Next.js",
      "Tailwind",
      "Zod",
      "OpenAI",
      "Anthropic Claude",
      "pgvector",
      "Vercel",
      "GitHub Actions",
      "Vitest",
      "Sentry",
      "Datadog",
    ],
  },
  {
    logo: docDoliteLogo,
    title: "AI Voice Phone Receptionist",
    company: "DocDolittle",
    url: "https://doc.dolittle-ai.de/",
    period: "2025",
    description: "AI voice phone receptionist for German doctors' practices",
    highlights: [
      "Multi-modal AI agents (voice + text)",
      "AI-generated communication templates",
      "AI-categorization of incoming calls/tickets",
    ],
    tech: [
      "RAG",
      "LLM",
      "MCP",
      "LangChain",
      "VoIP",
      "FreeSWITCH",
      "Elevenlabs Voice",
      "Supabase",
      "Node.js",
      "React",
      "TypeScript",
      "AWS",
      "Pinecone"
    ],
    moreTech: [
      "Evals",
      "Docker",
      "PostgreSQL",
      "Twilio",
      "SIP",
      "Terraform",
      "AWS Lambda",
      "AWS RDS",
      "AWS CloudWatch",
      "AWS Bedrock",
      "RabbitMQ",
      "AWS SQS",
      "OpenTelemetry",
      "AWS Route 53",
      "AWS Certificate Manager",
    ],
  },
  {
    logo: dolittleAiLogo,
    title: "Multi-Modal AI Agents Platform",
    company: "Dolittle AI",
    url: "https://dolittle-ai.de/",
    period: "2025",
    description: "AI-powered platform and solutions.",
    highlights: [
      "RAG enabled AI platform",
      "Multi-modal AI agents (voice + text)",
      "Custom Evals",
      "Agentic workflows",
    ],
    tech: [
      "LLM",
      "RAG",
      "LangChain",
      "Python",
      "Node.js",
      "Supabase",
      "OpenAI Realtime API",
      "AWS Nova Sonic 2",
      "TypeScript",
      "React",
      "AWS",
    ],
    moreTech: [
      "MCP",
      "LangSmith",
      "Evals",
      "AWS Fargate",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "OpenAI",
      "Anthropic Claude",
      "Deepseek",
      "Gemini",
      "Vertex AI",
      "GCP",
      "GitHub Actions",
    ],
  },
  {
    logo: askSchmidtLogo,
    title: "Telegram AI Chatbot for Refugees",
    company: "Ukraine Refugee Support",
    url: "https://www.askschmidt.de/",
    period: "2023-2025",
    description: "Gen-AI chatbot helping Ukrainian refugees navigate German bureaucracy.",
    highlights: [
      "RAG-enabled bureaucracy assistant",
      "Image recognition",
      "Grounded by web-search",
    ],
    tech: ["RAG", "LLM", "React", "DynamoDB", "Terraform", "serverless", "TypeScript", "Javascript", "Node.js", "AWS", "openAI platform"],
    moreTech: [
      "Tailwind",
      "Vercel",
      "Next.js",
      "Supabase",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS S3",
      "Telegram Bot API",
      "OpenAI Vision",
      "AWS DynamoDB",
      "AWS Cloudfront",
    ],
  },
  {
    logo: empionLogo,
    title: "AI Solutions",
    company: "Empion",
    url: "https://www.empion.io/",
    period: "2025",
    description: "Enterprise AI content categorization and AI-powered web-research.",
    highlights: [
      "Created a custom LLM evaluation framework",
      "Iterate LLM error rate based on annotated data",
      "AI-powered web-research",
    ],
    tech: ["LLM", "Evals", "OpenRouter", "Python", "Node.js", "TypeScript", "Javascript", "React"],
    moreTech: ["PostgreSQL", "FastAPI", "Pydantic", "OpenAI", "Playwright", "Docker", "AWS"],
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
            During the last 4+ years I've built 7 production-grade genAI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-border select-text">
              <CardHeader>
                <div className="h-10 flex items-center justify-start mb-4">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.company} logo`}
                      className="max-h-full max-w-full object-contain"
                      draggable="false"
                    />
                  ) : (
                    <span className="text-2xl font-black tracking-tight text-[#ff5f00]">
                      {project.logoText}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/90 hover:text-primary underline decoration-primary/40 hover:decoration-primary transition-colors"
                    >
                      {project.company}
                    </a>
                  ) : (
                    <span className="text-foreground/80">{project.company}</span>
                  )}{" "}
                  · {project.period}
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
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-0 cursor-default hover:bg-primary/10"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                {project.moreTech && (
                  <p className="mt-3 text-xs text-muted-foreground/60">
                    Also: {project.moreTech.join(", ")}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
