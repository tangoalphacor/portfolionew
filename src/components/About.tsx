import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section-padding section-bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl float-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl float-fast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-8 heading-underline">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Passionate Application Developer at <span className="text-blue-400 font-semibold text-glow">Infineon Technologies</span> with expertise in 
            full-stack development, process automation, and embedded systems.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Professional Journey Card */}
            <div className="glass-strong rounded-2xl p-8 hover-lift animated-border">
              <div className="flex items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-6 animate-pulse-glow flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Professional Journey</h3>
                  <p className="text-blue-400 text-sm">Building innovative solutions at scale</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <h4 className="text-blue-400 font-semibold text-lg">Current Role</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Application Developer</span> at 
                    <span className="text-blue-400 font-semibold"> Infineon Technologies</span>, developing and maintaining 
                    applications to analyze delta changes in preassembly processes, automate data processing, and enhance production efficiency.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <h4 className="text-purple-400 font-semibold text-lg">Previous Experience</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Technology Consultant</span> at 
                    <span className="text-purple-400 font-semibold"> Guidehouse India</span>, specializing in 
                    data analysis, automation solutions, and client-focused technology implementations.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="glass-strong rounded-2xl p-8 hover-lift animated-border">
              <div className="flex items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-6 animate-pulse-glow flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Current Focus</h3>
                  <p className="text-purple-400 text-sm">Advancing through education & innovation</p>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Pursuing my <span className="text-purple-400 font-semibold">Master's in Electrical and Microsystems Engineering</span> at 
                  <span className="text-white font-semibold"> OTH Regensburg</span> while contributing to innovative projects at Infineon, 
                  combining academic knowledge with real-world industrial applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Technical Expertise Card */}
            <div className="glass-strong rounded-2xl p-8 hover-lift animated-border">
              <div className="flex items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-6 animate-pulse-glow flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Technical Expertise</h3>
                  <p className="text-green-400 text-sm">Full-stack development & embedded systems</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'], color: 'from-blue-500 to-cyan-500', bg: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20' },
                  { category: 'Backend', skills: ['Node.js', 'Python', 'Express', 'MongoDB'], color: 'from-green-500 to-emerald-500', bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/20' },
                  { category: 'Embedded', skills: ['Arduino', 'Raspberry Pi', 'IoT', 'Sensors'], color: 'from-orange-500 to-red-500', bg: 'from-orange-500/10 to-red-500/10', border: 'border-orange-500/20' },
                  { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'], color: 'from-purple-500 to-pink-500', bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20' }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={`glass-subtle rounded-xl p-6 hover:bg-white/10 transition-all duration-300 bg-gradient-to-r ${item.bg} border ${item.border} hover:border-opacity-60`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className={`text-xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.category}
                    </h4>
                    <ul className="space-y-3">
                      {item.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-gray-300 flex items-center group hover:text-white transition-colors duration-200">
                          <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-200`}></div>
                          <span className="font-medium">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Achievements Card */}
            <div className="glass-strong rounded-2xl p-8 hover-lift animated-border">
              <div className="flex items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-6 animate-pulse-glow flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Key Achievements</h3>
                  <p className="text-orange-400 text-sm">Measurable impact & continuous growth</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Industry Experience', value: '2+ Years', color: 'text-blue-400', bg: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20' },
                  { label: 'Projects Completed', value: '5+', color: 'text-green-400', bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/20' },
                  { label: 'Technologies Mastered', value: '8+', color: 'text-purple-400', bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20' }
                ].map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className={`text-center p-6 glass-subtle rounded-xl hover:bg-white/10 transition-all duration-300 bg-gradient-to-r ${achievement.bg} border ${achievement.border} hover:border-opacity-60`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${achievement.color} font-bold text-3xl mb-2 group-hover:scale-110 transition-transform duration-200`}>
                      {achievement.value}
                    </div>
                    <div className="text-gray-300 text-sm font-medium leading-relaxed">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
