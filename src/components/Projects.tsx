
import { motion } from 'framer-motion';
import { Gamepad2, Smartphone, GraduationCap, ExternalLink, X, Play } from 'lucide-react';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const projects = [
  {
    title: 'VR Projects',
    description: 'Immersive virtual reality experiences showcasing advanced VR mechanics, spatial interactions, and cutting-edge VR technology.',
    icon: Gamepad2,
    color: 'from-cyber-blue to-blue-500',
    link: '#vr-projects',
    tags: ['VR', 'Unity', '3D', 'Immersive'],
    details: [
      {
        title: 'Virtual Reality Escape Room',
        description: 'An immersive escape room experience with physics-based puzzles and hand tracking.',
        image: '/lovable-uploads/06441f01-1582-4cdb-9ab7-2a6c8a7b7dfc.png',
        hasVideo: true
      },
      {
        title: 'VR Flight Simulator',
        description: 'Realistic flight simulation with haptic feedback and spatial audio.',
        image: '/lovable-uploads/ac34c3b5-5cb2-4903-836f-ddd0b4c53a86.png',
        hasVideo: false
      }
    ]
  },
  {
    title: 'AR Mini Games', 
    description: 'Augmented reality mini-games featuring real-world integration, spatial tracking, and innovative AR gameplay mechanics.',
    icon: Smartphone,
    color: 'from-neon-purple to-purple-500',
    link: '#ar-games',
    tags: ['AR', 'Mobile', 'Spatial', 'Real-world'],
    details: [
      {
        title: 'AR Pet Companion',
        description: 'Virtual pet that interacts with your real environment using advanced AR tracking.',
        image: '/lovable-uploads/3cb44c36-47ff-4cc2-a0f1-49f9b5c07213.png',
        hasVideo: true
      },
      {
        title: 'AR Treasure Hunt',
        description: 'Location-based treasure hunting game with real-world clues and AR rewards.',
        image: '/lovable-uploads/06441f01-1582-4cdb-9ab7-2a6c8a7b7dfc.png',
        hasVideo: false
      }
    ]
  },
  {
    title: 'Educational Games',
    description: 'Innovative WebGL learning experiences developed with Chimpvine, combining education with engaging gameplay mechanics.',
    icon: GraduationCap,
    color: 'from-electric-green to-green-500',
    link: '#educational-games',
    tags: ['Education', 'WebGL', 'Learning', 'Interactive'],
    details: [
      {
        title: 'Math Adventure Quest',
        description: 'WebGL-based adventure game that teaches mathematics through interactive challenges.',
        image: '/lovable-uploads/ac34c3b5-5cb2-4903-836f-ddd0b4c53a86.png',
        hasVideo: true
      },
      {
        title: 'Science Lab Simulator',
        description: 'Virtual laboratory environment for conducting safe chemistry experiments.',
        image: '/lovable-uploads/3cb44c36-47ff-4cc2-a0f1-49f9b5c07213.png',
        hasVideo: false
      }
    ]
  },
  {
    title: 'Mobile Games',
    description: 'Classic board and strategy games including Chess, Ludo, Callbreak, and Snake and Ladder with modern mobile interfaces.',
    icon: Smartphone,
    color: 'from-neo-pink to-pink-500',
    link: '#mobile-games',
    tags: ['Mobile', 'Board Games', 'Strategy', 'Classic'],
    details: [
      {
        title: 'Chess Master',
        description: 'Advanced chess game with AI opponents, online multiplayer, and puzzle modes.',
        image: '/lovable-uploads/06441f01-1582-4cdb-9ab7-2a6c8a7b7dfc.png',
        hasVideo: false
      },
      {
        title: 'Ludo Championship',
        description: 'Classic Ludo game with modern graphics, tournaments, and social features.',
        image: '/lovable-uploads/ac34c3b5-5cb2-4903-836f-ddd0b4c53a86.png',
        hasVideo: true
      },
      {
        title: 'Callbreak Pro',
        description: 'Strategic card game with AI players, tournaments, and achievement system.',
        image: '/lovable-uploads/3cb44c36-47ff-4cc2-a0f1-49f9b5c07213.png',
        hasVideo: false
      },
      {
        title: 'Snake & Ladder Deluxe',
        description: 'Enhanced version of the classic board game with power-ups and themes.',
        image: '/lovable-uploads/06441f01-1582-4cdb-9ab7-2a6c8a7b7dfc.png',
        hasVideo: false
      }
    ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                <Popover>
                  <PopoverTrigger asChild>
                    <motion.button
                      className="inline-flex items-center gap-2 text-cyber-blue hover:text-white transition-colors font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      View Projects
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </PopoverTrigger>
                  <PopoverContent className="w-96 max-h-96 overflow-y-auto bg-gray-900/95 backdrop-blur-sm border-gray-700 z-50">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                      </div>
                      
                      <div className="space-y-4">
                        {project.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="border border-gray-700 rounded-lg p-4 bg-gray-800/50">
                            <div className="flex gap-4">
                              <div className="relative w-20 h-20 flex-shrink-0">
                                <img
                                  src={detail.image}
                                  alt={detail.title}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                                {detail.hasVideo && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                    <Play className="w-6 h-6 text-white" />
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <h5 className="text-white font-semibold mb-2">{detail.title}</h5>
                                <p className="text-gray-400 text-sm leading-relaxed">{detail.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
