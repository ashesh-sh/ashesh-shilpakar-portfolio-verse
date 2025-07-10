
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'AL Octagon IT Services',
    role: 'Game Engineering Manager',
    period: 'March 2023 - Present',
    location: 'Abu Dhabi',
    description: 'Leading multiple multiplayer mobile game development projects with focus on real-time gameplay, cryptocurrency payment systems, and in-app update functionality.',
    achievements: [
      'Led development of multiple multiplayer mobile games with real-time gameplay',
      'Integrated in-game cryptocurrency payment systems',
      'Lead, mentor, and support engineering teams (Game Developers, Graphics Designers, Backend Developers, QA)',
      'Developed lightweight framework for slot games with seamless backend API integration',
      'Ensure code quality, performance optimization, and adherence to technical standards'
    ]
  },
  {
    company: 'Paracosma Nepal Pvt. Ltd.',
    role: 'Lead Game Developer',
    period: 'April 2021 - February 2023',
    location: 'Kathmandu',
    description: 'Specialized in VR/XR development, optimizing virtual environments and developing AI-focused simulations for various applications.',
    achievements: [
      'Identified and fixed VR hardware/software problems for smooth virtual environments',
      'Optimized 3D models for VR compatibility and performance',
      'Developed Unity virtual environment for weather/lighting simulation supporting AI model training',
      'Created cognitive exercise games in VR for elderly and individuals with disabilities',
      'Worked on VR Multiplayer games and simulations'
    ]
  },
  {
    company: 'Paracosma Nepal Pvt. Ltd.',
    role: 'Academy Game Developer',
    period: 'June 2018 - April 2021',
    location: 'Kathmandu',
    description: 'Focused on AR development and interactive simulations, creating engaging experiences for various platforms and audiences.',
    achievements: [
      'Developed face filters for AARP events using AR Studio (Spark AR)',
      'Designed complex interactions and gameplay mechanics in artificial environments',
      'Developed various VR simulations, training programs, and games',
      'Worked on VR Multiplayer Simulations with interactive 3D avatars'
    ]
  },
  {
    company: 'Chimpvine Nepal',
    role: 'Game Developer',
    period: 'September 2020 - April 2022',
    location: 'Kathmandu (Remote)',
    description: 'Specialized in educational game development, creating learning experiences that combine entertainment with pedagogical effectiveness.',
    achievements: [
      'Designed educational games for different student levels in Unity',
      'Developed engaging gameplay and UI that enhance learning experience',
      'Guided junior developers in transforming concepts into functional games'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-400">
            A decade of crafting digital experiences and immersive technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue via-neon-purple to-electric-green"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-blue rounded-full border-4 border-gray-900 z-10"></div>

              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 glow-border hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-cyber-blue" />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-neon-purple mb-2">{exp.role}</h4>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-electric-green mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
