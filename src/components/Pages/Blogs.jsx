import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogdata = useLoaderData();
  const [data, setData] = useState(blogdata);

  return (
    <div className="container mx-auto px-4 py-10">
      
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
        Movie Trailers 🎬
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogdata.map((blog, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-gray-300 shadow-md transition duration-300 hover:shadow-xl hover:scale-105"
          >
           
            <figure className="relative w-full">
              <img
                className="w-full h-56 object-cover sm:h-64 md:h-72 lg:h-80 transition-transform duration-500 group-hover:scale-110"
                // src={blog.image}
                src={`${blog.image}`}
                alt={blog.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>

          
            <div className="p-5 bg-white">
              <h2 className="text-lg font-semibold text-gray-800 md:text-xl group-hover:text-purple-600 transition duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2">
                {blog.description}
              </p>

           
              <div className="flex items-center gap-2 mt-4">
                <a
                  href={blog.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-purple-500 transition duration-300 transform hover:scale-105"
                >
                  Watch Trailer
                </a>
                <FaHandPointRight className="text-blue-600 transition duration-300 group-hover:text-purple-500 group-hover:rotate-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
