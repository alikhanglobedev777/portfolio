// src/components/Footer.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="backdrop-blur-md bg-white/20 border-t border-white/30">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Logo */}
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
          >
            Ali Khan
          </Link>
          <p className="text-sm text-gray-700 mt-1">
            Full-Stack Developer • React & MERN
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
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

        {/* Right: Copyright */}
        <div className="text-sm text-gray-600 text-center md:text-right">
          © {new Date().getFullYear()} Ali Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
