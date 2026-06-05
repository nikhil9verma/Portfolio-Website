import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/Gemini_Generated_Image_vqjdh2vqjdh2vqjd.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-magenta-400 font-medium tracking-wider uppercase text-sm mb-4 block">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Nikhil Verma</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Computer Science undergraduate with a strong interest in backend systems, product analytics, and scalable applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-magenta-600 hover:bg-magenta-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] w-full sm:w-auto text-center">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-gray-600 hover:border-magenta-400 text-gray-300 hover:text-magenta-400 font-medium transition-all w-full sm:w-auto text-center">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6 mt-10 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/nikhil8verma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-magenta-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/account-nikhil9verma/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-magenta-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:nikhil9verma9947@gmail.com" className="text-gray-400 hover:text-magenta-400 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          className="flex-1 flex justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-magenta-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-magenta-500/30 overflow-hidden p-2 glass">
              <img 
                src={profileImg} 
                alt="Nikhil Verma" 
                className=" w-full  object-[center_50%] object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://ui-avatars.com/api/?name=Nikhil+Verma&background=db2777&color=fff&size=512";
                }}
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -top-1 -right-0.5 glass px-4 py-2 rounded-full border border-magenta-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span className="text-xs font-semibold text-magenta-300">Backend Dev</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -left-14 glass px-4 py-2 rounded-full border border-magenta-500/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-xs font-semibold text-magenta-300">AI Engineer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
