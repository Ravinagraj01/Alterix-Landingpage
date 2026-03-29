import React from 'react';
import { motion } from 'framer-motion';

interface iOSGlassCardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  intensity?: 'light' | 'medium' | 'heavy';
}

const iOSGlassCard: React.FC<iOSGlassCardProps> = ({ 
  children, 
  className = '', 
  size = 'medium',
  intensity = 'medium'
}) => {
  const sizeStyles = {
    small: 'p-4 rounded-xl',
    medium: 'p-6 rounded-2xl',
    large: 'p-8 rounded-3xl'
  };

  const intensityStyles = {
    light: 'bg-white/5 backdrop-blur-md border-white/10',
    medium: 'bg-white/10 backdrop-blur-xl border-white/20',
    heavy: 'bg-white/15 backdrop-blur-2xl border-white/30'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        ${sizeStyles[size]}
        ${intensityStyles[intensity]}
        border
        shadow-xl
        ${className}
      `}
    >
      {/* iOS-style glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 shadow-inner pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default iOSGlassCard;
