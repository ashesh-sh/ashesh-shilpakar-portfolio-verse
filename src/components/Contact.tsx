
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Phone } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ashesh.sh777@gmail.com',
    href: null,
    color: 'text-cyber-blue',
    clickable: false
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977-9841271784',
    href: null,
    color: 'text-electric-green',
    clickable: false
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashesh-shilpakar-ba2185190',
    href: 'https://www.linkedin.com/in/ashesh-shilpakar-ba2185190/',
    color: 'hover:text-blue-400',
    clickable: true
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ashesh-sh',
    href: 'https://github.com/ashesh-sh',
    color: 'hover:text-gray-300',
    clickable: true
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Suryabinayak, Bhaktapur, Nepal',
    href: '#',
    color: 'hover:text-neon-purple',
    clickable: false
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Ready to collaborate on innovative game projects or discuss immersive technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
          {contactLinks.map((link, index) => {
            const Component = link.clickable ? motion.a : motion.div;
            const props = link.clickable 
              ? {
                  href: link.href,
                  target: link.href?.startsWith('http') ? '_blank' : '_self',
                  rel: link.href?.startsWith('http') ? 'noopener noreferrer' : ''
                }
              : {};

            return (
              <Component
                key={link.label}
                {...props}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={link.clickable ? { scale: 1.05, y: -5 } : {}}
                className={link.clickable ? "group cursor-pointer" : "group"}
              >
                <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 h-full glow-border transition-all duration-300 ${
                  link.clickable ? 'hover:border-cyan-400/30' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg transition-all duration-300 ${
                      link.clickable ? 'group-hover:from-cyan-600 group-hover:to-purple-600' : ''
                    }`}>
                      <link.icon className={`w-6 h-6 text-gray-300 transition-colors ${
                        link.clickable ? 'group-hover:text-white' : ''
                      }`} />
                    </div>
                    
                    <div>
                      <h3 className={`font-semibold text-white mb-1 transition-colors ${
                        link.clickable ? 'group-hover:text-cyber-blue' : ''
                      }`}>
                        {link.label}
                      </h3>
                      <p className={`text-gray-400 transition-colors ${link.color}`}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
