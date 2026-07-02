import { useCopy } from "@/hooks/useCopy";
import { CONTACT_INFO } from "@/lib/constants";
import { Check, Copy, Globe, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const email = useCopy();
  const phone = useCopy();

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 text-background/80">
                  <Mail className="w-5 h-5" />
                  <span>{CONTACT_INFO.email}</span>
                  <button
                    onClick={() => email.copy(CONTACT_INFO.email)}
                    className="hover:text-background transition-colors p-1"
                    title="Copy email"
                  >
                    {email.copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 opacity-50" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 text-background/80">
                  <Phone className="w-5 h-5" />
                  <span>{CONTACT_INFO.phone}</span>
                  <button
                    onClick={() => phone.copy(CONTACT_INFO.phone)}
                    className="hover:text-background transition-colors p-1"
                    title="Copy phone"
                  >
                    {phone.copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 opacity-50" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-5 h-5" />
                {CONTACT_INFO.location}
              </div>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h2>
            <div className="text-sm">
              <p className="font-medium">Computer Science MS</p>
              <p className="text-background/70">Kyiv Polytechnic Institute</p>
              <p className="text-background/70">2000 - 2005</p>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Languages
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-background">English:</span>{" "}
                <span className="text-background/70">Fluent</span>
              </p>
              <p>
                <span className="text-background">German:</span>{" "}
                <span className="text-background/70">B1</span>
              </p>
              <p>
                <span className="text-background">Ukrainian:</span>{" "}
                <span className="text-background/70">Native</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Viktor Shcherban</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
