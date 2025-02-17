import React, { useEffect, useState } from "react";
import FeatureMovie from "../FeatureMovie/FeatureMovie";

const FeaturedMovie = () => {
  const [featuredmovie, setfeaturedmovie] = useState([]);
  useEffect(() => {
    fetch("https://movie-nest-website-server.vercel.app/movie")
      .then((res) => res.json())

      .then((data) => setfeaturedmovie(data));
  }, []);
  return (
    <div>
      Featured Movie: {featuredmovie.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
        {featuredmovie.map((fmovie,index) => (
          <FeatureMovie key={fmovie.index} fmovie={fmovie}></FeatureMovie>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovie;
