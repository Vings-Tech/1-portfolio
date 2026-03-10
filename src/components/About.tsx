import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-text-primary/2">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a final-year Computer Science student with a deep fascination for the intersection of design and technology. My journey in engineering has equipped me with a strong analytical foundation, while my passion for frontend development allows me to bring creative visions to life.
              </p>
              <p>
                My career objective is to join a forward-thinking team where I can contribute to building scalable web solutions and continue growing as a full-stack engineer. I thrive in collaborative environments and love tackling complex UI/UX challenges.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring junior students in my college's tech club.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-premium p-6 rounded-2xl hover:border-accent/20 transition-all">
              <img
                src="https://picsum.photos/seed/alex/800/800"
                alt="Alex Rivera"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
