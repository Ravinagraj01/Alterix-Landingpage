import React from 'react';

interface iOSInputProps {
  type?: 'text' | 'email' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
}

const iOSInput: React.FC<iOSInputProps> = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  required = false,
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full px-4 py-3
          bg-white/10 backdrop-blur-md
          border border-white/20 rounded-2xl
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          focus:border-blue-400 focus:bg-white/15
          transition-all duration-300
          appearance-none
          -webkit-appearance: none
        `}
      />
    </div>
  );
};

export default iOSInput;
