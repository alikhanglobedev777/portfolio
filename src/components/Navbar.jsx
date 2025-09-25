// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
      
      <Link
        to="/"
        className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
      >
        Ali Khan
      </Link>

      
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg font-medium transition-all duration-300 
              ${
                isActive
                  ? "bg-indigo-500/30 text-indigo-700 shadow"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-white/40"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      
      <button
        className="md:hidden px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md hover:opacity-90 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      
      {isOpen && (
        <div className="absolute top-16 right-6 w-48 backdrop-blur-md bg-white/90 rounded-xl shadow-lg border border-white/40 flex flex-col py-3 animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition 
                ${
                  isActive
                    ? "bg-indigo-500/30 text-indigo-700"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-white/40"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
