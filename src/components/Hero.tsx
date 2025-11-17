import React from 'react'
import '../styles/neon-tunnel.css'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative overflow-visible
        bg-black
        pb-32
        py-28
      "
    >
      <div className="neon-tunnel " aria-hidden="true" />

      {/* Glossy Semicircle Arcs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large arc wave */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]">
          <div 
            className="w-full h-full rounded-t-full"
            style={{
              background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.6) 0%, rgba(20, 184, 166, 0.3) 100%)',
              boxShadow: '0 -20px 80px rgba(249, 115, 22, 0.4), inset 0 2px 20px rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          />
        </div>

        {/* Medium arc behind */}
        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[600px] h-[300px] opacity-70">
          <div 
            className="w-full h-full rounded-t-full"
            style={{
              background: 'linear-gradient(180deg, rgba(20, 184, 166, 0.5) 0%, rgba(249, 115, 22, 0.2) 100%)',
              boxShadow: '0 -15px 60px rgba(20, 184, 166, 0.3), inset 0 2px 15px rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
            }}
          />
        </div>

        {/* Small accent arc */}
        <div className="absolute bottom-0 right-1/4 -translate-x-1/2 w-[400px] h-[200px] opacity-60">
          <div 
            className="w-full h-full rounded-t-full"
            style={{
              background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.4) 0%, rgba(20, 184, 166, 0.2) 100%)',
              boxShadow: '0 -10px 40px rgba(249, 115, 22, 0.25), inset 0 2px 10px rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(6px)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center px-6 py-28 sm:py-32">
        <h1 className="text-white font-extrabold leading-snug text-3xl sm:text-4xl lg:text-5xl mb-4">
          FIESTRON 2025
        </h1>

        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
          A celebration of technology and creativity at KC College — join workshops, competitions and talks. Step into the tunnel to the future.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#register"
            className="
              inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold 
              text-white bg-gradient-to-r from-orange-500 to-teal-500 
              shadow-lg hover:shadow-xl transition-shadow duration-200
            "
          >
            Register Now
          </a>

          <a
            href="#about"
            className="
              inline-flex items-center gap-3 px-6 py-3 rounded-lg 
              border border-orange-500 text-gray-200 
              hover:bg-orange-500/10 transition-all duration-200
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero