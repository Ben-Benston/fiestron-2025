import React, { useState } from 'react'

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    events: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleEventToggle = (event: string) => {
    setFormData({
      ...formData,
      events: formData.events.includes(event)
        ? formData.events.filter((e) => e !== event)
        : [...formData.events, event],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for registering, ${formData.name}! Confirmation email sent.`)
    setFormData({ name: '', email: '', phone: '', department: '', events: [] })
  }

  return (
    <section id="registration" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Register Now
          </h2>
          <p className="text-gray-300 text-lg">Join FIESTRON 2025 - Get Your Spot Today!</p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-8 border-2 border-cyan-400">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-cyan-300 font-bold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-cyan-300 font-bold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-cyan-300 font-bold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
                placeholder="Your phone number"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-cyan-300 font-bold mb-2">Department / Course *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
              >
                <option value="">Select your department</option>
                <option value="cs">Computer Science</option>
                <option value="ec">Electronics & Communication</option>
                <option value="it">Information Technology</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Events Selection */}
            <div>
              <label className="block text-cyan-300 font-bold mb-4">Select Events *</label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Code Sprint',
                  'Web Dev Challenge',
                  'AI/ML Hackathon',
                  'Gaming Tournament',
                  'Quiz Master',
                  'Debate Competition',
                ].map((event) => (
                  <label key={event} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.events.includes(event)}
                      onChange={() => handleEventToggle(event)}
                      className="w-4 h-4 rounded border-purple-400 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span className="text-gray-300">{event}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              ✓ Complete Registration
            </button>

            <p className="text-gray-400 text-sm text-center">
              A confirmation email will be sent to your registered email address
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Registration
