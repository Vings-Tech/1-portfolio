import { motion } from 'motion/react';
import { Code2, Layout, Database, Terminal, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-accent" />,
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    },
    {
      title: 'Fundamentals',
      icon: <Code2 className="text-accent" />,
      skills: ['Data Structures', 'Algorithms', 'OOPs', 'Operating Systems', 'DBMS'],
    },
    {
      title: 'Tools & Others',
      icon: <Terminal className="text-accent" />,
      skills: ['Git & GitHub', 'Docker', 'Vercel', 'Postman', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of the technologies and concepts I've mastered during my engineering journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-premium p-8 rounded-2xl hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-text-primary/5 border border-text-primary/10 rounded-full text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
