import { Mic, Calendar, MapPin } from "lucide-react";
import speakingPhoto from "@/assets/speaking-photo.png";

const SpeakingSection = () => {
  return (
    <section className="py-24 bg-slate-800 text-white">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="shrink-0">
            <img 
              src={speakingPhoto} 
              alt="Viktor speaking at a conference" 
              className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Mic className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Public Speaker
                </h2>
                <p className="text-slate-300 max-w-xl">
                  Presenting at AI conferences and meetups on topics including agentic systems, 
                  RAG pipelines, and AI-assisted development. 20+ talks delivered to audiences of 20-400 people.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm ml-18">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>Available for speaking</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Remote & Berlin area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
