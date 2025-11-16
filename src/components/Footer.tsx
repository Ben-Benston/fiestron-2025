import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="
        border-t border-[rgba(247,126,0,0.1)]
        px-6 sm:px-8 lg:px-10
      "
    >
      <div className="max-w-7xl mx-auto py-20">

        {/* GRID */}
        <div className="grid gap-12 mb-12 md:grid-cols-4">

          {/* Column 1 */}
          <div>
            <h3
              className="
                font-semibold mb-4
                bg-gradient-to-r from-[#F77E00] to-[#00A896]
                bg-clip-text text-transparent
              "
            >
              FIESTRON
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              Tech and cultural fest celebrating innovation at KC College.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-sm font-semibold text-[#00A896] mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2">
              <li><a href="#home" className="text-sm text-gray-500 hover:text-[#00A896] transition">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-500 hover:text-[#00A896] transition">About</a></li>
              <li><a href="#events" className="text-sm text-gray-500 hover:text-[#00A896] transition">Events</a></li>
              <li><a href="#gallery" className="text-sm text-gray-500 hover:text-[#00A896] transition">Gallery</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-sm font-semibold text-[#00A896] mb-4">Contact</p>
            <p className="text-sm text-gray-500 mb-1">📧 fiestron@kccollege.edu.in</p>
            <p className="text-sm text-gray-500 mb-1">📞 +91 98765 43210</p>
            <p className="text-sm text-gray-500 mb-1">📍 KC College, Mumbai</p>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-sm font-semibold text-[#00A896] mb-4">Follow</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-[#00A896] transition">Twitter</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#00A896] transition">Instagram</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#00A896] transition">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(247,126,0,0.1)] pt-8">
          <div
            className="
              flex flex-col sm:flex-row
              justify-between items-center gap-4
            "
          >
            <p className="text-sm text-gray-600">
              © 2025 FIESTRON - Tech Club, KC College
            </p>

            <div className="flex gap-8">
              <a href="#" className="text-sm text-gray-500 hover:text-[#00A896] transition">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#00A896] transition">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
