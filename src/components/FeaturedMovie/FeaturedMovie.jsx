import React, { useEffect, useState } from "react";
import FeatureMovie from "../FeatureMovie/FeatureMovie";
import "animate.css"; 

const FeaturedMovie = () => {
  const [featuredmovie, setfeaturedmovie] = useState([]);

  useEffect(() => {
    fetch("https://movie-nest-website-server.vercel.app/movie")
      .then((res) => res.json())
      .then((data) => setfeaturedmovie(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8 animate__animated animate__fadeInDown">
        Featured Movie
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
        {featuredmovie.map((fmovie, index) => (
          <div key={index} className="animate__animated animate__fadeInUp">
            <FeatureMovie fmovie={fmovie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovie;