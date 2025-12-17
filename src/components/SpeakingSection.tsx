import { Mic, Calendar, MapPin } from "lucide-react";

const SpeakingSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <Mic className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Public Speaker
              </h2>
              <p className="text-primary-foreground/80 max-w-xl">
                Presenting at AI conferences and meetups on topics including agentic systems, 
                RAG pipelines, and AI-assisted development. 20+ talks delivered to audiences of 20-400 people.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Calendar className="w-4 h-4" />
              <span>Available for speaking</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Remote & Berlin area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
