import Header from "@/components/Header";
import AIExperience from "@/components/AIExperience";
import OtherExperience from "@/components/OtherExperience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AIExperience />
        <OtherExperience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
