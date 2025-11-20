🚀 FIESTRON 2025 - Official Website

The Official, Full-Stack Platform for Fiestron 2025 — The Annual Tech Fest of KC College.

This application is built for performance and scalability, handling over 34 dynamic events, managing announcements, and serving as the primary hub for registrations and information.

🛠️ Full-Stack Technology

This project represents a complete, modern full-stack implementation:

Component

Technology

Purpose

Frontend (View)

React 18 / TypeScript / Vite

Dynamic, component-based UI with client-side rendering.

Styling

Tailwind CSS

Atomic CSS for rapid, responsive design and modern effects.

Backend (Logic)

Node.js / Express.js (MERN)

RESTful API for serving events, announcements, and handling forms.

Database (Data)

MongoDB (Atlas)

Flexible NoSQL solution for dynamic content management.

Routing

React Router v6

Handles navigation and implements custom scroll offset logic for sticky header correction.

✨ Key Features & Achieved Goals

⚡ Dynamic Content Engine: Events (34+), Pricing, Rules, and Announcements are served dynamically via the Node.js API, eliminating the need for frontend code changes during event updates.

🏛️ Optimized Team Hierarchy: Custom UI implementation for Faculty, Leadership (VC & Principal), and Student Core/Department Heads with manual image alignment control for precise photo centering.

✅ Seamless Registration Flow: Register buttons auto-scroll to the search bar and link directly to Google Forms, bypassing the need for a custom payment gateway while maintaining data capture control.

🎨 High-Fidelity UI/UX: Features a polished dark-theme aesthetic with glassmorphism, custom neon gradients, and a functional search/filter system for events.

🧭 Robust Navigation: Implemented Scroll-Offset Fix in the Header to prevent content clipping and added a custom 404 NotFound page for professional error handling.

🚀 Deployment Ready: Structure is optimized for immediate production deployment (Vercel/Netlify for frontend, any Node host for backend).

📂 Project Structure

fiestron-2025/
├── server/              # <-- NEW BACKEND FOLDER
│   ├── index.js         # Express Server & MongoDB Schemas
│   ├── package.json     # Node Dependencies (Express, Mongoose, CORS)
│   └── .env             # Database Connection String (Private)
├── public/              # Static assets (Hero videos, Team images, etc.)
├── src/
│   ├── components/      # (Contains all completed UI components)
│   ├── App.tsx          # Router, ScrollToTop, and Page Definitions
│   └── index.css        # Global Styles and Tailwind Directives
# ... (Other Config Files)


🚀 Getting Started (Full-Stack)

To run the entire dynamic application, both the server and client must be running:

1. Database Setup

Set up your free MongoDB Atlas cluster.

Create a file named .env inside the server/ directory.

Add your connection string: MONGO_URI="mongodb+srv://<user>:<password>@clustername/fiestron?..."

2. Start the Backend Server

cd server
npm install
npm run dev
# Server should now be running on http://localhost:5000 and connect to MongoDB.


3. Start the Frontend Client

(Open a new terminal)

cd ..
npm install
npm run dev
# Client should now be running on http://localhost:5173.


🤝 Contributing & Maintenance

Head of Website: Krishika (Maintainer)

Data Updates: Event and Announcement lists are managed via the Backend API. Changes require updating the database, not redeploying the frontend code.

<div align="center">
<p>Proudly Vibe Coded for KC College's FIESTRON 2025</p>
</div>