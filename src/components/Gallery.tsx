import React, { useState } from 'react'

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    { id: 1, title: 'Event 1', category: 'coverage', emoji: '📷' },
    { id: 2, title: 'Event 2', category: 'coverage', emoji: '🎬' },
    { id: 3, title: 'FIESTRON 2024', category: 'previous', emoji: '🏆' },
    { id: 4, title: 'Cultural Night', category: 'coverage', emoji: '🎭' },
    { id: 5, title: 'Tech Talks', category: 'previous', emoji: '💡' },
    { id: 6, title: 'Closing Ceremony', category: 'coverage', emoji: '✨' },
  ]

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter)

  return (
    <section id='gallery' className='bg-black px-5 sm:px-8 lg:px-10 py-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-title text-center mb-12 text-white'>Gallery</h2>

        <div className='flex justify-center gap-3 mb-12'>
          {['all', 'previous', 'coverage'].map(cat => {
            const isActive = filter === cat
            const btnClass = isActive ? 'px-4 py-2 rounded-lg text-sm font-medium transition bg-white text-black' : 'px-4 py-2 rounded-lg text-sm font-medium transition bg-gray-900 text-gray-400 hover:text-white'
            return (
              <button key={cat} onClick={() => setFilter(cat)} className={btnClass}>
                {cat === 'all' ? 'All' : cat === 'previous' ? 'Previous Years' : 'Coverage'}
              </button>
            )
          })}
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {filteredItems.map(item => (
            <div key={item.id} className='card-subtle aspect-square flex items-center justify-center text-7xl hover:scale-105 transition duration-300'>
              <span className='subtle-glow'>{item.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
