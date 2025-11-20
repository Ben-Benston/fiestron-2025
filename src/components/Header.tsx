import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Scroll handler for homepage sections
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false) // <--- FIX: Close menu after clicking
  }

  // Helper to close menu when navigating to a new page
  const handleNavClick = () => {
    setIsOpen(false) // <--- FIX: Close menu after clicking
  }

  return (
    <header className="sticky top-0 bg-black z-50 px-5 sm:px-8 lg:px-10 py-4">
      {/* Glassmorphism Container */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex items-center gap-10 px-6 py-3 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10 w-full max-w-6xl justify-between md:justify-center">
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent cursor-pointer mr-0 md:mr-8"
          >
            FIESTRON
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm text-gray-300 hover:text-white transition hover:scale-105">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-300 hover:text-white transition hover:scale-105">About</button>
            <button onClick={() => scrollToSection('announcements')} className="text-sm text-gray-300 hover:text-white transition hover:scale-105">News</button>
            <button onClick={() => scrollToSection('sponsors')} className="text-sm text-gray-300 hover:text-white transition hover:scale-105">Sponsors</button>
            <Link to="/events" className="text-sm text-gray-300 hover:text-white transition hover:scale-105">Events</Link>
            <Link to="/gallery" className="text-sm text-gray-300 hover:text-white transition hover:scale-105">Gallery</Link>
            <Link to="/team" className="text-sm text-gray-300 hover:text-white transition hover:scale-105">Team</Link>
            <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition hover:scale-105">Contact</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-xl text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="absolute top-20 left-5 right-5 flex flex-col items-center gap-4 py-6 bg-[#0a0a0a]/95 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl md:hidden animate-in slide-in-from-top-5 duration-200">
          <button onClick={() => scrollToSection('home')} className="text-lg text-gray-300 hover:text-white">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-lg text-gray-300 hover:text-white">About</button>
          <button onClick={() => scrollToSection('announcements')} className="text-lg text-gray-300 hover:text-white">News</button>
          <Link to="/events" onClick={handleNavClick} className="text-lg text-gray-300 hover:text-white">Events</Link>
          <Link to="/gallery" onClick={handleNavClick} className="text-lg text-gray-300 hover:text-white">Gallery</Link>
          <Link to="/team" onClick={handleNavClick} className="text-lg text-gray-300 hover:text-white">Team</Link>
          <Link to="/contact" onClick={handleNavClick} className="text-lg text-gray-300 hover:text-white">Contact</Link>
        </nav>
      )}
    </header>
  )
}

export default Header