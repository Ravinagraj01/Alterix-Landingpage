/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#FDE047',
        'neon-pink': '#EC4899',
        'dark-gray': '#1a1a1a',
        'medium-gray': '#2a2a2a',
        'light-gray': '#3a3a3a',
        'obsidian-black': '#0A0A0A',
        'violet-600': '#8B5CF6',
        'violet-500': '#A78BFA',
        'violet-400': '#C4B5FD',
        'blue-600': '#3B82F6',
        'blue-500': '#60A5FA',
        'blue-400': '#93C5FD',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        aurora: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #1a1a1a, #2a1a3a, #1a2a3a, #1a1a2a)',
            backgroundPosition: '0% 50%'
          },
          '50%': { 
            background: 'linear-gradient(45deg, #2a1a3a, #1a2a3a, #1a1a2a, #1a1a1a)',
            backgroundPosition: '100% 50%'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
