import React from 'react';
import { motion } from 'framer-motion';

interface iOSButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const iOSButton: React.FC<iOSButtonProps> = ({ 
  children, 
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = ''
}) => {
  const sizeStyles = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-12 py-4 text-lg'
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-600 
      text-white 
      shadow-lg shadow-blue-500/25
      hover:shadow-xl hover:shadow-blue-500/40
      hover:from-blue-600 hover:to-purple-700
    `,
    secondary: `
      bg-white/10 backdrop-blur-md
      text-white
      border border-white/20
      hover:bg-white/20 hover:border-white/30
    `,
    tertiary: `
      bg-transparent
      text-blue-400
      hover:text-blue-300
      hover:bg-white/5
    `
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        rounded-2xl
        font-semibold
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* iOS-style inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 pointer-events-none" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default iOSButton;
