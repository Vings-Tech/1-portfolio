import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Footer2 from './components/footer2';
import { motion } from 'motion/react';
import { Code2, Cpu, Database, Globe, Layout, Terminal } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Code2, top: '15%', left: '10%', delay: 0 },
    { Icon: Cpu, top: '25%', left: '85%', delay: 1 },
    { Icon: Database, top: '65%', left: '5%', delay: 2 },
    { Icon: Globe, top: '80%', left: '80%', delay: 1.5 },
    { Icon: Layout, top: '45%', left: '90%', delay: 0.5 },
    { Icon: Terminal, top: '10%', left: '70%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5 opacity-20">
      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute text-accent/40"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={40 + Math.random() * 40} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background bg-mesh-animated selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <FloatingIcons />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <Footer2 />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}


