import bgImage from "@/assets/bg8.png";
import viktorPhoto from "@/assets/main_with_bg.jpg";
import HeadlineBreakout from "@/components/HeadlineBreakout";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/hooks/useCopy";
import { CONTACT_INFO } from "@/lib/constants";
import { Check, ClipboardCopy, Copy, FileText, Mail, MapPin } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const email = useCopy();
  const markdown = useCopy();
  const bounceRef = useRef<HTMLUListElement>(null);

  const copyAsMarkdown = () => markdown.copy(fetch("/profile.md").then((res) => res.text()));

  return (
    <section
      className="py-12 text-white"
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
            <div className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              <ul ref={bounceRef} className="list-disc list-inside mt-2 space-y-2">
                <li>20 years of experience building software</li>
                <li>
                  4+ years of experience building genAI products
                  <span className="block text-base text-slate-400 ml-8">
                    Text & Voice/Phone Agents · RAG Pipelines · MCP Servers
                  </span>
                </li>
                <li>As a former startups' CTO, I specialize in fast yet robust MVPs</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
                <button
                  onClick={() => email.copy(CONTACT_INFO.email)}
                  className="hover:text-white transition-colors p-1"
                  title="Copy email"
                >
                  {email.copied ? (
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
                  {markdown.copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <ClipboardCopy className="w-4 h-4" />
                  )}
                  {markdown.copied ? "Copied!" : "Copy as Markdown"}
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
