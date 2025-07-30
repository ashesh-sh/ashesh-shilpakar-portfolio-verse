
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Smartphone, GraduationCap, ExternalLink, X, Play } from 'lucide-react';
import { useState } from 'react';

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
        title: 'VR Battleship - Multiplayer',
        description: 'VR multiplayer battle ship game built using Unity and Photon. Learnt about multiplayer game development, AI programming and optimization tricks for VR.',
        video: '/battleShip.mp4',
        hasVideo: true
      },
      {
        title: 'Shelter in Place',
        description: 'Shelter in Place is an open-ended virtual reality game in which users are stuck indefinitely in a virtual mansion. With no escape, the only thing for the player to do is explore more than 15 rooms containing mini-games that can provide hours of entertainment for all interests and ages.',
        image: '/lovable-uploads/a961e910-0d50-4c47-b124-5f9da41b22db.png',
        hoverImages: [
          '/lovable-uploads/415b23f0-c198-4641-828f-3e1fa1e96ebb.png',
          '/lovable-uploads/ecccf7ca-dcd6-49a7-930d-ccba30f36c33.png',
          '/lovable-uploads/04281d35-b00a-4c50-9ffe-1f4fe3c07d9e.png'
        ],
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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<{[key: string]: number}>({});

  const handleProjectClick = (projectTitle: string) => {
    setSelectedProject(selectedProject === projectTitle ? null : projectTitle);
  };

  const selectedProjectData = projects.find(p => p.title === selectedProject);

  const handleImageHover = (detailTitle: string, hoverImages?: string[]) => {
    if (hoverImages && hoverImages.length > 0) {
      const currentIndex = hoveredImageIndex[detailTitle] || 0;
      const nextIndex = (currentIndex + 1) % hoverImages.length;
      setHoveredImageIndex(prev => ({
        ...prev,
        [detailTitle]: nextIndex
      }));
    }
  };

  const handleImageLeave = (detailTitle: string) => {
    setHoveredImageIndex(prev => ({
      ...prev,
      [detailTitle]: 0
    }));
  };

  const getCurrentImage = (detail: any) => {
    if (detail.hoverImages && hoveredImageIndex[detail.title] !== undefined) {
      const index = hoveredImageIndex[detail.title];
      return detail.hoverImages[index] || detail.image;
    }
    return detail.image;
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
              <div className={`bg-gray-900/50 backdrop-blur-sm border rounded-xl p-8 h-full transition-all duration-300 glow-border ${
                selectedProject === project.title 
                  ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                  : 'border-gray-800 hover:border-cyan-400/30'
              }`}>
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

                <motion.button
                  onClick={() => handleProjectClick(project.title)}
                  className="inline-flex items-center gap-2 text-cyber-blue hover:text-white transition-colors font-semibold"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedProject === project.title ? 'Hide Projects' : 'View Projects'}
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width dropdown panel */}
        <AnimatePresence mode="wait">
          {selectedProject && selectedProjectData && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0.0, 0.2, 1],
                height: { duration: 0.4 }
              }}
              className="w-full overflow-hidden"
            >
              <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <motion.h4 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold text-white"
                  >
                    {selectedProjectData.title}
                  </motion.h4>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-3 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedProjectData.details.map((detail, detailIndex) => (
                    <motion.div 
                      key={detailIndex} 
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: detailIndex * 0.1,
                        ease: [0.4, 0.0, 0.2, 1]
                      }}
                      className="border border-gray-700 rounded-xl p-6 bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10"
                    >
                      <div className="flex gap-6">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="relative w-32 h-32 flex-shrink-0"
                          onMouseEnter={() => handleImageHover(detail.title, detail.hoverImages)}
                          onMouseLeave={() => handleImageLeave(detail.title)}
                        >
                          {detail.video ? (
                            <video
                              src={detail.video}
                              className="w-full h-full object-cover rounded-lg shadow-lg"
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <motion.img
                              src={getCurrentImage(detail)}
                              alt={detail.title}
                              className="w-full h-full object-cover rounded-lg shadow-lg"
                              transition={{ duration: 0.3 }}
                            />
                          )}
                          {detail.hasVideo && !detail.video && (
                            <motion.div 
                              whileHover={{ scale: 1.1 }}
                              className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg cursor-pointer"
                            >
                              <Play className="w-10 h-10 text-cyan-400" />
                            </motion.div>
                          )}
                        </motion.div>
                        <div className="flex-1">
                          <h5 className="text-white font-bold text-xl mb-4">{detail.title}</h5>
                          <p className="text-gray-300 leading-relaxed text-base">{detail.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
