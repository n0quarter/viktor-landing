import asdcodeLogo from "@/assets/companies/asdcode_logo.png";
import bonialLogo from "@/assets/companies/bonial_logo-removebg.png";
import istatLogo from "@/assets/companies/istat_logo.png";
import timberbaseLogo from "@/assets/companies/timberbase_logo.webp";
import uberblickLogo from "@/assets/companies/uberblick_logo.png";
import vintLogo from "@/assets/companies/vint_logo.png";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
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
    description: "Built gobal B2B timber trade marketplace (0→1). CI/CD, clean architecture, team mentoring.",
    logo: timberbaseLogo,
    url: "https://timberbase.com/",
    statusLabel: "Acquired by UFP",
    statusType: "acquired",
  },
  {
    period: "2017 – 2020",
    title: "Hands-on CTO & Co-founder",
    company: "Uberblick",
    description: "Hotel communication app. Full MVP (Web+iOS+Android) in 3 months. React Native, AWS.",
    logo: uberblickLogo,
    url: "https://uberblick.io/",
    statusLabel: "Active",
    statusType: "operational",
  },
  {
    period: "2014 – 2017",
    title: "Software Architect",
    company: "Bonial International Group",
    description: "Led iOS, Android, React Native teams. System design, clean architecture, CI/CD.",
    logo: bonialLogo,
    url: "https://www.bonial.com/",
    statusLabel: "Active",
    statusType: "operational",
  },
  {
    period: "2011 – 2013",
    title: "CTO & Founder",
    company: "asdCode Mobile Agency",
    description: "Team of 5. Project management, mobile development, agile delivery.",
    logo: asdcodeLogo,
    statusLabel: "Closed",
    statusType: "closed",
  },
  {
    period: "2010 – 2013",
    title: "CTO & Co-founder",
    company: "iStat24 Call-Tracking",
    description: "20+ conference presentations. Customer development, Scrum introduction.",
    logo: istatLogo,
    url: "https://istat24.com/",
    statusLabel: "Live",
    statusType: "operational",
  },
  {
    period: "2006 – 2012",
    title: "CTO & Co-founder",
    company: "Vint.com.ua e-commerce",
    description: "Built e-commerce from scratch. Web, back-office, ERP, iOS & Android apps.",
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
      <Card key={index} className="border border-border hover:border-primary/50 transition-colors select-text overflow-hidden">
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
        <CardContent>
          <p className="text-sm text-muted-foreground">{exp.description}</p>
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
