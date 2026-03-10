import { motion } from 'motion/react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Welcome to my professional space
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            I'm <span className="text-gradient">Alex Rivera</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Final Year Computer Science Engineering Student | <span className="text-text-primary font-medium">Frontend Developer</span>
          </p>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto">
            Passionate about building high-performance, accessible, and beautiful web applications that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 btn-gradient rounded-full"
          >
            View Projects
          </a>
          <a
            href="#"
            className="px-8 py-3 border border-text-primary/20 text-text-primary font-bold rounded-full hover:bg-text-primary/5 transition-all flex items-center gap-2"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="#" className="text-text-secondary hover:text-accent transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-text-secondary hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#contact" className="text-text-secondary hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
