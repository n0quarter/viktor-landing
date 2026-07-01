import bgImage from "@/assets/bg8.png";
import viktorPhoto from "@/assets/main_with_bg.jpg";
import HeadlineBreakout from "@/components/HeadlineBreakout";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { Check, ClipboardCopy, Copy, FileText, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";

const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const bounceRef = useRef<HTMLUListElement>(null);

  const copyAsMarkdown = async () => {
    const res = await fetch("/profile.md");
    const text = await res.text();
    await navigator.clipboard.writeText(text);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-12 items-start">
          <div className="md:col-span-2 order-2 md:order-none">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <HeadlineBreakout
                bounceRef={bounceRef}
                lines={[
                  {
                    text: "Viktor Shcherban",
                    className: "text-3xl md:text-4xl lg:text-5xl block mb-2",
                  },
                  {
                    text: "AI Engineer & Full-Stack Developer",
                    className: "text-primary block",
                  },
                ]}
              />
            </h1>
            <div className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed space-y-8">
              {/* <div>
                Version 1:<br />
                18+ years of experience building software. Expert in designing text & voice AI Agents,
                RAG pipelines, and scalable architecture. Taking complex AI products from concept
                to production (0→1). Former CTO.
              </div> */}

              <div>
                <ul ref={bounceRef} className="list-disc list-inside mt-2 space-y-2">
                  <li>19 years of experience building software</li>
                  <li>
                    4 years of experience building genAI products
                    <span className="block text-base text-slate-400 ml-8">
                      Text & Voice/Phone Agents · RAG Pipelines · MCP Servers
                    </span>
                  </li>
                  <li>As a former startups' CTO, I specialize in fast yet robust MVPs</li>
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
                  <li>As a former startups' CTO, I specialize in fast yet robust MVPs</li>
                </ul>
              </div> */}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
                <button
                  onClick={copyEmail}
                  className="hover:text-white transition-colors p-1"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="basis-full flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyAsMarkdown}
                  className="gap-2 border-slate-500 text-slate-300 bg-transparent hover:bg-slate-700 hover:text-white"
                >
                  {copiedMarkdown ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <ClipboardCopy className="w-4 h-4" />
                  )}
                  {copiedMarkdown ? "Copied!" : "Copy as Markdown"}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-slate-500 text-slate-300 bg-transparent hover:bg-slate-700 hover:text-white"
                  asChild
                >
                  <a href="/Viktor_CV.pdf" download>
                    <FileText className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center order-1 md:order-none">
            <img
              src={viktorPhoto}
              alt="Viktor Shcherban"
              className="w-full md:max-w-xs aspect-[3/2] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
