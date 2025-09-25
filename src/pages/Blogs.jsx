import React from "react";
import blogs from "../data/blogs";
import BlogCard from "../components/blogCard";

function Blogs() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
   
      <h1 className="text-3xl font-bold text-indigo-600">Blogs</h1>
      <p className="mt-4 text-gray-700">
        Here are some of my latest blogs where I share tutorials, guides, and
        experiences about React, Tailwind CSS, and web development.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}

export default Blogs;
