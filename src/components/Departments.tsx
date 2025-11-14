import React from 'react'

const Departments: React.FC = () => {
  const departments = [
    { name: 'Accounts', emoji: '💰', desc: 'Manages finances and tracks expenses' },
    { name: 'Admin', emoji: '📋', desc: 'Coordinates permissions and operations' },
    { name: 'Coverage', emoji: '📸', desc: 'Photography, videography, and media' },
    { name: 'Decor', emoji: '🎨', desc: 'Creates stunning setups and spaces' },
    { name: 'Design', emoji: '🖌️', desc: 'Posters, banners, and digital assets' },
    { name: 'Logistics', emoji: '🚚', desc: 'Transport and material management' },
    { name: 'Hospitality', emoji: '🤝', desc: 'Welcomes guests and participants' },
    { name: 'PR & Marketing', emoji: '📢', desc: 'Campaigns and publicity management' },
    { name: 'Security', emoji: '🔒', desc: 'Ensures safety during the fest' },
    { name: 'Technical', emoji: '⚙️', desc: 'Tech setups and troubleshooting' },
    { name: 'Website Team', emoji: '💻', desc: 'Website maintenance and updates' },
  ]

  return (
    <section id="departments" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            FIESTRON Teams
          </h2>
          <p className="text-gray-300 text-lg">Meet the 11 departments making FIESTRON possible</p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-6 border border-cyan-400 hover:border-purple-400 hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{dept.emoji}</div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{dept.name}</h3>
              <p className="text-gray-300">{dept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Departments
