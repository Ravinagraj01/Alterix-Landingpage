import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '①',
      title: 'Drop your past 3 videos',
      description: 'We analyse your cuts, pacing, transitions, music timing',
      details: 'Our AI studies every frame, every cut, every transition. It learns your unique editing fingerprint - the way you time your cuts, how you build tension, where you place music beats, your signature color grading style.'
    },
    {
      number: '②',
      title: 'Upload your raw footage',
      description: 'We build a first cut — in your style',
      details: 'Raw footage goes in, your signature style comes out. We apply everything we learned from your past videos - your pacing, your transitions, your vibe. No generic templates, no one-size-fits-all edits.'
    },
    {
      number: '③',
      title: 'Review, tweak, export',
      description: 'You\'re done in 30 mins instead of 8 hours',
      details: 'Fine-tune the details if you want, but most creators are shocked how close we get. Make minor adjustments, export in your preferred format, and upload. Your audience gets your signature content, you get your life back.'
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          <span className="text-neon-pink">THE MAGIC MOMENT</span>
        </motion.h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="bg-dark-gray rounded-lg border border-gray-700 overflow-hidden cursor-pointer hover:border-neon-pink transition-all duration-300"
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl text-neon-yellow font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: activeStep === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500"
                    >
                      ▼
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-6 bg-medium-gray">
                        <p className="text-gray-300 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Film Strip Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex space-x-2">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="w-12 h-20 bg-dark-gray border border-gray-600 rounded"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
