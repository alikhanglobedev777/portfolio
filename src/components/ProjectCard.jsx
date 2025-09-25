import React from "react";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded bg-indigo-50 text-indigo-600"
          >
            {t}
          </span>
        ))}
      </div>

   
      <a
        // href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-indigo-600 text-sm hover:underline"
      >
        View Project <FiExternalLink className="ml-1" />
      </a>
    </article>
  );
}

export default ProjectCard;
