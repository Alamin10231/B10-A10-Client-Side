import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureMovie = ({ fmovie }) => {
  const { _id,imagelink, movietitle, genre, duration, rating, summary,releaseYear } = fmovie;

  return (
    <div className="gap-6 p-6">
      <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-300 hover:scale-105 ">
        <figure className="relative  overflow-hidden h-[500px]">
          <img src={imagelink} alt={movietitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">New Release</span>
          </div>
        </figure>
        <div className="card-body p-6 bg-white rounded-lg shadow-md">

  <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">
    {movietitle}
  </h2>

  <div className="flex items-center space-x-4 mb-4">
    <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
      {genre}
    </p>
    <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
      {duration} mins
    </p>
  </div>

  <div className="flex items-center space-x-2 mb-4">
    <label className="text-sm font-medium text-gray-700">Rating:</label>
    <Rating
      emptySymbol={<FaRegStar className="text-gray-300 text-2xl" />}
      fullSymbol={<FaStar className="text-yellow-400 text-2xl" />}
      fractions={2}
      initialRating={rating}
      onChange={(value) => setRating(value)}
    />
    <span className="text-gray-700 font-semibold">{rating}</span>
    <p className="text-sm text-gray-600 px-3 py-1 rounded-full">
     releaseYear: {releaseYear} 
    </p>
  </div>

 
  <div className="mb-6">
    <p className="text-sm text-gray-700 leading-relaxed">
      <span className="font-semibold">Summary:</span> {summary}
    </p>
  </div>

 
  <div className="card-actions justify-start">
  <Link to={`moviedetails/${_id}`}>
  <button className="btn btn-primary bg-[#900C3F] hover:bg-[#7A0B35] text-white transform transition-transform duration-300 hover:scale-105">
      See Details
    </button>
  </Link>
  </div>
</div>
      </div>
    </div>
  );
};

export default FeatureMovie;
