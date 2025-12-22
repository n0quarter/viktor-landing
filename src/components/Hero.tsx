import bgImage from "@/assets/bg8.png";
import viktorPhoto from "@/assets/viktor.png";
import { Button } from "@/components/ui/button";
import { Check, Copy, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "viktor@shcherban.com";
  const phone = "+49 15754278950";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      className="py-12 md:py-15 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-3xl md:text-4xl lg:text-5xl block mb-2">Viktor Shcherban</span>
              <span className="text-primary">
                {/* keep it here commented for now */}
                {/* AI Product Engineer or Full-Stack GenAI Engineer */}
                AI Architect &<br />
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              18 years of experience building software. Expert in designing agentic systems,
              RAG pipelines, and scalable architecture. Taking complex AI products from concept
              to production (0→1). Former CTO with deep experience mentoring teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gap-2" onClick={copyEmail}>
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex flex-wrap gap-4">
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
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={copyPhone}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phone}</span>
                  {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
                {copiedPhone && (
                  <span className="text-green-400 text-xs font-medium animate-in fade-in slide-in-from-left-2 duration-300">
                    Copied!
                  </span>
                )}
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{email}</span>
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
                {copiedEmail && (
                  <span className="text-green-400 text-xs font-medium animate-in fade-in slide-in-from-left-2 duration-300">
                    Copied!
                  </span>
                )}
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
