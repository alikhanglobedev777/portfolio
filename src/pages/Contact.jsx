import React, { useState } from "react";

function Contact() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

  
    alert(`Thank you, ${formData.name}! Your message has been received.`);

    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
   
      <h1 className="text-3xl font-bold text-indigo-600">Contact Me</h1>
      <p className="mt-4 text-gray-700">
        Have a question or want to work together? Fill out the form below and I’ll get back to you.
      </p>

     
      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-white shadow-md rounded-lg p-6 space-y-4"
      >
       
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Enter your name"
          />
        </div>

      
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Enter your email"
          />
        </div>

       
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Write your message..."
          />
        </div>

       
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;
