import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 border-t border-border/20">
      <div className="container flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(217_91%_60%/0.3)]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
        <p className="text-xs text-muted-foreground">
          © 2025 TheBestProp
        </p>
      </div>
    </footer>
  );
};

export default Footer;
