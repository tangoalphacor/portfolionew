import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate Application Developer at <span className="text-blue-400 font-semibold">Infineon Technologies</span> with expertise in 
            full-stack development, process automation, and embedded systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Currently working as an <span className="text-blue-400 font-semibold">Application Developer</span> at 
                  <span className="text-blue-400 font-semibold"> Infineon Technologies</span>, where I develop and maintain 
                  applications to analyze delta changes in preassembly processes, automate data processing, and enhance production efficiency.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Previously gained valuable experience at <span className="text-purple-400 font-semibold">Guidehouse India</span> as a 
                  Technology Consultant, working on data analysis, automation solutions, and client-focused technology implementations.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Current Focus</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Pursuing my <span className="text-purple-400 font-semibold">Master's in Electrical and Microsystems Engineering</span> at 
                OTH Regensburg while contributing to innovative projects at Infineon, combining academic knowledge with real-world industrial applications.
              </p>
            </div>
          </motion.div>

          {/* Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Technical Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
                  { category: 'Backend', skills: ['Node.js', 'Python', 'Express', 'MongoDB'] },
                  { category: 'Embedded', skills: ['Arduino', 'Raspberry Pi', 'IoT', 'Sensors'] },
                  { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">{item.category}</h4>
                    <ul className="space-y-1">
                      {item.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Industry Experience</span>
                  <span className="text-blue-400 font-semibold">2+ Years</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="text-green-400 font-semibold">15+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Technologies Mastered</span>
                  <span className="text-purple-400 font-semibold">20+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
