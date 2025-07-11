import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'ongoing';
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Preassembly Delta Assessment With Automated Reference",
      description: "Currently developing an automated reference value mapping system via REST API integration with manual override capabilities, dual-reference system support, and grouped UI layout with inline editing.",
      technologies: ["OutSystems", "REST APIs", "JavaScript", "SQL", "AI/ML", "scikit-learn", "Pandas"],
      status: "ongoing",
      category: "Industrial Automation"
    },
    {
      title: "Full-Stack E-commerce Platform (Myntra Clone)",
      description: "Developed a secure, responsive e-commerce site with complete shopping functionality, payment processing, and user management system.",
      technologies: ["React", "Redux", "Material-UI", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      status: "completed",
      category: "Web Development"
    },
    {
      title: "CRM Application",
      description: "Built a comprehensive CRM app with secure authentication, real-time metrics, customizable Kanban board, and full CRUD operations with authorization control.",
      technologies: ["Refine", "TypeScript", "GraphQL", "Ant Design", "Codegen", "Vite"],
      status: "completed",
      category: "Business Application"
    },
    {
      title: "Motor Drive Simulation & Test Field",
      description: "Developed a simulation model of a brushless DC motor (BLDC) drive system to analyze efficiency and thermal performance with comprehensive testing capabilities.",
      technologies: ["MATLAB/Simulink", "Python", "Control Systems"],
      status: "completed",
      category: "Embedded Systems"
    },
    {
      title: "Electric Cycle with PIC Microcontroller",
      description: "Developed an electric cycle control system using PMDC motor, PIC microcontroller, and custom drive circuit with real-time performance monitoring.",
      technologies: ["PIC Microcontroller", "C Programming", "Circuit Design", "Motor Control"],
      status: "completed",
      category: "Embedded Systems"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-black/30 to-blue-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning industrial automation, 
            web development, and embedded systems engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              className="group h-full"
            >
              <div className="glass rounded-2xl p-8 h-full card-hover flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      project.category === 'Industrial Automation' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      project.category === 'Web Development' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      project.category === 'Business Application' ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                      'bg-gradient-to-r from-orange-500 to-red-500'
                    }`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {project.category === 'Industrial Automation' ? (
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                        ) : project.category === 'Web Development' ? (
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        )}
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                      {project.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${
                    project.status === 'ongoing' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {project.status === 'ongoing' && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    )}
                    {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-xs border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 interactive-hover"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/10">
                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
