// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">About Me</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Hi, I’m Ali Khan — a passionate full-stack developer specializing in the
        MERN stack (MongoDB, Express, React, Node.js). I enjoy building modern,
        responsive web applications that provide seamless user experiences.
      </p>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Git & GitHub",
            "C++",
            "Python",
            "Postman API"
          ].map((skill, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium text-center shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <p className="mt-2 text-gray-600">
          Want to know more about my experience? View or download my resume below.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {/* View Resume */}
          <a
            href="/resume.pdf" // resume must be in public folder
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-white text-indigo-600 border border-indigo-600 font-semibold shadow hover:bg-indigo-50 transition"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
