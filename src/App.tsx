import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={
                <div className="space-y-0">
                  <section id="home" className="relative">
                    <Hero />
                  </section>
                  
                  {/* Section divider */}
                  <div className="section-divider"></div>
                  
                  <section id="about" className="relative section-bg-secondary">
                    <About />
                  </section>
                  
                  {/* Section divider */}
                  <div className="section-divider"></div>
                  
                  <section id="experience" className="relative section-bg-primary">
                    <Experience />
                  </section>
                  
                  {/* Section divider */}
                  <div className="section-divider"></div>
                  
                  <section id="projects" className="relative section-bg-tertiary">
                    <Projects />
                  </section>
                  
                  {/* Section divider */}
                  <div className="section-divider"></div>
                  
                  <section id="skills" className="relative section-bg-secondary">
                    <Skills />
                  </section>
                  
                  {/* Section divider */}
                  <div className="section-divider"></div>
                  
                  <section id="education" className="relative section-bg-primary">
                    <Education />
                  </section>
                  
                  {/* Section divider */}
                  <div className="section-divider"></div>
                  
                  <section id="contact" className="relative section-bg-tertiary">
                    <Contact />
                  </section>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        
        {/* Floating particles background */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
