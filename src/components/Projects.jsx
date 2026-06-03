import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import metroImg from '../assets/Metro-Transit-Routing.png';
import finsightImg from '../assets/Fintech_AI.png';

const projects = [
  {
    title: 'Metro Transit Routing System',
    description: 'Interactive metro route visualization using React and Leaflet. Backend APIs with Node.js and Express for routing data. Enabled route planning and efficient map-based navigation.',
    image: metroImg,
    tags: ['React', 'Node.js', 'Express', 'Leaflet', 'API'],
    link: 'https://metro-transit-routing.vercel.app/',
    github: 'https://github.com/nikhil9verma/Metro-Transit-Routing'
  },
  {
    title: 'FinSight AI Dashboard',
    description: 'AI-driven financial dashboard predicting market trends and providing actionable insights. Built with modern web technologies and real-time data processing.',
    image: finsightImg,
    tags: ['React', 'Data Visualization', 'AI', 'Analytics'],
    github: 'https://github.com/nikhil9verma/Full-Stack-Fintech-Capstone-Project'
  },
  {
    title: 'Event Hub',
    description: 'Full Stack Event Management System. Built a scalable platform with JWT-based authentication, protected routing, and slot allocation logic to prevent overbooking.',
    image: null,
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    github: 'https://github.com/nikhil9verma/Event_Hub'
  },
  
  {
    title: 'Django Tweet Application',
    description: 'Backend-centric Twitter-like web application with authentication, tweet creation, and timeline features using Django ORM.',
    image: null,
    tags: ['Python', 'Django', 'SQLite', 'Backend'],
    github: 'https://github.com/nikhil9verma/Django-Tweet-Project'
  },
  {
    title: 'Full Stack Shopping Platform',
    description: 'E-commerce platform integrating a Gemini API chatbot for user support. Analyzed user interaction flows to identify drop-off points.',
    image: null,
    tags: ['Full Stack', 'Gemini API', 'Analytics', 'E-commerce'],
    github: 'https://github.com/nikhil9verma/Shopping-Website'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-magenta-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-dark-border group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden bg-dark-bg/80 flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${project.image ? 'hidden' : 'flex'}`}
                  style={{ display: project.image ? 'none' : 'flex' }}
                >
                  <FaGithub size={32} className="text-gray-400 mb-3" />
                  <span className="text-magenta-300 font-medium mb-2">{project.title}</span>
                  <a 
                    href={project.github || "https://github.com/nikhil9verma"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-gray-300 hover:text-white bg-dark-card/50 px-3 py-1.5 rounded-full border border-gray-600 hover:border-magenta-500 transition-colors z-10"
                  >
                    View on GitHub
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-tr from-magenta-900/40 to-purple-900/40 opacity-50 mix-blend-overlay"></div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-magenta-500 rounded-full text-white hover:bg-magenta-400 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 z-10">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a href={project.github || "https://github.com/nikhil9verma"} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 z-10">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-magenta-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium text-magenta-300 bg-magenta-900/30 px-2 py-1 rounded-md border border-magenta-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
