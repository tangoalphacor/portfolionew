import { Suspense } from 'react';
import { motion } from 'framer-motion';

// Components
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import VisitorCounter from './components/VisitorCounter.tsx';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      {/* Professional Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-slate-900/10 pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <div className="space-y-0">
            <section id="home" className="relative">
              <Hero />
            </section>
            
            {/* Professional Section divider */}
            <div className="professional-divider"></div>
            
            <section id="about" className="relative section-bg-secondary">
              <About />
            </section>
            
            {/* Professional Section divider */}
            <div className="professional-divider"></div>
            
            <section id="experience" className="relative section-bg-primary">
              <Experience />
            </section>
            
            {/* Professional Section divider */}
            <div className="professional-divider"></div>
            
            <section id="projects" className="relative section-bg-tertiary">
              <Projects />
            </section>
            
            {/* Professional Section divider */}
            <div className="professional-divider"></div>
            
            <section id="skills" className="relative section-bg-secondary">
              <Skills />
            </section>
            
            {/* Professional Section divider */}
            <div className="professional-divider"></div>
            
            <section id="education" className="relative section-bg-primary">
              <Education />
            </section>
            
            {/* Professional Section divider */}
            <div className="professional-divider"></div>
            
            <section id="contact" className="relative section-bg-tertiary">
              <Contact />
            </section>
          </div>
        </Suspense>
      </main>
      
      {/* Professional floating particles background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Visitor Counter */}
      <VisitorCounter />
    </div>
  );
}

export default App;
