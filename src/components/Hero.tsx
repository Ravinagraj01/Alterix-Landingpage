import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg" />
      
      {/* Film Grain Overlay */}
      <div className="film-grain" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glitched Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
            <span className="block glitch-text" data-text="YOUR EDITING STYLE.">
              YOUR EDITING STYLE.
            </span>
            <span className="block glitch-text text-neon" data-text="CLONED. PERFECTED. AUTOMATED.">
              CLONED. PERFECTED. AUTOMATED.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Upload your raw footage. We study how you edit. Then we do it for you — your cuts, your pacing, your vibe.
        </motion.p>

        {/* Timeline Scrubber Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="timeline-scrubber h-20 rounded-lg neon-border relative">
            {/* Timeline markers */}
            <div className="absolute inset-0 flex items-center px-4">
              <div className="w-full h-1 bg-gray-700 relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-neon-yellow rounded-full animate-pulse" />
                <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
                <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
                <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
                
                {/* Playhead */}
                <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-0.5 h-8 bg-neon-yellow animate-pulse" />
              </div>
            </div>
            
            {/* Time codes */}
            <div className="absolute bottom-2 left-4 text-xs text-gray-500 font-mono">00:00:00</div>
            <div className="absolute bottom-2 right-4 text-xs text-gray-500 font-mono">00:10:24</div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(253, 224, 71, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="neon-border px-12 py-6 bg-dark-gray text-white font-bold text-xl rounded-lg hover:bg-medium-gray transition-all duration-300 text-neon"
            onClick={() => window.open('https://tally.so/r/wA8xG7', '_blank')}
          >
            I WANT EARLY ACCESS →
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-gray-400 text-lg"
        >
          Join <span className="text-neon-yellow font-bold">000</span> creators on the waitlist
        </motion.p>
      </div>

      {/* Floating Video Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 border-2 border-neon-pink rounded-lg opacity-30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-20 h-20 border-2 border-neon-yellow rounded-lg opacity-30 hidden lg:block"
      />
    </section>
  );
};

export default Hero;
