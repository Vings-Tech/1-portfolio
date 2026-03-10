import { motion } from 'motion/react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduTrack Pro',
      problem: 'Inefficient management of student attendance and performance tracking in large classrooms.',
      features: ['Real-time dashboard', 'Automated reporting', 'Student portal', 'Cloud sync'],
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: 'https://picsum.photos/seed/edutrack/800/450',
    },
    {
      title: 'CryptoPulse',
      problem: 'Difficulty in tracking real-time crypto market trends with personalized alerts.',
      features: ['Live price updates', 'Interactive charts', 'Custom watchlists', 'News aggregator'],
      tech: ['Next.js', 'CoinGecko API', 'Chart.js'],
      github: '#',
      live: '#',
      image: 'https://picsum.photos/seed/crypto/800/450',
    },
    {
      title: 'EcoStore',
      problem: 'Lack of a dedicated platform for sustainable and eco-friendly products.',
      features: ['Product filtering', 'Secure checkout', 'Vendor dashboard', 'Sustainability ratings'],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      image: 'https://picsum.photos/seed/eco/800/450',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-text-primary/2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-text-secondary">
              A selection of my recent work, focusing on solving real problems with elegant code and intuitive design.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-accent hover:underline font-medium">
            <Folder size={20} />
            View All Archives
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-premium rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-text-primary/10 rounded-full hover:bg-accent hover:text-background transition-all">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-3 bg-text-primary/10 rounded-full hover:bg-accent hover:text-background transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2 italic">
                  "{project.problem}"
                </p>

                <div className="mb-6 flex-1">
                  <ul className="space-y-2">
                    {project.features.map(feature => (
                      <li key={feature} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-accent/80 px-2 py-1 bg-accent/5 rounded border border-accent/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
