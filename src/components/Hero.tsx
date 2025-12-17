import { Mail, Linkedin, Copy, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "viktor@shcherban.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              AI Architect &<br />
              <span className="text-primary">Full-Stack Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              18 years of experience building software. Expert in designing Agentic systems, 
              RAG pipelines, and scalable architecture. Taking complex AI products from concept 
              to production (0→1). Former CTO with deep experience mentoring teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:viktor@shcherban.com">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Berlin, Germany</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/shcherbanviktor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-64 h-80 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Photo placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
