import React from 'react';

interface iOSSelectProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const iOSSelect: React.FC<iOSSelectProps> = ({ 
  value,
  onChange,
  label,
  options,
  placeholder = "Select an option",
  className = ''
}) => {
  return (
    <div className={`space-y-2 relative ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-3 pr-10
            bg-white/10 backdrop-blur-md
            border border-white/20 rounded-2xl
            text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
            focus:border-blue-400 focus:bg-white/15
            transition-all duration-300
            appearance-none
            -webkit-appearance: none
            cursor-pointer
          `}
        >
          <option value="" className="bg-gray-800">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value} className="bg-gray-800">
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default iOSSelect;
