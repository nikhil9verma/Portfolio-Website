import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="relative z-10 pt-20 pb-10 bg-dark-bg/50 border-t border-magenta-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark-card rounded-full border border-magenta-500/20 text-magenta-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:nikhil9verma9947@gmail.com" className="text-white hover:text-magenta-400 transition-colors">
                    nikhil9verma9947@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark-card rounded-full border border-magenta-500/20 text-magenta-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+917807267903" className="text-white hover:text-magenta-400 transition-colors">
                    +91 7807267903
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark-card rounded-full border border-magenta-500/20 text-magenta-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">Mandi, Himachal Pradesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-dark-border"
          >
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              const subject = `Portfolio Contact from ${name}`;
              const body = `${message}\n\nFrom: ${name} (${email})`;
              window.location.href = `mailto:nikhil9verma9947@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-500 focus:ring-1 focus:ring-magenta-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-500 focus:ring-1 focus:ring-magenta-500 transition-all"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4" 
                  className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-500 focus:ring-1 focus:ring-magenta-500 transition-all resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-magenta-600 hover:bg-magenta-500 text-white font-medium transition-colors shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Nikhil Verma. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/nikhil9verma" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-magenta-400 hover:border-magenta-500/50 transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/account-nikhil9verma/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-magenta-400 hover:border-magenta-500/50 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="https://leetcode.com/u/nikhil9verma/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-magenta-400 hover:border-magenta-500/50 transition-all font-bold text-xs">
              LC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
