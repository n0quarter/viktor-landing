import Hero from "@/components/Hero";
import AIProjects from "@/components/AIProjects";
import WorkshopSection from "@/components/WorkshopSection";
import SpeakingSection from "@/components/SpeakingSection";
import OtherExperience from "@/components/OtherExperience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <AIProjects />
        <WorkshopSection />
        <SpeakingSection />
        <OtherExperience />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
