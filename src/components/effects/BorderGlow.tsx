import React from 'react';
import { motion } from 'framer-motion';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'violet' | 'blue' | 'green' | 'pink';
  intensity?: 'low' | 'medium' | 'high';
}

const BorderGlow: React.FC<BorderGlowProps> = ({ 
  children, 
  className = '', 
  glowColor = 'violet',
  intensity = 'medium'
}) => {
  const glowColors = {
    violet: 'rgba(139, 92, 246',
    blue: 'rgba(59, 130, 246',
    green: 'rgba(34, 197, 94',
    pink: 'rgba(236, 72, 153'
  };

  const intensityValues = {
    low: { opacity: 0.3, blur: 'blur-md' },
    medium: { opacity: 0.5, blur: 'blur-lg' },
    high: { opacity: 0.7, blur: 'blur-xl' }
  };

  const color = glowColors[glowColor];
  const { opacity, blur } = intensityValues[intensity];

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${blur} pointer-events-none`}
        style={{
          background: `linear-gradient(45deg, 
            ${color}, ${opacity}) 0%, 
            transparent 30%, 
            transparent 70%, 
            ${color}, ${opacity}) 100%)`,
        }}
        animate={{
          opacity: [opacity * 0.5, opacity, opacity * 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: `
            0 0 20px ${color}, ${opacity}),
            0 0 40px ${color}, ${opacity * 0.5}),
            inset 0 0 20px ${color}, ${opacity * 0.3})
          `,
        }}
        animate={{
          opacity: [opacity * 0.7, opacity, opacity * 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
