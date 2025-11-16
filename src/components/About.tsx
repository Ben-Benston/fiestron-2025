import React from 'react'
import '../styles/neon-tunnel.css'

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-black py-20 sm:py-24 overflow-visible">
      <div className="absolute inset-0 pointer-events-none z-0 filter blur-xl bg-[radial-gradient(ellipse_at_bottom_center,rgba(247,126,0,0.2)_0%,rgba(247,126,0,0)_42%),radial-gradient(ellipse_at_bottom_center,rgba(247,126,0,0.14)_0%,rgba(247,126,0,0)_48%),radial-gradient(ellipse_at_bottom_center,rgba(247,126,0,0.1)_0%,rgba(247,126,0,0)_56%),radial-gradient(ellipse_at_bottom_center,rgba(247,126,0,0.06)_0%,rgba(247,126,0,0)_68%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="p-8 aspect-square rounded-2xl flex items-center justify-center border border-orange-500/20 bg-gradient-to-br from-[#1e0f28]/60 to-[#140a1e]/40 backdrop-blur-md hover:border-orange-500/40 hover:shadow-[0_12px_40px_rgba(247,126,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 animate-[float-gentle_5s_ease-in-out_infinite]">
            <span className="text-[9rem] animate-[subtle-glow_4s_ease-in-out_infinite]">🎉</span>
          </div>

          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent mb-6">
              Our Vision
            </h2>
            <p className="text-gray-300 mb-6">
              FIESTRON brings together the brightest minds from KC College and beyond to celebrate technology, creativity, and innovation.
            </p>
            <p className="text-gray-300 mb-6">
              With 50+ events, 11 dedicated departments, and a prize pool of ₹2 lakhs, FIESTRON is the ultimate platform for tech enthusiasts and cultural performers alike.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { number: '50+', label: 'Events' },
                { number: '11', label: 'Departments' },
                { number: '3', label: 'Categories' },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-orange-500/20 bg-gradient-to-br from-[#1e0f28]/60 to-[#140a1e]/40 backdrop-blur-md hover:border-orange-500/40 hover:shadow-[0_12px_40px_rgba(247,126,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
