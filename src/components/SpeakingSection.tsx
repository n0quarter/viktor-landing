import speakingPhoto from "@/assets/viktor-speaking.png";
import { Calendar, MapPin, Mic } from "lucide-react";

const SpeakingSection = () => {
  return (
    <section id="speaking" className="py-12 bg-slate-800 text-white">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="shrink-0">
            <img
              src={speakingPhoto}
              alt="Viktor speaking at a conference"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
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
                  Presenting at AI conferences and meetups on topics like agentic systems and AI-assisted coding. 20+ talks delivered over 18 years to audiences of 20-400.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm md:ml-[72px]">
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
