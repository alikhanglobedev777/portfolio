// src/components/BlogCard.jsx
import React from "react";

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      {/* Blog Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{new Date(blog.date).toDateString()}</p>
        <p className="text-gray-600 mb-4">{blog.description}</p>

        {/* Read More Button */}
        <a
          // href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline font-medium"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
