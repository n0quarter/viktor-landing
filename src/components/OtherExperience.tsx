import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2020 – 2023",
    title: "Hands-on CTO & Co-founder",
    company: "TimberBase, Berlin",
    description: "Scaled global B2B marketplace architecture (0→1). CI/CD, clean architecture, team mentoring.",
  },
  {
    period: "2017 – 2020",
    title: "Hands-on CTO & Co-founder",
    company: "Uberblick, Berlin",
    description: "Hotel communication app. Full MVP (Web+iOS+Android) in 3 months. React Native, AWS.",
  },
  {
    period: "2014 – 2017",
    title: "Software Architect",
    company: "Bonial International Group",
    description: "Led iOS, Android, React Native teams. System design, clean architecture, CI/CD.",
  },
  {
    period: "2011 – 2013",
    title: "CTO & Founder",
    company: "asdCode Mobile Agency",
    description: "Team of 5. Project management, mobile development, agile delivery.",
  },
  {
    period: "2010 – 2013",
    title: "CTO & Co-founder",
    company: "iStat24 Call-Tracking",
    description: "20+ conference presentations. Customer development, Scrum introduction.",
  },
  {
    period: "2006 – 2012",
    title: "CTO & Co-founder",
    company: "Vint.com.ua e-commerce",
    description: "Built e-commerce from scratch. Web, back-office, ERP, iOS & Android apps.",
  },
];

const OtherExperience = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Previous Experience
          </h2>
          <p className="text-muted-foreground">
            18 years building products, leading teams, and scaling companies
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-muted-foreground shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                    <h3 className="font-medium text-foreground text-sm mb-1">{exp.title}</h3>
                    <p className="text-sm text-primary mb-2">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherExperience;
