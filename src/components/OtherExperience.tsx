interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Sep 2020 – Sep 2023",
    title: "Hands-on CTO & Co-founder",
    company: "TimberBase, Berlin",
    description: "Designed and scaled global marketplace architecture (0 to 1). Established CI/CD pipelines and mentored engineering team.",
  },
  {
    period: "Sep 2017 – Sep 2020",
    title: "Hands-on CTO & Co-founder",
    company: "Uberblick, Berlin",
    description: "Internal communication app for hotels. Delivered full MVP (Web+iOS+Android) in 3 months.",
  },
  {
    period: "Jan 2014 – Sep 2017",
    title: "Software Architect",
    company: "Bonial International Group, Berlin",
    description: "Led team of iOS, Android, and React Native developers. System design and architecture.",
  },
  {
    period: "Jun 2011 – Dec 2013",
    title: "CTO & Founder",
    company: "asdCode Mobile Agency, Kyiv",
    description: "Led team of 5 developers. Project management and mobile app development.",
  },
  {
    period: "Apr 2010 – Dec 2013",
    title: "CTO & Co-founder",
    company: "iStat24 Call-Tracking, Kyiv",
    description: "Managing team, gave ~20 presentations at industry conferences.",
  },
  {
    period: "Jun 2006 – Oct 2012",
    title: "CTO & Co-founder",
    company: "Vint.com.ua e-commerce, Kyiv",
    description: "Created e-commerce company from scratch. Web, iOS, Android development.",
  },
];

const OtherExperience = () => {
  return (
    <section className="py-12 bg-accent/50">
      <div className="container max-w-4xl">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Previous Experience
        </h2>
        <div className="grid gap-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:gap-6 text-sm">
              <span className="text-muted-foreground md:w-40 shrink-0">{exp.period}</span>
              <div>
                <h3 className="font-medium text-foreground">
                  {exp.title} @ {exp.company}
                </h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherExperience;
