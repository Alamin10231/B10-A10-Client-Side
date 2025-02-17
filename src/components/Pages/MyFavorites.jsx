import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Handle deletion of a movie from favorites
  const handleDelete = (id) => {
    // Find the index of the first movie with the given id
    const index = favorites.findIndex((movie) => movie.id === id);
    if (index !== -1) {
      // Create a copy of favorites
      const updatedFavorites = [...favorites];
      // Remove only the movie at the found index
      updatedFavorites.splice(index, 1);
      // Update the state and localStorage
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Favorites</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={movie.imagelink}
                  alt={movie.movietitle}
                  className="w-full h-full object-cover"
                />
                
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {movie.movietitle}
                </h2>
                <div className="flex items-center space-x-4 mb-4">
                  <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {movie.genre}
                  </p>
                  <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {movie.duration} mins
                  </p>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <label className="text-sm font-medium text-gray-700">Rating:</label>
                  <Rating
                    emptySymbol={<FaRegStar className="text-gray-300 text-xl" />}
                    fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
                    fractions={2}
                    initialRating={movie.rating}
                    readonly
                  />
                  <span className="text-gray-700 font-semibold">{movie.rating}</span>
                  <p className="text-sm text-gray-600 px-3 py-1 rounded-full">
                    Release Year: {movie.releaseYear}
                  </p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold">Summary:</span> {movie.summary}
                </p>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No favorites added yet.</p>
      )}
    </div>
  );
};

export default MyFavorites;
