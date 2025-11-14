import React from 'react'
import '../styles/neon-tunnel.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-black">
      <div className="neon-tunnel" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          FIESTRON 2025
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          A celebration of technology and creativity at KC College — join workshops, competitions and talks. Step into the tunnel to the future.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#register" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg hover:opacity-95 transition z-20">Register Now</a>
          <a href="#about" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gray-700 text-gray-200 hover:border-pink-400 transition z-20">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
