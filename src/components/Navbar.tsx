import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isOpen ? 'py-6' : (scrolled ? 'glass py-4' : 'bg-transparent py-6')}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo - Left */}
        <div className="flex justify-start">
          <a href="#" className="text-2xl font-bold tracking-tighter text-gradient-silk">
            PORTFOLIO.
          </a>
        </div>

        {/* Desktop Nav - Center */}
        <div className="hidden md:flex justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side - Theme Toggle & Hamburger */}
        <div className="flex justify-end items-center gap-2 md:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 glass rounded-xl text-text-primary hover:text-accent transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background/80 backdrop-blur-2xl border-l border-text-primary/10 z-50 md:hidden flex flex-col p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold text-gradient tracking-widest">MENU</span>
                <button className="p-2 hover:bg-text-primary/10 rounded-full text-text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2 glass rounded-3xl p-2 mb-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-text-secondary hover:text-accent transition-all flex items-center justify-between group px-6 py-4 rounded-2xl hover:bg-text-primary/5"
                  >
                    {link.name}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-2 h-2 bg-accent rounded-full"
                    ></motion.span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-text-primary/10">
                <p className="text-xs text-text-secondary mb-6 uppercase tracking-[0.2em] font-bold">Connect with me</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 glass-premium rounded-2xl flex items-center justify-center text-text-secondary hover:text-accent transition-all">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 glass-premium rounded-2xl flex items-center justify-center text-text-secondary hover:text-accent transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
