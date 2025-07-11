import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = {
    "Programming Languages": [
      { name: "JavaScript", level: 90, category: "frontend", icon: "🟨" },
      { name: "TypeScript", level: 85, category: "frontend", icon: "🔷" },
      { name: "Python", level: 88, category: "backend", icon: "🐍" },
      { name: "C/C++", level: 80, category: "embedded", icon: "⚡" },
      { name: "C#", level: 75, category: "backend", icon: "🔷" },
      { name: "SQL", level: 85, category: "database", icon: "🗄️" }
    ],
    "Frameworks & Libraries": [
      { name: "React", level: 90, category: "frontend", icon: "⚛️" },
      { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
      { name: "Express", level: 80, category: "backend", icon: "🚀" },
      { name: "Redux", level: 85, category: "frontend", icon: "🔄" },
      { name: "Flask", level: 75, category: "backend", icon: "🌶️" },
      { name: "Material-UI", level: 80, category: "frontend", icon: "🎨" }
    ],
    "Tools & Technologies": [
      { name: "Git", level: 90, category: "devops", icon: "📝" },
      { name: "Docker", level: 75, category: "devops", icon: "🐳" },
      { name: "CI/CD", level: 80, category: "devops", icon: "🔄" },
      { name: "MATLAB/Simulink", level: 85, category: "embedded", icon: "📊" },
      { name: "MongoDB", level: 80, category: "database", icon: "🍃" },
      { name: "REST APIs", level: 90, category: "backend", icon: "🔗" }
    ],
    "Specialized Skills": [
      { name: "Machine Learning", level: 80, category: "ai", icon: "🤖" },
      { name: "Embedded Systems", level: 85, category: "embedded", icon: "🔧" },
      { name: "Process Automation", level: 90, category: "automation", icon: "⚙️" },
      { name: "PCB Design", level: 70, category: "embedded", icon: "🔌" },
      { name: "OutSystems", level: 75, category: "lowcode", icon: "📱" },
      { name: "Project Management", level: 85, category: "management", icon: "📋" }
    ]
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      frontend: "from-blue-500 to-cyan-500",
      backend: "from-green-500 to-emerald-500",
      database: "from-purple-500 to-violet-500",
      embedded: "from-orange-500 to-red-500",
      devops: "from-gray-500 to-slate-500",
      ai: "from-pink-500 to-rose-500",
      automation: "from-yellow-500 to-amber-500",
      lowcode: "from-indigo-500 to-blue-600",
      management: "from-teal-500 to-cyan-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section className="section-padding section-bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl float-slow"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl float-medium"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-2xl float-fast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 heading-underline">
            Technical Skills
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, embedded systems, 
            automation, and emerging technologies.
          </p>
        </motion.div>

        <div className="space-y-20">
          {Object.entries(skillCategories).map(([categoryName, skills], categoryIndex) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-10 hover-lift animated-border"
            >
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(skills[0].category)} rounded-2xl flex items-center justify-center animate-pulse-glow`}>
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      {categoryName === 'Programming Languages' ? (
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      ) : categoryName === 'Frameworks & Libraries' ? (
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                      ) : categoryName === 'Tools & Technologies' ? (
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      ) : (
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {categoryName}
                  </h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-subtle rounded-2xl p-6 hover-lift group relative overflow-hidden"
                  >
                    {/* Skill icon and name */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} text-white shadow-lg`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill progress bar */}
                    <div className="skill-bar mb-4">
                      <motion.div
                        className={`skill-progress bg-gradient-to-r ${getCategoryColor(skill.category)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 2, delay: skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Skill level indicator */}
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Proficiency</span>
                      <span className="font-medium">
                        {skill.level >= 90 ? 'Expert' : 
                         skill.level >= 80 ? 'Advanced' : 
                         skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-strong rounded-3xl p-10 hover-lift animated-border">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Soft Skills & Languages</h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Strong Communication", color: "from-blue-500 to-cyan-500", icon: "💬" },
                { name: "Team Collaboration", color: "from-purple-500 to-pink-500", icon: "🤝" }, 
                { name: "Project Management", color: "from-green-500 to-teal-500", icon: "📋" },
                { name: "Problem Solving", color: "from-orange-500 to-red-500", icon: "🧩" },
                { name: "Reliability & Flexibility", color: "from-indigo-500 to-purple-500", icon: "⚖️" },
                { name: "English (C1)", color: "from-yellow-500 to-orange-500", icon: "🇬🇧" },
                { name: "German (A2)", color: "from-pink-500 to-rose-500", icon: "🇩🇪" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-subtle rounded-xl p-5 hover-lift group cursor-default text-center"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className={`font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
