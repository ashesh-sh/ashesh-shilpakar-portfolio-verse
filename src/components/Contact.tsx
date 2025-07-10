
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Phone } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ashesh.sh777@gmail.com',
    href: 'mailto:ashesh.sh777@gmail.com',
    color: 'hover:text-cyber-blue'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977-9841271784',
    href: 'tel:+9779841271784',
    color: 'hover:text-electric-green'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashesh-shilpakar',
    href: 'https://linkedin.com/in/ashesh-shilpakar',
    color: 'hover:text-blue-400'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ashesh-shilpakar',
    href: 'https://github.com/ashesh-shilpakar',
    color: 'hover:text-gray-300'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Suryabinayak, Bhaktapur, Nepal',
    href: '#',
    color: 'hover:text-neon-purple'
  }
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-black/40 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on innovative game projects or discuss immersive technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full glow-border hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-300">
                    <link.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-cyber-blue transition-colors">
                      {link.label}
                    </h3>
                    <p className={`text-gray-400 transition-colors ${link.color}`}>
                      {link.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-neon-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            onClick={() => window.open('mailto:ashesh.sh777@gmail.com', '_blank')}
          >
            <Send className="w-5 h-5" />
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
