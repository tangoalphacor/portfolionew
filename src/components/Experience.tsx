import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Working Student Application Developer",
      company: "Infineon Technologies",
      period: "February 2025 - Present",
      location: "Regensburg, Germany",
      current: true,
      description: [
        "Developed and maintained applications to analyse delta changes in preassembly processes",
        "Automated data processing and visualization to enhance production efficiency",
        "Collaborated with cross-functional teams to implement software solutions for process optimization"
      ]
    },
    {
      title: "Software Developer",
      company: "Guidehouse India",
      period: "January 2023 - January 2024",
      location: "Remote",
      description: [
        "Developed and optimized software tools using JavaScript and Node.js for data processing and real-time performance tracking",
        "Collaborated in cross-functional teams, ensuring project adherence to specifications, timelines, and rigorous quality standards",
        "Enhanced project documentation and leveraged Git for version control and CI/CD processes"
      ]
    },
    {
      title: "STEM Trainer",
      company: "Unique World Robotics",
      period: "June 2022 - December 2022",
      location: "Kerala, India",
      description: [
        "Delivered hands-on training on embedded systems, circuit design, and testing, specializing in microcontroller programming",
        "Supervised student projects on sensor-based systems and PCB development",
        "Guided translation of theoretical knowledge into real-world applications"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-black/30 to-purple-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A journey through challenging roles in application development, 
            automation, and embedded systems across diverse industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10 shadow-lg">
                  {exp.current && (
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div className="glass rounded-2xl p-8 card-hover h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-blue-400 text-lg md:text-xl font-semibold mb-1">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-2">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <div className="flex items-center justify-end">
                            <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                              Current
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {exp.description.map((desc, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start group"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                          <p className="text-gray-300 leading-relaxed text-base md:text-lg">{desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for timeline */}
                <div className="hidden lg:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
