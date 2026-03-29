import React from 'react';
import { motion } from 'framer-motion';

const Differentiator: React.FC = () => {
  const comparison = [
    {
      category: 'Templates',
      otherAI: 'Generic templates',
      reelMind: 'Learns your personal style'
    },
    {
      category: 'Editing',
      otherAI: 'One-size-fits-all cuts',
      reelMind: 'Matches your pacing & rhythm'
    },
    {
      category: 'Time',
      otherAI: 'You still edit for hours',
      reelMind: 'First cut ready in minutes'
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-medium-gray rounded-lg p-8 border-l-4 border-neon-yellow max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4">
              "Every AI video tool gives you a generic edit. We give you YOUR edit — because we learned from YOU."
            </blockquote>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-dark-gray rounded-lg overflow-hidden border border-gray-700"
        >
          <div className="grid md:grid-cols-3">
            <div className="p-6 bg-medium-gray border-r border-gray-700">
              <h3 className="text-lg font-bold text-gray-400 mb-4">Feature</h3>
            </div>
            <div className="p-6 bg-medium-gray border-r border-gray-700">
              <h3 className="text-lg font-bold text-red-500 mb-4">Other AI tools</h3>
            </div>
            <div className="p-6 bg-medium-gray">
              <h3 className="text-lg font-bold text-neon-yellow mb-4">ReelMind</h3>
            </div>
          </div>

          {comparison.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 border-t border-gray-700"
            >
              <div className="p-6 bg-dark-gray">
                <div className="text-gray-400 font-medium">{item.category}</div>
              </div>
              <div className="p-6 bg-dark-gray border-r border-gray-700">
                <div className="text-red-400">{item.otherAI}</div>
              </div>
              <div className="p-6 bg-dark-gray">
                <div className="text-neon-yellow font-medium">{item.reelMind}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Glitch Effect Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block">
            <div className="glitch-text text-3xl font-black" data-text="NOT ANOTHER AI TOOL">
              NOT ANOTHER AI TOOL
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiator;
