
import { ThreeBackground } from '@/components/ThreeBackground';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ThreeBackground />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Ashesh Shilpakar. Crafted with passion for immersive experiences.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Built with React, Three.js, and modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
