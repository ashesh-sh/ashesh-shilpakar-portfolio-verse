
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Avatar className="w-96 h-96 border-4 border-cyber-blue/30 shadow-lg shadow-cyan-400/20">
              <AvatarImage 
                src="/lovable-uploads/06441f01-1582-4cdb-9ab7-2a6c8a7b7dfc.png" 
                alt="Ashesh Shilpakar"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl font-bold bg-gradient-to-r from-cyber-blue to-neon-purple text-white">
                AS
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Ashesh Shilpakar
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Game Engineering Manager & Lead Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Versatile technology enthusiast with over a decade of hands-on experience in VR and XR technologies. 
            Proven ability to manage multiple teams and complex projects concurrently while maintaining high precision and efficiency.
            <br />
            <span className="text-cyber-blue">Based in Bhaktapur, Nepal 🇳🇵</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-neon-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-cyber-blue/30 text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ChevronDown className="w-8 h-8 text-cyber-blue animate-bounce" />
      </motion.div>
    </section>
  );
}
