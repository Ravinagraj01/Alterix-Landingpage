import React from 'react';
import { motion } from 'framer-motion';

interface SoftAuroraProps {
  className?: string;
  colors?: string[];
  intensity?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
}

const SoftAurora: React.FC<SoftAuroraProps> = ({ 
  className = '',
  colors = ['rgba(139, 92, 246, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(236, 72, 153, 0.3)'],
  intensity = 'medium',
  speed = 'medium'
}) => {
  const intensityValues = {
    low: { scale: 1, opacity: 0.3 },
    medium: { scale: 1.2, opacity: 0.5 },
    high: { scale: 1.5, opacity: 0.7 }
  };

  const speedValues = {
    slow: { duration: 20, ease: "easeInOut" as const },
    medium: { duration: 15, ease: "easeInOut" as const },
    fast: { duration: 10, ease: "easeInOut" as const }
  };

  const { scale, opacity } = intensityValues[intensity];
  const { duration, ease } = speedValues[speed];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Multiple aurora layers */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, 
              ${colors[index % colors.length]} 0%, 
              transparent 50%)`,
            width: `${400 + index * 100}px`,
            height: `${300 + index * 80}px`,
            left: `${20 + index * 15}%`,
            top: `${10 + index * 20}%`,
            opacity,
          }}
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0],
            scale: [scale, scale * 1.1, scale],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: duration + index * 2,
            repeat: Infinity,
            ease,
            delay: index * 1,
          }}
        />
      ))}

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            ${colors[0]} 0%, 
            transparent 25%, 
            ${colors[1]} 50%, 
            transparent 75%, 
            ${colors[2]} 100%)`,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: duration / 2,
          repeat: Infinity,
          ease,
        }}
      />

      {/* Particle effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut" as const,
          }}
        />
      ))}
    </div>
  );
};

export default SoftAurora;
