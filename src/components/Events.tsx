import { useState } from 'react'

const Events = () => {
  const [filter, setFilter] = useState('all')

  const events = [
    { id: 1, emoji: '💻', title: 'Hackathon', description: '24-hour coding challenge.', date: 'Jan 12', category: 'technical' },
    { id: 2, emoji: '🎤', title: 'Open Mic', description: 'Sing, speak, or perform.', date: 'Jan 15', category: 'non-technical' },
    { id: 3, emoji: '🎮', title: 'LAN Gaming', description: 'Multiplayer PC gaming.', date: 'Jan 18', category: 'games' },
    { id: 4, emoji: '🧪', title: 'Tech Expo', description: 'Showcase your creations.', date: 'Jan 20', category: 'technical' },
  ]

  const filteredEvents =
    filter === 'all'
      ? events
      : events.filter(e => e.category === filter)

  const categories = ['all', 'technical', 'non-technical', 'games']

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white overflow-hidden">
      
      {/* Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-32 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-10 text-center">
          Events
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          {categories.map(cat => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={
                  isActive
                    ? "px-5 py-2 rounded-full bg-white text-black font-semibold shadow-md scale-105 transition"
                    : "px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 transition hover:bg-white/20"
                }
              >
                {cat === 'all'
                  ? 'All Events'
                  : cat === 'technical'
                  ? 'Technical'
                  : cat === 'non-technical'
                  ? 'Non-Technical'
                  : 'Games'}
              </button>
            )
          })}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition backdrop-blur-md"
            >
              <div className="text-4xl mb-4">{event.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-white/70 mb-4">{event.description}</p>

              <div className="flex justify-between items-center text-white/80">
                <span>📅 {event.date}</span>
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Events
