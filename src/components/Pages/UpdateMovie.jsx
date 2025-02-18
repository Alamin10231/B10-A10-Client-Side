import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const UpdateMovie = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [moviePoster, setMoviePoster] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  useEffect(() => {
    fetch(`https://movie-nest-website-server.vercel.app/movie/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMoviePoster(data.imagelink);
        setMovieTitle(data.movietitle);
        setGenre(data.genre);
        setDuration(data.duration);
        setRating(data.rating);
        setSummary(data.summary);
        setReleaseYear(data.releaseYear);
      });
  }, [id]);

  const handleUpdatedMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const imagelink = form.imagelink.value;
    const movietitle = form.movietitle.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const summary = form.summary.value;
    const releaseYear = form.releaseYear.value;

    const updatedmovie = { id, imagelink, movietitle, genre, duration, rating, summary, releaseYear };

    if (!imagelink || !imagelink.startsWith("http")) {
      toast.error("Please Provide a valid image link");
      return;
    }
    if (!movietitle || movietitle.length < 2) {
      toast.error("Movie title must be at least 2 characters long");
      return;
    }
    if (!genre) {
      toast.error("Please select a genre");
      return;
    }
    if (!duration || duration < 60) {
      toast.error("Duration must be greater than 60 minutes.");
      return;
    }
    if (!summary || summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      return;
    }
    if (!releaseYear || releaseYear < 1900 || releaseYear > new Date().getFullYear() + 5) {
      toast.error("Please provide a valid release year (1900 - " + (new Date().getFullYear() + 5) + ").");
      return;
    }

    fetch(`https://movie-nest-website-server.vercel.app/movie/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedmovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Movie Updated successfully.",
            icon: "success",
            draggable: true,
          });
        }
        navigate('/allmovies')
      });
  };

  return (
    <form onSubmit={handleUpdatedMovie} className="space-y-4 w-10/12 mx-auto my-20">
      <h1 className="text-bold text-3xl text-center py-5">Update Movie</h1>

   
      <div>
        <label className="block text-sm font-medium text-gray-700">Movie Poster (Image Link)</label>
        <input
          type="text"
          name="imagelink"
          value={moviePoster}
          onChange={(e) => setMoviePoster(e.target.value)}
          placeholder="Enter image link..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

   
      <div>
        <label className="block text-sm font-medium text-gray-700">Movie Title</label>
        <input
          type="text"
          name="movietitle"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter movie title..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

   
      <div>
        <label className="block text-sm font-medium text-gray-700">Genre</label>
        <select
          value={genre}
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a genre</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Historical">Historical</option>
        </select>
      </div>

  
      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (in minutes)</label>
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration in minutes..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

     
      <div>
        <label className="block text-sm font-medium text-gray-700">Release Year</label>
        <input
          type="number"
          name="releaseYear"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Enter release year..."
          min="1900"
          max={new Date().getFullYear() + 5}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

    
      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <Rating
          emptySymbol={<FaRegStar className="text-gray-400 text-2xl" />}
          fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
          fractions={2}
          initialRating={rating}
          onChange={(value) => setRating(value)}
        />
      </div>

  
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <textarea
          name="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Enter movie summary..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          required
        />
      </div>

      
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateMovie;