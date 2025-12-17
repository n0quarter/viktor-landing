const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">Education</h2>
            <div className="text-sm">
              <p className="font-medium text-foreground">Computer Science MS degree</p>
              <p className="text-muted-foreground">Kyiv Polytechnic Institute, 2000 - 2005</p>
              <p className="text-muted-foreground mt-1">
                Thesis: Optimized FTP search engine for midsize intranets
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">Languages</h2>
            <div className="text-sm space-y-1">
              <p><span className="text-foreground">English:</span> <span className="text-muted-foreground">Fluent</span></p>
              <p><span className="text-foreground">German:</span> <span className="text-muted-foreground">B1</span></p>
              <p><span className="text-foreground">Ukrainian:</span> <span className="text-muted-foreground">Native</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
