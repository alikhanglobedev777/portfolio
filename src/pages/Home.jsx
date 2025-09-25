import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import profilePic from "../assets/profile.jpeg";

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12">
     
      <section className="grid md:grid-cols-2 gap-8 items-center min-h-screen">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ali
            </span>{" "}
            — Full-Stack Developer
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
            I build responsive, user-friendly web apps with{" "}
            <span className="font-semibold text-indigo-600">React</span> and{" "}
            <span className="font-semibold text-purple-600">Node.js</span>.  
            Passionate about crafting clean UIs and robust backends that scale.
          </p>

          
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
               View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 shadow-sm transition-all duration-300"
            >
               Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <Stat label="Projects" value="12+" />
            <Stat label="Experience" value="1.5 yrs" />
            <Stat label="Happy Clients" value="7+" />
          </div>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 shadow-xl animate-pulse-slow"></div>
            <div className="absolute inset-2 bg-white rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={profilePic}
                alt="Ali Khan"
                className="w-full h-full object-cover rounded-3xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

   
      <section className="mt-20 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-600 inline-block pb-2">
          🌟 Featured Projects
        </h2>
        <p className="mt-2 text-gray-600">
          A showcase of some of my best work in full-stack development.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}


function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
}

export default Home;
