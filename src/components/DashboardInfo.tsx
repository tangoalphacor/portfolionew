import React from 'react';
import { motion } from 'framer-motion';

interface DashboardInfoProps {
  className?: string;
}

const DashboardInfo: React.FC<DashboardInfoProps> = ({ className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`fixed top-24 right-6 z-40 space-y-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Status Panel */}
      <motion.div
        className="floating-info px-6 py-4 rounded-xl w-64"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: -5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-400">Current Status</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full dashboard-pulse"></div>
        </div>
        <div className="text-white font-bold text-lg">Application Developer</div>
        <div className="text-blue-400 text-sm">@ Infineon Technologies</div>
        <div className="text-gray-500 text-xs mt-1">Germany Office • Remote Capable</div>
      </motion.div>

      {/* Location Panel */}
      <motion.div
        className="floating-info px-6 py-4 rounded-xl w-64"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: -5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-400">Location</h3>
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-white font-bold">Germany</div>
        <div className="text-gray-400 text-sm">Working at Infineon Technologies</div>
        <div className="text-gray-500 text-xs mt-1">CET/CEST Timezone</div>
      </motion.div>

      {/* Quick Stats Panel */}
      <motion.div
        className="floating-info px-6 py-4 rounded-xl w-64"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: -5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-400">Quick Stats</h3>
          <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div className="text-white font-bold text-lg">3+</div>
            <div className="text-gray-400 text-xs">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-lg">5+</div>
            <div className="text-gray-400 text-xs">Featured Projects</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-lg">8+</div>
            <div className="text-gray-400 text-xs">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-lg">98%</div>
            <div className="text-gray-400 text-xs">Success Rate</div>
          </div>
        </div>
      </motion.div>

      {/* Skills Preview Panel */}
      <motion.div
        className="floating-info px-6 py-4 rounded-xl w-64"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: -5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-400">Top Skills</h3>
          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="space-y-2">
          {[
            { skill: 'React/TypeScript', level: 95 },
            { skill: 'Industrial Automation', level: 90 },
            { skill: 'Embedded Systems', level: 88 },
            { skill: 'Process Optimization', level: 85 }
          ].map(({ skill, level }) => (
            <div key={skill} className="text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">{skill}</span>
                <span className="text-blue-400">{level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardInfo;
