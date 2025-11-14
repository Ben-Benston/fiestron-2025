import React, { useState } from 'react'

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all')

  const events = [
    { id: 1, title: 'Code Sprint', category: 'technical', description: 'Competitive coding challenge', date: '12 Mar', emoji: '💻' },
    { id: 2, title: 'Web Dev Challenge', category: 'technical', description: 'Build the best web application', date: '13 Mar', emoji: '🌐' },
    { id: 3, title: 'AI/ML Hackathon', category: 'technical', description: 'Innovation with AI and ML', date: '14 Mar', emoji: '🤖' },
    { id: 4, title: 'Gaming Tournament', category: 'games', description: 'Esports competitions', date: '12 Mar', emoji: '🎮' },
    { id: 5, title: 'Quiz Master', category: 'non-technical', description: 'General knowledge quiz', date: '13 Mar', emoji: '🧠' },
    { id: 6, title: 'Treasure Hunt', category: 'non-technical', description: 'Adventurous treasure quest', date: '14 Mar', emoji: '🔍' },
    { id: 7, title: 'Debate Competition', category: 'non-technical', description: 'Intellectual debate showdown', date: '12 Mar', emoji: '🎤' },
    { id: 8, title: 'Photography Contest', category: 'non-technical', description: 'Capture the moment', date: '13 Mar', emoji: '📸' },
  ]

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.category === filter)

  return (
    <section id='events' className='bg-black px-5 sm:px-8 lg:px-10 py-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-title text-center mb-12 text-white'>Explore Events</h2>

        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {['all', 'technical', 'non-technical', 'games'].map(cat => {
            const isActive = filter === cat
            const btnClass = isActive ? 'px-4 py-2 rounded-lg text-sm font-medium transition bg-white text-black' : 'px-4 py-2 rounded-lg text-sm font-medium transition bg-gray-900 text-gray-400 hover:text-white'
            return (
              <button key={cat} onClick={() => setFilter(cat)} className={btnClass}>
                {cat === 'all' ? 'All Events' : cat === 'technical' ? 'Technical' : cat === 'non-technical' ? 'Non-Technical' : 'Games'}
              </button>
            )
          })}
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredEvents.map(event => (
            <div key={event.id} className='card-subtle p-6 hover:bg-opacity-50'>
              <div className='text-5xl mb-3'>{event.emoji}</div>
              <h3 className='text-lg font-semibold mb-2 text-white'>{event.title}</h3>
              <p className='text-caption mb-4'>{event.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-caption'>📅 {event.date}</span>
                <span className='text-lg text-gray-400'>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
