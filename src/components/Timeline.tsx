import { motion } from 'motion/react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: '2021 - 2025',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Global Institute of Technology',
      description: 'Focusing on core CS fundamentals, web technologies, and software engineering principles. Current CGPA: 8.9/10.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: '2024',
      title: 'Full Stack Development Certification',
      institution: 'Meta (via Coursera)',
      description: 'Comprehensive training in React, Node.js, and modern web architecture.',
      icon: <Award size={20} />,
    },
    {
      year: '2023',
      title: 'Frontend Intern',
      institution: 'TechFlow Solutions',
      description: 'Collaborated on developing responsive UI components for a client-facing dashboard.',
      icon: <Briefcase size={20} />,
    },
    {
      year: '2022',
      title: 'Smart India Hackathon Finalist',
      institution: 'Ministry of Education',
      description: 'Developed a prototype for an AI-based waste management system.',
      icon: <Award size={20} />,
    },
  ];

  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">My Journey</h2>

        <div className="relative border-l border-text-primary/10 ml-4 md:ml-0">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 relative pl-8"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-background border border-accent rounded-full flex items-center justify-center text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>

              <div className="glass-premium p-6 rounded-2xl hover:border-accent/20 transition-all">
                <span className="text-accent text-sm font-bold mb-2 block">{event.year}</span>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-text-primary/5 rounded-lg text-text-secondary">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                <h4 className="text-text-primary/80 font-medium mb-3">{event.institution}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
