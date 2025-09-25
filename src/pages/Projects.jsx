import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      
      <h1 className="text-3xl font-bold text-indigo-600">Projects</h1>
      <p className="mt-4 text-gray-700">
        Here are some of the projects I’ve worked on. Each project showcases my
        skills in React, Node.js, and full-stack development.
      </p>

      
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
