import { Mail, Phone, MapPin, GraduationCap, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a href="mailto:megaletterbox@gmail.com" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
                megaletterbox@gmail.com
              </a>
              <a href="tel:+4915754278950" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Phone className="w-5 h-5" />
                +49 15754278950
              </a>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-5 h-5" />
                Berlin, Germany
              </div>
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
              <p><span className="text-background">English:</span> <span className="text-background/70">Fluent</span></p>
              <p><span className="text-background">German:</span> <span className="text-background/70">B1</span></p>
              <p><span className="text-background">Ukrainian:</span> <span className="text-background/70">Native</span></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Viktor Shcherban. Available for AI consulting & development projects.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
