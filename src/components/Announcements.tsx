import React from 'react'

const Announcements: React.FC = () => {
  const announcements = [
    {
      id: 1,
      title: 'Registration Extended!',
      content: 'Last date for online registration is now 10th December. Hurry up and register!',
      type: 'important',
      date: '10 Nov 2025',
    },
    {
      id: 2,
      title: 'Venue Change - Code Sprint',
      content: 'Code Sprint event moved from Lab A to Main Hall. New start time: 9:00 AM',
      type: 'update',
      date: '8 Nov 2025',
    },
    {
      id: 3,
      title: 'New Event Added: DevOps Workshop',
      content: 'A new technical workshop on DevOps and Cloud Deployment has been added. Limited seats!',
      type: 'new',
      date: '6 Nov 2025',
    },
    {
      id: 4,
      title: 'Prize Pool Increased!',
      content: 'Total prize pool increased to ₹2,00,000. Check out updated prize distribution.',
      type: 'highlight',
      date: '4 Nov 2025',
    },
    {
      id: 5,
      title: 'Live Streaming Available',
      content: 'All main events will be streamed live on our YouTube channel. Subscribe now!',
      type: 'info',
      date: '2 Nov 2025',
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'border-red-500 bg-red-500 bg-opacity-10'
      case 'update':
        return 'border-yellow-500 bg-yellow-500 bg-opacity-10'
      case 'new':
        return 'border-green-500 bg-green-500 bg-opacity-10'
      case 'highlight':
        return 'border-cyan-400 bg-cyan-400 bg-opacity-10'
      default:
        return 'border-purple-400 bg-purple-400 bg-opacity-10'
    }
  }

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'important':
        return '🚨'
      case 'update':
        return '📝'
      case 'new':
        return '✨'
      case 'highlight':
        return '⭐'
      default:
        return 'ℹ️'
    }
  }

  return (
    <section id="announcements" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            News & Updates
          </h2>
          <p className="text-gray-300 text-lg">Stay updated with latest FIESTRON announcements</p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`rounded-lg p-6 border-l-4 ${getTypeColor(announcement.type)} hover:shadow-lg hover:shadow-cyan-500/30 transition`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{getTypeEmoji(announcement.type)}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-cyan-300">{announcement.title}</h3>
                    <span className="text-xs font-semibold text-gray-400">{announcement.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{announcement.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-10 border-2 border-cyan-400 rounded-lg p-6 text-center">
          <p className="text-gray-200 text-lg font-semibold">
            🔔 Subscribe to our newsletter to get real-time updates!
          </p>
          <div className="mt-4 flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-cyan-400 rounded-lg text-white focus:outline-none focus:border-cyan-300"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Announcements
