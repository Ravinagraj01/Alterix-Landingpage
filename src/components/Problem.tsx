import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const problems = [
    {
      emoji: '😮‍💨',
      title: 'You spend 6–10 hrs editing a 10 min video',
      description: 'The grind never stops. One video takes your entire day.'
    },
    {
      emoji: '✂️',
      title: "You've explained your style to 3 different editors. None got it.",
      description: 'They try, but they don\'t see what you see. They don\'t feel your rhythm.'
    },
    {
      emoji: '🔁',
      title: 'You post less because editing kills your momentum',
      description: 'The creative energy dies in the timeline. Your audience waits. You wait.'
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
          <span className="text-neon-yellow">THE BRUTAL TRUTH</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-medium-gray rounded-lg p-8 border border-gray-700 hover:border-neon-yellow transition-all duration-300"
            >
              <div className="text-4xl mb-4">{problem.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
