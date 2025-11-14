import React from 'react'

const Team: React.FC = () => {
  const members = [
    { id: 1, name: 'Alex Johnson', role: 'President', specialty: 'Web Development' },
    { id: 2, name: 'Sarah Chen', role: 'Vice President', specialty: 'AI/ML' },
    { id: 3, name: 'Mike Rodriguez', role: 'Event Manager', specialty: 'DevOps' },
    { id: 4, name: 'Emily Wilson', role: 'Content Lead', specialty: 'UI/UX Design' },
    { id: 5, name: 'James Brown', role: 'Tech Lead', specialty: 'Backend Development' },
    { id: 6, name: 'Lisa Anderson', role: 'Community Manager', specialty: 'Mobile Development' },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mt-4">Passionate technologists leading the community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-purple-600 font-semibold mt-1">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
