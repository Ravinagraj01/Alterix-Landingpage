import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-gray-800">
      {/* Background Effects */}
      <div className="aurora-bg opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(253, 224, 71, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://tally.so/r/wA8xG7', '_blank')}
              className="neon-border px-8 py-3 bg-dark-gray text-white font-bold rounded-lg hover:bg-medium-gray transition-all duration-300 text-neon"
            >
              JOIN THE WAITLIST →
            </motion.button>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400"
          >
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-yellow transition-colors"
            >
              Twitter/X
            </a>
            <a
              href="mailto:hello@alterix.io"
              className="hover:text-neon-pink transition-colors"
            >
              hello@alterix.io
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            <p>No spam. Just updates when we're ready.</p>
            <p className="mt-2">© 2024 Alterix. Built with 🎬 and ☕</p>
          </motion.div>

          {/* Brand Name with Glitch */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="text-4xl font-black">
              <span className="glitch-text" data-text="ALTERIX">
                ALTERIX
              </span>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-8 h-8 border border-neon-pink rounded opacity-30 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-10 right-10 w-6 h-6 border border-neon-yellow rounded opacity-30 hidden lg:block"
        />
      </div>
    </footer>
  );
};

export default Footer;
