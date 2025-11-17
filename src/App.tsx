import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Scroll sections
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Announcements from './components/Announcements'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

// Dedicated pages
import Team from './components/Team'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Registration from './components/Registration'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage with scroll sections */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Announcements />
              <Sponsors />
              <Footer />
            </>
          }
        />

        {/* Dedicated routed pages */}
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
