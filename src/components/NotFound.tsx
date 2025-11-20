import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 mb-4 animate-pulse">
          Error 404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Lost in the Tunnel?
        </h2>
        <p className="text-gray-400 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md"
        >
          Return Home
        </Link>
      </div>
    </>
  )
}

export default NotFound