import React from 'react'

const About: React.FC = () => {
  return (
    <section id='about' className='px-5 sm:px-8 lg:px-10 py-20 relative'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-[#d946a6]/10 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='card-subtle p-8 float-gentle aspect-square rounded-2xl flex items-center justify-center'>
            <span className='text-9xl subtle-glow'>🎉</span>
          </div>

          <div>
            <h2 className='text-title mb-6 gradient-text'>Our Vision</h2>
            <p className='text-body mb-6'>
              FIESTRON brings together the brightest minds from KC College and beyond to celebrate technology, creativity, and innovation.
            </p>
            <p className='text-body mb-8'>
              With 50+ events, 11 dedicated departments, and a prize pool of ₹2 lakhs, FIESTRON is the ultimate platform for tech enthusiasts and cultural performers alike.
            </p>

            <div className='grid md:grid-cols-3 gap-4'>
              <div className='card-subtle p-4'>
                <p className='text-3xl font-bold mb-1 gradient-text'>50+</p>
                <p className='text-caption'>Events</p>
              </div>
              <div className='card-subtle p-4'>
                <p className='text-3xl font-bold mb-1 gradient-text'>11</p>
                <p className='text-caption'>Departments</p>
              </div>
              <div className='card-subtle p-4'>
                <p className='text-3xl font-bold mb-1 gradient-text'>3</p>
                <p className='text-caption'>Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
