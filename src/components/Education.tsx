import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  type: 'education' | 'certification';
  status?: 'current' | 'completed';
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Master of Engineering: Electrical and Microsystems Engineering",
      institution: "OTH Regensburg, Germany",
      period: "March 2024 - Present",
      location: "Regensburg, Germany",
      type: "education",
      status: "current"
    },
    {
      degree: "Certified Full-Stack Developer",
      institution: "ICT Academy Kerala",
      period: "March 2022 - December 2023",
      location: "Kerala, India",
      type: "certification",
      status: "completed"
    },
    {
      degree: "Bachelor of Engineering (EEE) - Electrical Engineering & Electronics",
      institution: "APJ Abdul Kalam Technological University of Kerala, India",
      period: "April 2018 - March 2022",
      location: "Kerala, India",
      type: "education",
      status: "completed"
    }
  ];

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
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Academic foundation and professional certifications that shape 
            my technical expertise and innovative approach to engineering challenges.
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        item.type === 'education' 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}>
                        {item.type === 'education' ? (
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                          {item.degree}
                        </h3>
                        <p className="text-blue-400 font-semibold text-lg mb-2">
                          {item.institution}
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                            {item.period}
                          </span>
                          <span>•</span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            </svg>
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.status === 'current' && (
                      <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        Current
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-sm border font-medium ${
                      item.type === 'education' 
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                    }`}>
                      {item.type === 'education' ? 'Education' : 'Certification'}
                    </span>
                  </div>
                </div>

                {/* Additional details for specific items */}
                {item.degree.includes("Master") && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base">
                        Specializing in electrical and microsystems engineering with focus on 
                        automation, signal processing, and embedded system design. Currently 
                        applying theoretical knowledge in real-world industrial applications at Infineon.
                      </p>
                    </div>
                  </div>
                )}

                {item.degree.includes("Full-Stack") && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base">
                        Comprehensive certification covering modern web development technologies, 
                        database management, and software engineering best practices. 
                        Practical training in MEAN/MERN stack development.
                      </p>
                    </div>
                  </div>
                )}

                {item.degree.includes("Bachelor") && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base">
                        Strong foundation in electrical engineering principles, circuit design, 
                        power systems, and electronics. Developed analytical thinking and 
                        problem-solving skills essential for modern engineering challenges.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
