import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI & ML",
    skills: ["RAG", "LLM", "Langchain", "Langsmith", "Langfuse", "Evals", "Guardrails", "Mastra"],
  },
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Kotlin", "Swift", "Ruby"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "AWS", "Supabase", "Docker", "Terraform", "PostgreSQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "Tailwind CSS", "Redux"],
  },
];

const Skills = () => {
  return (
    <section className="py-12">
      <div className="container max-w-4xl">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {skill}
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

export default Skills;
