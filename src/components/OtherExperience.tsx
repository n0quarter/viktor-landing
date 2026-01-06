import asdcodeLogo from "@/assets/companies/asdcode_logo.png";
import bonialLogo from "@/assets/companies/bonial_logo-removebg.png";
import istatLogo from "@/assets/companies/istat_logo.png";
import timberbaseLogo from "@/assets/companies/timberbase_logo.webp";
import uberblickLogo from "@/assets/companies/uberblick_logo.png";
import vintLogo from "@/assets/companies/vint_logo.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  tech: string[];
  logo?: string;
  url?: string;
  statusLabel?: string;
  statusType?: "acquired" | "operational" | "closed";
}

const experiences: ExperienceItem[] = [
  {
    period: "2020 – 2023",
    title: "Hands-on CTO & Co-founder",
    company: "TimberBase",
    description: "Global B2B timber trade marketplace from zero to one.",
    highlights: [
      "Designed and scaled marketplace architecture",
      "Established CI/CD & clean architecture patterns",
      "Mentored engineering team on best practices",
    ],
    tech: ["TypeScript", "React", "Redux", "PostgreSQL", "AWS", "Terraform", "Kotlin"],
    logo: timberbaseLogo,
    url: "https://timberbase.com/",
    statusLabel: "Acquired by UFP",
    statusType: "acquired",
  },
  {
    period: "2017 – 2020",
    title: "Hands-on CTO & Co-founder",
    company: "Uberblick",
    description: "Internal communication app for hotels.",
    highlights: [
      "Delivered full MVP in 3 months (0 to production)",
      "Led React Native mobile app & AWS backend",
      "Defined product roadmap & agile processes",
    ],
    tech: ["React Native", "Redux", "Kotlin", "PostgreSQL", "AWS", "Firebase"],
    logo: uberblickLogo,
    url: "https://uberblick.io/",
    statusLabel: "Active",
    statusType: "operational",
  },
  {
    period: "2014 – 2017",
    title: "Software Architect",
    company: "Bonial International Group",
    description: "Mobile engineering leadership and system architecture.",
    highlights: [
      "Led iOS, Android, React Native teams",
      "Designed systems & software architecture",
      "Fostered clean architecture & CI best practices",
    ],
    tech: ["Swift", "React Native", "Redux", "AWS", "iOS", "Android"],
    logo: bonialLogo,
    url: "https://www.bonial.com/",
    statusLabel: "Active",
    statusType: "operational",
  },
  {
    period: "2011 – 2013",
    title: "CTO & Founder",
    company: "asdCode Mobile Agency",
    description: "Mobile development agency with team of 5.",
    highlights: [
      "Led team of 5 developers",
      "Project management & agile transformation",
      "Architecture, implementation & delivery",
    ],
    tech: ["iOS", "Objective-C", "UIKit", "Git"],
    logo: asdcodeLogo,
    statusLabel: "Closed",
    statusType: "closed",
  },
  {
    period: "2010 – 2013",
    title: "CTO & Co-founder",
    company: "iStat24 Call-Tracking",
    description: "Call tracking SaaS platform.",
    highlights: [
      "~20 presentations at industry conferences",
      "Customer development & lean startup",
      "Introduced Scrum to the team",
    ],
    tech: ["Ruby", "Perl", "PostgreSQL", "Redis", "AWS"],
    logo: istatLogo,
    url: "https://istat24.com/",
    statusLabel: "Live",
    statusType: "operational",
  },
  {
    period: "2006 – 2012",
    title: "CTO & Co-founder",
    company: "Vint.com.ua e-commerce",
    description: "E-commerce platform built from scratch.",
    highlights: [
      "Developed website, back-office & internal ERP",
      "Hired and managed team (up to 10 employees)",
      "Created iOS & Android apps",
    ],
    tech: ["Perl", "MySQL", "Apache", "Objective-C", "iOS"],
    logo: vintLogo,
    url: "https://vint.com.ua/",
    statusLabel: "Operating",
    statusType: "operational",
  },
];

const OtherExperience = () => {
  const renderCard = (exp: ExperienceItem, index: number) => {
    // Determine status bar styling based on status type
    const getStatusBarStyles = () => {
      if (exp.statusType === "acquired") {
        return {
          bgColor: "bg-blue-50/50",
          borderColor: "border-blue-500/20",
          textColor: "text-blue-600",
          dotBg: "bg-blue-400",
          dotFill: "bg-blue-500",
        };
      } else if (exp.statusType === "closed") {
        return {
          bgColor: "bg-muted/30",
          borderColor: "border-muted-foreground/10",
          textColor: "text-muted-foreground/60",
          dotBg: "",
          dotFill: "",
        };
      } else {
        return {
          bgColor: "bg-emerald-50/50",
          borderColor: "border-emerald-500/20",
          textColor: "text-emerald-600",
          dotBg: "bg-emerald-400",
          dotFill: "bg-emerald-500",
        };
      }
    };

    const statusStyles = getStatusBarStyles();
    const showDot = exp.statusType === "operational" || exp.statusType === "acquired";

    return (
      <Card key={index} className="border border-border select-text overflow-hidden flex flex-col">
        <CardHeader>
          <div className="h-12 flex items-center justify-start mb-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="max-h-full max-w-full object-contain"
                draggable="false"
              />
            )}
          </div>
          <CardTitle className="text-lg">{exp.title}</CardTitle>
          <CardDescription>
            {exp.url ? (
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/90 hover:text-primary underline decoration-primary/40 hover:decoration-primary transition-colors font-medium"
              >
                {exp.company}
              </a>
            ) : (
              <span className="text-primary/90 font-medium">{exp.company}</span>
            )}
            {" · "}{exp.period}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{exp.description}</p>
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                <span className="text-foreground/80">{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t, i) => (
              <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-0 cursor-default hover:bg-primary/10">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        {exp.company !== "Bonial International Group" && (
          <CardFooter className={`${statusStyles.bgColor} border-t ${statusStyles.borderColor} py-2 px-6 flex items-center gap-1.5 text-[10px] font-medium`}>
            {exp.statusType === "closed" && <span className={statusStyles.textColor}>Closed</span>}
            {exp.statusType === "operational" && (
              <>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className={statusStyles.textColor}>Currently Operating</span>
              </>
            )}
            {exp.statusType === "acquired" && (
              <>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                <span className={statusStyles.textColor}>{exp.statusLabel}</span>
                <span className="text-muted-foreground/40 mx-0.5">•</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-600">Currently Operating</span>
              </>
            )}
          </CardFooter>
        )}
      </Card>
    );
  };

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => renderCard(exp, index))}
        </div>
      </div>
    </section>
  );
};

export default OtherExperience;
