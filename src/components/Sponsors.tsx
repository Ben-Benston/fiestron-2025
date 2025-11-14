import React from 'react'

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: 'Tech Corp', tier: 'platinum', logo: '🏢' },
    { name: 'Innovation Labs', tier: 'gold', logo: '🔬' },
    { name: 'Digital Solutions', tier: 'gold', logo: '💼' },
    { name: 'Cloud Services', tier: 'silver', logo: '☁️' },
    { name: 'Dev Tools', tier: 'silver', logo: '⚙️' },
  ]

  return (
    <section id="sponsors" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Our Sponsors
          </h2>
          <p className="text-gray-300 text-lg">Supporting FIESTRON 2025</p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        {/* Sponsors Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-8 border-2 border-cyan-400 text-center hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                <div className="text-6xl mb-4">{sponsor.logo}</div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{sponsor.name}</h3>
                <span className="inline-block px-3 py-1 bg-purple-500 bg-opacity-30 text-purple-200 rounded-full text-sm font-bold">
                  {sponsor.tier.toUpperCase()} SPONSOR
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Benefits & Form */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-8 border border-purple-500">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Why Sponsor FIESTRON?</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl">✓</span>
                <span>
                  <strong>Brand Visibility:</strong> Reach 1000+ students and tech professionals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl">✓</span>
                <span>
                  <strong>Recruitment:</strong> Connect with top talent from KC College
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl">✓</span>
                <span>
                  <strong>Social Impact:</strong> Support innovation and learning in tech community
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl">✓</span>
                <span>
                  <strong>Media Coverage:</strong> Featured in all promotional materials
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl">✓</span>
                <span>
                  <strong>Networking:</strong> Direct access to student community and team
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-8 border-2 border-cyan-400">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Become a Sponsor</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Contact Email"
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <select className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
                <option>Select Sponsorship Tier</option>
                <option>Platinum - ₹50,000+</option>
                <option>Gold - ₹30,000</option>
                <option>Silver - ₹15,000</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
