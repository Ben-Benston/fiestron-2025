import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">Have questions? We'd love to hear from you!</p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-8 border-2 border-cyan-400">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-purple-400 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center space-x-4 p-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg border border-purple-500 hover:border-cyan-400 transition group">
                  <span className="text-2xl group-hover:scale-110 transition">📞</span>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white font-bold">+91 98765 43210</p>
                  </div>
                </a>
                <a href="mailto:fiestron@kccollege.edu.in" className="flex items-center space-x-4 p-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg border border-purple-500 hover:border-cyan-400 transition group">
                  <span className="text-2xl group-hover:scale-110 transition">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white font-bold">fiestron@kccollege.edu.in</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg border border-purple-500">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Visit Us</p>
                    <p className="text-white font-bold">KC College, Fort, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Facebook', emoji: '👥' },
                  { name: 'Instagram', emoji: '📷' },
                  { name: 'Twitter', emoji: '🐦' },
                  { name: 'LinkedIn', emoji: '💼' },
                  { name: 'YouTube', emoji: '📹' },
                  { name: 'Discord', emoji: '🎮' },
                ].map((social) => (
                  <button
                    key={social.name}
                    className="p-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg border border-purple-500 hover:border-cyan-400 transition font-bold text-white hover:bg-purple-800"
                  >
                    <span className="text-2xl">{social.emoji}</span>
                    <p className="text-sm mt-1">{social.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-8 border border-purple-500">
          <h3 className="text-2xl font-bold text-cyan-300 mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'When is FIESTRON 2025?', a: '15th & 16th December 2025' },
              { q: 'Is there an entry fee?', a: 'No, FIESTRON is free to attend! Event registration is separate.' },
              { q: 'How do I register?', a: 'Use the registration form above or visit the Events section.' },
              { q: 'Can I participate in multiple events?', a: 'Yes! You can register for multiple events as per your interest.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-4 border border-purple-400">
                <p className="font-bold text-cyan-300 mb-2">{faq.q}</p>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
