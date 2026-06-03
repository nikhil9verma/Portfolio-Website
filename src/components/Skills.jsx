import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, BrainCircuit, PenTool } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="text-magenta-400" size={24} />,
    skills: ['Python', 'Java', 'JavaScript']
  },
  {
    title: 'Frameworks',
    icon: <Server className="text-magenta-400" size={24} />,
    skills: ['Spring Boot', 'React', 'Node.js', 'Express', 'Django']
  },
  {
    title: 'Tools & DBs',
    icon: <Database className="text-magenta-400" size={24} />,
    skills: ['PostgreSQL', 'Git', 'OpenCV', 'MediaPipe', 'VS Code', 'Google Maps API']
  },
  {
    title: 'Data & Analytics',
    icon: <BrainCircuit className="text-magenta-400" size={24} />,
    skills: ['Exploratory Data Analysis', 'Trend Analysis', 'Problem Solving']
  },
  {
    title: 'Concepts',
    icon: <PenTool className="text-magenta-400" size={24} />,
    skills: ['DSA', 'DBMS', 'REST APIs', 'System Design', 'Statistics', 'Product Metrics']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-magenta-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass p-6 rounded-2xl border border-dark-border hover:border-magenta-500/50 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-dark-bg rounded-xl border border-magenta-500/20 group-hover:bg-magenta-500/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-dark-bg/80 border border-gray-700/50 rounded-lg group-hover:border-magenta-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
