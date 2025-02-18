import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "animate.css";

const Searchlist = () => {
  const [query, setquery] = useState("");
  const [results, setresults] = useState([]);

  useEffect(() => {
    fetch("https://movie-nest-website-server.vercel.app/movie")
      .then((res) => res.json())
      .then((data) => setresults(data));
  }, []);

  const filterdata = results.filter((movie) =>
    movie.movietitle.toLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="my-20 text-center animate__animated animate__fadeInDown">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="w-10/12 md:w-6/12 lg:w-4/12 px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
        {filterdata.map((movie, index) => (
          <div
            key={index}
            className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={movie.imagelink}
                alt={movie.movietitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white text-lg font-semibold bg-indigo-500 px-4 py-2 rounded-full">
                  New Release
                </span>
              </div>
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
                <label className="text-sm font-medium text-gray-700">
                  Rating:
                </label>
                <Rating
                  emptySymbol={<FaRegStar className="text-gray-300 text-xl" />}
                  fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
                  fractions={2}
                  initialRating={movie.rating}
                  readonly
                />
                <span className="text-gray-700 font-semibold">
                  {movie.rating}
                </span>
                <p className="text-sm text-gray-600 px-3 py-1 rounded-full">
                  Release Year: {movie.releaseYear}
                </p>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">Summary:</span> {movie.summary}
              </p>

              <button className="btn btn-primary bg-[#900C3F] hover:bg-[#7A0B35] text-white transform transition-transform duration-300 hover:scale-105 animate__animated animate__pulse animate__infinite">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchlist;
