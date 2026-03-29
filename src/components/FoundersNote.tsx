import React from 'react';
import { motion } from 'framer-motion';

const FoundersNote: React.FC = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-medium-gray rounded-lg p-8 border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 bg-neon-yellow rounded-full flex items-center justify-center">
                <span className="text-3xl font-black text-dark-gray">🎬</span>
              </div>
            </motion.div>

            {/* Message */}
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-4"
              >
                Hey — I'm Alex
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-300 leading-relaxed"
              >
                <p>
                  I edit videos too and I know how draining it is. Spending 8 hours on a 10-minute video, explaining my style to editors who don't get it, watching my creative energy die in the timeline.
                </p>
                
                <p>
                  I'm building this because I couldn't find a tool that actually understood <span className="text-neon-yellow font-bold">my style</span>. Not generic templates, not one-size-fits-all cuts — but <span className="text-neon-pink font-bold">my edit</span>.
                </p>
                
                <p>
                  If you've felt the same, I'd love your honest input. This form takes 2 minutes, and your feedback will shape how we build this.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-yellow hover:text-yellow-300 transition-colors"
                >
                  @yourusername on Twitter/X
                </a>
                <a
                  href="mailto:alex@alterix.io"
                  className="text-neon-pink hover:text-pink-300 transition-colors"
                >
                  alex@alterix.io
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-block">
            <div className="text-gray-500 font-mono text-sm">
              Built by creators, for creators.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersNote;
