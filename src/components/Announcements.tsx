import React from 'react'

const Announcements: React.FC = () => {
  const announcements = [
    { id: 1, title: 'Registration Extended!', content: 'Last date for online registration is now 10th December. Hurry up and register!', type: 'important', date: '10 Nov 2025' },
    { id: 2, title: 'Venue Change - Code Sprint', content: 'Code Sprint event moved from Lab A to Main Hall. New start time: 9:00 AM', type: 'update', date: '8 Nov 2025' },
    { id: 3, title: 'New Event Added: DevOps Workshop', content: 'A new technical workshop on DevOps and Cloud Deployment has been added. Limited seats!', type: 'new', date: '6 Nov 2025' },
    { id: 4, title: 'Prize Pool Increased!', content: 'Total prize pool increased to ₹2,00,000. Check out updated prize distribution.', type: 'highlight', date: '4 Nov 2025' },
    { id: 5, title: 'Live Streaming Available', content: 'All main events will be streamed live on our YouTube channel. Subscribe now!', type: 'info', date: '2 Nov 2025' },
  ]

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'important': return 'border-red-500 bg-red-500/10'
      case 'update': return 'border-yellow-500 bg-yellow-500/10'
      case 'new': return 'border-green-500 bg-green-500/10'
      case 'highlight': return 'border-cyan-400 bg-cyan-400/10'
      default: return 'border-purple-400 bg-purple-400/10'
    }
  }

  const getTypeEmoji = (type: string) => {
    switch(type) {
      case 'important': return '🚨'
      case 'update': return '📝'
      case 'new': return '✨'
      case 'highlight': return '⭐'
      default: return 'ℹ️'
    }
  }

  return (
    <section id="announcements" className="relative bg-black py-20 sm:py-32 overflow-visible">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent mb-4">News & Updates</h2>
          <p className="text-gray-300 text-lg">Stay updated with latest FIESTRON announcements</p>
          <div className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-orange-500 to-teal-500"></div>
        </div>

        <div className="flex flex-col gap-4">
          {announcements.map((ann) => (
            <div key={ann.id} className={`p-6 rounded-lg border-l-4 ${getTypeColor(ann.type)} bg-gradient-to-br from-[#1e0f28]/60 to-[#140a1e]/40 backdrop-blur-md hover:shadow-lg transition-shadow`}>
              <div className="flex items-start gap-4">
                <span className="text-2xl">{getTypeEmoji(ann.type)}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">{ann.title}</h3>
                    <span className="text-xs font-semibold text-gray-400">{ann.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{ann.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-500/10 border border-orange-500 rounded-lg p-6 text-center">
          <p className="text-gray-200 font-semibold text-lg mb-4">🔔 Subscribe to our newsletter to get real-time updates!</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <input type="email" placeholder="Enter your email" className="flex-1 min-w-[220px] px-4 py-2 rounded-lg bg-[#003049] border border-orange-500/30 text-white focus:outline-none focus:border-orange-500"/>
            <button className="px-6 py-2 font-bold text-white rounded-lg bg-gradient-to-r from-orange-500 to-teal-500 hover:shadow-lg transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Announcements
