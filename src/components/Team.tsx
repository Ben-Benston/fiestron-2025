import React from 'react'

const Team: React.FC = () => {
  const faculty = [
    {
      name: 'Dr. Shalini Sinha',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Guides our Tech Club with vision and experience, mentoring every department and student initiative.'
    },
    {
      name: 'Ms. Geeta Brijwani',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Ensures smooth coordination across events and academic engagements for students.'
    },
    {
      name: 'Ms. Beena Karutharan',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Supports technical workshops and provides strategic insights for club projects.'
    },
    {
      name: 'Ms. Jovairia Ansari',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Mentors content creation, documentation, and guides students on effective communication.'
    },
    {
      name: 'Ms. Ritika Sharma',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Brings creative vision and event management expertise to inspire our student teams.'
    },
    {
      name: 'Ms. Shalini Maheshgauri',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Oversees backend systems and technical infrastructure for all Tech Club initiatives.'
    },
    {
      name: 'Ms. Dhanashree Inglee',
      role: 'Faculty Advisor',
      emoji: '👩‍🏫',
      description: 'Drives workshops, engages students, and fosters innovation across departments.'
    },
  ]

  const coreTeam = [
    { name: 'Student 1', role: 'Core Member', emoji: '👤', description: 'Coordinates events and ensures every task runs seamlessly.' },
    { name: 'Student 2', role: 'Core Member', emoji: '👤', description: 'Manages communications and documentation with precision.' },
    { name: 'Student 3', role: 'Core Member', emoji: '👤', description: 'Leads creative and technical planning, keeping the team on track.' },
    { name: 'Student 4', role: 'Core Member', emoji: '👤', description: 'Handles logistics and operations for smooth event execution.' },
  ]

  const departments = [
    { name: 'Accounts', head: 'Head 1', cohead: 'Co-head 1', description: 'Monitors finances, budgeting, and ensures transparency for all club activities.' },
    { name: 'Admin', head: 'Head 2', cohead: 'Co-head 2', description: 'Coordinates permissions, approvals, and operational flow of events.' },
    { name: 'Coverage', head: 'Head 3', cohead: 'Co-head 3', description: 'Captures moments, creates media content, and shares the story of our events.' },
    { name: 'Decor', head: 'Head 4', cohead: 'Co-head 4', description: 'Designs spaces creatively, turning venues into immersive experiences.' },
    { name: 'Design', head: 'Head 5', cohead: 'Co-head 5', description: 'Crafts posters, banners, and digital visuals to amplify our presence.' },
    { name: 'Logistics', head: 'Head 6', cohead: 'Co-head 6', description: 'Ensures smooth transportation, setup, and movement of resources.' },
    { name: 'Hospitality', head: 'Head 7', cohead: 'Co-head 7', description: 'Welcomes guests, participants, and makes everyone feel valued.' },
    { name: 'PR & Marketing', head: 'Head 8', cohead: 'Co-head 8', description: 'Manages campaigns, publicity, and builds our external image.' },
    { name: 'Security', head: 'Head 9', cohead: 'Co-head 9', description: 'Maintains safety, order, and ensures all events run smoothly.' },
    { name: 'Technical', head: 'Head 10', cohead: 'Co-head 10', description: 'Handles tech setup, troubleshooting, and innovation across projects.' },
    { name: 'Website', head: 'Head 11', cohead: 'Co-head 11', description: 'Maintains and updates our online presence with precision.' },
  ]

  const renderCard = (person: { name: string; role: string; emoji?: string; description: string }) => (
    <div className="relative group cursor-pointer">
      {/* Base Card */}
      <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform">
        <div className="text-6xl mb-4">{person.emoji || '👤'}</div>
        <h4 className="text-lg font-bold text-white">{person.name}</h4>
        <p className="text-gray-300 mt-1">{person.role}</p>
      </div>

      {/* Enlarged Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-50 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 rounded-3xl p-8 w-[450px] sm:w-[500px] md:w-[550px] max-w-full shadow-2xl flex flex-col items-center text-center">
          <div className="text-9xl mb-6">{person.emoji || '👤'}</div>
          <h4 className="text-2xl font-bold text-white">{person.name}</h4>
          <p className="text-gray-300 mt-2">{person.role}</p>
          <p className="text-gray-200 mt-4">{person.description}</p>
        </div>
      </div>
    </div>
  )

  const renderDeptCard = (dept: { name: string; head: string; cohead: string; description: string }) => (
    <div className="relative group cursor-pointer">
      {/* Base Card */}
      <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform">
        <div className="flex space-x-2 text-5xl mb-4">
          <div>👨‍💼</div>
          <div>👩‍💼</div>
        </div>
        <h4 className="text-lg font-bold text-white">{dept.name}</h4>
        <p className="text-gray-300 mt-1">Head: {dept.head}</p>
        <p className="text-gray-300 mt-1">Co-head: {dept.cohead}</p>
      </div>

      {/* Enlarged Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-50 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 rounded-3xl p-10 w-[550px] sm:w-[600px] md:w-[650px] max-w-full shadow-2xl flex flex-col items-center text-center">
          <div className="flex space-x-4 mb-6 text-8xl">
            <div>👨‍💼</div>
            <div>👩‍💼</div>
          </div>
          <h4 className="text-2xl font-bold text-white">{dept.name}</h4>
          <p className="text-gray-300 mt-2">Head: {dept.head}</p>
          <p className="text-gray-300 mt-1">Co-head: {dept.cohead}</p>
          <p className="text-gray-200 mt-4">{dept.description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section id="team" className="py-16 bg-black relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Meet Our Faculty and Team
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            The minds shaping and leading our Tech Club
          </p>
        </div>

        {/* Faculty */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Faculty Advisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {faculty.map((f, idx) => (
              <React.Fragment key={idx}>{renderCard(f)}</React.Fragment>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Core Student Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coreTeam.map((c, idx) => (
              <React.Fragment key={idx}>{renderCard(c)}</React.Fragment>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Department Leads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {departments.map((d, idx) => (
              <React.Fragment key={idx}>{renderDeptCard(d)}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
