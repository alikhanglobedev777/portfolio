import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col 
      bg-gradient-to-br from-gray-100 via-indigo-100 to-purple-200 
      relative overflow-hidden">

      
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

     
      <div className="backdrop-blur-md bg-white/30 shadow-sm z-50 sticky top-0">
        <Navbar />
      </div>

   
      <main className="flex-grow z-10 px-4 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="backdrop-blur-md bg-white/20 border-t border-white/30 shadow-inner z-50">
        <Footer />
      </div>
    </div>
  );
}

export default App;
