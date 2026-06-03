import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-magenta-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-dark-border"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-magenta-400">#</span> My Journey
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am an analytically driven Computer Science undergraduate at Chandigarh University with a strong interest in product analytics, backend systems, and data-driven decision making.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am comfortable working with Python-based applications and analyzing user behavior to generate insights that improve product performance. My experience spans building full-stack and real-time systems with a focus on performance, data modeling, and user-centric design.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-dark-card/50 p-4 rounded-xl border border-magenta-500/10">
                <h4 className="text-3xl font-bold text-magenta-400 mb-1">250+</h4>
                <p className="text-sm text-gray-400">DSA Problems Solved</p>
              </div>
              <div className="bg-dark-card/50 p-4 rounded-xl border border-magenta-500/10">
                <h4 className="text-3xl font-bold text-magenta-400 mb-1">3rd</h4>
                <p className="text-sm text-gray-400">Math Quiz Competition</p>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="glass p-8 rounded-2xl border border-dark-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-600/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-magenta-400" /> Experience
              </h3>
              
              <div className="relative pl-6 border-l border-magenta-500/30 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-dark-bg border-2 border-magenta-400 rounded-full"></div>
                  <h4 className="text-xl font-bold text-white">Associate Analyst Intern</h4>
                  <p className="text-magenta-300 mb-2">Renu Sharma Foundation • Remote</p>
                  <p className="text-sm text-gray-400 mb-3">2020</p>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    <li>Performed exploratory analysis and supported data-driven decisions</li>
                    <li>Collaborated with stakeholders and presented structured insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass p-8 rounded-2xl border border-dark-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-600/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-magenta-400" /> Education
              </h3>
              
              <div className="relative pl-6 border-l border-magenta-500/30 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-dark-bg border-2 border-magenta-400 rounded-full"></div>
                  <h4 className="text-xl font-bold text-white">B.E. Computer Science and Engineering</h4>
                  <p className="text-magenta-300 mb-1">Chandigarh University, Punjab</p>
                  <p className="text-sm text-gray-400 mb-2">Aug 2023 - Jun 2027 (Expected) • CGPA: 7.56/10</p>
                  <p className="text-xs text-gray-500">Coursework: Statistics, Data Structures and Algorithms, Database Systems</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-dark-bg border-2 border-gray-600 rounded-full"></div>
                  <h4 className="text-lg font-bold text-white">Class XII (Secondary Education)</h4>
                  <p className="text-gray-300 mb-1">Army Public School, Yol, Himachal Pradesh</p>
                  <p className="text-sm text-gray-400">Apr 2021 - Mar 2022 • 87.4%</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-dark-bg border-2 border-gray-600 rounded-full"></div>
                  <h4 className="text-lg font-bold text-white">Class X (Secondary Education)</h4>
                  <p className="text-gray-300 mb-1">Army Public School, Yol, Himachal Pradesh</p>
                  <p className="text-sm text-gray-400">Apr 2019 - Mar 2020 • 88.8%</p>
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
