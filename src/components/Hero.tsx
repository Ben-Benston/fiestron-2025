import React from 'react'
import '../styles/neon-tunnel.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-visible bg-black pb-32">
      <div className="neon-tunnel" aria-hidden="true" />

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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-teal-500 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-orange-500 text-gray-200 hover:bg-orange-500/10 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
