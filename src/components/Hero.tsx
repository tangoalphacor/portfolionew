import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import DashboardInfo from './DashboardInfo';

const FloatingGeometry: React.FC = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#1d4ed8"
        attach="material"
        distort={0.2}
        speed={1.0}
        roughness={0.2}
        metalness={0.6}
      />
    </Sphere>
  );
};

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Dashboard Info Panel */}
      <DashboardInfo className="hidden lg:block" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <Canvas 
          camera={{ position: [0, 0, 5] }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={<Html center><div className="text-slate-200 text-lg">Loading 3D Scene...</div></Html>}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.6} color="#3b82f6" />
            <FloatingGeometry />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.2}
              enableDamping={true}
              dampingFactor={0.1}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Professional Status */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="status-badge inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-blue-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 dashboard-pulse"></div>
              Currently at Infineon Technologies
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-100 mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Abhinav Kannan
              </span>
            </h1>
          </motion.div>

          {/* Role & Company */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Application Developer
            </h2>
            <p className="text-lg md:text-xl text-blue-400 font-medium">
              @ Infineon Technologies, Germany
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Developing innovative applications at <span className="text-blue-400 font-semibold">Infineon Technologies Germany</span>, 
            specializing in <span className="text-purple-400 font-semibold">industrial automation</span>, 
            <span className="text-orange-400 font-semibold"> process optimization</span>, and 
            <span className="text-cyan-400 font-semibold"> embedded systems engineering</span>
          </motion.p>

          {/* Key Skills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { skill: 'React & TypeScript', color: 'from-blue-500 to-blue-600' },
              { skill: 'Node.js & Python', color: 'from-green-500 to-green-600' },
              { skill: 'Embedded Systems', color: 'from-purple-500 to-purple-600' },
              { skill: 'Process Automation', color: 'from-orange-500 to-orange-600' },
              { skill: 'Machine Learning', color: 'from-pink-500 to-pink-600' },
            ].map(({ skill, color }, index) => (
              <motion.span
                key={skill}
                className={`px-4 py-2 bg-gradient-to-r ${color} bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 text-white`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              className="cta-button-primary group px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 glass-subtle"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer hover:border-blue-400 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ scaleY: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
