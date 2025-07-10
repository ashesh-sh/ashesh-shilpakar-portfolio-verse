
import { motion } from 'framer-motion';
import { Gamepad2, Smartphone, GraduationCap, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'WebGL Games',
    description: 'Interactive Unity WebGL builds showcasing advanced game mechanics, immersive environments, and cross-platform compatibility.',
    icon: Gamepad2,
    color: 'from-cyber-blue to-blue-500',
    link: '#webgl-games',
    tags: ['Unity', 'WebGL', '3D', 'Interactive']
  },
  {
    title: 'Published Mobile Games', 
    description: 'Mobile slot and fish-style games with real-time mechanics, backend API integration, and engaging user experiences.',
    icon: Smartphone,
    color: 'from-neon-purple to-purple-500',
    link: '#mobile-games',
    tags: ['Mobile', 'Real-time', 'API', 'Monetization']
  },
  {
    title: 'Educational Games',
    description: 'Innovative learning experiences developed with Chimpvine, combining education with engaging gameplay mechanics.',
    icon: GraduationCap,
    color: 'from-electric-green to-green-500',
    link: '#educational-games',
    tags: ['Education', 'Unity', 'Learning', 'Interactive']
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the boundaries of interactive entertainment and immersive technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full hover:border-cyan-400/30 transition-all duration-300 glow-border">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${project.color} mb-6`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyber-blue hover:text-white transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
