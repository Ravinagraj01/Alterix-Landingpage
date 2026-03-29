import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const creators = [
    {
      emoji: '🎮',
      title: 'Gaming creators',
      description: 'Tired of long VOD edits. Hours of gameplay condensed into minutes, your way.'
    },
    {
      emoji: '🧳',
      title: 'Travel vloggers',
      description: 'Hours of B-roll that needs your signature touch. No more manual sorting.'
    },
    {
      emoji: '💼',
      title: 'Business/edu creators',
      description: 'Consistent content without the editing marathon. Your professional style, automated.'
    },
    {
      emoji: '🎤',
      title: 'Podcast video editors',
      description: 'Same workflow, different episode. Let us handle the repetitive parts.'
    },
    {
      emoji: '🏋️',
      title: 'Fitness creators',
      description: 'Repetitive content structures that need your unique energy and pacing.'
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          <span className="text-neon-yellow">WHO THIS IS FOR</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(253, 224, 71, 0.2)",
                y: -5
              }}
              className="bg-medium-gray rounded-lg p-6 border border-gray-700 hover:border-neon-yellow transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{creator.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {creator.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {creator.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Waveform Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-center space-x-1">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  height: [20, 40, 60, 40, 20],
                  opacity: [0.3, 0.8, 1, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
                className="w-1 bg-neon-pink rounded-full"
                style={{ minHeight: '20px' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
