import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 bg-gradient-to-b from-[#0d0d15] via-[#1a1025] to-transparent backdrop-blur-lg border-b border-[rgba(217,70,166,0.1)] px-5 sm:px-8 lg:px-10'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-4'>
        <div className='text-2xl font-bold gradient-text'>FIESTRON</div>

        <button className='md:hidden text-2xl text-[#d946a6] hover:text-[#ec4899] transition' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className='hidden md:flex items-center gap-8'>
          <a href='#home' className='text-sm text-gray-400 hover:text-[#ec4899] transition'>Home</a>
          <a href='#about' className='text-sm text-gray-400 hover:text-[#ec4899] transition'>About</a>
          <a href='#events' className='text-sm text-gray-400 hover:text-[#ec4899] transition'>Events</a>
          <a href='#gallery' className='text-sm text-gray-400 hover:text-[#ec4899] transition'>Gallery</a>
        </nav>

        <button className='hidden md:block px-6 py-2 bg-gradient-to-r from-[#d946a6] to-[#ec4899] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[rgba(217,70,166,0.4)] transition duration-200'>
          Register
        </button>
      </div>

      {isOpen && (
        <nav className='md:hidden pb-4 space-y-3'>
          <a href='#home' className='block text-sm text-gray-400 hover:text-[#ec4899] transition'>Home</a>
          <a href='#about' className='block text-sm text-gray-400 hover:text-[#ec4899] transition'>About</a>
          <a href='#events' className='block text-sm text-gray-400 hover:text-[#ec4899] transition'>Events</a>
          <a href='#gallery' className='block text-sm text-gray-400 hover:text-[#ec4899] transition'>Gallery</a>
          <button className='w-full px-6 py-2 bg-gradient-to-r from-[#d946a6] to-[#ec4899] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[rgba(217,70,166,0.4)] transition duration-200'>
            Register
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
