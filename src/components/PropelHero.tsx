import React from 'react';

const PropelHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Ambient lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 px-8 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-white font-semibold text-xl">Propel</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Product', 'Pricing', 'Docs', 'Community'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Central Kinetic Light Visualization */}
        <div className="mb-12">
          <div className="relative w-32 h-32">
            {/* Spiraling Kinetic Energy Core */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-16 bg-gradient-to-t from-violet-600 to-blue-500 rounded-full opacity-80"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-30px)`,
                    transformOrigin: 'center bottom',
                  }}
                />
              ))}
            </div>
            
            {/* Central Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-blue-500 rounded-full blur-xl opacity-80" />
              <div className="absolute w-6 h-6 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Glassmorphism Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 shadow-2xl">
            {/* Light catch effect on edges */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Opening Quotation Mark */}
            <div className="text-6xl font-light text-violet-400 mb-6">
              "
            </div>

            {/* Main Quote Text */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
              Propel let us spin up a new product in hours instead of weeks. It's exactly what we needed as a company that deeply values developer velocity and joy.
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Glowing Pin Icon */}
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                
                <div>
                  <div className="text-white font-semibold text-lg">DANIEL BRIGGS</div>
                  <div className="text-gray-400">SR. DIRECTOR OF SALES, PINBOX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropelHero;
