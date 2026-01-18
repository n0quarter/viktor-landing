import bgImage from "@/assets/bg8.png";
import { CONTACT_INFO } from "@/lib/constants";
import { Check, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";
// import viktorPhoto from "@/assets/viktor.png";
const viktorPhoto = "/viktor.png";

const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      className="py-12 md:py-12 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-3xl md:text-4xl lg:text-5xl block mb-2">
                Viktor Shcherban
                </span>
              <span className="text-primary">
                {/* keep it here commented for now */}
                {/* AI Product Engineer or Full-Stack GenAI Engineer */}
                AI Engineer & Full-Stack Developer
              </span>
            </h1>
            <div className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed space-y-8">
              {/* <div>
                Version 1:<br />
                18+ years of experience building software. Expert in designing text & voice AI Agents,
                RAG pipelines, and scalable architecture. Taking complex AI products from concept
                to production (0→1). Former CTO.
              </div> */}

              <div>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                    3+ years of experience building gen-AI products
                    <span className="block text-base text-slate-400 ml-8">
                      Text & Voice/Phone Agents · RAG Pipelines · LLM Evals
                    </span>
                  </li>
                  <li>18+ years of experience building software</li>
                  <li>As a former startups' CTO, I specialize on fast yet robust MVPs</li>
                </ul>
              </div>

              {/* <div>
                Version 3:
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                    I build gen-AI products from concept to production (0→1)
                    <span className="block text-base text-slate-400 ml-8">
                      (multi-modal AI agents(text/voice), RAG pipelines, LLM Evals)
                    </span>
                  </li>
                  <li>I've been building software for 18+ years</li>
                  <li>As a former startups' CTO, I specialize on fast yet robust MVPs</li>
                </ul>
              </div> */}
            </div>


            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
                <button
                  onClick={copyEmail}
                  className="hover:text-white transition-colors p-1"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src={viktorPhoto}
              alt="Viktor Shcherban"
              className="w-56 h-72 object-cover rounded-2xl border border-slate-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
