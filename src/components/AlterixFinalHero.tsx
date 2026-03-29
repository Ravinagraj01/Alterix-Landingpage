import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import SoftAurora from './SoftAurora';
import BorderGlow from './BorderGlow';

const AlterixFinalHero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    youtubeChannel: '',
    editingHours: '',
    biggestFrustration: '',
    wouldPay: '',
    fairPrice: '',
    email: '',
    wantCall: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('🎉 Welcome to the Alterix waitlist!');
      setFormData({
        name: '',
        youtubeChannel: '',
        editingHours: '',
        biggestFrustration: '',
        wouldPay: '',
        fairPrice: '',
        email: '',
        wantCall: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const steps = [
    {
      number: '①',
      title: 'Drop your past 3 videos',
      description: 'We analyse your cuts, pacing, transitions, music timing',
      details: 'Our AI studies every frame, every cut, every transition. It learns your unique editing fingerprint.'
    },
    {
      number: '②',
      title: 'Upload your raw footage',
      description: 'We build a first cut — in your style',
      details: 'Raw footage goes in, your signature style comes out. No generic templates.'
    },
    {
      number: '③',
      title: 'Review, tweak, export',
      description: 'You\'re done in 30 mins instead of 8 hours',
      details: 'Fine-tune the details if you want, but most creators are shocked how close we get.'
    }
  ];

  const creators = [
    { emoji: '🎮', title: 'Gaming creators', description: 'Tired of long VOD edits' },
    { emoji: '🧳', title: 'Travel vloggers', description: 'Hours of B-roll that needs your touch' },
    { emoji: '📹', title: 'Daily vloggers', description: 'Consistent daily content challenges' },
    { emoji: '💼', title: 'Business/edu creators', description: 'Consistent content without the marathon' },
    { emoji: '🎤', title: 'Podcast video editors', description: 'Same workflow, different episode' },
    { emoji: '🏋️', title: 'Fitness creators', description: 'Repetitive content structures' }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black" />

      {/* Header Navigation */}
      <header className="relative z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Alterix Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover"
            />
            <span className="text-white font-semibold text-lg sm:text-xl">Alterix</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
            >
              How It Works
            </a>
            <a
              href="#who-this-is-for"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
            >
              Who This Is For
            </a>
            <a
              href="#waitlist-form"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
            >
              Waitlist
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Soft Aurora Background - Full screen coverage */}
          <div className="fixed inset-0 left-0 top-0 w-full h-full -z-10">
            <div className="absolute inset-0">
              <SoftAurora
                speed={0.6}
                scale={2.5}
                brightness={1.3}
                color1="#00FFFF"  // Bright Cyan
                color2="#FF00FF"  // Bright Magenta
                noiseFrequency={2.5}
                noiseAmplitude={1.0}
                bandHeight={0.4}
                bandSpread={1.0}
                octaveDecay={0.1}
                layerOffset={0}
                colorSpeed={1.0}
                enableMouseInteraction={true}
                mouseInfluence={0.25}
              />
            </div>
          </div>
          
          {/* Content with proper z-index */}
          <div className="relative z-40">
            {/* Central Kinetic Light Visualization */}
            <div className="mb-12">
              <div className="relative w-32 h-32 mx-auto">
                {/* iOS-style glowing orb */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-80" />
                  <div className="absolute w-12 h-12 bg-white rounded-full blur-sm" />
                  <div className="absolute w-6 h-6 bg-blue-300 rounded-full" />
                </motion.div>
                
                {/* Orbiting particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      transform: [
                        `translate(-50%, -50%) rotate(${i * 60}deg) translateX(60px) rotate(-${i * 60}deg)`,
                        `translate(-50%, -50%) rotate(${i * 60 + 360}deg) translateX(60px) rotate(-${i * 60 + 360}deg)`
                      ]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Glitched Headlines */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                YOUR EDITING STYLE.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
                CLONED. PERFECTED. AUTOMATED.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4"
            >
              Upload your raw footage. We study how you edit. Then we do it for you — your cuts, your pacing, your vibe.
            </motion.p>

            {/* iOS-style CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-magenta-600 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 hover:from-cyan-600 hover:to-magenta-700 text-base sm:text-lg lg:text-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 pointer-events-none" />
                <span className="relative z-10">NEED EARLY ACCESS ?</span>
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-base sm:text-lg"
            >
              Join creators on the waitlist
            </motion.p>
          </div>
        </div>

        {/* Problem Section */}
        <div id="problem" className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              THE BRUTAL TRUTH
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <BorderGlow
                key={index}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                fillOpacity={0.5}
              >
                <div style={{ padding: '2em' }}>
                  <div className="text-4xl mb-4">{problem.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                  <p className="text-gray-300">{problem.description}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* How It Works - Enhanced */}
        <div id="how-it-works" className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400">
              YOUR EDITING STYLE.
            </span>
          </motion.h2>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <BorderGlow
                key={index}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                fillOpacity={0.5}
              >
                <div style={{ padding: '1.5em' }}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="text-3xl text-cyan-400 font-bold"
                    >
                      {step.number}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-4 p-4 rounded-xl bg-black/30 border border-white/10"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          {index === 0 && (
                            <>
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center"
                                >
                                  <span className="text-white font-bold text-lg">🧠</span>
                                </motion.div>
                                <span className="text-gray-200 text-sm">Style Learning</span>
                              </div>
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex items-center space-x-2"
                              >
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-12 h-12 bg-gradient-to-r from-magenta-500/20 to-pink-500/20 rounded-full flex items-center justify-center"
                                >
                                  <span className="text-white font-bold text-lg">📊</span>
                                </motion.div>
                                <span className="text-gray-200 text-sm">Pattern Analysis</span>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center"
                              >
                                <span className="text-white font-bold text-lg">🎯</span>
                              </motion.div>
                              <span className="text-gray-200 text-sm">Precision</span>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center"
                                >
                                  <span className="text-white font-bold text-lg">⚡</span>
                                </motion.div>
                                <span className="text-gray-200 text-sm">Smart Cut</span>
                              </div>
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex items-center space-x-2"
                              >
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center overflow-hidden"
                                >
                                  <img 
                                    src="/logo.png" 
                                    alt="Auto Edit" 
                                    className="w-8 h-8 object-cover"
                                  />
                                </motion.div>
                                <span className="text-gray-200 text-sm">Auto Edit</span>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center"
                              >
                                <span className="text-white font-bold text-lg">🎵</span>
                              </motion.div>
                              <span className="text-gray-200 text-sm">Beat Sync</span>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center"
                                >
                                  <span className="text-white font-bold text-lg">✨</span>
                                </motion.div>
                                <span className="text-gray-200 text-sm">Polish</span>
                              </div>
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex items-center space-x-2"
                              >
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center"
                                >
                                  <span className="text-white font-bold text-lg">🚀</span>
                                </motion.div>
                                <span className="text-gray-200 text-sm">Export</span>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center"
                              >
                                <span className="text-white font-bold text-lg">⏱️</span>
                              </motion.div>
                              <span className="text-gray-200 text-sm">Time Saved</span>
                            </>
                          )}
                        </div>
                      </motion.div>
                      {index === 0 && (
                        <>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-cyan-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">🧠 Deep learning</span> studies your editing fingerprint - cuts, transitions, pacing, and music sync patterns.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-magenta-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">📊 Pattern recognition</span> identifies your unique style elements and creates a personalized editing DNA profile.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-blue-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">🎯 Style accuracy</span> ensures every future edit matches your creative vision automatically.
                          </motion.p>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-orange-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">⚡ Intelligent cutting</span> automatically selects the best takes and removes dead air using your timing preferences.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-blue-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">🎬 Style application</span> applies your signature transitions, effects, and pacing to raw footage instantly.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-purple-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">🎵 Beat synchronization</span> aligns cuts and effects to music rhythm automatically.
                          </motion.p>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-green-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">✨ Final polish</span> applies color grading, audio cleanup, and professional finishing touches.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-yellow-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">🚀 One-click export</span> renders in multiple formats optimized for your platform.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-cyan-300 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-white">⏱️ 95% time saved</span> - what used to take 8 hours now takes 30 minutes.
                          </motion.p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div id="who-this-is-for" className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
              WHO THIS IS FOR
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {creators.map((creator, index) => (
              <BorderGlow
                key={index}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                fillOpacity={0.5}
              >
                <div style={{ padding: '1.5em' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-5xl mb-4 filter drop-shadow-lg"
                    style={{
                      textShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(255, 0, 255, 0.2)'
                    }}
                  >
                    {creator.emoji}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{creator.title}</h3>
                  <p className="text-gray-300">{creator.description}</p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-4 flex items-center justify-center space-x-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">✓</span>
                    </motion.div>
                    <span className="text-green-300 text-sm font-medium">Perfect Match</span>
                  </motion.div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* Waitlist Form */}
        <div id="waitlist-form" className="max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 sm:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              JOIN THE WAITLIST
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base"
          >
            Be the first to know when we launch. Early access pricing guaranteed.
          </motion.p>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#060010"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.5}
          >
            <div style={{ padding: '2em' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Name <span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-black/40 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    YouTube channel link (or niche if no channel yet)
                  </label>
                  <input
                    type="url"
                    name="youtubeChannel"
                    value={formData.youtubeChannel}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-black/40 transition-all duration-300 text-sm sm:text-base"
                    placeholder="https://youtube.com/yourchannel"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-gray-300">
                    How many hours/week do you spend editing?
                  </label>
                  <div className="relative">
                    <select
                      name="editingHours"
                      value={formData.editingHours}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 bg-black/30 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-black/40 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-800">Select an option</option>
                      <option value="less-2" className="bg-gray-800">Less than 2</option>
                      <option value="2-5" className="bg-gray-800">2–5</option>
                      <option value="5-10" className="bg-gray-800">5–10</option>
                      <option value="10+" className="bg-gray-800">10+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    What's your biggest editing frustration?
                  </label>
                  <textarea
                    name="biggestFrustration"
                    value={formData.biggestFrustration}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-black/40 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us what drives you crazy..."
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-gray-300">
                    Would you pay for a tool that cuts your edit time by 70%?
                  </label>
                  <div className="relative">
                    <select
                      name="wouldPay"
                      value={formData.wouldPay}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-800">Select an option</option>
                      <option value="yes" className="bg-gray-800">Yes, definitely</option>
                      <option value="maybe" className="bg-gray-800">Maybe, depends on price</option>
                      <option value="not-sure" className="bg-gray-800">Not sure yet</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-gray-300">
                    If yes — what would feel fair per month?
                  </label>
                  <div className="relative">
                    <select
                      name="fairPrice"
                      value={formData.fairPrice}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-800">Select an option</option>
                      <option value="$10" className="bg-gray-800">$10</option>
                      <option value="$20" className="bg-gray-800">$20</option>
                      <option value="$30" className="bg-gray-800">$30</option>
                      <option value="$50+" className="bg-gray-800">$50+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email address <span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-black/40 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Want a 1-on-1 call to share your thoughts? (optional)
                  </label>
                  <input
                    type="text"
                    name="wantCall"
                    value={formData.wantCall}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-black/40 transition-all duration-300"
                    placeholder="Calendly link (optional)"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="relative overflow-hidden w-full rounded-2xl font-semibold transition-all duration-300 py-4 bg-gradient-to-r from-cyan-500 to-magenta-600 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 hover:from-cyan-600 hover:to-magenta-700 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 pointer-events-none" />
                  <span className="relative z-10">
                    {isSubmitting ? 'JOINING WAITLIST...' : 'JOIN THE WAITLIST →'}
                  </span>
                </motion.button>
              </form>
            </div>
          </BorderGlow>
        </div>

        {/* Founder's Note */}
        <div id="founders-note" className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#060010"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.5}
          >
            <div style={{ padding: '2em' }}>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-26 h-26 bg-gradient-to-br from-cyan-500 to-magenta-600 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/logo.png" 
                      alt="Ravi - Founder" 
                      className="w-14 h-14 object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Hey — I'm Ravi</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>I edit videos too and I know how draining it is. Spending 8 hours on a 10-minute video, explaining my style to editors who don't get it, watching my creative energy die in the timeline.</p>
                    <p>I'm building this because I couldn't find a tool that actually understood <span className="text-cyan-400 font-bold">my style</span>. Not generic templates, not one-size-fits-all cuts — but <span className="text-magenta-400 font-bold">my edit</span>.</p>
                    <p>If you've felt the same, I'd love your honest input. This form takes 2 minutes, and your feedback will shape how we build this.</p>
                  </div>
                  <div className="mt-6">
                    <a href="mailto:alterix.in@gmail.com" className="text-magenta-400 hover:text-magenta-300 transition-colors">Email: alterix.in@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default AlterixFinalHero;
