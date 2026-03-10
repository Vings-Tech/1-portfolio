import { Github, Linkedin, Twitter, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-text-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold tracking-tighter text-gradient-silk mb-4 block">
            PORTFOLIO.
          </a>
          <p className="text-text-secondary text-sm max-w-xs">
            Built with passion and precision by Alex Rivera. © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#about" className="text-sm text-text-secondary hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-sm text-text-secondary hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass-premium rounded-full flex items-center justify-center text-text-secondary hover:text-accent transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 glass-premium rounded-full flex items-center justify-center text-text-secondary hover:text-accent transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="w-10 h-10 glass-premium rounded-full flex items-center justify-center text-text-secondary hover:text-accent transition-all">
              <Mail size={18} />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-background transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
