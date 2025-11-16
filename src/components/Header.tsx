import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-transparent backdrop-blur-xl border-b border-orange-900/20 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
          FIESTRON
        </div>

        <button
          className="block md:hidden text-2xl text-orange-500 hover:text-teal-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">Home</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">About</a>
          <a href="#events" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">Events</a>
          <a href="#gallery" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">Gallery</a>
        </nav>

        <button className="hidden md:inline-flex px-6 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-orange-500 to-teal-500 hover:shadow-lg transition-shadow duration-200">
          Register
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col md:hidden gap-3 pb-4">
          <a href="#home" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">Home</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">About</a>
          <a href="#events" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">Events</a>
          <a href="#gallery" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">Gallery</a>
          <button className="w-full px-6 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-orange-500 to-teal-500 hover:shadow-lg transition-shadow duration-200">
            Register
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
