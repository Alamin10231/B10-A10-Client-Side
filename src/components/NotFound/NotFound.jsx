import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link properly

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          It might have been moved, or deleted.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-400 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
