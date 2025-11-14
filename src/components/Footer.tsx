import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer id='contact' className='border-t border-[rgba(217,70,166,0.1)] px-6 sm:px-8 lg:px-10'>
      <div className='max-w-7xl mx-auto py-20'>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          <div>
            <h3 className='font-semibold gradient-text mb-4'>FIESTRON</h3>
            <p className='text-caption'>Tech and cultural fest celebrating innovation at KC College.</p>
          </div>
          <div>
            <p className='text-caption font-semibold text-[#ec4899] mb-4'>Quick Links</p>
            <ul className='space-y-2'>
              <li><a href='#home' className='text-caption text-gray-500 hover:text-[#ec4899] transition'>Home</a></li>
              <li><a href='#about' className='text-caption text-gray-500 hover:text-[#ec4899] transition'>About</a></li>
              <li><a href='#events' className='text-caption text-gray-500 hover:text-[#ec4899] transition'>Events</a></li>
              <li><a href='#gallery' className='text-caption text-gray-500 hover:text-[#ec4899] transition'>Gallery</a></li>
            </ul>
          </div>
          <div>
            <p className='text-caption font-semibold text-[#d946a6] mb-4'>Contact</p>
            <p className='text-caption text-gray-500 mb-1'>📧 fiestron@kccollege.edu.in</p>
            <p className='text-caption text-gray-500 mb-1'>📞 +91 98765 43210</p>
            <p className='text-caption text-gray-500'>📍 KC College, Mumbai</p>
          </div>
          <div>
            <p className='text-caption font-semibold text-[#ec4899] mb-4'>Follow</p>
            <div className='flex gap-4'>
              <a href='#' className='text-caption text-gray-500 hover:text-[#d946a6] transition'>Twitter</a>
              <a href='#' className='text-caption text-gray-500 hover:text-[#d946a6] transition'>Instagram</a>
              <a href='#' className='text-caption text-gray-500 hover:text-[#d946a6] transition'>LinkedIn</a>
            </div>
          </div>
        </div>

        <div className='border-t border-[rgba(217,70,166,0.1)] pt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-caption text-gray-600 mb-4 sm:mb-0'>© 2025 FIESTRON - Tech Club, KC College</p>
            <div className='flex gap-8'>
              <a href='#' className='text-caption text-gray-500 hover:text-[#ec4899] transition'>Privacy</a>
              <a href='#' className='text-caption text-gray-500 hover:text-[#ec4899] transition'>Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
